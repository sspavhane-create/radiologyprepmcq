import { Question } from '../types';

const rawQuestions = [
  {
    id: 28001,
    question: "The SI unit of equivalent dose is:",
    question_mr: "इक्विव्हॅलेंट रेडिएशन डोसचे (Equivalent Dose) SI एकक कोणते?",
    options: [
      "(A) Gray (Gy)",
      "(B) Becquerel (Bq)",
      "(C) Sievert (Sv)",
      "(D) Roentgen (R)"
    ],
    options_mr: [
      "(A) ग्रे (Gy)",
      "(B) बेक्वरेल (Bq)",
      "(C) सीव्हर्ट (Sievert - Sv)",
      "(D) रॉन्टगेन (R)"
    ],
    correct_answer: "(C) Sievert (Sv)",
    correct_answer_mr: "(C) सीव्हर्ट (Sievert - Sv)",
    explanation: "Sievert (Sv) is the SI unit used to quantify biologically equivalent and effective radiation doses.",
    explanation_mr: "जैविक प्रभावाचा विचार करून मोजल्या जाणाऱ्या डोसचे SI एकक 'सीव्हर्ट' (Sv) आहे.",
    difficulty: "medium" as const,
    topic: "Comprehensive Mock",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 28002,
    question: "Increasing kVp generally results in:",
    question_mr: "एक्स-रे मधील kVp वाढवल्यास बीमच्या गुणधर्मावर काय परिणाम होतो?",
    options: [
      "(A) Lower penetration",
      "(B) Greater beam penetration and energy",
      "(C) Reduced photon energy",
      "(D) No change"
    ],
    options_mr: [
      "(A) कमी वेधकता",
      "(B) जास्त वेधकता व उच्च ऊर्जा (Greater beam penetration and photon energy)",
      "(C) कमी ऊर्जा",
      "(D) बदल होत नाही"
    ],
    correct_answer: "(B) Greater beam penetration and energy",
    correct_answer_mr: "(B) जास्त वेधकता व उच्च ऊर्जा (Greater beam penetration and photon energy)",
    explanation: "Higher kVp increases photon energy and beam penetrability, enabling X-rays to pass through thicker tissues.",
    explanation_mr: "kVp मुळे क्ष-किरणांची वेधकता (Quality/Penetration) वाढते, ज्यामुळे ते जाड अवयवातून पार जाऊ शकतात.",
    difficulty: "medium" as const,
    topic: "Radiographic Physics",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 28003,
    question: "The most effective personal monitoring device is:",
    question_mr: "कर्मचाऱ्यांचा वैयक्तिक रेडिएशन डोस मोजण्यासाठी सर्वाधिक वापरले जाणारे साधन कोणते?",
    options: [
      "(A) Lead apron",
      "(B) Grid",
      "(C) Thermoluminescent Dosimeter (TLD) badge",
      "(D) Collimator"
    ],
    options_mr: [
      "(A) लेड ॲप्रन",
      "(B) ग्रिड",
      "(C) टीएलडी बॅज (Thermoluminescent Dosimeter - TLD Badge / CaSO4:Dy)",
      "(D) कॉलिमेटर"
    ],
    correct_answer: "(C) Thermoluminescent Dosimeter (TLD) badge",
    correct_answer_mr: "(C) टीएलडी बॅज (Thermoluminescent Dosimeter - TLD Badge / CaSO4:Dy)",
    explanation: "TLD badges contain CaSO4:Dy crystals that record cumulative personnel radiation exposure accurately over a 3-month cycle.",
    explanation_mr: "भारतामध्ये BARC द्वारे पुरवले जाणारे TLD बॅज ३ महिन्यांच्या कालावधीतील कर्मचाऱ्यांचा एकूण डोस नोंदवतात.",
    difficulty: "medium" as const,
    topic: "Radiation Safety",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 28004,
    question: "Acceptance testing of X-ray equipment is performed:",
    question_mr: "नवीन एक्स-रे मशीन बसवल्यानंतर स्वीकृती चाचणी (Acceptance Testing) केव्हा केली जाते?",
    options: [
      "(A) Every patient",
      "(B) Before clinical use on patients",
      "(C) Only after major repairs",
      "(D) Never"
    ],
    options_mr: [
      "(A) प्रत्येक रुग्णासाठी",
      "(B) रुग्णांवर वापरण्यास सुरुवात करण्यापूर्वी (Before clinical use)",
      "(C) फक्त दुरुस्तीनंतर",
      "(D) कधीही नाही"
    ],
    correct_answer: "(B) Before clinical use on patients",
    correct_answer_mr: "(B) रुग्णांवर वापरण्यास सुरुवात करण्यापूर्वी (Before clinical use)",
    explanation: "Acceptance testing is conducted prior to clinical deployment to verify that the system meets manufacturer specifications and AERB norms.",
    explanation_mr: "नवीन मशीन AERB च्या नियमांनुसार काम करत आहे का हे पाहण्यासाठी ते रुग्णांवर वापरण्यापूर्वी स्वीकार चाचणी घेणे आवश्यक आहे.",
    difficulty: "medium" as const,
    topic: "AERB & QA",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 28005,
    question: "The primary purpose of collimation is:",
    question_mr: "कॉलिमेशनचा (Collimation) मुख्य उद्देश काय?",
    options: [
      "(A) Increase magnification",
      "(B) Reduce patient dose and improve image quality",
      "(C) Increase scatter",
      "(D) Increase exposure time"
    ],
    options_mr: [
      "(A) प्रतिमा मोठी करणे",
      "(B) रुग्णाचा डोस कमी करणे व प्रतिमेचा कॉन्ट्रास्ट सुधारणे",
      "(C) स्कॅटर वाढवणे",
      "(D) वेळ वाढवणे"
    ],
    correct_answer: "(B) Reduce patient dose and improve image quality",
    correct_answer_mr: "(B) रुग्णाचा डोस कमी करणे व प्रतिमेचा कॉन्ट्रास्ट सुधारणे",
    explanation: "Collimators restrict the primary beam to the area of clinical interest, reducing integral dose and scatter generation.",
    explanation_mr: "बीम मर्यादित ठेवल्यामुळे रुग्णावर पडणारे अनावश्य्क किरण कमी होतात व स्कॅटर कमी होऊन इमेज उत्तम येते.",
    difficulty: "medium" as const,
    topic: "DHS Revision",
    category: "Technical: Radiation Protection & Hazards"
  }
];

export const CHAPTER_28_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 28001 + i;
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
    chapter_name: "Comprehensive Revision & Mock Test"
  };
});
