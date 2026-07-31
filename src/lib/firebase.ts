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
  onSnapshot, 
  collection, 
  getDocs,
  query,
  where
} from 'firebase/firestore';
import firebaseConfigJson from '../../firebase-applet-config.json';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || firebaseConfigJson.apiKey,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || firebaseConfigJson.authDomain,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || firebaseConfigJson.projectId,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || firebaseConfigJson.storageBucket,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || firebaseConfigJson.messagingSenderId,
  appId: process.env.VITE_FIREBASE_APP_ID || firebaseConfigJson.appId,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

// Initialize Firestore with specific databaseId if configured and force long polling to bypass proxy issues
const databaseId = firebaseConfigJson.firestoreDatabaseId || '(default)';
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, databaseId);

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
  const userRef = doc(db, 'users', user.uid);
  const snap = await getDoc(userRef);

  const now = new Date().toISOString();
  let profile: UserProfile;

  // Check if admin phone number or designated admin
  const isAdmin = user.phoneNumber === '+919769441271' || user.email === 'sspavhane@gmail.com';

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
    profile = {
      uid: user.uid,
      phoneNumber: user.phoneNumber || '+919769441271',
      deviceId: currentDeviceId,
      isPremium: false,
      role: isAdmin ? 'admin' : 'user',
      studentName: studentName || 'अभ्यासक विद्यार्थी',
      createdAt: now,
      lastLoginAt: now,
    };
    await setDoc(userRef, profile);
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
  const userRef = doc(db, 'users', uid);
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
export const addAllowedPhone = async (phone: string, studentName: string): Promise<boolean> => {
  try {
    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) return false;

    const allowedRef = doc(db, 'allowedPhones', cleanPhone);
    await setDoc(allowedRef, {
      id: cleanPhone,
      phone: cleanPhone,
      studentName: studentName || 'अभ्यासक विद्यार्थी',
      createdAt: new Date().toISOString(),
      isAllowed: true
    });
    return true;
  } catch (err) {
    console.error('Error adding allowed phone:', err);
    return false;
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
  if (trimmedInput === '123456' || trimmedInput === '976944') {
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

export { RecaptchaVerifier, signInWithPhoneNumber, signInAnonymously, signOut, onAuthStateChanged };
export type { User, ConfirmationResult };

