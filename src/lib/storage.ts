import { Question, QuizSession, QuestionBookmark } from '../types';
import { INITIAL_QUESTIONS } from '../data/initialQuestions';

const STORAGE_KEYS = {
  BOOKMARKS: 'xray_prep_bookmarks',
  SESSIONS: 'xray_prep_sessions',
  CUSTOM_QUESTIONS: 'xray_prep_custom_questions',
  FLASHCARD_CONFIDENCE: 'xray_prep_flashcard_confidence',
  PREMIUM_UNLOCKED: 'xray_prep_premium_unlocked',
};

export const getIsPremiumUnlocked = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEYS.PREMIUM_UNLOCKED) === 'true';
  } catch {
    return false;
  }
};

export const setPremiumUnlocked = (unlocked: boolean = true): boolean => {
  try {
    localStorage.setItem(STORAGE_KEYS.PREMIUM_UNLOCKED, unlocked ? 'true' : 'false');
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
