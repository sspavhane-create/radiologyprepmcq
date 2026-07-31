import React, { useState } from 'react';
import { Question } from '../types';
import { CATEGORIES } from '../data/initialQuestions';
import { ALL_30_CHAPTERS } from '../data/chaptersData';
import { getIsPremiumUnlocked } from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
import { SearchInspectView } from './SearchInspectView';
import { 
  Sparkles, 
  Download, 
  Upload, 
  FileJson, 
  Plus, 
  Database, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  RefreshCw,
  Copy,
  Layers,
  BookOpen,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  Lock,
  Play,
  Key
} from 'lucide-react';

interface QuestionBankGeneratorProps {
  questions: Question[];
  onAddMultipleQuestions: (newQs: Question[]) => void;
  onNavigateTab: (tab: string) => void;
  onAskAITutor?: (question: Question) => void;
}

export const QuestionBankGenerator: React.FC<QuestionBankGeneratorProps> = ({
  questions,
  onAddMultipleQuestions,
  onNavigateTab,
  onAskAITutor
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].name);
  const [batchSize, setBatchSize] = useState<number>(10);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);
  const [activeBookTab, setActiveBookTab] = useState<'generator' | 'chapters' | 'all'>('chapters');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(getIsPremiumUnlocked());
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);

  // Filtered Questions list
  const filteredQuestions = questions.filter(q => {
    const query = searchQuery.toLowerCase();
    return (
      q.question.toLowerCase().includes(query) ||
      (q.question_mr && q.question_mr.includes(query)) ||
      q.category.toLowerCase().includes(query) ||
      q.id.toString() === query
    );
  });

  // Sample JSON schema template
  const sampleJsonTemplate = JSON.stringify([
    {
      "id": 1001,
      "category": "Technical: Radiophysics & Machine Principles",
      "section": "technical",
      "question": "What is the primary factor controlling X-ray beam quality and penetrameter hardness?",
      "question_mr": "क्ष-किरणांची भेदकता (Penetration) व बीमची गुणवत्ता (Quality) प्रामुख्याने कोणत्या घटकावर अवलंबून असते?",
      "options": [
        "(A) Milliampere-seconds (mAs)",
        "(B) Peak Kilovoltage (kVp)",
        "(C) Focal spot size",
        "(D) Exposure time"
      ],
      "options_mr": [
        "(A) मिलीॲम्पिअर-सेकंद (mAs)",
        "(B) पीक किलोव्होल्टेज (kVp)",
        "(C) फोकल स्पॉट साईझ",
        "(D) एक्सपोजर वेळ"
      ],
      "correct_answer": "(B) Peak Kilovoltage (kVp)",
      "correct_answer_mr": "(B) पीक किलोव्होल्टेज (kVp)",
      "explanation": "kVp controls the kinetic energy of accelerated electrons and determines beam penetrability.",
      "explanation_mr": "kVp मुळे इलेक्ट्रॉनची गती ठरते, ज्यामुळे क्ष-किरणांची भेदकता व दर्जा नियंत्रित होतो.",
      "source_page": 45,
      "difficulty": "medium"
    }
  ], null, 2);

  // Bulk Generator Handler
  const handleBulkGenerate = async (customCat?: string) => {
    const catToUse = customCat || selectedCategory;
    setIsGenerating(true);
    setStatusMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/ai/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: catToUse, count: batchSize }),
      });

      const data = await res.json();
      if (data.success && Array.isArray(data.questions)) {
        const generatedList: Question[] = data.questions.map((q: any, idx: number) => ({
          id: Date.now() + idx + Math.floor(Math.random() * 1000),
          category: q.category || catToUse,
          section: 'technical',
          question: q.question,
          question_mr: q.question_mr,
          options: q.options,
          options_mr: q.options_mr,
          correct_answer: q.correct_answer,
          correct_answer_mr: q.correct_answer_mr,
          explanation: q.explanation,
          explanation_mr: q.explanation_mr,
          source_page: q.source_page || 100,
          difficulty: q.difficulty || 'medium',
          isCustom: true,
        }));

        onAddMultipleQuestions(generatedList);
        setStatusMessage(`यशस्वी! ${generatedList.length} नवीन प्रश्न प्रश्नसंचामध्ये जोडले गेले आहेत. (एकूण उपलब्ध प्रश्न: ${questions.length + generatedList.length})`);
      } else {
        setErrorMessage(data.error || 'प्रश्न निर्मिती करताना अडचण आली.');
      }
    } catch (err: any) {
      setErrorMessage('सर्वरशी संपर्क होऊ शकला नाही. कृपया पुन्हा प्रयत्न करा.');
    } finally {
      setIsGenerating(false);
    }
  };

  // JSON Import Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonContent = JSON.parse(event.target?.result as string);
        if (Array.isArray(jsonContent)) {
          const validatedList: Question[] = jsonContent.map((q: any, index: number) => ({
            id: q.id || Date.now() + index,
            category: q.category || 'General Practice',
            section: q.section || 'technical',
            question: q.question || 'Imported Question',
            question_mr: q.question_mr,
            options: Array.isArray(q.options) ? q.options : ['(A) Option 1', '(B) Option 2'],
            options_mr: Array.isArray(q.options_mr) ? q.options_mr : undefined,
            correct_answer: q.correct_answer || (q.options ? q.options[0] : '(A) Option 1'),
            correct_answer_mr: q.correct_answer_mr,
            explanation: q.explanation || 'Imported textbook question.',
            explanation_mr: q.explanation_mr,
            source_page: q.source_page || 1,
            difficulty: q.difficulty || 'medium',
            isCustom: true,
          }));

          onAddMultipleQuestions(validatedList);
          setStatusMessage(`अतिउत्कृष्ट! ${validatedList.length} प्रश्न JSON फायलीमधून जोडले गेले!`);
        } else {
          setErrorMessage('फाईलचा फॉरमॅट अयोग्य आहे. कृपया JSON ॲरे (Array) फॉरमॅट निवडा.');
        }
      } catch (err) {
        setErrorMessage('JSON फाईल वाचताना त्रुटी आली. फाईल मधील सिंटॅक्स तपासा.');
      }
    };
    reader.readAsText(file);
  };

  // Export Question Bank as JSON
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `D_A_Saia_Radiography_PREP_${questions.length}_Questions.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Copy Template
  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(sampleJsonTemplate);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Database className="w-64 h-64 text-teal-400" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            <span>Mr.Shankar Pavhane Radiography Prep (3000+ Questions)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Mr.Shankar Pavhane Radiography Prep - संपूर्ण ३० अध्यायांचे वर्गीकरण
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            सार्वजनिक आरोग्य विभाग क्ष-किरण वैज्ञानिक अधिकारी परीक्षेसाठी सर्व ३० प्रकरणांचे (Chapters 1 to 30) ३०००+ सराव प्रश्न व मराठी भाषांतर समाविष्ट आहे. प्रत्येक प्रकरणाचे पहिले १५ प्रश्न विनामूल्य आहेत.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-xl border border-teal-500/30 text-xs font-semibold text-teal-200">
              <span className="text-slate-400">एकूण प्रश्न बँक:</span>
              <strong className="text-white text-base font-bold">{questions.length} Qs</strong>
            </div>

            <button
              onClick={() => onNavigateTab('quiz')}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-400 hover:brightness-110 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs transition-all shadow-lg shadow-teal-500/20"
            >
              <BookOpen className="w-4 h-4 stroke-[2.5]" />
              <span>सराव चाचणी सुरू करा (Start Quiz)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveBookTab('chapters')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeBookTab === 'chapters'
              ? 'bg-teal-500 text-slate-950 shadow-lg'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>३० अभ्यासक्रम प्रकरणे (All 30 Chapters)</span>
        </button>

        <button
          onClick={() => setActiveBookTab('generator')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeBookTab === 'generator'
              ? 'bg-teal-500 text-slate-950 shadow-lg'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI जनरेटर व JSON इंपोर्ट</span>
        </button>

        <button
          onClick={() => setActiveBookTab('all')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeBookTab === 'all'
              ? 'bg-teal-500 text-slate-950 shadow-lg'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>सर्व प्रश्न यादी (Search & Inspect)</span>
        </button>
      </div>

      {/* Notifications */}
      {statusMessage && (
        <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 rounded-2xl text-emerald-200 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 bg-rose-950/80 border border-rose-500/40 rounded-2xl text-rose-200 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* TAB 1: ALL 30 CHAPTERS INDEX */}
      {activeBookTab === 'chapters' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-400" />
              <span>Mr.Shankar Pavhane Radiography Prep - ३० प्रमुख अध्याय अभ्यासक्रम</span>
            </h2>
            <span className="text-xs text-amber-300 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              पहिले १५ प्रश्न मोफत (Free Trial)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_30_CHAPTERS.map((chap) => (
              <div 
                key={chap.id}
                className="bg-slate-900 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-5 space-y-3 transition-all group flex flex-col justify-between shadow-md"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      {chap.part}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">Chapter #{chap.id}</span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                      {chap.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-medium">
                      {chap.titleMr}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>विनामूल्य प्रश्न: <strong className="text-emerald-400">{chap.freeQuestionsCount} Qs</strong></span>
                    <span className="text-amber-300 font-semibold">उर्वरित लॉक 🔒</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onNavigateTab('quiz')}
                      className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-teal-500 to-emerald-400 hover:brightness-110 text-slate-950 font-bold py-2 px-2 rounded-xl text-xs transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                      <span>सराव चाचणी</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('quiz')}
                      className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold py-2 px-2 rounded-xl text-xs border border-amber-500/30 transition-all"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>माॉक टेस्ट</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: AI GENERATOR & FILE IMPORT */}
      {activeBookTab === 'generator' && (
        !isUnlocked ? (
          /* Locked State for Paid Features */
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto shadow-lg shadow-amber-500/10">
              <Lock className="w-8 h-8" />
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block">
                🔒 प्रीमियम फीचर (Premium Feature Locked)
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                AI स्वयंचलित प्रश्न जनरेटर व JSON फाईल इंपोर्ट
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AI द्वारे अमर्याद नवीन प्रश्न तयार करणे व स्वतःचे प्रश्नसंच JSON फाईलमधून अपलोड करणे या सुविधा फक्त प्रीमियम एक्टिव्हेटेड वापरकर्त्यांसाठी उपलब्ध आहेत.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowUnlockModal(true)}
                className="bg-gradient-to-r from-amber-500 via-teal-400 to-emerald-400 hover:brightness-110 text-slate-950 font-black px-8 py-3.5 rounded-2xl text-sm inline-flex items-center gap-2 shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Key className="w-4 h-4 stroke-[2.5]" />
                <span>प्रीमियम व्हर्जन एक्टिव्हेट करा (Unlock Paid Features)</span>
              </button>
            </div>
          </div>
        ) : (
          /* Unlocked Paid Tools */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Tool 1: AI Bulk Question Generator */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">१. AI स्वयंचलित प्रश्न जनरेटर (Batch AI)</h2>
                  <p className="text-xs text-slate-400">Gemini AI द्वारे क्ष-किरण व इतर विषयांचे नवीन प्रश्न तयार करा.</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div>
                  <label className="block font-bold text-slate-200 mb-1">विषय (Category) निवडा</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-teal-400"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.name} value={cat.name}>
                        {cat.nameMr} ({cat.name})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-200 mb-1">प्रश्नांची संख्या (Batch Size)</label>
                  <div className="grid grid-cols-5 gap-2">
                    {[5, 10, 25, 50, 100].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBatchSize(num)}
                        className={`py-2 rounded-xl font-bold border text-xs transition-all ${
                          batchSize === num
                            ? 'bg-teal-500 text-slate-950 border-teal-400'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        +{num} Qs
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleBulkGenerate()}
                  disabled={isGenerating}
                  className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-400 hover:brightness-110 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>प्रक्रिया सुरू आहे... (Generating {batchSize} Qs)</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                      <span>+{batchSize} नवीन द्विभाषिक प्रश्न तयार करा</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Tool 2: Bulk JSON Import */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">२. फायलींमधून प्रश्न आयात करा (Import JSON)</h2>
                  <p className="text-xs text-slate-400">तयार केलेल्या २०००-३००० प्रश्नांची फाईल एका क्लिकवर जोडा.</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="border-2 border-dashed border-slate-700 hover:border-teal-400 rounded-2xl p-6 text-center space-y-3 transition-colors bg-slate-950/50">
                  <FileJson className="w-8 h-8 text-cyan-400 mx-auto" />
                  <div>
                    <p className="font-bold text-white">JSON फाईल निवडा किंवा ड्रॅग करा</p>
                    <p className="text-[11px] text-slate-400">(.json फॉरमॅट सपोर्टेड - unlimited questions)</p>
                  </div>
                  <label className="inline-block px-4 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold rounded-xl cursor-pointer border border-slate-700 hover:border-teal-400/50 transition-all">
                    <span>Browse File</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-300">मानक JSON फॉरमॅट टेम्पलेट (Schema):</span>
                    <button
                      onClick={handleCopyTemplate}
                      className="flex items-center gap-1 text-[11px] font-bold text-teal-400 hover:text-teal-300"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedTemplate ? 'Copied!' : 'Copy Schema'}</span>
                    </button>
                  </div>
                  <pre className="text-[10px] text-teal-300/90 font-mono bg-slate-900 p-2.5 rounded-lg overflow-x-auto max-h-28 border border-slate-850">
                    {sampleJsonTemplate}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )
      )}

      {/* TAB 3: SEARCH & INSPECT VIEW (Questions list with 40-reveal free limit and answer hide/reveal) */}
      {activeBookTab === 'all' && (
        <SearchInspectView
          questions={questions}
          onAskAITutor={onAskAITutor}
          onNavigateTab={onNavigateTab}
        />
      )}

      {/* PREMIUM UNLOCK MODAL */}
      {showUnlockModal && (
        <PremiumUnlockModal
          onClose={() => setShowUnlockModal(false)}
          onSuccessUnlock={() => {
            setIsUnlocked(true);
            setShowUnlockModal(false);
          }}
        />
      )}
    </div>
  );
};

