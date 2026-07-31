import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Lock, 
  Unlock, 
  UserCheck, 
  Smartphone, 
  RefreshCw, 
  Loader2,
  Key,
  Award,
  Users
} from 'lucide-react';
import { 
  getAllFirestoreUsers, 
  setFirestoreUserPremiumStatus, 
  UserProfile 
} from '../lib/firebase';
import { generateUniqueDeviceKey } from '../lib/storage';

interface AdminPanelModalProps {
  onClose: () => void;
  onStatusUpdated?: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({ onClose, onStatusUpdated }) => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [updatingUid, setUpdatingUid] = useState<string | null>(null);
  
  // Custom Key Gen State
  const [genDevId, setGenDevId] = useState('');
  const [genPhone, setGenPhone] = useState('');
  const [createdKey, setCreatedKey] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const list = await getAllFirestoreUsers();
    setUsers(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-amber-500/50 rounded-3xl max-w-3xl w-full p-5 sm:p-7 text-slate-100 shadow-2xl space-y-5 relative max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <span>ॲडमिन कंट्रोल पॅनेल (Shankar Sir Admin Panel)</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded-full border border-amber-500/30">
                Firestore Realtime Database
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              विद्यार्थ्यांचे प्रीमियम स्टेटस Firestore मध्ये थेट ॲक्टिव्हेट किंवा डीॲक्टिव्हेट करा.
            </p>
          </div>
        </div>

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
              onClick={fetchUsers}
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
                        <Unlock className="w-3.5 h-3.5" />
                        <span>प्रीमियम अनलॉक करा</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="py-8 text-center text-xs text-slate-400">
              काहीही जुळणारे विद्यार्थी सापडले नाहीत.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
