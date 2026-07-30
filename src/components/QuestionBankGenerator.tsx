import React, { useState } from 'react';
import { Question } from '../types';
import { CATEGORIES } from '../data/initialQuestions';
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
  Award
} from 'lucide-react';

interface QuestionBankGeneratorProps {
  questions: Question[];
  onAddMultipleQuestions: (newQs: Question[]) => void;
  onNavigateTab: (tab: string) => void;
}

export const SAIA_CHAPTERS = [
  { id: 1, part: 'Part I', title: 'Chapter 1: Legal and Ethical Aspects', titleMr: 'प्रकरण १: कायदेशीर आणि नैतिक पैलू (HIPAA, Patient Rights, Torts)', category: 'Technical: Radiophysics & Machine Principles' },
  { id: 2, part: 'Part I', title: 'Chapter 2: Patient Communication and Safety', titleMr: 'प्रकरण २: रुग्ण संवादाची कौशल्ये, सुरक्षा व व्हेरीफिकेशन', category: 'Technical: Anatomy & Radiographic Positioning' },
  { id: 3, part: 'Part I', title: 'Chapter 3: Infection Control', titleMr: 'प्रकरण ३: संसर्ग नियंत्रण, Asepsis व Handwashing मार्गदर्शक तत्त्वे', category: 'Technical: Films, Contrast Media & Digital DR/PACS' },
  { id: 4, part: 'Part I', title: 'Chapter 4: Medical Emergencies and Contrast Media', titleMr: 'प्रकरण ४: वैद्यकीय आणीबाणी, शॉक, ऑक्सिजन व कॉन्ट्रास्ट डाय', category: 'Technical: Films, Contrast Media & Digital DR/PACS' },
  { id: 5, part: 'Part II', title: 'Chapter 5: General Procedural Considerations', titleMr: 'प्रकरण ५: सामान्य पोझिशनिंग तत्त्वे, बॉडी प्लॅन्स व बॉडी हॅबिटस', category: 'Technical: Anatomy & Radiographic Positioning' },
  { id: 6, part: 'Part II', title: 'Chapter 6: Imaging Procedures (Anatomy & Positioning)', titleMr: 'प्रकरण ६: अवयव रचना, पोझिशनिंग (हाडे, सांधे, चेस्ट, स्पाईन, स्कल व सिस्टीम्स)', category: 'Technical: Anatomy & Radiographic Positioning' },
  { id: 7, part: 'Part III', title: 'Chapter 7: Radiation Protection Considerations', titleMr: 'प्रकरण ७: रेडिएशन संरक्षण, LET, RBE व बायोलॉजिकल इफेक्ट्स', category: 'Technical: Radiation Protection & Hazards' },
  { id: 8, part: 'Part III', title: 'Chapter 8: Patient Protection', titleMr: 'प्रकरण ८: रुग्णाचे रेडिएशनपासून संरक्षण (Collimation, Shielding, 10-Day Rule)', category: 'Technical: Radiation Protection & Hazards' },
  { id: 9, part: 'Part III', title: 'Chapter 9: Personnel Protection', titleMr: 'प्रकरण ९: रेडिएशन कर्मचाऱ्यांचे संरक्षण (ALARA, Barriers, Inverse Square Law)', category: 'Technical: Radiation Protection & Hazards' },
  { id: 10, part: 'Part III', title: 'Chapter 10: Radiation Exposure and Monitoring', titleMr: 'प्रकरण १०: रेडिएशन मापन व TLD/OSL डोसामीटर मॉनिटरिंग', category: 'Technical: Radiation Protection & Hazards' },
  { id: 11, part: 'Part IV', title: 'Chapter 11: Selection of Technical Factors', titleMr: 'प्रकरण ११: तांत्रिक घटक (mAs, kVp, 15% Rule, Grids, Heel Effect)', category: 'Technical: Radiophysics & Machine Principles' },
  { id: 12, part: 'Part IV', title: 'Chapter 12: Image Processing and Quality Assurance', titleMr: 'प्रकरण १२: इमेज प्रोसेसिंग, हिस्टोग्राम, LUT व गुणवत्त्ता नियंत्रण', category: 'Technical: Films, Contrast Media & Digital DR/PACS' },
  { id: 13, part: 'Part IV', title: 'Chapter 13: Image Evaluation (Screen-Film and Electronic)', titleMr: 'प्रकरण १३: एक्स-रे इमेज मूल्यमापन, आर्टिफॅक्ट्स व तपासाच्या पद्धती', category: 'Technical: Films, Contrast Media & Digital DR/PACS' },
  { id: 14, part: 'Part V', title: 'Chapter 14: Radiographic and Fluoroscopic Equipment', titleMr: 'प्रकरण १४: एक्स-रे ट्युब रचना, ट्रान्सफॉर्मर, रेक्टिफायर व फ्लोरोस्कोपी', category: 'Technical: Radiophysics & Machine Principles' },
  { id: 15, part: 'Part V', title: 'Chapter 15: Standards of Performance & Equipment Evaluation', titleMr: 'प्रकरण १५: उपकरणांची कॅलिब्रेशन मानके, Linearity व Reproducibility', category: 'Technical: Radiophysics & Machine Principles' },
  { id: 16, part: 'Part V', title: 'Chapter 16: Practice Test (860+ ARRT Format Questions)', titleMr: 'प्रकरण १६: संपूर्ण सराव परीक्षा (860+ ARRT बोर्ड पॅटर्न प्रश्न)', category: 'Technical: Radiophysics & Machine Principles' }
];

export const QuestionBankGenerator: React.FC<QuestionBankGeneratorProps> = ({
  questions,
  onAddMultipleQuestions,
  onNavigateTab
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].name);
  const [batchSize, setBatchSize] = useState<number>(10);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);
  const [activeBookTab, setActiveBookTab] = useState<'generator' | 'chapters' | 'all'>('chapters');

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
            <span>D.A. Saia Radiography PREP 5th Ed. (860+ ARRT Format Questions)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            D.A. Saia Radiography PREP Book Question Bank
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            सर्व ५ भाग व १६ प्रकरणांचे (Part I - Part V, Chapters 1-16) ARRT बोर्ड फॉरमॅट मधील ८६०+ प्रश्न व उत्तर स्पष्टीकरणे या अ‍ॅपमध्ये समाविष्ट आहेत. आपण एका क्लिकवर सराव चाचणी सुरू करू शकता किंवा AI द्वारे नवीन प्रश्न जोड किंवा डाउनलोड करू शकता.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-xl border border-teal-500/30 text-xs font-semibold text-teal-200">
              <span className="text-slate-400">एकूण प्रश्न बँक:</span>
              <strong className="text-white text-base font-bold">{questions.length} Qs</strong>
            </div>

            <button
              onClick={handleExportJson}
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-lg shadow-teal-500/20"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>डाउनलोड पूर्ण प्रश्नसंच (.JSON Export)</span>
            </button>

            <button
              onClick={() => onNavigateTab('quiz')}
              className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-lg"
            >
              <BookOpen className="w-4 h-4 stroke-[2.5]" />
              <span>सराव चाचणी सुरू करा (Start Exam)</span>
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
          <span>१६ पुस्तकातील प्रकरणे (Book Chapters)</span>
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

      {/* TAB 1: SAIA BOOK CHAPTERS INDEX */}
      {activeBookTab === 'chapters' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-400" />
              <span>D.A. Saia Radiography PREP - १६ प्रमुख अध्याय index</span>
            </h2>
            <span className="text-xs text-slate-400">ARRT Board Exam Pattern</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAIA_CHAPTERS.map((chap) => (
              <div 
                key={chap.id}
                className="bg-slate-900 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-5 space-y-3 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {chap.part}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">Chapter #{chap.id}</span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                    {chap.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {chap.titleMr}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400">
                    Category: <strong className="text-teal-200">{chap.category.split(':')[1] || chap.category}</strong>
                  </span>

                  <button
                    onClick={() => handleBulkGenerate(chap.category)}
                    disabled={isGenerating}
                    className="flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 bg-teal-950/60 hover:bg-teal-900/60 px-3 py-1.5 rounded-xl border border-teal-500/30 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+५ AI प्रश्न जोडा</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: AI GENERATOR & FILE IMPORT */}
      {activeBookTab === 'generator' && (
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

          {/* Tool 2: Bulk JSON Import & Format Download */}
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
      )}

      {/* TAB 3: SEARCH & INSPECTION TABLE */}
      {(activeBookTab === 'all' || activeBookTab === 'chapters') && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-400" />
                <span>उपलब्ध प्रश्न यादी ({filteredQuestions.length} / {questions.length})</span>
              </h2>
              <p className="text-xs text-slate-400">आपल्या चालू प्रश्नसंचातील सर्व प्रश्न शोधा व तपासा.</p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="प्रश्न किंवा ID शोधा..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-teal-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300 border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-teal-300 font-bold">
                  <th className="p-3">ID</th>
                  <th className="p-3">विभाग / Category</th>
                  <th className="p-3">प्रश्न (Marathi / English)</th>
                  <th className="p-3">उत्तर (Correct Choice)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredQuestions.slice(0, 30).map((q) => (
                  <tr key={q.id} className="hover:bg-slate-850/60 transition-colors">
                    <td className="p-3 font-mono font-bold text-slate-400">#{q.id}</td>
                    <td className="p-3 font-medium text-teal-200">{q.category.split(':')[0]}</td>
                    <td className="p-3 max-w-md">
                      <p className="font-semibold text-white">{q.question_mr || q.question}</p>
                      {q.question_mr && <p className="text-[11px] text-slate-400">{q.question}</p>}
                    </td>
                    <td className="p-3 font-bold text-emerald-400">{q.correct_answer_mr || q.correct_answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredQuestions.length > 30 && (
              <p className="text-center text-xs text-slate-400 pt-4">
                आणखी {filteredQuestions.length - 30} प्रश्न उपलब्ध आहेत... (सराव करण्यासाठी सराव चाचणी सुरू करा)
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

