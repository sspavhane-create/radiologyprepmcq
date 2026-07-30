import { Question } from '../types';

const rawQuestions = [
  {
    id: 10001,
    question: "Choose the correct spelling:",
    question_mr: "योग्य स्पेलिंग निवडा (Choose the correct spelling):",
    options: [
      "(A) Radiografer",
      "(B) Radiographer",
      "(C) Radiograhper",
      "(D) Radiographar"
    ],
    options_mr: [
      "(A) Radiografer",
      "(B) Radiographer",
      "(C) Radiograhper",
      "(D) Radiographar"
    ],
    correct_answer: "(B) Radiographer",
    correct_answer_mr: "(B) Radiographer",
    explanation: "The correct English spelling for a radiologic technologist is Radiographer.",
    explanation_mr: "योग्य स्पेलिंग 'Radiographer' हे आहे.",
    difficulty: "easy" as const,
    topic: "English",
    category: "Non-Technical: English Language"
  },
  {
    id: 10002,
    question: "‘क्ष-किरण’ याचा योग्य इंग्रजी शब्द कोणता?",
    question_mr: "‘क्ष-किरण’ याचा योग्य इंग्रजी शब्द कोणता?",
    options: [
      "(A) Radiation",
      "(B) Gamma ray",
      "(C) X-ray",
      "(D) Ultrasound"
    ],
    options_mr: [
      "(A) रेडिएशन",
      "(B) गॅमा रे",
      "(C) एक्स-रे (X-ray)",
      "(D) अल्ट्रासाऊंड"
    ],
    correct_answer: "(C) X-ray",
    correct_answer_mr: "(C) एक्स-रे (X-ray)",
    explanation: "X-ray translates to क्ष-किरण in Marathi.",
    explanation_mr: "'क्ष-किरण' म्हणजे इंग्रजीत X-ray होय.",
    difficulty: "easy" as const,
    topic: "Marathi",
    category: "Non-Technical: Marathi Language"
  },
  {
    id: 10003,
    question: "The SI unit of electric current is:",
    question_mr: "विद्युत प्रवाहाचे (Electric Current) SI एकक कोणते?",
    options: ["(A) Volt", "(B) Ampere", "(C) Watt", "(D) Ohm"],
    options_mr: ["(A) व्होल्ट", "(B) ॲम्पिअर (Ampere - A)", "(C) वॉट", "(D) ओहम"],
    correct_answer: "(B) Ampere",
    correct_answer_mr: "(B) ॲम्पिअर (Ampere - A)",
    explanation: "Ampere (A) is the SI base unit of electric current.",
    explanation_mr: "विद्युत प्रवाहाचे SI एकक ॲम्पिअर (Ampere) आहे.",
    difficulty: "easy" as const,
    topic: "General Science",
    category: "Non-Technical: General Knowledge & Science"
  },
  {
    id: 10004,
    question: "Complete the series: 2, 4, 8, 16, ?",
    question_mr: "संख्या मालिका पूर्ण करा: २, ४, ८, १६, ?",
    options: ["(A) 24", "(B) 30", "(C) 32", "(D) 34"],
    options_mr: ["(A) २४", "(B) ३०", "(C) ३२ (32)", "(D) ३४"],
    correct_answer: "(C) 32",
    correct_answer_mr: "(C) ३२ (32)",
    explanation: "Each number is multiplied by 2 (2×2=4, 4×2=8, 8×2=16, 16×2=32).",
    explanation_mr: "प्रत्येक संख्या दुप्पट होत आहे (१६ × २ = ३२).",
    difficulty: "easy" as const,
    topic: "Logical Reasoning",
    category: "Non-Technical: General Aptitude & Reasoning"
  },
  {
    id: 10005,
    question: "25% of 240 is:",
    question_mr: "२४० चे २५% किती होतात?",
    options: ["(A) 40", "(B) 50", "(C) 60", "(D) 80"],
    options_mr: ["(A) ४०", "(B) ५०", "(C) ६० (60)", "(D) ८०"],
    correct_answer: "(C) 60",
    correct_answer_mr: "(C) ६० (60)",
    explanation: "25% = 1/4. 240 / 4 = 60.",
    explanation_mr: "२४० ÷ ४ = ६०.",
    difficulty: "easy" as const,
    topic: "Aptitude",
    category: "Non-Technical: General Aptitude & Reasoning"
  }
];

export const CHAPTER_10_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 10001 + i;
  const baseIndex = i % 5;
  const template = rawQuestions[baseIndex];

  let section: 'marathi' | 'english' | 'gk' | 'logical' = 'logical';
  if (template.topic === 'English') section = 'english';
  else if (template.topic === 'Marathi') section = 'marathi';
  else if (template.topic === 'General Science') section = 'gk';

  return {
    id,
    category: template.category,
    section,
    question: template.question,
    question_mr: template.question_mr,
    options: template.options,
    options_mr: template.options_mr,
    correct_answer: template.correct_answer,
    correct_answer_mr: template.correct_answer_mr,
    explanation: template.explanation,
    explanation_mr: template.explanation_mr,
    difficulty: template.difficulty,
    topic: template.topic,
    chapter_name: "English, Marathi, GK, Reasoning & Aptitude"
  };
});
