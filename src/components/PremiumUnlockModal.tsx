import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  Key, 
  X,
  MessageSquare
} from 'lucide-react';
import { setPremiumUnlocked } from '../lib/storage';

interface PremiumUnlockModalProps {
  onClose: () => void;
  onSuccessUnlock: () => void;
}

export const PremiumUnlockModal: React.FC<PremiumUnlockModalProps> = ({
  onClose,
  onSuccessUnlock,
}) => {
  const [activationCode, setActivationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleUnlock = (codeToTest?: string) => {
    const inputCode = (codeToTest || activationCode).trim().toUpperCase();
    
    if (!inputCode) {
      setErrorMsg('कृपया ॲक्टिव्हेशन कोड टाका.');
      return;
    }

    // Accepts SHANKAR2026, PREMIUM2026, PAVHANE2026, SHANKAR, 1234, PAVHANE, or any code
    setPremiumUnlocked(true);
    setSuccessMsg('अभिनंदन! प्रीमियम व्हर्जन यशस्वीरीत्या अनलॉक झाले आहे.');
    setErrorMsg(null);
    setTimeout(() => {
      onSuccessUnlock();
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-teal-500/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6 relative overflow-hidden">
        {/* Background glow accent */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-teal-400 p-0.5 mx-auto shadow-lg shadow-amber-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Lock className="w-7 h-7 text-amber-400" />
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Mr.Shankar Pavhane Radiography Prep Premium</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            प्रीमियम व्हर्जन अनलॉक करा (Unlock Premium)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            प्रत्येक टॉपिकचे पहिले १५ प्रश्न विनामूल्य (Free) आहेत. पुढील ३०००+ प्रश्न व सर्व ३० अध्यायांचा सराव करण्यासाठी प्रीमियम व्हर्जन एक्टिव्हेट करा.
          </p>
        </div>

        {/* Features list */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2.5 text-xs sm:text-sm text-slate-200">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>३०००+ संपूर्ण सराव प्रश्नसंच (मराठी व इंग्रजी भाषांतरासह)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>सर्व ३० अध्यायांचे (Chapters 1 to 30) वर्गीकरण व सराव</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>AI ट्यूटर द्वारे प्रत्येक प्रश्नाचे सविस्तर वैज्ञानिक उत्तर विश्लेषण</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>आरोग्य विभाग क्ष-किरण वैज्ञानिक अधिकारी परीक्षा पॅटर्न (२०० गुण)</span>
          </div>
        </div>

        {/* Contact Developer & Activation Code Form */}
        <div className="space-y-4 pt-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>१. मार्गदर्शकांशी संपर्क साधून कोड मिळवा:</span>
            <span className="text-teal-400 font-mono">श्री शंकर पव्हणे</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/919769441271?text=Hi%20Shankar%20Sir,%20I%20want%20to%20unlock%20Radiography%20Prep%20Premium%20Version"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp वर संपर्क</span>
            </a>

            <a
              href="tel:9769441271"
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 font-bold py-2.5 px-3 rounded-xl text-xs transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>९७६९४४१२७१ कॉलिंग</span>
            </a>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="block text-xs font-bold text-slate-300">
              २. ॲक्टिव्हेशन / अनलॉक कोड टाका (Activation Code):
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={activationCode}
                  onChange={(e) => setActivationCode(e.target.value)}
                  placeholder="उदा. SHANKAR2026 किंवा PREMIUM"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl text-xs text-white uppercase tracking-wider font-mono focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={() => handleUnlock()}
                className="bg-gradient-to-r from-amber-500 to-teal-400 hover:brightness-110 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition-all"
              >
                <Unlock className="w-4 h-4 stroke-[2.5]" />
                <span>अनलॉक करा</span>
              </button>
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-400 font-medium bg-rose-950/60 p-2.5 rounded-xl border border-rose-500/30">
              {errorMsg}
            </p>
          )}

          {successMsg && (
            <p className="text-xs text-emerald-300 font-bold bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/30 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
