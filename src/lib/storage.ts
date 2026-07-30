import { Question, QuizSession, QuestionBookmark } from '../types';
import { INITIAL_QUESTIONS } from '../data/initialQuestions';

const STORAGE_KEYS = {
  BOOKMARKS: 'xray_prep_bookmarks',
  SESSIONS: 'xray_prep_sessions',
  CUSTOM_QUESTIONS: 'xray_prep_custom_questions',
  FLASHCARD_CONFIDENCE: 'xray_prep_flashcard_confidence',
  PREMIUM_UNLOCKED: 'xray_prep_premium_unlocked',
  DEVICE_ID: 'xray_prep_device_id',
  ACTIVATION_INFO: 'xray_prep_activation_info',
};

// Generate or retrieve a persistent Unique Device ID for this browser/device
export const getDeviceId = (): string => {
  try {
    let devId = localStorage.getItem(STORAGE_KEYS.DEVICE_ID);
    if (!devId) {
      const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
      const timeHex = Date.now().toString(36).substring(3, 7).toUpperCase();
      devId = `DEV-${randomHex}-${timeHex}`;
      localStorage.setItem(STORAGE_KEYS.DEVICE_ID, devId);
    }
    return devId;
  } catch {
    return 'DEV-XRAY-8821';
  }
};

// Master static keys and dynamic device-bound keys generator
const STATIC_MASTER_KEYS = [
  'SHANKAR2026',
  'PAVHANE2026',
  'PREMIUM2026',
  'RADIOLOGY2026',
  'SP9769441271',
  'XRAY2026',
  'AROGYA2026'
];

// Generate a deterministic unique 1-Device key for a given Device ID or Student Phone
export const generateUniqueDeviceKey = (devId: string, phoneSuffix?: string): string => {
  const cleanId = devId.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  let hash = 0;
  for (let i = 0; i < cleanId.length; i++) {
    hash = (hash << 5) - hash + cleanId.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash).toString(36).toUpperCase().padStart(5, 'X').slice(0, 5);
  const suffix = phoneSuffix ? phoneSuffix.replace(/\D/g, '').slice(-4) : '2026';
  return `SP-${positiveHash}-${suffix}`;
};

export interface ActivationDetails {
  isUnlocked: boolean;
  keyUsed: string;
  boundDeviceId: string;
  activatedAt: string;
  studentName?: string;
  studentPhone?: string;
}

export const getActivationDetails = (): ActivationDetails | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVATION_INFO);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const validateAndUnlockKey = (
  inputKey: string,
  studentName?: string,
  studentPhone?: string
): { success: boolean; message: string } => {
  const code = inputKey.trim().toUpperCase();
  const currentDevId = getDeviceId();

  if (!code) {
    return { success: false, message: '❌ कृपया अधिकृत सिक्युरिटी की प्रविष्ट करा.' };
  }

  // Calculate device-specific valid key for current device
  const expectedDeviceKey = generateUniqueDeviceKey(currentDevId, studentPhone);

  // Check if input matches master key OR current device's unique key OR any generic SP-key format
  const isMasterKey = STATIC_MASTER_KEYS.includes(code);
  const isDeviceMatch = code === expectedDeviceKey;
  const isCustomSPKey = code.startsWith('SP-') && code.length >= 8;

  if (isMasterKey || isDeviceMatch || isCustomSPKey) {
    const info: ActivationDetails = {
      isUnlocked: true,
      keyUsed: code,
      boundDeviceId: currentDevId,
      activatedAt: new Date().toLocaleString('mr-IN'),
      studentName: studentName || 'अधिकृत विद्यार्थी',
      studentPhone: studentPhone || '',
    };

    localStorage.setItem(STORAGE_KEYS.PREMIUM_UNLOCKED, 'true');
    localStorage.setItem(STORAGE_KEYS.ACTIVATION_INFO, JSON.stringify(info));

    return {
      success: true,
      message: `✅ सिक्युरिटी की व्हेरीफाय झाली! प्रीमियम व्हर्जन या डिव्हाइसवर (${currentDevId}) १ एक्टिव्ह सत्रासाठी सुरक्षित अनलॉक झाले.`,
    };
  }

  return {
    success: false,
    message: `❌ अयोग्य सिक्युरिटी की! ही की या डिव्हाइससाठी (${currentDevId}) अवैध आहे. शंकर सर (९७६९४४१२७१) यांच्याकडून आपल्या डिव्हाइससाठी युनिक की मिळवा.`,
  };
};

export const getIsPremiumUnlocked = (): boolean => {
  try {
    const unlocked = localStorage.getItem(STORAGE_KEYS.PREMIUM_UNLOCKED) === 'true';
    if (!unlocked) return false;

    // Verify session device binding: must match this device's unique ID
    const info = getActivationDetails();
    if (info && info.boundDeviceId) {
      const currentDevId = getDeviceId();
      if (info.boundDeviceId !== currentDevId) {
        // Device mismatch - lock out illegally copied session data
        return false;
      }
    }
    return true;
  } catch {
    return false;
  }
};

export const setPremiumUnlocked = (unlocked: boolean = true): boolean => {
  try {
    if (!unlocked) {
      localStorage.removeItem(STORAGE_KEYS.PREMIUM_UNLOCKED);
      localStorage.removeItem(STORAGE_KEYS.ACTIVATION_INFO);
    } else {
      const currentDevId = getDeviceId();
      const info: ActivationDetails = {
        isUnlocked: true,
        keyUsed: 'PAVHANE2026',
        boundDeviceId: currentDevId,
        activatedAt: new Date().toLocaleString('mr-IN'),
      };
      localStorage.setItem(STORAGE_KEYS.PREMIUM_UNLOCKED, 'true');
      localStorage.setItem(STORAGE_KEYS.ACTIVATION_INFO, JSON.stringify(info));
    }
    return unlocked;
  } catch {
    return false;
  }
};

export const getBookmarks = (): QuestionBookmark[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const toggleBookmark = (questionId: number, notes?: string): QuestionBookmark[] => {
  const current = getBookmarks();
  const existingIndex = current.findIndex(b => b.questionId === questionId);
  let updated: QuestionBookmark[];

  if (existingIndex >= 0) {
    updated = current.filter(b => b.questionId !== questionId);
  } else {
    updated = [...current, { questionId, addedAt: new Date().toISOString(), notes }];
  }

  localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  return updated;
};

export const isBookmarked = (questionId: number): boolean => {
  const bookmarks = getBookmarks();
  return bookmarks.some(b => b.questionId === questionId);
};

export const getQuizSessions = (): QuizSession[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveQuizSession = (session: QuizSession): QuizSession[] => {
  const current = getQuizSessions();
  const updated = [session, ...current];
  localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(updated));
  return updated;
};

export const getCustomQuestions = (): Question[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveCustomQuestion = (question: Question): Question[] => {
  const current = getCustomQuestions();
  const updated = [...current, question];
  localStorage.setItem(STORAGE_KEYS.CUSTOM_QUESTIONS, JSON.stringify(updated));
  return updated;
};

export const getAllQuestions = (): Question[] => {
  const custom = getCustomQuestions();
  return [...INITIAL_QUESTIONS, ...custom];
};

export const getFlashcardConfidence = (): Record<number, 'again' | 'hard' | 'good' | 'easy'> => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.FLASHCARD_CONFIDENCE);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const setFlashcardConfidence = (questionId: number, rating: 'again' | 'hard' | 'good' | 'easy') => {
  const current = getFlashcardConfidence();
  current[questionId] = rating;
  localStorage.setItem(STORAGE_KEYS.FLASHCARD_CONFIDENCE, JSON.stringify(current));
  return current;
};
