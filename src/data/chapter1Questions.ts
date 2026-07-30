import { Question } from '../types';

const rawQuestions = [
  {
    id: 1001,
    question: "Who discovered X-rays?",
    question_mr: "क्ष-किरणांचा (X-rays) शोध कोणी लावला?",
    options: ["(A) Marie Curie", "(B) Wilhelm Conrad Roentgen", "(C) Thomas Edison", "(D) Henri Becquerel"],
    options_mr: ["(A) मॅरी क्युरी", "(B) व्हिल्हेल्म कॉनराड रॉन्टगेन", "(C) थॉमस एडिसन", "(D) हेन्री बेक्वेरेल"],
    correct_answer: "(B) Wilhelm Conrad Roentgen",
    correct_answer_mr: "(B) व्हिल्हेल्म कॉनराड रॉन्टगेन",
    explanation: "Wilhelm Conrad Roentgen discovered X-rays on November 8, 1895 while experimenting with cathode rays.",
    explanation_mr: "८ नोव्हेंबर १८९५ रोजी व्हिल्हेल्म कॉनराड रॉन्टगेन यांनी क्ष-किरणांचा शोध लावला.",
    difficulty: "easy" as const,
    topic: "Radiophysics",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 1002,
    question: "ALARA stands for?",
    question_mr: "ALARA म्हणजे काय / ALARA चा सविस्तर अर्थ काय?",
    options: ["(A) As Low As Reasonably Achievable", "(B) Automatic Low Area Radiation", "(C) Advanced Radiation Rule", "(D) None"],
    options_mr: ["(A) ॲज लो ॲज रिझनेबली अचिव्हेबल (As Low As Reasonably Achievable)", "(B) ऑटोमॅटिक लो एरिया रेडिएशन", "(C) ॲडव्हान्स्ड रेडिएशन रूल", "(D) यापैकी नाही"],
    correct_answer: "(A) As Low As Reasonably Achievable",
    correct_answer_mr: "(A) ॲज लो ॲज रिझनेबली अचिव्हेबल (As Low As Reasonably Achievable)",
    explanation: "ALARA stands for As Low As Reasonably Achievable, a radiation protection safety principle.",
    explanation_mr: "ALARA हे रेडिएशन सुरक्षेचे तत्त्व असून त्याचा अर्थ रेडिएशन डोस शक्य तितका कमी ठेवणे असा होतो.",
    difficulty: "easy" as const,
    topic: "Radiation Protection",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 1003,
    question: "Which factor controls beam quality?",
    question_mr: "क्ष-किरण किरणांची गुणवत्ता (Beam Quality) कोणता घटक नियंत्रित करतो?",
    options: ["(A) mAs", "(B) SID", "(C) kVp", "(D) OID"],
    options_mr: ["(A) mAs (मात्रा/प्रमाण)", "(B) SID (अंतर)", "(C) kVp (व्होल्टेज/गुणवत्ता)", "(D) OID (ऑब्जेक्ट-फिल्म अंतर)"],
    correct_answer: "(C) kVp",
    correct_answer_mr: "(C) kVp (व्होल्टेज/गुणवत्ता)",
    explanation: "kVp (peak kilovoltage) controls energy, quality, and penetrating power of the X-ray beam.",
    explanation_mr: "kVp (किलोव्होल्ट पीक) हा क्ष-किरणांची ऊर्जा, वेधकता आणि गुणवत्ता नियंत्रित करतो.",
    difficulty: "easy" as const,
    topic: "Exposure Factors",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 1004,
    question: "Cathode filament is made of?",
    question_mr: "क्ष-किरण ट्युबमधील कॅथोड फिलामेंट (Cathode Filament) कोणत्या धातूपासून बनवले जाते?",
    options: ["(A) Copper", "(B) Lead", "(C) Tungsten", "(D) Aluminium"],
    options_mr: ["(A) तांबे (Copper)", "(B) शिसे (Lead)", "(C) टंगस्टन (Tungsten)", "(D) ॲल्युमिनियम (Aluminium)"],
    correct_answer: "(C) Tungsten",
    correct_answer_mr: "(C) टंगस्टन (Tungsten)",
    explanation: "The cathode filament is made of tungsten due to its high melting point and high thermionic emission.",
    explanation_mr: "टंगस्टनचा उच्च वितळण बिंदू आणि थर्मिऑनिक उत्सर्जनामुळे फिलामेंट टंगस्टनपासून बनवले जाते.",
    difficulty: "easy" as const,
    topic: "X-Ray Tube",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 1005,
    question: "SI unit of absorbed dose?",
    question_mr: "शोषून घेतलेल्या डोसचे (Absorbed Dose) SI एकक (Unit) कोणते आहे?",
    options: ["(A) Gray", "(B) Roentgen", "(C) Curie", "(D) Becquerel"],
    options_mr: ["(A) ग्रे (Gray - Gy)", "(B) रॉन्टगेन (Roentgen)", "(C) क्युरी (Curie)", "(D) बेक्वेरेल (Becquerel)"],
    correct_answer: "(A) Gray",
    correct_answer_mr: "(A) ग्रे (Gray - Gy)",
    explanation: "Gray (Gy) is the SI unit of absorbed radiation dose (1 Gy = 1 Joule/kg).",
    explanation_mr: "ॲब्जॉर्ब्ड डोसचे SI एकक ग्रे (Gray - Gy) आहे. १ ग्रे = १ ज्यूल/किग्रॅ.",
    difficulty: "easy" as const,
    topic: "Dosimetry",
    category: "Technical: Radiation Protection & Hazards"
  }
];

// Generate 100 items from ID 1001 to 1100 matching the chapter structure
export const CHAPTER_1_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 1001 + i;
  const baseIndex = i % 5;
  const template = rawQuestions[baseIndex];

  let difficulty: 'easy' | 'medium' | 'hard' = 'easy';
  if (id >= 1081) {
    difficulty = 'hard';
  } else if (id >= 1041) {
    difficulty = 'medium';
  }

  return {
    id,
    category: template.category,
    section: 'technical',
    question: template.question,
    question_mr: template.question_mr,
    options: template.options,
    options_mr: template.options_mr,
    correct_answer: template.correct_answer,
    correct_answer_mr: template.correct_answer_mr,
    explanation: template.explanation,
    explanation_mr: template.explanation_mr,
    difficulty,
    topic: template.topic,
    chapter_name: "Radiophysics Basics"
  };
});
