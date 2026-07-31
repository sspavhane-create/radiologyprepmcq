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

// Initialize Firestore with specific databaseId if configured
const databaseId = firebaseConfigJson.firestoreDatabaseId || '(default)';
export const db = getFirestore(app, databaseId);

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

export { RecaptchaVerifier, signInWithPhoneNumber, signInAnonymously, signOut, onAuthStateChanged };
export type { User, ConfirmationResult };
