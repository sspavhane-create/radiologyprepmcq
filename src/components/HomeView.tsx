import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  ArrowRight, 
  PlayCircle, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Smartphone, 
  Download, 
  Zap, 
  ShieldCheck,
  Target,
  Activity,
  UserCheck,
  Cpu,
  Bookmark
} from 'lucide-react';
import { Question, QuizSession, UserAnswer } from '../types';

interface HomeViewProps {
  questions: Question[];
  quizSessions: QuizSession[];
  bookmarkedIds: number[];
  onStartQuiz: (options: { mode: 'exam' | 'practice' | 'category' | 'core' | 'saved' | 'missed'; category?: string }) => void;
  onNavigateTab: (tab: string) => void;
  isUnlocked: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  questions,
  quizSessions,
  bookmarkedIds,
  onStartQuiz,
  onNavigateTab,
  isUnlocked,
}) => {
  const [activeSectionTab, setActiveSectionTab] = React.useState<'main' | 'other'>('main');

  // Compute user progress stats
  let totalAttempted = 0;
  let totalCorrect = 0;

  quizSessions.forEach((session) => {
    Object.values(session.answers).forEach((ans) => {
      const userAnswer = ans as UserAnswer;
      totalAttempted++;
      if (userAnswer.isCorrect) totalCorrect++;
    });
  });

  const accuracyRate = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const recentSession = quizSessions.length > 0 ? quizSessions[quizSessions.length - 1] : null;

  return (
    <div className="space-y-8 pb-24 max-w-6xl mx-auto animate-fadeIn select-none">
      
      {/* =================================
          HERO BANNER
          ================================= */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40 rounded-[24px] border border-blue-500/15 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        {/* Soft atmospheric radial glows */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1.5 rounded-full bg-blue-500/10 backdrop-blur-md text-cyan-300 text-xs font-black flex items-center gap-1.5 border border-cyan-500/25">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <span>🏥 RadiologyPrep</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-emerald-300 text-xs font-black flex items-center gap-1.5 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Radiology 3000+ MCQs - DHS DMER Exam Preparation</span>
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
                X-Ray तांत्रिक विभाग सराव ३००० प्लस प्रश्न
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-black max-w-xl leading-relaxed text-cyan-200">
                English & Marathi मध्ये संपूर्ण प्रश्नपत्रिका आणि Syllabus नुसार सराव.
              </p>
            </div>

            {/* Micro Stats inside Hero */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-3 text-center transition-all hover:border-blue-500/30">
                <div className="text-xl sm:text-2xl font-black text-cyan-400">3000+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">MCQ Questions</div>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-3 text-center transition-all hover:border-blue-500/30">
                <div className="text-xl sm:text-2xl font-black text-indigo-300">30</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Chapters</div>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-3 text-center transition-all hover:border-blue-500/30">
                <div className="text-xl sm:text-2xl font-black text-teal-400">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Syllabus Covered</div>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onStartQuiz({ mode: 'core' })}
                className="px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-black rounded-2xl shadow-lg shadow-blue-500/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <PlayCircle className="w-5 h-5 text-slate-950 fill-current" />
                <span>Start Learning (अभ्यासाला सुरुवात करा)</span>
              </button>

              <button
                onClick={() => onNavigateTab('chapters')}
                className="px-6 py-4 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 font-extrabold rounded-2xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>Browse Chapters (प्रकरणे पहा)</span>
              </button>

              <a
                href="https://github.com/sspavhane-create/radiologyprepmcq/releases/latest/download/Radiology_Prep_MCQ.apk"
                download="Radiology_Prep_MCQ.apk"
                className="px-5 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold rounded-2xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer shadow-md active:scale-[0.98]"
              >
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <span>APK ॲप डाउनलोड करा</span>
              </a>
            </div>
          </div>

          {/* Right Side: Professional Medical Illustration */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
            <div className="w-72 h-72 rounded-full bg-blue-500/5 absolute blur-2xl pointer-events-none" />
            <svg viewBox="0 0 400 400" className="w-full max-w-[340px] h-auto drop-shadow-[0_0_30px_rgba(34,197,94,0.15)]">
              {/* Spinning/Holographic Outer Ring */}
              <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="2" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="3" strokeDasharray="30 15 10 15" />
              <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" strokeDasharray="5 5" />

              {/* scanner grid mesh */}
              <path d="M 120 200 L 280 200 M 200 120 L 200 280 M 143 143 L 257 257 M 143 257 L 257 143" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1" />

              {/* MRI / CT Bore visual */}
              <circle cx="200" cy="200" r="110" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="4" />
              <circle cx="200" cy="200" r="95" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />

              {/* Bones/X-Ray Spine Representation inside the center */}
              <g transform="translate(160, 130)" stroke="rgba(6, 182, 212, 0.85)" strokeWidth="3" strokeLinecap="round" fill="none">
                {/* Ribcage */}
                <path d="M 40 10 L 40 130" stroke="rgba(255,255,255,0.7)" strokeWidth="5" />
                
                {/* Ribs left */}
                <path d="M 40 30 C 15 25, 10 40, 10 50" />
                <path d="M 40 50 C 10 45, 5 60, 5 70" />
                <path d="M 40 70 C 5 65, 5 85, 10 95" />
                
                {/* Ribs right */}
                <path d="M 40 30 C 65 25, 70 40, 70 50" />
                <path d="M 40 50 C 70 45, 75 60, 75 70" />
                <path d="M 40 70 C 75 65, 75 85, 70 95" />

                {/* Spine disks */}
                <circle cx="40" cy="35" r="4" fill="rgba(6, 182, 212, 1)" />
                <circle cx="40" cy="55" r="4" fill="rgba(6, 182, 212, 1)" />
                <circle cx="40" cy="75" r="4" fill="rgba(6, 182, 212, 1)" />
                <circle cx="40" cy="95" r="4" fill="rgba(6, 182, 212, 1)" />
                <circle cx="40" cy="115" r="4" fill="rgba(6, 182, 212, 1)" />
              </g>

              {/* Glowing Scan Bar sweeping */}
              <line x1="100" y1="230" x2="300" y2="230" stroke="#22d3ee" strokeWidth="3" opacity="0.8" className="animate-pulse" />

              {/* Medical Cross Sign */}
              <rect x="188" y="70" width="24" height="24" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" />
              <path d="M 200 76 L 200 88 M 194 82 L 206 82" stroke="#22d3ee" strokeWidth="3.5" strokeLinecap="round" />

              {/* Tech details */}
              <text x="140" y="340" fill="#94a3b8" fontSize="10" fontFamily="monospace" letterSpacing="2">SYS ACTIVE: 100%</text>
              <text x="135" y="358" fill="#22d3ee" fontSize="11" fontFamily="sans-serif" fontWeight="900" letterSpacing="1">X-RAY • CT • MRI • USG</text>
            </svg>
          </div>
        </div>
      </div>

      {/* =================================
          PROGRESS STATS OVERVIEW
          ================================= */}
      <div className="grid grid-cols-3 gap-2 sm:gap-5">
        
        {/* Total MCQs Practiced */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-[16px] sm:rounded-[24px] p-2.5 sm:p-5 border border-slate-800/80 hover:border-blue-500/20 shadow-xl transition-all flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 group">
          <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Target className="w-4.5 h-4.5 sm:w-7 sm:h-7" />
          </div>
          <div className="space-y-0.5 min-w-0 w-full">
            <div className="text-[9px] sm:text-xs font-black text-slate-400 uppercase tracking-wider truncate">Practiced</div>
            <div className="text-sm sm:text-2xl font-black text-white flex items-baseline justify-center sm:justify-start gap-0.5 sm:gap-1">
              <span>{totalAttempted}</span>
              <span className="text-[9px] sm:text-xs text-slate-500 font-normal">/ 3k+</span>
            </div>
          </div>
        </div>

        {/* Accuracy Rate */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-[16px] sm:rounded-[24px] p-2.5 sm:p-5 border border-slate-800/80 hover:border-teal-500/20 shadow-xl transition-all flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 group">
          <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-4.5 h-4.5 sm:w-7 sm:h-7" />
          </div>
          <div className="space-y-0.5 min-w-0 w-full">
            <div className="text-[9px] sm:text-xs font-black text-slate-400 uppercase tracking-wider truncate">Accuracy</div>
            <div className="text-sm sm:text-2xl font-black text-teal-400 truncate">
              {accuracyRate}%
            </div>
          </div>
        </div>

        {/* Saved Bookmarks */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-[16px] sm:rounded-[24px] p-2.5 sm:p-5 border border-slate-800/80 hover:border-amber-500/20 shadow-xl transition-all flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 group">
          <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Bookmark className="w-4.5 h-4.5 sm:w-7 sm:h-7" />
          </div>
          <div className="space-y-0.5 min-w-0 w-full">
            <div className="text-[9px] sm:text-xs font-black text-slate-400 uppercase tracking-wider truncate">Saved</div>
            <div className="text-sm sm:text-2xl font-black text-amber-300 truncate">
              {bookmarkedIds.length} <span className="text-[9px] sm:text-xs text-slate-500 font-normal">MCQs</span>
            </div>
          </div>
        </div>
      </div>

      {/* =================================
          TAB NAVIGATION SWITCHER (मल्टी-टॅब निवड)
          ================================= */}
      <div className="bg-slate-900/40 p-1 rounded-[20px] border border-slate-800/80 max-w-md mx-auto grid grid-cols-2 gap-1.5 shadow-inner relative z-10 backdrop-blur-md">
        <button
          onClick={() => setActiveSectionTab('main')}
          className={`py-2.5 px-4 rounded-[14px] text-xs sm:text-sm font-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
            activeSectionTab === 'main'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/10 scale-[1.01]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/50'
          }`}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <div className="flex flex-col items-center">
            <span className="leading-none text-xs sm:text-sm">मुख्य अभ्यास व सराव</span>
            <span className="text-[9px] opacity-75 mt-0.5 font-bold">Core Practice</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSectionTab('other')}
          className={`py-2.5 px-4 rounded-[14px] text-xs sm:text-sm font-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
            activeSectionTab === 'other'
              ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-slate-950 shadow-lg shadow-teal-500/10 scale-[1.01]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/50'
          }`}
        >
          <Award className="w-4 h-4 shrink-0" />
          <div className="flex flex-col items-center">
            <span className="leading-none text-xs sm:text-sm">इतर विशेष परीक्षा</span>
            <span className="text-[9px] opacity-75 mt-0.5 font-bold">Other Exams</span>
          </div>
        </button>
      </div>

      {/* =================================
          TAB PANELS CONTENT
          ================================= */}
      {activeSectionTab === 'main' ? (
        <div className="space-y-8 animate-fadeIn">
          {/* SECTION 1: 3000+ Radiology MCQs */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-md">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                    <span>3000+ Radiology MCQs</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">
                    DHS • DMER • महाराष्ट्र तांत्रिक विभाग भरती परीक्षांसाठी संपूर्ण सराव प्रश्नसंच.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="text-xs font-bold text-slate-500 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
                  Full Syllabus Updated
                </span>
              </div>
            </div>

            {/* Launch practice cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Practice Mode Card */}
              <div className="bg-slate-900/60 rounded-[24px] p-6 border border-slate-800/80 hover:border-blue-500/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />
                
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                      Chapterwise Practice
                    </span>
                    <h3 className="text-xl font-black text-white mt-1">
                      30 Radiology Chapters
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deeply categorized practice questions covering Radiation Physics, Positioning & Procedures, CT Scan, MRI Scanner, Ultrasound, AERB radiation safety norms, and patient care.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>

                <button
                  onClick={() => onNavigateTab('chapters')}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-extrabold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
                >
                  <span>प्रकरणानुसार सराव उघडा (Open Chapters)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mock Test Card */}
              <div className="bg-slate-900/60 rounded-[24px] p-6 border border-slate-800/80 hover:border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-all" />
                
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      200 Marks Grand Mock
                    </span>
                    <h3 className="text-xl font-black text-white mt-1">
                      Real Exam Simulation
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Practice simulated tests consisting of 100 MCQs (80 Technical Core Radiology + 20 General Aptitude & Languages) in full exam timing with detailed results analysis.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>

                <button
                  onClick={() => onNavigateTab('mock-tests')}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-2xl text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
                >
                  <span>मॉक टेस्ट सोडवा (Start Mock Test)</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY & PERSISTENCE */}
          <div className="bg-slate-900/60 rounded-[24px] p-6 border border-slate-800/80 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Recent Activity (तुमचा सराव इतिहास)</span>
              </h3>
              {recentSession && (
                <span className="text-xs font-semibold text-slate-400">
                  {new Date(recentSession.endTime).toLocaleDateString('mr-IN', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              )}
            </div>

            {recentSession ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-950 rounded-2xl border border-slate-850">
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-black text-slate-200">{recentSession.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Score: <strong className="text-teal-400 font-black text-sm">{recentSession.score}%</strong> ({recentSession.totalQuestions} Questions completed)
                  </p>
                </div>

                <button
                  onClick={() => onStartQuiz({ mode: 'core' })}
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 self-start sm:self-center"
                >
                  <span>Continue Practice (सराव सुरू ठेवा)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500 space-y-3">
                <p className="text-xs font-medium">No recent practice session recorded. Begin practicing to build your score tracker!</p>
                <button
                  onClick={() => onStartQuiz({ mode: 'core' })}
                  className="px-5 py-2.5 bg-blue-600 text-white font-extrabold rounded-xl text-xs hover:bg-blue-500 cursor-pointer transition-all active:scale-95"
                >
                  Start First Practice (पहिला सराव सुरू करा)
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-fadeIn">
          {/* SECTION 2: Other Radiology Exams */}
          <div className="space-y-5">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <span>Other Radiology Exams</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Practice for all Central & State Radiographer recruitment examinations with high quality questions.
              </p>
            </div>

            {/* Interactive Grid of exam badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center justify-center text-center space-y-2 hover:border-teal-500/30 transition-all hover:bg-slate-900/60 cursor-pointer" onClick={() => onStartQuiz({ mode: 'core' })}>
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-300 flex items-center justify-center text-xs font-black">AIIMS</div>
                <span className="text-xs font-bold text-slate-200">AIIMS Radiographer</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center justify-center text-center space-y-2 hover:border-blue-500/30 transition-all hover:bg-slate-900/60 cursor-pointer" onClick={() => onStartQuiz({ mode: 'core' })}>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center text-xs font-black">ESIC</div>
                <span className="text-xs font-bold text-slate-200">ESIC Radiographer</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center justify-center text-center space-y-2 hover:border-indigo-500/30 transition-all hover:bg-slate-900/60 cursor-pointer" onClick={() => onStartQuiz({ mode: 'core' })}>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-300 flex items-center justify-center text-xs font-black">RRB</div>
                <span className="text-xs font-bold text-slate-200">Railway Radiographer</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center justify-center text-center space-y-2 hover:border-purple-500/30 transition-all hover:bg-slate-900/60 cursor-pointer" onClick={() => onStartQuiz({ mode: 'core' })}>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-300 flex items-center justify-center text-xs font-black">AERB</div>
                <span className="text-xs font-bold text-slate-200">AERB Safety Exams</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANDROID STANDOUT BANNER (ALWAYS VISIBLE) */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[24px] p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group mt-6">
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-all" />
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-105 transition-transform">
            <Smartphone className="w-7 h-7 text-white" />
          </div>
          <div className="space-y-1">
            <h4 className="font-black text-base sm:text-lg">Download Official Android Application 📱</h4>
            <p className="text-xs sm:text-sm text-blue-100 font-medium">
              Seamlessly practice offline and get fast mock answers anytime, anywhere directly on your mobile.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/sspavhane-create/radiologyprepmcq/releases/latest/download/Radiology_Prep_MCQ.apk"
          download="Radiology_Prep_MCQ.apk"
          className="px-6 py-3.5 bg-white text-slate-950 hover:bg-blue-50 font-black rounded-2xl text-xs sm:text-sm shadow-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98] self-stretch md:self-auto justify-center"
        >
          <Download className="w-4 h-4" />
          <span>Download Android App (APK)</span>
        </a>
      </div>
    </div>
  );
};
