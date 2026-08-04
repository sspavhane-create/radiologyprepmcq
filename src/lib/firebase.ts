import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  signInAnonymously,
  signOut, 
  onAuthStateChanged,
  User,
  ConfirmationResult
} from 'firebase/auth';
import { 
  getFirestore, 
  initializeFirestore,
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  onSnapshot, 
  collection, 
  getDocs,
  query,
  where,
  enableIndexedDbPersistence
} from 'firebase/firestore';
import firebaseConfigJson from '../../firebase-applet-config.json';

const getEnv = (key: string): string | undefined => {
  try {
    if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
      const val = (import.meta as any).env[key];
      if (val) return val;
    }
  } catch {}
  try {
    if (typeof process !== 'undefined' && process.env) {
      const val = process.env[key];
      if (val) return val;
    }
  } catch {}
  return undefined;
};

const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API_KEY') || firebaseConfigJson.apiKey,
  authDomain: getEnv('VITE_FIREBASE_AUTH_DOMAIN') || firebaseConfigJson.authDomain,
  projectId: getEnv('VITE_FIREBASE_PROJECT_ID') || firebaseConfigJson.projectId,
  storageBucket: getEnv('VITE_FIREBASE_STORAGE_BUCKET') || firebaseConfigJson.storageBucket,
  messagingSenderId: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID') || firebaseConfigJson.messagingSenderId,
  appId: getEnv('VITE_FIREBASE_APP_ID') || firebaseConfigJson.appId,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

// Initialize Firestore with auto-detect long polling to prevent connection timeouts
const databaseId = firebaseConfigJson.firestoreDatabaseId || '(default)';
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
}, databaseId);

// Helper function to prevent operations from hanging if backend latency is high
export const promiseWithTimeout = <T>(
  promise: Promise<T>,
  ms: number = 8000,
  timeoutErrorMsg: string = 'Operation timed out'
): Promise<T> => {
  let timer: any;
  const timeoutPromise = new Promise<T>((_, reject) => {
    timer = setTimeout(() => {
      reject(new Error(timeoutErrorMsg));
    }, ms);
  });

  return Promise.race([
    promise.then((res) => {
      clearTimeout(timer);
      return res;
    }),
    timeoutPromise,
  ]);
};

// Enable IndexedDB offline persistence safely
if (typeof window !== 'undefined') {
  const isInIframe = (() => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  })();

  if (!isInIframe) {
    enableIndexedDbPersistence(db).catch((err) => {
      if (err.code === 'failed-precondition') {
        console.warn('Firestore offline persistence failed-precondition (multiple tabs open)');
      } else if (err.code === 'unimplemented') {
        console.warn('Firestore offline persistence is unimplemented in this browser');
      } else {
        console.warn('Could not enable Firestore offline persistence:', err.message || err);
      }
    });
  } else {
    console.info('Firestore: Running inside iframe, skipping offline IndexedDB persistence to avoid sandbox closing/hidden errors.');
  }
}

// Device ID management (unique per browser session)
export const getDeviceId = (): string => {
  try {
    let devId = localStorage.getItem('xray_prep_device_id');
    if (!devId) {
      const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
      const timeHex = Date.now().toString(36).substring(3, 7).toUpperCase();
      devId = `DEV-${randomHex}-${timeHex}`;
      localStorage.setItem('xray_prep_device_id', devId);
    }
    return devId;
  } catch {
    return 'DEV-XRAY-SESSION';
  }
};

export interface UserProfile {
  uid: string;
  phoneNumber: string;
  deviceId: string;
  isPremium: boolean;
  role?: string;
  studentName?: string;
  createdAt: string;
  lastLoginAt: string;
}

// User document helpers in Firestore
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      return snap.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

// Update user profile upon login and bind deviceId
export const registerUserDeviceAndLogin = async (
  user: User, 
  customDeviceId?: string,
  studentName?: string
): Promise<UserProfile> => {
  const currentDeviceId = customDeviceId || getDeviceId();
  let targetUid = user.uid;
  try {
    const storedUid = localStorage.getItem('xray_prep_logged_in_uid');
    if (storedUid) {
      targetUid = storedUid;
    }
  } catch (e) {}

  const now = new Date().toISOString();
  // Check if admin phone number or designated admin
  const isAdmin = targetUid.includes('9769441271') || user.phoneNumber === '+919769441271' || user.email === 'sspavhane@gmail.com';

  let profile: UserProfile = {
    uid: targetUid,
    phoneNumber: user.phoneNumber || '+919769441271',
    deviceId: currentDeviceId,
    isPremium: targetUid.startsWith('user-'), // If it is an access code login, it is premium-activated by default
    role: isAdmin ? 'admin' : 'user',
    studentName: studentName || 'अभ्यासक विद्यार्थी',
    createdAt: now,
    lastLoginAt: now,
  };

  try {
    const userRef = doc(db, 'users', targetUid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      const existing = snap.data() as UserProfile;
      profile = {
        ...existing,
        deviceId: currentDeviceId,
        lastLoginAt: now,
        studentName: studentName || existing.studentName || 'अभ्यासक विद्यार्थी',
        phoneNumber: user.phoneNumber || existing.phoneNumber || '9769441271',
        role: isAdmin ? 'admin' : (existing.role || 'user'),
      };
      await updateDoc(userRef, {
        deviceId: currentDeviceId,
        lastLoginAt: now,
        studentName: profile.studentName,
        phoneNumber: profile.phoneNumber,
        role: profile.role,
      });
    } else {
      await setDoc(userRef, profile);
    }
  } catch (err) {
    console.warn('Could not register user device in Firestore (offline/sandbox):', err);
  }

  return profile;
};

// Admin function: Activate or Deactivate Premium in Firestore
export const setFirestoreUserPremiumStatus = async (
  targetUid: string, 
  isPremium: boolean
): Promise<boolean> => {
  try {
    const userRef = doc(db, 'users', targetUid);
    await updateDoc(userRef, { isPremium });
    return true;
  } catch (error) {
    console.error('Failed to update premium status:', error);
    return false;
  }
};

// Admin function: List all registered users
export const getAllFirestoreUsers = async (): Promise<UserProfile[]> => {
  try {
    const usersCol = collection(db, 'users');
    const snap = await getDocs(usersCol);
    const users: UserProfile[] = [];
    snap.forEach((docSnap) => {
      users.push(docSnap.data() as UserProfile);
    });
    return users;
  } catch (error) {
    console.error('Error getting user list:', error);
    return [];
  }
};

// Single device session listener (Realtime Firestore listener)
export const subscribeToDeviceSession = (
  uid: string,
  currentDeviceId: string,
  onDeviceMismatch: () => void,
  onProfileUpdate: (profile: UserProfile) => void
) => {
  let targetUid = uid;
  try {
    const storedUid = localStorage.getItem('xray_prep_logged_in_uid');
    if (storedUid) {
      targetUid = storedUid;
    }
  } catch (e) {}

  const userRef = doc(db, 'users', targetUid);
  return onSnapshot(userRef, (docSnap) => {
    if (docSnap.exists()) {
      const profile = docSnap.data() as UserProfile;
      onProfileUpdate(profile);

      // Check single device binding
      if (profile.deviceId && profile.deviceId !== currentDeviceId) {
        console.warn(`Device mismatch detected! Profile device: ${profile.deviceId}, Current device: ${currentDeviceId}`);
        onDeviceMismatch();
      }
    }
  }, (err) => {
    console.error('Device session snapshot error:', err);
  });
};

// Allowed Phone Registration Interface
export interface AllowedPhone {
  id: string;
  phone: string;
  studentName: string;
  createdAt: string;
  isAllowed: boolean;
  accessCode?: string;
  boundDeviceId?: string;
}

// Check if phone number is registered / authorized
export const checkPhoneRegistered = async (phone: string): Promise<{ isRegistered: boolean; name?: string }> => {
  const cleanPhone = phone.replace(/\D/g, '').slice(-10);
  
  // Admin mobile is always registered
  if (cleanPhone === '9769441271') {
    return { isRegistered: true, name: 'ॲडमिन' };
  }

  try {
    // 1. Check in allowedPhones collection
    const allowedRef = doc(db, 'allowedPhones', cleanPhone);
    const allowedSnap = await getDoc(allowedRef);
    if (allowedSnap.exists() && allowedSnap.data().isAllowed !== false) {
      return { isRegistered: true, name: allowedSnap.data().studentName };
    }

    // 2. Check in users collection by phoneNumber
    const usersCol = collection(db, 'users');
    const q = query(usersCol, where('phoneNumber', '>=', cleanPhone));
    const querySnap = await getDocs(q);
    let matchedName = '';
    let found = false;
    querySnap.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.phoneNumber && data.phoneNumber.includes(cleanPhone)) {
        found = true;
        if (data.studentName) matchedName = data.studentName;
      }
    });

    if (found) {
      return { isRegistered: true, name: matchedName || 'विद्यार्थी' };
    }

    return { isRegistered: false };
  } catch (err) {
    console.error('Error checking phone registration:', err);
    // Default fallback check
    if (cleanPhone === '9769441271') return { isRegistered: true, name: 'ॲडमिन' };
    return { isRegistered: false };
  }
};

// Admin function: Add allowed student phone number
export const addAllowedPhone = async (phone: string, studentName: string, customCode?: string): Promise<{success: boolean, code?: string}> => {
  try {
    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) return { success: false };

    const accessCode = customCode && customCode.trim() ? customCode.trim() : Math.random().toString(36).substring(2, 8).toUpperCase();

    const allowedRef = doc(db, 'allowedPhones', cleanPhone);
    await setDoc(allowedRef, {
      id: cleanPhone,
      phone: cleanPhone,
      studentName: studentName || 'अभ्यासक विद्यार्थी',
      createdAt: new Date().toISOString(),
      isAllowed: true,
      accessCode: accessCode,
      boundDeviceId: null
    });
    return { success: true, code: accessCode };
  } catch (err) {
    console.error('Error adding allowed phone:', err);
    return { success: false };
  }
};

// Admin function: Get all allowed phone numbers
export const getAllowedPhones = async (): Promise<AllowedPhone[]> => {
  try {
    const allowedCol = collection(db, 'allowedPhones');
    const snap = await getDocs(allowedCol);
    const list: AllowedPhone[] = [];
    snap.forEach((docSnap) => {
      list.push(docSnap.data() as AllowedPhone);
    });
    return list;
  } catch (err) {
    console.error('Error getting allowed phones:', err);
    return [];
  }
};

// Admin function: Remove allowed phone
export const removeAllowedPhone = async (cleanPhone: string): Promise<boolean> => {
  try {
    const allowedRef = doc(db, 'allowedPhones', cleanPhone);
    await setDoc(allowedRef, { isAllowed: false }, { merge: true });
    return true;
  } catch (err) {
    console.error('Error removing allowed phone:', err);
    return false;
  }
};

// OTP Generation & Verification in Firestore
export const generateAndSaveOtp = async (phone: string): Promise<string> => {
  const cleanPhone = phone.replace(/\D/g, '').slice(-10);
  // Generate 6-digit numeric OTP
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
  try {
    const otpRef = doc(db, 'otpCodes', cleanPhone);
    await setDoc(otpRef, {
      phone: cleanPhone,
      otp: otpCode,
      createdAt: new Date().toISOString()
    });
  } catch (err) {
    console.error('Error saving OTP to Firestore:', err);
  }
  return otpCode;
};

export const verifyOtpCode = async (phone: string, inputOtp: string): Promise<boolean> => {
  const cleanPhone = phone.replace(/\D/g, '').slice(-10);
  const trimmedInput = inputOtp.trim();
  
  // Master bypass OTP for admin or fallback testing
  if (trimmedInput === 'Rudra@2018' || trimmedInput.toUpperCase() === 'RUDRA@2018' || trimmedInput === '976944') {
    return true;
  }

  try {
    const otpRef = doc(db, 'otpCodes', cleanPhone);
    const snap = await getDoc(otpRef);
    if (snap.exists()) {
      const data = snap.data();
      return data.otp === trimmedInput;
    }
  } catch (err) {
    console.error('Error verifying OTP from Firestore:', err);
  }
  return false;
};

// Admin function: Get current live OTP for a phone number
export const getLiveOtpForPhone = async (phone: string): Promise<string | null> => {
  try {
    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    const otpRef = doc(db, 'otpCodes', cleanPhone);
    const snap = await getDoc(otpRef);
    if (snap.exists()) {
      return snap.data().otp;
    }
  } catch (err) {
    console.error('Error fetching live OTP:', err);
  }
  return null;
};

// Validate Access Code and Bind Device
export const verifyAccessCodeAndLogin = async (
  phone: string, 
  inputCode: string, 
  deviceId: string,
  forceTransfer: boolean = false
): Promise<{ 
  success: boolean; 
  message: string; 
  name?: string; 
  uid?: string;
  needsTransferConfirm?: boolean;
  previousDeviceId?: string;
}> => {
  const cleanPhone = phone.replace(/\D/g, '').slice(-10);
  const trimmedCode = inputCode.trim();

  if (trimmedCode === 'Rudra@2018' || trimmedCode.toUpperCase() === 'RUDRA@2018') {
    return { success: true, message: 'लॉगिन यशस्वी (Premium Active)', name: 'Admin / Student', uid: `user-${cleanPhone || '9769441271'}` };
  }

  try {
    const allowedRef = doc(db, 'allowedPhones', cleanPhone);
    const snap = await getDoc(allowedRef);
    if (!snap.exists() || snap.data().isAllowed === false) {
      return { success: false, message: 'या मोबाईल नंबरला परवानगी नाही. कृपया ॲडमिनशी संपर्क साधा.' };
    }
    
    const data = snap.data() as AllowedPhone;
    if (data.accessCode !== trimmedCode) {
      return { success: false, message: 'चुकीचा ॲक्सेस कोड.' };
    }
    
    // Check device binding
    if (data.boundDeviceId && data.boundDeviceId !== deviceId && !forceTransfer) {
      return { 
        success: false, 
        needsTransferConfirm: true,
        previousDeviceId: data.boundDeviceId,
        message: 'हा कोड दुसऱ्या डिव्हाइसवर आधीपासून चालू आहे. तुम्हाला या सध्याच्या डिव्हाइसवर ट्रान्सफर करायचे आहे का?' 
      };
    }
    
    // Bind device if not bound or if forceTransfer is requested
    await updateDoc(allowedRef, { boundDeviceId: deviceId });
    
    // Create/update user in users collection
    const uid = `user-${cleanPhone}`;
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      uid,
      phoneNumber: `+91${cleanPhone}`,
      deviceId: deviceId,
      lastLogin: new Date().toISOString(),
      studentName: data.studentName,
      isPremium: true
    }, { merge: true });
    
    return { 
      success: true, 
      message: forceTransfer 
        ? 'लॉगिन यशस्विरीत्या या डिव्हाइसवर ट्रान्सफर झाले! जुने डिव्हाइस लॉग आउट झाले आहे.' 
        : 'लॉगिन यशस्वी!', 
      name: data.studentName, 
      uid: uid 
    };
  } catch (err) {
    console.error('Error verifying Access Code:', err);
    return { success: false, message: 'लॉगिन प्रक्रियेत त्रुटी आली. कृपया पुन्हा प्रयत्न करा.' };
  }
};

// Payment Request Interface & Firestore Functions
export interface PaymentRequest {
  id: string;
  userId: string;
  studentName: string;
  mobileNumber: string;
  transactionId: string;
  screenshotUrl?: string;
  amount?: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  processedAt?: string;
  note?: string;
}

export const submitPaymentRequest = async (
  requestData: Omit<PaymentRequest, 'id' | 'createdAt' | 'status'>
): Promise<{ success: boolean; id?: string; error?: string }> => {
  try {
    const requestsCol = collection(db, 'paymentRequests');
    const newDocRef = doc(requestsCol);
    const now = new Date().toISOString();
    const payload: PaymentRequest = {
      id: newDocRef.id,
      ...requestData,
      status: 'pending',
      createdAt: now,
    };
    await setDoc(newDocRef, payload);
    return { success: true, id: newDocRef.id };
  } catch (error) {
    console.error('Error submitting payment request:', error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
};

export const subscribeToPaymentRequests = (
  onData: (requests: PaymentRequest[]) => void
) => {
  const requestsCol = collection(db, 'paymentRequests');
  return onSnapshot(requestsCol, (snap) => {
    const list: PaymentRequest[] = [];
    snap.forEach((docSnap) => {
      list.push(docSnap.data() as PaymentRequest);
    });
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    onData(list);
  }, (err) => {
    console.error('Error listening to payment requests:', err);
  });
};

export const approvePaymentRequest = async (
  requestId: string,
  userId: string,
  mobileNumber?: string,
  studentName?: string
): Promise<boolean> => {
  try {
    const reqRef = doc(db, 'paymentRequests', requestId);
    const now = new Date().toISOString();
    await updateDoc(reqRef, {
      status: 'approved',
      processedAt: now,
    });

    if (userId) {
      await setFirestoreUserPremiumStatus(userId, true);
    }

    if (mobileNumber) {
      await addAllowedPhone(mobileNumber, studentName || 'प्रीमियम विद्यार्थी');
    }

    return true;
  } catch (err) {
    console.error('Error approving payment request:', err);
    return false;
  }
};

export const rejectPaymentRequest = async (
  requestId: string,
  userId: string,
  note?: string
): Promise<boolean> => {
  try {
    const reqRef = doc(db, 'paymentRequests', requestId);
    const now = new Date().toISOString();
    await updateDoc(reqRef, {
      status: 'rejected',
      processedAt: now,
      note: note || 'पेमेंट पडताळणी अयशस्वी/अवैध ट्रांझॅक्शन'
    });

    if (userId) {
      await setFirestoreUserPremiumStatus(userId, false);
    }

    return true;
  } catch (err) {
    console.error('Error rejecting payment request:', err);
    return false;
  }
};

export const getBreakingNews = async (): Promise<string[]> => {
  try {
    const docRef = doc(db, 'settings', 'breaking_news');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() && Array.isArray(docSnap.data().items)) {
      return docSnap.data().items;
    }
  } catch (err: any) {
    if (err?.message?.includes('offline') || err?.code === 'unavailable') {
      console.warn('Client is offline, using offline cached/default breaking news.');
    } else {
      console.warn('Could not fetch live breaking news settings:', err?.message || err);
    }
  }
  return [
    "📢 DHS Maharashtra Recruitment Updates",
    "📢 DMER Latest Notifications",
    "📢 Maharashtra Tantrik Vibhag Exam Updates",
    "📢 AIIMS Radiographer Recruitment",
    "📢 ESIC Radiographer Vacancy",
    "📢 Railway Radiographer Updates",
    "📢 AERB Radiation Safety Updates",
    "📢 New Mock Tests Added"
  ];
};

export const saveBreakingNews = async (items: string[]): Promise<boolean> => {
  try {
    const docRef = doc(db, 'settings', 'breaking_news');
    await setDoc(docRef, { items }, { merge: true });
    return true;
  } catch (err) {
    console.error('Error saving breaking news:', err);
    return false;
  }
};

import { CHAPTER_COLLECTION } from '../data/masterQuestionBank';

// Supabase / Cloud Firestore Real-time Auto-Sync for Questions
export const syncAll30ChaptersFromMasterToCloud = async (
  customQuestions: any[] = []
): Promise<{ success: boolean; totalSynced: number; chaptersCount: number; error?: string }> => {
  try {
    const chaptersCol = collection(db, 'public_mcqs');
    let totalSynced = 0;
    let chaptersCount = 0;

    // Group custom questions by chapterId or source_page
    const customByChapterId: Record<number, any[]> = {};
    customQuestions.forEach((q) => {
      const chId = Number(q.source_page || q.chapterId);
      if (chId && !isNaN(chId)) {
        if (!customByChapterId[chId]) customByChapterId[chId] = [];
        customByChapterId[chId].push(q);
      }
    });

    // Loop through all 30 chapter files (CHAPTER_COLLECTION)
    for (const chapMeta of CHAPTER_COLLECTION) {
      const chapterId = chapMeta.id;
      const baseQs = chapMeta.questionArray || [];
      const extraQs = customByChapterId[chapterId] || [];

      // Deduplicate questions by ID or question text
      const seenIds = new Set<string | number>();
      const combinedQs: any[] = [];

      [...baseQs, ...extraQs].forEach(q => {
        const key = q.id || q.question;
        if (!seenIds.has(key)) {
          seenIds.add(key);
          combinedQs.push({
            ...q,
            chapterId: chapterId,
            category: chapMeta.category
          });
        }
      });

      const docId = `chapter_${chapterId}`;
      const docRef = doc(chaptersCol, docId);

      // setDoc without merge so questions array is strictly updated to combinedQs (deletions reflected)
      await promiseWithTimeout(
        setDoc(
          docRef,
          {
            chapterId: chapterId,
            category: chapMeta.category,
            title: chapMeta.title,
            titleMr: chapMeta.titleMr,
            questionCount: combinedQs.length,
            questions: combinedQs,
            lastSyncedAt: new Date().toISOString(),
          }
        ),
        10000,
        `Cloud sync timed out for Chapter ${chapterId}`
      );

      totalSynced += combinedQs.length;
      chaptersCount += 1;
    }

    // Clean up obsolete non-chapter documents in public_mcqs collection
    try {
      const allDocsSnap = await promiseWithTimeout(getDocs(chaptersCol), 5000, 'Obsolete docs check timeout');
      allDocsSnap.forEach((docSnap) => {
        if (!docSnap.id.startsWith('chapter_')) {
          deleteDoc(docSnap.ref).catch(() => {});
        }
      });
    } catch (e) {
      console.warn('Note: obsolete doc cleanup:', e);
    }

    // Save master stats
    const statsDocRef = doc(db, 'settings', 'question_bank_stats');
    await promiseWithTimeout(
      setDoc(
        statsDocRef,
        {
          totalQuestionsCount: totalSynced,
          chaptersCount: chaptersCount,
          lastSyncTimestamp: new Date().toISOString(),
        },
        { merge: true }
      ),
      8000,
      'Stats sync timed out'
    );

    return { success: true, totalSynced, chaptersCount };
  } catch (err: any) {
    console.warn('Sync All 30 Chapters Error:', err);
    return { success: false, totalSynced: 0, chaptersCount: 0, error: err?.message || String(err) };
  }
};

export const syncAllChaptersToCloud = async (
  questionsList: any[]
): Promise<{ success: boolean; count: number; error?: string }> => {
  try {
    // Extract custom questions if a full list was passed, or sync custom questions directly
    const customQs = Array.isArray(questionsList)
      ? questionsList.filter(q => q.isCustom || q.batchId || q.importedAt || (typeof q.id === 'string' && String(q.id).startsWith('custom_')))
      : [];
    const res = await syncAll30ChaptersFromMasterToCloud(customQs);
    return { success: res.success, count: res.totalSynced, error: res.error };
  } catch (err: any) {
    console.warn('Cloud Sync Note:', err?.message || err);
    return { success: false, count: 0, error: err?.message || String(err) };
  }
};

export const fetchCloudQuestions = async (): Promise<any[]> => {
  try {
    const chaptersCol = collection(db, 'public_mcqs');
    const snap = await promiseWithTimeout(getDocs(chaptersCol), 8000, 'Cloud fetch timed out');
    const allQs: any[] = [];
    snap.forEach((docSnap) => {
      if (docSnap.id.startsWith('chapter_')) {
        const data = docSnap.data();
        if (Array.isArray(data.questions)) {
          allQs.push(...data.questions);
        }
      }
    });
    return allQs;
  } catch (err) {
    console.warn('Could not fetch cloud questions:', err);
    return [];
  }
};

export const subscribeToPublicMcqs = (onUpdate: (cloudQs: any[]) => void) => {
  try {
    const chaptersCol = collection(db, 'public_mcqs');
    return onSnapshot(chaptersCol, (snap) => {
      const allQs: any[] = [];
      snap.forEach((docSnap) => {
        if (docSnap.id.startsWith('chapter_')) {
          const data = docSnap.data();
          if (Array.isArray(data.questions)) {
            allQs.push(...data.questions);
          }
        }
      });
      onUpdate(allQs);
    }, (err) => {
      console.warn('public_mcqs live listener note:', err);
    });
  } catch (e) {
    return () => {};
  }
};

export { RecaptchaVerifier, signInWithPhoneNumber, signInAnonymously, signOut, onAuthStateChanged };
export type { User, ConfirmationResult };

