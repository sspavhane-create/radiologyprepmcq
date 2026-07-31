import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  Key, 
  X,
  MessageSquare,
  AlertTriangle,
  Eye,
  EyeOff,
  Copy,
  Smartphone,
  User,
  Phone,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Upload,
  Send,
  Image as ImageIcon,
  Loader2
} from 'lucide-react';
import { 
  getIsPremiumUnlocked, 
  getDeviceId, 
  validateAndUnlockKey, 
  getActivationDetails, 
  setPremiumUnlocked,
  generateUniqueDeviceKey 
} from '../lib/storage';
import { auth, setFirestoreUserPremiumStatus, submitPaymentRequest } from '../lib/firebase';

interface PremiumUnlockModalProps {
  onClose: () => void;
  onSuccessUnlock: () => void;
  customMessage?: string;
}

export const PremiumUnlockModal: React.FC<PremiumUnlockModalProps> = ({
  onClose,
  onSuccessUnlock,
  customMessage
}) => {
  const [activeTab, setActiveTab] = useState<'submit_payment' | 'enter_key'>('submit_payment');
  const [activationCode, setActivationCode] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [screenshotDataUrl, setScreenshotDataUrl] = useState<string | null>(null);
  const [submittingPayment, setSubmittingPayment] = useState(false);
  const [paymentSubmittedSuccess, setPaymentSubmittedSuccess] = useState(false);

  const [showKeyText, setShowKeyText] = useState(false);
  const [copiedDevId, setCopiedDevId] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isUnlockedState, setIsUnlockedState] = useState<boolean>(() => getIsPremiumUnlocked());

  // Handle file select for screenshot
  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('स्क्रीनशॉट फाईल 5MB पेक्षा लहान असावी.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotDataUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentPhone.trim() || !transactionId.trim()) {
      alert('कृपया नाव, मोबाईल नंबर आणि Transaction ID प्रविष्ट करा.');
      return;
    }

    setSubmittingPayment(true);
    const cleanPhone = studentPhone.replace(/\D/g, '').slice(-10);
    const userId = auth.currentUser?.uid || `user-${cleanPhone}-${Date.now()}`;

    const res = await submitPaymentRequest({
      userId,
      studentName: studentName.trim(),
      mobileNumber: cleanPhone,
      transactionId: transactionId.trim(),
      screenshotUrl: screenshotDataUrl || undefined,
      amount: 499 // or course price
    });

    setSubmittingPayment(false);

    if (res.success) {
      setPaymentSubmittedSuccess(true);
      setErrorMsg(null);
    } else {
      alert(`फॉर्म सबमिट करताना त्रुटी: ${res.error}`);
    }
  };

  // Admin Key Generator State for Shankar Sir
  const [showAdminTool, setShowAdminTool] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState('');
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [genTargetDevId, setGenTargetDevId] = useState('');
  const [genTargetPhone, setGenTargetPhone] = useState('');
  const [generatedKeyResult, setGeneratedKeyResult] = useState<string | null>(null);

  const deviceId = getDeviceId();
  const activationInfo = getActivationDetails();

  const handleUnlock = async () => {
    const res = validateAndUnlockKey(activationCode, studentName, studentPhone);
    
    if (res.success) {
      setIsUnlockedState(true);
      if (auth.currentUser) {
        await setFirestoreUserPremiumStatus(auth.currentUser.uid, true);
      }
      setSuccessMsg(res.message);
      setErrorMsg(null);
      setTimeout(() => {
        onSuccessUnlock();
        onClose();
      }, 1200);
    } else {
      setErrorMsg(res.message);
      setSuccessMsg(null);
    }
  };

  const handleCopyDeviceId = () => {
    navigator.clipboard.writeText(deviceId);
    setCopiedDevId(true);
    setTimeout(() => setCopiedDevId(false), 2000);
  };

  const handleRelock = async () => {
    setPremiumUnlocked(false);
    setIsUnlockedState(false);
    if (auth.currentUser) {
      await setFirestoreUserPremiumStatus(auth.currentUser.uid, false);
    }
    setSuccessMsg(null);
    setErrorMsg('प्रीमियम व्हर्जन पुन्हा लॉक केले आहे.');
    onSuccessUnlock();
  };

  const handleAdminLogin = () => {
    if (adminPinInput.trim() === '9769441271' || adminPinInput.trim().toUpperCase() === 'PAVHANE2026') {
      setIsAdminAuth(true);
      setAdminPinInput('');
    } else {
      alert('चुकीचा ॲडमिन पिन!');
    }
  };

  const handleGenerateKeyForStudent = () => {
    if (!genTargetDevId.trim()) {
      alert('कृपया विद्यार्थ्याचा Device ID टाका!');
      return;
    }
    const key = generateUniqueDeviceKey(genTargetDevId.trim(), genTargetPhone.trim());
    setGeneratedKeyResult(key);
  };

  const whatsappMessageUrl = `https://wa.me/919769441271?text=${encodeURIComponent(
    `नमस्कार शंकर सर, मला Radiography Prep Premium साठी १-डिव्हाइस युनिक सिक्युरिटी की हवी आहे.\n\nमाझा Device ID: ${deviceId}\nनाव: ${studentName || '[आपले नाव]'}`
  )}`;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in overflow-y-auto"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-teal-500/50 rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-7 text-slate-100 shadow-2xl space-y-4 relative overflow-hidden max-h-[90vh] overflow-y-auto my-auto"
      >
        {/* Background glow accent */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />

        <button 
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 active:bg-amber-500 active:text-slate-950 p-2 rounded-xl transition-all z-30 cursor-pointer border border-slate-700/60 shadow-sm"
          title="विंडो बंद करा"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pt-1">
          <div className="relative w-full max-w-[200px] mx-auto rounded-xl overflow-hidden border border-amber-400/50 shadow-lg shadow-amber-500/20">
            <img 
              src="/app-poster.png" 
              alt="Mr. Shankar Pavhane Radiography Prep App Poster" 
              className="w-full h-auto object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Mr.Shankar Pavhane Radiography Prep Premium</span>
          </div>

          <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {isUnlockedState ? 'प्रीमियम १-डिव्हाइस सत्र ॲक्टिव्ह आहे' : 'प्रीमियम १-डिव्हाइस युनिक ॲक्टिव्हेशन'}
          </h2>
          {customMessage ? (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-xs text-amber-200 font-bold leading-relaxed">
              {customMessage}
            </div>
          ) : (
            <p className="text-xs text-slate-300">
              {isUnlockedState 
                ? 'आपले प्रीमियम व्हर्जन एकाच डिव्हाइससाठी सुरक्षितरीत्या ॲक्टिव्हेट आहे.' 
                : 'प्रत्येक विद्यार्थ्याला स्वतःच्या मोबाईलसाठी स्वतंत्र (Unique) सिक्युरिटी की दिली जाते.'}
            </p>
          )}
        </div>

        {/* Device ID Badge */}
        <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5 text-teal-300">
              <Smartphone className="w-4 h-4" />
              <span>आपला युनिक डिव्हाइस कोड (Your Device ID):</span>
            </span>
            <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-500/30">
              Single Device Bound
            </span>
          </div>

          <div className="flex items-center justify-between bg-slate-900 px-3 py-2 rounded-xl border border-slate-700/80">
            <span className="font-mono text-xs font-bold text-amber-300 tracking-wider">
              {deviceId}
            </span>
            <button
              type="button"
              onClick={handleCopyDeviceId}
              className="flex items-center gap-1 text-[11px] font-bold bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 px-2.5 py-1 rounded-lg border border-teal-500/40 transition-all"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedDevId ? 'कॉपी झाले!' : 'ID कॉपी करा'}</span>
            </button>
          </div>
        </div>

        {/* Premium Features List */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-950/80 to-slate-900 p-4 sm:p-5 rounded-2xl border-2 border-amber-500/20 shadow-lg space-y-3 relative overflow-hidden">
          {/* Subtle bg glow for premium feel */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <h4 className="text-sm font-black text-amber-300 border-b border-amber-500/20 pb-2 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> 
            Premium मध्ये मिळेल:
          </h4>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 text-xs sm:text-sm text-slate-200">
            <li className="flex items-center gap-2"><span className="text-lg">📚</span> <span className="font-semibold">3000+ MCQs</span></li>
            <li className="flex items-center gap-2"><span className="text-lg">📖</span> <span className="font-semibold">सर्व 30 Chapters</span></li>
            <li className="flex items-center gap-2"><span className="text-lg">✅</span> <span className="font-semibold">Detailed Answers & Explanations</span></li>
            <li className="flex items-center gap-2"><span className="text-lg">📝</span> <span className="font-semibold">Mock Tests</span></li>
            <li className="flex items-center gap-2"><span className="text-lg">📊</span> <span className="font-semibold">Progress Tracking</span></li>
            <li className="flex items-center gap-2"><span className="text-lg">🔄</span> <span className="font-semibold">Lifetime Updates</span></li>
            <li className="flex items-center gap-2"><span className="text-lg">📱</span> <span className="font-semibold">1 Device Secure Access</span></li>
            <li className="flex items-center gap-2"><span className="text-lg">💰</span> <span className="font-semibold">Premium Plan</span></li>
            <li className="flex items-center gap-2 sm:col-span-2 pt-2 border-t border-slate-800">
              <span className="text-lg">⭐</span> 
              <span className="font-black text-amber-400 text-sm sm:text-base tracking-wide">One Time Payment – ₹ 200 Only</span>
            </li>
            <li className="flex items-center gap-2 sm:col-span-2">
              <span className="text-lg">🔓</span> 
              <span className="font-bold text-emerald-400">Lifetime Premium Access</span>
            </li>
          </ul>
          
          <div className="pt-2 mt-2 text-center relative z-10">
            <p className="text-[10px] sm:text-xs text-slate-400 font-bold bg-slate-950/50 inline-block px-3 py-1 rounded-lg border border-slate-800">
              येथे पेमेंट करण्यासाठी संपर्क करा किंवा QR कोड स्कॅन करा / UPI द्वारे पैसे पाठवा.
            </p>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('submit_payment')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'submit_payment'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>पेमेंट स्क्रीनशॉट अपलोड</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('enter_key')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'enter_key'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>सिक्युरिटी कीने अनलॉक</span>
          </button>
        </div>

        {/* TAB 1: Payment Request Upload Form */}
        {activeTab === 'submit_payment' && (
          <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-amber-500/30">
            <div className="flex items-center justify-between text-xs font-bold text-amber-300">
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-amber-400" />
                <span>UPI पेमेंट माहिती व स्क्रीनशॉट पाठवा:</span>
              </span>
              <span className="text-[10px] text-teal-400 font-mono">
                Auto Admin Verify
              </span>
            </div>

            {paymentSubmittedSuccess ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-black text-emerald-200">तुमची पेमेंट विनंती पाठवली आहे!</h4>
                <p className="text-xs text-emerald-300/90 leading-relaxed">
                  श्री शंकर पव्हणे सर तुमचा UTR क्रमांक व स्क्रीनशॉट तपासून त्वरित प्रीमियम ॲक्टिव्हेट करतील.
                </p>
                <button
                  type="button"
                  onClick={() => setPaymentSubmittedSuccess(false)}
                  className="mt-2 text-xs font-bold text-amber-300 underline"
                >
                  पुन्हा दुसरी विनंती पाठवायची आहे?
                </button>
              </div>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-2.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-400 font-bold mb-1">विद्यार्थ्याचे नाव *</label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="तुमचे नाव प्रविष्ट करा"
                        className="w-full pl-8 pr-2 py-2 bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 font-bold mb-1">मोबाईल नंबर *</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        placeholder="१० अंकी मोबाईल नं"
                        className="w-full pl-8 pr-2 py-2 bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-slate-400 font-bold mb-1">UPI Transaction ID / UTR क्रमांक *</label>
                  <input
                    type="text"
                    required
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="उदा. 421019873421 किंवा PhonePe/GPay Ref No"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl text-xs text-teal-300 font-mono focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-slate-400 font-bold mb-1">पेमेंट स्क्रीनशॉट अपलोड (Optional)</label>
                  <div className="flex items-center gap-2">
                    <label className="flex-1 cursor-pointer bg-slate-900 border border-dashed border-slate-700 hover:border-amber-400 px-3 py-2 rounded-xl flex items-center justify-center gap-2 text-slate-400 hover:text-amber-300 transition-colors">
                      <Upload className="w-4 h-4 text-amber-400" />
                      <span className="text-xs truncate">
                        {screenshotDataUrl ? 'स्क्रीनशॉट निवडला आहे ✅' : 'फोटो निवडा (Screenshot Select)'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleScreenshotChange}
                        className="hidden"
                      />
                    </label>
                    {screenshotDataUrl && (
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                        <img src={screenshotDataUrl} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submittingPayment}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-500 to-teal-400 hover:brightness-110 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all mt-1"
                >
                  {submittingPayment ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{submittingPayment ? 'पाठवत आहे...' : 'पेमेंट पडताळणी रिक्वेस्ट पाठवा'}</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: Direct Key Unlock */}
        {activeTab === 'enter_key' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>१. मार्गदर्शकांशी संपर्क साधून आपली युनिक की मिळवा:</span>
            <span className="text-teal-400 font-mono">श्री शंकर पव्हणे</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={whatsappMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-2.5 rounded-xl text-xs transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp वर ID पाठवा</span>
            </a>

            <a
              href="tel:9769441271"
              className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 font-bold py-2 px-2.5 rounded-xl text-xs transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>९७६९४४१२७१ कॉलिंग</span>
            </a>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-slate-800">
            <label className="block text-xs font-bold text-slate-300">
              २. मिळालेली युनिक सिक्युरिटी की प्रविष्ट करा:
            </label>

            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <User className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="विद्यार्थ्याचे नाव"
                  className="w-full pl-8 pr-2 py-2 bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white focus:outline-none"
                />
              </div>

              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  placeholder="मोबाईल नंबर"
                  className="w-full pl-8 pr-2 py-2 bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type={showKeyText ? 'text' : 'password'}
                  value={activationCode}
                  onChange={(e) => {
                    setActivationCode(e.target.value);
                    if (errorMsg) setErrorMsg(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleUnlock();
                  }}
                  placeholder="उदा. SP-XXXX-XXXX"
                  className="w-full pl-9 pr-10 py-2.5 bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl text-xs text-white uppercase tracking-wider font-mono focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowKeyText(!showKeyText)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  title={showKeyText ? 'की लपवा' : 'की दाखवा'}
                >
                  {showKeyText ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <button
                type="button"
                onClick={handleUnlock}
                className="bg-gradient-to-r from-amber-500 to-teal-400 hover:brightness-110 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1 shadow-lg transition-all"
              >
                <Unlock className="w-4 h-4 stroke-[2.5]" />
                <span>अनलॉक</span>
              </button>
            </div>
          </div>
        </div>
        )}

          {errorMsg && (
            <div className="text-xs text-rose-300 font-medium bg-rose-950/80 p-3 rounded-xl border border-rose-500/40 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="text-xs text-emerald-300 font-bold bg-emerald-950/80 p-3 rounded-xl border border-emerald-500/40 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Active Session Info */}
          {isUnlockedState && (
            <div className="bg-slate-950 p-3 rounded-xl border border-emerald-500/30 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>प्रीमियम ॲक्टिव्ह आहे</span>
                </span>
                <button
                  type="button"
                  onClick={handleRelock}
                  className="text-[10px] font-bold text-slate-400 hover:text-rose-400 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg border border-slate-700 transition-colors"
                >
                  लॉक करा (Relock)
                </button>
              </div>
              <div className="text-[11px] text-slate-300 space-y-0.5 font-mono">
                <div>• Bound Device: {activationInfo?.boundDeviceId || deviceId}</div>
                <div>• Active Session: Single Device Session Lock</div>
              </div>
            </div>
          )}

          {/* Admin Key Generator Section for Shankar Sir */}
          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setShowAdminTool(!showAdminTool)}
              className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center justify-between w-full py-1"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>शंकर सर - ॲडमिन Key Generator Tool (फक्त मार्गादर्शकांसाठी)</span>
              </span>
              {showAdminTool ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showAdminTool && (
              <div className="mt-2 p-3 bg-slate-950 rounded-xl border border-amber-500/30 space-y-2.5 text-xs">
                {!isAdminAuth ? (
                  <div className="space-y-2">
                    <p className="text-[11px] text-slate-300">ॲडमिन पिन टाका (PIN: 9769441271):</p>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value={adminPinInput}
                        onChange={(e) => setAdminPinInput(e.target.value)}
                        placeholder="ॲडमिन PIN"
                        className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleAdminLogin}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
                      >
                        लॉगिन
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-emerald-400 font-bold text-[11px]">
                      <span>✅ ॲडमिन एक्सेस चालू (Key Creator)</span>
                    </div>

                    <input
                      type="text"
                      value={genTargetDevId}
                      onChange={(e) => setGenTargetDevId(e.target.value)}
                      placeholder="विद्यार्थ्याचा Device ID (उदा. DEV-4A2F-9812)"
                      className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-amber-300 font-mono uppercase focus:outline-none"
                    />

                    <input
                      type="text"
                      value={genTargetPhone}
                      onChange={(e) => setGenTargetPhone(e.target.value)}
                      placeholder="विद्यार्थ्याचा मोबाईल नंबर (Optional)"
                      className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={handleGenerateKeyForStudent}
                      className="w-full bg-gradient-to-r from-amber-500 to-teal-400 hover:brightness-110 text-slate-950 font-extrabold py-2 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Key className="w-3.5 h-3.5" />
                      <span>विद्यार्थ्यासाठी १-डिव्हाइस की तयार करा</span>
                    </button>

                    {generatedKeyResult && (
                      <div className="p-2.5 bg-slate-900 border border-teal-400 rounded-lg text-center space-y-1">
                        <p className="text-[10px] text-slate-400">तयार झालेली युनिक की (विद्यार्थ्याला पाठवा):</p>
                        <p className="text-sm font-mono font-black text-amber-300 tracking-wider">
                          {generatedKeyResult}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(generatedKeyResult);
                            alert('Key कॉपी केली!');
                          }}
                          className="text-[10px] text-teal-300 underline font-bold"
                        >
                          Key कॉपी करा
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
  );
};


