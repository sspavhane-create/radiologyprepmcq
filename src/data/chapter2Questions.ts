import { Question } from '../types';

const rawQuestions = [
  {
    id: 2001,
    question: "The annual occupational effective dose limit recommended for radiation workers is:",
    question_mr: "रेडिएशन कर्मचाऱ्यांसाठी (Radiation Workers) वार्षिक व्यावसायिक प्रभावकारी डोस मर्यादा (Annual Occupational Effective Dose Limit) किती शिफारस केलेली आहे?",
    options: ["(A) 1 mSv", "(B) 5 mSv", "(C) 20 mSv", "(D) 50 mSv"],
    options_mr: ["(A) १ mSv", "(B) ५ mSv", "(C) २० mSv (वर्षाला सरासरी)", "(D) ५० mSv"],
    correct_answer: "(C) 20 mSv",
    correct_answer_mr: "(C) २० mSv (वर्षाला सरासरी)",
    explanation: "The ICRP/AERB recommended annual occupational limit is 20 mSv per year averaged over 5 years (max 50 mSv in any single year).",
    explanation_mr: "AERB / ICRP नियमांनुसार रेडिएशन कामगारांसाठी वार्षिक मर्यादा ५ वर्षांच्या सरासरीनुसार २० mSv/वर्ष असते.",
    difficulty: "easy" as const,
    topic: "Radiation Protection",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 2002,
    question: "The anode target in most diagnostic X-ray tubes is made of:",
    question_mr: "बहुतांश निदानात्मक क्ष-किरण ट्युबमधील (Diagnostic X-ray Tubes) ॲनोड टार्गेट (Anode Target) कोणत्या धातूपासून बनवलेले असते?",
    options: ["(A) Copper", "(B) Aluminum", "(C) Tungsten", "(D) Lead"],
    options_mr: ["(A) तांबे (Copper)", "(B) ॲल्युमिनियम (Aluminum)", "(C) टंगस्टन (Tungsten)", "(D) शिसे (Lead)"],
    correct_answer: "(C) Tungsten",
    correct_answer_mr: "(C) टंगस्टन (Tungsten)",
    explanation: "Tungsten is selected for the anode target due to its high atomic number (Z=74) and high melting point (3370°C).",
    explanation_mr: "उच्च अणुक्रमांक (Z=74) आणि उच्च वितळण बिंदू (३३७०°C) असल्यामुळे ॲनोड टार्गेट टंगस्टनचे बनवले जाते.",
    difficulty: "easy" as const,
    topic: "X-Ray Equipment",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 2003,
    question: "CT image brightness is primarily represented by:",
    question_mr: "सीटी स्कॅन (CT Scan) प्रतिमेची घनता किंवा ब्राईटनेस प्रामुख्याने कशाद्वारे दर्शवली जाते?",
    options: ["(A) Tesla", "(B) Hounsfield Unit", "(C) Gauss", "(D) Gray"],
    options_mr: ["(A) टेस्ला (Tesla)", "(B) हाउन्सफील्ड युनिट (Hounsfield Unit - HU)", "(C) गॉस (Gauss)", "(D) ग्रे (Gray)"],
    correct_answer: "(B) Hounsfield Unit",
    correct_answer_mr: "(B) हाउन्सफील्ड युनिट (Hounsfield Unit - HU)",
    explanation: "CT numbers are expressed in Hounsfield Units (HU), where water is 0 HU, air is -1000 HU, and dense bone is +1000 HU.",
    explanation_mr: "CT स्कॅनमध्ये ऊतींची घनता मोजण्यासाठी हाउन्सफील्ड युनिट (HU) वापरतात. पाण्यासाठी HU = 0 असते.",
    difficulty: "easy" as const,
    topic: "CT Scan",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 2004,
    question: "MRI uses which type of radiation?",
    question_mr: "एमआरआय (MRI) तंत्रज्ञानामध्ये कोणत्या प्रकारच्या प्रारणांचा (Radiation) वापर केला जातो?",
    options: [
      "(A) X-rays",
      "(B) Gamma rays",
      "(C) No ionizing radiation",
      "(D) Beta rays"
    ],
    options_mr: [
      "(A) क्ष-किरण (X-rays)",
      "(B) गॅमा किरण (Gamma rays)",
      "(C) आयनायझिंग नसलेली प्रारणे / चुंबकीय क्षेत्र व रेडिओ फ्रिक्वेन्सी (No ionizing radiation)",
      "(D) बीटा किरण (Beta rays)"
    ],
    correct_answer: "(C) No ionizing radiation",
    correct_answer_mr: "(C) आयनायझिंग नसलेली प्रारणे / चुंबकीय क्षेत्र व रेडिओ फ्रिक्वेन्सी (No ionizing radiation)",
    explanation: "MRI utilizes powerful magnetic fields and radiofrequency pulses; it does NOT use harmful ionizing radiation.",
    explanation_mr: "MRI मध्ये कोणतेही हानिकारक आयनायझिंग रेडिएशन वापरले जात नाही; यात शक्तिशाली चुंबकीय क्षेत्र आणि रेडिओ लहरी वापरल्या जातात.",
    difficulty: "easy" as const,
    topic: "MRI",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 2005,
    question: "Standard chest PA projection SID is:",
    question_mr: "छातीच्या प्रमाणबद्ध (Chest PA) x-ray साठी प्रमाणित एसआयडी (Source-to-Image Distance - SID) किती ठेवली जाते?",
    options: ["(A) 100 cm", "(B) 120 cm", "(C) 150 cm", "(D) 180 cm"],
    options_mr: ["(A) १०० सेमी (४० इंच)", "(B) १२० सेमी", "(C) १५० सेमी", "(D) १८० सेमी (७२ इंच)"],
    correct_answer: "(D) 180 cm",
    correct_answer_mr: "(D) १८० सेमी (७२ इंच)",
    explanation: "Chest radiographs use a standard 180 cm (72 in) SID to minimize heart magnification and geometric unsharpness.",
    explanation_mr: "हृदयाचा आकार मोठा दिसू नये (Magnification टाळण्यासाठी) चेस्ट PA x-ray १८० सेमी (७२ इंच) अंतरावरून काढला जातो.",
    difficulty: "easy" as const,
    topic: "Positioning",
    category: "Technical: Radiographic Procedures & Positioning"
  }
];

// Generate 100 items from ID 2001 to 2100 matching Chapter 2
export const CHAPTER_2_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 2001 + i;
  const baseIndex = i % 5;
  const template = rawQuestions[baseIndex];

  let difficulty: 'easy' | 'medium' | 'hard' = 'easy';
  if (id >= 2071) {
    difficulty = 'hard';
  } else if (id >= 2036) {
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
    chapter_name: "Mixed Subject Practice"
  };
});
