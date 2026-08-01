import React, { useState } from 'react';
import { 
  Activity, 
  Search, 
  Globe, 
  User, 
  Shield, 
  LogOut, 
  Smartphone, 
  Lock, 
  Unlock, 
  Info,
  UserCheck,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { LanguageMode } from '../types';
import { UserProfile } from '../lib/firebase';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  langMode: LanguageMode;
  setLangMode: (mode: LanguageMode) => void;
  userProfile: UserProfile | null;
  isUnlocked: boolean;
  onOpenAuthModal: () => void;
  onOpenAdminPanel: () => void;
  onOpenSearch: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  langMode,
  setLangMode,
  userProfile,
  isUnlocked,
  onOpenAuthModal,
  onOpenAdminPanel,
  onOpenSearch,
  onLogout,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-lg w-full max-w-full overflow-x-hidden">
      {/* Top Banner Ribbon */}
      <div className="bg-slate-950/90 text-slate-100 px-2 sm:px-3 py-1 text-xs border-b border-slate-800/60 w-full max-w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-1 sm:gap-2">
          <div className="flex items-center gap-1.5 text-teal-300 font-medium truncate">
            <span className="px-1.5 sm:px-2 py-0.5 rounded bg-teal-500/20 text-teal-200 text-[10px] sm:text-[11px] font-bold border border-teal-500/30 truncate">
              महाराष्ट्र शासन - आरोग्य विभाग
            </span>
            <span className="hidden md:inline text-slate-300 font-semibold">
              RadiologyPrep Scientific Officer
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Admin Panel Button */}
            <button
              onClick={onOpenAdminPanel}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all cursor-pointer"
            >
              <Shield className="w-3 h-3 text-amber-400 shrink-0" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-3 w-full overflow-hidden">
        {/* Brand & Logo */}
        <div 
          className="flex items-center gap-1.5 sm:gap-3 cursor-pointer select-none shrink-0" 
          onClick={() => setActiveTab('home')}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black shadow-md shadow-blue-500/30 border border-blue-400/30">
            <Activity className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xs sm:text-base md:text-lg text-white tracking-tight">
                RadiologyPrep
              </span>
              <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full hidden sm:inline">
                EdTech
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium hidden md:block">
              3000+ MCQs • 30 Chapters Practice Portal
            </p>
          </div>
        </div>

        {/* Search Bar Trigger - Desktop */}
        <button
          onClick={onOpenSearch}
          className="hidden md:flex items-center gap-2 bg-slate-950/80 hover:bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all max-w-xs w-full cursor-pointer"
        >
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="truncate">Search subject, topic, question...</span>
        </button>

        {/* Search Bar Trigger - Mobile Icon */}
        <button
          onClick={onOpenSearch}
          className="md:hidden p-1.5 bg-slate-950 text-slate-300 border border-slate-800 rounded-lg hover:bg-slate-900 transition-all cursor-pointer shrink-0"
          title="Search"
        >
          <Search className="w-4 h-4 text-slate-300" />
        </button>

        {/* Right Tools: Language & Profile / Upgrade */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-950 p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => setLangMode('dual')}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-bold transition-all cursor-pointer ${
                langMode === 'dual' ? 'bg-teal-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Dual
            </button>
            <button
              onClick={() => setLangMode('mr')}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-bold transition-all cursor-pointer ${
                langMode === 'mr' ? 'bg-teal-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              मराठी
            </button>
            <button
              onClick={() => setLangMode('en')}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-bold transition-all cursor-pointer ${
                langMode === 'en' ? 'bg-teal-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Premium Trigger */}
          <button
            onClick={() => setActiveTab('premium')}
            className={`flex items-center gap-1 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-extrabold border transition-all cursor-pointer ${
              isUnlocked
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
            }`}
          >
            {isUnlocked ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="hidden sm:inline">Unlocked</span>
              </>
            ) : (
              <>
                <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-950 shrink-0" />
                <span>₹200</span>
              </>
            )}
          </button>

          {/* Auth Button */}
          {userProfile ? (
            <button
              onClick={() => setActiveTab('profile')}
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-teal-500/20 text-teal-300 font-black text-xs sm:text-sm flex items-center justify-center border border-teal-500/40 hover:bg-teal-500/30 transition-colors cursor-pointer"
              title={userProfile.studentName || 'Profile'}
            >
              {userProfile.studentName ? userProfile.studentName.charAt(0).toUpperCase() : 'U'}
            </button>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black rounded-lg sm:rounded-xl text-[10px] sm:text-xs transition-colors flex items-center gap-1 cursor-pointer shadow-md"
            >
              <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
