import React from 'react';
import { 
  User, 
  Smartphone, 
  ShieldCheck, 
  Star, 
  LogOut, 
  Bookmark, 
  Clock, 
  Award, 
  Shield, 
  Copy, 
  CheckCircle2, 
  Unlock,
  ChevronRight,
  TrendingUp,
  Key
} from 'lucide-react';
import { UserProfile } from '../lib/firebase';
import { QuizSession } from '../types';
import { getDeviceId, getActivationDetails } from '../lib/storage';

interface ProfileViewProps {
  userProfile: UserProfile | null;
  isUnlocked: boolean;
  quizSessions: QuizSession[];
  bookmarkedCount: number;
  accuracyRate: number;
  onLogout: () => void;
  onOpenAuthModal: () => void;
  onNavigateTab: (tab: string) => void;
  onOpenAdminPanel: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userProfile,
  isUnlocked,
  quizSessions,
  bookmarkedCount,
  accuracyRate,
  onLogout,
  onOpenAuthModal,
  onNavigateTab,
  onOpenAdminPanel,
}) => {
  const deviceId = getDeviceId();
  const activationDetails = getActivationDetails();
  const [copiedId, setCopiedId] = React.useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(deviceId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const isAdminUser = userProfile?.email?.toLowerCase().includes('sspavhane') || 
                      userProfile?.phoneNumber === '9769441271';

  // Extract displaying name and phone, checking userProfile first, then activationDetails, then falling back
  const studentName = userProfile?.studentName || activationDetails?.studentName || 'Student Account';
  const rawPhone = userProfile?.phoneNumber || activationDetails?.studentPhone || '';
  const displayPhone = rawPhone 
    ? (rawPhone.startsWith('+91') ? rawPhone : `+91${rawPhone}`) 
    : 'Not Logged In';

  // Consider it premium-active if explicitly unlocked or if user profile has premium active
  const hasPremiumActive = isUnlocked || userProfile?.isPremium || activationDetails?.isUnlocked;

  return (
    <div className="space-y-6 pb-24 max-w-4xl mx-auto">
      {/* Profile Card Header */}
      <div className="bg-slate-900 rounded-[18px] p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-2xl shadow-md shrink-0">
            {studentName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-black tracking-wider text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                Radiology Student 🎓
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white">
              {studentName}
            </h2>
            <p className="text-xs text-slate-400 font-black mt-1 flex items-center gap-1">
              <span>📞 Mobile Number:</span>
              <span className="text-slate-100 font-extrabold text-sm">{displayPhone}</span>
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              {hasPremiumActive ? (
                <span className="text-sm font-black text-emerald-500 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 shadow-[0_0_10px_#10b981]" />
                  <span>★ PREMIUM ACTIVE (जीवनभर प्रीमियम सक्रिय)</span>
                </span>
              ) : (
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Free Practice Plan
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(userProfile || hasPremiumActive) && (
            <button
              onClick={onLogout}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-slate-400" />
              <span>Logout</span>
            </button>
          )}

          {/* Mobile login with Security Key trigger */}
          <button
            onClick={onOpenAuthModal}
            className="px-3.5 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 border border-amber-500/50 text-amber-300 font-black rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <Key className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Mobile login with Security Key</span>
          </button>

          {/* Admin panel trigger */}
          <button
            onClick={onOpenAdminPanel}
            className="px-2.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 font-bold rounded-xl text-xs transition-colors flex items-center gap-1 cursor-pointer"
            title="Admin Panel"
          >
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Admin</span>
          </button>
        </div>
      </div>

      {/* Upgrade Banner if not premium */}
      {!isUnlocked && (
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-[18px] p-5 text-slate-950 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="font-black text-base">Upgrade to Lifetime Premium</h3>
            <p className="text-xs font-semibold text-slate-900">
              Get all 3000+ MCQs, 30 chapters, explanations & grand mock tests for ₹200.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('premium')}
            className="px-5 py-2.5 bg-slate-950 text-amber-300 hover:bg-slate-900 font-black rounded-xl text-xs shadow-md transition-all cursor-pointer"
          >
            Unlock Premium ₹200
          </button>
        </div>
      )}

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-slate-900 rounded-[18px] p-4 border border-slate-800 shadow-lg text-center">
          <div className="text-xs font-bold text-slate-400">Attempted Tests</div>
          <div className="text-xl font-extrabold text-white mt-1">{quizSessions.length}</div>
        </div>

        <div className="bg-slate-900 rounded-[18px] p-4 border border-slate-800 shadow-lg text-center">
          <div className="text-xs font-bold text-slate-400">Accuracy Rate</div>
          <div className="text-xl font-extrabold text-teal-400 mt-1">{accuracyRate}%</div>
        </div>

        <div className="bg-slate-900 rounded-[18px] p-4 border border-slate-800 shadow-lg text-center">
          <div className="text-xs font-bold text-slate-400">Saved MCQs</div>
          <div className="text-xl font-extrabold text-amber-400 mt-1">{bookmarkedCount}</div>
        </div>

        <div className="bg-slate-900 rounded-[18px] p-4 border border-slate-800 shadow-lg text-center">
          <div className="text-xs font-bold text-slate-400">Device Status</div>
          <div className="text-xs font-mono font-bold text-teal-300 mt-2 truncate max-w-[120px] mx-auto">
            {deviceId.slice(0, 8)}...
          </div>
        </div>
      </div>

      {/* Device Info & Security Card */}
      <div className="bg-slate-900 rounded-[18px] p-5 border border-slate-800 shadow-xl space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>Device & Account Security</span>
        </h3>

        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
          <div>
            <span className="text-slate-400 block text-[10px]">Registered Device ID:</span>
            <span className="font-mono font-bold text-teal-300">{deviceId}</span>
          </div>
          <button
            onClick={handleCopyId}
            className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-[11px] font-bold text-slate-200 hover:bg-slate-700 cursor-pointer"
          >
            {copiedId ? 'Copied' : 'Copy'}
          </button>
        </div>

        <p className="text-xs text-slate-400">
          Single device protection is active. Logging in on a new device will sign out previous sessions.
        </p>
      </div>

      {/* Attempt History List */}
      <div className="bg-slate-900 rounded-[18px] p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <Clock className="w-4 h-4 text-teal-400" />
          <span>Test Attempt History</span>
        </h3>

        {quizSessions.length > 0 ? (
          <div className="space-y-3">
            {quizSessions.slice().reverse().map((session) => (
              <div
                key={session.id}
                className="p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <h4 className="font-bold text-white text-sm">{session.title}</h4>
                  <p className="text-slate-400 mt-0.5">
                    Date: {new Date(session.endTime).toLocaleDateString('mr-IN')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-teal-400 text-sm">{session.score}%</div>
                  <div className="text-[11px] text-slate-400">{session.totalQuestions} Questions</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 text-center py-4">No test history available yet.</p>
        )}
      </div>
    </div>
  );
};
