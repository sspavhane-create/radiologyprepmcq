import React, { useState } from 'react';
import { Question, QuizSession, UserAnswer } from '../types';
import { CATEGORIES } from '../data/initialQuestions';
import { 
  HeartPulse, 
  ShieldCheck, 
  Syringe, 
  Layers, 
  Play, 
  Sparkles, 
  ChevronRight, 
  FileText,
  Bookmark,
  CheckCircle2,
  XCircle
} from 'lucide-react';

interface CategoryViewProps {
  questions: Question[];
  quizSessions: QuizSession[];
  bookmarkedIds: number[];
  onStartQuizCategory: (categoryName: string) => void;
  onAskAITutor: (q: Question) => void;
  onGenerateCategoryQuestions: (categoryName: string) => void;
  onSelectQuestionDirect: (qId: number) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  questions,
  quizSessions,
  bookmarkedIds,
  onStartQuizCategory,
  onAskAITutor,
  onGenerateCategoryQuestions,
  onSelectQuestionDirect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].name);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return HeartPulse;
      case 'ShieldCheck': return ShieldCheck;
      case 'Syringe': return Syringe;
      default: return Layers;
    }
  };

  const activeCategoryInfo = CATEGORIES.find(c => c.name === selectedCategory) || CATEGORIES[0];
  const activeQuestions = questions.filter(q => q.category === selectedCategory);

  // Compute category statistics
  let attempts = 0;
  let correct = 0;
  quizSessions.forEach(session => {
    Object.entries(session.answers).forEach(([qIdStr, ans]) => {
      const q = questions.find(item => item.id === Number(qIdStr));
      const userAnswer = ans as UserAnswer;
      if (q && q.category === selectedCategory) {
        attempts++;
        if (userAnswer.isCorrect) correct++;
      }
    });
  });

  const accuracyRate = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

  return (
    <div className="space-y-8 pb-12">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Category Mastery & Syllabus Breakdown</h1>
        <p className="text-sm text-slate-400">Deepen knowledge in specific radiography subject areas</p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {CATEGORIES.map(cat => {
          const IconComp = getCategoryIcon(cat.iconName);
          const isSelected = selectedCategory === cat.name;
          const catCount = questions.filter(q => q.category === cat.name).length;

          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`p-4 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-slate-800 border-teal-400 shadow-lg shadow-teal-500/10'
                  : 'bg-slate-900/80 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 text-teal-400'}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-950 text-slate-300">
                  {catCount} Qs
                </span>
              </div>
              <h3 className={`text-sm font-bold ${isSelected ? 'text-teal-300' : 'text-slate-200'}`}>
                {cat.name}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Selected Category Details & Questions */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                ACTIVE TOPIC
              </span>
              <span className="text-xs text-slate-400">
                Mastery: <strong className="text-teal-300">{accuracyRate}%</strong> ({attempts} attempts)
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-white">{activeCategoryInfo.name}</h2>
            <p className="text-xs text-slate-300 leading-relaxed">{activeCategoryInfo.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onGenerateCategoryQuestions(selectedCategory)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/30 font-semibold px-3.5 py-2 rounded-xl text-xs transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Generate AI Questions</span>
            </button>

            <button
              onClick={() => onStartQuizCategory(selectedCategory)}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shadow-md transition-all"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Practice Category</span>
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-300 flex items-center justify-between">
            <span>Questions in this Topic ({activeQuestions.length})</span>
            <span className="text-xs text-slate-400 font-normal">Click question to open</span>
          </h3>

          <div className="space-y-3">
            {activeQuestions.map((q, idx) => {
              const isSaved = bookmarkedIds.includes(q.id);

              return (
                <div
                  key={q.id}
                  onClick={() => onSelectQuestionDirect(q.id)}
                  className="cursor-pointer bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-teal-500/50 p-4 rounded-xl transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
                      <span>Q#{q.id}</span>
                      {q.source_page && <span className="text-slate-400 font-normal">| Source: Pg {q.source_page}</span>}
                    </div>

                    <div className="flex items-center gap-2">
                      {isSaved && <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                      <span className="text-xs text-teal-400 font-semibold group-hover:underline">Study Question &rarr;</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-100 group-hover:text-teal-300 transition-colors">
                    {q.question}
                  </p>

                  <p className="text-xs text-slate-400 line-clamp-1">
                    Correct Answer: <strong className="text-emerald-400">{q.correct_answer}</strong>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
