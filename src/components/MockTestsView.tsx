import React from 'react';
import { 
  FileCheck, 
  Lock, 
  Unlock, 
  Clock, 
  Award, 
  PlayCircle, 
  Sparkles, 
  Zap,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { Question } from '../types';
import { ALL_30_CHAPTERS } from '../data/chaptersData';
import { getIsPremiumUnlocked } from '../lib/storage';

interface MockTestsViewProps {
  questions: Question[];
  isUnlocked: boolean;
  langMode?: 'dual' | 'en' | 'mr';
  onStartQuiz: (options: { mode: 'exam' | 'practice' | 'category' | 'core' | 'saved' | 'missed'; category?: string }) => void;
  onNavigateTab: (tab: string) => void;
}

export const MockTestsView: React.FC<MockTestsViewProps> = ({
  questions,
  isUnlocked: isUnlockedProp,
  langMode = 'dual',
  onStartQuiz,
  onNavigateTab,
}) => {
  const isUnlocked = isUnlockedProp || getIsPremiumUnlocked();
  return (
    <div className="space-y-6 pb-24 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[22px] p-6 text-white shadow-md space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold flex items-center gap-1.5 border border-white/20">
            <FileCheck className="w-4 h-4 text-amber-300" />
            <span>Mock Test Series 2026</span>
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Radiology Officer Mock Test Portal
        </h1>
        <p className="text-blue-100 text-xs sm:text-sm max-w-2xl">
          Attempt timed 200-mark full length exams and chapterwise mock tests modeled on TCS/IBPS exam patterns.
        </p>
      </div>

      {/* Free Demo Test Card */}
      <div className="bg-white rounded-[18px] p-6 border-2 border-emerald-500/80 shadow-sm space-y-4 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-extrabold border border-emerald-200">
              100% FREE DEMO MOCK
            </span>
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100">
              20 Questions • 40 Marks
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>20 Mins Duration</span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900">
            Demo Practice Mock Test (निःशुल्क चाचणी)
          </h3>
          <p className="text-xs text-slate-600">
            Includes sample questions from Radiation Physics, Positioning, Contrast Media & Safety.
          </p>
        </div>

        <button
          onClick={() => onStartQuiz({ mode: 'core' })}
          className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <PlayCircle className="w-5 h-5" />
          <span>Start Free Demo Test Now</span>
        </button>
      </div>

      {/* Grand Full 200 Marks Test */}
      <div className="bg-white rounded-[18px] p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-extrabold border border-amber-200">
              GRAND FULL MOCK TEST
            </span>
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold">
              100 Questions • 200 Marks
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>120 Mins Duration</span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900">
            सार्वजनिक आरोग्य विभाग - १०० प्रश्न भरती चाचणी (Full Syllabus)
          </h3>
          <p className="text-xs text-slate-600">
            80 Technical Radiology questions + 20 Non-technical (English, Marathi, GK, Reasoning) questions.
          </p>
        </div>

        {isUnlocked ? (
          <button
            onClick={() => onStartQuiz({ mode: 'exam' })}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <PlayCircle className="w-5 h-5" />
            <span>Start Grand Mock Test</span>
          </button>
        ) : (
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
              <Lock className="w-4 h-4 text-amber-600" />
              <span>Full Grand Mock Test is locked for Premium members.</span>
            </div>
            <button
              onClick={() => onNavigateTab('premium')}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-lg text-xs transition-colors shadow-sm cursor-pointer"
            >
              Unlock Premium ₹200
            </button>
          </div>
        )}
      </div>

      {/* Chapter-wise Mock Tests Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span>Chapter-wise Mock Tests (30 Chapters)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ALL_30_CHAPTERS.map((chap) => {
            const isChapUnlocked = isUnlocked;
            return (
              <div
                key={chap.id}
                className="bg-white rounded-[18px] p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      Chapter #{chap.id}
                    </span>
                    {!isChapUnlocked && (
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                        <Lock className="w-3 h-3 text-amber-600" />
                        <span>Premium</span>
                      </span>
                    )}
                  </div>
                  {langMode === 'mr' ? (
                    <>
                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                        {chap.titleMr}
                      </h4>
                      <p className="text-xs text-slate-600 font-semibold">{chap.title}</p>
                    </>
                  ) : langMode === 'en' ? (
                    <>
                      <h4 className="font-black text-slate-900 text-sm sm:text-base leading-snug">
                        {chap.title}
                      </h4>
                      <p className="text-xs text-slate-500">{chap.titleMr}</p>
                    </>
                  ) : (
                    <>
                      <h4 className="font-black text-slate-900 text-sm sm:text-base leading-snug">
                        {chap.title}
                      </h4>
                      <p className="text-xs text-blue-800 font-bold mt-0.5">
                        {chap.titleMr}
                      </p>
                    </>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {chap.freeQuestionsCount || 15} Free MCQs
                  </span>

                  <button
                    onClick={() => {
                      if (isChapUnlocked) {
                        onStartQuiz({ mode: 'category', category: chap.category });
                      } else {
                        onNavigateTab('premium');
                      }
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isChapUnlocked
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300'
                    }`}
                  >
                    {isChapUnlocked ? (
                      <>
                        <PlayCircle className="w-3.5 h-3.5" />
                        <span>Start Test</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5 text-amber-600" />
                        <span>Unlock Test</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
