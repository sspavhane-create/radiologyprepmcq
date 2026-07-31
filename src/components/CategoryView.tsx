import React, { useState } from 'react';
import { Question, QuizSession } from '../types';
import { ALL_30_CHAPTERS, ChapterItem } from '../data/chaptersData';
import { 
  getIsPremiumUnlocked, 
  getRevealedAnswerIds, 
  addRevealedAnswerId 
} from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
import { 
  HeartPulse, 
  ShieldCheck, 
  Syringe, 
  Layers, 
  Play, 
  Sparkles, 
  Bookmark, 
  BookOpen,
  Award,
  Zap,
  Globe,
  FileText,
  Search,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Eye,
  Lock
} from 'lucide-react';

interface CategoryViewProps {
  questions: Question[];
  quizSessions: QuizSession[];
  bookmarkedIds: number[];
  selectedCategoryFilter?: string | null;
  onSelectCategoryFilter?: (categoryName: string | null) => void;
  onStartQuizCategory: (categoryName: string) => void;
  onAskAITutor: (q: Question) => void;
  onGenerateCategoryQuestions: (categoryName: string) => void;
  onSelectQuestionDirect: (qId: number) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  questions,
  quizSessions,
  bookmarkedIds,
  selectedCategoryFilter = null,
  onSelectCategoryFilter,
  onStartQuizCategory,
  onAskAITutor,
  onGenerateCategoryQuestions,
  onSelectQuestionDirect,
}) => {
  const [activePortion, setActivePortion] = useState<'technical' | 'non-technical'>('technical');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedChapterId, setExpandedChapterId] = useState<number | null>(1);

  // Premium & Revealed Answers State
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [revealedIds, setRevealedIds] = useState<number[]>([]);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string | undefined>(undefined);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  React.useEffect(() => {
    setIsUnlocked(getIsPremiumUnlocked());
    setRevealedIds(getRevealedAnswerIds());
  }, []);

  const refreshPremiumState = () => {
    setIsUnlocked(getIsPremiumUnlocked());
    setRevealedIds(getRevealedAnswerIds());
  };

  const FREE_LIMIT = 40;
  const revealedCount = revealedIds.length;

  const handleToggleAnswerCategory = (questionId: number) => {
    const isAlreadyRevealed = revealedIds.includes(questionId);
    const isExpanded = !!expandedCards[questionId];

    if (isExpanded) {
      setExpandedCards(prev => ({ ...prev, [questionId]: false }));
      return;
    }

    if (isUnlocked) {
      if (!isAlreadyRevealed) {
        const updated = addRevealedAnswerId(questionId);
        setRevealedIds(updated);
      }
      setExpandedCards(prev => ({ ...prev, [questionId]: true }));
      return;
    }

    if (questionId > 40) {
      setModalMessage(
        `प्रश्न क्र. ४० च्या पुढील (Q#${questionId}) सर्व प्रश्नांची उत्तरे व स्पष्टीकरणे पाहण्यासाठी प्रीमियम व्हर्जन अनलॉक करा 🔒`
      );
      setShowUnlockModal(true);
      return;
    }

    if (isAlreadyRevealed) {
      setExpandedCards(prev => ({ ...prev, [questionId]: true }));
      return;
    }

    if (revealedCount < FREE_LIMIT) {
      const updated = addRevealedAnswerId(questionId);
      setRevealedIds(updated);
      setExpandedCards(prev => ({ ...prev, [questionId]: true }));
    } else {
      setModalMessage(
        `तुम्ही विनामूल्य ४० प्रश्नांची उत्तरे व स्पष्टीकरणे पाहिली आहेत! उर्वरित सर्व ३०००+ प्रश्नांची उत्तरे तपासण्यासाठी व अनलॉक करण्यासाठी प्रीमियम व्हर्जन ॲक्टिव्हेट करा 🔒`
      );
      setShowUnlockModal(true);
    }
  };

  const handleSelectChapterQuestion = (qId: number) => {
    if (!isUnlocked && qId > 40) {
      setModalMessage(
        `प्रश्न क्र. ४० च्या पुढील (Q#${qId}) सर्व प्रश्नांची उत्तरे व सराव अनलॉक करण्यासाठी प्रीमियम व्हर्जन ॲक्टिव्हेट करा 🔒`
      );
      setShowUnlockModal(true);
      return;
    }
    onSelectQuestionDirect(qId);
  };

  // Auto switch portion if a non-technical category is selected
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      if (
        selectedCategoryFilter.includes('Marathi') || 
        selectedCategoryFilter.includes('English') || 
        selectedCategoryFilter.includes('General Knowledge') || 
        selectedCategoryFilter.includes('Logical') ||
        selectedCategoryFilter.includes('Non-Technical')
      ) {
        setActivePortion('non-technical');
      } else {
        setActivePortion('technical');
      }
    }
  }, [selectedCategoryFilter]);

  // Technical Chapters (Chapters 1 to 28)
  const technicalChapters = ALL_30_CHAPTERS.filter(c => c.id <= 28);

  const displayedTechnicalChapters = selectedCategoryFilter && activePortion === 'technical'
    ? technicalChapters.filter(c => c.category === selectedCategoryFilter)
    : technicalChapters;

  // Non-Technical Topics
  const nonTechnicalTopics = [
    {
      id: 29,
      title: 'मराठी व्याकरण व शब्दसंग्रह',
      titleEn: 'Marathi Grammar & Vocabulary',
      category: 'Marathi Language (मराठी भाषा)',
      desc: 'समास, प्रयोग, मनी व वाक्प्रचार, लिंग-वचन विचार, समानार्थी व विरुद्धार्थी शब्द.'
    },
    {
      id: 30,
      title: 'इंग्रजी व्याकरण व व्होकॅब्युलरी',
      titleEn: 'English Grammar & Vocabulary',
      category: 'English Language',
      desc: 'Tenses, Direct/Indirect speech, Prepositions, Idioms & Phrases, Synonyms/Antonyms.'
    },
    {
      id: 31,
      title: 'सामान्य ज्ञान व चालू घडामोडी',
      titleEn: 'General Knowledge & Current Affairs',
      category: 'General Knowledge (सामान्य ज्ञान)',
      desc: 'महाराष्ट्राचा इतिहास व भूगोल, राज्यघटना, सार्वजनिक आरोग्य योजना, चालू घडामोडी.'
    },
    {
      id: 32,
      title: 'बौद्धिक चाचणी व अंकगणित',
      titleEn: 'Logical Reasoning & Quantitative Aptitude',
      category: 'Logical Ability & Mathematics (बौद्धिक चाचणी)',
      desc: 'संख्यामाला, नातेसंबंध, कोडिंग-डिकोडिंग, नफा-तोटा, टक्केवारी व बुद्धिमत्ता चाचणी.'
    }
  ];

  // Technical Syllabus Subtopics (Section 5: Subject Related Knowledge - a to j)
  const technicalSyllabusSubtopics = [
    {
      key: '5a',
      letter: 'a',
      title: 'RADIOPHYSICS (HISTORY/PRINCIPLE) - X-RAY, C-ARM, CT, MRI, MAMMOGRAPHY',
      titleMr: 'अ) रेडिओफिजिक्स (इतिहास/तत्त्वे) - क्ष-किरण मशीन, सी-आर्म, सी.टी. स्कॅन, एम.आर.आय., मॅमोग्राफी',
      desc: 'Discovery of X-rays, production principles, electromagnetic spectrum, tube construction & x-ray physics.',
      categoryMatch: 'Technical: Radiophysics & Machine Principles',
      keywords: ['x-ray', 'roentgen', 'tube', 'kvp', 'mas', 'radiophysics', 'c-arm', 'mri', 'ct']
    },
    {
      key: '5b',
      letter: 'b',
      title: 'TYPES OF MACHINE AND THEIR PRINCIPLE WITH DETAILED KNOWLEDGE',
      titleMr: 'ब) मशीनचे प्रकार व कार्यप्रणालीची सविस्तर माहिती (Machine Principles)',
      desc: 'Portable, fixed X-ray units, Fluoroscopy, C-Arm, CT scanners, High Tesla MRI magnet principles.',
      categoryMatch: 'Technical: Radiophysics & Machine Principles',
      keywords: ['machine', 'generator', 'rectifier', 'anode', 'cathode', 'fluoroscopy', 'grid']
    },
    {
      key: '5c',
      letter: 'c',
      title: 'ANATOMY & PHYSIOLOGY WITH RADIOGRAPHIC POSITIONING (X-Ray/C-Arm/MRI/Mammography)',
      titleMr: 'क) शरीरशास्त्र, फिजियोलॉजी व क्ष-किरण, सी-आर्म, एमआरआय व मॅमोग्राफी पोझिशनिंग',
      desc: 'Upper & lower extremity, chest, abdomen, spine, skull positioning & special radiographic projections.',
      categoryMatch: 'Technical: Anatomy & Radiographic Positioning',
      keywords: ['anatomy', 'position', 'projection', 'chest', 'spine', 'skull', 'view', 'flexion']
    },
    {
      key: '5d',
      letter: 'd',
      title: 'DIFFERENT TYPES OF FILMS & SOLUTIONS (CHEMICAL NATURE & CLINICAL IMPORTANCE)',
      titleMr: 'ड) क्ष-किरण फिल्म्सचे प्रकार, रसायने (Developer & Fixer) व क्लिनिकल महत्त्व',
      desc: 'Screen/non-screen films, emulsion, developer (Hydroquinone), fixer (Thiosulfate) chemistry & darkroom.',
      categoryMatch: 'Technical: Films, Contrast Media & Digital DR/PACS',
      keywords: ['film', 'developer', 'fixer', 'emulsion', 'darkroom', 'safelight', 'processing', 'solution']
    },
    {
      key: '5e',
      letter: 'e',
      title: 'CONTRAST DYES - TYPES, HAZARDS & EMERGENCY MANAGEMENT',
      titleMr: 'इ) कॉन्ट्रास्ट डायचे प्रकार, वापर, धोके व आणीबाणी व्यवस्थापन (Anaphylaxis & CPR)',
      desc: 'Barium sulphate, ionic/non-ionic iodinated contrast, adverse reactions, CPR, oxygen & shock care.',
      categoryMatch: 'Technical: Films, Contrast Media & Digital DR/PACS',
      keywords: ['contrast', 'barium', 'iodine', 'reaction', 'anaphylaxis', 'emergency', 'cpr', 'shock']
    },
    {
      key: '5f',
      letter: 'f',
      title: 'RADIATION HAZARDS AND PRECAUTION MEASURES (RADIATION PROTECTION)',
      titleMr: 'फ) रेडिएशन धोके व प्रतिबंधात्मक उपाय (ALARA, Lead Apron, TLD, AERB)',
      desc: 'Somatic/genetic biological effects, ALARA rules, time-distance-shielding, TLD badges & lead aprons.',
      categoryMatch: 'Technical: Radiation Protection & Hazards',
      keywords: ['radiation', 'protection', 'alara', 'tld', 'lead', 'apron', 'aerb', 'dosimeter', 'shielding']
    },
    {
      key: '5g',
      letter: 'g',
      title: 'MAMMOGRAPHY / C-ARM / DIGITAL RADIOGRAPHY (CR/DR) / PACS WORKING PRINCIPLE',
      titleMr: 'छ) मॅमोग्राफी, सी-आर्म, डिजिटल रेडिओोग्राफी (CR/DR) व PACS कार्यप्रणाली',
      desc: 'Molybdenum target, photostimulable phosphor, flat panel detectors, DICOM standards, PACS networks.',
      categoryMatch: 'Technical: Films, Contrast Media & Digital DR/PACS',
      keywords: ['pacs', 'dicom', 'digital', 'cr', 'dr', 'mammography', 'c-arm', 'flat panel']
    },
    {
      key: '5h',
      letter: 'h',
      title: 'C.T. / M.R.I. / RADIOTHERAPY / LITHOTRIPSY - HISTORY, PROCEDURE & COMPLICATIONS',
      titleMr: 'ज) सी.टी., एम.आर.आय., रेडिओथेरपी व लिथोट्रिप्सी प्रक्रिया व गुंतागुंत व्यवस्थापन',
      desc: 'Hounsfield units, CT generations, MRI RF pulses, Linear Accelerator, Teletherapy & Lithotripsy.',
      categoryMatch: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
      keywords: ['ct', 'mri', 'radiotherapy', 'lithotripsy', 'hounsfield', 'tesla', 'linear accelerator']
    },
    {
      key: '5i',
      letter: 'i',
      title: 'BIOMEDICAL WASTE MANAGEMENT (BMW)',
      titleMr: 'झ) जैववैद्यकीय कचरा व्यवस्थापन (Biomedical Waste Management - Color Codes)',
      desc: 'Segregation into Yellow, Red, Blue, White containers, biohazard disposal & infection control.',
      categoryMatch: 'Technical: Radiation Protection & Hazards',
      keywords: ['waste', 'biomedical', 'bmw', 'yellow', 'red', 'blue', 'biohazard', 'disposal']
    },
    {
      key: '5j',
      letter: 'j',
      title: 'EQUIPMENT MAINTENANCE & RESPONSIBILITIES / RECORD KEEPING',
      titleMr: 'ञ) उपकरणांची देखभाल, हाताळणीची जबाबदारी व दस्तऐवजीकरण (Record Keeping)',
      desc: 'Daily QA checks, preventive maintenance, radiation register, patient logbook & AERB compliance.',
      categoryMatch: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
      keywords: ['maintenance', 'record', 'logbook', 'quality', 'responsibility', 'aerb', 'register']
    }
  ];

  // Selected Subtopic Filter (null means all subtopics)
  const [selectedSubtopicKey, setSelectedSubtopicKey] = useState<string | null>(null);

  // Helper to get questions for a specific chapter/category
  const getQuestionsForChapter = (chapter: ChapterItem) => {
    return questions.filter(q => q.category === chapter.category || (q.chapterId && q.chapterId === chapter.id));
  };

  // Search filtered questions across all questions
  const searchFilteredQuestions = questions.filter(q => {
    if (!searchQuery.trim()) return true;
    const qLower = searchQuery.toLowerCase();
    return (
      q.question.toLowerCase().includes(qLower) ||
      (q.question_mr && q.question_mr.includes(qLower)) ||
      q.category.toLowerCase().includes(qLower)
    );
  });

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            <span>महाराष्ट्र आरोग्य विभाग गट 'क' परीक्षा पॅटर्न (२०० गुण)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            विषय व प्रकरणांनुसार सराव वर्गीकरण (Syllabus Portion)
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            अभ्यासाच्या सोयीसाठी परीक्षेचे दोन प्रमुख विभाग केले आहेत - तांत्रिकी (Technical 80 Marks) व बिगर-तांत्रिकी (Non-Technical 120 Marks). प्रत्येक प्रकरणातील प्रश्न खाली पाहा व सराव करा.
          </p>
        </div>
      </div>

      {/* Active Category Filter Indicator Banner */}
      {selectedCategoryFilter && (
        <div className="bg-teal-950/80 border border-teal-500/50 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg animate-fade-in">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-teal-400 shrink-0" />
            <div>
              <div className="text-[11px] text-teal-300 font-extrabold uppercase tracking-wider">निवडलेला विषय / कॅटेगिरी (Selected Category)</div>
              <div className="text-sm sm:text-base font-black text-white">{selectedCategoryFilter}</div>
            </div>
          </div>
          {onSelectCategoryFilter && (
            <button
              onClick={() => onSelectCategoryFilter(null)}
              className="bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-extrabold border border-teal-500/30 transition-all self-end sm:self-auto"
            >
              ✕ सर्व प्रकरणे पाहा (Show All Chapters)
            </button>
          )}
        </div>
      )}

      {/* Main Portion Tabs: Technical vs Non-Technical */}
      <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-950 rounded-2xl border border-slate-800">
        <button
          onClick={() => setActivePortion('technical')}
          className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
            activePortion === 'technical'
              ? 'bg-gradient-to-r from-teal-500 to-emerald-400 text-slate-950 shadow-lg shadow-teal-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Award className="w-4 h-4 stroke-[2.5]" />
          <span>१. तांत्रिकी विभाग (Technical Radiography)</span>
        </button>

        <button
          onClick={() => setActivePortion('non-technical')}
          className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
            activePortion === 'non-technical'
              ? 'bg-gradient-to-r from-amber-500 to-teal-400 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4 stroke-[2.5]" />
          <span>२. अ-तांत्रिकी विभाग (Non-Technical Subjects)</span>
        </button>
      </div>

      {/* PORTION 1: TECHNICAL CHAPTERS & OFFICIAL SUBTOPICS (a to j) */}
      {activePortion === 'technical' && (
        <div className="space-y-8">
          {/* SECTION 5 SYLLABUS CLAUSES (a to j) BREAKDOWN */}
          <div className="bg-slate-900 border border-teal-500/40 rounded-3xl p-6 space-y-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30 mb-2">
                  <Award className="w-3.5 h-3.5 text-teal-400" />
                  <span>अधिकृत तांत्रिकी अभ्यासक्रम घटक (Section 5)</span>
                </div>
                <h2 className="text-xl font-black text-white tracking-tight">
                  विषयानुसार तांत्रिकी प्रश्नसंच शॉटलिस्ट (Categories 5a to 5j)
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  आरोग्य विभाग क्ष-किरण वैज्ञानिक अधिकारी परीक्षेच्या अधिकृत अभ्यासक्रमातील घटकांनुसार (a ते j) संबंधित प्रकरणे व प्रश्न पाहा.
                </p>
              </div>

              {selectedSubtopicKey && (
                <button
                  onClick={() => setSelectedSubtopicKey(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-teal-300 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-slate-700 self-start"
                >
                  ✕ सर्व घटक पाहा (Show All)
                </button>
              )}
            </div>

            {/* Subtopic Grid (5a to 5j) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              {technicalSyllabusSubtopics.map((sub) => {
                const isSelected = selectedSubtopicKey === sub.key;

                // Find questions matching this subtopic
                const matchingQuestions = questions.filter(q => {
                  if (q.category === sub.categoryMatch) return true;
                  const qText = `${q.question} ${q.question_mr || ''}`.toLowerCase();
                  return sub.keywords.some(kw => qText.includes(kw));
                });

                return (
                  <div
                    key={sub.key}
                    onClick={() => {
                      setSelectedSubtopicKey(isSelected ? null : sub.key);
                      if (onSelectCategoryFilter) {
                        onSelectCategoryFilter(sub.categoryMatch);
                      }
                    }}
                    className={`cursor-pointer bg-slate-950 p-4 rounded-2xl border transition-all space-y-2 flex flex-col justify-between ${
                      isSelected 
                        ? 'border-teal-400 bg-teal-950/30 ring-2 ring-teal-400/40 shadow-lg' 
                        : 'border-slate-800 hover:border-teal-500/50 hover:bg-slate-850'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded-full border border-teal-500/30">
                          Clause 5({sub.letter})
                        </span>
                        <span className="text-[11px] font-bold text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/20">
                          संबंधित प्रकरणे पाहा &rarr;
                        </span>
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {sub.titleMr}
                      </h3>

                      <p className="text-[11px] text-slate-400 font-sans italic line-clamp-1">
                        {sub.title}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-850 flex items-center justify-between text-xs">
                      <span className="text-slate-400 text-[11px] font-medium">{sub.desc}</span>
                      <span className="text-teal-400 font-bold group-hover:underline flex items-center gap-1 text-[11px]">
                        <span>{isSelected ? 'प्रश्न लपवा' : 'प्रश्न शॉर्टलिस्ट'}</span>
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Expanded Questions for this specific subtopic clause */}
                    {isSelected && (
                      <div className="pt-3 border-t border-teal-500/30 space-y-2 animate-fade-in">
                        <div className="flex items-center justify-between text-xs font-bold text-teal-300">
                          <span>५({sub.letter}) घटकातील शॉर्टलिस्ट केलेले प्रश्न:</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onStartQuizCategory(sub.categoryMatch);
                            }}
                            className="bg-teal-400 hover:bg-teal-300 text-slate-950 px-2.5 py-1 rounded-lg text-[10px] font-black"
                          >
                            या घटकाचा सराव करा &rarr;
                          </button>
                        </div>

                        <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                          {matchingQuestions.length > 0 ? (
                            matchingQuestions.slice(0, 15).map((q) => (
                              <div
                                key={q.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectQuestionDirect(q.id);
                                }}
                                className="bg-slate-900 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/80 hover:border-teal-400 cursor-pointer transition-all space-y-1"
                              >
                                <div className="flex items-center justify-between text-[10px] font-bold text-teal-300">
                                  <span>Q#{q.id}</span>
                                  <span className="text-emerald-400">उत्तर: {q.correct_answer_mr || q.correct_answer}</span>
                                </div>
                                <p className="text-xs text-slate-100 font-medium line-clamp-2">
                                  {q.question_mr || q.question}
                                </p>
                              </div>
                            ))
                          ) : (
                            <p className="text-xs text-slate-400 italic p-2">या घटकासाठीचे सर्व प्रश्न प्रश्नसंचात उपलब्ध आहेत.</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CHAPTERWISE BREAKDOWN */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-teal-400" />
                  <span>अध्यायनिहाय तांत्रिकी प्रकरणे (Technical Chapters)</span>
                </h2>
                <p className="text-xs text-slate-400">अध्यायानुसार सविस्तर अभ्यास व सराव चाचण्या</p>
              </div>
              <span className="text-xs font-bold bg-teal-500/10 text-teal-300 px-3 py-1 rounded-full border border-teal-500/20">
                {displayedTechnicalChapters.length} प्रकरणे
              </span>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedTechnicalChapters.map((chap) => {
              const chapterQs = getQuestionsForChapter(chap);
              const isExpanded = expandedChapterId === chap.id;

              return (
                <div
                  key={chap.id}
                  className={`bg-slate-900 border rounded-2xl p-5 space-y-4 transition-all flex flex-col justify-between shadow-lg ${
                    isExpanded ? 'border-teal-400 bg-slate-850 ring-1 ring-teal-400/30' : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                        {chap.part}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">Chapter #{chap.id}</span>
                    </div>

                    <h3 className="text-sm font-bold text-white leading-snug">
                      {chap.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {chap.titleMr}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>सराव प्रश्नसंच</span>
                      <button
                        onClick={() => setExpandedChapterId(isExpanded ? null : chap.id)}
                        className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1 text-[11px]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{isExpanded ? 'प्रश्न लपवा' : 'प्रश्न पाहा'}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onStartQuizCategory(chap.category)}
                        className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-teal-500 to-emerald-400 hover:brightness-110 text-slate-950 font-extrabold py-2 px-2 rounded-xl text-xs transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-slate-950" />
                        <span>सराव करा</span>
                      </button>

                      <button
                        onClick={() => onStartQuizCategory(chap.category)}
                        className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-extrabold py-2 px-2 rounded-xl text-xs border border-amber-500/30 transition-all"
                      >
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>माॉक टेस्ट</span>
                      </button>
                    </div>
                  </div>

                  {/* Expanded Chapter Questions Preview */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-800 space-y-2.5 animate-fade-in">
                      <h4 className="text-xs font-bold text-teal-300 flex items-center justify-between">
                        <span>अध्यायातील सराव प्रश्न यादी:</span>
                      </h4>

                      <div className="max-h-52 overflow-y-auto space-y-2 pr-1">
                        {chapterQs.length > 0 ? (
                          chapterQs.map((q) => (
                            <div
                              key={q.id}
                              onClick={() => handleSelectChapterQuestion(q.id)}
                              className="bg-slate-950 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 hover:border-teal-500/40 cursor-pointer text-left transition-all space-y-1"
                            >
                              <div className="flex items-center justify-between text-[10px] font-bold text-teal-400">
                                <span>#Q{q.id}</span>
                                {isUnlocked || q.id <= 40 ? (
                                  <span className="text-teal-300 font-semibold flex items-center gap-1">
                                    <Eye className="w-3 h-3 text-teal-400" />
                                    <span>उत्तर गुप्त (सराव करा)</span>
                                  </span>
                                ) : (
                                  <span className="text-amber-400 font-bold flex items-center gap-1">
                                    <Lock className="w-3 h-3 text-amber-400" />
                                    <span>🔒 उत्तर पाहण्यासाठी प्रीमियम आवश्यक</span>
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-200 line-clamp-2">
                                {q.question_mr || q.question}
                              </p>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs text-slate-400 italic p-2">या अध्यायातील सर्व सराव प्रश्न उपलब्ध आहेत. चाचणी सुरू करण्यासाठी 'सराव करा' वर क्लिक करा.</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      )}

      {/* PORTION 2: NON-TECHNICAL SUBJECTS */}
      {activePortion === 'non-technical' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>अ-तांत्रिकी घटक (Non-Technical Subjects)</span>
              </h2>
              <p className="text-xs text-slate-400">मराठी, इंग्रजी, सामान्य ज्ञान व बौद्धिक चाचणी प्रकरणे</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nonTechnicalTopics.map((nt) => (
              <div
                key={nt.id}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 space-y-4 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      संबंधित प्रकरण
                    </span>
                    <span className="text-xs font-mono text-slate-400">Non-Tech Topic</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white">
                    {nt.title}
                  </h3>
                  <p className="text-xs text-teal-300 font-medium">
                    {nt.titleEn}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {nt.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>सराव प्रश्नसंच</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onStartQuizCategory(nt.category)}
                      className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-teal-500 to-emerald-400 hover:brightness-110 text-slate-950 font-extrabold py-2 px-3 rounded-xl text-xs transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                      <span>सराव चाचणी</span>
                    </button>

                    <button
                      onClick={() => onStartQuizCategory(nt.category)}
                      className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-extrabold py-2 px-3 rounded-xl text-xs border border-amber-500/30 transition-all"
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

      {/* ALL QUESTIONS SEARCH & INSPECTION SECTION (syllabus sobat jodala aahe) */}
      <div className="bg-slate-900 border border-teal-500/40 rounded-3xl p-6 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>उपलब्ध प्रश्न यादी ({questions.length} / {questions.length})</span>
            </div>
            <h2 className="text-lg font-black text-white tracking-tight">
              आपल्या चालू प्रश्नसंचातील सर्व प्रश्न शोधा व तपासा - सर्व प्रश्न यादी (Search & Inspect)
            </h2>
            <p className="text-xs text-slate-400">
              सर्व ३० अध्यायांमधील ३०००+ प्रश्नांचा शोध घ्या, उत्तरे व स्पष्टीकरण तपासा. यामध्ये सुरुवातीला <strong>फक्त प्रश्न दिसतील, उत्तर दिसणार नाही.</strong> उत्तरासाठी व स्पष्टीकरणासाठी <span className="text-teal-300 font-bold">'उत्तर व स्पष्टीकरण पहा'</span> बटणावर क्लिक करा. (विनामूल्य ४० प्रश्नांपर्यंत उत्तरे तपासता येतील, त्यानंतर प्रीमियम व्हर्जन ॲक्टिव्हेट करावे लागेल).
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="प्रश्न किंवा विषय शोधा..."
              className="w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-teal-400 rounded-xl text-xs text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
          {searchFilteredQuestions.length > 0 ? (
            searchFilteredQuestions.slice(0, 50).map((q) => {
              const isAnswerRevealed = revealedIds.includes(q.id);
              const isExpanded = !!expandedCards[q.id];
              const isShowContent = isAnswerRevealed && isExpanded;

              return (
                <div
                  key={q.id}
                  className={`bg-slate-950 border p-4 rounded-2xl transition-all space-y-3 shadow-md ${
                    isShowContent
                      ? 'border-emerald-500/40 bg-slate-900 ring-1 ring-emerald-500/20'
                      : 'border-slate-800 hover:border-teal-500/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-teal-400">
                    <span className="font-mono bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      Q#{q.id} • {q.category.split(':')[0]}
                    </span>
                    {isAnswerRevealed && (isUnlocked || q.id <= 40) ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>उत्तर उघडले (Revealed)</span>
                      </span>
                    ) : !isUnlocked && q.id > 40 ? (
                      <span className="text-amber-300 font-bold flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span>🔒 उत्तर पाहण्यासाठी प्रीमियम आवश्यक</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 font-medium bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        उत्तर गुप्त (Answer Hidden)
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-relaxed">
                    {q.question_mr || q.question}
                  </p>

                  {q.question_mr && q.question && (
                    <p className="text-xs text-slate-400 italic">
                      {q.question}
                    </p>
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    {q.options.map((opt, optIdx) => {
                      const optMr = q.options_mr ? q.options_mr[optIdx] : undefined;
                      const isCorrect = isShowContent && (
                        opt === q.correct_answer ||
                        (q.correct_answer_mr && optMr === q.correct_answer_mr) ||
                        opt.startsWith(q.correct_answer.slice(0, 3))
                      );

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl border text-xs transition-all ${
                            isCorrect
                              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-100 font-bold shadow-md'
                              : 'bg-slate-900/80 border-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                              isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {String.fromCharCode(65 + optIdx)}
                            </div>
                            <div>
                              {optMr && <p className={isCorrect ? 'text-emerald-200 font-bold' : 'text-slate-200'}>{optMr}</p>}
                              <p className={optMr ? 'text-[10px] text-slate-400' : 'text-slate-300'}>{opt}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => handleToggleAnswerCategory(q.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                        isShowContent && (isUnlocked || q.id <= 40)
                          ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                          : isAnswerRevealed && (isUnlocked || q.id <= 40)
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : !isUnlocked && (q.id > 40 || revealedCount >= FREE_LIMIT)
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-gradient-to-r from-teal-500 to-cyan-400 hover:brightness-110 text-slate-950'
                      }`}
                    >
                      {isShowContent && (isUnlocked || q.id <= 40) ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" />
                          <span>उत्तर लपवा</span>
                        </>
                      ) : isAnswerRevealed && (isUnlocked || q.id <= 40) ? (
                        <>
                          <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
                          <span>उत्तर पुन्हा पहा</span>
                        </>
                      ) : !isUnlocked && q.id > 40 ? (
                        <>
                          <Lock className="w-3.5 h-3.5 text-amber-400" />
                          <span>उत्तर व स्पष्टीकरण पहा 🔒 (प्रीमियम आवश्यक)</span>
                        </>
                      ) : !isUnlocked && revealedCount >= FREE_LIMIT ? (
                        <>
                          <Lock className="w-3.5 h-3.5 text-amber-400" />
                          <span>उत्तर व स्पष्टीकरण पहा 🔒 (मर्यादा संपली)</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>उत्तर व स्पष्टीकरण पहा</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleSelectChapterQuestion(q.id)}
                      className="flex items-center gap-1 text-xs text-teal-300 hover:text-teal-200 font-extrabold bg-teal-500/10 hover:bg-teal-500/20 px-3 py-1.5 rounded-xl border border-teal-500/30"
                    >
                      <span>थेट सराव करा</span>
                      <Play className="w-3 h-3 fill-teal-300" />
                    </button>
                  </div>

                  {/* Answer & Explanation Box */}
                  {isShowContent && (isUnlocked || q.id <= 40) && (
                    <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 space-y-2 animate-fade-in text-xs">
                      <div className="text-emerald-200 font-bold">
                        बरोबर उत्तर: {q.correct_answer_mr || q.correct_answer}
                      </div>
                      {q.explanation_mr && (
                        <p className="text-slate-200 font-medium">{q.explanation_mr}</p>
                      )}
                      {q.explanation && (
                        <p className="text-slate-400 italic">{q.explanation}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center text-xs text-slate-400 py-8">
              काहीही जुळणारे प्रश्न सापडले नाहीत. शोध शब्द तपासा.
            </p>
          )}
        </div>
      </div>

      {/* PREMIUM UNLOCK MODAL */}
      {showUnlockModal && (
        <PremiumUnlockModal
          onClose={() => setShowUnlockModal(false)}
          onSuccessUnlock={refreshPremiumState}
          customMessage={modalMessage}
        />
      )}
    </div>
  );
};
