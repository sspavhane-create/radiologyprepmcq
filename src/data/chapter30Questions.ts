import { Question } from '../types';

const rawQuestions = [
  {
    id: 30001,
    question: "The SI unit of absorbed radiation dose is:",
    question_mr: "शोषून घेतलेल्या रेडिएशन डोसचे (Absorbed Dose) SI एकक कोणते?",
    options: [
      "(A) Sievert (Sv)",
      "(B) Gray (Gy)",
      "(C) Becquerel (Bq)",
      "(D) Roentgen (R)"
    ],
    options_mr: [
      "(A) सीव्हर्ट (Sv)",
      "(B) ग्रे (Gray - Gy)",
      "(C) बेक्वरेल (Bq)",
      "(D) रॉन्टगेन (R)"
    ],
    correct_answer: "(B) Gray (Gy)",
    correct_answer_mr: "(B) ग्रे (Gray - Gy)",
    explanation: "Gray (Gy) is the SI unit for radiation absorbed dose (1 Gy = 1 Joule/kg).",
    explanation_mr: "शोषून घेतलेल्या रेडिएशन ऊर्जेचे SI एकक 'ग्रे' (Gy) आहे.",
    difficulty: "medium" as const,
    topic: "Comprehensive Revision",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 30002,
    question: "ALARA stands for:",
    question_mr: "ALARA चा पूर्ण अर्थ काय?",
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
    explanation: "ALARA guidelines mandate maintaining radiation exposures as low as practical.",
    explanation_mr: "ALARA तत्त्वाचा उद्देश रेडिएशन डोस शक्य तितका कमी ठेवणे हा आहे.",
    difficulty: "medium" as const,
    topic: "Radiation Safety",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 30003,
    question: "DICOM is primarily a standard for:",
    question_mr: "DICOM चा प्राथमिक उद्देश काय आहे?",
    options: [
      "(A) Hospital billing",
      "(B) Medical image storage and communication",
      "(C) Blood testing",
      "(D) Drug inventory"
    ],
    options_mr: [
      "(A) बिलिंग",
      "(B) वैद्यकीय प्रतिमांचे डिजिटल संचयन व संवादाचे जागतिक प्रमाण (Medical image storage and communication)",
      "(C) रक्त तपासणी",
      "(D) औषध नोंद"
    ],
    correct_answer: "(B) Medical image storage and communication",
    correct_answer_mr: "(B) वैद्यकीय प्रतिमांचे डिजिटल संचयन व संवादाचे जागतिक प्रमाण (Medical image storage and communication)",
    explanation: "DICOM standardizes digital medical image formats and transfer protocols.",
    explanation_mr: "डायकॉम मानकांमुळे विविध कंपन्यांच्या एक्स-रे व सीटी मशीनचा डेटा नेटवर्कवर एकत्र पाहता येतो.",
    difficulty: "medium" as const,
    topic: "Digital Imaging",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 30004,
    question: "Routine quality control helps ensure:",
    question_mr: "नियमित क्वालिटी कंट्रोल (QC) चाचण्यांमुळे काय सुनिश्चित होते?",
    options: [
      "(A) Higher patient dose",
      "(B) Consistent image quality and patient safety",
      "(C) Longer exposure times",
      "(D) Reduced staffing"
    ],
    options_mr: [
      "(A) जास्त डोस",
      "(B) प्रतिमेची सातत्यपूर्ण उच्च गुणवत्ता व रुग्णाची सुरक्षा (Consistent image quality and safety)",
      "(C) जास्त वेळ",
      "(D) कमी कर्मचारी"
    ],
    correct_answer: "(B) Consistent image quality and patient safety",
    correct_answer_mr: "(B) प्रतिमेची सातत्यपूर्ण उच्च गुणवत्ता व रुग्णाची सुरक्षा (Consistent image quality and safety)",
    explanation: "QC programs ensure diagnostic images remain consistently sharp with minimal patient exposure.",
    explanation_mr: "QC नियमांमुळे क्ष-किरणांचा दर्जा आणि रुग्णांची सुरक्षा दोन्ही टिकून राहते.",
    difficulty: "medium" as const,
    topic: "Quality Control",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 30005,
    question: "Before every examination, the radiographer should verify:",
    question_mr: "प्रत्येक तपासणीपूर्वी रेडिओग्राफरने काय सत्यापित केले पाहिजे?",
    options: [
      "(A) Machine serial number",
      "(B) Patient identity, examination and consent where applicable",
      "(C) Room temperature",
      "(D) Film batch number"
    ],
    options_mr: [
      "(A) मशीन सिरीअल नंबर",
      "(B) रुग्णाची ओळख, केसपेपरनुसार मागणी व आवश्यकतेनुसार संमतीपत्र (Patient identity and exam)",
      "(C) खोलीचे तापमान",
      "(D) फिल्म बॅच नंबर"
    ],
    correct_answer: "(B) Patient identity, examination and consent where applicable",
    correct_answer_mr: "(B) रुग्णाची ओळख, केसपेपरनुसार मागणी व आवश्यकतेनुसार संमतीपत्र (Patient identity and exam)",
    explanation: "Patient verification is critical to prevent medical imaging mistakes.",
    explanation_mr: "चुकीच्या रुग्णाचा x-ray निघू नये म्हणून नाव व केसपेपरची तपासणी आवश्यक आहे.",
    difficulty: "medium" as const,
    topic: "Professional Practice",
    category: "Technical: Patient Care & Contrast Media"
  }
];

export const CHAPTER_30_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 30001 + i;
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
    chapter_name: "Final Comprehensive Mock Test"
  };
});
