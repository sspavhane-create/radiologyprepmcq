import { Question } from '../types';

const rawQuestions = [
  {
    id: 24001,
    question: "Choose the correct synonym of 'rapid':",
    question_mr: "'Rapid' या इंग्रजी शब्दाचा योग्य समानार्थी शब्द निवडा:",
    options: [
      "(A) Slow",
      "(B) Fast",
      "(C) Late",
      "(D) Heavy"
    ],
    options_mr: [
      "(A) स्लो (हळू)",
      "(B) फास्ट (जलद / Fast)",
      "(C) उशीर",
      "(D) जड"
    ],
    correct_answer: "(B) Fast",
    correct_answer_mr: "(B) फास्ट (जलद / Fast)",
    explanation: "'Rapid' means happening or moving quickly; 'Fast' is its synonym.",
    explanation_mr: "'Rapid' म्हणजे जलद किंवा वेगवान; म्हणून 'Fast' हा योग्य समानार्थी शब्द आहे.",
    difficulty: "easy" as const,
    topic: "English",
    category: "Non-Technical: English Language"
  },
  {
    id: 24002,
    question: "'प्रामाणिक' या शब्दाचा समानार्थी शब्द कोणता?",
    question_mr: "'प्रामाणिक' या शब्दाचा समानार्थी शब्द कोणता?",
    options: [
      "(A) आळशी",
      "(B) इमानदार",
      "(C) कठोर",
      "(D) दुर्बळ"
    ],
    options_mr: [
      "(A) आळशी",
      "(B) इमानदार",
      "(C) कठोर",
      "(D) दुर्बळ"
    ],
    correct_answer: "(B) इमानदार",
    correct_answer_mr: "(B) इमानदार",
    explanation: "प्रामाणिक म्हणजे कर्तव्यदक्ष व इमानदार राहणारा.",
    explanation_mr: "प्रामाणिक या शब्दाचा योग्य समानार्थी शब्द इमानदार आहे.",
    difficulty: "easy" as const,
    topic: "Marathi",
    category: "Non-Technical: Marathi Language"
  },
  {
    id: 24003,
    question: "Find the odd one out: 2, 3, 5, 9, 11",
    question_mr: "गटात न बसणारी संख्या ओळखा: २, ३, ५, ९, ११",
    options: [
      "(A) 2",
      "(B) 3",
      "(C) 5",
      "(D) 9"
    ],
    options_mr: [
      "(A) २",
      "(B) ३",
      "(C) ५",
      "(D) ९ (विषम संयुक्त संख्या)"
    ],
    correct_answer: "(D) 9",
    correct_answer_mr: "(D) ९ (विषम संयुक्त संख्या)",
    explanation: "2, 3, 5, 11 are all prime numbers; 9 is a composite number (3 x 3).",
    explanation_mr: "२, ३, ५ आणि ११ या सर्व मूळ संख्या (Prime numbers) आहेत, तर ९ ही संयुक्त संख्या (Composite number) आहे.",
    difficulty: "easy" as const,
    topic: "Logical Reasoning",
    category: "Non-Technical: General Intelligence & Reasoning"
  },
  {
    id: 24004,
    question: "The average of 10, 20, 30, 40 and 50 is:",
    question_mr: "१०, २०, ३०, ४० आणि ५० या संख्यांची सरासरी किती?",
    options: [
      "(A) 20",
      "(B) 25",
      "(C) 30",
      "(D) 35"
    ],
    options_mr: [
      "(A) २०",
      "(B) २५",
      "(C) ३०",
      "(D) ३५"
    ],
    correct_answer: "(C) 30",
    correct_answer_mr: "(C) ३०",
    explanation: "Average = Sum / Count = (10+20+30+40+50) / 5 = 150 / 5 = 30.",
    explanation_mr: "सरासरी = एकूण बेरीज / एकूण संख्या = १५० / ५ = ३०.",
    difficulty: "easy" as const,
    topic: "Aptitude",
    category: "Non-Technical: Quantitative Aptitude"
  },
  {
    id: 24005,
    question: "Water boils at standard atmospheric pressure at:",
    question_mr: "प्रमाण वातावरणीय दाबाखाली पाण्याचा उत्कलन बिंदू (Boiling point of water) किती असतो?",
    options: [
      "(A) 90°C",
      "(B) 95°C",
      "(C) 100°C",
      "(D) 110°C"
    ],
    options_mr: [
      "(A) ९०°C",
      "(B) ९५°C",
      "(C) १००°C (100°C)",
      "(D) ११०°C"
    ],
    correct_answer: "(C) 100°C",
    correct_answer_mr: "(C) १००°C (100°C)",
    explanation: "At 1 atm sea level pressure, pure water boils at 100 degrees Celsius (212°F).",
    explanation_mr: "सामान्य दाबाखाली पाण्याचा उत्कलन बिंदू १०० अंश सेल्सिअस असतो.",
    difficulty: "easy" as const,
    topic: "General Science",
    category: "Non-Technical: General Knowledge"
  }
];

export const CHAPTER_24_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 24001 + i;
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
    chapter_name: "English, Marathi, Aptitude & Reasoning"
  };
});
