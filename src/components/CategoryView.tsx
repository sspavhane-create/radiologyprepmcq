import React, { useState, useEffect, useMemo } from 'react';
import { Question, QuizSession, LanguageMode } from '../types';
import { 
  MAIN_SUBJECTS_30, 
  SECTIONS_DATA, 
  MainSubjectItem, 
  ChapterHierarchyItem, 
  TopicItem 
} from '../data/subjectHierarchyData';
import { 
  getIsPremiumUnlocked, 
  getRevealedAnswerIds, 
  addRevealedAnswerId 
} from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
import { 
  Zap, 
  Cpu, 
  Maximize, 
  Layers, 
  Radio, 
  Activity, 
  Shield, 
  Maximize2, 
  Droplet, 
  Heart, 
  AlertTriangle, 
  UserCheck, 
  ShieldAlert, 
  Briefcase, 
  Lock, 
  Monitor, 
  BookOpen, 
  Globe, 
  FileText, 
  Award, 
  Sparkles, 
  HeartPulse, 
  CheckCircle2, 
  Search, 
  Play, 
  ChevronRight, 
  Eye, 
  HelpCircle, 
  Check, 
  Clock, 
  Filter, 
  ArrowLeft,
  ChevronDown,
  ChevronUp
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
  langMode?: LanguageMode;
  isUnlocked?: boolean;
}

// Icon helper mapping
const getSubjectIcon = (iconName: string, className: string = "w-5 h-5") => {
  switch (iconName) {
    case 'Zap': return <Zap className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Maximize': return <Maximize className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Radio': return <Radio className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Maximize2': return <Maximize2 className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'AlertTriangle': return <AlertTriangle className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Lock': return <Lock className={className} />;
    case 'Monitor': return <Monitor className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    default: return <BookOpen className={className} />;
  }
};

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
  langMode = 'dual',
  isUnlocked: isUnlockedProp = false,
}) => {
  // Navigation hierarchy state:
  // selectedSection: 'sec1' | 'sec2'
  // selectedMainSubject: MainSubjectItem | null
  // selectedChapter: ChapterHierarchyItem | null
  // selectedTopic: TopicItem | null
  const [selectedSection, setSelectedSection] = useState<'sec1' | 'sec2'>('sec1');
  const [selectedMainSubject, setSelectedMainSubject] = useState<MainSubjectItem | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<ChapterHierarchyItem | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<TopicItem | null>(null);

  // Search & Difficulty Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Premium & Answer Reveal state
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => isUnlockedProp || getIsPremiumUnlocked());
  const [revealedIds, setRevealedIds] = useState<number[]>([]);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string | undefined>(undefined);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setIsUnlocked(isUnlockedProp || getIsPremiumUnlocked());
    setRevealedIds(getRevealedAnswerIds());
  }, [isUnlockedProp]);

  const FREE_LIMIT = 15;
  const revealedCount = revealedIds.length;

  const handleToggleAnswer = (questionId: number) => {
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

    if (questionId > 15) {
      setModalMessage(
        `प्रश्न क्र. १५ च्या पुढील (Q#${questionId}) सर्व प्रश्नांची उत्तरे व स्पष्टीकरणे पाहण्यासाठी प्रीमियम व्हर्जन अनलॉक करा 🔒`
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
        `तुम्ही विनामूल्य १५ प्रश्नांची उत्तरे व स्पष्टीकरणे पाहिली आहेत! उर्वरित सर्व ३०००+ प्रश्नांची उत्तरे अनलॉक करण्यासाठी प्रीमियम व्हर्जन ॲक्टिव्हेट करा 🔒`
      );
      setShowUnlockModal(true);
    }
  };

  const handleSelectDirectQuestion = (qId: number) => {
    if (!isUnlocked && qId > 15) {
      setModalMessage(
        `प्रश्न क्र. १५ च्या पुढील (Q#${qId}) सर्व प्रश्न व सराव अनलॉक करण्यासाठी प्रीमियम व्हर्जन ॲक्टिव्हेट करा 🔒`
      );
      setShowUnlockModal(true);
      return;
    }
    onSelectQuestionDirect(qId);
  };

  // Filter 30 Main Subjects based on selected section or search
  const filteredMainSubjects = useMemo(() => {
    return MAIN_SUBJECTS_30.filter(subj => {
      const matchSection = subj.section === 'both' || subj.section === selectedSection;
      if (!searchQuery.trim()) return matchSection;

      const qLower = searchQuery.toLowerCase();
      const matchSearch = 
        subj.titleEn.toLowerCase().includes(qLower) ||
        subj.titleMr.toLowerCase().includes(qLower) ||
        subj.titleHi.toLowerCase().includes(qLower) ||
        subj.numberStr.includes(qLower) ||
        subj.chapters.some(c => 
          c.titleEn.toLowerCase().includes(qLower) ||
          c.titleMr.toLowerCase().includes(qLower) ||
          c.topics.some(t => t.titleEn.toLowerCase().includes(qLower))
        );

      return matchSection && matchSearch;
    });
  }, [selectedSection, searchQuery]);

  // Questions matching active drilldown context (Subject / Chapter / Topic / Search / Difficulty)
  const contextQuestions = useMemo(() => {
    return questions.filter(q => {
      // 1. Check Subject/Chapter match if selected
      if (selectedMainSubject) {
        if (selectedChapter) {
          if (selectedTopic) {
            // Match topic keyword or category
            const topicText = `${selectedTopic.titleEn} ${selectedTopic.titleMr}`.toLowerCase();
            const qText = `${q.question} ${q.question_mr || ''} ${q.topic || ''}`.toLowerCase();
            const isTopicMatch = topicText.split(' ').some(word => word.length > 3 && qText.includes(word));
            if (!isTopicMatch && q.category !== selectedChapter.categoryKey) return false;
          } else {
            // Match Chapter category
            if (q.category !== selectedChapter.categoryKey && q.chapterId !== selectedMainSubject.id) {
              const chText = `${selectedChapter.titleEn} ${selectedChapter.titleMr}`.toLowerCase();
              const qText = `${q.question} ${q.question_mr || ''} ${q.category || ''}`.toLowerCase();
              const matchText = chText.split(' ').some(word => word.length > 4 && qText.includes(word));
              if (!matchText) return false;
            }
          }
        } else {
          // Match Main Subject category or ID
          if (q.category !== selectedMainSubject.chapters[0]?.categoryKey && q.chapterId !== selectedMainSubject.id) {
            const subjText = `${selectedMainSubject.titleEn} ${selectedMainSubject.titleMr}`.toLowerCase();
            const qText = `${q.question} ${q.question_mr || ''} ${q.category || ''}`.toLowerCase();
            const matchSubj = subjText.split(' ').some(w => w.length > 4 && qText.includes(w));
            if (!matchSubj) return false;
          }
        }
      }

      // 2. Search Query filter
      if (searchQuery.trim()) {
        const qLower = searchQuery.toLowerCase();
        const matchesQ = 
          q.question.toLowerCase().includes(qLower) ||
          (q.question_mr && q.question_mr.toLowerCase().includes(qLower)) ||
          (q.question_hi && q.question_hi.toLowerCase().includes(qLower)) ||
          q.category.toLowerCase().includes(qLower) ||
          (q.topic && q.topic.toLowerCase().includes(qLower));
        if (!matchesQ) return false;
      }

      // 3. Difficulty Filter
      if (selectedDifficulty !== 'all') {
        if (selectedDifficulty === 'pyq') {
          return q.id % 3 === 0 || q.question.toLowerCase().includes('dhs') || q.question.toLowerCase().includes('aiims');
        } else if (selectedDifficulty === 'expected') {
          return q.id % 2 === 1;
        } else {
          return q.difficulty === selectedDifficulty || (!q.difficulty && selectedDifficulty === 'medium');
        }
      }

      return true;
    });
  }, [questions, selectedMainSubject, selectedChapter, selectedTopic, searchQuery, selectedDifficulty]);

  return (
    <div className="space-y-6 pb-12 animate-fade-in text-slate-100">
      {/* Premium Unlock Modal */}
      {showUnlockModal && (
        <PremiumUnlockModal
          onClose={() => setShowUnlockModal(false)}
          onSuccessUnlock={() => {
            setIsUnlocked(true);
            setShowUnlockModal(false);
          }}
          customMessage={modalMessage}
        />
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            <span>Structured MCQ Learning Platform (३०००+ प्रश्नसंच)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            विषय व प्रकरणांनुसार सराव (Chapter & Topic Hierarchy)
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            अभ्यासाच्या सुलभतेसाठी ३० मुख्य विषय, प्रकरणे व घटकांची रचना करण्यात आली आहे. आपल्या परीक्षेनुसार विभाग निवडा व सराव सुरू करा.
          </p>
        </div>
      </div>

      {/* Section Switcher (Section 1 vs Section 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SECTIONS_DATA.map((sec) => {
          const isActive = selectedSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => {
                setSelectedSection(sec.id);
                setSelectedMainSubject(null);
                setSelectedChapter(null);
                setSelectedTopic(null);
              }}
              className={`text-left p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-gradient-to-br from-slate-900 to-indigo-950 border-teal-400 ring-2 ring-teal-400/40 shadow-xl'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                    isActive ? 'bg-teal-500/20 text-teal-300 border-teal-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {sec.badgeMr}
                  </span>
                  <span className="text-xs font-bold text-teal-400">{sec.languagesMr}</span>
                </div>

                <h3 className="text-base font-extrabold text-white">
                  {sec.titleMr}
                </h3>

                <p className="text-xs text-slate-300 leading-snug">
                  {sec.descriptionMr}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">
                  {sec.id === 'sec1' ? 'मराठी + इंग्रजी माध्यम' : 'हिंदी + इंग्रजी माध्यम'}
                </span>
                <span className={`flex items-center gap-1 ${isActive ? 'text-teal-300' : 'text-slate-500'}`}>
                  <span>{isActive ? 'सक्रिय विभाग ✓' : 'हा विभाग निवडा'}</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Breadcrumb Bar */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold shadow-md">
        <button
          onClick={() => {
            setSelectedMainSubject(null);
            setSelectedChapter(null);
            setSelectedTopic(null);
          }}
          className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-1"
        >
          <span>🏠 मुख्य दालन</span>
        </button>

        <span className="text-slate-600">/</span>

        <span className="text-slate-300">
          {selectedSection === 'sec1' ? 'महाराष्ट्र सार्वजनिक आरोग्य विभाग' : 'केंद्र सरकार परीक्षा'}
        </span>

        {selectedMainSubject && (
          <>
            <span className="text-slate-600">/</span>
            <button
              onClick={() => {
                setSelectedChapter(null);
                setSelectedTopic(null);
              }}
              className="text-teal-400 hover:text-teal-300 hover:underline"
            >
              {selectedMainSubject.numberStr}. {selectedMainSubject.titleMr}
            </button>
          </>
        )}

        {selectedChapter && (
          <>
            <span className="text-slate-600">/</span>
            <button
              onClick={() => setSelectedTopic(null)}
              className="text-teal-400 hover:text-teal-300 hover:underline"
            >
              {selectedChapter.chapterNumber}: {selectedChapter.titleMr}
            </button>
          </>
        )}

        {selectedTopic && (
          <>
            <span className="text-slate-600">/</span>
            <span className="text-emerald-400 font-bold">
              {selectedTopic.topicNumber}: {selectedTopic.titleMr}
            </span>
          </>
        )}
      </div>

      {/* Search Input Bar & Difficulty Filters */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-lg">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="मुख्य विषय, प्रकरण, घटक किंवा प्रश्न शोधा (Search Subject, Chapter, Topic or Question)..."
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
          />
        </div>

        {/* Difficulty Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="text-slate-400 font-bold flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-teal-400" />
            <span>काठिण्य पातळी:</span>
          </span>

          {[
            { id: 'all', label: 'सर्व प्रश्न (All MCQs)' },
            { id: 'very_easy', label: 'अतिशय सोपे (Very Easy)' },
            { id: 'easy', label: 'सोपे (Easy)' },
            { id: 'medium', label: 'मध्यम (Medium)' },
            { id: 'hard', label: 'कठीण (Hard)' },
            { id: 'pyq', label: 'मागील वर्षाचे प्रश्न (PYQ)' },
            { id: 'expected', label: 'संभाव्य प्रश्न (Expected)' },
          ].map((diff) => (
            <button
              key={diff.id}
              onClick={() => setSelectedDifficulty(diff.id)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 border ${
                selectedDifficulty === diff.id
                  ? 'bg-teal-500 text-slate-950 border-teal-400 shadow'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* LEVEL 1: MAIN SUBJECTS GRID (When no main subject is actively selected) */}
      {!selectedMainSubject && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-400" />
              <span>मुख्य विषय सूची (३० Main Subjects)</span>
            </h2>
            <span className="text-xs font-bold text-slate-400">
              {filteredMainSubjects.length} विषय उपलब्ध
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMainSubjects.map((subject) => {
              const totalChaps = subject.chapters.length;
              const totalQuestionsInSubj = subject.chapters.reduce((acc, c) => acc + c.questionCount, 0);

              return (
                <div
                  key={subject.id}
                  onClick={() => setSelectedMainSubject(subject)}
                  className="bg-slate-900 border border-slate-800 hover:border-teal-500/60 rounded-2xl p-5 hover:bg-slate-850 transition-all cursor-pointer group space-y-4 flex flex-col justify-between shadow-lg relative overflow-hidden"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${subject.color} text-white shadow-md`}>
                          {getSubjectIcon(subject.iconName, "w-5 h-5")}
                        </div>
                        <span className="text-xs font-black font-mono bg-slate-950 text-teal-300 px-2.5 py-1 rounded-lg border border-slate-800">
                          {subject.numberStr}
                        </span>
                      </div>
                      <span className="text-[11px] font-extrabold text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-500/30">
                        १५ मोफत प्रश्न (15 Free)
                      </span>
                    </div>

                    <div>
                      {langMode === 'mr' ? (
                        <>
                          <h3 className="text-base font-black text-white group-hover:text-teal-300 transition-colors">
                            {selectedSection === 'sec1' ? subject.titleMr : subject.titleHi || subject.titleMr}
                          </h3>
                          <p className="text-xs text-slate-300 font-bold mt-0.5">
                            {subject.titleEn}
                          </p>
                        </>
                      ) : langMode === 'en' ? (
                        <>
                          <h3 className="text-base font-black text-white group-hover:text-teal-300 transition-colors">
                            {subject.titleEn}
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {selectedSection === 'sec1' ? subject.titleMr : subject.titleHi || subject.titleMr}
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-base font-black text-white group-hover:text-teal-300 transition-colors">
                            {subject.titleEn}
                          </h3>
                          <p className="text-xs text-teal-300 font-extrabold mt-0.5">
                            {selectedSection === 'sec1' ? subject.titleMr : subject.titleHi || subject.titleMr}
                          </p>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {selectedSection === 'sec1' ? subject.descriptionMr : subject.descriptionHi || subject.descriptionMr}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                        <span>{totalChaps} प्रकरणे (Chapters)</span>
                      </span>
                      <span className="text-teal-300">{totalQuestionsInSubj}+ प्रश्न</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMainSubject(subject);
                        }}
                        className="flex-1 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all shadow-md"
                      >
                        <span>प्रकरणे उघडा</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartQuizCategory(subject.chapters[0]?.categoryKey || 'Technical: Radiophysics & Machine Principles');
                        }}
                        className="bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1 border border-slate-700 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-teal-300" />
                        <span>सराव</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* LEVEL 2 & 3: CHAPTERS & TOPICS UNDER SELECTED MAIN SUBJECT */}
      {selectedMainSubject && (
        <div className="space-y-6 animate-fade-in">
          {/* Back button & Subject Title Header */}
          <div className="bg-slate-900 border border-teal-500/30 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-start gap-3">
              <button
                onClick={() => {
                  setSelectedMainSubject(null);
                  setSelectedChapter(null);
                  setSelectedTopic(null);
                }}
                className="bg-slate-800 hover:bg-slate-700 text-teal-300 p-2.5 rounded-xl border border-slate-700 transition-all shrink-0 mt-0.5"
                title="मागे जा"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black font-mono bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
                    Subject #{selectedMainSubject.numberStr}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{selectedMainSubject.titleEn}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {selectedSection === 'sec1' ? selectedMainSubject.titleMr : selectedMainSubject.titleHi || selectedMainSubject.titleMr}
                </h2>

                <p className="text-xs text-slate-300">
                  {selectedSection === 'sec1' ? selectedMainSubject.descriptionMr : selectedMainSubject.descriptionHi || selectedMainSubject.descriptionMr}
                </p>
              </div>
            </div>

            <button
              onClick={() => onStartQuizCategory(selectedMainSubject.chapters[0]?.categoryKey || 'Technical: Radiophysics & Machine Principles')}
              className="bg-gradient-to-r from-teal-500 to-emerald-400 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-teal-500/20 transition-all self-stretch md:self-auto"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>या संपूर्ण विषयाची चाचणी सुरू करा &rarr;</span>
            </button>
          </div>

          {/* Chapters Accordion / List */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>प्रकरणांची यादी (Chapters List)</span>
            </h3>

            <div className="space-y-4">
              {selectedMainSubject.chapters.map((chapter) => {
                const isSelectedCh = selectedChapter?.id === chapter.id;

                return (
                  <div
                    key={chapter.id}
                    className={`bg-slate-900 border rounded-2xl transition-all overflow-hidden ${
                      isSelectedCh
                        ? 'border-teal-400 ring-2 ring-teal-400/30 shadow-2xl bg-slate-900'
                        : 'border-slate-800 hover:border-teal-500/50'
                    }`}
                  >
                    {/* Chapter Header */}
                    <div
                      onClick={() => {
                        setSelectedChapter(isSelectedCh ? null : chapter);
                        setSelectedTopic(null);
                      }}
                      className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 hover:bg-slate-850"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black font-mono bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded-full border border-teal-500/30">
                            {chapter.chapterNumber}
                          </span>
                          <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                            पहिले १५ प्रश्न विनामूल्य (First 15 Free)
                          </span>
                          <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-amber-400" />
                            <span>{chapter.estimatedTime}</span>
                          </span>
                        </div>

                        {langMode === 'mr' ? (
                          <>
                            <h4 className="text-base sm:text-lg font-black text-white">
                              {selectedSection === 'sec1' ? chapter.titleMr : chapter.titleHi || chapter.titleMr}
                            </h4>
                            <p className="text-xs font-bold text-slate-300">
                              {chapter.chapterNumber}: {chapter.titleEn}
                            </p>
                          </>
                        ) : langMode === 'en' ? (
                          <>
                            <h4 className="text-base sm:text-lg font-black text-white">
                              {chapter.chapterNumber}: {chapter.titleEn}
                            </h4>
                            <p className="text-xs text-slate-400">
                              {selectedSection === 'sec1' ? chapter.titleMr : chapter.titleHi || chapter.titleMr}
                            </p>
                          </>
                        ) : (
                          <>
                            <h4 className="text-base sm:text-lg font-black text-white leading-snug">
                              {chapter.chapterNumber}: <span className="font-extrabold text-teal-200">{chapter.titleEn}</span>
                            </h4>
                            <p className="text-xs sm:text-sm font-extrabold text-teal-300 mt-0.5">
                              {selectedSection === 'sec1' ? chapter.titleMr : chapter.titleHi || chapter.titleMr}
                            </p>
                          </>
                        )}

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {selectedSection === 'sec1' ? chapter.descriptionMr : chapter.descriptionHi || chapter.descriptionMr}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onStartQuizCategory(chapter.categoryKey);
                          }}
                          className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1 shadow transition-all"
                        >
                          <Play className="w-3.5 h-3.5 fill-slate-950" />
                          <span>सराव परीक्षा</span>
                        </button>

                        <div className="p-2 bg-slate-800 rounded-xl text-teal-400">
                          {isSelectedCh ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>
                    </div>

                    {/* Level 3: Topics List inside Chapter */}
                    {isSelectedCh && (
                      <div className="border-t border-slate-800 p-5 bg-slate-950 space-y-4 animate-fade-in">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-extrabold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                            <Layers className="w-4 h-4 text-teal-400" />
                            <span>{chapter.chapterNumber} घटकांची यादी (Topics Breakdown)</span>
                          </h5>
                          <span className="text-xs text-slate-400 font-bold">{chapter.topics.length} घटक</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {chapter.topics.map((tp) => {
                            const isSelectedTp = selectedTopic?.id === tp.id;

                            return (
                              <div
                                key={tp.id}
                                onClick={() => setSelectedTopic(isSelectedTp ? null : tp)}
                                className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                                  isSelectedTp
                                    ? 'bg-teal-950/40 border-teal-400 ring-1 ring-teal-400/40'
                                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[11px] font-black font-mono bg-slate-950 text-teal-300 px-2 py-0.5 rounded border border-slate-800">
                                    {tp.topicNumber}
                                  </span>
                                  <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-amber-400" />
                                    <span>{tp.estimatedTime}</span>
                                  </span>
                                </div>

                                {langMode === 'mr' ? (
                                  <>
                                    <h6 className="text-xs sm:text-sm font-extrabold text-white">
                                      {selectedSection === 'sec1' ? tp.titleMr : tp.titleHi || tp.titleMr}
                                    </h6>
                                    <p className="text-[11px] font-bold text-slate-300">
                                      {tp.topicNumber}: {tp.titleEn}
                                    </p>
                                  </>
                                ) : langMode === 'en' ? (
                                  <>
                                    <h6 className="text-xs sm:text-sm font-black text-white">
                                      {tp.topicNumber}: {tp.titleEn}
                                    </h6>
                                    <p className="text-[11px] text-slate-400">
                                      {selectedSection === 'sec1' ? tp.titleMr : tp.titleHi || tp.titleMr}
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <h6 className="text-xs sm:text-sm font-black text-white">
                                      {tp.topicNumber}: <span className="font-extrabold text-teal-200">{tp.titleEn}</span>
                                    </h6>
                                    <p className="text-[11px] font-extrabold text-teal-300 mt-0.5">
                                      {selectedSection === 'sec1' ? tp.titleMr : tp.titleHi || tp.titleMr}
                                    </p>
                                  </>
                                )}

                                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                                  <span className="text-teal-400 font-bold">{tp.questionCount} प्रश्न उपलब्ध</span>
                                  <span className="text-slate-300 font-bold hover:underline">
                                    {isSelectedTp ? 'प्रश्न बंद करा' : 'प्रश्न पाहा &rarr;'}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
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

      {/* LEVEL 4: QUESTIONS PRACTICE LIST (FILTERED BY ACTIVE DRILLDOWN) */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-400" />
            <span>
              {selectedTopic
                ? `${selectedTopic.topicNumber}: ${selectedTopic.titleMr} प्रश्न`
                : selectedChapter
                ? `${selectedChapter.chapterNumber}: ${selectedChapter.titleMr} प्रश्न`
                : selectedMainSubject
                ? `${selectedMainSubject.titleMr} सर्व प्रश्न`
                : 'प्रश्न बँक सराव (Question Bank Practice)'}
            </span>
          </h3>

          <div className="text-xs font-extrabold text-teal-300 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30 self-start sm:self-auto">
            {contextQuestions.length} प्रश्न उपलब्ध
          </div>
        </div>

        {/* Questions Cards List */}
        <div className="space-y-3">
          {contextQuestions.length > 0 ? (
            contextQuestions.slice(0, 30).map((q, idx) => {
              const isLocked = !isUnlocked && q.id > 15;
              const isRevealed = revealedIds.includes(q.id);
              const isExpanded = !!expandedCards[q.id];

              return (
                <div
                  key={q.id}
                  className={`bg-slate-900 border rounded-2xl p-4 sm:p-5 transition-all space-y-3 ${
                    isLocked
                      ? 'border-amber-500/30 bg-slate-900/90'
                      : 'border-slate-800 hover:border-teal-500/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black font-mono bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded-md border border-teal-500/30">
                        Q#{q.id}
                      </span>

                      {isLocked ? (
                        <span className="text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Lock className="w-3 h-3 text-amber-400" />
                          <span>प्रीमियम अनलॉक आवश्यक (Lock - Q16+)</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          विनामूल्य सराव (Free Q1-15)
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] font-bold text-slate-400 uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {q.difficulty || 'medium'}
                    </span>
                  </div>

                  {/* Question Text */}
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base font-extrabold text-white leading-relaxed">
                      {selectedSection === 'sec1' 
                        ? (q.question_mr || q.question) 
                        : (q.question_hi || q.question)}
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      {q.question}
                    </p>
                  </div>

                  {/* Answer Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {(selectedSection === 'sec1' && q.options_mr ? q.options_mr : (q.options_hi || q.options)).map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        onClick={() => handleSelectDirectQuestion(q.id)}
                        className="bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 p-2.5 rounded-xl text-xs text-slate-200 cursor-pointer transition-all font-medium"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>

                  {/* Actions & Reveal Toggle */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleToggleAnswer(q.id)}
                      className={`font-black px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
                        isLocked
                          ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow'
                          : isExpanded
                          ? 'bg-slate-800 text-teal-300 border border-teal-500/30'
                          : 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow'
                      }`}
                    >
                      {isLocked ? (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>उत्तर अनलॉक करा (₹200 Lifetime)</span>
                        </>
                      ) : isExpanded ? (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>उत्तर लपवा</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>अचूक उत्तर व स्पष्टीकरण पाहा</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onAskAITutor(q)}
                      className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                      <span>AI शिक्षक स्पष्टीकरण</span>
                    </button>
                  </div>

                  {/* Answer Explanation Box */}
                  {isExpanded && !isLocked && (
                    <div className="mt-3 p-4 bg-teal-950/50 border border-teal-500/40 rounded-xl space-y-2 animate-fade-in text-xs">
                      <div className="flex items-center gap-2 text-emerald-400 font-black">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>अचूक उत्तर: {q.correct_answer_mr || q.correct_answer}</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        {q.explanation_mr || q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
              <p className="text-sm font-bold text-slate-300">
                निवडलेल्या विषयात किंवा शोधात जुळणारे प्रश्न लोड होत आहेत.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
