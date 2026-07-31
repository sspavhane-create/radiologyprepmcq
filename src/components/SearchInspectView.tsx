import React, { useState, useEffect, useMemo } from 'react';
import { Question, LanguageMode } from '../types';
import { ALL_30_CHAPTERS } from '../data/chaptersData';
import { 
  getRevealedAnswerIds, 
  addRevealedAnswerId, 
  getRevealedCount, 
  getIsPremiumUnlocked 
} from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
import { 
  Search, 
  Filter, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Award, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Sparkles,
  HelpCircle,
  X,
  RotateCcw
} from 'lucide-react';

interface SearchInspectViewProps {
  questions: Question[];
  langMode?: LanguageMode;
  onAskAITutor?: (question: Question) => void;
  onNavigateTab?: (tab: string) => void;
}

export const SearchInspectView: React.FC<SearchInspectViewProps> = ({
  questions,
  langMode = 'dual',
  onAskAITutor,
  onNavigateTab
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  
  // Pagination
  const [displayLimit, setDisplayLimit] = useState<number>(25);

  // Revealed Answers State
  const [revealedIds, setRevealedIds] = useState<number[]>([]);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string | undefined>(undefined);

  // Explicitly expanded cards state (for toggling UI)
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setRevealedIds(getRevealedAnswerIds());
    setIsUnlocked(getIsPremiumUnlocked());
  }, []);

  const refreshPremiumState = () => {
    setIsUnlocked(getIsPremiumUnlocked());
    setRevealedIds(getRevealedAnswerIds());
  };

  const revealedCount = revealedIds.length;
  const FREE_LIMIT = 40;

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesText = 
          q.question.toLowerCase().includes(query) ||
          (q.question_mr && q.question_mr.toLowerCase().includes(query)) ||
          q.id.toString() === query ||
          q.category.toLowerCase().includes(query) ||
          (q.explanation && q.explanation.toLowerCase().includes(query)) ||
          (q.explanation_mr && q.explanation_mr.toLowerCase().includes(query));

        if (!matchesText) return false;
      }

      // Chapter Filter
      if (selectedChapter !== 'all') {
        const chapObj = ALL_30_CHAPTERS.find(c => c.id === selectedChapter);
        if (chapObj) {
          const isChapMatch = 
            q.chapter_name === chapObj.title ||
            q.category.includes(`Chapter ${selectedChapter}`) ||
            q.category.includes(`प्रकरण ${selectedChapter}`) ||
            (q.source_page && q.source_page >= (selectedChapter - 1) * 10 && q.source_page <= selectedChapter * 10);
          if (!isChapMatch) return false;
        }
      }

      // Section Filter
      if (selectedSection !== 'all') {
        if (selectedSection === 'technical' && q.section !== 'technical' && !q.category.toLowerCase().includes('technical')) return false;
        if (selectedSection === 'marathi' && q.section !== 'marathi' && !q.category.toLowerCase().includes('marathi')) return false;
        if (selectedSection === 'english' && q.section !== 'english' && !q.category.toLowerCase().includes('english')) return false;
        if (selectedSection === 'gk' && q.section !== 'gk' && !q.category.toLowerCase().includes('gk') && !q.category.toLowerCase().includes('general knowledge')) return false;
        if (selectedSection === 'logical' && q.section !== 'logical' && !q.category.toLowerCase().includes('logical') && !q.category.toLowerCase().includes('reasoning')) return false;
      }

      // Difficulty Filter
      if (selectedDifficulty !== 'all') {
        if (q.difficulty !== selectedDifficulty) return false;
      }

      return true;
    });
  }, [questions, searchQuery, selectedChapter, selectedSection, selectedDifficulty]);

  // Handle Toggle Reveal Answer
  const handleToggleAnswer = (questionId: number) => {
    const isAlreadyRevealed = revealedIds.includes(questionId);
    const isExpanded = !!expandedCards[questionId];

    if (isExpanded) {
      // Collapse
      setExpandedCards(prev => ({ ...prev, [questionId]: false }));
      return;
    }

    // If Premium is unlocked, allow all questions
    if (isUnlocked) {
      if (!isAlreadyRevealed) {
        const updated = addRevealedAnswerId(questionId);
        setRevealedIds(updated);
      }
      setExpandedCards(prev => ({ ...prev, [questionId]: true }));
      return;
    }

    // Premium Protection: Question ID > 40 is strictly locked for free users
    if (questionId > 40) {
      setModalMessage(
        `प्रश्न क्र. ४० च्या पुढील (Q#${questionId}) सर्व प्रश्नांची उत्तरे व स्पष्टीकरणे पाहण्यासाठी प्रीमियम व्हर्जन अनलॉक करा 🔒`
      );
      setShowUnlockModal(true);
      return;
    }

    // If already revealed (Q <= 40)
    if (isAlreadyRevealed) {
      setExpandedCards(prev => ({ ...prev, [questionId]: true }));
      return;
    }

    // Check 40 Questions Limit for free version
    if (revealedCount < FREE_LIMIT) {
      // Allow reveal
      const updated = addRevealedAnswerId(questionId);
      setRevealedIds(updated);
      setExpandedCards(prev => ({ ...prev, [questionId]: true }));
    } else {
      // Limit reached -> trigger premium unlock modal
      setModalMessage(
        `तुम्ही विनामूल्य ४० प्रश्नांची उत्तरे व स्पष्टीकरणे पाहिली आहेत! उर्वरित सर्व ३०००+ प्रश्नांची उत्तरे तपासण्यासाठी व अनलॉक करण्यासाठी प्रीमियम व्हर्जन ॲक्टिव्हेट करा 🔒`
      );
      setShowUnlockModal(true);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedChapter('all');
    setSelectedSection('all');
    setSelectedDifficulty('all');
    setDisplayLimit(25);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Layers className="w-64 h-64 text-teal-400" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
              <Award className="w-4 h-4 text-teal-400" />
              <span>सर्व प्रश्न शोध व तपासणी (Search & Inspect)</span>
            </div>

            {/* Premium Status Pill */}
            {isUnlocked ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                <span>प्रीमियम ॲक्टिव्ह - अमर्याद उत्तरे अनलॉक</span>
              </span>
            ) : (
              <button
                onClick={() => {
                  setModalMessage(undefined);
                  setShowUnlockModal(true);
                }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-bold border border-amber-500/40 transition-all animate-pulse cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>प्रीमियम व्हर्जन अनलॉक करा 🔒</span>
              </button>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            आपल्या चालू प्रश्नसंचातील सर्व प्रश्न शोधा व तपासा - सर्व प्रश्न यादी (Search & Inspect)
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            सर्व ३० अध्यायांमधील ३०००+ प्रश्नांचा शोध घ्या, उत्तरे व स्पष्टीकरण तपासा. यामध्ये सुरुवातीला <strong>फक्त प्रश्न दिसतील, उत्तर दिसणार नाही.</strong> उत्तरासाठी व स्पष्टीकरणासाठी <span className="text-teal-300 font-bold">'उत्तर व स्पष्टीकरण पहा'</span> बटणावर क्लिक करा. (विनामूल्य ४० प्रश्नांपर्यंत उत्तरे तपासता येतील, त्यानंतर प्रीमियम व्हर्जन ॲक्टिव्हेट करावे लागेल).
          </p>

          {/* 40 Limit Meter Banner */}
          <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-2 text-slate-200">
                <Eye className="w-4 h-4 text-teal-400" />
                <span>उत्तर तपासणी मर्यादा (Free Answer Reveal Limit):</span>
              </span>
              {isUnlocked ? (
                <span className="text-emerald-400 font-extrabold">अमर्याद ३०००+ प्रश्न (Premium Unlocked)</span>
              ) : (
                <span className={revealedCount >= FREE_LIMIT ? 'text-rose-400 font-black' : 'text-amber-300 font-bold'}>
                  {revealedCount} / {FREE_LIMIT} प्रश्न वापरले ({FREE_LIMIT - revealedCount} शिल्लक)
                </span>
              )}
            </div>

            {/* Progress Bar */}
            {!isUnlocked && (
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    revealedCount >= FREE_LIMIT ? 'bg-rose-500' : 'bg-gradient-to-r from-teal-500 to-amber-400'
                  }`}
                  style={{ width: `${Math.min(100, (revealedCount / FREE_LIMIT) * 100)}%` }}
                />
              </div>
            )}

            {!isUnlocked && revealedCount >= FREE_LIMIT && (
              <p className="text-[11px] text-rose-300 font-semibold pt-1 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>तुमची विनामूल्य ४० प्रश्नांची उत्तरे पाहण्याची मर्यादा पूर्ण झाली आहे. उर्वरित सर्व प्रश्नांची उत्तरे पाहण्यासाठी प्रीमियम अनलॉक करा!</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* FILTER CONTROLS CARD */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="प्रश्न, उत्तर किंवा शब्द शोधा (उदा. X-Ray, mAs, kVp, प्रकरण)..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-950 border border-slate-700 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl text-xs font-bold border border-slate-700 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5 text-teal-400" />
              <span>रिसेट</span>
            </button>

            <span className="text-xs text-slate-400 font-bold px-3 py-2.5 bg-slate-950 rounded-2xl border border-slate-800 whitespace-nowrap">
              एकूण सापडलेले: <strong className="text-teal-300 font-extrabold">{filteredQuestions.length}</strong> Qs
            </span>
          </div>
        </div>

        {/* Multi Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Chapter Selector */}
          <div>
            <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-teal-400" />
              <span>अध्याय निवडा (30 Chapters):</span>
            </label>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white font-medium focus:outline-none focus:border-teal-400"
            >
              <option value="all">सर्व ३० अध्याय (All 30 Chapters)</option>
              {ALL_30_CHAPTERS.map(c => (
                <option key={c.id} value={c.id}>
                  प्रकरण {c.id}: {c.titleMr}
                </option>
              ))}
            </select>
          </div>

          {/* Section Selector */}
          <div>
            <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>विषय/विभाग (Section):</span>
            </label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white font-medium focus:outline-none focus:border-teal-400"
            >
              <option value="all">सर्व विषय (All Sections)</option>
              <option value="technical">तांत्रिक - Radiography (80 Marks)</option>
              <option value="marathi">मराठी भाषा (15 Qs / 30 Marks)</option>
              <option value="english">इंग्रजी भाषा (15 Qs / 30 Marks)</option>
              <option value="gk">सामान्य ज्ञान (15 Qs / 30 Marks)</option>
              <option value="logical">बुद्धिमत्ता चाचणी (15 Qs / 30 Marks)</option>
            </select>
          </div>

          {/* Difficulty Selector */}
          <div>
            <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>काठिण्यपातळी (Difficulty):</span>
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white font-medium focus:outline-none focus:border-teal-400"
            >
              <option value="all">सर्व पातळी (All Difficulties)</option>
              <option value="easy">सोपे (Easy)</option>
              <option value="medium">मध्यम (Medium)</option>
              <option value="hard">कठीण (Hard)</option>
            </select>
          </div>
        </div>
      </div>

      {/* QUESTIONS LISTING */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-amber-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">कोणताही प्रश्न सापडला नाही</h3>
          <p className="text-xs text-slate-400">आपल्या शोध शर्तीनुसार (Filter/Search) एकही प्रश्न जुळला नाही. कृपया फिल्टर रिसेट करा.</p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-teal-500 text-slate-950 font-bold text-xs rounded-xl hover:brightness-110"
          >
            सर्व फिल्टर्स रिसेट करा
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.slice(0, displayLimit).map((q, index) => {
            const isAnswerRevealed = revealedIds.includes(q.id);
            const isExpanded = !!expandedCards[q.id];
            const isShowContent = isAnswerRevealed && isExpanded;

            return (
              <div 
                key={q.id}
                className={`bg-slate-900 border rounded-2xl p-5 sm:p-6 space-y-4 transition-all shadow-md ${
                  isShowContent
                    ? 'border-emerald-500/40 bg-slate-900/95 ring-1 ring-emerald-500/20'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Question Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-950 font-mono text-xs font-bold text-teal-400 border border-slate-800">
                      Q.{index + 1} (#{q.id})
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-300 text-[11px] font-semibold border border-teal-500/20">
                      {q.chapter_name || q.category.split(':')[0]}
                    </span>
                    {q.section && (
                      <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold uppercase">
                        {q.section}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {isAnswerRevealed && (isUnlocked || q.id <= 40) ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>उत्तर उघडले (Revealed)</span>
                      </span>
                    ) : !isUnlocked && q.id > 40 ? (
                      <span className="flex items-center gap-1 text-amber-300 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span>🔒 उत्तर पाहण्यासाठी प्रीमियम आवश्यक</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 font-medium bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800">
                        उत्तर गुप्त (Answer Hidden)
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Statement (ALWAYS VISIBLE) */}
                <div className="space-y-1.5">
                  {/* Marathi Statement */}
                  {q.question_mr && (
                    <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                      {q.question_mr}
                    </h3>
                  )}
                  {/* English Statement */}
                  <p className={`text-xs sm:text-sm font-medium ${q.question_mr ? 'text-slate-300' : 'text-white'}`}>
                    {q.question}
                  </p>
                </div>

                {/* Options List (Options always shown, but correct answer not highlighted until revealed) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const optMr = q.options_mr ? q.options_mr[optIdx] : undefined;
                    const isCorrect = isShowContent && (
                      opt === q.correct_answer || 
                      (q.correct_answer_mr && optMr === q.correct_answer_mr) ||
                      opt.startsWith(q.correct_answer.slice(0, 3))
                    );

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                          isCorrect
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-100 font-bold shadow-lg'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                            isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          <div>
                            {optMr && <p className={isCorrect ? 'text-emerald-200 font-bold' : 'text-slate-200 font-medium'}>{optMr}</p>}
                            <p className={optMr ? 'text-[11px] text-slate-400' : 'text-slate-200'}>{opt}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* REVEAL ANSWER TOGGLE BUTTON */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => handleToggleAnswer(q.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
                      isShowContent && (isUnlocked || q.id <= 40)
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                        : isAnswerRevealed && (isUnlocked || q.id <= 40)
                          ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40'
                          : !isUnlocked && (q.id > 40 || revealedCount >= FREE_LIMIT)
                            ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40'
                            : 'bg-gradient-to-r from-teal-500 to-cyan-400 hover:brightness-110 text-slate-950'
                    }`}
                  >
                    {isShowContent && (isUnlocked || q.id <= 40) ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>उत्तर व स्पष्टीकरण लपवा (Hide Explanation)</span>
                      </>
                    ) : isAnswerRevealed && (isUnlocked || q.id <= 40) ? (
                      <>
                        <ChevronDown className="w-4 h-4 text-emerald-400" />
                        <span>उत्तर व स्पष्टीकरण पुन्हा पहा (Show Explanation)</span>
                      </>
                    ) : !isUnlocked && q.id > 40 ? (
                      <>
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>उत्तर व स्पष्टीकरण पहा 🔒 (प्रीमियम आवश्यक)</span>
                      </>
                    ) : !isUnlocked && revealedCount >= FREE_LIMIT ? (
                      <>
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>उत्तर व स्पष्टीकरण पहा 🔒 (मर्यादा संपली - प्रीमियम आवश्यक)</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        <span>
                          उत्तर व स्पष्टीकरण पहा 
                          {!isUnlocked && ` (मोफत: ${FREE_LIMIT - revealedCount} शिल्लक)`}
                        </span>
                      </>
                    )}
                  </button>

                  {/* Ask AI Tutor if revealed */}
                  {isShowContent && onAskAITutor && (
                    <button
                      onClick={() => onAskAITutor(q)}
                      className="flex items-center gap-1.5 px-3 py-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 rounded-xl text-xs font-bold border border-teal-500/30 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                      <span>AI ट्यूटरला अधिक प्रश्न विचारा</span>
                    </button>
                  )}
                </div>

                {/* REVEALED EXPLANATION BOX */}
                {isShowContent && (
                  <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 space-y-3 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider border-b border-emerald-500/20 pb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>बरोबर उत्तर व सविस्तर स्पष्टीकरण:</span>
                    </div>

                    <div className="text-xs sm:text-sm text-emerald-100 font-bold">
                      उत्तर: {q.correct_answer_mr || q.correct_answer}
                    </div>

                    <div className="space-y-1 text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      {q.explanation_mr && (
                        <p className="text-slate-200 font-medium">{q.explanation_mr}</p>
                      )}
                      <p className="text-slate-400 italic">{q.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* LOAD MORE BUTTON */}
          {displayLimit < filteredQuestions.length && (
            <div className="text-center pt-6">
              <button
                onClick={() => setDisplayLimit(prev => prev + 25)}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-teal-300 font-bold rounded-2xl border border-teal-500/30 shadow-lg text-xs sm:text-sm transition-all"
              >
                आणखी २५ प्रश्न लोड करा (Load More - {filteredQuestions.length - displayLimit} Qs Remaining)
              </button>
            </div>
          )}
        </div>
      )}

      {/* PREMIUM UNLOCK MODAL */}
      {showUnlockModal && (
        <PremiumUnlockModal
          onClose={() => setShowUnlockModal(false)}
          onSuccessUnlock={refreshPremiumState}
          customMessage={modalMessage}
        />
      )}
    </div>
  );
};
