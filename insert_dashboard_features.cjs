const fs = require('fs');

let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

const banner = `
      {/* Marquee Banner */}
      {!isUnlocked && (
        <div 
          onClick={() => setShowUnlockModal(true)}
          className="w-full -mt-4 mb-4 bg-gradient-to-r from-amber-500 to-amber-300 text-slate-950 flex overflow-hidden cursor-pointer shadow-lg hover:brightness-110 transition-all rounded-xl border border-amber-400"
        >
          <div className="flex animate-marquee whitespace-nowrap shrink-0 items-center py-2.5">
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Sparkles className="w-4 h-4"/> 3000+ MCQs</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><BookOpen className="w-4 h-4"/> सर्व 30 Chapters</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Layers className="w-4 h-4"/> Detailed Explanations</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><FileCheck className="w-4 h-4"/> Mock Tests</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><ShieldCheck className="w-4 h-4"/> 1 Device Secure Access</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Unlock className="w-4 h-4"/> Lifetime Premium Access</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><CheckCircle2 className="w-4 h-4"/> ₹200 Only (One Time)</span>
          </div>
          <div className="flex animate-marquee whitespace-nowrap shrink-0 items-center py-2.5">
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Sparkles className="w-4 h-4"/> 3000+ MCQs</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><BookOpen className="w-4 h-4"/> सर्व 30 Chapters</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Layers className="w-4 h-4"/> Detailed Explanations</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><FileCheck className="w-4 h-4"/> Mock Tests</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><ShieldCheck className="w-4 h-4"/> 1 Device Secure Access</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><Unlock className="w-4 h-4"/> Lifetime Premium Access</span>
            <span className="mx-6 flex items-center gap-1.5 text-sm font-black"><CheckCircle2 className="w-4 h-4"/> ₹200 Only (One Time)</span>
          </div>
        </div>
      )}
`;

const poster = `
      {/* Premium Poster */}
      {!isUnlocked && (
        <div className="bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 mx-auto shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
              <Unlock className="w-8 h-8" />
            </div>
          </div>

          <div className="space-y-2 max-w-xl mx-auto relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Limited Time Offer
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              सर्व ३०००+ प्रश्न आणि ३० अध्यायांचा सराव अनलॉक करा!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              फक्त <strong className="text-amber-400">₹२०० (One Time Payment)</strong> मध्ये संपूर्ण परीक्षेची तयारी करा. एकदा खरेदी करा आणि आयुष्यभर वापरा (Lifetime Access).
            </p>
          </div>

          <button
            onClick={() => setShowUnlockModal(true)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-300 hover:to-amber-200 text-slate-950 font-black px-8 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 text-sm transition-all relative z-10"
          >
            <Sparkles className="w-5 h-5 stroke-[2.5]" />
            <span>Premium अनलॉक करा - ₹200 Only</span>
          </button>
        </div>
      )}
`;

content = content.replace(
  '<div className="bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border border-teal-500/40 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden">',
  banner + '\n      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border border-teal-500/40 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden">'
);

content = content.replace(
  '{/* Categories Grid */}',
  poster + '\n\n      {/* Categories Grid */}'
);

content = content.replace(
  '</React.Fragment>\n  );\n};',
  '      {showUnlockModal && (\n        <PremiumUnlockModal\n          onClose={() => setShowUnlockModal(false)}\n          onSuccessUnlock={handleSuccessUnlock}\n        />\n      )}\n    </div>\n  );\n};'
);
// replace fragment with div just in case it doesn't match
content = content.replace(
  '    </div>\n  );\n};',
  '      {showUnlockModal && (\n        <PremiumUnlockModal\n          onClose={() => setShowUnlockModal(false)}\n          onSuccessUnlock={handleSuccessUnlock}\n        />\n      )}\n    </div>\n  );\n};'
);

fs.writeFileSync('src/components/Dashboard.tsx', content, 'utf8');
