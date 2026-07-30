import { Question } from '../types';

const rawQuestions = [
  {
    id: 8001,
    question: "The largest organ of the human body is:",
    question_mr: "मानवी शरीरातील सर्वात मोठा अवयव कोणता आहे?",
    options: ["(A) Liver", "(B) Skin", "(C) Brain", "(D) Lung"],
    options_mr: ["(A) यकृत (Liver)", "(B) त्वचा (Skin)", "(C) मेंदू", "(D) फुफ्फुस"],
    correct_answer: "(B) Skin",
    correct_answer_mr: "(B) त्वचा (Skin)",
    explanation: "Skin is the largest external organ of the human body, covering its entire surface area.",
    explanation_mr: "त्वचा (Skin) हा संपूर्ण शरीराला झाकणारा मानवी शरीरातील सर्वात मोठा अवयव आहे.",
    difficulty: "easy" as const,
    topic: "Anatomy",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 8002,
    question: "Normal adult heart rate is:",
    question_mr: "सामान्य प्रौढ व्यक्तीच्या हृदयाचे ठोक (Heart Rate) दर मिनिटाला किती असतात?",
    options: [
      "(A) 40–60 beats/min",
      "(B) 60–100 beats/min",
      "(C) 100–140 beats/min",
      "(D) 140–180 beats/min"
    ],
    options_mr: [
      "(A) ४०–६० ठोक/मिनिट",
      "(B) ६०–१०० ठोके प्रति मिनिट (60–100 beats/min)",
      "(C) १००–१४० ठोक/मिनिट",
      "(D) १४०–१८० ठोक/मिनिट"
    ],
    correct_answer: "(B) 60–100 beats/min",
    correct_answer_mr: "(B) ६०–१०० ठोके प्रति मिनिट (60–100 beats/min)",
    explanation: "A normal resting heart rate for adults ranges from 60 to 100 beats per minute.",
    explanation_mr: "निरोगी प्रौढ व्यक्तीमध्ये विश्रांतीच्या वेळी हृदयाची गती दर मिनिटाला ६० ते १०० ठोक असते.",
    difficulty: "easy" as const,
    topic: "Physiology",
    category: "Technical: Patient Care & Contrast Media"
  },
  {
    id: 8003,
    question: "The most common route for iodinated contrast administration in CT is:",
    question_mr: "सीटी स्कॅनमध्ये आयोडिनेटेड कॉन्ट्रास्ट (Iodinated contrast) देण्याचा सर्वात सामान्य मार्ग कोणता?",
    options: [
      "(A) Oral",
      "(B) Intravenous",
      "(C) Intra-articular",
      "(D) Intrathecal"
    ],
    options_mr: [
      "(A) तोंडावाटे (Oral)",
      "(B) शिरेतून / रक्ताच्या वाहिनीतून (Intravenous - IV)",
      "(C) सांध्यातून",
      "(D) मणक्यातून"
    ],
    correct_answer: "(B) Intravenous",
    correct_answer_mr: "(B) शिरेतून / रक्ताच्या वाहिनीतून (Intravenous - IV)",
    explanation: "Intravenous (IV) injection via power injector is the primary route for iodinated contrast enhancement in diagnostic CT imaging.",
    explanation_mr: "सीटी अँजिओग्राफी व कॉन्ट्रास्ट स्कॅनसाठी शिरेमध्ये (IV) सलाइन/इंजेक्टरद्वारे कॉन्ट्रास्ट औषध दिले जाते.",
    difficulty: "easy" as const,
    topic: "Contrast Media",
    category: "Technical: Patient Care & Contrast Media"
  },
  {
    id: 8004,
    question: "Drug commonly used for anaphylaxis is:",
    question_mr: "कॉन्ट्रास्ट मिडियामुळे गंभीर ॲनाफिलेक्टिक रिएक्शन (Anaphylaxis) आल्यास तातडीने दिले जाणारे मुख्य औषध कोणते?",
    options: [
      "(A) Atropine",
      "(B) Adrenaline (Epinephrine)",
      "(C) Diazepam",
      "(D) Furosemide"
    ],
    options_mr: [
      "(A) ॲट्रोपिन",
      "(B) ॲड्रेनालाईन / एपिनेफ्रीन (Adrenaline / Epinephrine)",
      "(C) डायझेपाम",
      "(D) फ्युरोसेमाईड"
    ],
    correct_answer: "(B) Adrenaline (Epinephrine)",
    correct_answer_mr: "(B) ॲड्रेनालाईन / एपिनेफ्रीन (Adrenaline / Epinephrine)",
    explanation: "Adrenaline (Epinephrine) is the first-line emergency drug for severe allergic anaphylaxis reactions.",
    explanation_mr: "तीव्र ॲलर्जी किंवा ॲनाफिलेक्टिक शॉकच्या उपचारात ॲड्रेनालाईन हे मुख्य आपत्कालीन औषध आहे.",
    difficulty: "easy" as const,
    topic: "Emergency",
    category: "Technical: Patient Care & Contrast Media"
  },
  {
    id: 8005,
    question: "Before every radiographic examination, patient identification should be confirmed using:",
    question_mr: "कोणतीही एक्स-रे तपासणी सुरू करण्यापूर्वी रुग्णाची ओळख पटवण्यासाठी किमान किती ओळखदर्शक बाबी (Identifiers) वापरल्या पाहिजेत?",
    options: [
      "(A) Room number only",
      "(B) At least two identifiers",
      "(C) Bed number only",
      "(D) Age only"
    ],
    options_mr: [
      "(A) फक्त रूम नंबर",
      "(B) किमान दोन ओळखदर्शक बाबी - नाव, आयडी किंवा जन्मतारीख (At least two identifiers)",
      "(C) फक्त बेड नंबर",
      "(D) फक्त वय"
    ],
    correct_answer: "(B) At least two identifiers",
    correct_answer_mr: "(B) किमान दोन ओळखदर्शक बाबी - नाव, आयडी किंवा जन्मतारीख (At least two identifiers)",
    explanation: "Patient safety protocols require confirming identity with at least two unique identifiers (e.g. full name and MRN/DOB).",
    explanation_mr: "चुकीच्या रुग्णाचा एक्स-रे टाळण्यासाठी पूर्ण नाव आणि नोंदणी क्रमांक/जन्मतारीख हे दोन पुरावे तपासणे अनिवार्य असते.",
    difficulty: "easy" as const,
    topic: "Patient Care",
    category: "Technical: Patient Care & Contrast Media"
  }
];

export const CHAPTER_8_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 8001 + i;
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
    chapter_name: "Anatomy, Physiology, Contrast & Patient Care"
  };
});
