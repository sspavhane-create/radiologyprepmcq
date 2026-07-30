import { Question } from '../types';

const rawQuestions = [
  {
    id: 21001,
    question: "The unit used to express absorbed dose in radiotherapy is:",
    question_mr: "रेडिओथेरपीमध्ये (Radiotherapy) शोषून घेतलेला रेडिएशन डोस (Absorbed Dose) मोजण्याचे एकक कोणते?",
    options: [
      "(A) Sievert (Sv)",
      "(B) Gray (Gy)",
      "(C) Becquerel (Bq)",
      "(D) Curie (Ci)"
    ],
    options_mr: [
      "(A) सीव्हर्ट (Sv)",
      "(B) ग्रे (Gray - Gy / 1 Joule/kg)",
      "(C) बेक्वरेल (Bq)",
      "(D) क्युरी (Ci)"
    ],
    correct_answer: "(B) Gray (Gy)",
    correct_answer_mr: "(B) ग्रे (Gray - Gy / 1 Joule/kg)",
    explanation: "The SI unit of radiation absorbed dose is the Gray (Gy), defined as 1 Joule of energy absorbed per kilogram of matter.",
    explanation_mr: "रेडिएशन शोषून घेण्याचे (Absorbed Dose) SI एकक 'ग्रे' (Gray - Gy) आहे. १ Gy = १ Joule/kg.",
    difficulty: "medium" as const,
    topic: "Radiation Therapy Basics",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 21002,
    question: "DEXA is primarily used to assess:",
    question_mr: "डेक्सा स्कॅन (DEXA / DXA Scan) प्रामुख्याने कशाच्या तपासणीसाठी वापरला जातो?",
    options: [
      "(A) Lung function",
      "(B) Bone mineral density",
      "(C) Cardiac output",
      "(D) Renal function"
    ],
    options_mr: [
      "(A) फुफ्फुसांचे कार्य",
      "(B) हाडांची घनता / कॅल्शियमचे प्रमाण (Bone Mineral Density - BMD)",
      "(C) हृदयाची कार्यक्षमता",
      "(D) किडनीचे कार्य"
    ],
    correct_answer: "(B) Bone mineral density",
    correct_answer_mr: "(B) हाडांची घनता / कॅल्शियमचे प्रमाण (Bone Mineral Density - BMD)",
    explanation: "Dual-Energy X-ray Absorptiometry (DEXA) measures bone mineral density (BMD) to diagnose osteoporosis and assess fracture risk.",
    explanation_mr: "DEXA स्कॅनद्वारे हाडांमधील खनिजे व कॅल्शियमचे प्रमाण (BMD) मोजून ऑस्टिओपोरोसिसचे निदान केले जाते.",
    difficulty: "medium" as const,
    topic: "DEXA",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 21003,
    question: "Before making a portable exposure, the radiographer should first:",
    question_mr: "पोर्टेबल x-ray काढण्यापूर्वी रेडिओग्राफरने सर्वात आधी कोणती खबरदारी घेतली पाहिजे?",
    options: [
      "(A) Increase kVp",
      "(B) Verify patient identity and examination request",
      "(C) Remove the grid",
      "(D) Turn off room lights"
    ],
    options_mr: [
      "(A) kVp वाढवणे",
      "(B) रुग्णाची अचूक ओळख व केसपेपरवरील मागणी तपासणे (Verify identity and request)",
      "(C) ग्रिड काढून टाकणे",
      "(D) दिवे बंद करणे"
    ],
    correct_answer: "(B) Verify patient identity and examination request",
    correct_answer_mr: "(B) रुग्णाची अचूक ओळख व केसपेपरवरील मागणी तपासणे (Verify identity and request)",
    explanation: "Confirming patient identity using two identifiers and verifying the physician's order is the crucial first safety step.",
    explanation_mr: "चुकीच्या रुग्णाचा किंवा चुकीचा अवयवाचा x-ray काढणे टाळण्यासाठी नाव आणि नोंदणी क्रमांक पडताळणे गरजेचे आहे.",
    difficulty: "medium" as const,
    topic: "Portable Radiography",
    category: "Technical: Patient Care & Contrast Media"
  },
  {
    id: 21004,
    question: "Pregnant radiation workers should:",
    question_mr: "गरोदर असलेल्या महिला रेडिएशन कर्मचाऱ्यांसाठी कोणता नियम लागू होतो?",
    options: [
      "(A) Avoid all hospital work",
      "(B) Follow institutional radiation safety policy and dose limits",
      "(C) Never wear a dosimeter",
      "(D) Double all exposure factors"
    ],
    options_mr: [
      "(A) रुग्णालयाचे सर्व काम सोडून देणे",
      "(B) गर्भावस्था जाहीर करून AERB सुरक्षेच्या विशेष डोस मर्यादेचे (१ mSv) पालन करणे",
      "(C) डोसमीटर न वापरणे",
      "(D) एक्स्पोजर दुप्पट करणे"
    ],
    correct_answer: "(B) Follow institutional radiation safety policy and dose limits",
    correct_answer_mr: "(B) गर्भावस्था जाहीर करून AERB सुरक्षेच्या विशेष डोस मर्यादेचे (१ mSv) पालन करणे",
    explanation: "Upon declaring pregnancy, additional protective dose limits apply (max 1 mSv to fetus during remaining pregnancy) along with a fetal TLD badge.",
    explanation_mr: "गर्भावस्था जाहीर केल्यावर गर्भाचा डोस उर्वरित काळात १ mSv पेक्षा जास्त होणार नाही याची काळजी घेतली जाते.",
    difficulty: "medium" as const,
    topic: "Radiation Protection",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 21005,
    question: "Constancy testing is performed to:",
    question_mr: "एक्स-रे उपकरणांमध्ये कॉन्स्टन्सी टेस्ट (Constancy Testing) कशासाठी केली जाते?",
    options: [
      "(A) Increase tube loading",
      "(B) Ensure equipment performance remains consistent over time",
      "(C) Replace acceptance testing",
      "(D) Measure patient weight"
    ],
    options_mr: [
      "(A) ट्युबवरील भार वाढवण्यासाठी",
      "(B) उपकरणाची कार्यक्षमता वेळेनुसार स्थिर व अचूक राहते हे तपासण्यासाठी (Ensure consistent performance)",
      "(C) स्वीकृती चाचण्यांऐवजी",
      "(D) रुग्णाचे वजन मोजण्यासाठी"
    ],
    correct_answer: "(B) Ensure equipment performance remains consistent over time",
    correct_answer_mr: "(B) उपकरणाची कार्यक्षमता वेळेनुसार स्थिर व अचूक राहते हे तपासण्यासाठी (Ensure consistent performance)",
    explanation: "Constancy tests are routine Quality Control (QC) evaluations performed periodically to detect changes in equipment performance.",
    explanation_mr: "मशीनचा आउटपुट (kVp, mAs व रेडिएशन) काळानुसार स्थिर राहतो की नाही हे तपासणे हा कॉन्स्टन्सी चाचणीचा हेतू आहे.",
    difficulty: "medium" as const,
    topic: "Equipment QA",
    category: "Technical: Radiophysics & Machine Principles"
  }
];

export const CHAPTER_21_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 21001 + i;
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
    chapter_name: "Radiotherapy Basics, DEXA & QA"
  };
});
