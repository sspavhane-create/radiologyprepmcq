import { Question } from '../types';

const rawQuestions = [
  {
    id: 25001,
    question: "Which exposure factor primarily controls radiographic density (IR exposure) in film-screen terminology?",
    question_mr: "फिल्म-स्क्रीन रेडिओग्राफीमध्ये रेडियोग्राफिक डेन्सिटी (इमेजचा काळेपणा) प्रामुख्याने कोणत्या घटकाद्वारे नियंत्रित केली जाते?",
    options: [
      "(A) kVp",
      "(B) mAs",
      "(C) SID",
      "(D) OID"
    ],
    options_mr: [
      "(A) kVp",
      "(B) mAs (Milliampere-seconds)",
      "(C) SID",
      "(D) OID"
    ],
    correct_answer: "(B) mAs",
    correct_answer_mr: "(B) mAs (Milliampere-seconds)",
    explanation: "mAs controls the quantity of X-ray photons produced, which directly controls total exposure/density reaching the receptor.",
    explanation_mr: "mAs मुळे एक्स-रे फोटॉन्सची संख्या (Quantity) ठरते, ज्यामुळे फिल्मवर पडणाऱ्या काळेपणाची (Density) पातळी निश्चित होते.",
    difficulty: "medium" as const,
    topic: "Mock Test",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 25002,
    question: "The radiographic projection that best demonstrates the maxillary sinuses is:",
    question_mr: "मॅक्सिलरी सायन्स (Maxillary Sinuses) सर्वोत्तम पाहण्यासाठी कोणती रेडियोग्राफिक प्रोजेक्शन वापरली जाते?",
    options: [
      "(A) Towne",
      "(B) Waters view",
      "(C) Caldwell",
      "(D) SMV"
    ],
    options_mr: [
      "(A) टाऊन व्ह्यू",
      "(B) वॉटर व्ह्यू (Waters View / Parietoacanthial)",
      "(C) कॉलडवेल व्ह्यू",
      "(D) सबमेंटोव्हर्टेक्स (SMV)"
    ],
    correct_answer: "(B) Waters view",
    correct_answer_mr: "(B) वॉटर व्ह्यू (Waters View / Parietoacanthial)",
    explanation: "Waters view (parietoacanthial) projects petrous ridges below maxillary sinus floors, giving an unobstructed view of maxillary sinuses.",
    explanation_mr: "वॉटर व्ह्यू (Waters View) मध्ये पेट्रस बोन खाली सरकते ज्यामुळे मॅक्सिलरी सायन्समध्ये द्रव/फ्लुईड लेव्हल स्पष्ट दिसते.",
    difficulty: "medium" as const,
    topic: "Previous Year Pattern",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 25003,
    question: "The full form of ALARA is:",
    question_mr: "रेडिएशन सुरक्षेतील ALARA तत्त्वाचा सविस्तर अर्थ काय आहे?",
    options: [
      "(A) As Long As Radiation Allows",
      "(B) As Low As Reasonably Achievable",
      "(C) Automatic Low Area Radiation",
      "(D) Advanced Linear Radiation Application"
    ],
    options_mr: [
      "(A) ॲझ लाँग ॲझ रेडिएशन अलाउज",
      "(B) ॲझ लो ॲझ रिझनेबली अचिव्हेबल (As Low As Reasonably Achievable)",
      "(C) ऑटोमॅटिक लो एरिया रेडिएशन",
      "(D) ॲडव्हान्स लिनियर रेडिएशन"
    ],
    correct_answer: "(B) As Low As Reasonably Achievable",
    correct_answer_mr: "(B) ॲझ लो ॲझ रिझनेबली अचिव्हेबल (As Low As Reasonably Achievable)",
    explanation: "ALARA stands for As Low As Reasonably Achievable, emphasizing dose minimization through optimization.",
    explanation_mr: "ALARA म्हणजे रेडिएशन डोस वाजवी मर्यादांमध्ये शक्य तितका कमी ठेवणे.",
    difficulty: "medium" as const,
    topic: "DHS Pattern",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 25004,
    question: "The SI unit of radioactivity is:",
    question_mr: "किरणोत्सारितेचे (Radioactivity) SI एकक कोणते?",
    options: [
      "(A) Curie",
      "(B) Gray",
      "(C) Sievert",
      "(D) Becquerel"
    ],
    options_mr: [
      "(A) क्युरी (Curie - जुने एकक)",
      "(B) ग्रे",
      "(C) सीव्हर्ट",
      "(D) बेक्वरेल (Becquerel - Bq)"
    ],
    correct_answer: "(D) Becquerel",
    correct_answer_mr: "(D) बेक्वरेल (Becquerel - Bq)",
    explanation: "Becquerel (Bq) is the SI unit of radioactivity, equal to 1 disintegration per second (1 Ci = 3.7 x 10^10 Bq).",
    explanation_mr: "रेडिओॲक्टिव्हिटीचे SI एकक बेक्वरेल (Bq) आहे. १ Bq = १ क्षय प्रति सेकंद.",
    difficulty: "medium" as const,
    topic: "Mixed Subject",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 25005,
    question: "Heel effect is more pronounced when using:",
    question_mr: "ॲनोड हील इफेक्ट (Anode Heel Effect) कधी सर्वात जास्त जाणवतो?",
    options: [
      "(A) Small field size",
      "(B) Large field size and short SID",
      "(C) Long SID only",
      "(D) High filtration only"
    ],
    options_mr: [
      "(A) लहान फील्ड साईझ",
      "(B) मोठी फील्ड साईझ व कमी अंतरावर ट्युब (Large field size and short SID)",
      "(C) फक्त लांब SID",
      "(D) जास्त फिल्टर"
    ],
    correct_answer: "(B) Large field size and short SID",
    correct_answer_mr: "(B) मोठी फील्ड साईझ व कमी अंतरावर ट्युब (Large field size and short SID)",
    explanation: "Anode heel effect causes intensity variation across the beam, which is most noticeable at large film sizes and short SIDs.",
    explanation_mr: "मोठी कॅसेट वापरताना व ट्युब जवळ ठेवल्यास कॅथोड बाजूला तीव्रता जास्त व ॲनोड बाजूला कमी तीव्रता स्पष्ट जाणवते.",
    difficulty: "medium" as const,
    topic: "High Difficulty",
    category: "Technical: Radiophysics & Machine Principles"
  }
];

export const CHAPTER_25_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 25001 + i;
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
    chapter_name: "Mock Test Set-1"
  };
});
