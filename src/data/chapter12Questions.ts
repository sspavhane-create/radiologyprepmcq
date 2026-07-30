import { Question } from '../types';

const rawQuestions = [
  {
    id: 12001,
    question: "Before moving a trauma patient with suspected cervical spine injury, the first priority is:",
    question_mr: "गंभीर अपघाती (Trauma) रुग्णामध्ये मान किंवा मणक्याची दुखापत (Cervical Spine Injury) असल्याचा संशय असल्यास पहिली प्राथमिकता कोणती?",
    options: [
      "(A) Remove the collar",
      "(B) Maintain cervical spine immobilization",
      "(C) Sit the patient up",
      "(D) Rotate the neck"
    ],
    options_mr: [
      "(A) कॉलर काढून टाकणे",
      "(B) मानेचे स्थिरीकरण टिकवणे (Maintain cervical spine immobilization)",
      "(C) रुग्णाला बसवणे",
      "(D) मान फिरवणे"
    ],
    correct_answer: "(B) Maintain cervical spine immobilization",
    correct_answer_mr: "(B) मानेचे स्थिरीकरण टिकवणे (Maintain cervical spine immobilization)",
    explanation: "Strict cervical immobilization must be maintained with a collar and side blocks to prevent spinal cord damage during imaging.",
    explanation_mr: "मणक्याचे हाड सरकून मज्जारज्जूला (Spinal cord) दुखापत होऊ नये म्हणून मान स्थिर ठेवणे ही पहिली प्राथमिकता आहे.",
    difficulty: "medium" as const,
    topic: "Trauma Radiography",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 12002,
    question: "The most important radiation protection principle in pediatric imaging is:",
    question_mr: "लहान मुलांच्या (Pediatric) एक्स-रे मध्ये रेडिएशन सुरक्षेचे सर्वात महत्त्वाचे तत्त्व कोणते?",
    options: [
      "(A) Increase kVp for all exams",
      "(B) Repeat every image",
      "(C) Keep dose As Low As Reasonably Achievable (ALARA)",
      "(D) Avoid collimation"
    ],
    options_mr: [
      "(A) सर्वांसाठी kVp वाढवणे",
      "(B) प्रत्येक इमेज पुन्हा काढणे",
      "(C) रेडिएशन डोस शक्य तितका कमी ठेवणे - अलारा तत्त्व (ALARA principle)",
      "(D) कॉलिमेशन न वापरणे"
    ],
    correct_answer: "(C) Keep dose As Low As Reasonably Achievable (ALARA)",
    correct_answer_mr: "(C) रेडिएशन डोस शक्य तितका कमी ठेवणे - अलारा तत्त्व (ALARA principle)",
    explanation: "Pediatric tissues are highly radiosensitive and have a longer life expectancy, making strict adherence to ALARA and minimal dose crucial.",
    explanation_mr: "लहान मुलांमध्ये पेशी जलद विभाजित होत असल्याने ALARA तत्त्वाचे काटेकोर पालन करून किमान डोस दिला पाहिजे.",
    difficulty: "medium" as const,
    topic: "Pediatric Radiography",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 12003,
    question: "During a mobile radiographic exposure, the radiographer should stand at least:",
    question_mr: "मोबाइल एक्स-रे मशीनद्वारे (Mobile X-ray) एक्स्पोजर देताना रेडिओग्राफरने किमान किती अंतरावर उभे राहिले पाहिजे?",
    options: [
      "(A) 0.5 meter away",
      "(B) 1 meter away",
      "(C) 2 meters away at 90° to the beam",
      "(D) Directly behind the patient"
    ],
    options_mr: [
      "(A) ०.५ मीटर",
      "(B) १ मीटर",
      "(C) किमान २ मीटर (६ फूट) लांब व बीमच्या ९०° कोनात (2 meters away at 90°)",
      "(D) रुग्णाच्या मागे"
    ],
    correct_answer: "(C) 2 meters away at 90° to the beam",
    correct_answer_mr: "(C) किमान २ मीटर (६ फूट) लांब व बीमच्या ९०° कोनात (2 meters away at 90°)",
    explanation: "Radiation safety rules require standing at least 2 meters (6 feet) from the tube and patient, preferably at 90° to scatter radiation.",
    explanation_mr: "विखुरलेल्या रेडिएशनपासून संरक्षणासाठी कॉर्ड पूर्ण लांब करून किमान २ मीटर अंतरावर उभे राहावे.",
    difficulty: "medium" as const,
    topic: "Mobile X-ray",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 12004,
    question: "The C-arm is primarily used for:",
    question_mr: "ऑपरेशन थिएटरमधील सी-आर्म (C-Arm) उपकरणाचा मुख्य उद्देश काय?",
    options: [
      "(A) MRI examinations",
      "(B) Real-time fluoroscopic imaging during procedures",
      "(C) Ultrasound scanning",
      "(D) Radiotherapy"
    ],
    options_mr: [
      "(A) एमआरआय तपासणी",
      "(B) शस्त्रक्रियेदरम्यान थेट/सलग एक्स-रे प्रतिमा पाहणे (Real-time fluoroscopic imaging)",
      "(C) सोनोग्राफी",
      "(D) रेडिओथेरपी"
    ],
    correct_answer: "(B) Real-time fluoroscopic imaging during procedures",
    correct_answer_mr: "(B) शस्त्रक्रियेदरम्यान थेट/सलग एक्स-रे प्रतिमा पाहणे (Real-time fluoroscopic imaging)",
    explanation: "C-arm provides continuous real-time fluoroscopic imaging allowing surgeons to monitor procedures dynamically.",
    explanation_mr: "सी-आर्मद्वारे डॉक्टर शस्त्रक्रियेदरम्यान थेट टीव्ही स्क्रीनवर हाडांची किंवा वाहिन्यांची स्थिती पाहू शकतात.",
    difficulty: "medium" as const,
    topic: "Operation Theatre",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 5005,
    question: "For an AP knee radiograph, the central ray is directed:",
    question_mr: "गुडघ्याच्या AP x-ray मध्ये सेंट्रल रे (Central Ray) चा कोन कसा निर्देशित केला जातो?",
    options: [
      "(A) 15° caudad",
      "(B) Perpendicular always",
      "(C) 5° cephalad (average adult)",
      "(D) 30° cephalad"
    ],
    options_mr: [
      "(A) १५° खालील दिशेने",
      "(B) नेहमी ९०° सरळ",
      "(C) सामान्य प्रौढ व्यक्तीसाठी सुमारे ५° वरच्या दिशेने (5° cephalad)",
      "(D) ३०° वरच्या दिशेने"
    ],
    correct_answer: "(C) 5° cephalad (average adult)",
    correct_answer_mr: "(C) सामान्य प्रौढ व्यक्तीसाठी सुमारे ५° वरच्या दिशेने (5° cephalad)",
    explanation: "For an average patient with ASIS-to-tabletop distance of 19–24 cm, the CR is angled 3–5° cephalad to align with the joint space.",
    explanation_mr: "गुडघ्याच्या सांध्यातील मोकळी जागा (Joint space) स्पष्ट दिसण्यासाठी सुमारे ५° डोक्याच्या बाजूला (Cephalad) कोन दिला जातो.",
    difficulty: "medium" as const,
    topic: "Positioning",
    category: "Technical: Radiographic Procedures & Positioning"
  }
];

export const CHAPTER_12_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 12001 + i;
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
    chapter_name: "Trauma, Pediatric, Mobile X-ray & C-Arm"
  };
});
