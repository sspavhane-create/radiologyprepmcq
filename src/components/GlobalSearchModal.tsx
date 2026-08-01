import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, HelpCircle, ArrowRight, Layers, Award } from 'lucide-react';
import { Question } from '../types';
import { MAIN_SUBJECTS_30 } from '../data/subjectHierarchyData';

interface GlobalSearchModalProps {
  questions: Question[];
  onClose: () => void;
  onSelectQuestion: (qId: number) => void;
  onSelectChapter: (catName: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  questions,
  onClose,
  onSelectQuestion,
  onSelectChapter,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter Main Subjects & Chapters
  const matchingSubjects = useMemo(() => {
    if (!searchTerm.trim()) return MAIN_SUBJECTS_30.slice(0, 6);
    const term = searchTerm.toLowerCase();
    return MAIN_SUBJECTS_30.filter(
      (s) =>
        s.titleEn.toLowerCase().includes(term) ||
        s.titleMr.toLowerCase().includes(term) ||
        s.titleHi.toLowerCase().includes(term) ||
        s.numberStr.includes(term) ||
        s.chapters.some(c => 
          c.titleEn.toLowerCase().includes(term) ||
          c.titleMr.toLowerCase().includes(term) ||
          c.chapterNumber.toLowerCase().includes(term) ||
          c.topics.some(t => t.titleEn.toLowerCase().includes(term) || t.titleMr.toLowerCase().includes(term))
        )
    );
  }, [searchTerm]);

  // Filter Questions
  const filteredQuestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return questions
      .filter(
        (q) =>
          q.question.toLowerCase().includes(term) ||
          (q.question_mr && q.question_mr.toLowerCase().includes(term)) ||
          (q.question_hi && q.question_hi.toLowerCase().includes(term)) ||
          q.category.toLowerCase().includes(term) ||
          (q.topic && q.topic.toLowerCase().includes(term))
      )
      .slice(0, 15);
  }, [searchTerm, questions]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-slate-900 rounded-3xl border border-teal-500/30 max-w-2xl w-full p-5 space-y-4 shadow-2xl relative text-slate-100">
        {/* Top Search Input Bar */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 flex-1 bg-slate-950 border border-slate-800 px-3.5 py-2.5 rounded-2xl">
            <Search className="w-5 h-5 text-teal-400" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="३०००+ प्रश्न, विषय, प्रकरण किंवा घटक शोधा (e.g. CT, MRI, Physics)..."
              className="w-full bg-transparent border-none text-xs sm:text-sm font-medium text-white focus:outline-none placeholder:text-slate-500"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-all cursor-pointer font-extrabold"
          >
            ✕
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          {/* Main Subjects / Chapters */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-teal-400" />
              <span>मुख्य विषय व प्रकरणे (Matching Subjects & Chapters)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {matchingSubjects.map((subj) => (
                <button
                  key={subj.id}
                  onClick={() => {
                    onSelectChapter(subj.chapters[0]?.categoryKey || 'Technical: Radiophysics & Machine Principles');
                    onClose();
                  }}
                  className="p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/50 rounded-xl text-left transition-all flex items-center justify-between gap-2 group cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black font-mono bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
                        {subj.numberStr}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium line-clamp-1">{subj.titleEn}</span>
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-teal-300 line-clamp-1">
                      {subj.titleMr}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Matching Questions List */}
          {filteredQuestions.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>शोधलेले MCQ प्रश्न ({filteredQuestions.length})</span>
              </h4>
              <div className="space-y-2">
                {filteredQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(q.id);
                      onClose();
                    }}
                    className="w-full p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 rounded-xl text-left transition-all space-y-1 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-500/30">
                        {q.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono font-bold">#Q{q.id}</span>
                    </div>
                    <p className="text-xs font-bold text-white line-clamp-2 leading-snug">
                      {q.question_mr || q.question}
                    </p>
                    {q.question_mr && (
                      <p className="text-[11px] text-slate-400 italic line-clamp-1">
                        {q.question}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchTerm.trim() !== '' && matchingSubjects.length === 0 && filteredQuestions.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-xs">
              "{searchTerm}" साठी कोणतेही जुळणारे विषय किंवा प्रश्न सापडले नाहीत.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
