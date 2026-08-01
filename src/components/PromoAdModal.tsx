import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Lock, 
  Unlock, 
  BookOpen, 
  CheckCircle2, 
  FileCheck, 
  BarChart3, 
  RotateCw, 
  Smartphone, 
  ShieldCheck, 
  Award,
  Clock,
  Volume2,
  Zap,
  Target,
  GraduationCap
} from 'lucide-react';

interface PromoAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPaymentModal: () => void;
  autoCloseSeconds?: number;
}

export const PromoAdModal: React.FC<PromoAdModalProps> = ({
  isOpen,
  onClose,
  onOpenPaymentModal,
  autoCloseSeconds = 10
}) => {
  const [timeLeft, setTimeLeft] = useState(autoCloseSeconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(autoCloseSeconds);
      return;
    }

    const timer = setInterval(() => {
      if (!isPaused) {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isPaused, autoCloseSeconds]);

  useEffect(() => {
    if (isOpen && timeLeft === 0) {
      onClose();
    }
  }, [timeLeft, isOpen, onClose]);

  if (!isOpen) return null;

  const progressPercentage = (timeLeft / autoCloseSeconds) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl shadow-amber-500/10 overflow-hidden my-auto border-amber-400/50"
      >
        {/* Top Announcement & Auto-Close Timer Bar */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-4 py-2 flex items-center justify-between text-xs font-black">
          <div className="flex items-center gap-2">
            <span className="bg-slate-950/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-extrabold flex items-center gap-1">
              <Zap className="w-3 h-3 fill-slate-950" /> SPECIAL AD
            </span>
            <span className="line-clamp-1">3000+ Radiology Question Bank Offer</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 bg-slate-950/20 px-2.5 py-1 rounded-full text-[11px]">
              <Clock className="w-3.5 h-3.5" />
              <span>{isPaused ? 'पॉज (Hovered)' : `${timeLeft}s मध्ये बंद होईल`}</span>
            </div>

            <button 
              onClick={onClose}
              className="bg-slate-950/30 hover:bg-slate-950/50 text-slate-950 p-1 rounded-full transition-colors flex items-center justify-center"
              title="जाहिरात बंद करा"
            >
              <X className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Progress bar line for auto-close */}
        <div className="w-full bg-slate-950 h-1">
          <div 
            className="bg-amber-400 h-1 transition-all duration-1000 ease-linear"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Modal Main Poster Body */}
        <div className="p-4 sm:p-6 space-y-5 text-white">
          
          {/* Main Title & Subtitle Badge */}
          <div className="text-center space-y-2 relative">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400/40 rounded-full px-4 py-1 text-amber-300 font-bold text-xs shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>महाराष्ट्रातील सर्व स्पर्धा परीक्षांसाठी उपयुक्त</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 tracking-tight uppercase drop-shadow-md">
              3000+ RADIOLOGY QUESTION BANK
            </h2>

            <p className="text-xs sm:text-sm text-amber-200/90 font-medium max-w-lg mx-auto">
              X-Ray Scientific Officer | Radiographer | Radiology Students
            </p>
          </div>

          {/* Core Locked Alert Banner */}
          <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 border border-amber-500/50 rounded-2xl p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black shadow-md shrink-0">
                🎁
              </div>
              <div>
                <span className="text-xs font-bold text-slate-300 block">पहिले 15 प्रश्न फ्री ट्रायल</span>
                <span className="text-sm font-black text-amber-300">15 प्रश्नांनंतर PREMIUM UNLOCK आवश्यक</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-xl border border-amber-500/40 text-xs font-bold">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Premium Access</span>
            </div>
          </div>

          {/* Premium Features Grid (Matches uploaded poster) */}
          <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Award className="w-4 h-4" /> PREMIUM मध्ये मिळेल:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl flex items-center gap-3 transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-base shrink-0">📚</div>
                <div>
                  <div className="font-bold text-amber-300">3000+ MCQs</div>
                  <div className="text-[11px] text-slate-400">संपूर्ण Radiology प्रश्नसंच</div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl flex items-center gap-3 transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-base shrink-0">📖</div>
                <div>
                  <div className="font-bold text-amber-300">सर्व 30 Chapters</div>
                  <div className="text-[11px] text-slate-400">संपूर्ण अध्यायांचा समावेश</div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl flex items-center gap-3 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-base shrink-0">✅</div>
                <div>
                  <div className="font-bold text-emerald-300">Detailed Answers</div>
                  <div className="text-[11px] text-slate-400">सविस्तर उत्तरे व स्पष्टीकरण</div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl flex items-center gap-3 transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-base shrink-0">📝</div>
                <div>
                  <div className="font-bold text-amber-300">Mock Tests</div>
                  <div className="text-[11px] text-slate-400">विविध Mock Test उपलब्ध</div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl flex items-center gap-3 transition-all">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-base shrink-0">📊</div>
                <div>
                  <div className="font-bold text-teal-300">Progress Tracking</div>
                  <div className="text-[11px] text-slate-400">तुमची प्रगती तपासा</div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl flex items-center gap-3 transition-all">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-base shrink-0">🔄</div>
                <div>
                  <div className="font-bold text-cyan-300">Lifetime Updates</div>
                  <div className="text-[11px] text-slate-400">नवीन प्रश्न नियमित अपडेट</div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl flex items-center gap-3 transition-all sm:col-span-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-base shrink-0">📱</div>
                <div>
                  <div className="font-bold text-amber-300">1 Device Secure Access</div>
                  <div className="text-[11px] text-slate-400">फक्त १ डिव्हाइसवर सुरक्षित प्रवेश (Single Hardware Session)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Highlight Banner */}
          <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 p-0.5 rounded-2xl shadow-xl">
            <div className="bg-slate-950 p-4 rounded-[14px] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-full flex flex-col items-center justify-center text-amber-400 leading-none">
                    <span className="text-[9px] font-black uppercase">Only</span>
                    <span className="text-sm font-black">₹200</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">ONE TIME PAYMENT</div>
                  <div className="text-lg font-black text-white">LIFETIME PREMIUM ACCESS</div>
                  <div className="text-[11px] text-slate-300">कोणताही मासिक/वार्षिक अतिरिक्त चार्ज नाही</div>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenPaymentModal();
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-300 hover:to-amber-200 text-slate-950 font-black px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Unlock className="w-4 h-4 stroke-[3]" />
                <span>UNLOCK PREMIUM ₹200 ONLY</span>
              </button>
            </div>
          </div>

          {/* Footer Highlights (Matches bottom of poster) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-800 text-[11px] text-slate-400 text-center">
            <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
              <span className="font-bold text-amber-300 block">📖 अभ्यास करा</span>
              <span>कधीही, कुठेही</span>
            </div>
            <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
              <span className="font-bold text-emerald-300 block">🛡️ सुरक्षित</span>
              <span>आणि विश्वासाहार्ह</span>
            </div>
            <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
              <span className="font-bold text-teal-300 block">🎓 तयारी करा</span>
              <span>यशाची हमी घ्या</span>
            </div>
            <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
              <span className="font-bold text-cyan-300 block">🎯 तुमचे ध्येय</span>
              <span>साध्य करा</span>
            </div>
          </div>

        </div>

        {/* Footer Close Button */}
        <div className="bg-slate-950 border-t border-slate-800 px-4 py-3 flex items-center justify-between text-xs text-slate-400">
          <span>माऊस किंवा बोट पोस्टरवर ठेवल्यास वेळ थांबेल</span>
          <button 
            onClick={onClose}
            className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
          >
            बंद करा (Close Ad)
          </button>
        </div>

      </div>
    </div>
  );
};
