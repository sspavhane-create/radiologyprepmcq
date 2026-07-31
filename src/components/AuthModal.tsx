import React, { useState, useEffect } from 'react';
import { 
  X, 
  Smartphone, 
  Key, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Lock, 
  User, 
  Sparkles,
  Loader2,
  Phone,
  MessageCircle
} from 'lucide-react';
import { 
  auth, 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  signInAnonymously,
  ConfirmationResult, 
  registerUserDeviceAndLogin, 
  getDeviceId,
  checkPhoneRegistered,
  generateAndSaveOtp,
  verifyOtpCode,
  User as FirebaseUser
} from '../lib/firebase';

interface AuthModalProps {
  onClose: () => void;
  onSuccessLogin: (user: FirebaseUser) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccessLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);
  const [isNotRegistered, setIsNotRegistered] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);

  useEffect(() => {
    // Clean up recaptcha verifier safely on unmount
    return () => {
      if ((window as any).recaptchaVerifier) {
        try {
          (window as any).recaptchaVerifier.clear();
        } catch (e) {
          // ignore recaptcha DOM clearing error
        }
        (window as any).recaptchaVerifier = null;
      }
    };
  }, []);

  const setupRecaptcha = () => {
    const container = document.getElementById('recaptcha-container');
    if (!container) return null;

    if ((window as any).recaptchaVerifier) {
      return (window as any).recaptchaVerifier;
    }
    try {
      const recaptcha = new RecaptchaVerifier(auth, container, {
        size: 'invisible',
        callback: () => {
          // Recaptcha resolved
        },
        'expired-callback': () => {
          setErrorMsg('Recaptcha सेशन कालबाह्य झाले. कृपया पुन्हा प्रयत्न करा.');
        }
      });
      (window as any).recaptchaVerifier = recaptcha;
      return recaptcha;
    } catch (err) {
      console.error('Error creating recaptcha verifier:', err);
      return null;
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setInfoMsg(null);
    setIsNotRegistered(false);

    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('कृपया वैध १० अंकी मोबाईल नंबर टाका.');
      return;
    }

    setLoading(true);
    try {
      // 1. Check if phone number is registered / allowed by Admin
      const regCheck = await checkPhoneRegistered(cleanPhone);
      if (!regCheck.isRegistered) {
        setIsNotRegistered(true);
        setErrorMsg('हा मोबाईल नंबर ॲडमिनद्वारे रजिस्टर केलेला नाही. लॉगिन करण्यासाठी खालील WhatsApp बटनावर क्लिक करून ॲक्सेस मिळवा.');
        setLoading(false);
        return;
      }

      const formattedPhone = `+91${cleanPhone.slice(-10)}`;

      // 2. Generate and save live OTP in Firestore
      const otp = await generateAndSaveOtp(cleanPhone);
      setGeneratedOtp(otp);

      // 3. Attempt Firebase SMS dispatch
      let firebaseConfirmation: ConfirmationResult | null = null;
      try {
        const verifier = setupRecaptcha();
        if (verifier) {
          firebaseConfirmation = await signInWithPhoneNumber(auth, formattedPhone, verifier);
          setConfirmationResult(firebaseConfirmation);
        }
      } catch (smsErr) {
        console.warn('SMS dispatch restricted, utilizing Firestore OTP verification:', smsErr);
      }

      setStep('otp');
      setInfoMsg(`तुमच्या ${formattedPhone} नंबरसाठी ६-अंकी OTP जनरेट झाला आहे. OTP टाका किंवा ॲडमिनकडून WhatsApp वर घ्या.`);
    } catch (err: any) {
      console.error('Error sending OTP:', err);
      setErrorMsg(`त्रुटी आली: ${err.message || 'कृपया पुन्हा प्रयत्न करा'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanPhone = phoneNumber.replace(/\D/g, '').slice(-10);
    const formattedPhone = `+91${cleanPhone}`;

    if (!otpCode || otpCode.length < 6) {
      setErrorMsg('कृपया ६ अंकी OTP कोड टाका.');
      return;
    }

    setLoading(true);
    try {
      let firebaseUser: FirebaseUser | null = null;

      // 1. First check Firebase Phone Auth confirmation if available
      if (confirmationResult) {
        try {
          const res = await confirmationResult.confirm(otpCode);
          firebaseUser = res.user;
        } catch (firebaseErr) {
          console.warn('Firebase confirmation fallback to Firestore OTP:', firebaseErr);
        }
      }

      // 2. Verify with Firestore OTP if Firebase confirmation was not completed
      if (!firebaseUser) {
        const isValidOtp = await verifyOtpCode(cleanPhone, otpCode);
        if (!isValidOtp && generatedOtp !== otpCode) {
          throw new Error('चुकीचा OTP कोड! कृपया योग्य OTP टाका.');
        }

        // Authenticate anonymously or use existing currentUser
        if (auth.currentUser) {
          firebaseUser = auth.currentUser;
        } else {
          const cred = await signInAnonymously(auth);
          firebaseUser = cred.user;
        }
      }

      // Register device and login in Firestore
      const userToRegister = {
        ...firebaseUser,
        phoneNumber: formattedPhone
      } as FirebaseUser;

      await registerUserDeviceAndLogin(
        userToRegister, 
        getDeviceId(), 
        studentName || 'अभ्यासक विद्यार्थी'
      );

      setInfoMsg('लॉगिन यशस्वी झाले!');
      setTimeout(() => {
        onSuccessLogin(userToRegister);
        onClose();
      }, 600);
    } catch (err: any) {
      console.error('Error verifying OTP:', err);
      setErrorMsg(err.message || 'चुकीचा किंवा कालबाह्य OTP कोड! कृपया पुन्हा प्रयत्न करा.');
    } finally {
      setLoading(false);
    }
  };

  // Demo / Developer direct sign in mode for testing
  const handleQuickDemoAuth = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      let user: FirebaseUser;
      if (auth.currentUser) {
        user = auth.currentUser;
      } else {
        const cred = await signInAnonymously(auth);
        user = cred.user;
      }

      const cleanPhone = phoneNumber.replace(/\D/g, '').slice(-10) || '9769441271';
      const dummyPhone = `+91${cleanPhone}`;
      
      await registerUserDeviceAndLogin(
        { ...user, phoneNumber: user.phoneNumber || dummyPhone } as FirebaseUser, 
        getDeviceId(), 
        studentName || 'अभ्यासक विद्यार्थी'
      );
      onSuccessLogin(user);
      onClose();
    } catch (err: any) {
      console.error('Quick Auth error:', err);
      setErrorMsg(`क्विक लॉगिनमध्ये त्रुटी: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const cleanCurrentPhone = phoneNumber.replace(/\D/g, '').slice(-10) || '9769441271';
  const whatsappUrl = `https://wa.me/919769441271?text=${encodeURIComponent(`नमस्कार, मला X-Ray Prep ॲपसाठी मोबाईल नंबर +91${cleanCurrentPhone} वर लॉगिन ॲक्सेस / OTP हवा आहे.`)}`;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 flex items-center justify-center animate-fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-slate-900 border border-teal-500/50 rounded-2xl sm:rounded-3xl text-slate-100 shadow-2xl shadow-teal-950/60 my-auto flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Recaptcha container */}
        <div id="recaptcha-container"></div>

        {/* Sticky Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-0.5 shadow-md shadow-teal-500/20 flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-teal-400" />
              </div>
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight">
                विद्यार्थी लॉगिन (OTP Login)
              </h2>
              <p className="text-[11px] text-teal-300 font-medium">
                रजिस्टर मोबाईल नंबर सत्यापन
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 p-2 rounded-xl transition-colors shrink-0 flex items-center gap-1 text-xs font-bold border border-slate-700/60"
            title="विंडो बंद करा"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
          <div className="text-center space-y-1">
            <p className="text-xs text-slate-300">
              फक्त ॲडमिनने रजिस्टर केलेल्या मोबाईल नंबरवरच OTP पाठवला जातो
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-rose-950/80 border border-rose-500/40 rounded-xl text-xs text-rose-300 font-medium flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
              {isNotRegistered && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>WhatsApp वर ॲक्सेस मागा (+91 9769441271)</span>
                </a>
              )}
            </div>
          )}

          {infoMsg && (
            <div className="p-3 bg-teal-950/80 border border-teal-500/40 rounded-xl text-xs text-teal-300 font-medium flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>{infoMsg}</span>
            </div>
          )}

          {step === 'phone' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  विद्यार्थ्याचे नाव (Student Name):
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="उदा. अमित पाटील"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-teal-400 rounded-xl text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  रजिस्टर १० अंकी मोबाईल नंबर (Mobile Number):
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 hover:brightness-110 text-slate-950 font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>रजिस्ट्रेशन तपासून OTP पाठवत आहे...</span>
                  </>
                ) : (
                  <>
                    <Smartphone className="w-4 h-4" />
                    <span>OTP पाठवा (Send Login OTP)</span>
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
                  <span>WhatsApp वरून ॲक्सेस किंवा OTP मागवा</span>
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
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  मिळालेला ६ अंकी OTP प्रविष्ट करा:
                </label>
                <div className="relative">
                  <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-emerald-400 rounded-xl text-sm font-mono tracking-widest text-emerald-300 focus:outline-none text-center font-bold"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>व्हेरीफाय करत आहे...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>OTP व्हेरीफाय करून लॉगिन करा</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slate-950 border border-emerald-500/30 text-emerald-400 font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs hover:bg-slate-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp वरून ॲडमिनकडून OTP मिळवा</span>
              </a>

              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-xs text-slate-400 hover:text-slate-200"
              >
                ← फोन नंबर बदला
              </button>
            </form>
          )}

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-teal-300 font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>Single Device Session Protection Enabled</span>
            </div>
            <p>
              एका वेळी फक्त एकाच डिव्हाइसवर खाते वापरता येते. दुसऱ्या डिव्हाइसवर लॉगिन केल्यास आधीचे उपकरण आपोआप लॉगआउट होईल.
            </p>
          </div>
        </div>

        {/* Sticky Footer Bar */}
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

