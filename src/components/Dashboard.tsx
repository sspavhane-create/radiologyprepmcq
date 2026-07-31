import React, { useState, useEffect } from 'react';
import { Question, QuizSession, UserAnswer, LanguageMode } from '../types';
import { CATEGORIES, OFFICIAL_EXAM_INFO } from '../data/initialQuestions';
import { getIsPremiumUnlocked } from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';

import { 
  CheckCircle2, 
  Play, 
  Sparkles, 
  HeartPulse, 
  ShieldCheck, 
  Syringe, 
  Layers, 
  ArrowRight,
  Bookmark,
  Target,
  FileCheck,
  Brain,
  UserCheck,
  PhoneCall,
  Activity,
  Languages,
  Globe,
  BookOpen,
  Award,
  Unlock
} from 'lucide-react';

interface DashboardProps {
  questions: Question[];
  quizSessions: QuizSession[];
  bookmarkedIds: number[];
  langMode?: LanguageMode;
  onStartQuiz: (options: { mode: 'exam' | 'practice' | 'category' | 'core'; category?: string }) => void;
  onNavigateTab: (tab: string) => void;
  onSelectQuestionDirect: (questionId: number) => void;
  onSelectCategoryForChapters?: (categoryName: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  questions,
  quizSessions,
  bookmarkedIds,
  langMode = 'dual',
  onStartQuiz,
  onNavigateTab,
  onSelectQuestionDirect,
  onSelectCategoryForChapters
}) => {
  // Compute aggregate stats
  const totalQuestions = questions.length;
  const coreQuestions = questions.slice(0, 8);
  
  // Calculate accuracy across all quiz sessions
  let totalAttemptedCount = 0;
  let totalCorrectCount = 0;
  const questionStatusMap: Record<number, { attempted: boolean; lastCorrect: boolean }> = {};

  quizSessions.forEach(session => {
    Object.entries(session.answers).forEach(([qIdStr, ans]) => {
      const qId = Number(qIdStr);
      const userAnswer = ans as UserAnswer;
      totalAttemptedCount++;
      if (userAnswer.isCorrect) totalCorrectCount++;
      questionStatusMap[qId] = { attempted: true, lastCorrect: userAnswer.isCorrect };
    });
  });

  const globalAccuracy = totalAttemptedCount > 0 ? Math.round((totalCorrectCount / totalAttemptedCount) * 100) : 0;
  const attemptedUniqueCount = Object.keys(questionStatusMap).length;
  const coveragePercent = Math.round((attemptedUniqueCount / Math.max(totalQuestions, 1)) * 100);

  // Category Icon Resolver
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return Activity;
      case 'ShieldCheck': return ShieldCheck;
      case 'Syringe': return Syringe;
      case 'Sparkles': return Sparkles;
      case 'BookOpen': return BookOpen;
      case 'Languages': return Languages;
      case 'Globe': return Globe;
      case 'Brain': return Brain;
      default: return Layers;
    }
  };

  
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);

  useEffect(() => {
    setIsUnlocked(getIsPremiumUnlocked());
  }, []);

  const handleSuccessUnlock = () => {
    setIsUnlocked(true);
    setShowUnlockModal(false);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Official Developer Attribution & Exam Banner */}
      
      {/* Marquee Banner */}
      {!isUnlocked && (
        <div 
          onClick={() => setShowUnlockModal(true)}
          className="w-full -mt-4 mb-4 bg-gradient-to-r from-amber-500 to-amber-300 text-slate-950 flex overflow-hidden cursor-pointer shadow-lg hover:brightness-110 transition-all rounded-xl border border-amber-400"
        >
          <div className="flex animate-marquee whitespace-nowrap shrink-0 items-center py-2.5">
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Sparkles className="w-4 h-4"/> 3000+ MCQs</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><BookOpen className="w-4 h-4"/> सर्व 30 Chapters</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Layers className="w-4 h-4"/> Detailed Explanations</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><FileCheck className="w-4 h-4"/> Mock Tests</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><ShieldCheck className="w-4 h-4"/> 1 Device Secure Access</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Unlock className="w-4 h-4"/> Lifetime Premium Access</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><CheckCircle2 className="w-4 h-4"/> ₹200 Only (One Time)</span>
          </div>
          <div className="flex animate-marquee whitespace-nowrap shrink-0 items-center py-2.5">
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Sparkles className="w-4 h-4"/> 3000+ MCQs</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><BookOpen className="w-4 h-4"/> सर्व 30 Chapters</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Layers className="w-4 h-4"/> Detailed Explanations</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><FileCheck className="w-4 h-4"/> Mock Tests</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><ShieldCheck className="w-4 h-4"/> 1 Device Secure Access</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Unlock className="w-4 h-4"/> Lifetime Premium Access</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><CheckCircle2 className="w-4 h-4"/> ₹200 Only (One Time)</span>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border border-teal-500/40 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold">
              <Award className="w-4 h-4 text-teal-300" />
              <span>{OFFICIAL_EXAM_INFO.department} • {OFFICIAL_EXAM_INFO.postType}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              सार्वजनिक आरोग्य विभाग गट 'क' ऑनलाईन भरती परीक्षा
              <span className="block text-teal-300 text-lg sm:text-xl font-bold mt-1">
                क्ष-किरण वैज्ञानिक अधिकारी (X-Ray Scientific Officer) - अधिकृत अभ्यासक्रम
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              आरोग्य विभाग गट 'क' च्या अधिकृत नियमांनुसार एकूण १०० वस्तुनिष्ठ बहुपर्यायी प्रश्न (२०० गुण), वेळ २.०० तास (१२० मिनिटे). ८०% गुण (८० प्रश्न/१६० गुण) तांत्रिक अर्हतेसाठी व २०% गुण (२० प्रश्न/४० गुण) बिगर-तांत्रिक विषयांसाठी.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30 font-extrabold">
                तांत्रिक घटक (80%): १६० गुण (८० प्रश्न)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 font-bold">
                इंग्रजी: १० गुण (५ प्रश्न)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-orange-300 border border-slate-700 font-bold">
                मराठी: १० गुण (५ प्रश्न)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-purple-300 border border-slate-700 font-bold">
                सामान्य ज्ञान: १० गुण (५ प्रश्न)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-rose-300 border border-slate-700 font-bold">
                बौद्धिक चाचणी: १० गुण (५ प्रश्न)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                ⏱️ वेळ: २.०० तास (१२० मिनिटे)
              </span>
            </div>
          </div>

          {/* Author/Developer Details Box */}
          <div className="md:col-span-4 bg-slate-900/90 border border-teal-500/50 rounded-xl p-4 space-y-3 backdrop-blur shadow-2xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>पोर्टल निर्मिती व मार्गदर्शन</span>
              <UserCheck className="w-4 h-4 text-teal-400" />
            </div>

            <div className="space-y-1">
              <div className="text-base font-extrabold text-white">
                {OFFICIAL_EXAM_INFO.developer.name}
              </div>
              <div className="text-xs font-semibold text-teal-300">
                {OFFICIAL_EXAM_INFO.developer.designation}
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-1">
                <span>📍 {OFFICIAL_EXAM_INFO.developer.location}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
              <a 
                href={`tel:${OFFICIAL_EXAM_INFO.developer.mobile}`} 
                className="flex items-center gap-1.5 text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 px-3 py-1.5 rounded-lg border border-teal-500/30 font-bold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>मो. {OFFICIAL_EXAM_INFO.developer.mobile}</span>
              </a>
              <span className="text-[10px] text-slate-400">आरोग्य सेवा महाराष्ट्र</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official Arogya Vibhag Group C Exam Rules Box */}
      <div className="bg-slate-900 border border-teal-500/30 rounded-2xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white">
                आरोग्य विभाग गट 'क' परीक्षा स्वरूप व अधिकृत नियम (Group C Exam Pattern)
              </h2>
              <p className="text-xs text-slate-400">सार्वजनिक आरोग्य विभाग गट 'क' ऑनलाईन परीक्षेची अधिकृत माहिती व गुणरचना</p>
            </div>
          </div>
          <span className="hidden sm:inline-block text-xs font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1 rounded-full">
            १०० प्रश्न • २०० गुण
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="font-bold text-teal-300 flex items-center gap-1.5">
              <span>📌 १. ऑनलाईन परीक्षा स्वरूप (Online Exam)</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              गट 'क' पदांकरिता १०० प्रश्न असलेली २०० गुणांची ऑनलाईन परीक्षा घेण्यात येईल. सर्व प्रश्न वस्तुनिष्ठ बहुपर्यायी (MCQ) स्वरूपाचे असतील व प्रत्येक प्रश्नास ०२ गुण मिळतील.
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="font-bold text-teal-300 flex items-center gap-1.5">
              <span>🎯 २. तांत्रिक व बिगर-तांत्रिक गुणविभागणी (80:20 Ratio)</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              विभागाशी निगडीत तांत्रिक/व्यावसायिक पदांसाठी <strong className="text-teal-300">८०% गुण (८० प्रश्न = १६० गुण)</strong> तांत्रिक अर्हतेवर व <strong className="text-teal-300">२०% गुण (२० प्रश्न = ४० गुण)</strong> मराठी, इंग्रजी, सामान्य ज्ञान व गणित यांवर असतील.
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="font-bold text-teal-300 flex items-center gap-1.5">
              <span>🌐 ३. परीक्षेचे माध्यम (Medium of Question Paper)</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              ज्या पदांसाठी शैक्षणिक अर्हता किमान पदवीधर आहे त्या पदांसाठी मराठी भाषा विषयक प्रश्न वगळता प्रश्नपत्रिकेतील सर्व प्रश्न इंग्रजी (English) माध्यमामध्ये असतील.
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="font-bold text-teal-300 flex items-center gap-1.5">
              <span>🚗 ४. वाहनचालक पद विशेष नियम (Driver Post Pattern)</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              वाहनचालक या पदाकरिता २० प्रश्न (४० गुण) मराठी, इंग्रजी, सामान्य ज्ञान व बौद्धिक चाचणीवर आणि ८० प्रश्न (१६० गुण) विषयाधारित (वाहनचालक कौशल्यावर) अशी एकूण २०० गुणांची परीक्षा + व्यावसायिक चाचणी होईल.
            </p>
          </div>
        </div>

        <div className="bg-teal-950/40 border border-teal-500/30 p-3 rounded-xl flex items-center justify-between text-xs text-teal-200 font-semibold">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-teal-400 shrink-0" />
            <span>परीक्षेचा कालावधी: २.०० तास (१२० मिनिटे) • नकारात्मक गुणपद्धती (Negative Marking) लागू नाही.</span>
          </div>
          <span className="text-[11px] bg-teal-500 text-slate-950 font-black px-2.5 py-0.5 rounded-md">
            २.०० तास
          </span>
        </div>
      </div>

      {/* Hero Quick Start Bar */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-teal-400" />
            परीक्षा तयारी आणि सराव (Practice & Exam Simulation)
          </h2>
          <p className="text-xs text-slate-400">
            २ तास वेळेसह पूर्ण २०० गुणांची परीक्षा किंवा विषयनिहाय सराव करा
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onStartQuiz({ mode: 'exam' })}
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-teal-500/20 text-sm transition-all"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>पूर्ण परीक्षा सुरू करा (100 Qs - 200 Marks)</span>
          </button>

          <button
            onClick={() => onStartQuiz({ mode: 'practice' })}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-teal-300 font-semibold px-4 py-2.5 rounded-xl border border-slate-700 text-sm transition-all"
          >
            <FileCheck className="w-4 h-4 text-teal-400" />
            <span>सराव प्रश्नसंच (Practice Mode)</span>
          </button>
        </div>
      </div>

      {/* Stat Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-black text-teal-400">{globalAccuracy}%</div>
          <div className="text-xs text-slate-400 font-medium mt-1">एकूण अचूकता (Accuracy)</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-black text-cyan-400">{attemptedUniqueCount}/{totalQuestions}</div>
          <div className="text-xs text-slate-400 font-medium mt-1">सोडवलेले प्रश्न (Attempted)</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-black text-amber-400">{bookmarkedIds.length}</div>
          <div className="text-xs text-slate-400 font-medium mt-1">जतन केलेले प्रश्न (Bookmarks)</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-black text-indigo-400">{coveragePercent}%</div>
          <div className="text-xs text-slate-400 font-medium mt-1">अभ्यासक्रम पूर्णता (Coverage)</div>
        </div>
      </div>

      
      {/* Premium Poster */}
      {!isUnlocked && (
        <div className="bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 mx-auto shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
              <Unlock className="w-8 h-8" />
            </div>
          </div>

          <div className="space-y-2 max-w-xl mx-auto relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Limited Time Offer
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              सर्व ३०००+ प्रश्न आणि ३० अध्यायांचा सराव अनलॉक करा!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              फक्त <strong className="text-amber-400">₹२०० (One Time Payment)</strong> मध्ये संपूर्ण परीक्षेची तयारी करा. एकदा खरेदी करा आणि आयुष्यभर वापरा (Lifetime Access).
            </p>
          </div>

          <button
            onClick={() => setShowUnlockModal(true)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-300 hover:to-amber-200 text-slate-950 font-black px-8 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 text-sm transition-all relative z-10"
          >
            <Sparkles className="w-5 h-5 stroke-[2.5]" />
            <span>Premium अनलॉक करा - ₹200 Only</span>
          </button>
        </div>
      )}


      {/* Categories Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-teal-400" />
              विषयनिहाय अभ्यासक्रम (Syllabus Categories)
            </h2>
            <p className="text-xs text-slate-400">आरोग्य विभाग क्ष-किरण वैज्ञानिक अधिकारी परीक्षेच्या घटकांनुसार सराव करा</p>
          </div>
          <button
            onClick={() => onNavigateTab('categories')}
            className="text-xs text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1"
          >
            <span>सर्व घटक पहा (View All)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => {
            const IconComponent = getCategoryIcon(cat.iconName);
            const catQuestions = questions.filter(q => q.category === cat.name);
            
            // Calculate category specific accuracy
            let catAttempts = 0;
            let catCorrect = 0;
            quizSessions.forEach(session => {
              Object.entries(session.answers).forEach(([qIdStr, ans]) => {
                const q = questions.find(q => q.id === Number(qIdStr));
                const userAnswer = ans as UserAnswer;
                if (q && q.category === cat.name) {
                  catAttempts++;
                  if (userAnswer.isCorrect) catCorrect++;
                }
              });
            });
            const catAccuracy = catAttempts > 0 ? Math.round((catCorrect / catAttempts) * 100) : 0;

            const categoryTitle = (langMode === 'mr' || langMode === 'dual') ? cat.nameMr : cat.name;
            const categoryDesc = (langMode === 'mr' || langMode === 'dual') ? cat.descriptionMr : cat.description;

            return (
              <div
                key={cat.name}
                onClick={() => {
                  if (onSelectCategoryForChapters) {
                    onSelectCategoryForChapters(cat.name);
                  } else {
                    onNavigateTab('categories');
                  }
                }}
                className="group relative bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between shadow-md cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base group-hover:text-teal-300 transition-colors">
                          {categoryTitle}
                        </h3>
                        {langMode === 'dual' && cat.name !== cat.nameMr && (
                          <div className="text-[11px] text-slate-400 italic">
                            {cat.name}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 whitespace-nowrap">
                      प्रकरणे व घटक &rarr;
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {categoryDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    अचूकता: <span className="font-bold text-teal-400">{catAccuracy}%</span>
                    <span className="text-slate-500 text-[10px] ml-1">({catAttempts} प्रयोगांतून)</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectCategoryForChapters) {
                        onSelectCategoryForChapters(cat.name);
                      } else {
                        onNavigateTab('categories');
                      }
                    }}
                    className="flex items-center gap-1.5 text-xs font-extrabold text-slate-950 bg-teal-400 hover:bg-teal-300 px-3.5 py-1.5 rounded-xl transition-all shadow-sm"
                  >
                    <span>संबंधित प्रकरणे पाहा (View Chapters)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Diagnostic Questions Spotlight */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-teal-400" />
              महत्त्वाचे सराव प्रश्न (High-Yield Practice Questions)
            </h2>
            <p className="text-xs text-slate-400">परीक्षा दृष्टिकोनातून अत्यंत महत्त्वाचे तांत्रिक व बिगर तांत्रिक प्रश्न</p>
          </div>
          <button
            onClick={() => onStartQuiz({ mode: 'core' })}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/30 px-3 py-1.5 rounded-lg font-semibold transition-colors self-start sm:self-auto"
          >
            सर्व प्रश्न सोडवा (Launch Quiz)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {coreQuestions.map((q) => {
            const status = questionStatusMap[q.id];
            const isSaved = bookmarkedIds.includes(q.id);

            const displayQuestionText = (langMode === 'mr' && q.question_mr) 
              ? q.question_mr 
              : q.question;

            return (
              <div
                key={q.id}
                onClick={() => onSelectQuestionDirect(q.id)}
                className="cursor-pointer bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/50 p-4 rounded-xl space-y-2 transition-all group shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">
                    Q#{q.id} • {q.section ? q.section.toUpperCase() : 'GENERAL'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {isSaved && <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                    {status?.attempted ? (
                      status.lastCorrect ? (
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                          बरोबर (Passed)
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                          पुन्हा पहा (Needs Review)
                        </span>
                      )
                    ) : (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-medium">
                        न सोडवलेले
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="text-xs font-medium text-slate-200 line-clamp-2 group-hover:text-white transition-colors leading-snug">
                  {displayQuestionText}
                </h4>

                {langMode === 'dual' && q.question_mr && (
                  <p className="text-[11px] text-teal-300/90 line-clamp-2 italic font-sans">
                    {q.question_mr}
                  </p>
                )}

                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
                  <span className="truncate max-w-[180px] text-slate-400">{q.category}</span>
                  <span className="font-semibold text-teal-400 group-hover:underline">पहा &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showUnlockModal && (
        <PremiumUnlockModal
          onClose={() => setShowUnlockModal(false)}
          onSuccessUnlock={handleSuccessUnlock}
        />
      )}
    </div>
  );
};

