import React, { useState } from 'react';
import { 
  X, 
  Key, 
  AlertTriangle, 
  CheckCircle2, 
  Lock, 
  Sparkles,
  Loader2,
  Phone,
  MessageCircle,
  Unlock,
  RefreshCw,
  LogOut,
  Clock
} from 'lucide-react';
import { 
  UserProfile,
  auth, 
  signInAnonymously,
  getDeviceId,
  verifyAccessCodeAndLogin,
  User as FirebaseUser
} from '../lib/firebase';
import { getIsPremiumUnlocked, setPremiumUnlocked } from '../lib/storage';

interface AuthModalProps {
  onClose: () => void;
  onSuccessLogin: (user: FirebaseUser) => void;
  isUnlocked?: boolean;
  userProfile?: UserProfile | null;
  onLogout?: () => void;
  initialPhoneNumber?: string;
  initialAccessCode?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  onClose, 
  onSuccessLogin,
  isUnlocked = false,
  userProfile = null,
  onLogout,
  initialPhoneNumber = '',
  initialAccessCode = ''
}) => {
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [accessCode, setAccessCode] = useState(initialAccessCode);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);
  const [transferConfirmation, setTransferConfirmation] = useState<{ previousDeviceId: string } | null>(null);
  const [showLoginFormAnyway, setShowLoginFormAnyway] = useState(false);

  const isAlreadyUnlocked = isUnlocked || getIsPremiumUnlocked() || (userProfile && userProfile.isPremium);

  const handleLogoutPremium = () => {
    setPremiumUnlocked(false);
    try {
      localStorage.removeItem('xray_prep_logged_in_uid');
    } catch {}
    if (onLogout) {
      onLogout();
    }
    setInfoMsg('प्रीमियम व्हर्जन या मोबाईलवरून यशस्वीरीत्या Logout झाले आहे. आता नवीन मोबाईल/ॲक्सेस कोड वापरता येईल.');
    setShowLoginFormAnyway(true);
  };

  const whatsappUrl = 'https://wa.me/919769441271?text=' + encodeURIComponent('नमस्कार शंकर सर, मला X-Ray Prep ॲपसाठी ॲक्सेस कोड हवा आहे.');

  const handleLogin = async (e?: React.FormEvent, forceTransfer: boolean = false) => {
    if (e) e.preventDefault();
    setErrorMsg(null);
    setInfoMsg(null);

    const cleanPhone = phoneNumber.replace(/\D/g, '').slice(-10);

    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('कृपया वैध १० अंकी मोबाईल नंबर टाका.');
      return;
    }

    if (!accessCode.trim()) {
      setErrorMsg('कृपया ॲक्सेस कोड (Access Code) टाका.');
      return;
    }

    setLoading(true);
    try {
      const deviceId = getDeviceId();
      const res = await verifyAccessCodeAndLogin(cleanPhone, accessCode, deviceId, forceTransfer);
      
      if (res.needsTransferConfirm && res.previousDeviceId) {
        setTransferConfirmation({ previousDeviceId: res.previousDeviceId });
        setLoading(false);
        return;
      }

      if (!res.success) {
        setErrorMsg(res.message);
        setLoading(false);
        return;
      }
      
      // Successfully authenticated
      setTransferConfirmation(null);
      setInfoMsg(res.message);
      
      const targetUserUid = res.uid || `user-${cleanPhone}`;
      try {
        localStorage.setItem('xray_prep_logged_in_uid', targetUserUid);
      } catch (e) {}

      // Set local storage for premium features
      setPremiumUnlocked(true, res.name || 'अभ्यासक विद्यार्थी', cleanPhone);
      
      // Ensure Firebase Auth has a user
      let firebaseUser = auth.currentUser as any;
      if (!firebaseUser) {
        try {
          const cred = await signInAnonymously(auth);
          firebaseUser = cred.user;
        } catch (authErr) {
          console.warn('Anonymous auth failed, proceeding with local mock user:', authErr);
          firebaseUser = { uid: res.uid || `user-${cleanPhone}` };
        }
      }
      
      // Provide user payload for React state
      const mockUser = {
        ...firebaseUser,
        uid: res.uid || firebaseUser.uid,
        phoneNumber: `+91${cleanPhone}`
      } as FirebaseUser;
      
      setTimeout(() => {
        onSuccessLogin(mockUser);
      }, 1200);

    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg('लॉगिन प्रक्रियेत त्रुटी आली. कृपया इंटरनेट तपासा.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="bg-slate-900 border border-teal-500/50 rounded-2xl sm:rounded-3xl max-w-md w-full text-slate-100 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/95 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">प्रीमियम लॉगिन</h2>
              <p className="text-[10px] sm:text-xs text-teal-400 font-bold">1-Device Access</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isAlreadyUnlocked && !showLoginFormAnyway ? (
          <div className="p-4 sm:p-6 space-y-4 text-center overflow-y-auto">
            <div className="w-16 h-16 bg-teal-500/20 border-2 border-teal-500/60 text-teal-300 rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-teal-500/20">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-black border border-teal-500/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                प्रीमियम व्हर्जन ॲक्टिव्ह (Premium Active)
              </span>
              <h3 className="text-lg font-black text-white pt-1">
                तुमचे प्रीमियम लॉगिन आधीच ॲक्टिव्ह आहे!
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                तुम्ही या डिव्हाइसवर आधीपासूनच प्रीमियम व्हर्जन अनलॉक केलेले आहे. सर्व ३० अध्याय, ३०००+ सराव प्रश्न व सर्व मॉक टेस्ट पूर्ण अनलॉक आहेत.
              </p>
            </div>

            {/* Account Details Summary */}
            <div className="p-3.5 bg-slate-950/80 rounded-2xl border border-teal-500/30 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">लॉगिन स्टेटस:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ॲक्टिव्ह सदस्य (Active)
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">ऑटोमॅटिक व्हेलिडिटी:</span>
                <span className="text-amber-300 font-extrabold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> २४ तास (१ दिवस ऑटोमॅटिक Logout)
                </span>
              </div>
              {userProfile?.phoneNumber && (
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">रजिस्टर मोबाईल:</span>
                  <span className="text-white font-mono font-bold">{userProfile.phoneNumber}</span>
                </div>
              )}
              {userProfile?.studentName && (
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">नाव:</span>
                  <span className="text-teal-300 font-bold">{userProfile.studentName}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-slate-400">डिव्हाइस आयडी:</span>
                <span className="text-teal-300 font-mono font-bold text-[11px]">{getDeviceId()}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:brightness-110 text-slate-950 font-black py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4 stroke-[2.5]" />
                <span>सराव सुरू ठेवा (Continue Practice)</span>
              </button>

              <button
                type="button"
                onClick={handleLogoutPremium}
                className="w-full bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 font-extrabold py-2.5 rounded-xl text-xs border border-rose-500/30 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <LogOut className="w-4 h-4 text-rose-400" />
                <span>या मोबाईलवरून प्रीमियम Version Logout करा</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
            <div className="text-center space-y-1 sm:space-y-1.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-200">
              मोबाईल नंबर व ॲक्सेस कोड प्रविष्ट करा
            </h3>
            <p className="text-[10px] sm:text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
              शंकर सरांकडून मिळालेला ॲक्सेस कोड टाकून प्रीमियम अनलॉक करा. हा ॲक्सेस फक्त एका डिव्हाइसपुरता मर्यादित राहील.
            </p>
          </div>

          {transferConfirmation && (
            <div className="p-4 bg-amber-950/90 border-2 border-amber-500/80 rounded-2xl space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-amber-300 font-black text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <span>दुसऱ्या डिव्हाइसवर आधीपासूनच लॉगिन सापडले!</span>
              </div>
              
              <div className="text-xs text-slate-200 leading-relaxed space-y-1.5 bg-slate-950/70 p-3 rounded-xl border border-amber-500/30">
                <p>
                  हा ॲक्सेस कोड सध्या दुसऱ्या डिव्हाइसवर (<span className="font-mono text-amber-300 font-bold">{transferConfirmation.previousDeviceId}</span>) चालू आहे.
                </p>
                <p className="text-teal-300 font-semibold pt-1">
                  तुम्हाला जुन्या डिव्हाइसवरून लॉग आउट करून या सध्याच्या डिव्हाइसवर (<span className="font-mono text-teal-300 font-bold">{getDeviceId()}</span>) लॉगिन ट्रान्सफर करायचे आहे का?
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleLogin(undefined, true)}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-teal-400 hover:brightness-110 text-slate-950 font-black py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <RefreshCw className="w-4 h-4 stroke-[2.5]" />
                  )}
                  <span>होय, जुने डिव्हाइस लॉग आउट करून येथे लॉगिन करा</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTransferConfirmation(null)}
                  disabled={loading}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 px-3 rounded-xl text-xs border border-slate-700 cursor-pointer transition-colors"
                >
                  रद्द करा (Cancel)
                </button>
              </div>
            </div>
          )}

          {errorMsg && !transferConfirmation && (
            <div className="p-3 bg-rose-950/80 border border-rose-500/40 rounded-xl text-xs text-rose-300 font-medium flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {infoMsg && (
            <div className="p-3 bg-teal-950/80 border border-teal-500/40 rounded-xl text-xs text-teal-300 font-medium flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>{infoMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300">
                रजिस्टर १० अंकी मोबाईल नंबर:
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <span className="absolute left-9 top-1/2 -translate-y-1/2 text-xs text-teal-400 font-bold">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="9769441271"
                  className="w-full pl-16 pr-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-teal-400 rounded-xl text-xs text-white font-mono tracking-wider focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300">
                ॲक्सेस कोड (Access Code):
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="अॅक्सेस कोड टाका"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl text-sm font-mono tracking-wider text-amber-300 focus:outline-none font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-teal-400 hover:brightness-110 text-slate-950 font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>पडताळणी करत आहे...</span>
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4 stroke-[2.5]" />
                  <span>लॉगिन करा (Login & Unlock)</span>
                </>
              )}
            </button>
            
            <div className="pt-2 border-t border-slate-800 text-center space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-400 font-bold hover:underline flex items-center justify-center gap-1.5 mx-auto"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp वरून ॲडमिनकडून कोड मिळवा</span>
              </a>
            </div>
          </form>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-teal-300 font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>Single Device Session Protection Enabled</span>
            </div>
            <p>
              एकदा तुम्ही या डिव्हाइसवरून कोडने लॉगिन केले की तो कोड दुसऱ्या डिव्हाइसवर चालणार नाही.
            </p>
          </div>
        </div>
        )}

        <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/95 flex items-center justify-between shrink-0">
          <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
            <Lock className="w-3 h-3 text-teal-400" />
            1-Device Security
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors border border-slate-700"
          >
            विंडो बंद करा (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
