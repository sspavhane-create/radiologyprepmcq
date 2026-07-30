import React, { useState } from 'react';
import { Question, QuestionBookmark } from '../types';
import { 
  Bookmark, 
  Search, 
  Trash2, 
  Play, 
  Edit3, 
  Check, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface BookmarksViewProps {
  questions: Question[];
  bookmarks: QuestionBookmark[];
  onToggleBookmark: (qId: number, notes?: string) => void;
  onStartQuizSaved: (questionIds: number[]) => void;
  onSelectQuestionDirect: (qId: number) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  questions,
  bookmarks,
  onToggleBookmark,
  onStartQuizSaved,
  onSelectQuestionDirect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [tempNoteText, setTempNoteText] = useState('');

  const savedQuestionIds = bookmarks.map(b => b.questionId);
  const savedQuestions = questions.filter(q => savedQuestionIds.includes(q.id));

  const filteredQuestions = savedQuestions.filter(q => {
    const matchesSearch = 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleSaveNote = (qId: number) => {
    onToggleBookmark(qId, tempNoteText);
    setEditingNoteId(null);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-amber-400 fill-amber-400/20" />
            Saved & Bookmarked Questions ({savedQuestions.length})
          </h1>
          <p className="text-sm text-slate-400">Review flagged high-yield items and personal revision notes</p>
        </div>

        {savedQuestions.length > 0 && (
          <button
            onClick={() => onStartQuizSaved(savedQuestionIds)}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-teal-400 hover:from-amber-400 hover:to-teal-300 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-sm shadow-md transition-all self-start sm:self-auto"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Practice Saved Questions ({savedQuestions.length})</span>
          </button>
        )}
      </div>

      {/* Search Input */}
      {savedQuestions.length > 0 && (
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search saved questions, categories, explanations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
          />
        </div>
      )}

      {/* Bookmarks List */}
      {filteredQuestions.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
          <Bookmark className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Saved Questions Found</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            {savedQuestions.length === 0
              ? 'Click the bookmark icon while taking quizzes or studying flashcards to save questions here for revision.'
              : 'No saved questions matched your search query.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const bookmarkObj = bookmarks.find(b => b.questionId === q.id);
            const isEditingThisNote = editingNoteId === q.id;

            return (
              <div
                key={q.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 space-y-4 shadow-md transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      Q#{q.id}
                    </span>
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
                    <button
                      onClick={() => onSelectQuestionDirect(q.id)}
                      className="text-xs text-teal-400 hover:text-teal-300 font-bold px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Open Question
                    </button>

                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      className="p-1.5 text-rose-400 hover:bg-rose-500/20 rounded-lg transition-colors"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Stem */}
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{q.question}</h3>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300">
                    <span className="font-semibold text-emerald-400 block mb-0.5">Correct Answer: {q.correct_answer}</span>
                    <p className="text-slate-400 leading-relaxed">{q.explanation}</p>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-300 flex items-center gap-1">
                      <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                      Personal Study Note:
                    </span>
                    {!isEditingThisNote && (
                      <button
                        onClick={() => {
                          setEditingNoteId(q.id);
                          setTempNoteText(bookmarkObj?.notes || '');
                        }}
                        className="text-amber-400 hover:underline text-[11px]"
                      >
                        {bookmarkObj?.notes ? 'Edit Note' : '+ Add Note'}
                      </button>
                    )}
                  </div>

                  {isEditingThisNote ? (
                    <div className="space-y-2 mt-2">
                      <textarea
                        value={tempNoteText}
                        onChange={(e) => setTempNoteText(e.target.value)}
                        placeholder="Write key clinical reminders, mnemonics, or page notes..."
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                        rows={2}
                      />
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={() => setEditingNoteId(null)}
                          className="px-2.5 py-1 bg-slate-800 text-slate-400 rounded text-[11px]"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSaveNote(q.id)}
                          className="px-3 py-1 bg-amber-500 text-slate-950 font-bold rounded text-[11px] flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" /> Save Note
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-300 italic">
                      {bookmarkObj?.notes || 'No custom notes attached yet.'}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
