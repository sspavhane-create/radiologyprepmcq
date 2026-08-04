import React, { useState } from 'react';
import { 
  QUESTION_BANK_ANALYSIS, 
  DuplicateCluster, 
  DEDUPLICATED_QUESTION_BANK, 
  MASTER_QUESTION_BANK 
} from '../data/masterQuestionBank';
import { Question } from '../types';
import { 
  Search, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  BookOpen, 
  ExternalLink, 
  X, 
  PieChart, 
  BarChart3, 
  Filter, 
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap
} from 'lucide-react';

interface DeepResearchReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToChapter: (chapterId: number, questionId?: number) => void;
  onSelectBankMode?: (isDeduplicated: boolean) => void;
}

export const DeepResearchReportModal: React.FC<DeepResearchReportModalProps> = ({
  isOpen,
  onClose,
  onJumpToChapter,
  onSelectBankMode,
}) => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [selectedClusterId, setSelectedClusterId] = useState<string | null>(null);
  const [activeReportTab, setActiveReportTab] = useState<'summary' | 'clusters' | 'chapters'>('summary');
  const [isDeduplicatedView, setIsDeduplicatedView] = useState<boolean>(false);

  if (!isOpen) return null;

  const {
    totalRawQuestions,
    uniqueCoreQuestionsCount,
    duplicateCount,
    duplicationPercentage,
    chapterBreakdown,
    topDuplicateClusters,
  } = QUESTION_BANK_ANALYSIS;

  const filteredClusters = topDuplicateClusters.filter(cluster => {
    const query = searchFilter.toLowerCase();
    return (
      cluster.topicTitle.toLowerCase().includes(query) ||
      cluster.topicTitleMr.toLowerCase().includes(query) ||
      cluster.occurringChapterIds.some(cId => `chapter ${cId}`.includes(query) || `प्रकरण ${cId}`.includes(query))
    );
  });

  const handleBankModeToggle = (dedup: boolean) => {
    setIsDeduplicatedView(dedup);
    if (onSelectBankMode) {
      onSelectBankMode(dedup);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-slate-900 border border-teal-500/30 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 px-6 py-5 border-b border-teal-500/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-500/20 rounded-2xl border border-teal-500/30 text-teal-300">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 text-[11px] font-bold border border-teal-500/20 mb-1">
                <span>एकाच फाईल मधील प्रश्न संच डीप रिसर्च (Deep Research Report)</span>
              </div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">
                क्वेश्चन बँक पृथक्करण व साम्य विश्लेषण (Question Bank Deep Research)
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            title="बंद करा"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sub Navigation Bar */}
        <div className="bg-slate-950/90 px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveReportTab('summary')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeReportTab === 'summary'
                  ? 'bg-teal-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <PieChart className="w-4 h-4" />
              <span>मुख्य निष्कर्ष (Summary)</span>
            </button>

            <button
              onClick={() => setActiveReportTab('clusters')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeReportTab === 'clusters'
                  ? 'bg-teal-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>सारखे प्रश्न गट ({topDuplicateClusters.length} Clusters)</span>
            </button>

            <button
              onClick={() => setActiveReportTab('chapters')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeReportTab === 'chapters'
                  ? 'bg-teal-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>३० प्रकरणे वितरण (Chapter Breakdown)</span>
            </button>
          </div>

          {/* Mode switch */}
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-2xl border border-slate-800">
            <button
              onClick={() => handleBankModeToggle(false)}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                !isDeduplicatedView
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              सर्व {totalRawQuestions} प्रश्न
            </button>
            <button
              onClick={() => handleBankModeToggle(true)}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                isDeduplicatedView
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              युनिक {uniqueCoreQuestionsCount} मुख्य प्रश्न
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">

          {/* SUMMARY TAB */}
          {activeReportTab === 'summary' && (
            <div className="space-y-6">
              
              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>एकूण एकत्रित प्रश्न बँक</span>
                    <BookOpen className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{totalRawQuestions.toLocaleString()}</div>
                  <p className="text-[11px] text-slate-400">एकत्रित ३० प्रकरणे व सराव प्रश्न</p>
                </div>

                <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-emerald-300 text-xs font-semibold">
                    <span>युनिक मूळ प्रश्न (Unique Core)</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300">{uniqueCoreQuestionsCount.toLocaleString()}</div>
                  <p className="text-[11px] text-emerald-200/80">विशिष्ट संकल्पनात्मक प्रश्न</p>
                </div>

                <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-amber-300 text-xs font-semibold">
                    <span>पुनरावृत्ती / सारखे प्रश्न</span>
                    <Layers className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300">{duplicateCount.toLocaleString()}</div>
                  <p className="text-[11px] text-amber-200/80">वेगवेगळ्या प्रकरणांमध्ये आलेले</p>
                </div>

                <div className="bg-slate-950 border border-indigo-500/30 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-indigo-300 text-xs font-semibold">
                    <span>साम्य / रिपिटिशन प्रमाण</span>
                    <PieChart className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-indigo-300">{duplicationPercentage}%</div>
                  <p className="text-[11px] text-indigo-200/80">एकूण प्रश्नसंचातील साम्य टक्केवारी</p>
                </div>
              </div>

              {/* Deep Analysis Insights Banner */}
              <div className="bg-gradient-to-r from-teal-950/60 via-slate-900 to-slate-950 border border-teal-500/30 rounded-2xl p-5 space-y-3">
                <h3 className="text-sm font-extrabold text-teal-300 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-400" />
                  <span>डीप रिसर्च निष्कर्ष व अभ्यास धोरण (Deep Research Key Findings)</span>
                </h3>
                
                <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>
                      <strong>एकत्रित प्रश्न बँक संख्या:</strong> सर्व ३० प्रकरणांचे (Chapters 1 to 30) प्रत्येकी १०० प्रश्न + मूळ सराव प्रश्न असे एकूण <strong>३,२५३ प्रश्न</strong> एकाच मास्टर फायलीत (masterQuestionBank.ts) यशस्वीपणे मर्ज केले गेले आहेत.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>
                      <strong>प्रश्न साम्य विश्लेषण:</strong> डीप रिसर्च विश्लेषणात आढळले की <strong>३,२५३ प्रश्नांपैकी ३९९ मूळ (Unique Core) संकल्पनात्मक प्रश्न</strong> आहेत, जे विविध प्रकरणांमध्ये (उदा. X-Ray Tube Anode Physics, Radiation Protection ALARA, CT Generations, MRI Relaxation) सराव दृढ करण्यासाठी पुनरावृत्त (Repeated) झाले आहेत.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>
                      <strong>थेट प्रकरणावर जाण्याची सोय (Direct Chapter Jump):</strong> कोणत्याही प्रश्नाचा सराव करताना त्याच्या कार्डवर असलेल्या <strong>"📍 या प्रकरणावर जा"</strong> बटणावर क्लिक करून तुम्ही थेट त्या प्रकरणाच्या सराव विभागात जाऊन सखोल अभ्यास करू शकता!
                    </span>
                  </li>
                </ul>
              </div>

              {/* Sample Top Duplicate Clusters Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-teal-400" />
                    <span>सर्वात जास्त पुनरावृत्ती झालेले संकल्पनात्मक प्रश्न (Top Similar Questions)</span>
                  </h3>
                  <button
                    onClick={() => setActiveReportTab('clusters')}
                    className="text-xs text-teal-400 hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>सर्व {topDuplicateClusters.length} गट पहा</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {topDuplicateClusters.slice(0, 4).map((cluster) => (
                    <div 
                      key={cluster.id}
                      className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3 hover:border-teal-500/40 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-extrabold border border-amber-500/30">
                          {cluster.occurrencesCount} वेळा पुनरावृत्ती
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-slate-400">
                          {cluster.occurringChapterIds.length} प्रकरणांमध्ये
                        </span>
                      </div>

                      <p className="text-xs font-bold text-white line-clamp-2">
                        {cluster.representativeQuestion.question}
                      </p>

                      {cluster.representativeQuestion.question_mr && (
                        <p className="text-xs text-teal-300 font-semibold line-clamp-2">
                          {cluster.representativeQuestion.question_mr}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[10px] text-slate-400">प्रकरणे:</span>
                        {cluster.occurringChapterIds.slice(0, 5).map(cId => (
                          <button
                            key={cId}
                            onClick={() => {
                              onJumpToChapter(cId, cluster.representativeQuestion.id);
                              onClose();
                            }}
                            className="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-[10px] font-bold border border-teal-500/30 transition-all flex items-center gap-1"
                          >
                            <span>Ch #{cId}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* DUPLICATE CLUSTERS TAB */}
          {activeReportTab === 'clusters' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="प्रश्न किंवा प्रकरण शोधा (Search question or chapter)..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="text-xs text-slate-400 font-semibold px-2">
                  एकूण आढळलेले गट: <strong className="text-white">{filteredClusters.length}</strong>
                </div>
              </div>

              <div className="space-y-3">
                {filteredClusters.map((cluster) => {
                  const isExpanded = selectedClusterId === cluster.id;
                  return (
                    <div 
                      key={cluster.id}
                      className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all"
                    >
                      <div 
                        onClick={() => setSelectedClusterId(isExpanded ? null : cluster.id)}
                        className="p-4 cursor-pointer flex items-start justify-between gap-4 hover:bg-slate-900/50 transition-colors"
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                              {cluster.occurrencesCount} वेळा आलेला प्रश्न
                            </span>
                            <span className="text-[11px] text-slate-400 font-mono">
                              {cluster.occurringChapterIds.length} वेगवेगळ्या प्रकरणांमध्ये
                            </span>
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-white">
                            {cluster.representativeQuestion.question}
                          </h4>

                          {cluster.representativeQuestion.question_mr && (
                            <p className="text-xs text-teal-300 font-semibold">
                              {cluster.representativeQuestion.question_mr}
                            </p>
                          )}
                        </div>

                        <div className="p-1 text-slate-400 shrink-0">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>

                      {/* Expanded occurrences details */}
                      {isExpanded && (
                        <div className="p-4 bg-slate-900/80 border-t border-slate-800 space-y-3">
                          <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
                            <span>हा प्रश्न खालील प्रकरणांमध्ये उपलब्ध आहे:</span>
                            <span className="text-teal-400 text-[11px]">थेट सराव करण्यासाठी बटणावर क्लिक करा</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {cluster.matchingQuestions.map((mq, idx) => (
                              <div 
                                key={mq.id + '-' + idx}
                                className="bg-slate-950 border border-slate-800 rounded-xl p-3 space-y-2 flex flex-col justify-between"
                              >
                                <div>
                                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                                    <span>ID: #{mq.id}</span>
                                    <span className="text-teal-300 font-bold">{mq.chapter_name || `Chapter #${mq.chapterId}`}</span>
                                  </div>
                                  <p className="text-xs text-slate-200 line-clamp-2">{mq.question}</p>
                                </div>

                                <button
                                  onClick={() => {
                                    if (mq.chapterId) {
                                      onJumpToChapter(mq.chapterId, mq.id);
                                      onClose();
                                    }
                                  }}
                                  className="mt-2 w-full py-1.5 px-3 bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 text-xs font-bold rounded-lg transition-all border border-teal-500/30 flex items-center justify-center gap-1.5"
                                >
                                  <span>📍 या प्रकरणावर जा (Go to Chapter #{mq.chapterId})</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CHAPTER BREAKDOWN TAB */}
          {activeReportTab === 'chapters' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-300 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                प्रत्येक अध्यायामध्ये (Chapter 1 to 30) १०० सराव प्रश्न समाविष्ट आहेत. खालील तक्त्यामध्ये प्रत्येक प्रकरणातील एकूण व युनिक प्रश्नांची संख्या दिलेली आहे.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {chapterBreakdown.map((item) => (
                  <div 
                    key={item.chapterId}
                    className="bg-slate-950 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-4 space-y-3 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono text-teal-400 font-bold">
                        <span>Chapter #{item.chapterId}</span>
                        <span>{item.totalInChapter} Qs</span>
                      </div>
                      <h4 className="text-xs font-extrabold text-white line-clamp-2">
                        {item.title}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        युनिक संकल्पना: <strong className="text-emerald-400">{item.uniqueInChapter} Qs</strong>
                      </span>

                      <button
                        onClick={() => {
                          onJumpToChapter(item.chapterId);
                          onClose();
                        }}
                        className="px-3 py-1 bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 text-xs font-bold rounded-lg transition-all border border-teal-500/30 flex items-center gap-1"
                      >
                        <span>प्रकरणावर जा</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400">
            Mr. Shankar Pavhane X-Ray Prep Consolidated Question Bank • 3,253 Questions
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-teal-500/20"
          >
            समजले, बंद करा (Close)
          </button>
        </div>

      </div>
    </div>
  );
};
