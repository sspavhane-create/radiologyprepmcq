import React, { useState, useEffect } from 'react';
import { Question, AIExplanationResult } from '../types';
import { 
  Sparkles, 
  X, 
  BrainCircuit, 
  BookOpen, 
  Lightbulb, 
  CheckCircle2, 
  Send, 
  Loader2,
  Stethoscope
} from 'lucide-react';

interface AITutorModalProps {
  question: Question | null;
  onClose: () => void;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({ question, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<AIExplanationResult | null>(null);
  const [followUpQuery, setFollowUpQuery] = useState<string>('');
  const [followUpAnswer, setFollowUpAnswer] = useState<string>('');
  const [followUpLoading, setFollowUpLoading] = useState<boolean>(false);

  useEffect(() => {
    if (question) {
      fetchAIExplanation(question);
    } else {
      setAiResult(null);
      setFollowUpAnswer('');
    }
  }, [question]);

  const fetchAIExplanation = async (q: Question) => {
    setLoading(true);
    setFollowUpAnswer('');
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(q),
      });
      const data = await res.json();
      if (data.success && data.explanation) {
        setAiResult(data.explanation);
      }
    } catch (err) {
      console.error('AI Tutor Fetch Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendFollowUp = async () => {
    if (!followUpQuery.trim() || !question) return;

    setFollowUpLoading(true);
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...question,
          question: `${question.question}\nFollow-up question from student: "${followUpQuery}"`
        }),
      });
      const data = await res.json();
      if (data.success && data.explanation) {
        setFollowUpAnswer(data.explanation.deepExplanation);
      }
    } catch (err) {
      setFollowUpAnswer('Sorry, I encountered an issue generating a response to your question. Please try again.');
    } finally {
      setFollowUpLoading(false);
    }
  };

  if (!question) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-teal-500/20">
              <BrainCircuit className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>AI Radiography Scientific Officer Tutor</span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">
                  Gemini 2.5
                </span>
              </h2>
              <p className="text-xs text-slate-400">Deep Clinical Breakdown & Board Mnemonics</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200">
          {/* Question Summary Banner */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-teal-400">
              <span>{question.category}</span>
              {question.source_page && <span>Source: Page {question.source_page}</span>}
            </div>
            <p className="text-sm font-semibold text-white">{question.question}</p>
            <p className="text-xs text-emerald-400 font-bold">
              Correct Answer: {question.correct_answer}
            </p>
          </div>

          {loading ? (
            <div className="py-12 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-teal-400 animate-spin mx-auto" />
              <p className="text-sm font-semibold text-slate-300">Consulting Senior Radiography Educational Assistant...</p>
              <p className="text-xs text-slate-500">Synthesizing ASRT practice standards & clinical correlations</p>
            </div>
          ) : aiResult ? (
            <div className="space-y-5 animate-fadeIn">
              {/* Deep Explanation */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> Deep Clinical Explanation
                </h3>
                <p className="text-sm leading-relaxed text-slate-200 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                  {aiResult.deepExplanation}
                </p>
              </div>

              {/* Clinical Correlation */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4" /> Hospital / X-Ray Department Correlation
                </h3>
                <p className="text-sm leading-relaxed text-slate-200 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                  {aiResult.clinicalCorrelation}
                </p>
              </div>

              {/* Mnemonic Aid */}
              {aiResult.mnemonic && (
                <div className="bg-gradient-to-r from-amber-950/60 to-slate-900 border border-amber-500/40 p-4 rounded-xl space-y-1">
                  <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-400" /> Board Mnemonic / Memory Trick
                  </h3>
                  <p className="text-sm font-bold text-amber-200">{aiResult.mnemonic}</p>
                </div>
              )}

              {/* Key Takeaways */}
              {aiResult.keyTakeaways?.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Key Board Exam Takeaways
                  </h3>
                  <ul className="space-y-1.5">
                    {aiResult.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Follow Up Q&A Section */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Ask AI Tutor a Follow-Up Question
                </h3>

                {followUpAnswer && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-teal-500/30 text-xs text-slate-200 space-y-1">
                    <span className="font-bold text-teal-400 block">AI Tutor Response:</span>
                    <p className="leading-relaxed">{followUpAnswer}</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={followUpQuery}
                    onChange={(e) => setFollowUpQuery(e.target.value)}
                    placeholder="e.g. Can you explain why choice (A) is incorrect?"
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                    onKeyDown={(e) => e.key === 'Enter' && handleSendFollowUp()}
                  />
                  <button
                    onClick={handleSendFollowUp}
                    disabled={followUpLoading || !followUpQuery.trim()}
                    className="bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all"
                  >
                    {followUpLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                    <span>Ask</span>
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
