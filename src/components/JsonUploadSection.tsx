import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { ALL_30_CHAPTERS } from '../data/chaptersData';
import { syncAllChaptersToCloud, syncAll30ChaptersFromMasterToCloud } from '../lib/firebase';
import { getCustomQuestions, deleteCustomQuestionsByIds, clearAllCustomQuestions, getAllQuestions, saveAllCustomQuestions } from '../lib/storage';
import { 
  FileJson, 
  Upload, 
  Cloud, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Database,
  FolderPlus,
  RefreshCw,
  Clipboard,
  Code2,
  Zap,
  Trash2,
  Undo2,
  RotateCcw,
  ListFilter,
  CheckSquare,
  Square,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  FileText,
  Download,
  Sparkles,
  FileType
} from 'lucide-react';

interface JsonUploadSectionProps {
  questions: Question[];
  onAddMultipleQuestions: (newQs: Question[]) => void;
  onRefreshQuestions?: () => void;
  defaultChapterId?: number;
  onSuccess?: () => void;
}

export const JsonUploadSection: React.FC<JsonUploadSectionProps> = ({
  questions,
  onAddMultipleQuestions,
  onRefreshQuestions,
  defaultChapterId,
  onSuccess
}) => {
  // Use ALL_30_CHAPTERS directly in the exact order as dashboard
  const sortedChapters = ALL_30_CHAPTERS;

  // Helper to clean duplicate "प्रकरण X:" and "Chapter X:" prefixes
  const cleanChapterTitleMr = (ch: typeof ALL_30_CHAPTERS[0]) => {
    return ch.titleMr.replace(/^प्रकरण\s*[\d१-९०]+:\s*/i, '').trim();
  };

  const cleanChapterTitleEn = (ch: typeof ALL_30_CHAPTERS[0]) => {
    return ch.title.replace(/^Chapter\s*\d+:\s*/i, '').trim();
  };

  // Default selected chapter
  const initialChapter = defaultChapterId 
    ? sortedChapters.find(c => c.id === defaultChapterId) || sortedChapters[0]
    : sortedChapters[0];

  const [selectedChapterId, setSelectedChapterId] = useState<number>(initialChapter.id);
  const [uploadMode, setUploadMode] = useState<'file' | 'paste' | 'pdf'>('file');
  const [pastedJsonText, setPastedJsonText] = useState<string>('');
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // PDF to MCQ Extractor state
  const [isPdfProcessing, setIsPdfProcessing] = useState<boolean>(false);
  const [pdfExtractedQuestions, setPdfExtractedQuestions] = useState<Question[]>([]);
  const [pdfFileName, setPdfFileName] = useState<string>('');

  // Custom Questions Management State
  const [customQuestionsList, setCustomQuestionsList] = useState<Question[]>(() => getCustomQuestions());
  const [lastImportedIds, setLastImportedIds] = useState<number[]>([]);
  const [selectedDeleteIds, setSelectedDeleteIds] = useState<Set<number | string>>(new Set());
  const [showManagePanel, setShowManagePanel] = useState<boolean>(false);

  useEffect(() => {
    setCustomQuestionsList(getCustomQuestions());
  }, [questions]);

  const selectedChapter = sortedChapters.find(c => c.id === selectedChapterId) || sortedChapters[0];

  // Helper to determine batchId consistently
  const getBatchIdForQuestion = (q: Question) => {
    return q.batchId || (q.importedAt ? `imported_${q.importedAt}` : 'legacy_batch');
  };

  // Group custom questions by batchId
  const batchGroups = React.useMemo(() => {
    const map = new Map<string, { batchId: string; batchName: string; importedAt: string; count: number; ids: (number | string)[]; chapterId?: number }>();
    
    customQuestionsList.forEach(q => {
      const bId = getBatchIdForQuestion(q);
      const bName = q.batchName || `कस्टम अपलोड बॅच (Chapter ${q.source_page || 'N/A'})`;
      const timeStr = q.importedAt || 'वेळ उपलब्ध नाही';
      
      if (!map.has(bId)) {
        map.set(bId, {
          batchId: bId,
          batchName: bName,
          importedAt: timeStr,
          count: 0,
          ids: [],
          chapterId: q.source_page
        });
      }
      const entry = map.get(bId)!;
      entry.count += 1;
      entry.ids.push(q.id);
    });

    return Array.from(map.values());
  }, [customQuestionsList]);

  // Robust parser for JSON or CSV/TSV input
  const parseInputContent = (rawText: string): any[] => {
    const trimmed = rawText.trim();
    if (!trimmed) return [];

    // 1. Try standard JSON parse
    try {
      const parsed = JSON.parse(trimmed);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch (firstErr) {
      // 2. Try JSON with common syntax fixes (single quotes, trailing commas)
      try {
        const sanitized = trimmed
          .replace(/'/g, '"')
          .replace(/,\s*([\]}])/g, '$1');
        const parsed = JSON.parse(sanitized);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        // 3. Fallback: Parse CSV / TSV if content starts with text/headers like "ChapterId,..." or "Question,..."
        const lines = trimmed.split(/\r?\n/).filter(line => line.trim().length > 0);
        if (lines.length > 0) {
          const delimiter = lines[0].includes('\t') ? '\t' : ',';
          const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^"|"$/g, '').toLowerCase());
          
          const isCsvHeader = headers.some(h => 
            h.includes('question') || h.includes('chapter') || h.includes('option') || h.includes('correct') || h.includes('id')
          );

          if (isCsvHeader || lines.length >= 1) {
            const result: any[] = [];
            const startIndex = isCsvHeader ? 1 : 0;

            for (let i = startIndex; i < lines.length; i++) {
              const line = lines[i].trim();
              if (!line) continue;
              
              const rowValues: string[] = [];
              let inQuotes = false;
              let currentVal = '';
              for (let c = 0; c < line.length; c++) {
                const char = line[c];
                if (char === '"') {
                  inQuotes = !inQuotes;
                } else if (char === delimiter && !inQuotes) {
                  rowValues.push(currentVal.trim().replace(/^"|"$/g, ''));
                  currentVal = '';
                } else {
                  currentVal += char;
                }
              }
              rowValues.push(currentVal.trim().replace(/^"|"$/g, ''));

              const obj: Record<string, any> = {};
              headers.forEach((h, index) => {
                if (rowValues[index] !== undefined) {
                  obj[h] = rowValues[index];
                }
              });

              const qText = obj.question || obj.question_mr || obj.q || rowValues[1] || rowValues[0] || 'Imported Question';
              const optA = obj.optiona || obj.option_a || obj['option a'] || obj.opt1 || rowValues[2] || '';
              const optB = obj.optionb || obj.option_b || obj['option b'] || obj.opt2 || rowValues[3] || '';
              const optC = obj.optionc || obj.option_c || obj['option c'] || obj.opt3 || rowValues[4] || '';
              const optD = obj.optiond || obj.option_d || obj['option d'] || obj.opt4 || rowValues[5] || '';
              const options = [optA, optB, optC, optD].filter(Boolean);

              if (qText) {
                result.push({
                  id: obj.id || obj.chapterid ? Number(obj.id || obj.chapterid) : undefined,
                  question: qText,
                  question_mr: obj.question_mr || qText,
                  options: options.length >= 2 ? options : undefined,
                  correct_answer: obj.correct_answer || obj.correctanswer || obj.answer || (options[0] || 'Option 1'),
                  explanation: obj.explanation || '',
                  explanation_mr: obj.explanation_mr || obj.explanation || ''
                });
              }
            }

            if (result.length > 0) {
              return result;
            }
          }
        }

        throw new Error('अवैध JSON / CSV स्वरूप. कृपया वैध JSON किंवा CSV फॉरमॅट वापरा.');
      }
    }
  };

  // Helper function to process parsed JSON objects array
  const processAndImportQuestions = async (jsonArray: any[]) => {
    if (jsonArray.length === 0) {
      setErrorMessage('JSON मध्ये कोणतेही प्रश्न आढळले नाहीत. कृपया योग्य डेटा तपासा.');
      setIsSyncing(false);
      return;
    }

    const targetCategoryTitle = selectedChapter.title;
    const currentBatchId = `batch_${Date.now()}`;
    const currentImportedAt = new Date().toLocaleString('mr-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
    const currentBatchName = `प्रकरण ${selectedChapter.id}: ${cleanChapterTitleMr(selectedChapter)} (${jsonArray.length} Qs)`;

    // Map and format each question into the target chapter category
    const formattedQuestions: Question[] = jsonArray.map((q: any, idx: number) => ({
      id: q.id || (Date.now() * 10000 + idx + Math.floor(Math.random() * 10000000)),
      category: selectedChapter.title,
      section: q.section || 'technical',
      question: q.question || 'Imported Question',
      question_mr: q.question_mr || q.question,
      options: Array.isArray(q.options) ? q.options : ['(A) Option 1', '(B) Option 2', '(C) Option 3', '(D) Option 4'],
      options_mr: Array.isArray(q.options_mr) ? q.options_mr : undefined,
      correct_answer: q.correct_answer || (q.options ? q.options[0] : '(A) Option 1'),
      correct_answer_mr: q.correct_answer_mr || q.correct_answer,
      explanation: q.explanation || `Imported into ${selectedChapter.title}`,
      explanation_mr: q.explanation_mr || `प्रकरण ${selectedChapter.id} मधील सराव प्रश्न.`,
      source_page: q.source_page || selectedChapter.id,
      chapterId: q.chapterId || selectedChapter.id,
      difficulty: q.difficulty || 'medium',
      isCustom: true,
      batchId: currentBatchId,
      importedAt: currentImportedAt,
      batchName: currentBatchName,
    }));

    // Save batch IDs for undo/revert
    const newBatchIds = formattedQuestions.map(q => q.id);
    setLastImportedIds(newBatchIds);

    // 1. Add to local questions & storage
    onAddMultipleQuestions(formattedQuestions);
    setCustomQuestionsList(getCustomQuestions());

    // 2. Combine current questions + newly formatted ones for cloud sync
    const updatedFullList = [...questions, ...formattedQuestions];

    // 3. Auto-sync to Cloud (Firestore public_mcqs / Supabase)
    const cloudResult = await syncAllChaptersToCloud(updatedFullList);

    if (cloudResult.success) {
      setStatusMessage(
        `अतिउत्कृष्ट! ${formattedQuestions.length} प्रश्न "${cleanChapterTitleMr(selectedChapter)}" मध्ये समाविष्ट झाले आणि सुपाबेस/क्लाउडवर रिअल-टाईम सिंक (Sync) झाले!`
      );
    } else {
      setStatusMessage(
        `यशस्वी! ${formattedQuestions.length} प्रश्न लोकल स्टोरेजमध्ये जोडले गेले. (क्लाउड सिंक ऑफलाइन: ${cloudResult.error || 'पेंडिंग'})`
      );
    }

    if (onSuccess) onSuccess();
  };

  // Handle JSON file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatusMessage(null);
    setErrorMessage(null);
    setIsSyncing(true);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const rawContent = event.target?.result as string;
        const parsedArray = parseInputContent(rawContent);
        await processAndImportQuestions(parsedArray);
      } catch (err: any) {
        console.error(err);
        setErrorMessage(err?.message || 'JSON / CSV फाईल वाचताना त्रुटी आली. कृपया फाईल मधील फॉरमॅट तपासा.');
      } finally {
        setIsSyncing(false);
        e.target.value = '';
      }
    };

    reader.readAsText(file);
  };

  // Handle Pasted JSON Text submission
  const handlePastedJsonSubmit = async () => {
    if (!pastedJsonText.trim()) {
      setErrorMessage('कृपया बॉक्स मध्ये JSON किंवा CSV डेटा पेस्ट करा.');
      return;
    }

    setStatusMessage(null);
    setErrorMessage(null);
    setIsSyncing(true);

    try {
      const parsedArray = parseInputContent(pastedJsonText);
      await processAndImportQuestions(parsedArray);
      setPastedJsonText('');
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.message || 'पेस्ट केलेल्या डेटा मधील फॉरमॅट चुकीचा आहे. कृपया वैध JSON किंवा CSV फॉरमॅट वापरा.');
    } finally {
      setIsSyncing(false);
    }
  };

  // PDF to MCQ Conversion & Upload Handler
  const handlePdfFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      setErrorMessage('कृपया फक्त वैध PDF (.pdf) फाईल अपलोड करा.');
      return;
    }

    setPdfFileName(file.name);
    setIsPdfProcessing(true);
    setStatusMessage(`'${file.name}' PDF फाईलमधून MCQ प्रश्न एक्सट्रॅक्ट आणि वेबसाईट-सुसंगत JSON मध्ये रुपांतरित केले जात आहेत...`);
    setErrorMessage(null);
    setPdfExtractedQuestions([]);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const result = reader.result as string;
          const base64Data = result.split(',')[1];

          const response = await fetch('/api/ai/parse-pdf-mcqs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              pdfBase64: base64Data,
              category: selectedChapter.title,
              chapterId: selectedChapter.id
            })
          });

          const data = await response.json();
          if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
            const formatted: Question[] = data.questions.map((q: any, idx: number) => ({
              ...q,
              id: Date.now() + idx,
              source_page: selectedChapter.id,
              category: q.category || selectedChapter.title,
              section: 'technical',
              importedAt: new Date().toLocaleString('mr-IN'),
              batchId: `batch_pdf_${Date.now()}`,
              batchName: `PDF (${file.name}) — Chapter ${selectedChapter.id}`,
              isCustom: true
            }));

            setPdfExtractedQuestions(formatted);
            setStatusMessage(`PDF मधून यशस्वीरित्या ${formatted.length} MCQ प्रश्न सुसंगत JSON मध्ये कन्व्हर्ट झाले! खालील 'मर्ज करा' बटणावर क्लिक करा.`);
          } else {
            setErrorMessage(data.error || 'PDF मधून MCQ एक्सट्रॅक्ट करता आले नाहीत. फाईलमध्ये स्पष्ट प्रश्न मजकूर असल्याचे तपासा.');
          }
        } catch (err: any) {
          setErrorMessage('PDF प्रक्रिया करताना त्रुटी: ' + (err.message || String(err)));
        } finally {
          setIsPdfProcessing(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      setErrorMessage('PDF वाचताना त्रुटी: ' + (err.message || String(err)));
      setIsPdfProcessing(false);
    }
  };

  const handleMergePdfQuestions = async () => {
    if (pdfExtractedQuestions.length === 0) return;
    setIsSyncing(true);
    setStatusMessage(`PDF मधील ${pdfExtractedQuestions.length} MCQ प्रश्न सिस्टीममध्ये मर्ज आणि क्लाउड/सुपाबेसवर सिंक होत आहेत...`);

    const updatedCustom = saveAllCustomQuestions([...customQuestionsList, ...pdfExtractedQuestions]);
    setCustomQuestionsList(updatedCustom);
    setLastImportedIds(pdfExtractedQuestions.map(q => Number(q.id)).filter(id => !isNaN(id)));

    onAddMultipleQuestions(pdfExtractedQuestions);
    if (onRefreshQuestions) onRefreshQuestions();

    const updatedFullList = getAllQuestions();
    const cloudResult = await syncAllChaptersToCloud(updatedFullList);

    setIsSyncing(false);
    if (cloudResult.success) {
      setStatusMessage(`अभिनंदन! PDF मधील ${pdfExtractedQuestions.length} प्रश्न यशस्वीरित्या मर्ज झाले आणि सुपाबेस/क्लाउडवर लाईव्ह सिंक झाले!`);
      setPdfExtractedQuestions([]);
      setPdfFileName('');
      if (onSuccess) onSuccess();
    } else {
      setErrorMessage('लोकल सेव झाला, पण क्लाउड सिंक करताना त्रुटी: ' + cloudResult.error);
    }
  };

  const handleDownloadPdfJson = () => {
    if (pdfExtractedQuestions.length === 0) return;
    const jsonStr = JSON.stringify(pdfExtractedQuestions, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mcq_extracted_${pdfFileName.replace(/\.pdf$/i, '') || 'pdf'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Admin Dashboard: Iterates through all 30 local chapter files and uses Supabase/Cloud upsert to sync all questions at once
  const handleManualCloudSync = async () => {
    setIsSyncing(true);
    setStatusMessage(null);
    setErrorMessage(null);

    const result = await syncAll30ChaptersFromMasterToCloud(questions);
    if (result.success) {
      setStatusMessage(
        `यशस्वी! सर्व ३० लोकल चॅप्टर फाइल्समधील एकूण ${result.totalSynced} प्रश्न सुपाबेस/क्लाउड डेटाबेस (mcqs table) वर एकाच वेळी अपसर्ट (Upsert/Sync) झाले आहेत!`
      );
    } else {
      setErrorMessage(`क्लाउड अपसर्ट सिंक अयशस्वी: ${result.error || 'नेटवर्क किंवा परवानगी त्रुटी'}`);
    }
    setIsSyncing(false);
  };

  // Revert / Undo Last Imported Batch
  const handleUndoLastBatch = async () => {
    if (lastImportedIds.length === 0) return;
    setIsSyncing(true);
    deleteCustomQuestionsByIds(lastImportedIds);
    const updatedCustom = getCustomQuestions();
    setCustomQuestionsList(updatedCustom);
    setStatusMessage(`मागील बॅचमधील एकूण ${lastImportedIds.length} प्रश्न यशस्वीरित्या रिमूव्ह / रोलबॅक (Delete) करण्यात आले!`);
    setLastImportedIds([]);
    
    if (onRefreshQuestions) onRefreshQuestions();

    // Re-sync cleaned question list to cloud
    const updatedFullList = getAllQuestions();
    await syncAllChaptersToCloud(updatedFullList);
    setIsSyncing(false);
    if (onSuccess) onSuccess();
  };

  // Delete Specific Upload Batch by timestamp/batchId
  const handleDeleteBatch = async (targetBatchId: string) => {
    const actualToDelete = customQuestionsList.filter(
      q => getBatchIdForQuestion(q) === targetBatchId
    );
    if (actualToDelete.length === 0) return;

    if (!window.confirm(`तुम्हाला ही अपलोड बॅच (${actualToDelete.length} प्रश्न) नक्की डिलीट करायची आहे का? यामुळे इतर बॅचचे प्रश्न आणि चॅप्टर सुरक्षित राहतील.`)) {
      return;
    }

    setIsSyncing(true);
    const idsToRemove = actualToDelete.map(q => q.id);
    deleteCustomQuestionsByIds(idsToRemove);
    const updatedCustom = getCustomQuestions();
    setCustomQuestionsList(updatedCustom);
    setStatusMessage(`अपलोड बॅच (${actualToDelete.length} प्रश्न) यशस्वीरित्या डिलीट करण्यात आली.`);

    if (onRefreshQuestions) onRefreshQuestions();

    const updatedFullList = getAllQuestions();
    await syncAllChaptersToCloud(updatedFullList);
    setIsSyncing(false);
    if (onSuccess) onSuccess();
  };

  // Delete Custom Questions for Currently Selected Chapter
  const handleDeleteSelectedChapterCustomQuestions = async () => {
    const targetCat = selectedChapter.title;
    const targetId = selectedChapter.id;
    const toDelete = customQuestionsList.filter(
      q => Number(q.source_page) === targetId || Number(q.chapterId) === targetId || q.category === targetCat
    );

    if (toDelete.length === 0) {
      setErrorMessage(`Chapter ${selectedChapter.id} मधील कोणतेही कस्टम जोडलेले प्रश्न सापडले नाहीत.`);
      return;
    }

    if (!window.confirm(`तुम्हाला Chapter ${selectedChapter.id} मधील सर्व ${toDelete.length} कस्टम प्रश्न नक्की डिलीट करायचे आहेत का?`)) {
      return;
    }

    setIsSyncing(true);
    const idsToRemove = toDelete.map(q => q.id);
    deleteCustomQuestionsByIds(idsToRemove);
    const updatedCustom = getCustomQuestions();
    setCustomQuestionsList(updatedCustom);
    setStatusMessage(`Chapter ${selectedChapter.id} मधील ${idsToRemove.length} कस्टम प्रश्न डिलीट झाले.`);
    
    if (onRefreshQuestions) onRefreshQuestions();

    const updatedFullList = getAllQuestions();
    await syncAllChaptersToCloud(updatedFullList);
    setIsSyncing(false);
    if (onSuccess) onSuccess();
  };

  // Bulk Delete Checked Custom Questions
  const handleDeleteCheckedCustomQuestions = async () => {
    if (selectedDeleteIds.size === 0) return;
    const idsArray: (number | string)[] = Array.from(selectedDeleteIds);

    if (!window.confirm(`तुम्हाला निवडलेले ${idsArray.length} प्रश्न नक्की डिलीट करायचे आहेत का?`)) {
      return;
    }

    setIsSyncing(true);
    deleteCustomQuestionsByIds(idsArray);
    const updatedCustom = getCustomQuestions();
    setCustomQuestionsList(updatedCustom);
    setSelectedDeleteIds(new Set());
    setStatusMessage(`निवडलेले ${idsArray.length} प्रश्न यशस्वीरित्या डिलीट झाले.`);

    if (onRefreshQuestions) onRefreshQuestions();

    const updatedFullList = getAllQuestions();
    await syncAllChaptersToCloud(updatedFullList);
    setIsSyncing(false);
    if (onSuccess) onSuccess();
  };

  // Restore Default Bank / Clear ALL Custom Questions
  const handleClearAllCustom = async () => {
    if (customQuestionsList.length === 0) {
      setStatusMessage('कोणतेही कस्टम जोडलेले प्रश्न नाहीत. सिस्टीम आधीच मूळ प्रश्न बँकेवर आहे.');
      return;
    }

    if (!window.confirm(`⚠️ सावधगिरी: सर्व ${customQuestionsList.length} कस्टम जोडलेले प्रश्न डिलीट होतील आणि मूळ २५००+ प्रश्न बँक पूर्ववत (Reset) होईल. तुम्हाला पुढे जायचे आहे का?`)) {
      return;
    }

    setIsSyncing(true);
    clearAllCustomQuestions();
    setCustomQuestionsList([]);
    setLastImportedIds([]);
    setSelectedDeleteIds(new Set());
    setStatusMessage('सर्व कस्टम प्रश्न मिटवले गेले. सिस्टीम मूळ प्रश्न बँकेवर यशस्वीरित्या पूर्ववत (Restore) झाली.');

    if (onRefreshQuestions) onRefreshQuestions();

    await syncAll30ChaptersFromMasterToCloud([]);
    setIsSyncing(false);
    if (onSuccess) onSuccess();
  };

  // Toggle individual question checkbox
  const toggleSelectDelete = (id: number) => {
    const next = new Set(selectedDeleteIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedDeleteIds(next);
  };

  // Toggle all checkboxes
  const toggleSelectAllDelete = () => {
    if (selectedDeleteIds.size === customQuestionsList.length) {
      setSelectedDeleteIds(new Set());
    } else {
      setSelectedDeleteIds(new Set(customQuestionsList.map(q => q.id)));
    }
  };

  return (
    <div className="bg-slate-900 border border-teal-500/30 rounded-2xl p-5 sm:p-6 space-y-5 text-slate-100 shadow-xl">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center shrink-0">
            <FileJson className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>डायरेक्ट JSON अपलोड / कॉपी-पेस्ट व ३० चॅप्टर्स ऑटो-सिंक</span>
            </h3>
            <p className="text-xs text-slate-400">
              .JSON फाईल अपलोड करा किंवा डायरेक्ट JSON कोड कॉपी-पेस्ट करून टार्गेट चॅप्टरमध्ये जोडा आणि सुपाबेस क्लाउडवर रिअल-टाईम सिंक करा.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleManualCloudSync}
          disabled={isSyncing}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-teal-400 to-emerald-400 hover:brightness-110 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer disabled:opacity-50 border border-teal-300/50"
          title="सर्व ३० लोकल चॅप्टर फाइल्स एकत्र घेऊन सुपाबेस/क्लाउडवर Upsert व सिंक करा"
        >
          {isSyncing ? (
            <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
          ) : (
            <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
          )}
          <span>Sync All 30 Chapters to Supabase (Upsert)</span>
        </button>
      </div>

      {/* Admin Dashboard Bulk Upsert Info Card */}
      <div className="bg-slate-950/90 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
        <div className="flex items-start gap-2.5">
          <Database className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-amber-300 flex items-center gap-1.5">
              <span>⚡ Admin Bulk Upsert Function: 30 Local Chapters Sync</span>
            </h4>
            <p className="text-[11px] text-slate-300 mt-0.5">
              सर्व ३० चॅप्टर फाइल्समधून (Chapters 1-30) प्रश्न आपोआप रीड करून सुपाबेस/क्लाउड <code className="text-teal-300 font-mono">public_mcqs</code> टेबलवर एकाच वेळी <b>Upsert</b> केले जातात.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleManualCloudSync}
          disabled={isSyncing}
          className="w-full sm:w-auto shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-3.5 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
          <span>Execute Bulk Upsert Now</span>
        </button>
      </div>

      {/* Target Chapter Folder Selection Dropdown - Clean Single Line Titles */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
          <FolderPlus className="w-4 h-4 text-amber-400" />
          <span>१. Upload Target Chapter Folder निवडा (Chapter 1 to 30 Target):</span>
        </label>
        <div className="relative">
          <select
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(Number(e.target.value))}
            className="w-full bg-slate-950 border border-teal-500/40 text-slate-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold focus:outline-none focus:border-amber-400 shadow-inner cursor-pointer"
          >
            {sortedChapters.map((ch) => (
              <option key={ch.id} value={ch.id} className="bg-slate-900 text-slate-100 py-1">
                {ch.titleMr} — {ch.title}
              </option>
            ))}
          </select>
        </div>
        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-center justify-between">
          <span>
            निवडलेले टार्गेट चॅप्टर: <strong className="text-teal-300">{selectedChapter.titleMr}</strong> ({selectedChapter.title})
          </span>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            {selectedChapter.part}
          </span>
        </div>
      </div>

      {/* Mode Selection Tabs (File Upload vs Direct Copy-Paste) */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-teal-400" />
            <span>२. JSON इनपुट पद्धत निवडा (Input Mode):</span>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setUploadMode('file')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              uploadMode === 'file'
                ? 'bg-teal-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>📁 Choose .JSON File</span>
          </button>

          <button
            type="button"
            onClick={() => setUploadMode('paste')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              uploadMode === 'paste'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Clipboard className="w-4 h-4" />
            <span>📋 Copy-Paste JSON</span>
          </button>

          <button
            type="button"
            onClick={() => setUploadMode('pdf')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              uploadMode === 'pdf'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow font-black'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <FileType className="w-4 h-4" />
            <span>📄 Upload .PDF (AI MCQ)</span>
          </button>
        </div>

        {/* MODE 1: Direct File Upload */}
        {uploadMode === 'file' && (
          <div className="relative border-2 border-dashed border-teal-500/40 hover:border-amber-400 bg-slate-950/60 rounded-2xl p-6 text-center transition-all group">
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleFileUpload}
              disabled={isSyncing}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                {isSyncing ? (
                  <Loader2 className="w-6 h-6 animate-spin text-teal-400" />
                ) : (
                  <FileJson className="w-6 h-6 text-teal-300" />
                )}
              </div>
              <div>
                <p className="text-sm font-extrabold text-white flex items-center justify-center gap-1.5">
                  <span>📁 Select .JSON File</span>
                  <span className="text-xs font-normal text-teal-400">(तात्काळ सिस्टीममध्ये लोड होईल)</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  मोबाईल किंवा संगणकावरून कोणतीही MCQ .json फाईल निवडा.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: Direct Copy-Paste JSON Area */}
        {uploadMode === 'paste' && (
          <div className="space-y-3 bg-slate-950/80 p-4 rounded-2xl border border-amber-500/30">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-amber-300 flex items-center gap-1">
                <Clipboard className="w-3.5 h-3.5" />
                <span>खालील बॉक्समध्ये JSON कोड डायरेक्ट पेस्ट करा (Paste Raw JSON Code):</span>
              </label>
              <button
                type="button"
                onClick={() => setPastedJsonText('')}
                className="text-[10px] text-slate-400 hover:text-rose-400 underline"
              >
                Clear Box
              </button>
            </div>

            <textarea
              value={pastedJsonText}
              onChange={(e) => setPastedJsonText(e.target.value)}
              placeholder={`[\n  {\n    "question": "X-ray Tube Target Angle range is?",\n    "question_mr": "एक्स-रे ट्यूब टार्गेट अँगल किती असतो?",\n    "options": ["(A) 7 to 20 degree", "(B) 30 to 45 degree", "(C) 50 to 60 degree", "(D) 90 degree"],\n    "correct_answer": "(A) 7 to 20 degree",\n    "explanation": "Standard target angle is 7-20 deg."\n  }\n]`}
              rows={8}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs font-mono text-teal-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 shadow-inner"
            />

            <button
              type="button"
              onClick={handlePastedJsonSubmit}
              disabled={isSyncing || !pastedJsonText.trim()}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold py-3 px-4 rounded-xl text-xs shadow-md disabled:opacity-50 transition-all cursor-pointer"
            >
              {isSyncing ? (
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
              ) : (
                <Upload className="w-4 h-4 text-slate-950" />
              )}
              <span>पेस्ट केलेले प्रश्न जोडा आणि सुपाबेसवर सिंक करा (Import & Sync Pasted JSON)</span>
            </button>
          </div>
        )}

        {/* MODE 3: PDF File to MCQ JSON Converter */}
        {uploadMode === 'pdf' && (
          <div className="space-y-4 bg-slate-950/80 p-4 rounded-2xl border border-cyan-500/40">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>PDF फाईलवरून AI द्वारे MCQ JSON बनवा आणि मर्ज करा:</span>
              </label>
              {pdfExtractedQuestions.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setPdfExtractedQuestions([]);
                    setPdfFileName('');
                  }}
                  className="text-[10px] text-slate-400 hover:text-rose-400 underline"
                >
                  Clear PDF Data
                </button>
              )}
            </div>

            {/* File Dropzone */}
            <div className="relative border-2 border-dashed border-cyan-500/50 hover:border-cyan-400 bg-slate-900/80 rounded-2xl p-6 text-center transition-all group cursor-pointer">
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handlePdfFileUpload}
                disabled={isPdfProcessing || isSyncing}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {isPdfProcessing ? (
                    <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
                  ) : (
                    <FileType className="w-6 h-6 text-cyan-300" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white flex items-center justify-center gap-1.5">
                    <span>📄 Select PDF (.pdf) File</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 max-w-md mx-auto">
                    MCQ ची PDF फाईल अपलोड करा. सिस्टीम त्यातील प्रश्न आपोआप एक्सट्रॅक्ट करून वेबसाईट सुसंगत (Compatible) JSON तयार करेल.
                  </p>
                </div>
              </div>
            </div>

            {/* Processing Spinner Indicator */}
            {isPdfProcessing && (
              <div className="p-4 bg-cyan-950/60 border border-cyan-500/30 rounded-xl flex items-center justify-center gap-3 text-xs text-cyan-200 animate-pulse">
                <Loader2 className="w-5 h-5 animate-spin text-cyan-400" />
                <span>PDF फाईलमधून MCQ प्रश्न एक्सट्रॅक्ट आणि सुसंगत JSON मध्ये रुपांतर होत आहे, कृपया प्रतीक्षा करा...</span>
              </div>
            )}

            {/* Extracted JSON Preview & Actions */}
            {pdfExtractedQuestions.length > 0 && !isPdfProcessing && (
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl flex items-center justify-between text-xs text-emerald-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="font-bold">PDF एक्सट्रॅक्ट पूर्ण झाले!</p>
                      <p className="text-[11px] text-emerald-300/80">
                        फाईल: <span className="font-mono underline">{pdfFileName}</span> | एक्सट्रॅक्ट केलेले MCQs: <strong>{pdfExtractedQuestions.length}</strong>
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-900 text-emerald-200 px-2 py-1 rounded">
                    Chapter {selectedChapter.id}
                  </span>
                </div>

                {/* Formatted JSON Preview Box */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                    <span>वेबसाईट सुसंगत बनवलेली JSON फाईल (Compatible JSON Output):</span>
                    <span>{pdfExtractedQuestions.length} Items</span>
                  </div>
                  <textarea
                    readOnly
                    value={JSON.stringify(pdfExtractedQuestions, null, 2)}
                    rows={7}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-[11px] font-mono text-cyan-300 focus:outline-none shadow-inner select-all"
                  />
                </div>

                {/* Buttons: Merge to Bank + Download JSON */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleMergePdfQuestions}
                    disabled={isSyncing}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-extrabold py-3 px-4 rounded-xl text-xs shadow-lg transition-all cursor-pointer"
                  >
                    {isSyncing ? (
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    ) : (
                      <Upload className="w-4 h-4 text-slate-950" />
                    )}
                    <span>मर्ज करा आणि सिंक करा (Merge to Bank)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadPdfJson}
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold py-3 px-4 rounded-xl text-xs border border-slate-700 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>JSON फाईल डाऊनलोड करा (.json)</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* REVERT / UNDO / BULK DELETE MANAGEMENT SECTION */}
      <div className="pt-2 border-t border-slate-800 space-y-4">
        {/* Timestamp Batch Deletion Manager Card */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-teal-500/30 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-teal-300">
            <span className="flex items-center gap-1.5">
              <Database className="w-4 h-4 text-teal-400" />
              <span>अपलोड बॅचेस इतिहास व टाईमनुसार डिलीट (Timestamp Batch Deletion)</span>
            </span>
            <span className="text-[10px] bg-teal-950 text-teal-300 font-mono px-2 py-0.5 rounded border border-teal-500/30">
              एकूण बॅचेस: {batchGroups.length}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            ज्या वेळेला जे प्रश्न जोडले होते, त्या विशिष्ट बॅचची तारीख, वेळ आणि प्रश्नसंख्या खाली दिसेल. फक्त एका क्लिकवर संबंधित बॅच डिलीट करू शकता.
          </p>

          {batchGroups.length > 0 ? (
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {batchGroups.map((batch) => (
                <div 
                  key={batch.batchId}
                  className="p-3 bg-slate-900 border border-slate-800 hover:border-teal-500/40 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs transition-all"
                >
                  <div className="space-y-1">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="text-amber-300 font-mono">📅 {batch.importedAt}</span>
                      <span className="bg-teal-950 text-teal-300 text-[10px] px-2 py-0.5 rounded border border-teal-500/30">
                        {batch.count} प्रश्न
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300">
                      {batch.batchName}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteBatch(batch.batchId)}
                    disabled={isSyncing}
                    className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 shrink-0 cursor-pointer disabled:opacity-50"
                    title="ही बॅच डिलीट करा"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>🗑️ ही बॅच डिलीट करा</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-6 text-center text-xs text-slate-500 italic">
              कोणत्याही अपलोड बॅचेस सापडल्या नाहीत. नवीन JSON/CSV अपलोड केल्यावर येथे बॅच इतिहास दिसेल.
            </div>
          )}
        </div>

        {/* Undo Last Batch Quick Action Banner */}
        {lastImportedIds.length > 0 && (
          <div className="bg-rose-950/40 border border-rose-500/40 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-center gap-2.5">
              <Undo2 className="w-5 h-5 text-rose-400 shrink-0" />
              <div>
                <span className="text-xs font-extrabold text-rose-300">
                  मागील अपलोड बॅच रोलबॅक करा (Undo Last Import Batch)
                </span>
                <p className="text-[11px] text-slate-300">
                  नुकतेच जोडलेले <b>{lastImportedIds.length} प्रश्न</b> चुकीचे असल्यास लगेच डिलीट/रोलबॅक करा.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleUndoLastBatch}
              disabled={isSyncing}
              className="w-full sm:w-auto shrink-0 bg-rose-500 hover:bg-rose-400 text-slate-950 font-extrabold px-3.5 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer disabled:opacity-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>रिव्हर्ट/डिलीट करा ({lastImportedIds.length} Qs)</span>
            </button>
          </div>
        )}

        {/* Toggle Bulk Management Panel Button */}
        <div className="flex items-center justify-between bg-slate-950/70 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
            <ListFilter className="w-4 h-4 text-amber-400" />
            <span>अपलोड केलेले प्रश्न व्यवस्थापन व बलक डिलीट पर्याय (Bulk Delete & Restore)</span>
            <span className="bg-teal-950 text-teal-300 font-mono text-[10px] px-2 py-0.5 rounded border border-teal-500/20">
              कस्टम प्रश्न: {customQuestionsList.length}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowManagePanel(!showManagePanel)}
            className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-bold bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30"
          >
            <span>{showManagePanel ? 'पॅनेल लपवा' : 'पॅनेल उघडा'}</span>
            {showManagePanel ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expandable Manage Panel */}
        {showManagePanel && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-4 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <span className="text-xs font-extrabold text-amber-300 flex items-center gap-1.5">
                <Trash2 className="w-4 h-4 text-rose-400" />
                <span>बलक डिलीट व रेस्टोर ऑप्शन्स (Bulk Delete Actions):</span>
              </span>

              <div className="flex flex-wrap items-center gap-2">
                {/* Delete Current Selected Chapter Custom Qs */}
                <button
                  type="button"
                  onClick={handleDeleteSelectedChapterCustomQuestions}
                  disabled={isSyncing || customQuestionsList.length === 0}
                  className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 cursor-pointer disabled:opacity-40"
                >
                  <Trash2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Chapter {selectedChapter.id} मधील कस्टम Qs डिलीट करा</span>
                </button>

                {/* Clear All Custom Questions & Restore Default Bank */}
                <button
                  type="button"
                  onClick={handleClearAllCustom}
                  disabled={isSyncing || customQuestionsList.length === 0}
                  className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-[11px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 cursor-pointer disabled:opacity-40"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                  <span>सर्व कस्टम प्रश्न मिटवा (Restore Master Bank)</span>
                </button>
              </div>
            </div>

            {/* Custom Questions List Table / Checkboxes */}
            {customQuestionsList.length > 0 ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                  <button
                    type="button"
                    onClick={toggleSelectAllDelete}
                    className="flex items-center gap-1.5 text-teal-300 font-bold hover:underline"
                  >
                    {selectedDeleteIds.size === customQuestionsList.length ? (
                      <CheckSquare className="w-4 h-4 text-teal-400" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-500" />
                    )}
                    <span>सर्व सिलेक्ट करा ({selectedDeleteIds.size}/{customQuestionsList.length})</span>
                  </button>

                  {selectedDeleteIds.size > 0 && (
                    <button
                      type="button"
                      onClick={handleDeleteCheckedCustomQuestions}
                      disabled={isSyncing}
                      className="bg-rose-500 hover:bg-rose-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs flex items-center gap-1 shadow cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>निवडलेले {selectedDeleteIds.size} प्रश्न डिलीट करा</span>
                    </button>
                  )}
                </div>

                <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1">
                  {customQuestionsList.map((q, i) => (
                    <div
                      key={`${q.id}_${i}`}
                      className={`p-2.5 rounded-xl border text-xs flex items-start justify-between gap-2.5 transition-all ${
                        selectedDeleteIds.has(q.id)
                          ? 'bg-rose-950/30 border-rose-500/40'
                          : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <button
                          type="button"
                          onClick={() => toggleSelectDelete(q.id)}
                          className="mt-0.5 text-slate-400 hover:text-white"
                        >
                          {selectedDeleteIds.has(q.id) ? (
                            <CheckSquare className="w-4 h-4 text-teal-400 shrink-0" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-600 shrink-0" />
                          )}
                        </button>
                        <div>
                          <div className="font-bold text-slate-200 line-clamp-1">
                            #{i + 1}. {q.question_mr || q.question}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2 mt-0.5">
                            <span>Chapter: {q.source_page || 'N/A'}</span>
                            <span>• {q.category || 'Custom'}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={async () => {
                          if (window.confirm('हा प्रश्न डिलीट करायचा आहे का?')) {
                            deleteCustomQuestionsByIds([q.id]);
                            setCustomQuestionsList(getCustomQuestions());
                            setStatusMessage('प्रश्न डिलीट झाला.');
                            if (onRefreshQuestions) onRefreshQuestions();
                            const updatedFull = getAllQuestions();
                            await syncAllChaptersToCloud(updatedFull);
                            if (onSuccess) onSuccess();
                          }
                        }}
                        className="p-1 bg-rose-950/60 hover:bg-rose-900 text-rose-300 rounded border border-rose-500/30 shrink-0"
                        title="प्रश्न डिलीट करा"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-6 text-center text-xs text-slate-400 space-y-1">
                <ShieldAlert className="w-6 h-6 text-slate-600 mx-auto" />
                <p>कोणतेही कस्टम जोडलेले प्रश्न आढळले नाहीत.</p>
                <p className="text-[10px] text-slate-500">सिस्टीम मूळ मास्टर प्रश्न बँकेवर सुरक्षित कार्यरत आहे.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Feedback Alerts */}
      {statusMessage && (
        <div className="p-3.5 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-200 text-xs font-semibold flex items-center gap-2.5 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3.5 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-200 text-xs font-semibold flex items-center gap-2.5 animate-fade-in">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
