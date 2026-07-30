import { Question } from '../types';

const rawQuestions = [
  {
    id: 26001,
    question: "Which imaging modality uses no ionizing radiation?",
    question_mr: "कोणत्या इमेजिंग तंत्रज्ञानामध्ये आयनायझिंग रेडिएशनचा (Ionizing Radiation) अजिबात वापर होत नाही?",
    options: [
      "(A) CT Scan",
      "(B) MRI",
      "(C) X-ray",
      "(D) Fluoroscopy"
    ],
    options_mr: [
      "(A) सीटी स्कॅन",
      "(B) एमआरआय (MRI / Ultrasound)",
      "(C) एक्स-रे",
      "(D) फ्लोरोस्कोपी"
    ],
    correct_answer: "(B) MRI",
    correct_answer_mr: "(B) एमआरआय (MRI / Ultrasound)",
    explanation: "Magnetic Resonance Imaging (MRI) uses strong magnetic fields and radiofrequency pulses, involving no ionizing X-rays or gamma rays.",
    explanation_mr: "MRI आणि सोनोग्राफीमध्ये (Ultrasound) आयनायझिंग रेडिएशन नसते, त्यामुळे ते गर्भवती महिलांसाठी अधिक सुरक्षित मानले जातात.",
    difficulty: "medium" as const,
    topic: "Mock Test Set-2",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 26002,
    question: "A repeat exposure should be avoided primarily because of:",
    question_mr: "एक्स-रे पुन्हा काढणे (Repeat exposure) प्रामुख्याने का टाळले पाहिजे?",
    options: [
      "(A) Film cost",
      "(B) Time delay",
      "(C) Unnecessary patient radiation dose",
      "(D) Tube heating"
    ],
    options_mr: [
      "(A) फिल्मचा खर्च",
      "(B) वेळेचा अपव्यय",
      "(C) रुग्णाला मिळणारा अनावश्यक रेडिएशन डोस (Unnecessary patient dose)",
      "(D) ट्युब गरम होणे"
    ],
    correct_answer: "(C) Unnecessary patient radiation dose",
    correct_answer_mr: "(C) रुग्णाला मिळणारा अनावश्यक रेडिएशन डोस (Unnecessary patient dose)",
    explanation: "Repeated exposures double the radiation dose to the patient without medical benefit, violating ALARA radiation safety principles.",
    explanation_mr: "रिपीट एक्स-रे मुळे रुग्णावर दुप्पट रेडिएशन पडते, जे अलारा (ALARA) नियमांचे उल्लंघन आहे.",
    difficulty: "medium" as const,
    topic: "Case-based",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 26003,
    question: "A fracture appears on a plain radiograph generally as:",
    question_mr: "हाडाचे फ्रॅक्चर (Fracture) x-ray वर प्रामुख्याने कसे दिसते?",
    options: [
      "(A) A radiopaque white line",
      "(B) A radiolucent dark line through bone",
      "(C) Soft tissue swelling only",
      "(D) Air-fluid level"
    ],
    options_mr: [
      "(A) अतिशय पांढरी रेघ",
      "(B) हाडामधून जाणारी काळी / पारदर्शक रेघ (Radiolucent line)",
      "(C) फक्त सूज",
      "(D) हवा-द्रव पातळी"
    ],
    correct_answer: "(B) A radiolucent dark line through bone",
    correct_answer_mr: "(B) हाडामधून जाणारी काळी / पारदर्शक रेघ (Radiolucent line)",
    explanation: "Fracture gaps reduce bone tissue density at the breakdown site, causing increased beam transmission and a radiolucent (darker) line.",
    explanation_mr: "हाड तुटलेल्या जागी घनता कमी झाल्यामुळे क्ष-किरण जास्त पार होतात व x-ray वर काळी रेघ (Radiolucent line) दिसते.",
    difficulty: "medium" as const,
    topic: "Image Interpretation",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 26004,
    question: "The anode target in most diagnostic X-ray tubes is made of:",
    question_mr: "डायग्नोस्टिक एक्स-रे ट्युबमधील ॲनोड टार्गेट (Anode Target) प्रामुख्याने कशापासून बनवलेले असते?",
    options: [
      "(A) Copper",
      "(B) Aluminium",
      "(C) Tungsten",
      "(D) Lead"
    ],
    options_mr: [
      "(A) तांबे (कॉपर)",
      "(B) ॲल्युमिनियम",
      "(C) टंगस्टन (Tungsten - Z=74, MP=3370°C)",
      "(D) लेड"
    ],
    correct_answer: "(C) Tungsten",
    correct_answer_mr: "(C) टंगस्टन (Tungsten - Z=74, MP=3370°C)",
    explanation: "Tungsten is chosen for its high atomic number (Z=74), high melting point (3370°C), and efficient X-ray production capability.",
    explanation_mr: "टंगस्टनचा अणुक्रमांक उच्च (Z=74) असून त्याचा द्रवणांक खूप जास्त (३३७०°C) असल्याने तो उष्णता सहन करू शकतो.",
    difficulty: "medium" as const,
    topic: "Viva",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 26005,
    question: "The recommended radiation protection principle is:",
    question_mr: "रेडिएशन सुरक्षेचे आंतरराष्ट्रीय मान्यताप्राप्त तत्त्व कोणते?",
    options: [
      "(A) ALATA",
      "(B) ALARP",
      "(C) ALARA",
      "(D) ALADA"
    ],
    options_mr: [
      "(A) अलाटा",
      "(B) अलार्प",
      "(C) अलारा (ALARA - As Low As Reasonably Achievable)",
      "(D) अलाडा"
    ],
    correct_answer: "(C) ALARA",
    correct_answer_mr: "(C) अलारा (ALARA - As Low As Reasonably Achievable)",
    explanation: "ALARA (As Low As Reasonably Achievable) is the fundamental principle of radiation protection advocated by ICRP and AERB.",
    explanation_mr: "ALARA हे रेडिएशन सुरक्षेतील मुख्य तत्त्व आहे, ज्याचा उद्देश डोस किमान ठेवणे हा आहे.",
    difficulty: "medium" as const,
    topic: "Mixed",
    category: "Technical: Radiation Protection & Hazards"
  }
];

export const CHAPTER_26_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 26001 + i;
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
    chapter_name: "Mock Test Set-2"
  };
});
