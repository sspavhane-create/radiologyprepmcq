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
import { getIsPremiumUnlocked } from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';

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
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);

  useEffect(() => {
    setIsPremium(getIsPremiumUnlocked());
  }, []);

  const refreshPremiumState = () => {
    setIsPremium(getIsPremiumUnlocked());
  };

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  // Question index >= 15 is locked if user is not premium (First 15 questions 0-14 are FREE)
  const isQuestionLocked = !isPremium && currentIndex >= 15;

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
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Header Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-md">
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
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-xs py-1">
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
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center relative ${
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
              className={`px-2 py-1 text-[10px] font-bold rounded ${
                quizLangMode === 'dual' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              दोन्ही
            </button>
            <button
              onClick={() => setQuizLangMode('mr')}
              className={`px-2 py-1 text-[10px] font-bold rounded ${
                quizLangMode === 'mr' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              मराठी
            </button>
            <button
              onClick={() => setQuizLangMode('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded ${
                quizLangMode === 'en' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-xs sm:text-sm font-mono text-cyan-300">
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
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
        {/* Category & Section Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
              {currentQuestion.category}
            </span>
            <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20 uppercase">
              २ गुण (2 Marks)
            </span>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Listen / Read Aloud */}
            <button
              onClick={handleReadAloud}
              className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
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
              className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
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
        <div className="space-y-3">
          {(quizLangMode === 'en' || quizLangMode === 'dual') && (
            <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed tracking-tight">
              {currentQuestion.question}
            </h3>
          )}

          {(quizLangMode === 'mr' || quizLangMode === 'dual') && currentQuestion.question_mr && (
            <div className="p-3.5 bg-teal-950/40 border border-teal-500/30 rounded-xl text-teal-100 font-medium text-base sm:text-lg leading-relaxed">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-1">मराठी भाषांतर:</span>
              {currentQuestion.question_mr}
            </div>
          )}
        </div>

        {/* Multiple Choice Options List or Premium Lock Banner */}
        {isQuestionLocked ? (
          <div className="bg-gradient-to-b from-slate-950 via-amber-950/30 to-slate-950 border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                प्रीमियम लॉक्ड प्रश्न (Question #{currentIndex + 1})
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                पुढील ३०००+ सर्व प्रश्न अनलॉक करा
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                या प्रकरणातील पहिले १५ प्रश्न विनामूल्य (Free Trial) उपलब्ध आहेत. प्रश्न क्र. १६ व त्यापुढील सर्व ३०००+ प्रश्न आणि सर्व ३० अध्यायांचा सराव करण्यासाठी प्रीमियम व्हर्जन एक्टिव्हेट करा.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setShowUnlockModal(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-teal-400 hover:brightness-110 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-xl shadow-amber-500/20 text-sm transition-all"
              >
                <Unlock className="w-4 h-4 stroke-[2.5]" />
                <span>प्रीमियम अनलॉक करा (Unlock Premium)</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3 pt-2">
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
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between gap-4 ${optionStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 ${
                        isRevealed && isCorrectOption
                          ? 'bg-emerald-500 text-slate-950'
                          : isRevealed && isSelected && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : isSelected
                          ? 'bg-teal-400 text-slate-950'
                          : 'bg-slate-700/60 text-slate-300'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    
                    <div className="space-y-1">
                      {(quizLangMode === 'en' || quizLangMode === 'dual') && (
                        <div className="text-sm sm:text-base leading-snug">{option}</div>
                      )}
                      {(quizLangMode === 'mr' || quizLangMode === 'dual') && optionMr && (
                        <div className="text-xs sm:text-sm text-teal-200 font-medium leading-snug">
                          {optionMr}
                        </div>
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
          <div className="mt-6 bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    <CheckCircle2 className="w-4 h-4" /> योग्य उत्तर (Correct Answer)
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/30">
                    <XCircle className="w-4 h-4" /> चुकीचे उत्तर (Incorrect Answer)
                  </span>
                )}
                <span className="text-xs text-slate-400">
                  अचूक पर्याय: <strong className="text-teal-300">{currentQuestion.correct_answer}</strong>
                </span>
              </div>

              {/* Ask AI Tutor Button */}
              <button
                onClick={() => onAskAITutor(currentQuestion)}
                className="flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:from-teal-400 hover:to-cyan-400 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>AI ट्यूटर द्वारे सविस्तर विश्लेषण (Deep AI Breakdown)</span>
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-wider">स्पष्टीकरण (Explanation)</h4>
              
              {currentQuestion.explanation_mr && (
                <div className="p-3 bg-teal-950/30 border border-teal-500/20 rounded-lg text-sm text-teal-100 font-medium leading-relaxed">
                  {currentQuestion.explanation_mr}
                </div>
              )}

              <p className="text-xs text-slate-300 leading-relaxed italic">{currentQuestion.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls Bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>मागील प्रश्न (Previous)</span>
        </button>

        <div className="text-xs text-slate-400 font-medium hidden sm:block">
          {Object.keys(selectedAnswers).length} / {questions.length} उत्तर दिलेले प्रश्न
        </div>

        {isLastQuestion ? (
          <button
            onClick={handleFinish}
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-slate-950 font-extrabold px-6 py-2.5 rounded-xl shadow-lg shadow-teal-500/20 transition-all"
          >
            <span>परीक्षा जमा करा (Submit Exam)</span>
            <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm"
          >
            <span>पुढील प्रश्न (Next Question)</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        )}
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

