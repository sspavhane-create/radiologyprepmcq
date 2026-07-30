import React from 'react';
import { Question, UserAnswer, QuizSession } from '../types';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  FileText,
  AlertCircle
} from 'lucide-react';

interface ResultSummaryProps {
  questions: Question[];
  answers: Record<number, UserAnswer>;
  timeSpentSeconds: number;
  sessionTitle: string;
  onRetakeQuiz: () => void;
  onRetakeMissedOnly: (missedQIds: number[]) => void;
  onNavigateHome: () => void;
  onAskAITutor: (q: Question) => void;
}

export const ResultSummary: React.FC<ResultSummaryProps> = ({
  questions,
  answers,
  timeSpentSeconds,
  sessionTitle,
  onRetakeQuiz,
  onRetakeMissedOnly,
  onNavigateHome,
  onAskAITutor,
}) => {
  const totalQuestions = questions.length;
  let correctCount = 0;
  const missedQuestionIds: number[] = [];

  questions.forEach(q => {
    const userAns = answers[q.id];
    if (userAns?.isCorrect) {
      correctCount++;
    } else {
      missedQuestionIds.push(q.id);
    }
  });

  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = accuracy >= 70; // 70% standard pass threshold

  // Format time string
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s}s`;
  };

  const avgTimePerQuestion = totalQuestions > 0 ? Math.round(timeSpentSeconds / totalQuestions) : 0;

  // Category breakdown calculations
  const categoryStats: Record<string, { total: number; correct: number }> = {};
  questions.forEach(q => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, correct: 0 };
    }
    categoryStats[q.category].total++;
    if (answers[q.id]?.isCorrect) {
      categoryStats[q.category].correct++;
    }
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Top Header Card */}
      <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 border shadow-xl ${
        isPassed
          ? 'bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-emerald-500/40'
          : 'bg-gradient-to-r from-rose-950 via-slate-900 to-slate-950 border-rose-500/40'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800 text-slate-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{sessionTitle} Results</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isPassed ? 'Exam Passed! Excellent Performance' : 'Review Needed — Target Weak Areas'}
            </h1>

            <p className="text-slate-300 text-sm leading-relaxed">
              {isPassed
                ? 'You demonstrated strong clinical competence across ASRT radiography principles and regulations.'
                : 'Review the explanations below and re-test missed questions to boost your mastery.'}
            </p>
          </div>

          {/* Big Score Dial Badge */}
          <div className="flex flex-col items-center justify-center bg-slate-950/80 p-6 rounded-2xl border border-slate-800 min-w-[180px]">
            <span className={`text-5xl font-black ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
              {accuracy}%
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
              Score ({correctCount}/{totalQuestions})
            </span>
            <span className={`mt-2 px-3 py-0.5 rounded-full text-[11px] font-bold ${
              isPassed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
            }`}>
              {isPassed ? 'PASSED (≥70%)' : 'RETAKE SUGGESTED'}
            </span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Total Time</div>
            <div className="text-base font-bold text-cyan-300 flex items-center justify-center gap-1 mt-0.5">
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeSpentSeconds)}</span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Avg / Question</div>
            <div className="text-base font-bold text-teal-300 mt-0.5">{avgTimePerQuestion}s</div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Correct</div>
            <div className="text-base font-bold text-emerald-400 mt-0.5">{correctCount}</div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Missed</div>
            <div className="text-base font-bold text-rose-400 mt-0.5">{missedQuestionIds.length}</div>
          </div>
        </div>
      </div>

      {/* Category Mastery Breakdown */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
        <h2 className="text-lg font-bold text-white tracking-tight">Category Readiness Breakdown</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(categoryStats).map(([catName, stats]) => {
            const catAcc = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            return (
              <div key={catName} className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-200 truncate">{catName}</span>
                  <span className="text-teal-400 font-bold">{catAcc}% ({stats.correct}/{stats.total})</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      catAcc >= 70 ? 'bg-emerald-400' : catAcc >= 50 ? 'bg-amber-400' : 'bg-rose-400'
                    }`}
                    style={{ width: `${catAcc}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onNavigateHome}
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold border border-slate-700 transition-colors"
        >
          Return to Dashboard
        </button>

        <div className="flex flex-wrap items-center gap-3">
          {missedQuestionIds.length > 0 && (
            <button
              onClick={() => onRetakeMissedOnly(missedQuestionIds)}
              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-sm shadow-md transition-all"
            >
              <RotateCcw className="w-4 h-4 stroke-[2.5]" />
              <span>Retake Missed ({missedQuestionIds.length})</span>
            </button>
          )}

          <button
            onClick={onRetakeQuiz}
            className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-sm shadow-md transition-all"
          >
            <span>Retake Full Session</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white tracking-tight">Question Review & Explanations</h2>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userAns = answers[q.id];
            const isCorrect = userAns?.isCorrect;
            const selectedOpt = userAns?.selectedOption || 'Not Answered';

            return (
              <div
                key={q.id}
                className={`p-5 rounded-2xl border space-y-3 bg-slate-900 ${
                  isCorrect ? 'border-slate-800' : 'border-rose-500/40'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">Q#{idx + 1}</span>
                    <span className="text-xs text-teal-300 font-semibold bg-teal-500/10 px-2 py-0.5 rounded">
                      {q.category}
                    </span>
                    {q.source_page && (
                      <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        Pg {q.source_page}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/30">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect
                      </span>
                    )}

                    <button
                      onClick={() => onAskAITutor(q)}
                      className="flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-teal-400 fill-teal-400/20" />
                      <span>AI Tutor</span>
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white">{q.question}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className={`p-2.5 rounded-lg border ${
                    isCorrect ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300' : 'bg-rose-950/40 border-rose-800 text-rose-300'
                  }`}>
                    <span className="block text-[10px] font-bold uppercase opacity-80">Your Choice</span>
                    <span className="font-semibold">{selectedOpt}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-300">
                    <span className="block text-[10px] font-bold uppercase opacity-80">Correct Answer</span>
                    <span className="font-semibold">{q.correct_answer}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold text-teal-400 block mb-0.5">Explanation:</span>
                  <p className="text-slate-400 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
