import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Lock, 
  Smartphone, 
  RefreshCw, 
  Loader2,
  Key,
  Award,
  Users,
  UserPlus,
  Trash2,
  MessageCircle,
  Phone,
  CreditCard,
  Clock,
  Megaphone,
  FileJson
} from 'lucide-react';
import { Question } from '../types';
import { JsonUploadSection } from './JsonUploadSection';
import { 
  getAllFirestoreUsers, 
  setFirestoreUserPremiumStatus, 
  addAllowedPhone,
  getAllowedPhones,
  removeAllowedPhone,
  generateAndSaveOtp,
  getLiveOtpForPhone,
  subscribeToPaymentRequests,
  AllowedPhone,
  UserProfile,
  getBreakingNews,
  saveBreakingNews
} from '../lib/firebase';
import { generateUniqueDeviceKey } from '../lib/storage';
import { AdminPaymentDashboard } from './AdminPaymentDashboard';

interface AdminPanelModalProps {
  onClose: () => void;
  onStatusUpdated?: () => void;
  questions?: Question[];
  onAddMultipleQuestions?: (newQs: Question[]) => void;
  onRefreshQuestions?: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({ 
  onClose, 
  onStatusUpdated,
  questions = [],
  onAddMultipleQuestions = () => {},
  onRefreshQuestions
}) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  
  const [activeTab, setActiveTab] = useState<'phones' | 'payments' | 'users' | 'news' | 'questions' | 'security'>('phones');
  const [pendingPaymentCount, setPendingPaymentCount] = useState<number>(0);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [updatingUid, setUpdatingUid] = useState<string | null>(null);

  // Admin password change states
  const [oldPinInput, setOldPinInput] = useState('');
  const [newPinInput, setNewPinInput] = useState('');
  const [confirmPinInput, setConfirmPinInput] = useState('');

  const getAdminPin = (): string => {
    return localStorage.getItem('xray_admin_pin') || '9769441271';
  };

  const setAdminPin = (pin: string) => {
    localStorage.setItem('xray_admin_pin', pin);
  };

  const handleChangeAdminPin = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPin = getAdminPin();
    if (oldPinInput !== currentPin) {
      alert('जुना पिन चुकीचा आहे!');
      return;
    }
    if (!newPinInput || newPinInput.length < 4) {
      alert('नवीन पिन किमान ४ अंकी किंवा अक्षरी असावा.');
      return;
    }
    if (newPinInput !== confirmPinInput) {
      alert('नवीन पिन आणि कन्फर्म पिन जुळत नाहीत!');
      return;
    }
    setAdminPin(newPinInput);
    setOldPinInput('');
    setNewPinInput('');
    setConfirmPinInput('');
    alert('ॲडमिन पिन यशस्वीरित्या बदलला गेला आहे!');
  };

  // News ticker states
  const [newsItems, setNewsItems] = useState<string[]>([]);
  const [newNewsItem, setNewNewsItem] = useState<string>('');
  const [savingNews, setSavingNews] = useState<boolean>(false);

  // Subscribe to pending payments to show live badge count
  useEffect(() => {
    const unsub = subscribeToPaymentRequests((requests) => {
      const pending = requests.filter(r => r.status === 'pending').length;
      setPendingPaymentCount(pending);
    });
    return () => unsub();
  }, []);
  
  // Custom Key Gen State
  const [genDevId, setGenDevId] = useState('');
  const [genPhone, setGenPhone] = useState('');
  const [createdKey, setCreatedKey] = useState<string | null>(null);

  // Allowed Phone Registration & OTP State
  const [allowedList, setAllowedList] = useState<AllowedPhone[]>([]);
  const [newPhone, setNewPhone] = useState('');
  const [newName, setNewName] = useState('');
  const [addingPhone, setAddingPhone] = useState(false);
  const [activeOtps, setActiveOtps] = useState<{ [phone: string]: string }>({});

  const fetchUsersAndPhones = async () => {
    setLoading(true);
    const [userList, phonesList, newsList] = await Promise.all([
      getAllFirestoreUsers(),
      getAllowedPhones(),
      getBreakingNews()
    ]);
    setUsers(userList);
    setAllowedList(phonesList.filter(p => p.isAllowed !== false));
    setNewsItems(newsList);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsersAndPhones();
  }, []);

  const handleTogglePremium = async (targetUid: string, currentStatus: boolean) => {
    setUpdatingUid(targetUid);
    const newStatus = !currentStatus;
    const success = await setFirestoreUserPremiumStatus(targetUid, newStatus);
    
    if (success) {
      setUsers(prev => prev.map(u => u.uid === targetUid ? { ...u, isPremium: newStatus } : u));
      if (onStatusUpdated) onStatusUpdated();
    } else {
      alert('प्रीमियम स्टेटस बदलण्यात त्रुटी आली.');
    }
    setUpdatingUid(null);
  };

  const [newCode, setNewCode] = useState('');

  const handleAddAllowedPhone = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = newPhone.replace(/\D/g, '');
    if (clean.length < 10) {
      alert('कृपया वैध १० अंकी मोबाईल नंबर टाका.');
      return;
    }
    setAddingPhone(true);
    const result = await addAllowedPhone(clean, newName || 'अभ्यासक विद्यार्थी', newCode);
    if (result.success) {
      setNewPhone('');
      setNewName('');
      setNewCode('');
      await fetchUsersAndPhones();
      alert(`मोबाईल नंबर ॲक्सेस लिस्टमध्ये समाविष्ट झाला! ॲक्सेस कोड: ${result.code}`);
    } else {
      alert('नंबर ॲड करण्यात त्रुटी आली.');
    }
    setAddingPhone(false);
  };

  const handleRemovePhone = async (cleanPhone: string) => {
    if (window.confirm(`नक्की नंबर ${cleanPhone} ॲक्सेस यादीतून काढायचा?`)) {
      await removeAllowedPhone(cleanPhone);
      fetchUsersAndPhones();
    }
  };

  const handleGenerateOrGetOtp = async (cleanPhone: string) => {
    let otp = await getLiveOtpForPhone(cleanPhone);
    if (!otp) {
      otp = await generateAndSaveOtp(cleanPhone);
    }
    setActiveOtps(prev => ({ ...prev, [cleanPhone]: otp }));
  };

  const filteredUsers = users.filter(u => {
    const q = searchQuery.toLowerCase();
    return (
      (u.studentName && u.studentName.toLowerCase().includes(q)) ||
      (u.phoneNumber && u.phoneNumber.includes(q)) ||
      (u.deviceId && u.deviceId.toLowerCase().includes(q)) ||
      (u.uid && u.uid.toLowerCase().includes(q))
    );
  });

  const handleGenerateKey = () => {
    if (!genDevId.trim()) {
      alert('कृपया विद्यार्थ्याचा Device ID प्रविष्ट करा.');
      return;
    }
    const key = generateUniqueDeviceKey(genDevId.trim(), genPhone.trim());
    setCreatedKey(key);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 flex items-center justify-center animate-fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/50 rounded-2xl sm:rounded-3xl text-slate-100 shadow-2xl shadow-amber-950/40 my-auto flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Sticky Header */}
        <div className="p-3 sm:p-5 border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-20 flex flex-col gap-2.5 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h2 className="text-sm sm:text-lg font-black text-white flex items-center gap-1.5 leading-tight">
                  <span>ॲडमिन कंट्रोल पॅनेल (Admin Panel)</span>
                  <span className="text-[9px] sm:text-[10px] bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded-full border border-amber-500/30 shrink-0">
                    Shankar Sir Master
                  </span>
                </h2>
                <p className="text-[10px] sm:text-[11px] text-slate-400">
                  मोबाईल नंबर रजिस्टर करा, सिक्युरिटी की व्यवस्थापित करा आणि पेमेंट विनंत्या १-क्लिकने ॲप्रूव्ह करा.
                </p>
              </div>
            </div>

            <button 
              type="button"
              onClick={onClose}
              className="text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 active:bg-amber-500 active:text-slate-950 p-2 sm:p-2.5 rounded-xl transition-all shrink-0 flex items-center justify-center gap-1 text-xs font-bold border border-slate-700 shadow-sm cursor-pointer z-30"
              title="पॅनेल बंद करा"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline">बंद करा</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          {isAdminAuthenticated && (
          <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-950 p-1 sm:p-1.5 rounded-2xl border border-slate-800 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('phones')}
              className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'phones'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>रजिस्टर मोबाईल व सिक्युरिटी की ({allowedList.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('payments')}
              className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'payments'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>पेमेंट विनंत्या (Payments)</span>
              {pendingPaymentCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[10px] font-black animate-pulse">
                  {pendingPaymentCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('users')}
              className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'users'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>सर्व विद्यार्थी ({users.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('news')}
              className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'news'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Megaphone className="w-4 h-4" />
              <span>घोषणा / News ({newsItems.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('questions')}
              className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'questions'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <FileJson className="w-4 h-4 text-slate-950" />
              <span>📁 Questions & JSON Upload</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('security')}
              className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'security'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Key className="w-4 h-4" />
              <span>🔐 पासवर्ड बदला</span>
            </button>
          </div>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1">
          {!isAdminAuthenticated ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-2">
                <Lock className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white">ॲडमिन पिन टाका</h3>
              <p className="text-xs text-slate-400 text-center max-w-xs">
                पॅनेल वापरण्यासाठी सुरक्षित ॲडमिन पिन (PIN) प्रविष्ट करा.
              </p>
              <div className="flex items-center gap-2 w-full max-w-xs mt-4">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (pinInput === getAdminPin()) setIsAdminAuthenticated(true);
                      else alert('चुकीचा पिन!');
                    }
                  }}
                  placeholder="PIN प्रविष्ट करा"
                  className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-center text-lg font-mono text-amber-300 focus:outline-none focus:border-amber-400"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (pinInput === getAdminPin()) setIsAdminAuthenticated(true);
                  else alert('चुकीचा पिन!');
                }}
                className="w-full max-w-xs bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-xl transition-all"
              >
                लॉगिन करा
              </button>
            </div>
          ) : (
            <>
        {/* TAB 6: Change Admin Password / PIN */}
        {activeTab === 'security' && (
          <div className="space-y-4 animate-fadeIn max-w-md mx-auto py-4">
            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">ॲडमिन पिन / पासवर्ड बदल (Change Admin PIN)</h3>
                  <p className="text-[11px] text-slate-400">सुरक्षिततेसाठी तुम्ही तुमचा ॲडमिन पिन बदलू शकता.</p>
                </div>
              </div>

              <form onSubmit={handleChangeAdminPin} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">जुना ॲडमिन पिन (Current PIN):</label>
                  <input
                    type="password"
                    value={oldPinInput}
                    onChange={(e) => setOldPinInput(e.target.value)}
                    placeholder="उदा. 9769441271"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-amber-300 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">नवीन ॲडमिन पिन (New PIN):</label>
                  <input
                    type="password"
                    value={newPinInput}
                    onChange={(e) => setNewPinInput(e.target.value)}
                    placeholder="नवीन पिन टाका (किमान ४ अंक)"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-emerald-300 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">नवीन पिन कन्फर्म करा (Confirm New PIN):</label>
                  <input
                    type="password"
                    value={confirmPinInput}
                    onChange={(e) => setConfirmPinInput(e.target.value)}
                    placeholder="पुन्हा नवीन पिन टाका"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-emerald-300 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 mt-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ॲडमिन पासवर्ड अपडेट करा</span>
                </button>
              </form>
            </div>
          </div>
        )}
        {/* TAB 4: News Ticker Manager */}
        {activeTab === 'news' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between text-xs font-bold text-teal-300">
              <span className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 text-sm">
                  <Megaphone className="w-5 h-5 text-teal-400 animate-pulse" />
                  <span>ब्रेकिंग न्यूज स्क्रोलर व्यवस्थापन (Breaking News Manager)</span>
                </span>
                <span className="text-slate-400 text-[11px] font-normal">
                  येथे टाकलेल्या घोषणा डॅशबोर्डवरील स्क्रोल पट्टीमध्ये उजवीकडून डावीकडे स्क्रोल होत राहतील.
                </span>
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNewsItem}
                  onChange={(e) => setNewNewsItem(e.target.value)}
                  placeholder="नवीन घोषणा लिहा (उदा. 📢 DMER हॉल तिकीट उपलब्ध झाले...)"
                  className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-teal-400"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!newNewsItem.trim()) return;
                    setNewsItems([...newsItems, newNewsItem.trim()]);
                    setNewNewsItem('');
                  }}
                  className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-black transition-colors"
                >
                  सूचीमध्ये जोडा
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 block">वर्तमान घोषणा सूची (खालील घोषणा स्क्रोल होतील):</label>
                {newsItems.length === 0 ? (
                  <p className="text-xs text-slate-500 italic py-2">घोषणा सूची रिकामी आहे. कृपया नवीन घोषणा जोडा.</p>
                ) : (
                  <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                    {newsItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2.5 bg-slate-900 border border-slate-850 rounded-lg text-xs gap-3">
                        <span className="text-slate-200 truncate flex-1">{item}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setNewsItems(newsItems.filter((_, i) => i !== index));
                          }}
                          className="text-rose-400 hover:text-rose-300 p-1 bg-rose-950/40 rounded border border-rose-500/20 shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-end">
                <button
                  type="button"
                  disabled={savingNews}
                  onClick={async () => {
                    setSavingNews(true);
                    const success = await saveBreakingNews(newsItems);
                    setSavingNews(false);
                    if (success) {
                      alert('घोषणा यशस्वीरित्या सेव्ह झाल्या! डॅशबोर्डवर तात्काळ अपडेट दिसेल.');
                    } else {
                      alert('सेव्ह करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
                    }
                  }}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                >
                  {savingNews ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>डॅशबोर्डवर सेव्ह व अपडेट करा</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Questions JSON Upload & Supabase Sync */}
        {activeTab === 'questions' && (
          <div className="space-y-4 animate-fadeIn">
            <JsonUploadSection
              questions={questions}
              onAddMultipleQuestions={onAddMultipleQuestions}
              onRefreshQuestions={onRefreshQuestions}
            />
          </div>
        )}

        {/* TAB 1: Payment Requests Dashboard */}
        {activeTab === 'payments' && (
          <AdminPaymentDashboard onStatusUpdated={fetchUsersAndPhones} />
        )}

        {/* TAB 2: Registered Mobile Numbers & OTP Manager Box */}
        {activeTab === 'phones' && (
          <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-teal-300">
            <span className="flex items-center gap-1.5">
              <UserPlus className="w-4 h-4 text-teal-400" />
              <span>रजिस्टर मोबाईल व सिक्युरिटी की व्यवस्थापन (Security Key & Phone Manager):</span>
            </span>
            <span className="text-[10px] bg-teal-950 text-teal-300 font-mono px-2 py-0.5 rounded border border-teal-500/30">
              Strict Registered Mobile Login
            </span>
          </div>

          <form onSubmit={handleAddAllowedPhone} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="विद्यार्थ्याचे नाव (उदा. राहुल शिंदे)"
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-teal-400"
            />
            <input
              type="tel"
              maxLength={10}
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value.replace(/\D/g, ''))}
              placeholder="१० अंकी मोबाईल नं. (उदा. 9822001122)"
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-teal-300 font-mono focus:outline-none focus:border-teal-400"
            />
            <input
              type="text"
              value={newCode}
              onChange={(e) => setNewCode(e.target.value.toUpperCase())}
              placeholder="ॲक्सेस कोड (पर्यायी)"
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-amber-300 font-mono uppercase focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={addingPhone}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-3 py-2 rounded-xl text-xs flex items-center justify-center gap-1 shadow-md transition-all"
            >
              {addingPhone ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Key className="w-3.5 h-3.5" />
                  <span>रजिस्टर करा</span>
                </>
              )}
            </button>
          </form>

          {allowedList.length > 0 && (
            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="text-[11px] font-bold text-slate-400">
                रजिस्टर मोबाईल नंबर व ॲक्सेस कोड यादी ({allowedList.length}):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                {allowedList.map((item) => {
                  const clean = item.phone.slice(-10);
                  const activeCode = item.accessCode || 'नवीन नाही';
                  const waShareUrl = `https://wa.me/91${clean}?text=${encodeURIComponent(`नमस्कार ${item.studentName}, तुमचा X-Ray Prep ॲप लॉगिन ॲक्सेस कोड: ${activeCode}`)}`;

                  return (
                    <div key={item.id} className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs flex flex-col gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-white text-[11px] flex items-center gap-1">
                            <span>{item.studentName}</span>
                            <span className="text-teal-400 font-mono text-[10px]">+91 {clean}</span>
                          </div>
                          <div className="text-[11px] font-mono text-amber-300 font-bold flex items-center gap-1 mt-0.5">
                            <span>Code:</span>
                            <span className="bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/40 text-amber-300 text-xs">
                              {activeCode}
                            </span>
                          </div>
                          {item.boundDeviceId && (
                            <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                              Device: {item.boundDeviceId}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <a
                            href={waShareUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 rounded-lg border border-emerald-500/30 text-[10px] flex items-center gap-1 font-bold"
                            title="WhatsApp वर कोड पाठवा"
                          >
                            <MessageCircle className="w-3 h-3 text-emerald-400" />
                          </a>
                          <button
                            type="button"
                            onClick={() => handleRemovePhone(clean)}
                            className="p-1.5 bg-rose-950 hover:bg-rose-900 text-rose-300 rounded-lg border border-rose-500/30"
                            title="ॲक्सेस रद्द करा"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        {/* Key Generator Tool Card */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-amber-300">
            <span className="flex items-center gap-1.5">
              <Key className="w-4 h-4 text-amber-400" />
              <span>१-डिव्हाइस युनिक ॲक्टिव्हेशन की जनरेटर:</span>
            </span>
            <span className="text-[10px] text-teal-400 font-mono">
              Hardware Bound
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <input
              type="text"
              value={genDevId}
              onChange={(e) => setGenDevId(e.target.value)}
              placeholder="Device ID (उदा. DEV-98A1-44B2)"
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-amber-300 font-mono uppercase focus:outline-none"
            />
            <input
              type="text"
              value={genPhone}
              onChange={(e) => setGenPhone(e.target.value)}
              placeholder="मोबाईल नं. (उदा. 9769441271)"
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none"
            />
            <button
              onClick={handleGenerateKey}
              className="bg-gradient-to-r from-amber-500 to-teal-400 hover:brightness-110 text-slate-950 font-extrabold px-3 py-2 rounded-xl text-xs flex items-center justify-center gap-1 shadow-md"
            >
              <Award className="w-4 h-4" />
              <span>Key जनरेट करा</span>
            </button>
          </div>

          {createdKey && (
            <div className="p-3 bg-slate-900 border border-teal-500/40 rounded-xl flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 text-[10px]">तयार केलेली सिक्युरिटी की: </span>
                <span className="font-mono font-black text-amber-300 tracking-wider text-sm ml-2">
                  {createdKey}
                </span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(createdKey);
                  alert('की कॉपी झाली!');
                }}
                className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 px-3 py-1 rounded-lg border border-teal-500/40 text-[11px] font-bold"
              >
                कॉपी करा
              </button>
            </div>
          )}
        </div>
      </div>
        )}

        {/* TAB 3: Registered Users List */}
        {activeTab === 'users' && (
          <div className="space-y-4">
            {/* User Search & Refresh Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="नाव, मोबाईल किंवा Device ID द्वारे शोधा..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end text-xs text-slate-400">
                <span className="flex items-center gap-1 font-bold">
                  <Users className="w-4 h-4 text-teal-400" />
                  <span>एकूण विद्यार्थी: {filteredUsers.length}</span>
                </span>
                <button
                  onClick={fetchUsersAndPhones}
                  disabled={loading}
                  className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-teal-300 px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-bold"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>रिफ्रेश</span>
                </button>
              </div>
            </div>

        {/* User List Table */}
        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
          {loading ? (
            <div className="py-12 text-center space-y-2 text-slate-400 text-xs">
              <Loader2 className="w-6 h-6 animate-spin text-teal-400 mx-auto" />
              <p>Firestore मधील विद्यार्थी माहिती लोड होत आहे...</p>
            </div>
          ) : filteredUsers.length > 0 ? (
            filteredUsers.map((u) => (
              <div 
                key={u.uid}
                className={`p-3.5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                  u.isPremium 
                    ? 'bg-emerald-950/30 border-emerald-500/30' 
                    : 'bg-slate-950 border-slate-800'
                }`}
              >
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <span>{u.studentName || 'अभ्यासक विद्यार्थी'}</span>
                    <span className="text-teal-400 font-mono text-[11px] bg-teal-950 px-2 py-0.5 rounded border border-teal-500/20">
                      {u.phoneNumber}
                    </span>
                    {u.role === 'admin' && (
                      <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded">
                        ADMIN
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-3 h-3 text-slate-500" />
                      <span>Device: {u.deviceId || 'N/A'}</span>
                    </span>
                    <span>• UID: {u.uid.slice(0, 10)}...</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <div className="text-right">
                    {u.isPremium ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>प्रीमियम ॲक्टिव्ह 🟢</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span>फ्री व्हर्जन 🔒</span>
                      </span>
                    )}
                  </div>

                  <button
                    disabled={updatingUid === u.uid}
                    onClick={() => handleTogglePremium(u.uid, u.isPremium)}
                    className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all flex items-center gap-1 shadow-md ${
                      u.isPremium
                        ? 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                    }`}
                  >
                    {updatingUid === u.uid ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : u.isPremium ? (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        <span>डीॲक्टिव्हेट करा</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>प्रीमियम अनलॉक करा</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-slate-400">
              कोणताही विद्यार्थी सापडला नाही.
            </div>
          )}
        </div>
      </div>
      )}
      </>
        )}
        </div>

        {/* Sticky Footer Bar */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/95 flex items-center justify-between shrink-0">
          <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Shankar Sir Admin Panel
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors border border-slate-700"
          >
            पॅनेल बंद करा (Close)
          </button>
        </div>
      </div>
    </div>
  );
};

