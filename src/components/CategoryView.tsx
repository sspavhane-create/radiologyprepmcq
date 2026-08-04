import React, { useState, useEffect, useMemo } from 'react';
import { Question, QuizSession, LanguageMode } from '../types';
import { ALL_30_CHAPTERS, ChapterItem } from '../data/chaptersData';
import { 
  getIsPremiumUnlocked, 
  getRevealedAnswerIds, 
  addRevealedAnswerId 
} from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
import { 
  BookOpen, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Play, 
  ChevronRight, 
  Eye, 
  HelpCircle, 
  Clock, 
  Filter, 
  ArrowLeft,
  Lock
} from 'lucide-react';

interface CategoryViewProps {
  questions: Question[];
  quizSessions: QuizSession[];
  bookmarkedIds: number[];
  selectedCategoryFilter?: string | null;
  onSelectCategoryFilter?: (categoryName: string | null) => void;
  onStartQuizCategory: (categoryName: string) => void;
  onStartQuizChapter?: (chapterId: number) => void;
  onAskAITutor: (q: Question) => void;
  onGenerateCategoryQuestions: (categoryName: string) => void;
  onSelectQuestionDirect: (qId: number) => void;
  langMode?: LanguageMode;
  isUnlocked?: boolean;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  questions,
  quizSessions,
  bookmarkedIds,
  selectedCategoryFilter = null,
  onSelectCategoryFilter,
  onStartQuizCategory,
  onStartQuizChapter,
  onAskAITutor,
  onGenerateCategoryQuestions,
  onSelectQuestionDirect,
  langMode = 'dual',
  isUnlocked: isUnlockedProp = false,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<ChapterItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => isUnlockedProp || getIsPremiumUnlocked());
  const [revealedIds, setRevealedIds] = useState<number[]>([]);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string | undefined>(undefined);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setIsUnlocked(isUnlockedProp || getIsPremiumUnlocked());
    setRevealedIds(getRevealedAnswerIds());
  }, [isUnlockedProp]);

  // If selectedCategoryFilter is passed from parent (e.g. Dashboard click), match chapter
  useEffect(() => {
    if (selectedCategoryFilter) {
      const found = ALL_30_CHAPTERS.find(c => c.category === selectedCategoryFilter || c.title.toLowerCase().includes(selectedCategoryFilter.toLowerCase()));
      if (found) {
        setSelectedChapter(found);
      }
    }
  }, [selectedCategoryFilter]);

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

  // Filter 30 Chapters based on search query
  const filteredChapters = useMemo(() => {
    return ALL_30_CHAPTERS.filter(ch => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        ch.title.toLowerCase().includes(q) ||
        ch.titleMr.toLowerCase().includes(q) ||
        ch.description.toLowerCase().includes(q) ||
        ch.descriptionMr.toLowerCase().includes(q) ||
        ch.part.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  // Strict chapter matching helper
  const matchesChapterHelper = (q: Question, chapter: ChapterItem) => {
    return (
      q.chapterId === chapter.id ||
      q.source_page === chapter.id ||
      (q.chapter_name && q.chapter_name.toLowerCase().includes(chapter.title.toLowerCase())) ||
      (q.chapter_name && chapter.titleMr && q.chapter_name.toLowerCase().includes(chapter.titleMr.toLowerCase()))
    );
  };

  // Questions matching active chapter & search & difficulty
  const contextQuestions = useMemo(() => {
    return questions.filter(q => {
      if (selectedChapter) {
        const matchesChapter = matchesChapterHelper(q, selectedChapter);
        if (!matchesChapter) return false;
      }

      if (searchQuery.trim() && !selectedChapter) {
        const qLower = searchQuery.toLowerCase();
        const matchesQ = 
          q.question.toLowerCase().includes(qLower) ||
          (q.question_mr && q.question_mr.toLowerCase().includes(qLower)) ||
          (q.question_hi && q.question_hi.toLowerCase().includes(qLower)) ||
          q.category.toLowerCase().includes(qLower);
        if (!matchesQ) return false;
      }

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
  }, [questions, selectedChapter, searchQuery, selectedDifficulty]);

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
            <span>अध्यायानुसार मुख्य प्रश्नसंच (30 Main Chapters Bank)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            सर्व ३० मुख्य प्रकरणांनुसार प्रश्न बँक व सराव
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            प्रत्येक मुख्य प्रकरणात (Chapter 1 ते 30) सर्व जोडलेले व मर्ज केलेले प्रश्न थेट एकाच ठिकाणी उपलब्ध आहेत. सब-चाप्टर न ठेवता थेट सर्व प्रश्न सराव सुरू करा.
          </p>
        </div>
      </div>

      {/* Search Input Bar & Difficulty Filters */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-lg">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="प्रकरण किंवा प्रश्न शोधा (Search Chapter or Question)..."
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

      {/* BREADCRUMB IF CHAPTER SELECTED */}
      {selectedChapter && (
        <div className="bg-slate-950 border border-teal-500/40 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedChapter(null)}
              className="bg-slate-900 hover:bg-slate-800 text-teal-300 p-2 rounded-xl border border-slate-700 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
                  {selectedChapter.part}
                </span>
                <span className="text-xs text-slate-400">Ch #{selectedChapter.id}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                {selectedChapter.titleMr}
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              if (onStartQuizChapter) {
                onStartQuizChapter(selectedChapter.id);
              } else {
                onStartQuizCategory(selectedChapter.category);
              }
            }}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow transition-all shrink-0"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>सराव परीक्षा सुरू करा &rarr;</span>
          </button>
        </div>
      )}

      {/* LEVEL 1: ALL 30 CHAPTERS LIST (When no chapter is selected) */}
      {!selectedChapter && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-400" />
              <span>मुख्य प्रकरणे सूची (30 Main Chapters List)</span>
            </h2>
            <span className="text-xs font-bold text-slate-400">
              {filteredChapters.length} प्रकरणांची यादी
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredChapters.map((chapter) => {
              // Count questions belonging to this chapter using strict helper
              const chQuestionsCount = questions.filter(q => matchesChapterHelper(q, chapter)).length;

              return (
                <div
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter)}
                  className="bg-slate-900 border border-slate-800 hover:border-teal-500/60 rounded-2xl p-5 hover:bg-slate-850 transition-all cursor-pointer group space-y-4 flex flex-col justify-between shadow-lg relative overflow-hidden"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black font-mono bg-slate-950 text-teal-300 px-2.5 py-1 rounded-lg border border-slate-800">
                        {chapter.part} (Ch #{chapter.id})
                      </span>
                      <span className="text-[11px] font-extrabold text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-500/30">
                        {chQuestionsCount > 0 ? `${chQuestionsCount} प्रश्न` : '१५+ प्रश्न'}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white group-hover:text-teal-300 transition-colors leading-snug">
                      {chapter.titleMr}
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">
                      {chapter.title}
                    </p>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {chapter.descriptionMr || chapter.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedChapter(chapter);
                      }}
                      className="flex-1 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all shadow-md"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>प्रश्न बँक उघडा</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onStartQuizChapter) {
                          onStartQuizChapter(chapter.id);
                        } else {
                          onStartQuizCategory(chapter.category);
                        }
                      }}
                      className="bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1 border border-slate-700 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-teal-300" />
                      <span>सराव</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* QUESTIONS PRACTICE LIST (Directly under selected chapter) */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-400" />
            <span>
              {selectedChapter 
                ? `${selectedChapter.titleMr} (${contextQuestions.length} प्रश्न)`
                : 'सर्व उपलब्ध प्रश्न (All Available Questions)'}
            </span>
          </h3>

          <div className="text-xs font-extrabold text-teal-300 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30 self-start sm:self-auto">
            {contextQuestions.length} प्रश्न उपलब्ध
          </div>
        </div>

        {/* Questions Cards List */}
        <div className="space-y-3">
          {contextQuestions.length > 0 ? (
            contextQuestions.map((q, idx) => {
              const isLocked = !isUnlocked && q.id > 15;
              const isRevealed = revealedIds.includes(q.id);
              const isExpanded = !!expandedCards[q.id];

              return (
                <div
                  key={`${q.id}_${idx}`}
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

                      {q.chapterId && (
                        <span className="text-[10px] font-black bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          Ch #{q.chapterId}
                        </span>
                      )}

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
                      {selectedChapter || langMode === 'mr' 
                        ? (q.question_mr || q.question) 
                        : (q.question_hi || q.question)}
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      {q.question}
                    </p>
                  </div>

                  {/* Answer Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {(langMode === 'mr' && q.options_mr ? q.options_mr : (q.options_hi || q.options)).map((opt, oIdx) => (
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
                या प्रकरणासाठी कोणतेही प्रश्न आढळले नाहीत. कृपया प्रश्न बँक जनरेटर किंवा JSON अपलोडमधून प्रश्न ऍड करा.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
