export interface Question {
  id: number;
  category: string;
  section?: 'technical' | 'marathi' | 'english' | 'gk' | 'logical';
  question: string;
  question_mr?: string;
  options: string[];
  options_mr?: string[];
  correct_answer: string;
  correct_answer_mr?: string;
  explanation: string;
  explanation_mr?: string;
  source_page?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  isCustom?: boolean;
  topic?: string;
  chapter_name?: string;
  chapterId?: number;
  batchId?: string;
  importedAt?: string;
  batchName?: string;
}

export interface CategoryInfo {
  name: string;
  nameMr: string;
  section: 'technical' | 'marathi' | 'english' | 'gk' | 'logical';
  description: string;
  descriptionMr: string;
  marks: number;
  questionCount: number;
  color: string;
  iconName: string;
}

export type LanguageMode = 'dual' | 'mr' | 'en';

export interface UserAnswer {
  questionId: number;
  selectedOption: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  timestamp: string;
}

export interface QuizSession {
  id: string;
  title: string;
  mode: 'exam' | 'practice' | 'category' | 'missed' | 'bookmarked';
  category?: string;
  startTime: string;
  endTime?: string;
  answers: Record<number, UserAnswer>;
  score?: number;
  totalQuestions: number;
  passed?: boolean;
}

export interface QuestionBookmark {
  questionId: number;
  addedAt: string;
  notes?: string;
}

export interface AIExplanationResult {
  deepExplanation: string;
  deepExplanationMr?: string;
  clinicalCorrelation: string;
  clinicalCorrelationMr?: string;
  keyTakeaways: string[];
  keyTakeawaysMr?: string[];
  mnemonic?: string;
  relatedExamTopics: string[];
}

export interface CustomGeneratedQuestion {
  question: string;
  question_mr?: string;
  options: string[];
  options_mr?: string[];
  correct_answer: string;
  correct_answer_mr?: string;
  explanation: string;
  explanation_mr?: string;
  category: string;
  source_page?: number;
}
