import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Key, 
  ShieldCheck, 
  Smartphone, 
  Copy, 
  CreditCard, 
  Send, 
  ArrowLeft,
  Sparkles,
  Zap,
  HelpCircle,
  Award,
  Upload,
  MessageCircle,
  Loader2
} from 'lucide-react';
import { 
  getIsPremiumUnlocked, 
  getDeviceId, 
  validateAndUnlockKey, 
  setPremiumUnlocked 
} from '../lib/storage';
import { auth, setFirestoreUserPremiumStatus, submitPaymentRequest } from '../lib/firebase';

interface PremiumViewProps {
  onSuccessUnlock: () => void;
  onNavigateTab?: (tab: string) => void;
}

export const PremiumView: React.FC<PremiumViewProps> = ({
  onSuccessUnlock,
  onNavigateTab,
}) => {
  const [activeTab, setActiveTab] = useState<'pay' | 'code'>('pay');
  const [activationCode, setActivationCode] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [screenshotDataUrl, setScreenshotDataUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  const deviceId = getDeviceId();
  const isUnlocked = getIsPremiumUnlocked();

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

  const handleUnlockWithKey = async () => {
    if (!activationCode.trim()) {
      setErrorMsg('कृपया अॅक्टिव्हेशन की प्रविष्ट करा.');
      return;
    }

    const res = validateAndUnlockKey(activationCode, studentName, studentPhone);
    if (res.success) {
      if (auth.currentUser) {
        await setFirestoreUserPremiumStatus(auth.currentUser.uid, true);
      }
      onSuccessUnlock();
      if (onNavigateTab) onNavigateTab('home');
    } else {
      setErrorMsg(res.message);
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentPhone.trim() || !transactionId.trim()) {
      alert('कृपया तुमचे नाव, १० अंकी मोबाईल नंबर आणि UTR/Transaction ID प्रविष्ट करा.');
      return;
    }

    setIsSubmitting(true);
    const cleanPhone = studentPhone.replace(/\D/g, '').slice(-10);
    const userId = auth.currentUser?.uid || `user-${cleanPhone}-${Date.now()}`;

    // Submit payment request to Firestore (for admin dashboard logs)
    await submitPaymentRequest({
      userId,
      studentName: studentName.trim(),
      mobileNumber: cleanPhone,
      transactionId: transactionId.trim(),
      screenshotUrl: screenshotDataUrl || undefined,
      amount: 200,
    });

    setIsSubmitting(false);

    // Format WhatsApp message directly to Shankar Sir (9769441271)
    const waText = `*Radiography Prep Premium Payment Verification*\n` +
      `---------------------------------------------\n` +
      `👤 विद्यार्थी नाव: ${studentName.trim()}\n` +
      `📱 मोबाईल नंबर: ${cleanPhone}\n` +
      `💳 UTR / Transaction ID: ${transactionId.trim()}\n` +
      `🔑 Device ID: ${deviceId}\n\n` +
      `नमस्कार शंकर सर, मी ₹२०० पेमेंट केले आहे. माझे डिटेल्स व स्क्रीनशॉट जोडला आहे. कृपया माझे डिटेल्स व्हेरीफाय करून माझ्या डिव्हाइससाठी सिक्युरिटी की (Security Key) पाठवा.`;

    const waUrl = `https://wa.me/919769441271?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');

    setPaymentSuccess(true);
    setActiveTab('code'); // Switch to Enter Activation Key tab
  };

  const handleCopyDeviceId = () => {
    navigator.clipboard.writeText(deviceId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const featuresList = [
    '3000+ MCQs with Answers',
    'All 30 Radiology Chapters',
    'Exams Covered: AIIMS, DMER, DHS, NHM, Railway, ESIC, PGIMER, JIPMER',
    'Detailed Explanations in Dual Language (Marathi + English)',
    'Unlimited Mock Tests & Instant Result Analytics',
    'Unlimited Chapterwise Practice',
    'Save Bookmarks & Review Missed Questions',
    'Live Progress Tracking & Accuracy Metrics',
    'Future Question Bank Updates Included',
    'Single Device Protection & Offline App Sync',
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24 animate-fadeIn">
      {/* Gold Banner Header */}
      <div className="bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 rounded-[22px] p-6 sm:p-8 text-slate-950 shadow-md relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="px-3 py-1 bg-slate-950 text-amber-300 rounded-full text-xs font-extrabold inline-flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>RadiologyPrep Premium</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Unlock Complete RadiologyPrep MCQ
            </h1>
            <p className="text-slate-900 font-bold text-sm sm:text-base">
              Get 3000+ Questions, 30 Chapters, Detailed Explanations & Unlimited Mock Tests.
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-slate-950 text-white rounded-2xl p-5 border border-amber-400/30 text-center shadow-lg shrink-0 w-full sm:w-auto">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-widest">Lifetime Access</div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400 mt-1">₹200</div>
            <div className="text-[11px] text-slate-300 font-medium mt-0.5">
              No Subscription | No Hidden Charges
            </div>
          </div>
        </div>
      </div>

      {isUnlocked ? (
        /* ALREADY UNLOCKED CARD */
        <div className="bg-white rounded-[18px] p-8 border border-emerald-200 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto">
            <Unlock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Your Premium Membership is Active!</h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            You have full lifetime access to all 30 chapters, 3000+ MCQs, explanations, and grand mock tests.
          </p>
          <button
            onClick={() => onNavigateTab && onNavigateTab('chapters')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors"
          >
            Start Practice Now
          </button>
        </div>
      ) : (
        /* UNLOCK CONTENT */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Feature List */}
          <div className="md:col-span-6 bg-white rounded-[18px] p-6 border border-slate-200/80 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>What You Get in Premium:</span>
            </h3>

            <ul className="space-y-3">
              {featuresList.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-xs text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Single Device Protection</span>
              </div>
              <p className="text-amber-800">Your activation code is linked securely to your mobile device ID for safe practice.</p>
            </div>
          </div>

          {/* Right Column: Payment & Activation Options */}
          <div className="md:col-span-6 bg-white rounded-[18px] p-6 border border-slate-200/80 shadow-sm space-y-5">
            {/* Tab selector */}
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('pay')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'pay' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1. UPI Payment (₹200)
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'code' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2. Enter Activation Key
              </button>
            </div>

            {paymentSuccess && (
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-300 space-y-2 text-emerald-950 text-xs">
                <div className="font-extrabold text-sm flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>माहिती व स्क्रीनशॉट वॉट्सॲपवर पाठवला आहे!</span>
                </div>
                <p className="leading-relaxed font-medium text-emerald-900">
                  श्री शंकर पव्हणे सर (9769441271) तुमचे डिटेल्स व्हेरीफाय करून तुम्हाला युनिक <strong>सिक्युरिटी की (Security Key)</strong> पाठवतील. सिक्युरिटी की मिळाल्यावर खालील <strong>'2. Enter Activation Key'</strong> रकान्यात टाकून अनलॉक करा.
                </p>
              </div>
            )}

            {activeTab === 'pay' ? (
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                {/* UPI ID Details Box */}
                <div className="bg-slate-900 text-white p-4 rounded-xl space-y-2 border border-slate-800 text-xs">
                  <div className="text-amber-400 font-bold uppercase tracking-wide">Pay via Google Pay / PhonePe / Paytm</div>
                  <div className="font-mono text-sm font-extrabold text-white bg-slate-800 p-2 rounded-lg flex items-center justify-between">
                    <span>sspavhane@oksbi</span>
                    <button
                      type="button"
                      onClick={() => navigator.clipboard.writeText('sspavhane@oksbi')}
                      className="text-amber-400 hover:text-amber-300 font-sans font-bold text-[11px]"
                    >
                      Copy UPI
                    </button>
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    Payee Name: <strong className="text-white">Mr. Shankar Pavhane</strong> (Radiologyprep)
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name (विद्यार्थ्याचे नाव)</label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (मोबाईल नंबर)</label>
                    <input
                      type="tel"
                      required
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Transaction ID / UTR Number (पेमेंट UTR/ID)</label>
                    <input
                      type="text"
                      required
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      placeholder="e.g. 308941238910"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Upload Payment Screenshot (पेमेंट स्क्रीनशॉट जोडा)</label>
                    <div className="flex items-center gap-2">
                      <label className="flex-1 cursor-pointer bg-slate-100 hover:bg-slate-200 border border-dashed border-slate-300 p-2.5 rounded-xl flex items-center justify-center gap-2 text-slate-700 transition-colors">
                        <Upload className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-bold truncate">
                          {screenshotDataUrl ? 'स्क्रीनशॉट जोडला आहे ✅' : 'फोटो/स्क्रीनशॉट निवडा (Choose File)'}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleScreenshotChange}
                          className="hidden"
                        />
                      </label>
                      {screenshotDataUrl && (
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-emerald-500 shrink-0">
                          <img src={screenshotDataUrl} alt="Screenshot Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black rounded-xl shadow-md text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  )}
                  <span>{isSubmitting ? 'पाठवत आहे...' : 'स्क्रीनशॉट व पेमेंट माहिती WhatsApp (9769441271) वर पाठवा'}</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                {/* Device ID Display */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Your Device ID:</span>
                    <span className="font-mono font-bold text-slate-900">{deviceId}</span>
                  </div>
                  <button
                    onClick={handleCopyDeviceId}
                    className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-[11px] font-bold text-slate-700 hover:bg-slate-100"
                  >
                    {copiedId ? 'Copied!' : 'Copy ID'}
                  </button>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Activation Code (अॅक्टिव्हेशन की)</label>
                  <input
                    type="text"
                    value={activationCode}
                    onChange={(e) => setActivationCode(e.target.value)}
                    placeholder="Enter Secret Key (e.g. RAD-XXXX-XXXX)"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  onClick={handleUnlockWithKey}
                  className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold rounded-xl shadow-md text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Key className="w-5 h-5 text-amber-400" />
                  <span>Activate Key Now</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
