import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Image as ImageIcon, 
  ExternalLink, 
  Phone, 
  MessageSquare, 
  Copy, 
  Check, 
  User, 
  CreditCard, 
  Calendar, 
  ShieldCheck, 
  AlertCircle, 
  Eye, 
  X,
  Filter,
  RefreshCw,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { 
  PaymentRequest, 
  subscribeToPaymentRequests, 
  approvePaymentRequest, 
  rejectPaymentRequest 
} from '../lib/firebase';

interface AdminPaymentDashboardProps {
  onStatusUpdated?: () => void;
  onClose?: () => void;
}

export const AdminPaymentDashboard: React.FC<AdminPaymentDashboardProps> = ({ 
  onStatusUpdated,
  onClose 
}) => {
  const [requests, setRequests] = useState<PaymentRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected' | 'all'>('pending');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Processing state for individual items
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Screenshot Preview Modal State
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);

  // Copy state for transaction IDs
  const [copiedTxId, setCopiedTxId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToPaymentRequests((data) => {
      setRequests(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleApprove = async (req: PaymentRequest) => {
    if (!window.confirm(`तुम्हाला नक्की ${req.studentName} (${req.mobileNumber}) चा पेमेंट रिक्वेस्ट मंजूर करून प्रीमियम ॲक्सेस द्यायचा आहे का?`)) {
      return;
    }

    setProcessingId(req.id);
    const ok = await approvePaymentRequest(req.id, req.userId, req.mobileNumber, req.studentName);
    setProcessingId(null);

    if (ok) {
      setActionSuccess(`✅ ${req.studentName} चा प्रीमियम ॲक्सेस यशस्वीरीत्या मंजूर करण्यात आला!`);
      setTimeout(() => setActionSuccess(null), 4000);
      if (onStatusUpdated) onStatusUpdated();
    } else {
      alert('स्टेटस मंजूर करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
    }
  };

  const handleReject = async (req: PaymentRequest) => {
    const reason = window.prompt(`नाकारण्याचे कारण प्रविष्ट करा (Optional):`, 'पेमेंट स्क्रीनशॉट किंवा ट्रांझॅक्शन आयडी जुळत नाही');
    if (reason === null) return; // User cancelled prompt

    setProcessingId(req.id);
    const ok = await rejectPaymentRequest(req.id, req.userId, reason);
    setProcessingId(null);

    if (ok) {
      setActionSuccess(`❌ ${req.studentName} ची पेमेंट रिक्वेस्ट नाकारण्यात आली.`);
      setTimeout(() => setActionSuccess(null), 4000);
      if (onStatusUpdated) onStatusUpdated();
    } else {
      alert('स्टेटस नाकारताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTxId(text);
    setTimeout(() => setCopiedTxId(null), 2000);
  };

  // Filter requests
  const filteredRequests = requests.filter(req => {
    // Tab filter
    if (activeTab !== 'all' && req.status !== activeTab) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = req.studentName?.toLowerCase().includes(q);
      const matchPhone = req.mobileNumber?.includes(q);
      const matchTx = req.transactionId?.toLowerCase().includes(q);
      return matchName || matchPhone || matchTx;
    }

    return true;
  });

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const approvedCount = requests.filter(r => r.status === 'approved').length;
  const rejectedCount = requests.filter(r => r.status === 'rejected').length;

  return (
    <div className="space-y-4 text-slate-100 font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/40 p-4 sm:p-5 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/30 mb-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Shankar Sir Live Payment Verification</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <span>पेंडिंग पेमेंट रिक्वेस्ट डॅशबोर्ड (Payment Requests)</span>
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              विद्यार्थ्यांनी अपलोड केलेले UPI पेमेंट स्क्रीनशॉट, नाव आणि Transaction ID तपासा व एका क्लिकवर ॲप्रूव्ह करा.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-slate-950/80 px-3 py-1.5 rounded-xl border border-amber-500/30 text-center">
              <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">पेंडिंग विनंत्या</div>
              <div className="text-lg font-black text-amber-400 font-mono">{pendingCount}</div>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl transition-colors border border-slate-700"
                title="बंद करा"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Alert toast notification */}
      {actionSuccess && (
        <div className="p-3 bg-emerald-950/90 border border-emerald-500/50 rounded-xl text-emerald-200 text-xs font-bold flex items-center gap-2 shadow-lg animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="flex-1">{actionSuccess}</span>
        </div>
      )}

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/80 p-2.5 rounded-2xl border border-slate-800">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('pending')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'pending'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>पेंडिंग ({pendingCount})</span>
            {pendingCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('approved')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'approved'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>मंजूर ({approvedCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('rejected')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'rejected'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>नाकारलेले ({rejectedCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'all'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>सर्व ({requests.length})</span>
          </button>
        </div>

        {/* Search Field */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="नाव, मोबाईल किंवा UTR आयडी शोधा..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white focus:outline-none placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Content List */}
      {loading ? (
        <div className="py-12 text-center space-y-3 bg-slate-950/40 rounded-2xl border border-slate-800">
          <RefreshCw className="w-8 h-8 text-amber-400 animate-spin mx-auto" />
          <p className="text-xs text-slate-400">Firestore मधून थेट पेमेंट डेटा लोड होत आहे...</p>
        </div>
      ) : filteredRequests.length === 0 ? (
        <div className="py-12 text-center space-y-2 bg-slate-950/40 rounded-2xl border border-slate-800 p-6">
          <Clock className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-sm font-bold text-slate-300">
            {activeTab === 'pending' 
              ? 'कोणतीही पेंडिंग पेमेंट रिक्वेस्ट उपलब्ध नाही' 
              : 'निवडलेल्या फिल्टरनुसार नोंदी सापडल्या नाहीत.'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            विद्यार्थ्यांनी अॅपमधून भरलेले पेमेंट आणि अपलोड केलेले स्क्रीनशॉट येथे रिअल-टाईम दिसतील.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredRequests.map((req) => {
            const isPending = req.status === 'pending';
            const isApproved = req.status === 'approved';
            const isRejected = req.status === 'rejected';

            const cleanPhone = req.mobileNumber ? req.mobileNumber.replace(/\D/g, '').slice(-10) : '';

            return (
              <div 
                key={req.id}
                className={`bg-slate-900/90 border rounded-2xl p-4 space-y-3 shadow-md relative transition-all hover:border-slate-700 ${
                  isPending 
                    ? 'border-amber-500/50 shadow-amber-950/20' 
                    : isApproved 
                    ? 'border-emerald-500/40 bg-slate-900/60' 
                    : 'border-rose-500/30 bg-slate-900/40'
                }`}
              >
                {/* Top Badge & Time */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    {isPending && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>पेंडिंग पडताळणी</span>
                      </span>
                    )}
                    {isApproved && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>मंजूर (Approved)</span>
                      </span>
                    )}
                    {isRejected && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        <XCircle className="w-3 h-3 text-rose-400" />
                        <span>नाकारले (Rejected)</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3" />
                    {req.createdAt ? new Date(req.createdAt).toLocaleString('mr-IN', {
                      day: 'numeric',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    }) : 'ताजी नोंद'}
                  </span>
                </div>

                {/* Main Content Layout: Details + Screenshot */}
                <div className="flex gap-3">
                  {/* Left: User & Payment Details */}
                  <div className="flex-1 space-y-2 text-xs">
                    {/* Student Name */}
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">विद्यार्थ्याचे नाव:</div>
                      <div className="font-extrabold text-sm text-white flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{req.studentName || 'अभ्यासक विद्यार्थी'}</span>
                      </div>
                    </div>

                    {/* Mobile Number & Call / WhatsApp */}
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">मोबाईल नंबर:</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-mono text-xs text-amber-300 font-bold">
                          +91 {cleanPhone || req.mobileNumber}
                        </span>
                        {cleanPhone && (
                          <div className="flex items-center gap-1">
                            <a
                              href={`https://wa.me/91${cleanPhone}?text=${encodeURIComponent(`नमस्कार ${req.studentName}, Radiography Prep ॲपमधील आपला पेमेंट संदर्भ (${req.transactionId}) पडताळण्यात आला आहे.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-md transition-colors"
                              title="WhatsApp मेसेज पाठवा"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href={`tel:${cleanPhone}`}
                              className="p-1 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded-md transition-colors"
                              title="कॉल करा"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Transaction ID / UTR */}
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Transaction ID / UTR:</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-mono text-xs font-bold text-teal-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 tracking-wider select-all">
                          {req.transactionId || 'N/A'}
                        </span>
                        {req.transactionId && (
                          <button
                            type="button"
                            onClick={() => handleCopy(req.transactionId)}
                            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800"
                            title="Transaction ID कॉपी करा"
                          >
                            {copiedTxId === req.transactionId ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Amount if present */}
                    {req.amount && (
                      <div className="text-[11px] text-amber-300 font-bold">
                        रक्कम: ₹{req.amount}
                      </div>
                    )}
                  </div>

                  {/* Right: Uploaded Screenshot Thumbnail */}
                  <div className="w-24 sm:w-28 shrink-0 flex flex-col items-center justify-center">
                    {req.screenshotUrl ? (
                      <div className="relative group w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                        <img 
                          src={req.screenshotUrl} 
                          alt="Payment Proof" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          type="button"
                          onClick={() => setPreviewImage({ url: req.screenshotUrl!, title: `${req.studentName} - UPI Screenshot` })}
                          className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1 text-[10px] font-bold text-white transition-opacity"
                        >
                          <Eye className="w-5 h-5 text-amber-400" />
                          <span>झूम करा</span>
                        </button>
                      </div>
                    ) : (
                      <div className="w-full aspect-[3/4] rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-slate-600 p-2 text-center space-y-1">
                        <ImageIcon className="w-6 h-6 stroke-1" />
                        <span className="text-[9px]">स्क्रीनशॉट नाही</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Rejection Note if any */}
                {req.note && (
                  <div className="p-2 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                    <span className="font-bold text-amber-400">टीप:</span> {req.note}
                  </div>
                )}

                {/* Action Buttons: Approve & Reject */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    type="button"
                    disabled={processingId === req.id}
                    onClick={() => handleApprove(req)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
                      isApproved 
                        ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-950/50'
                    }`}
                  >
                    {processingId === req.id ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    )}
                    <span>{isApproved ? 'मंजूर आहे' : 'Approve (मंजूर करा)'}</span>
                  </button>

                  <button
                    type="button"
                    disabled={processingId === req.id}
                    onClick={() => handleReject(req)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      isRejected 
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                        : 'bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/40'
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>{isRejected ? 'नाकारले' : 'Reject (नाकारा)'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Screenshot Full Screen Zoom Modal */}
      {previewImage && (
        <div 
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 flex items-center justify-center animate-fade-in overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <span>{previewImage.title}</span>
              </span>
              <button
                onClick={() => setPreviewImage(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 overflow-auto flex items-center justify-center bg-black/60 flex-1">
              <img 
                src={previewImage.url} 
                alt="Payment Screenshot Full" 
                className="max-h-[75vh] w-auto object-contain rounded-lg border border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-3 bg-slate-950 border-t border-slate-800 text-center">
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="px-5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-xs"
              >
                बंद करा
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
