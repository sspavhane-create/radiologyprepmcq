import React, { useState, useEffect } from 'react';
import { Question, UserAnswer, LanguageMode } from '../types';
import { 
  Clock, 
  Bookmark, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  Volume2, 
  HelpCircle,
  AlertCircle,
  RotateCcw,
  Globe,
  Award,
  Lock,
  Unlock,
  Key,
  ShieldCheck
} from 'lucide-react';
import { getIsPremiumUnlocked, setPremiumUnlocked } from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
import { getHindiQuestion } from '../lib/translation';

interface QuizViewProps {
  questions: Question[];
  title: string;
  isExamMode?: boolean;
  bookmarkedIds: number[];
  langMode?: LanguageMode;
  onToggleBookmark: (qId: number) => void;
  onFinishQuiz: (answers: Record<number, UserAnswer>, timeSpentSeconds: number) => void;
  onAskAITutor: (q: Question) => void;
  onExitQuiz: () => void;
  initialQuestionIndex?: number;
  isCentral?: boolean;
  isUnlocked?: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  title,
  isExamMode = false,
  bookmarkedIds,
  langMode: initialLangMode = 'dual',
  onToggleBookmark,
  onFinishQuiz,
  onAskAITutor,
  onExitQuiz,
  initialQuestionIndex = 0,
  isCentral = false,
  isUnlocked = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialQuestionIndex);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [timeSpentMap, setTimeSpentMap] = useState<Record<number, number>>({});
  const [totalTimerSeconds, setTotalTimerSeconds] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizLangMode, setQuizLangMode] = useState<LanguageMode>(initialLangMode);
  
  // Premium lock status
  const [isPremium, setIsPremium] = useState<boolean>(() => isUnlocked || getIsPremiumUnlocked());
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);

  useEffect(() => {
    setIsPremium(isUnlocked || getIsPremiumUnlocked());
  }, [isUnlocked]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const refreshPremiumState = () => {
    setPremiumUnlocked(true);
    setIsPremium(true);
  };

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  // Determine if this is a Central or All-India exam (requires Hindi & English language)
  const isCentralMode = isCentral || 
    title.toLowerCase().includes('aiims') || 
    title.toLowerCase().includes('central') || 
    title.toLowerCase().includes('railway') || 
    title.toLowerCase().includes('esic') || 
    title.toLowerCase().includes('pgimer') || 
    title.toLowerCase().includes('jipmer') || 
    title.toLowerCase().includes('sgpgi') || 
    title.toLowerCase().includes('gmc');

  // Question index >= 15 is locked if user is not premium (First 15 questions 0-14 are FREE)
  // Also, entire Exam mode is locked for non-premium users (from question 1)
  const isQuestionLocked = !isPremium && (isExamMode || currentIndex >= 15);

  // Global Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update time spent per question
  const updateQuestionTime = () => {
    const now = Date.now();
    const duration = Math.round((now - questionStartTime) / 1000);
    if (currentQuestion) {
      setTimeSpentMap((prev) => ({
        ...prev,
        [currentQuestion.id]: (prev[currentQuestion.id] || 0) + duration,
      }));
    }
    setQuestionStartTime(now);
  };

  const handleSelectOption = (option: string) => {
    if (!currentQuestion) return;

    // Track chosen option
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));

    // In practice mode, reveal explanation right away
    if (!isExamMode) {
      setShowExplanation((prev) => ({
        ...prev,
        [currentQuestion.id]: true,
      }));
    }
  };

  const handleNext = () => {
    updateQuestionTime();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    updateQuestionTime();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    updateQuestionTime();

    // Construct final answers map
    const finalAnswers: Record<number, UserAnswer> = {};
    questions.forEach((q) => {
      const selected = selectedAnswers[q.id] || '';
      const isCorrect = selected === q.correct_answer;
      finalAnswers[q.id] = {
        questionId: q.id,
        selectedOption: selected,
        isCorrect,
        timeSpentSeconds: timeSpentMap[q.id] || 0,
        timestamp: new Date().toISOString(),
      };
    });

    onFinishQuiz(finalAnswers, totalTimerSeconds);
  };

  // Text-To-Speech helper
  const handleReadAloud = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const qText = (quizLangMode === 'mr' && currentQuestion.question_mr)
        ? currentQuestion.question_mr
        : currentQuestion.question;

      const utterance = new SpeechSynthesisUtterance(qText);
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p>No questions available in this session.</p>
        <button onClick={onExitQuiz} className="mt-4 px-4 py-2 bg-slate-800 text-teal-400 rounded-lg">
          Return to Dashboard
        </button>
      </div>
    );
  }

  const selectedOption = selectedAnswers[currentQuestion.id];
  const isBookmarked = bookmarkedIds.includes(currentQuestion.id);
  const isAnswered = selectedOption !== undefined && selectedOption !== '';
  const isCorrect = selectedOption === currentQuestion.correct_answer;
  const isRevealed = !isExamMode && isAnswered;

  // Format timer string
  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-12 w-full">
      {/* Top Header Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shadow-md min-h-[64px] shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30">
              {title}
            </span>
            {isExamMode && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                २०० गुण परीक्षा (120 Mins)
              </span>
            )}
          </div>
          <h2 className="text-sm sm:text-base font-bold text-white mt-1">
            प्रश्न क्र. {currentIndex + 1} / {questions.length} (Question {currentIndex + 1} of {questions.length})
          </h2>
        </div>

        {/* Question Quick Jump Pills */}
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-xs py-1 scrollbar-thin">
          {questions.map((q, idx) => {
            const hasAns = selectedAnswers[q.id] !== undefined;
            const isCurr = idx === currentIndex;
            const isPillLocked = !isPremium && idx >= 15;

            return (
              <button
                key={q.id}
                onClick={() => {
                  updateQuestionTime();
                  setCurrentIndex(idx);
                }}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center relative shrink-0 ${
                  isCurr
                    ? 'ring-2 ring-teal-400 bg-teal-500 text-slate-950 scale-105'
                    : isPillLocked
                    ? 'bg-amber-950/60 text-amber-400 border border-amber-500/30'
                    : hasAns
                    ? 'bg-slate-700 text-teal-300'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
                title={isPillLocked ? `Question #${idx + 1} (Locked - Premium)` : `Question #${idx + 1}`}
              >
                {isPillLocked ? <Lock className="w-3 h-3 text-amber-400" /> : idx + 1}
              </button>
            );
          })}
        </div>

        {/* Right Timer, Language Toggle & Exit */}
        <div className="flex items-center gap-2">
          {/* Quiz Mode Language Switcher */}
          <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setQuizLangMode('dual')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-colors ${
                quizLangMode === 'dual' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              {isCentralMode ? 'Both (EN+HI)' : 'दोन्ही'}
            </button>
            <button
              onClick={() => setQuizLangMode('mr')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-colors ${
                quizLangMode === 'mr' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              {isCentralMode ? 'हिंदी (HI)' : 'मराठी'}
            </button>
            <button
              onClick={() => setQuizLangMode('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-colors ${
                quizLangMode === 'en' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-xs sm:text-sm font-mono text-cyan-300 tabular-nums">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>{formatTimer(totalTimerSeconds)}</span>
          </div>

          <button
            onClick={onExitQuiz}
            className="text-xs text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            बाहेर पडा (Exit)
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 sm:p-6 space-y-4 shadow-2xl relative flex flex-col justify-between">
        <div className="space-y-4">
          {/* Category & Section Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-lg border border-teal-500/30">
                Q#{currentIndex + 1}
              </span>
              <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20 truncate max-w-[200px] sm:max-w-xs">
                {currentQuestion.category}
              </span>
              <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20 uppercase hidden sm:inline">
                २ गुण (2 Marks)
              </span>
            </div>

            {/* Action Tools */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Listen / Read Aloud */}
              <button
                onClick={handleReadAloud}
                className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                  isSpeaking ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
                title="ऐका (Listen)"
              >
                <Volume2 className="w-4 h-4" />
                <span className="hidden sm:inline">{isSpeaking ? 'थंबवा (Stop)' : 'ऐका (Listen)'}</span>
              </button>

              {/* Bookmark Toggle */}
              <button
                onClick={() => onToggleBookmark(currentQuestion.id)}
                className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-300' : ''}`} />
                <span className="hidden sm:inline">{isBookmarked ? 'जतन केले' : 'जतन करा'}</span>
              </button>
            </div>
          </div>

          {/* Question Text Stem (English / Marathi / Both) */}
          <div className="space-y-2.5">
            {(quizLangMode === 'en' || quizLangMode === 'dual') && (
              <h3 className="text-sm sm:text-base font-extrabold text-white leading-relaxed tracking-normal">
                {currentQuestion.question}
              </h3>
            )}

            {(quizLangMode === 'mr' || quizLangMode === 'dual') && (
              isCentralMode ? (
                <div className="p-3 bg-indigo-950/70 border border-indigo-500/30 rounded-xl text-indigo-100 font-bold text-xs sm:text-sm leading-relaxed shadow-sm">
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider block mb-0.5">हिंदी अनुवाद (हिंदी प्रश्न):</span>
                  {getHindiQuestion(currentQuestion).question}
                </div>
              ) : currentQuestion.question_mr ? (
                <div className="p-3 bg-teal-950/70 border border-teal-500/30 rounded-xl text-teal-100 font-bold text-xs sm:text-sm leading-relaxed shadow-sm">
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider block mb-0.5">मराठी भाषांतर (मराठी प्रश्न):</span>
                  {currentQuestion.question_mr}
                </div>
              ) : null
            )}
          </div>

          {/* Multiple Choice Options List or Premium Lock Banner */}
          {isQuestionLocked ? (
            <div className="bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/30 rounded-2xl p-6 text-center space-y-5 shadow-2xl relative overflow-hidden my-auto">
              {/* Ambient Background Glows */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 mx-auto shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
                  <Lock className="w-7 h-7" />
                </div>
              </div>

              <div className="space-y-1.5 max-w-lg mx-auto">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  Premium Unlock आवश्यक
                </span>

                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  15 प्रश्नांनंतर पुढील सराव आणि मॉक टेस्ट अनलॉक करा
                </h3>
              </div>

              {/* Premium Features List */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-left max-w-md mx-auto space-y-2 relative z-10">
                <h4 className="text-xs font-bold text-amber-300 border-b border-slate-800 pb-1.5 mb-2">Premium मध्ये मिळेल:</h4>
                <ul className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  <li className="flex items-center gap-1.5"><span className="text-base">📚</span> <span className="font-medium">3000+ MCQs</span></li>
                  <li className="flex items-center gap-1.5"><span className="text-base">📖</span> <span className="font-medium">सर्व 30 Chapters</span></li>
                  <li className="flex items-center gap-1.5"><span className="text-base">✅</span> <span className="font-medium">Answers & Explanations</span></li>
                  <li className="flex items-center gap-1.5"><span className="text-base">📝</span> <span className="font-medium">Full Mock Tests</span></li>
                  <li className="flex items-center gap-1.5"><span className="text-base">📱</span> <span className="font-medium">1 Device Access</span></li>
                  <li className="flex items-center gap-1.5"><span className="text-base">⭐</span> <span className="font-bold text-amber-300">₹200 Only</span></li>
                </ul>
              </div>

              <div className="pt-1 flex flex-wrap items-center justify-center gap-3 relative z-10">
                <button
                  onClick={() => setShowUnlockModal(true)}
                  className="flex items-center justify-center w-full sm:w-auto gap-2 bg-gradient-to-r from-amber-500 to-amber-300 hover:to-amber-200 text-slate-950 font-black px-6 py-3 rounded-xl shadow-xl shadow-amber-500/20 text-xs sm:text-sm transition-all"
                >
                  <Unlock className="w-4 h-4 stroke-[2.5]" />
                  <span>Unlock Premium ₹200 only</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2.5 pt-1">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrectOption = option === currentQuestion.correct_answer;
                const optionMr = (currentQuestion.options_mr && currentQuestion.options_mr[idx]) || '';

                let optionStyle = 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:border-slate-500 hover:bg-slate-800';

                if (isRevealed) {
                  if (isCorrectOption) {
                    optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold shadow-md shadow-emerald-500/10';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 font-semibold';
                  } else {
                    optionStyle = 'bg-slate-900/50 border-slate-800 text-slate-500 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-teal-950/80 border-teal-400 text-teal-100 font-bold shadow-md shadow-teal-500/10';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option)}
                    disabled={isRevealed}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer min-h-[48px] ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-black flex-shrink-0 mt-0.5 shadow-sm ${
                          isRevealed && isCorrectOption
                            ? 'bg-emerald-500 text-slate-950'
                            : isRevealed && isSelected && !isCorrect
                            ? 'bg-rose-500 text-white'
                            : isSelected
                            ? 'bg-teal-400 text-slate-950'
                            : 'bg-slate-700/80 text-slate-200'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      
                      <div className="space-y-0.5">
                        {(quizLangMode === 'en' || quizLangMode === 'dual') && (
                          <div className="text-xs sm:text-sm font-bold leading-snug">{option}</div>
                        )}
                        {(quizLangMode === 'mr' || quizLangMode === 'dual') && (
                          isCentralMode ? (
                            <div className="text-[11px] sm:text-xs text-indigo-200 font-semibold leading-snug">
                              {getHindiQuestion(currentQuestion).options[idx] || option}
                            </div>
                          ) : optionMr ? (
                            <div className="text-[11px] sm:text-xs text-teal-300 font-semibold leading-snug">
                              {optionMr}
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>

                    {isRevealed && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    )}
                    {isRevealed && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Immediate Explanation Card (Practice Mode) */}
          {isRevealed && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" /> योग्य उत्तर (Correct)
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/30">
                      <XCircle className="w-3.5 h-3.5" /> चुकीचे उत्तर (Incorrect)
                    </span>
                  )}
                  <span className="text-[11px] text-slate-400">
                    अचूक पर्याय: <strong className="text-teal-300">{currentQuestion.correct_answer}</strong>
                  </span>
                </div>

                {/* Ask AI Tutor Button */}
                <button
                  onClick={() => onAskAITutor(currentQuestion)}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:from-teal-400 hover:to-cyan-400 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>AI स्पष्टीकरण (AI Breakdown)</span>
                </button>
              </div>

              <div className="space-y-1.5">
                <h4 className={`text-[10px] font-semibold uppercase tracking-wider ${isCentralMode ? 'text-indigo-400' : 'text-teal-400'}`}>
                  स्पष्टीकरण (Explanation)
                </h4>
                
                {isCentralMode ? (
                  <div className="p-2.5 bg-indigo-950/30 border border-indigo-500/20 rounded-lg text-xs text-indigo-100 font-medium leading-relaxed">
                    {getHindiQuestion(currentQuestion).explanation}
                  </div>
                ) : currentQuestion.explanation_mr ? (
                  <div className="p-2.5 bg-teal-950/30 border border-teal-500/20 rounded-lg text-xs text-teal-100 font-medium leading-relaxed">
                    {currentQuestion.explanation_mr}
                  </div>
                ) : null}

                <p className="text-[11px] text-slate-300 leading-relaxed italic">{currentQuestion.explanation}</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Controls Bar */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>मागील (Previous)</span>
          </button>

          <div className="text-[11px] text-slate-400 font-medium hidden sm:block">
            {Object.keys(selectedAnswers).length} / {questions.length} उत्तर दिलेले प्रश्न
          </div>

          {isLastQuestion ? (
            <button
              onClick={handleFinish}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-slate-950 font-extrabold px-5 py-2 rounded-xl shadow-lg shadow-teal-500/20 transition-all text-xs sm:text-sm"
            >
              <span>परीक्षा जमा करा (Submit)</span>
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-4 py-2 rounded-xl shadow-md transition-all text-xs sm:text-sm"
            >
              <span>पुढील प्रश्न (Next)</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>

      {showUnlockModal && (
        <PremiumUnlockModal
          onClose={() => setShowUnlockModal(false)}
          onSuccessUnlock={refreshPremiumState}
        />
      )}
    </div>
  );
};

