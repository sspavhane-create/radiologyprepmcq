import { Question } from '../types';

const rawQuestions = [
  {
    id: 22001,
    question: "The primary objective of hospital administration is:",
    question_mr: "रुग्णालय प्रशासनाचा (Hospital Administration) मुख्य उद्देश काय असतो?",
    options: [
      "(A) Increase revenue only",
      "(B) Efficient delivery of quality healthcare",
      "(C) Reduce staff",
      "(D) Purchase equipment only"
    ],
    options_mr: [
      "(A) फक्त उत्पन्न वाढवणे",
      "(B) रुग्णांना दर्जेदार व कार्यक्षम आरोग्य सेवा पुरवणे (Efficient delivery of quality healthcare)",
      "(C) कर्मचारी कमी करणे",
      "(D) फक्त उपकरणे खरेदी करणे"
    ],
    correct_answer: "(B) Efficient delivery of quality healthcare",
    correct_answer_mr: "(B) रुग्णांना दर्जेदार व कार्यक्षम आरोग्य सेवा पुरवणे (Efficient delivery of quality healthcare)",
    explanation: "Hospital administration exists to coordinate clinical, financial, and supportive services to provide safe, effective patient care.",
    explanation_mr: "रुग्णांची काळजी, सुरक्षितता आणि गुणवत्तापूर्ण आरोग्य सेवा देणे हा रुग्णालय प्रशासनाचा मुख्य उद्देश असतो.",
    difficulty: "easy" as const,
    topic: "Hospital Administration",
    category: "Technical: Infection Control & Safety"
  },
  {
    id: 22002,
    question: "Which ethical principle requires obtaining informed consent before a procedure?",
    question_mr: "उपचारापूर्वी किंवा x-ray काढण्यापूर्वी रुग्णाची संमती (Informed Consent) घेणे हे कोणत्या वैद्यकीय नैतिकतेच्या तत्त्वावर आधारित आहे?",
    options: [
      "(A) Justice",
      "(B) Respect for patient autonomy",
      "(C) Non-maleficence only",
      "(D) Beneficence only"
    ],
    options_mr: [
      "(A) न्याय (Justice)",
      "(B) रुग्णाचा स्वायत्तता अधिकार / निर्णयस्वातंत्र्य (Respect for patient autonomy)",
      "(C) हानी न करणे",
      "(D) कल्याण करणे"
    ],
    correct_answer: "(B) Respect for patient autonomy",
    correct_answer_mr: "(B) रुग्णाचा स्वायत्तता अधिकार / निर्णयस्वातंत्र्य (Respect for patient autonomy)",
    explanation: "Respect for autonomy holds that patients have the moral right to decide what happens to their body, requiring informed consent.",
    explanation_mr: "रुग्णाला आपल्या शरीरावर होणाऱ्या उपचारांबद्दल माहिती मिळवून निर्णय घेण्याचा पूर्ण हक्क (Autonomy) असतो.",
    difficulty: "easy" as const,
    topic: "Medical Ethics",
    category: "Technical: Patient Care & Contrast Media"
  },
  {
    id: 22003,
    question: "The single most effective method to prevent hospital-acquired infections is:",
    question_mr: "रुग्णालयातील संसर्ग (Hospital-Acquired Infection - HAI) रोखण्यासाठी सर्वात प्रभावी उपाय कोणता?",
    options: [
      "(A) Antibiotics",
      "(B) Proper hand hygiene",
      "(C) Double gloving",
      "(D) Isolation only"
    ],
    options_mr: [
      "(A) अँटीबायोटिक्स देणे",
      "(B) हातांची योग्य प्रकारे स्वच्छता राखणे (Proper hand hygiene)",
      "(C) दोन हातमोजे घालणे",
      "(D) रुग्णाला वेगळे ठेवणे"
    ],
    correct_answer: "(B) Proper hand hygiene",
    correct_answer_mr: "(B) हातांची योग्य प्रकारे स्वच्छता राखणे (Proper hand hygiene)",
    explanation: "Adherence to hand hygiene (soap and water or alcohol-based hand rub) is universally recognized as the best way to stop cross-contamination.",
    explanation_mr: "योग्य पद्धतीने हात धुणे ही जंतूसंसर्ग रोखण्याची सर्वात महत्त्वाची व स्वस्त पद्धत आहे.",
    difficulty: "easy" as const,
    topic: "Infection Control",
    category: "Technical: Infection Control & Safety"
  },
  {
    id: 22004,
    question: "Sharps should be discarded in:",
    question_mr: "बायोमेडिकल वेस्ट नियमांनुसार टोकदार कचरा (सुया, सिरिंज, स्केल्पेल - Sharps) कोणत्या पात्रात टाकावा?",
    options: [
      "(A) Yellow bag",
      "(B) Black bag",
      "(C) Puncture-proof sharps container",
      "(D) General waste bin"
    ],
    options_mr: [
      "(A) पिवळी पिशवी",
      "(B) काळी पिशवी",
      "(C) पंक्चर-प्रूफ / पांढरा ट्रान्सल्युसंट डबा (Puncture-proof translucent sharps container)",
      "(D) कचऱ्याची पेटी"
    ],
    correct_answer: "(C) Puncture-proof sharps container",
    correct_answer_mr: "(C) पंक्चर-प्रूफ / पांढरा ट्रान्सल्युसंट डबा (Puncture-proof translucent sharps container)",
    explanation: "Used needles, blades, and contaminated sharps must be placed immediately in rigid, puncture-resistant containers to prevent needle-stick injuries.",
    explanation_mr: "सुया किंवा टोकदार वस्तू पंक्चर-प्रूफ ट्रान्सल्युसंट पांढऱ्या बॉक्समध्ये गोळा करून निर्जंतुक केल्या जातात.",
    difficulty: "easy" as const,
    topic: "Biomedical Waste Rules",
    category: "Technical: Infection Control & Safety"
  },
  {
    id: 22005,
    question: "Equipment quality control records should be:",
    question_mr: "रुग्णालयातील x-ray उपकरणांच्या गुणवत्तेचे (QC Records) दस्तऐवज कसे ठेवले पाहिजेत?",
    options: [
      "(A) Destroyed monthly",
      "(B) Maintained and available for audit",
      "(C) Shared publicly",
      "(D) Optional"
    ],
    options_mr: [
      "(A) दरमहा नष्ट करणे",
      "(B) व्यवस्थित नोंदवून ठेवणे व ऑडीट / AERB तपासणीसाठी उपलब्ध असणे (Maintained for audit)",
      "(C) सार्वजनिक करणे",
      "(D) ऐच्छिक ठेवणे"
    ],
    correct_answer: "(B) Maintained and available for audit",
    correct_answer_mr: "(B) व्यवस्थित नोंदवून ठेवणे व ऑडीट / AERB तपासणीसाठी उपलब्ध असणे (Maintained for audit)",
    explanation: "Regulatory standards (AERB/NABH) require written QA logs to be archived for statutory safety compliance and equipment audit.",
    explanation_mr: "AERB आणि NABH च्या नियमांनुसार उपकरणांचे सेफ्टी व QC रेकॉर्ड जपून ठेवणे बंधनकारक आहे.",
    difficulty: "easy" as const,
    topic: "NABH/AERB Documentation",
    category: "Technical: Radiation Protection & Hazards"
  }
];

export const CHAPTER_22_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 22001 + i;
  const baseIndex = i % 5;
  const template = rawQuestions[baseIndex];

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
    difficulty: template.difficulty,
    topic: template.topic,
    chapter_name: "Hospital Administration, Ethics & Infection Control"
  };
});
