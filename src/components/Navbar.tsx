import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  BookOpen, 
  Sparkles, 
  Bookmark, 
  Layers, 
  Award, 
  Flame,
  Plus,
  Globe,
  UserCheck,
  PhoneCall,
  Info,
  Database,
  Lock,
  Unlock,
  User,
  Shield,
  LogOut,
  Smartphone,
  Download
} from 'lucide-react';
import { LanguageMode } from '../types';
import { getIsPremiumUnlocked } from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
import { InstallAppModal } from './InstallAppModal';
import { UserProfile } from '../lib/firebase';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  totalQuestionsCount: number;
  bookmarkedCount: number;
  accuracyRate: number;
  streakDays: number;
  langMode: LanguageMode;
  setLangMode: (mode: LanguageMode) => void;
  onOpenAddModal: () => void;
  userProfile: UserProfile | null;
  isUnlocked: boolean;
  onOpenAuthModal: () => void;
  onOpenAdminPanel: () => void;
  onLogout: () => void;
  deferredPrompt?: any;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  totalQuestionsCount,
  bookmarkedCount,
  accuracyRate,
  streakDays,
  langMode,
  setLangMode,
  onOpenAddModal,
  userProfile,
  isUnlocked,
  onOpenAuthModal,
  onOpenAdminPanel,
  onLogout,
  deferredPrompt,
}) => {
  const [showDevModal, setShowDevModal] = useState(false);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'quiz', label: 'Practice Quiz', icon: BookOpen },
    { id: 'categories', label: 'Categories', icon: Layers },
    { id: 'question-bank', label: '३०००+ प्रश्न बँक', icon: Database, badge: totalQuestionsCount },
    { id: 'flashcards', label: 'Flashcards', icon: Sparkles },
    { id: 'bookmarks', label: 'Saved Questions', icon: Bookmark, badge: bookmarkedCount },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-slate-100 shadow-md">
      {/* Developer & Syllabus Sub-Header Credit Ribbon */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border-b border-teal-500/20 px-3 py-1 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-teal-300 font-medium overflow-x-auto whitespace-nowrap">
            <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-200 text-[11px] font-bold border border-teal-500/30">
              महाराष्ट्र शासन - आरोग्य विभाग गट 'क'
            </span>
            <span className="hidden sm:inline text-slate-300 font-semibold">
              Mr.Shankar Pavhane Radiography Prep
            </span>
            <span className="text-amber-300 font-bold hidden md:inline">
              • ३०००+ प्रश्नसंच (२०० गुण)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 ml-auto">
            {/* Install App Direct Button */}
            <button
              onClick={() => setShowInstallModal(true)}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 hover:brightness-110 transition-all cursor-pointer shadow-md shadow-teal-500/20 animate-pulse"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>इन्स्टॉल ॲप 📲</span>
            </button>

            {/* Admin Panel Button (Always visible) */}
            <button
              onClick={onOpenAdminPanel}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all cursor-pointer shadow-sm"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Panel 🛡️</span>
            </button>

            {/* Auth Status / Login Button */}
            {userProfile ? (
              <div className="flex items-center gap-2 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700 text-[11px]">
                <User className="w-3 h-3 text-teal-400" />
                <span className="font-bold text-slate-200">
                  {userProfile.studentName || userProfile.phoneNumber}
                </span>
                <button
                  onClick={onLogout}
                  title="लॉगआउट करा"
                  className="text-slate-400 hover:text-rose-400 ml-1 transition-colors"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-500 text-slate-950 hover:brightness-110 transition-all shadow-sm"
              >
                <Smartphone className="w-3 h-3" />
                <span>मोबाईल OTP लॉगिन</span>
              </button>
            )}

            {/* Premium Unlock Badge / Trigger Button */}
            <button
              onClick={() => setShowUnlockModal(true)}
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border transition-all ${
                isUnlocked
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30 animate-pulse'
              }`}
            >
              {isUnlocked ? (
                <>
                  <Unlock className="w-3 h-3 text-emerald-400" />
                  <span>प्रीमियम एक्टिव्ह (Unlocked)</span>
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3 text-amber-400" />
                  <span>प्रीमियम व्हर्जन अनलॉक करा 🔒</span>
                </>
              )}
            </button>

            {/* Developer Credit pill button */}
            <button 
              onClick={() => setShowDevModal(true)}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-teal-400/50 transition-all text-[11px]"
            >
              <UserCheck className="w-3 h-3 text-teal-400" />
              <span>मार्गदर्शक: <strong className="text-teal-300 font-semibold">श्री शंकर पव्हणे</strong></span>
              <Info className="w-3 h-3 text-slate-400" />
            </button>

            {/* Language Selector */}
            <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700">
              <span className="px-1.5 text-[10px] text-slate-400 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3 text-cyan-400" />
                <span>भाषा:</span>
              </span>
              <button
                onClick={() => setLangMode('dual')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                  langMode === 'dual' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
                title="मराठी व इंग्रजी दोन्ही भाषा"
              >
                दोन्ही (Dual)
              </button>
              <button
                onClick={() => setLangMode('mr')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                  langMode === 'mr' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
                title="फक्त मराठी"
              >
                मराठी
              </button>
              <button
                onClick={() => setLangMode('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                  langMode === 'en' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
                title="English Only"
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
              <Activity className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">
                  Mr.Shankar Pavhane Radiography Prep
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full hidden sm:inline">
                  3000+ Qs
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">सार्वजनिक आरोग्य विभाग - क्ष-किरण वैज्ञानिक अधिकारी</p>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-teal-500 text-slate-950 shadow-sm font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-teal-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span
                      className={`ml-1 px-1.5 py-0.2 text-[11px] rounded-full font-bold ${
                        isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-teal-500/20 text-teal-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Metrics & Quick Actions */}
          <div className="flex items-center gap-3">
            {/* Streak Badge */}
            <div className="hidden lg:flex items-center gap-1.5 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-700/50 text-xs text-slate-300" title="Study streak">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              <span className="font-semibold text-amber-300">{streakDays} Day Streak</span>
            </div>

            {/* Accuracy Badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-700/50 text-xs text-slate-300">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Acc: <strong className="text-cyan-300 font-bold">{accuracyRate}%</strong></span>
            </div>

            {/* Download/Install PWA App Button */}
            <button
              onClick={() => setShowInstallModal(true)}
              className="flex items-center gap-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 hover:brightness-110 text-slate-950 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold shadow-md shadow-teal-500/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>इन्स्टॉल ॲप</span>
            </button>

            {/* Add/Generate Custom Question */}
            <button
              onClick={onOpenAddModal}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">Add Question</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-slate-800 overflow-x-auto gap-1 text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  isActive ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Developer Details Modal */}
      {showDevModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-teal-500/40 rounded-2xl max-w-md w-full p-6 text-slate-100 shadow-2xl space-y-4 relative">
            <button 
              onClick={() => setShowDevModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 font-bold text-xl">
                शंप
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">श्री शंकर पव्हणे</h3>
                <p className="text-xs text-teal-400 font-semibold">क्ष-किरण वैज्ञानिक अधिकारी (X-Ray Scientific Officer)</p>
                <p className="text-xs text-slate-400">जिल्हा रुग्णालय गडचिरोली</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300 bg-slate-850 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-teal-200 font-semibold uppercase tracking-wider">परीक्षा पोर्टल माहिती व मार्गदर्शन</p>
              <p className="text-xs leading-relaxed">
                सार्वजनिक आरोग्य विभाग (महाराष्ट्र शासन) गट 'क' पद भरतीसाठी क्ष-किरण वैज्ञानिक अधिकारी पदाचा संपूर्ण अभ्यासक्रम (Syllabus) व ३०००+ प्रश्नसंच मराठी भाषांतरासह विकसित केला आहे.
              </p>
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-slate-200 text-xs">
                  <PhoneCall className="w-4 h-4 text-teal-400" />
                  <span>संपर्क: <strong className="text-teal-300 font-bold">9769441271 (97694 41271)</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 text-xs">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>कर्मचारी पद: क्ष-किरण वैज्ञानिक अधिकारी / तंत्रज्ञ</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowDevModal(false)}
              className="w-full py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold rounded-xl hover:brightness-110 transition-all text-sm"
            >
              अभ्यास सुरू करा (Continue Study)
            </button>
          </div>
        </div>
      )}

      {/* Premium Unlock Modal */}
      {showUnlockModal && (
        <PremiumUnlockModal
          onClose={() => setShowUnlockModal(false)}
          onSuccessUnlock={() => {}}
        />
      )}

      {/* App Download/Install Modal */}
      {showInstallModal && (
        <InstallAppModal
          onClose={() => setShowInstallModal(false)}
          deferredPrompt={deferredPrompt}
          onInstallSuccess={() => setShowInstallModal(false)}
        />
      )}
    </header>
  );
};

