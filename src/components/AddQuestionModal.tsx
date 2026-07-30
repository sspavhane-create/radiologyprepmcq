import React, { useState } from 'react';
import { Question } from '../types';
import { CATEGORIES } from '../data/initialQuestions';
import { 
  Plus, 
  Sparkles, 
  X, 
  Check, 
  Loader2, 
  BookOpen, 
  HelpCircle 
} from 'lucide-react';

interface AddQuestionModalProps {
  onClose: () => void;
  onAddQuestion: (q: Question) => void;
  onAddMultipleQuestions: (qs: Question[]) => void;
}

export const AddQuestionModal: React.FC<AddQuestionModalProps> = ({
  onClose,
  onAddQuestion,
  onAddMultipleQuestions,
}) => {
  const [activeTab, setActiveTab] = useState<'manual' | 'ai'>('ai');

  // Manual Form State
  const [category, setCategory] = useState<string>(CATEGORIES[0].name);
  const [questionStem, setQuestionStem] = useState<string>('');
  const [optA, setOptA] = useState<string>('');
  const [optB, setOptB] = useState<string>('');
  const [optC, setOptC] = useState<string>('');
  const [optD, setOptD] = useState<string>('');
  const [correctChoice, setCorrectChoice] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [explanation, setExplanation] = useState<string>('');
  const [sourcePage, setSourcePage] = useState<number | ''>('');

  // AI Generator State
  const [aiCategory, setAiCategory] = useState<string>(CATEGORIES[0].name);
  const [aiCount, setAiCount] = useState<number>(3);
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionStem.trim() || !optA.trim() || !optB.trim()) return;

    const options = [
      `(A) ${optA}`,
      `(B) ${optB}`,
      optC.trim() ? `(C) ${optC}` : undefined,
      optD.trim() ? `(D) ${optD}` : undefined,
    ].filter(Boolean) as string[];

    let correct_answer = `(A) ${optA}`;
    if (correctChoice === 'B') correct_answer = `(B) ${optB}`;
    if (correctChoice === 'C') correct_answer = `(C) ${optC}`;
    if (correctChoice === 'D') correct_answer = `(D) ${optD}`;

    const newQ: Question = {
      id: Date.now(),
      category,
      question: questionStem,
      options,
      correct_answer,
      explanation: explanation || 'Custom user question.',
      source_page: typeof sourcePage === 'number' ? sourcePage : undefined,
      isCustom: true,
    };

    onAddQuestion(newQ);
    onClose();
  };

  const handleAIGenerate = async () => {
    setAiLoading(true);
    setAiError(null);

    try {
      const res = await fetch('/api/ai/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: aiCategory, count: aiCount }),
      });

      const data = await res.json();
      if (data.success && Array.isArray(data.questions)) {
        const generatedList: Question[] = data.questions.map((q: any, idx: number) => ({
          id: Date.now() + idx,
          category: q.category || aiCategory,
          question: q.question,
          options: q.options,
          correct_answer: q.correct_answer,
          explanation: q.explanation,
          source_page: q.source_page || 100,
          isCustom: true,
        }));

        onAddMultipleQuestions(generatedList);
        onClose();
      } else {
        setAiError(data.error || 'Failed to generate questions.');
      }
    } catch (err: any) {
      setAiError('Failed to connect to AI generation server.');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Bar */}
        <div className="bg-slate-800/80 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950'
                  : 'text-slate-400 hover:text-white bg-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Generate with AI</span>
            </button>

            <button
              onClick={() => setActiveTab('manual')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'manual'
                  ? 'bg-teal-500 text-slate-950'
                  : 'text-slate-400 hover:text-white bg-slate-900'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Manual Entry</span>
            </button>
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {activeTab === 'ai' ? (
            /* AI Generator Tab */
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-400" />
                  AI Board Question Generator
                </h3>
                <p className="text-xs text-slate-400">
                  Instantly craft realistic board-style questions for any X-Ray Scientific Officer category using Gemini 2.5 Flash.
                </p>
              </div>

              {aiError && (
                <div className="p-3 bg-rose-950/80 border border-rose-500/40 rounded-xl text-xs text-rose-200">
                  {aiError}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Select Category</label>
                  <select
                    value={aiCategory}
                    onChange={(e) => setAiCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-teal-400"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Number of Questions</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[3, 5].map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setAiCount(num)}
                        className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${
                          aiCount === num
                            ? 'bg-teal-500/20 text-teal-300 border-teal-400'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        {num} High-Yield Questions
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAIGenerate}
                  disabled={aiLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {aiLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Creating Questions...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 fill-slate-950" />
                      <span>Generate & Add to Deck</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            /* Manual Form Tab */
            <form onSubmit={handleManualSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                >
                  {CATEGORIES.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Question Stem</label>
                <textarea
                  required
                  value={questionStem}
                  onChange={(e) => setQuestionStem(e.target.value)}
                  placeholder="Enter the question statement..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-teal-400"
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">(A)</label>
                  <input
                    required
                    type="text"
                    value={optA}
                    onChange={(e) => setOptA(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">(B)</label>
                  <input
                    required
                    type="text"
                    value={optB}
                    onChange={(e) => setOptB(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">(C)</label>
                  <input
                    type="text"
                    value={optC}
                    onChange={(e) => setOptC(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">(D)</label>
                  <input
                    type="text"
                    value={optD}
                    onChange={(e) => setOptD(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Correct Choice</label>
                  <select
                    value={correctChoice}
                    onChange={(e) => setCorrectChoice(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-white font-bold text-emerald-400"
                  >
                    <option value="A">Option (A)</option>
                    <option value="B">Option (B)</option>
                    <option value="C">Option (C)</option>
                    <option value="D">Option (D)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Source Page (Optional)</label>
                  <input
                    type="number"
                    value={sourcePage}
                    onChange={(e) => setSourcePage(e.target.value ? Number(e.target.value) : '')}
                    placeholder="e.g. 45"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Explanation</label>
                <textarea
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="Clinical reason why this answer is correct..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                  rows={2}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-md transition-all"
              >
                Save Question to Deck
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
