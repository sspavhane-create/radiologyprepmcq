import React from 'react';
import { Home, BookOpen, FileCheck, Star, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isUnlocked: boolean;
  bookmarkedCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  isUnlocked,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'chapters', label: 'Chapters', icon: BookOpen },
    { id: 'mock-tests', label: 'Mock Tests', icon: FileCheck },
    { id: 'premium', label: 'Premium', icon: Star, badge: !isUnlocked ? 'PRO' : undefined },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-2xl px-2 py-1.5 sm:py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isGold = item.id === 'premium';

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 min-w-[64px] cursor-pointer ${
                isActive
                  ? isGold
                    ? 'text-amber-300 font-black'
                    : 'text-teal-300 font-black'
                  : 'text-slate-400 hover:text-slate-200 font-medium'
              }`}
            >
              {/* Active Pill Background */}
              {isActive && (
                <span
                  className={`absolute inset-0 rounded-2xl transition-all duration-200 border ${
                    isGold ? 'bg-amber-500/20 border-amber-500/40' : 'bg-teal-500/20 border-teal-500/40'
                  }`}
                />
              )}

              <div className="relative z-10 flex flex-col items-center gap-0.5">
                <Icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${
                    isActive ? 'scale-110' : ''
                  } ${isGold && !isActive ? 'text-amber-400' : ''}`}
                />
                <span className="text-[11px] sm:text-xs tracking-tight">
                  {item.label}
                </span>
              </div>

              {/* Badge */}
              {item.badge && !isUnlocked && (
                <span className="absolute -top-1 right-1.5 px-1.5 py-0.2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[9px] font-black rounded-full shadow-sm animate-pulse">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
