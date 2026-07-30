import { Question } from '../types';

const rawQuestions = [
  {
    id: 23001,
    question: "Who is known as the Father of the Indian Constitution?",
    question_mr: "भारतीय घटनेचे शिल्पकार (Father of Indian Constitution) कोणास म्हटले जाते?",
    options: [
      "(A) Mahatma Gandhi",
      "(B) Jawaharlal Nehru",
      "(C) Dr. B. R. Ambedkar",
      "(D) Sardar Patel"
    ],
    options_mr: [
      "(A) महात्मा गांधी",
      "(B) जवाहरलाल नेहरू",
      "(C) डॉ. बाबासाहेब आंबेडकर (Dr. B. R. Ambedkar)",
      "(D) सरदार पटेल"
    ],
    correct_answer: "(C) Dr. B. R. Ambedkar",
    correct_answer_mr: "(C) डॉ. बाबासाहेब आंबेडकर (Dr. B. R. Ambedkar)",
    explanation: "Dr. B. R. Ambedkar was the Chairman of the Drafting Committee of the Constituent Assembly of India.",
    explanation_mr: "डॉ. बाबासाहेब आंबेडकर हे भारतीय मसुदा समितीचे अध्यक्ष होते व त्यांनी भारतीय राज्यघटना तयार करण्यात मोलाचे योगदान दिले.",
    difficulty: "easy" as const,
    topic: "General Knowledge",
    category: "Non-Technical: General Knowledge"
  },
  {
    id: 23002,
    question: "What is the capital of Maharashtra?",
    question_mr: "महाराष्ट्र राज्याची राजधानी कोणती आहे?",
    options: [
      "(A) Pune",
      "(B) Nagpur",
      "(C) Mumbai",
      "(D) Nashik"
    ],
    options_mr: [
      "(A) पुणे",
      "(B) नागपूर (उपराजधानी)",
      "(C) मुंबई (Mumbai)",
      "(D) नाशिक"
    ],
    correct_answer: "(C) Mumbai",
    correct_answer_mr: "(C) मुंबई (Mumbai)",
    explanation: "Mumbai is the capital of Maharashtra and the financial capital of India.",
    explanation_mr: "मुंबई ही महाराष्ट्र राज्याची राजधानी असून नागपूर ही उपराजधानी आहे.",
    difficulty: "easy" as const,
    topic: "Maharashtra GK",
    category: "Non-Technical: General Knowledge"
  },
  {
    id: 23003,
    question: "Article 21 of the Indian Constitution deals with:",
    question_mr: "भारतीय राज्यघटनेतील कलम २१ (Article 21) कशाशी संबंधित आहे?",
    options: [
      "(A) Equality",
      "(B) Freedom of religion",
      "(C) Protection of life and personal liberty",
      "(D) Emergency"
    ],
    options_mr: [
      "(A) समानतेचा अधिकार",
      "(B) धार्मिक स्वातंत्र्य",
      "(C) जीविताचे व व्यक्तिगत स्वातंत्र्याचे संरक्षण (Protection of life and personal liberty)",
      "(D) आणीबाणी"
    ],
    correct_answer: "(C) Protection of life and personal liberty",
    correct_answer_mr: "(C) जीविताचे व व्यक्तिगत स्वातंत्र्याचे संरक्षण (Protection of life and personal liberty)",
    explanation: "Article 21 guarantees the fundamental right to life and personal liberty to every citizen.",
    explanation_mr: "कलम २१ नुसार कोणत्याही व्यक्तीला कायद्याच्या योग्य प्रक्रियेशिवाय तिच्या जीवितापासून किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित ठेवता येत नाही.",
    difficulty: "easy" as const,
    topic: "Indian Constitution",
    category: "Non-Technical: General Knowledge"
  },
  {
    id: 23004,
    question: "Which ministry administers the National Health Mission in India?",
    question_mr: "भारतामध्ये राष्ट्रीय आरोग्य अभियान (NHM) कोणत्या मंत्रालयामार्फत राबवले जाते?",
    options: [
      "(A) Ministry of Education",
      "(B) Ministry of Health and Family Welfare",
      "(C) Ministry of Finance",
      "(D) Ministry of Home Affairs"
    ],
    options_mr: [
      "(A) शिक्षण मंत्रालय",
      "(B) केंद्रीय आरोग्य व कुटुंब कल्याण मंत्रालय (Ministry of Health and Family Welfare)",
      "(C) वित्त मंत्रालय",
      "(D) गृह मंत्रालय"
    ],
    correct_answer: "(B) Ministry of Health and Family Welfare",
    correct_answer_mr: "(B) केंद्रीय आरोग्य व कुटुंब कल्याण मंत्रालय (Ministry of Health and Family Welfare)",
    explanation: "The National Health Mission (NHM) is administered by the Ministry of Health and Family Welfare, Govt. of India.",
    explanation_mr: "राष्ट्रीय आरोग्य अभियान केंद्र सरकारच्या आरोग्य व कुटुंब कल्याण मंत्रालयाद्वारे चालवले जाते.",
    difficulty: "easy" as const,
    topic: "Current Affairs",
    category: "Non-Technical: General Knowledge"
  },
  {
    id: 23005,
    question: "DHS stands for:",
    question_mr: "सार्वजनिक आरोग्य विभागातील DHS चा सविस्तर अर्थ काय आहे?",
    options: [
      "(A) Department of Hospital Safety",
      "(B) Directorate of Health Services",
      "(C) District Health Scheme",
      "(D) Directorate of Human Services"
    ],
    options_mr: [
      "(A) डिपार्टमेंट ऑफ हॉस्पिटल सेफ्टी",
      "(B) आरोग्य सेवा संचालनालय (Directorate of Health Services)",
      "(C) डिस्ट्रीक्ट हेल्थ स्कीम",
      "(D) डायरेक्टर ऑफ ह्युमन सर्व्हिसेस"
    ],
    correct_answer: "(B) Directorate of Health Services",
    correct_answer_mr: "(B) आरोग्य सेवा संचालनालय (Directorate of Health Services)",
    explanation: "Directorate of Health Services (DHS) oversees public health infrastructure and healthcare delivery in the state.",
    explanation_mr: "DHS म्हणजे महाराष्ट्राचे आरोग्य सेवा संचालनालय, जे सर्व शासकीय रुग्णालये व आरोग्य केंद्रांचे नियंत्रण करते.",
    difficulty: "easy" as const,
    topic: "DHS",
    category: "Non-Technical: General Knowledge"
  }
];

export const CHAPTER_23_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 23001 + i;
  const baseIndex = i % 5;
  const template = rawQuestions[baseIndex];

  return {
    id,
    category: template.category,
    section: 'gk',
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
    chapter_name: "GK, Constitution, Current Affairs & DHS"
  };
});
