import React, { useState } from 'react';
import { Question } from '../types';
import { CATEGORIES } from '../data/initialQuestions';
import { 
  RotateCw, 
  Sparkles, 
  Volume2, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ThumbsUp, 
  AlertTriangle, 
  RefreshCw,
  Shuffle
} from 'lucide-react';

interface FlashcardViewProps {
  questions: Question[];
  confidenceRatings: Record<number, 'again' | 'hard' | 'good' | 'easy'>;
  onSetConfidence: (qId: number, rating: 'again' | 'hard' | 'good' | 'easy') => void;
  bookmarkedIds: number[];
  onToggleBookmark: (qId: number) => void;
  onAskAITutor: (q: Question) => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  questions,
  confidenceRatings,
  onSetConfidence,
  bookmarkedIds,
  onToggleBookmark,
  onAskAITutor,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cardDeck, setCardDeck] = useState<Question[]>(questions);

  // Filter deck based on category selection
  const filteredQuestions = selectedCategory === 'All'
    ? cardDeck
    : cardDeck.filter(q => q.category === selectedCategory);

  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleShuffle = () => {
    const shuffled = [...cardDeck].sort(() => Math.random() - 0.5);
    setCardDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // loop
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(filteredQuestions.length - 1);
    }
  };

  const handleRate = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (currentQuestion) {
      onSetConfidence(currentQuestion.id, rating);
      handleNext();
    }
  };

  if (!currentQuestion) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p>No questions available for flashcard review in this category.</p>
        <button
          onClick={() => setSelectedCategory('All')}
          className="mt-4 px-4 py-2 bg-slate-800 text-teal-400 rounded-lg text-sm font-semibold"
        >
          Reset Category Filter
        </button>
      </div>
    );
  }

  const isSaved = bookmarkedIds.includes(currentQuestion.id);
  const currentRating = confidenceRatings[currentQuestion.id];

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Top Filter & Deck Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <button
            onClick={() => { setSelectedCategory('All'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'All' ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Categories ({questions.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.name}
              onClick={() => { setSelectedCategory(cat.name); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.name ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat.name.split(' ')[0]}...
            </button>
          ))}
        </div>

        <button
          onClick={handleShuffle}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
        >
          <Shuffle className="w-3.5 h-3.5 text-teal-400" />
          <span>Shuffle Deck</span>
        </button>
      </div>

      {/* Progress & Card Index */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-2">
        <span>
          Card <strong className="text-white">{currentIndex + 1}</strong> of {filteredQuestions.length}
        </span>
        <div className="flex items-center gap-2">
          {currentRating && (
            <span className="capitalize text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
              Confidence: {currentRating}
            </span>
          )}
          <span>Click card to flip</span>
        </div>
      </div>

      {/* Interactive 3D Flip Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer group relative min-h-[380px] sm:min-h-[420px] rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-teal-500/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300"
      >
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
              {currentQuestion.category}
            </span>
            {currentQuestion.source_page && (
              <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md">
                Pg {currentQuestion.source_page}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onToggleBookmark(currentQuestion.id)}
              className={`p-2 rounded-lg text-xs font-medium ${
                isSaved ? 'text-amber-400 bg-amber-500/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400' : ''}`} />
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1"
            >
              <RotateCw className="w-4 h-4 text-teal-400" />
              <span>Flip</span>
            </button>
          </div>
        </div>

        {/* Card Main Body (Front vs Back) */}
        {!isFlipped ? (
          /* FRONT OF CARD */
          <div className="my-auto py-8 space-y-4 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              QUESTION STEM
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-relaxed px-2">
              {currentQuestion.question}
            </h3>

            {/* Option hints */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-xl mx-auto">
              {currentQuestion.options.map((opt, idx) => (
                <div key={idx} className="bg-slate-800/40 border border-slate-800 px-3 py-2 rounded-lg text-xs text-slate-300">
                  {opt}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* BACK OF CARD */
          <div className="my-auto py-4 space-y-5 animate-fadeIn">
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-xl text-center">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                CORRECT ANSWER
              </span>
              <div className="text-lg font-extrabold text-emerald-200">
                {currentQuestion.correct_answer}
              </div>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">EXPLANATION</h4>
              <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {currentQuestion.explanation}
              </p>
            </div>

            {/* Ask AI Button */}
            <div className="flex justify-center pt-1" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => onAskAITutor(currentQuestion)}
                className="flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>AI Tutor Deep Dive</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Rating Controls (When Flipped) */}
        {isFlipped ? (
          <div className="pt-4 border-t border-slate-800 grid grid-cols-4 gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => handleRate('again')}
              className="py-2.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-800 text-rose-300 font-bold text-xs flex flex-col items-center gap-0.5 transition-colors"
            >
              <span>Again</span>
              <span className="text-[10px] font-normal opacity-80">Needs Work</span>
            </button>

            <button
              onClick={() => handleRate('hard')}
              className="py-2.5 rounded-xl bg-amber-950/60 hover:bg-amber-900 border border-amber-800 text-amber-300 font-bold text-xs flex flex-col items-center gap-0.5 transition-colors"
            >
              <span>Hard</span>
              <span className="text-[10px] font-normal opacity-80">Tricky</span>
            </button>

            <button
              onClick={() => handleRate('good')}
              className="py-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-800 text-cyan-300 font-bold text-xs flex flex-col items-center gap-0.5 transition-colors"
            >
              <span>Good</span>
              <span className="text-[10px] font-normal opacity-80">Solid</span>
            </button>

            <button
              onClick={() => handleRate('easy')}
              className="py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 font-bold text-xs flex flex-col items-center gap-0.5 transition-colors"
            >
              <span>Easy</span>
              <span className="text-[10px] font-normal opacity-80">Mastered</span>
            </button>
          </div>
        ) : (
          <div className="pt-3 border-t border-slate-800/80 text-center text-xs text-slate-500">
            Tap card to reveal answer & explanations
          </div>
        )}
      </div>

      {/* Card Carousel Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-sm font-bold border border-slate-700 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Card</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-1 bg-teal-500 hover:bg-teal-400 text-slate-950 px-5 py-2 rounded-xl text-sm font-bold shadow-md transition-colors"
        >
          <span>Next Card</span>
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
