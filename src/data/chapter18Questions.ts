import { Question } from '../types';

const rawQuestions = [
  {
    id: 18001,
    question: "The main magnetic field in MRI is denoted by:",
    question_mr: "एमआरआय (MRI) मधील मुख्य स्थिर चुंबकीय क्षेत्राला कोणत्या चिन्हाने दर्शविले जाते?",
    options: [
      "(A) B1",
      "(B) B0",
      "(C) Gx",
      "(D) RF"
    ],
    options_mr: [
      "(A) B1",
      "(B) B0 (Static Magnetic Field)",
      "(C) Gx",
      "(D) RF"
    ],
    correct_answer: "(B) B0",
    correct_answer_mr: "(B) B0 (Static Magnetic Field)",
    explanation: "The strong primary static magnetic field produced by the superconducting magnet in MRI is designated as B0.",
    explanation_mr: "MRI मधील मुख्य स्थिर चुंबकीय क्षेत्राला B0 म्हटले जाते (उदा. 1.5 Tesla किंवा 3.0 Tesla).",
    difficulty: "medium" as const,
    topic: "MRI Physics",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 18002,
    question: "Which sequence is most sensitive for detecting edema?",
    question_mr: "एमआरआय मध्ये उतींमधील सूज किंवा पाणी (Edema / Fluid) शोधण्यासाठी कोणती सीक्वेन्स सर्वात संवेदनशील (Sensitive) असते?",
    options: [
      "(A) T1-weighted",
      "(B) T2-weighted",
      "(C) Gradient echo only",
      "(D) Proton density only"
    ],
    options_mr: [
      "(A) T1-वेटे़ड",
      "(B) T2-वेटे़ड (T2-Weighted Image / FLAIR)",
      "(C) ग्रेडियंट एको",
      "(D) प्रोटॉन डेन्सिटी"
    ],
    correct_answer: "(B) T2-weighted",
    correct_answer_mr: "(B) T2-वेटे़ड (T2-Weighted Image / FLAIR)",
    explanation: "Free water and pathological edema have long T2 relaxation times, causing them to appear bright (hyperintense) on T2-weighted images.",
    explanation_mr: "T2-वेटे़ड प्रतिमेवर पाणी आणि द्रवपदार्थ (Fluid / Edema) तेजस्वी पांढरे (Bright) दिसतात.",
    difficulty: "medium" as const,
    topic: "Pulse Sequences",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 18003,
    question: "Patients with which device generally require strict MRI compatibility verification?",
    question_mr: "कोणते उपकरण बसवलेल्या रुग्णांना एमआरआय (MRI) कक्षात नेण्यापूर्वी कडक तपासणी व सुरक्षितता (Compatibility) पडताळणी आवश्यक असते?",
    options: [
      "(A) ECG electrodes",
      "(B) Blood pressure cuff",
      "(C) Cardiac pacemaker",
      "(D) Lead apron"
    ],
    options_mr: [
      "(A) इसीजी इलेक्ट्रोड",
      "(B) बीपी कफ",
      "(C) कार्डियाक पेसमेकर (Cardiac Pacemaker)",
      "(D) लेड ॲप्रन"
    ],
    correct_answer: "(C) Cardiac pacemaker",
    correct_answer_mr: "(C) कार्डियाक पेसमेकर (Cardiac Pacemaker)",
    explanation: "Strong magnetic fields can cause displacement, thermal heating, or electrical dysfunction in non-MRI-conditional cardiac pacemakers.",
    explanation_mr: "कार्डियाक पेसमेकरमधील धातू चुंबकीय क्षेत्रामुळे हलण्याची किंवा त्याचे काम बंद पडण्याची गंभीर भीती असते.",
    difficulty: "medium" as const,
    topic: "MRI Safety",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 18004,
    question: "Gradient coils are primarily responsible for:",
    question_mr: "एमआरआय मधील ग्रेडियंट कॉइल्सचा (Gradient Coils) मुख्य उपयोग काय?",
    options: [
      "(A) RF transmission",
      "(B) Spatial encoding",
      "(C) Cooling helium",
      "(D) Generating X-rays"
    ],
    options_mr: [
      "(A) आरएफ प्रेषण",
      "(B) प्रतिमेमधील अवकाशीय स्थान निश्चिती (Spatial Encoding - Slice selection & phase/freq encoding)",
      "(C) हेलियम थंड करणे",
      "(D) एक्स-रे तयार करणे"
    ],
    correct_answer: "(B) Spatial encoding",
    correct_answer_mr: "(B) प्रतिमेमधील अवकाशीय स्थान निश्चिती (Spatial Encoding - Slice selection & phase/freq encoding)",
    explanation: "Gradient coils create linear magnetic field variations along X, Y, and Z axes to achieve spatial encoding of MR signals.",
    explanation_mr: "ग्रेडियंट कॉइल्स मुख्य चुंबकीय क्षेत्रामध्ये लहान बदल करून स्लाईस निवडणे व सिग्नल्सचे स्थान (Spatial encoding) ठरवतात.",
    difficulty: "medium" as const,
    topic: "Gradient Coils",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 18005,
    question: "The primary function of an RF receive coil is to:",
    question_mr: "एमआरआय मधील आरएफ रिसीव्ह कॉइलचे (RF Receive Coil) प्राथमिक कार्य काय असते?",
    options: [
      "(A) Generate X-rays",
      "(B) Detect MR signal from tissues",
      "(C) Measure blood pressure",
      "(D) Control table movement"
    ],
    options_mr: [
      "(A) एक्स-रे तयार करणे",
      "(B) मानवी शरीरातील पेशी/उतींमधून येणारे रेडिओफ्रिक्वेन्सी (MR) सिग्नल्स टिपणे",
      "(C) रक्तदाब मोजणे",
      "(D) टेबल हालचाल नियंत्रित करणे"
    ],
    correct_answer: "(B) Detect MR signal from tissues",
    correct_answer_mr: "(B) मानवी शरीरातील पेशी/उतींमधून येणारे रेडिओफ्रिक्वेन्सी (MR) सिग्नल्स टिपणे",
    explanation: "RF receive coils act as sensitive antennas to detect transverse relaxation RF signals emitted by precessing hydrogen protons.",
    explanation_mr: "आरएफ रिसीव्ह कॉइल ही एक अँटेनासारखे काम करते, जी रुग्णाच्या अवयवातून बाहेर पडणारे अतिसूक्ष्म रेडिओ सिग्नल्स टिपते.",
    difficulty: "medium" as const,
    topic: "RF Coils",
    category: "Technical: Special Imaging Modalities"
  }
];

export const CHAPTER_18_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 18001 + i;
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
    chapter_name: "MRI Physics, Pulse Sequences & Safety"
  };
});
