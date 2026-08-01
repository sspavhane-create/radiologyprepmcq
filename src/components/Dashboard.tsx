import React, { useState, useEffect } from 'react';
import { Question, QuizSession, UserAnswer, LanguageMode } from '../types';
import { CATEGORIES, OFFICIAL_EXAM_INFO } from '../data/initialQuestions';
import { ALL_30_CHAPTERS, ChapterItem } from '../data/chaptersData';
import { getIsPremiumUnlocked } from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
import { PromoAdModal } from './PromoAdModal';

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
  Unlock,
  Building2,
  GraduationCap,
  Zap,
  Search,
  X,
  Clock,
  ChevronRight,
  Check,
  FileText
} from 'lucide-react';

interface DashboardProps {
  questions: Question[];
  quizSessions: QuizSession[];
  bookmarkedIds: number[];
  langMode?: LanguageMode;
  isUnlocked?: boolean;
  onStartQuiz: (options: { 
    mode: 'exam' | 'practice' | 'category' | 'core'; 
    category?: string; 
    questionIds?: number[];
    isCentral?: boolean;
  }) => void;
  onNavigateTab: (tab: string) => void;
  onSelectQuestionDirect: (questionId: number) => void;
  onSelectCategoryForChapters?: (categoryName: string) => void;
}

export const CENTRAL_AND_OTHER_STATE_EXAMS = [
  {
    id: 'aiims-rad',
    title: 'AIIMS Radiographer Recruitment Exam',
    titleMr: 'एम्स (AIIMS) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'AIIMS Central',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    description: 'एम्स दिल्ली, भोपाल, जोधपुर, पटना, ऋषिकेश आदि एम्स अस्पतालों में रेडियोग्राफर परीक्षा की तैयारी।',
    iconName: 'Building2'
  },
  {
    id: 'aiims-ct',
    title: 'AIIMS CT Scan Technician Exam',
    titleMr: 'एम्स (AIIMS) सी.टी. स्कैन तकनीशियन विशेष भर्ती परीक्षा',
    badge: 'CT Scan Specialist',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    description: 'कम्प्यूटेड टोमोग्राफी (CT Scan), स्लाइस प्रोटोकॉल, कंट्रास्ट इंजेक्शन और क्रॉस-सेक्शनल शरीर रचना अभ्यास।',
    iconName: 'Activity'
  },
  {
    id: 'aiims-mri',
    title: 'AIIMS MRI Technician Exam',
    titleMr: 'एम्स (AIIMS) एम.आर.आई. तकनीशियन भर्ती परीक्षा',
    badge: 'MRI Advanced',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    description: 'मैग्नेटिक रेजोनेंस इमेजिंग, पल्स सीक्वेंस, रिलैक्सेशन टाइम, सुरक्षा और आर्टिफैक्ट्स।',
    iconName: 'Brain'
  },
  {
    id: 'dhs-recruitment',
    title: 'DHS Radiographer Recruitment',
    titleMr: 'स्वास्थ्य सेवा निदेशालय (DHS) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'DHS Exam',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    description: 'राज्य स्तरीय और केंद्र शासित प्रदेश स्वास्थ्य सेवा निदेशालय (DHS) तकनीशियन अभ्यास प्रश्न।',
    iconName: 'HeartPulse'
  },
  {
    id: 'dmer-recruitment',
    title: 'DMER Radiographer Recruitment',
    titleMr: 'चिकित्सा शिक्षा और अनुसंधान निदेशालय (DMER) भर्ती परीक्षा',
    badge: 'DMER Exam',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    description: 'सरकारी मेडिकल कॉलेजों और अस्पतालों के DMER नियमों के अनुसार तकनीकी अभ्यास।',
    iconName: 'GraduationCap'
  },
  {
    id: 'nhm-radiographer',
    title: 'NHM Radiographer Recruitment',
    titleMr: 'राष्ट्रीय स्वास्थ्य मिशन (NHM) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'NHM National Health',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description: 'राष्ट्रीय स्वास्थ्य मिशन (NHM) के तहत संविदात्मक और नियमित रेडियोग्राफर पदों के लिए अभ्यास।',
    iconName: 'Syringe'
  },
  {
    id: 'esic-radiographer',
    title: 'ESIC Radiographer Examination',
    titleMr: 'कर्मचारी राज्य बीमा निगम (ESIC) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'Central Govt ESIC',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    description: 'कर्मचारी राज्य बीमा निगम (ESIC) अखिल भारतीय स्तर रेडियोग्राफर परीक्षा अभ्यास।',
    iconName: 'ShieldCheck'
  },
  {
    id: 'rrb-railway',
    title: 'Railway Radiographer (RRB) Exam',
    titleMr: 'रेलवे भर्ती बोर्ड (RRB) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'RRB Railways',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    description: 'रेलवे भर्ती बोर्ड (RRB) पैरामेडिकल श्रेणी में रेडियोग्राफर पद भर्ती परीक्षा।',
    iconName: 'Zap'
  },
  {
    id: 'pgimer-radiographer',
    title: 'PGIMER Radiographer Recruitment',
    titleMr: 'पीजीआईएमईआर चंडीगढ़ (PGIMER) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'PGIMER Chandigarh',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    description: 'स्नातकोत्तर चिकित्सा शिक्षा और अनुसंधान संस्थान (PGIMER) तकनीकी अभ्यास।',
    iconName: 'Award'
  },
  {
    id: 'jipmer-radiographer',
    title: 'JIPMER Radiographer Exam',
    titleMr: 'जिपमेर पुदुचेरी (JIPMER) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'JIPMER Puducherry',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    description: 'जवाहरलाल स्नातकोत्तर चिकित्सा शिक्षा और अनुसंधान संस्थान तकनीकी अभ्यास प्रश्न।',
    iconName: 'Globe'
  },
  {
    id: 'sgpgi-radiographer',
    title: 'SGPGI Radiographer Recruitment',
    titleMr: 'एसजीपीजीआई लखनऊ (SGPGI) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'SGPGI Lucknow',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    description: 'संजय गांधी स्नातकोत्तर चिकित्सा विज्ञान संस्थान (SGPGI) परीक्षा अभ्यास।',
    iconName: 'Layers'
  },
  {
    id: 'gmc-radiographer',
    title: 'Government Medical College Radiographer Recruitment',
    titleMr: 'शासकीय मेडिकल कॉलेज (GMC) रेडियोग्राफर भर्ती परीक्षा',
    badge: 'GMC Medical Colleges',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    description: 'सभी शासकीय मेडिकल कॉलेजों में एक्स-रे और रेडियोग्राफी तकनीशियन भर्ती परीक्षा अभ्यास।',
    iconName: 'Building2'
  },
  {
    id: 'central-govt-exams',
    title: 'Central Government Radiology Exams',
    titleMr: 'केंद्र सरकार रेडियोलॉजी भर्ती परीक्षा (UPSC / SSC / रक्षा अस्पताल)',
    badge: 'Central Defense & SSC',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    description: 'सैन्य अस्पताल (सेना/नौसेना/वायुसेना), SSC और केंद्र सरकार के अन्य प्रमुख अस्पतालों की परीक्षा।',
    iconName: 'ShieldCheck'
  },
  {
    id: 'state-govt-exams',
    title: 'State Government Radiology Exams',
    titleMr: 'विभिन्न राज्य सरकार रेडियोलॉजी भर्ती परीक्षा',
    badge: 'All State Boards',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description: 'महाराष्ट्र के अलावा अन्य सभी भारतीय राज्यों में रेडियोलॉजी और एक्स-रे तकनीशियन परीक्षा अभ्यास।',
    iconName: 'Target'
  },
  {
    id: 'diploma-radiography',
    title: 'Diploma in Radiography Competitive Exams',
    titleMr: 'डिप्लोमा इन रेडियोग्राफी (DMIT / DRT) प्रतियोगी परीक्षा',
    badge: 'Diploma Level',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    description: 'डिप्लोमा इन मेडिकल इमेजिंग टेक्नोलॉजी (DMIT/DRT) धारकों के लिए विशेष तकनीकी अभ्यास।',
    iconName: 'BookOpen'
  },
  {
    id: 'bsc-mit-exams',
    title: 'B.Sc. Medical Imaging Technology Entrance & Recruitment Exams',
    titleMr: 'बी.एससी. मेडिकल इमेजिंग टेक्नोलॉजी (B.Sc. MIT) प्रवेश और भर्ती परीक्षा',
    badge: 'Degree & Entrance',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    description: 'B.Sc. MIT, BMRIT डिग्री धारक छात्रों के लिए उन्नत रेडियोलॉजी प्रश्न बैंक और परीक्षण।',
    iconName: 'GraduationCap'
  }
];

export const Dashboard: React.FC<DashboardProps> = ({
  questions,
  quizSessions,
  bookmarkedIds,
  langMode = 'dual',
  isUnlocked: isUnlockedProp,
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

  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => !!isUnlockedProp || getIsPremiumUnlocked());
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);
  const [showAdModal, setShowAdModal] = useState<boolean>(false);

  // Search & Chapter Exam Modal State
  const [examSearchQuery, setExamSearchQuery] = useState<string>('');
  const [selectedExamForChapterModal, setSelectedExamForChapterModal] = useState<{
    title: string;
    titleMr: string;
    mode: 'question-bank' | 'exam';
    isCentral?: boolean;
  } | null>(null);

  const [chapterFilterQuery, setChapterFilterQuery] = useState<string>('');

  useEffect(() => {
    const unlocked = !!isUnlockedProp || getIsPremiumUnlocked();
    setIsUnlocked(unlocked);
    if (!unlocked) {
      setShowAdModal(true);
    } else {
      setShowAdModal(false);
    }
  }, [isUnlockedProp]);

  const handleSuccessUnlock = () => {
    setIsUnlocked(true);
    setShowUnlockModal(false);
    setShowAdModal(false);
  };

  const filteredExams = CENTRAL_AND_OTHER_STATE_EXAMS.filter(exam => {
    const q = examSearchQuery.toLowerCase().trim();
    if (!q) return true;
    return exam.title.toLowerCase().includes(q) || exam.titleMr.toLowerCase().includes(q) || exam.description.toLowerCase().includes(q);
  });

  const filteredChapters = ALL_30_CHAPTERS.filter(ch => {
    const q = chapterFilterQuery.toLowerCase().trim();
    if (!q) return true;
    return ch.title.toLowerCase().includes(q) || ch.titleMr.toLowerCase().includes(q) || ch.descriptionMr.toLowerCase().includes(q);
  });

  const handleSelectChapterForAction = (chapter: ChapterItem, actionType: 'question-bank' | 'exam', examTitle?: string) => {
    const isCentral = selectedExamForChapterModal?.isCentral || false;
    setSelectedExamForChapterModal(null);
    if (actionType === 'question-bank') {
      if (onSelectCategoryForChapters) {
        onSelectCategoryForChapters(chapter.category);
      } else {
        onNavigateTab('categories');
      }
    } else {
      // Start Chapter Exam
      onStartQuiz({
        mode: 'category',
        category: chapter.category,
        isCentral: isCentral
      });
    }
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Marquee Promo Ad Banner */}
      {!isUnlocked && (
        <div className="flex flex-col sm:flex-row items-center gap-2 -mt-4 mb-2">
          <div 
            onClick={() => setShowAdModal(true)}
            className="flex-1 w-full bg-gradient-to-r from-amber-500 to-amber-300 text-slate-950 flex overflow-hidden cursor-pointer shadow-lg hover:brightness-110 transition-all rounded-xl border border-amber-400"
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

          <button
            onClick={() => setShowAdModal(true)}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 px-3.5 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shrink-0 shadow-md transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>📢 जाहिरात पोस्टर पहा</span>
          </button>
        </div>
      )}

      {/* Main Header Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border border-teal-500/40 rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold">
              <Award className="w-4 h-4 text-teal-300" />
              <span>महाराष्ट्र व अखिल भारतीय रेडिओलॉजी स्पर्धा परीक्षा पोर्टल</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              3000+ RADIOLOGY QUESTION BANK & EXAMS
              <span className="block text-teal-300 text-lg sm:text-2xl font-bold mt-1">
                महाराष्ट्र व ऑल इंडिया रेडिओलॉजी भरती परीक्षा ऑनलाईन सराव
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              अध्यायानुसार सराव प्रश्नसंच (Chapter-wise Question Bank) व अध्याय पूर्ण झाल्यावर त्यावर ऑनलाईन परीक्षा (Chapter-wise Online Mock Test).
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 font-extrabold">
                📚 सर्व ३० अध्याय समाविष्ट
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 font-bold">
                📝 सविस्तर मराठी स्पष्टीकरणे
              </span>
              <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                ⏱️ Real-time Online Exam Mode
              </span>
            </div>
          </div>

          {/* Author/Developer Details Box */}
          <div className="md:col-span-4 bg-slate-900/95 border border-teal-500/50 rounded-2xl p-4 space-y-3 backdrop-blur shadow-2xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>मार्गदर्शन व निर्मिती</span>
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

      {/* Stat Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-center shadow-md">
          <div className="text-3xl font-black text-teal-400">{globalAccuracy}%</div>
          <div className="text-xs text-slate-400 font-medium mt-1">अचूकता (Global Accuracy)</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-center shadow-md">
          <div className="text-3xl font-black text-cyan-400">{attemptedUniqueCount}/{totalQuestions}</div>
          <div className="text-xs text-slate-400 font-medium mt-1">सोडवलेले प्रश्न (Attempted)</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-center shadow-md">
          <div className="text-3xl font-black text-amber-400">{bookmarkedIds.length}</div>
          <div className="text-xs text-slate-400 font-medium mt-1">जतन केलेले प्रश्न (Bookmarks)</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-center shadow-md">
          <div className="text-3xl font-black text-indigo-400">30 / 30</div>
          <div className="text-xs text-slate-400 font-medium mt-1">अध्याय उपलब्ध (Chapters)</div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: महाराष्ट्रातील क्ष किरण स्पर्धा परीक्षा */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-teal-500/50 rounded-3xl p-5 sm:p-8 space-y-6 shadow-2xl relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-500/30 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              🚩 SECTION 1
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              महाराष्ट्रातील क्ष किरण स्पर्धा परीक्षा (Maharashtra Radiology Exams)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              सार्वजनिक आरोग्य विभाग (DHS), वैद्यकीय शिक्षण (DMER), जिल्हा परिषद (ZP) व X-Ray Scientific Officer भरती तयारी.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => onStartQuiz({ mode: 'exam' })}
              className="bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-slate-950 font-black px-4 py-2.5 rounded-xl shadow-lg shadow-teal-500/20 text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>महाराष्ट्रातील पूर्ण १०० प्रश्न परीक्षा द्या</span>
            </button>
          </div>
        </div>

        {/* Exam Badges for Section 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-950 border border-teal-500/30 p-3.5 rounded-2xl space-y-1">
            <div className="text-teal-400 font-black text-xs flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-teal-400" />
              <span>DHS Maharashtra</span>
            </div>
            <div className="text-xs text-slate-300 font-semibold">आरोग्य सेवा क्ष-किरण वैज्ञानिक अधिकारी</div>
            <div className="text-[10px] text-teal-400 font-bold pt-1">१०० प्रश्न • २०० गुण</div>
          </div>

          <div className="bg-slate-950 border border-emerald-500/30 p-3.5 rounded-2xl space-y-1">
            <div className="text-emerald-400 font-black text-xs flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>DMER Maharashtra</span>
            </div>
            <div className="text-xs text-slate-300 font-semibold">वैद्यकीय शिक्षण व संशोधन भरती</div>
            <div className="text-[10px] text-emerald-400 font-bold pt-1">तांत्रिक ८०% + बिगर तांत्रिक २०%</div>
          </div>

          <div className="bg-slate-950 border border-cyan-500/30 p-3.5 rounded-2xl space-y-1">
            <div className="text-cyan-400 font-black text-xs flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>ZP Radiographer</span>
            </div>
            <div className="text-xs text-slate-300 font-semibold">जिल्हा परिषद क्ष-किरण तंत्रज्ञ परीक्षा</div>
            <div className="text-[10px] text-cyan-400 font-bold pt-1">ग्रामविकास विभाग भरती</div>
          </div>

          <div className="bg-slate-950 border border-indigo-500/30 p-3.5 rounded-2xl space-y-1">
            <div className="text-indigo-400 font-black text-xs flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>MUHS / MSBTE</span>
            </div>
            <div className="text-xs text-slate-300 font-semibold">महाराष्ट्र आरोग्य विज्ञान विद्यापीठ</div>
            <div className="text-[10px] text-indigo-400 font-bold pt-1">डिप्लोमा व पदवी सराव</div>
          </div>
        </div>

        {/* Section 1 Core Action Buttons (Chapter Question Bank & Chapter Exam) */}
        <div className="bg-slate-950/80 border border-slate-800 p-4 sm:p-6 rounded-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-400" />
                महाराष्ट्रातील परीक्षा: अध्यायानुसार सराव प्रश्नसंच व ऑनलाईन चाचणी
              </h3>
              <p className="text-xs text-slate-400">
                खालील बटणांवर क्लिक करून अध्यायानुसार प्रश्नसंच वाचा किंवा अध्याय पूर्ण झाल्यावर परीक्षा द्या
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedExamForChapterModal({
                    title: 'महाराष्ट्रातील क्ष किरण स्पर्धा परीक्षा',
                    titleMr: 'DHS / DMER / ZP X-Ray Scientific Officer Exam',
                    mode: 'question-bank'
                  });
                }}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>📖 अध्यायानुसार सराव प्रश्नसंच</span>
              </button>

              <button
                onClick={() => {
                  setSelectedExamForChapterModal({
                    title: 'महाराष्ट्रातील क्ष किरण स्पर्धा परीक्षा',
                    titleMr: 'DHS / DMER / ZP X-Ray Scientific Officer Exam',
                    mode: 'exam'
                  });
                }}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>📝 अध्यायानुसार परीक्षा द्या</span>
              </button>
            </div>
          </div>

          {/* Chapters Quick Slider Grid (30 Chapters preview) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {ALL_30_CHAPTERS.slice(0, 6).map((ch) => (
              <div key={ch.id} className="bg-slate-900 border border-slate-800 hover:border-teal-500/50 p-3 rounded-xl space-y-2 text-xs transition-all">
                <div className="flex items-center justify-between">
                  <span className="bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-black text-[10px]">
                    {ch.part}
                  </span>
                  <span className="text-slate-400 font-bold text-[10px]">Ch #{ch.id}</span>
                </div>
                <div className="font-bold text-white line-clamp-1">{langMode === 'mr' ? ch.titleMr : ch.title}</div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <button
                    onClick={() => handleSelectChapterForAction(ch, 'question-bank')}
                    className="text-teal-400 hover:text-teal-300 font-bold text-[11px] flex items-center gap-1"
                  >
                    <span>📖 प्रश्नसंच</span>
                  </button>
                  <button
                    onClick={() => handleSelectChapterForAction(ch, 'exam')}
                    className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 border border-teal-500/30"
                  >
                    <Play className="w-3 h-3 fill-teal-300" />
                    <span>परीक्षा</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                setSelectedExamForChapterModal({
                  title: 'महाराष्ट्रातील क्ष किरण स्पर्धा परीक्षा',
                  titleMr: 'DHS / DMER / ZP X-Ray Scientific Officer Exam',
                  mode: 'question-bank'
                });
              }}
              className="text-xs text-teal-400 hover:text-teal-300 font-black inline-flex items-center gap-1"
            >
              <span>सर्व ३० अध्याय व प्रश्नसंच उघडा (View All 30 Chapters) &rarr;</span>
            </button>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 2: इतर राज्य व केंद्रीय स्पर्धा परीक्षा */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-indigo-500/50 rounded-3xl p-5 sm:p-8 space-y-6 shadow-2xl relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-500/30 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              🏛️ SECTION 2 (ENGLISH & HINDI MEDIUM)
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              केंद्रीय और अन्य राज्य स्तरीय परीक्षा (Central & All India Exams)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              AIIMS, Railway, ESIC, PGIMER, JIPMER, SGPGI और विभिन्न राज्य/केंद्र सरकार की रेडियोलॉजी भर्ती परीक्षा की तैयारी (English & Hindi Medium).
            </p>
          </div>

          {/* Search Box for Exams */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="परीक्षा शोधा (Search Exam)..."
              value={examSearchQuery}
              onChange={(e) => setExamSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Exams Grid (16 Exams requested by user) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-slate-950/90 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-4 flex flex-col justify-between space-y-4 shadow-lg transition-all hover:scale-[1.01]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-wider ${exam.badgeColor}`}>
                    {exam.badge}
                  </span>
                  <span className="text-[10px] text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    30 Chapters
                  </span>
                </div>

                <h3 className="font-extrabold text-white text-sm sm:text-base leading-snug">
                  {exam.titleMr}
                </h3>
                <div className="text-[11px] font-medium text-slate-400 italic">
                  {exam.title}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {exam.description}
                </p>
              </div>

              {/* Action Buttons inside each Exam Card */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  अध्यायानुसार सराव निवडा:
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setSelectedExamForChapterModal({
                        title: exam.title,
                        titleMr: exam.titleMr,
                        mode: 'question-bank',
                        isCentral: true
                      });
                    }}
                    className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 px-2.5 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all"
                    title="अध्यायानुसार सराव प्रश्नसंच"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>📖 प्रश्नसंच</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedExamForChapterModal({
                        title: exam.title,
                        titleMr: exam.titleMr,
                        mode: 'exam',
                        isCentral: true
                      });
                    }}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white px-2.5 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md transition-all"
                    title="अध्याय पूर्ण झाल्यावर ऑनलाईन परीक्षा"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>📝 परीक्षा द्या</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Category Overview Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-teal-400" />
              विषयनिहाय अभ्यासक्रम (Syllabus Categories)
            </h2>
            <p className="text-xs text-slate-400">रेडिओलॉजी तांत्रिक विषय व मराठी/इंग्रजी/सामान्य ज्ञान घटकानुसार सराव</p>
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
            const catQuestions = questions.filter(q => q.category === cat.name);
            
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
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base group-hover:text-teal-300 transition-colors">
                          {categoryTitle}
                        </h3>
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
                    <span>प्रकरणे पाहा (View Chapters)</span>
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


      {/* CHAPTER SELECTION MODAL (When clicking Question Bank or Take Exam on any Exam) */}
      {selectedExamForChapterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-teal-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto">
            {/* Modal Top Banner */}
            <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 px-6 py-4 border-b border-teal-500/30 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 bg-teal-500/20 px-2.5 py-0.5 rounded border border-teal-500/30">
                  {selectedExamForChapterModal.mode === 'question-bank' ? '📖 Chapter-wise Question Bank' : '📝 Chapter-wise Exam'}
                </span>
                <h3 className="text-lg font-black text-white">
                  {selectedExamForChapterModal.titleMr}
                </h3>
                <div className="text-xs text-slate-400">
                  अध्याय निवडा (Select Chapter 1 to 30)
                </div>
              </div>

              <button
                onClick={() => setSelectedExamForChapterModal(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              
              {/* Search Chapter */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="अध्याय शोधा (Search Chapter)..."
                  value={chapterFilterQuery}
                  onChange={(e) => setChapterFilterQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Chapters List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredChapters.map((ch) => (
                  <div 
                    key={ch.id}
                    className="bg-slate-950 border border-slate-800 hover:border-teal-500/50 p-3.5 rounded-2xl flex flex-col justify-between gap-3 transition-all"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-black">
                          {ch.part}
                        </span>
                        <span className="text-slate-400 font-bold">Ch #{ch.id}</span>
                      </div>
                      <h4 className="font-black text-white text-sm sm:text-base leading-snug">
                        {ch.titleMr}
                      </h4>
                      <p className="text-xs text-teal-300 font-semibold italic">
                        {ch.title}
                      </p>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {ch.descriptionMr}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={() => handleSelectChapterForAction(ch, 'question-bank')}
                        className="bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                        <span>सराव प्रश्नसंच</span>
                      </button>

                      <button
                        onClick={() => handleSelectChapterForAction(ch, 'exam')}
                        className="bg-gradient-to-r from-teal-500 to-emerald-400 text-slate-950 px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 shadow-md transition-all hover:scale-105"
                      >
                        <Play className="w-3.5 h-3.5 fill-slate-950" />
                        <span>परीक्षा द्या</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>सर्व ३० अध्याय सविस्तर स्पष्टीकरणासह उपलब्ध आहेत</span>
              <button
                onClick={() => setSelectedExamForChapterModal(null)}
                className="text-teal-400 font-bold hover:underline"
              >
                बंद करा (Close)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODALS */}
      {showAdModal && (
        <PromoAdModal
          isOpen={showAdModal}
          onClose={() => setShowAdModal(false)}
          onOpenPaymentModal={() => setShowUnlockModal(true)}
          autoCloseSeconds={10}
        />
      )}

      {showUnlockModal && (
        <PremiumUnlockModal
          onClose={() => setShowUnlockModal(false)}
          onSuccessUnlock={handleSuccessUnlock}
        />
      )}
    </div>
  );
};
