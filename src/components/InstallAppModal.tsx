import React, { useState, useEffect } from 'react';
import { 
  Download, 
  X, 
  Smartphone, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  MoreVertical, 
  PlusSquare, 
  ShieldCheck, 
  Zap,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

interface InstallAppModalProps {
  onClose: () => void;
  deferredPrompt?: any;
  onInstallSuccess?: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({ 
  onClose, 
  deferredPrompt,
  onInstallSuccess 
}) => {
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentUrl = window.location.href;

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // Check if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setInstalled(true);
    }
  }, []);

  const [showManualNotice, setShowManualNotice] = useState(false);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      setInstalling(true);
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          setInstalled(true);
          if (onInstallSuccess) onInstallSuccess();
        }
      } catch (err) {
        console.error('PWA install error:', err);
      } finally {
        setInstalling(false);
      }
    } else {
      // Open link in real browser tab outside iframe so Chrome PWA triggers natively
      setInstalling(true);
      setShowManualNotice(true);
      try {
        window.open(currentUrl, '_blank');
      } catch (e) {
        console.warn('Failed to open new window:', e);
      }
      setTimeout(() => {
        setInstalling(false);
      }, 600);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-teal-500/50 rounded-2xl sm:rounded-3xl max-w-md w-full text-slate-100 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-gradient-to-r from-teal-950 via-slate-900 to-slate-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-tr from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Smartphone className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-base sm:text-lg font-black text-white">X-Ray Prep Mobile App</h2>
                <span className="px-1.5 py-0.5 text-[9px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40 rounded-full">PWA App</span>
              </div>
              <p className="text-[11px] text-teal-400 font-bold">मोबाईलमध्ये ॲपसारखे चालवा</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
          
          {/* App Card Preview */}
          <div className="p-4 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-teal-500/30 text-center space-y-3 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-cyan-400 via-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center text-slate-950 shadow-xl shadow-teal-500/20 font-black text-2xl">
              X
            </div>

            <div>
              <h3 className="text-base font-black text-white">XRay MCQs & Exam Prep</h3>
              <p className="text-xs text-slate-400 mt-0.5">श्री शंकर पव्हणे मार्गदर्शित • ३०००+ प्रश्नसंच</p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800 text-[10px] text-slate-300">
              <div className="p-1.5 bg-slate-900 rounded-lg">
                <Zap className="w-3.5 h-3.5 text-amber-400 mx-auto mb-0.5" />
                <span>अतिशय वेगवान</span>
              </div>
              <div className="p-1.5 bg-slate-900 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-0.5" />
                <span>१००% सुरक्षित</span>
              </div>
              <div className="p-1.5 bg-slate-900 rounded-lg">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-0.5" />
                <span>३० अध्याय</span>
              </div>
            </div>
          </div>

          {/* Installed Success Message */}
          {installed ? (
            <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-sm font-bold text-emerald-200">ॲप आधीच इन्स्टॉल झाले आहे!</h4>
              <p className="text-xs text-emerald-300/90">
                तुम्ही तुमच्या मोबाईलच्या Home Screen वरून हे ॲप direct ओपन करू शकता.
              </p>
            </div>
          ) : (
            <>
              {/* Primary Download/Install Button */}
              <button
                onClick={handleInstallClick}
                disabled={installing}
                className="w-full bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 hover:brightness-110 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-teal-500/20 transition-all cursor-pointer active:scale-98"
              >
                {installing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    <span>इन्स्टॉलेशन तपासत आहे...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <span>इन्स्टॉल करा (Install App Direct)</span>
                  </>
                )}
              </button>

              {showManualNotice && (
                <div className="p-3 bg-amber-950/80 border border-amber-500/50 rounded-xl text-amber-200 text-xs space-y-1 animate-fade-in">
                  <div className="font-bold flex items-center gap-1.5 text-amber-300">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>नवी विंडोज/ब्राऊझर टॅब उघडली आहे!</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    सिक्युरिटी कारणास्तव हे ॲप तुमच्या मूळ Chrome / Safari ब्राऊझरमध्ये उघडले गेले आहे. आता ब्राऊझरच्या <strong>Menu (⋮)</strong> वर क्लिक करून <strong>"Install App"</strong> किंवा <strong>"Add to Home Screen"</strong> वर क्लिक करा.
                  </p>
                </div>
              )}

              {/* Open in Chrome button if in WebView/Iframe */}
              <div className="pt-1">
                <a
                  href={currentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-bold text-cyan-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Chrome / Safari ब्राऊझरमध्ये उघडा (Open in Browser)</span>
                </a>
              </div>

              {/* Instructions Guide based on device */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2.5 text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-teal-300 font-bold flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    इन्स्टॉल स्टेप्स (3 सोप्या पायऱ्या):
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'लिंक कॉपी झाली!' : 'लिंक कॉपी करा'}</span>
                  </button>
                </div>

                {isIOS ? (
                  <ol className="space-y-2 text-slate-300 text-[11px] list-decimal pl-4 leading-relaxed">
                    <li>खालील <strong>Share (<Share2 className="w-3.5 h-3.5 inline text-cyan-400" />)</strong> बटणावर क्लिक करा.</li>
                    <li>खाली स्क्रोल करून <strong>"Add to Home Screen" (<PlusSquare className="w-3.5 h-3.5 inline text-emerald-400" />)</strong> निवडा.</li>
                    <li>वरच्या उजव्या बाजूला <strong>"Add"</strong> करा — मोबाईलवर ॲप तयार होईल!</li>
                  </ol>
                ) : (
                  <ol className="space-y-2 text-slate-300 text-[11px] list-decimal pl-4 leading-relaxed">
                    <li>वरच्या <strong>इन्स्टॉल करा</strong> बटणावर क्लिक करा.</li>
                    <li>किंवा Chrome ब्राऊझरचे <strong>तीन ठिपके (⋮) (<MoreVertical className="w-3.5 h-3.5 inline text-amber-400" />)</strong> दाबा.</li>
                    <li>तिथे <strong>"Install App"</strong> किंवा <strong>"Add to Home screen"</strong> वर क्लिक करा.</li>
                  </ol>
                )}
              </div>
            </>
          )}

          <p className="text-[10px] text-slate-400 text-center leading-relaxed">
            हे PWA App प्ले स्टोअरशिवाय तुमच्या मोबाईलवर थेट ॲपसारखे चालते व स्क्रीनवर शॉर्टकट तयार होतो.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between shrink-0 text-xs">
          <span className="text-[10px] text-teal-400 font-mono flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Play Protect Safe PWA
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold transition-colors border border-slate-700"
          >
            बंद करा (Close)
          </button>
        </div>

      </div>
    </div>
  );
};
