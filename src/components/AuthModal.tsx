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
  Unlock
} from 'lucide-react';
import { 
  auth, 
  signInAnonymously,
  getDeviceId,
  verifyAccessCodeAndLogin,
  User as FirebaseUser
} from '../lib/firebase';
import { setPremiumUnlocked } from '../lib/storage';

interface AuthModalProps {
  onClose: () => void;
  onSuccessLogin: (user: FirebaseUser) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccessLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);

  const whatsappUrl = 'https://wa.me/919769441271?text=' + encodeURIComponent('नमस्कार शंकर सर, मला X-Ray Prep ॲपसाठी ॲक्सेस कोड हवा आहे.');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
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
      const res = await verifyAccessCodeAndLogin(cleanPhone, accessCode, deviceId);
      
      if (!res.success) {
        setErrorMsg(res.message);
        setLoading(false);
        return;
      }
      
      // Successfully authenticated
      setInfoMsg(res.message);
      
      // Set local storage for premium features
      setPremiumUnlocked(true);
      
      // Ensure Firebase Auth has a user
      let firebaseUser = auth.currentUser as any;
      if (!firebaseUser) {
        try {
          const cred = await signInAnonymously(auth);
          firebaseUser = cred.user;
        } catch (authErr) {
          console.warn('Anonymous auth failed, proceeding with local mock user:', authErr);
          firebaseUser = { uid: res.uid || `user-${Date.now()}` };
        }
      }
      
      // Provide dummy user payload if needed for React state
      const mockUser = {
        ...firebaseUser,
        uid: res.uid || firebaseUser.uid,
        phoneNumber: `+91${cleanPhone}`
      } as FirebaseUser;
      
      setTimeout(() => {
        onSuccessLogin(mockUser);
      }, 1500);

    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg('लॉगिन प्रक्रियेत त्रुटी आली. कृपया इंटरनेट तपासा.');
      setLoading(false);
    }
  };

  const handleQuickDemoAuth = async () => {
    setPhoneNumber('9769441271');
    setAccessCode('Rudra@2018');
    setInfoMsg('क्रेडेंशियल्स (Rudra@2018) भरले आहेत. "लॉगिन करा" वर क्लिक करा.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
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

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
          <div className="text-center space-y-1 sm:space-y-1.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-200">
              मोबाईल नंबर व ॲक्सेस कोड प्रविष्ट करा
            </h3>
            <p className="text-[10px] sm:text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
              शंकर सरांकडून मिळालेला ॲक्सेस कोड टाकून प्रीमियम अनलॉक करा. हा ॲक्सेस फक्त एका डिव्हाइसपुरता मर्यादित राहील.
            </p>
          </div>

          {errorMsg && (
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
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="उदा. Rudra@2018"
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
              <button
                type="button"
                onClick={handleQuickDemoAuth}
                className="text-xs text-amber-300 font-bold hover:underline flex items-center justify-center gap-1 mx-auto pt-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>झटपट डायरेक्ट लॉगिन करा (Quick Test Sign-In)</span>
              </button>
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
