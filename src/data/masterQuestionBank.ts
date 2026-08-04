import { Question } from '../types';
import { CHAPTER_1_QUESTIONS } from './chapter1Questions';
import { CHAPTER_2_QUESTIONS } from './chapter2Questions';
import { CHAPTER_3_QUESTIONS } from './chapter3Questions';
import { CHAPTER_4_QUESTIONS } from './chapter4Questions';
import { CHAPTER_5_QUESTIONS } from './chapter5Questions';
import { CHAPTER_6_QUESTIONS } from './chapter6Questions';
import { CHAPTER_7_QUESTIONS } from './chapter7Questions';
import { CHAPTER_8_QUESTIONS } from './chapter8Questions';
import { CHAPTER_9_QUESTIONS } from './chapter9Questions';
import { CHAPTER_10_QUESTIONS } from './chapter10Questions';
import { CHAPTER_11_QUESTIONS } from './chapter11Questions';
import { CHAPTER_12_QUESTIONS } from './chapter12Questions';
import { CHAPTER_13_QUESTIONS } from './chapter13Questions';
import { CHAPTER_14_QUESTIONS } from './chapter14Questions';
import { CHAPTER_15_QUESTIONS } from './chapter15Questions';
import { CHAPTER_16_QUESTIONS } from './chapter16Questions';
import { CHAPTER_17_QUESTIONS } from './chapter17Questions';
import { CHAPTER_18_QUESTIONS } from './chapter18Questions';
import { CHAPTER_19_QUESTIONS } from './chapter19Questions';
import { CHAPTER_20_QUESTIONS } from './chapter20Questions';
import { CHAPTER_21_QUESTIONS } from './chapter21Questions';
import { CHAPTER_22_QUESTIONS } from './chapter22Questions';
import { CHAPTER_23_QUESTIONS } from './chapter23Questions';
import { CHAPTER_24_QUESTIONS } from './chapter24Questions';
import { CHAPTER_25_QUESTIONS } from './chapter25Questions';
import { CHAPTER_26_QUESTIONS } from './chapter26Questions';
import { CHAPTER_27_QUESTIONS } from './chapter27Questions';
import { CHAPTER_28_QUESTIONS } from './chapter28Questions';
import { CHAPTER_29_QUESTIONS } from './chapter29Questions';
import { CHAPTER_30_QUESTIONS } from './chapter30Questions';

// Base initial questions (1 to 253)
import { CORE_INITIAL_RAW_QUESTIONS } from './coreRawQuestions';

// Chapter list reference mapping
export interface ChapterMetadata {
  id: number;
  title: string;
  titleMr: string;
  category: string;
  questionArray: Question[];
}

export const CHAPTER_COLLECTION: ChapterMetadata[] = [
  { id: 1, title: 'Chapter 1: History of X-Rays & Radiophysics', titleMr: 'प्रकरण १: क्ष-किरणांचा इतिहास व रेडिओफिजिक्स', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_1_QUESTIONS },
  { id: 2, title: 'Chapter 2: Atomic Structure & Ionization', titleMr: 'प्रकरण २: अणू रचना व आयनायझेशन', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_2_QUESTIONS },
  { id: 3, title: 'Chapter 3: Electromagnetic Spectrum & X-Ray Properties', titleMr: 'प्रकरण ३: विद्युतचुंबकीय स्पेक्ट्रम व क्ष-किरणांचे गुणधर्म', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_3_QUESTIONS },
  { id: 4, title: 'Chapter 4: X-Ray Production & Interaction with Matter', titleMr: 'प्रकरण ४: क्ष-किरणांची निर्मिती व पदार्थाशी संवाद', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_4_QUESTIONS },
  { id: 5, title: 'Chapter 5: Human Anatomy - Skeletal System', titleMr: 'प्रकरण ५: मानवी शरीरशास्त्र - सांगाडा संस्था', category: 'Technical: Anatomy & Radiographic Positioning', questionArray: CHAPTER_5_QUESTIONS },
  { id: 6, title: 'Chapter 6: Chest & Abdomen Radiography', titleMr: 'प्रकरण ६: छाती व पोटाचा x-ray पोझिशनिंग', category: 'Technical: Anatomy & Radiographic Positioning', questionArray: CHAPTER_6_QUESTIONS },
  { id: 7, title: 'Chapter 7: Upper Extremity Radiographic Positioning', titleMr: 'प्रकरण ७: वरच्या अवयवांचे (हातांचे) x-ray पोझिशनिंग', category: 'Technical: Anatomy & Radiographic Positioning', questionArray: CHAPTER_7_QUESTIONS },
  { id: 8, title: 'Chapter 8: Lower Extremity Radiographic Positioning', titleMr: 'प्रकरण ८: पायांचे x-ray पोझिशनिंग', category: 'Technical: Anatomy & Radiographic Positioning', questionArray: CHAPTER_8_QUESTIONS },
  { id: 9, title: 'Chapter 9: Skull & Facial Bones Positioning', titleMr: 'प्रकरण ९: कवटी व चेहऱ्याच्या हाडांचे x-ray पोझिशनिंग', category: 'Technical: Anatomy & Radiographic Positioning', questionArray: CHAPTER_9_QUESTIONS },
  { id: 10, title: 'Chapter 10: Vertebral Column & Pelvis Positioning', titleMr: 'प्रकरण १०: मणका व कंबर (Pelvis) पोझिशनिंग', category: 'Technical: Anatomy & Radiographic Positioning', questionArray: CHAPTER_10_QUESTIONS },
  { id: 11, title: 'Chapter 11: Radiation Protection Principles (ALARA)', titleMr: 'प्रकरण ११: रेडिएशन संरक्षणाची मूलतत्त्वे (ALARA)', category: 'Technical: Radiation Protection & Hazards', questionArray: CHAPTER_11_QUESTIONS },
  { id: 12, title: 'Chapter 12: Biological Effects of Ionizing Radiation', titleMr: 'प्रकरण १२: आयनायझिंग रेडिएशनचे जैविक परिणाम', category: 'Technical: Radiation Protection & Hazards', questionArray: CHAPTER_12_QUESTIONS },
  { id: 13, title: 'Chapter 13: Radiation Dosimetry & TLD Badges', titleMr: 'प्रकरण १३: रेडिएशन डोस मोजणी व TLD बॅज', category: 'Technical: Radiation Protection & Hazards', questionArray: CHAPTER_13_QUESTIONS },
  { id: 14, title: 'Chapter 14: Darkroom Processing & Chemicals', titleMr: 'प्रकरण १४: डार्क रूम प्रोसेसिंग व रसायने', category: 'Technical: Films, Contrast Media & Digital DR/PACS', questionArray: CHAPTER_14_QUESTIONS },
  { id: 15, title: 'Chapter 15: Computed Radiography (CR) & Digital Radiography (DR)', titleMr: 'प्रकरण १५: संगणकीय व डिजिटल रेडिओोग्राफी (CR/DR)', category: 'Technical: Films, Contrast Media & Digital DR/PACS', questionArray: CHAPTER_15_QUESTIONS },
  { id: 16, title: 'Chapter 16: Image Production: mAs and Exposure Time', titleMr: 'प्रकरण १६: इमेज प्रोडक्शन: mAs व एक्सपोजर वेळ', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_16_QUESTIONS },
  { id: 17, title: 'Chapter 17: Image Production: kVp and Beam Quality', titleMr: 'प्रकरण १७: इमेज प्रोडक्शन: kVp व बीमची गुणवत्ता', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_17_QUESTIONS },
  { id: 18, title: 'Chapter 18: Grids & Scatter Radiation Control', titleMr: 'प्रकरण १८: ग्रिड्स व स्कॅटर रेडिएशन नियंत्रण', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_18_QUESTIONS },
  { id: 19, title: 'Chapter 19: Fluoroscopy & C-Arm Imaging', titleMr: 'प्रकरण १९: फ्लोरोस्कोपी व सी-आर्म इमेजिंग', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_19_QUESTIONS },
  { id: 20, title: 'Chapter 20: Contrast Media & Special Procedures (IVP, Barium)', titleMr: 'प्रकरण २०: कॉन्ट्रास्ट मीडिया व विशेष तपासण्या', category: 'Technical: Films, Contrast Media & Digital DR/PACS', questionArray: CHAPTER_20_QUESTIONS },
  { id: 21, title: 'Chapter 21: Mammography Fundamentals & Quality Control', titleMr: 'प्रकरण २१: मॅमोग्राफी मूलभूत तत्त्वे व क्वालिटी कंट्रोल', category: 'Technical: Films, Contrast Media & Digital DR/PACS', questionArray: CHAPTER_21_QUESTIONS },
  { id: 22, title: 'Chapter 22: PACS, DICOM & Hospital Information Systems', titleMr: 'प्रकरण २२: PACS, DICOM व हॉस्पिटल इन्फॉर्मेशन सिस्टीम', category: 'Technical: Films, Contrast Media & Digital DR/PACS', questionArray: CHAPTER_22_QUESTIONS },
  { id: 23, title: 'Chapter 23: X-Ray Tube Design, Anode, and Cathode Physics', titleMr: 'प्रकरण २३: क्ष-किरण ट्युब रचना, अ‍ॅनोड व कॅथोड', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_23_QUESTIONS },
  { id: 24, title: 'Chapter 24: High-Voltage Generators, Transformers & Rectifiers', titleMr: 'प्रकरण २४: हाय व्होल्टेज जनरेटर्स व ट्रान्सफॉर्मर', category: 'Technical: Radiophysics & Machine Principles', questionArray: CHAPTER_24_QUESTIONS },
  { id: 25, title: 'Chapter 25: Biomedical Waste Management & Infection Control', titleMr: 'प्रकरण २५: जैववैद्यकीय कचरा व्यवस्थापन (BMW)', category: 'Technical: Radiation Protection & Hazards', questionArray: CHAPTER_25_QUESTIONS },
  { id: 26, title: 'Chapter 26: Computed Tomography (CT Scan) Fundamentals', titleMr: 'प्रकरण २६: सी.टी. स्कॅन मूलभूत तत्त्वे (CT Scan)', category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy', questionArray: CHAPTER_26_QUESTIONS },
  { id: 27, title: 'Chapter 27: Magnetic Resonance Imaging (MRI) Principles', titleMr: 'प्रकरण २७: एम.आर.आय. (MRI) मूलभूत तत्त्वे', category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy', questionArray: CHAPTER_27_QUESTIONS },
  { id: 28, title: 'Chapter 28: Radiotherapy & Oncology Principles', titleMr: 'प्रकरण २८: रेडिओथेरपी व कर्करोग उपचार तत्त्वे', category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy', questionArray: CHAPTER_28_QUESTIONS },
  { id: 29, title: 'Chapter 29: Ultrasonography (USG) & Doppler Principles', titleMr: 'प्रकरण २९: सोनोग्राफी (USG) व डॉप्लर तत्त्वे', category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy', questionArray: CHAPTER_29_QUESTIONS },
  { id: 30, title: 'Chapter 30: Quality Assurance & AERB Safety Regulations', titleMr: 'प्रकरण ३०: क्वालिटी ॲश्युरन्स व AERB सुरक्षा नियम', category: 'Technical: Radiation Protection & Hazards', questionArray: CHAPTER_30_QUESTIONS },
];

// Combine all 30 chapter question arrays plus raw core questions into one unified master array
const buildMasterQuestionBank = (): Question[] => {
  const merged: Question[] = [];

  // Add initial core raw questions (1-253)
  CORE_INITIAL_RAW_QUESTIONS.forEach(q => {
    // Attempt to infer chapter ID based on category/topic if missing
    let inferredChapId = q.chapterId;
    if (!inferredChapId) {
      if (q.question.toLowerCase().includes('roentgen') || q.question.toLowerCase().includes('discovered')) inferredChapId = 1;
      else if (q.question.toLowerCase().includes('anode') || q.question.toLowerCase().includes('tungsten')) inferredChapId = 23;
      else if (q.question.toLowerCase().includes('alara') || q.question.toLowerCase().includes('tld')) inferredChapId = 11;
      else if (q.question.toLowerCase().includes('ct') || q.question.toLowerCase().includes('hounsfield')) inferredChapId = 26;
      else if (q.question.toLowerCase().includes('mri') || q.question.toLowerCase().includes('tesla')) inferredChapId = 27;
      else if (q.question.toLowerCase().includes('grid')) inferredChapId = 18;
      else if (q.question.toLowerCase().includes('kvp')) inferredChapId = 17;
      else if (q.question.toLowerCase().includes('mas')) inferredChapId = 16;
      else inferredChapId = 1;
    }
    merged.push({
      ...q,
      chapterId: inferredChapId,
      chapter_name: q.chapter_name || `Chapter ${inferredChapId}`,
    });
  });

  // Add questions from Chapters 1 to 30
  CHAPTER_COLLECTION.forEach(chap => {
    chap.questionArray.forEach(q => {
      merged.push({
        ...q,
        chapterId: chap.id,
        chapter_name: chap.title,
      });
    });
  });

  return merged;
};

// Consolidated Master Question Bank exported as single file constant
export const MASTER_QUESTION_BANK: Question[] = buildMasterQuestionBank();

// String normalization for similarity detection
function normalizeQuestionText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

// Word token set extraction
function getWordTokens(str: string): Set<string> {
  const words = str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 2 && !['what', 'which', 'where', 'when', 'how', 'the', 'is', 'are', 'was', 'were', 'for', 'and', 'with'].includes(w));
  return new Set(words);
}

function jaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  setA.forEach(word => {
    if (setB.has(word)) intersection++;
  });
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

// Build Deduplicated Question Bank and Similarity Analysis
export interface DuplicateCluster {
  id: string;
  topicTitle: string;
  topicTitleMr: string;
  representativeQuestion: Question;
  occurringChapterIds: number[];
  occurrencesCount: number;
  matchingQuestions: Question[];
  similarityScore: number;
}

export interface QuestionBankAnalysis {
  totalRawQuestions: number;
  uniqueCoreQuestionsCount: number;
  duplicateCount: number;
  duplicationPercentage: number;
  chapterBreakdown: {
    chapterId: number;
    title: string;
    totalInChapter: number;
    uniqueInChapter: number;
  }[];
  topDuplicateClusters: DuplicateCluster[];
}

export const analyzeQuestionBank = (): QuestionBankAnalysis => {
  const totalRawQuestions = MASTER_QUESTION_BANK.length;
  const uniqueMap = new Map<string, Question>();
  const duplicateClustersMap = new Map<string, Question[]>();

  MASTER_QUESTION_BANK.forEach(q => {
    const norm = normalizeQuestionText(q.question);
    if (!uniqueMap.has(norm)) {
      uniqueMap.set(norm, q);
      duplicateClustersMap.set(norm, [q]);
    } else {
      duplicateClustersMap.get(norm)!.push(q);
    }
  });

  const uniqueCoreQuestionsCount = uniqueMap.size;
  const duplicateCount = totalRawQuestions - uniqueCoreQuestionsCount;
  const duplicationPercentage = Math.round((duplicateCount / totalRawQuestions) * 1000) / 10;

  // Build top duplicate clusters
  const topClusters: DuplicateCluster[] = [];
  let clusterCounter = 1;

  duplicateClustersMap.forEach((list, key) => {
    if (list.length > 1) {
      const rep = list[0];
      const chaptersSet = new Set<number>();
      list.forEach(item => {
        if (item.chapterId) chaptersSet.add(item.chapterId);
      });

      topClusters.push({
        id: `cluster-${clusterCounter++}`,
        topicTitle: rep.question.slice(0, 80) + (rep.question.length > 80 ? '...' : ''),
        topicTitleMr: rep.question_mr ? rep.question_mr.slice(0, 90) + (rep.question_mr.length > 90 ? '...' : '') : rep.question.slice(0, 80),
        representativeQuestion: rep,
        occurringChapterIds: Array.from(chaptersSet).sort((a, b) => a - b),
        occurrencesCount: list.length,
        matchingQuestions: list,
        similarityScore: 100,
      });
    }
  });

  // Sort clusters by occurrence count descending
  topClusters.sort((a, b) => b.occurrencesCount - a.occurrencesCount);

  // Chapter-wise breakdown
  const chapterBreakdown = CHAPTER_COLLECTION.map(chap => {
    const chapQs = MASTER_QUESTION_BANK.filter(q => q.chapterId === chap.id);
    const chapUniqueNorms = new Set(chapQs.map(q => normalizeQuestionText(q.question)));
    return {
      chapterId: chap.id,
      title: chap.title,
      totalInChapter: chapQs.length,
      uniqueInChapter: chapUniqueNorms.size,
    };
  });

  return {
    totalRawQuestions,
    uniqueCoreQuestionsCount,
    duplicateCount,
    duplicationPercentage,
    chapterBreakdown,
    topDuplicateClusters: topClusters,
  };
};

// Pre-computed Analysis
export const QUESTION_BANK_ANALYSIS: QuestionBankAnalysis = analyzeQuestionBank();

// Build Deduplicated Question Bank array (399 unique questions)
export const DEDUPLICATED_QUESTION_BANK: Question[] = Array.from(
  new Map(MASTER_QUESTION_BANK.map(q => [normalizeQuestionText(q.question), q])).values()
);

// Helper to get questions for a specific chapter
export const getQuestionsByChapterId = (chapId: number, deduplicated: boolean = false): Question[] => {
  const bank = deduplicated ? DEDUPLICATED_QUESTION_BANK : MASTER_QUESTION_BANK;
  return bank.filter(q => q.chapterId === chapId);
};
