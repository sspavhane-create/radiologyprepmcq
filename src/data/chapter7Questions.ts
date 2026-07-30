import { Question } from '../types';

const rawQuestions = [
  {
    id: 7001,
    question: "The most effective way to reduce occupational radiation exposure is:",
    question_mr: "रेडिएशन कर्मचाऱ्यांना (Occupational workers) होणारा किरणोत्सर्ग कमी करण्याचा सर्वात प्रभावी मार्ग कोणता?",
    options: [
      "(A) Increase kVp",
      "(B) Time, distance and shielding",
      "(C) Use larger focal spot",
      "(D) Decrease SID"
    ],
    options_mr: [
      "(A) kVp वाढवणे",
      "(B) वेळ कमी करणे, अंतर वाढवणे आणि शील्डिंग वापरणे (Time, Distance & Shielding)",
      "(C) मोठा फोकल स्पॉट वापरणे",
      "(D) एसआयडी कमी करणे"
    ],
    correct_answer: "(B) Time, distance and shielding",
    correct_answer_mr: "(B) वेळ कमी करणे, अंतर वाढवणे आणि शील्डिंग वापरणे (Time, Distance & Shielding)",
    explanation: "The cardinal principles of radiation protection are minimizing Time, maximizing Distance, and using effective Shielding.",
    explanation_mr: "रेडिएशन सुरक्षेची तीन मुख्य तत्त्वे: वेळ कमी ठेवणे, अंतर जास्तीत जास्त राखणे आणि शिशाचे शील्डिंग वापरणे.",
    difficulty: "medium" as const,
    topic: "Radiation Safety",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 7002,
    question: "Radiation warning symbol is commonly known as:",
    question_mr: "रेडिएशन धोक्याचे आंतरराष्ट्रीय चिन्ह (Radiation Warning Symbol) कोणत्या नावाने ओळखले जाते?",
    options: ["(A) Cross", "(B) Trefoil", "(C) Biohazard", "(D) Laser"],
    options_mr: ["(A) क्रॉस", "(B) ट्रीफॉईल (Trefoil)", "(C) बायोहॅझार्ड", "(D) लेसर"],
    correct_answer: "(B) Trefoil",
    correct_answer_mr: "(B) ट्रीफॉईल (Trefoil)",
    explanation: "The international radiation warning symbol features a magenta or black three-bladed trefoil on a yellow background.",
    explanation_mr: "पिवळ्या पार्श्वभूमीवर तीन पात्यांच्या डिझाईनसारखे दिसणारे रेडिएशन चिन्ह 'ट्रीफॉईल' (Trefoil) म्हणून ओळखले जाते.",
    difficulty: "medium" as const,
    topic: "AERB",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 7003,
    question: "Which device is routinely used to monitor occupational radiation dose?",
    question_mr: "रेडिएशन कर्मचाऱ्यांना मिळणाऱ्या वैयक्तिक डोसचे मोजमाप करण्यासाठी नियमितपणे कोणते साधन वापरले जाते?",
    options: [
      "(A) Pulse oximeter",
      "(B) TLD badge",
      "(C) ECG",
      "(D) Film cassette"
    ],
    options_mr: [
      "(A) पल्स ऑक्सिमीटर",
      "(B) टीएलडी बॅज (TLD badge - Thermoluminescent Dosimeter)",
      "(C) ईसीजी",
      "(D) फिल्म कॅसेट"
    ],
    correct_answer: "(B) TLD badge",
    correct_answer_mr: "(B) टीएलडी बॅज (TLD badge - Thermoluminescent Dosimeter)",
    explanation: "Thermoluminescent Dosimeter (TLD) badges contain CaSO4:Dy discs used to measure personal equivalent radiation dose over a specified period.",
    explanation_mr: "भारतात कर्मचाऱ्यांचा रेडिएशन डोस नोंदवण्यासाठी AERB मान्यताप्राप्त TLD बॅज छातीवर वापरणे अनिवार्य असते.",
    difficulty: "medium" as const,
    topic: "Personnel Monitoring",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 7004,
    question: "High-frequency generators primarily improve:",
    question_mr: "हाय-फ्रिक्वेन्सी जनरेटर (High-frequency generators) वापरल्यामुळे x-ray उपकरणाची कोणती कार्यक्षमता प्रामुख्याने वाढते?",
    options: [
      "(A) Room lighting",
      "(B) Patient positioning",
      "(C) X-ray production efficiency",
      "(D) Grid ratio"
    ],
    options_mr: [
      "(A) खोलीतील प्रकाश",
      "(B) पेशंटची पोझिशनिंग",
      "(C) क्ष-किरण निर्मितीची कार्यक्षमता व गुणवत्ता (X-ray production efficiency)",
      "(D) ग्रिड रेशो"
    ],
    correct_answer: "(C) X-ray production efficiency",
    correct_answer_mr: "(C) क्ष-किरण निर्मितीची कार्यक्षमता व गुणवत्ता (X-ray production efficiency)",
    explanation: "High-frequency generators produce a nearly constant potential voltage waveform (near-zero ripple), increasing X-ray beam intensity and energy efficiency.",
    explanation_mr: "हाय-व्होल्टेज वेव्हफॉर्म अगदी स्थिर राहिल्याने (कम रिप्पल) x-ray निर्मितीची गुणवत्ता वाढते आणि पेशंटचा डोस कमी होतो.",
    difficulty: "medium" as const,
    topic: "X-ray Generator",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 7005,
    question: "The primary purpose of an anti-scatter grid is to:",
    question_mr: "एक्स-रे मध्ये अँटी-स्कॅटर ग्रिड (Anti-scatter grid) वापरण्याचा मुख्य उद्देश काय असतो?",
    options: [
      "(A) Increase magnification",
      "(B) Reduce scattered radiation reaching the image receptor",
      "(C) Increase SID",
      "(D) Reduce focal spot size"
    ],
    options_mr: [
      "(A) मॅग्निफिकेशन वाढवणे",
      "(B) फिल्मपर्यंत पोहोचणारे विखुरलेले किरण (Scattered Radiation) रोखणे",
      "(C) एसआयडी वाढवणे",
      "(D) फोकल स्पॉट लहान करणे"
    ],
    correct_answer: "(B) Reduce scattered radiation reaching the image receptor",
    correct_answer_mr: "(B) फिल्मपर्यंत पोहोचणारे विखुरलेले किरण (Scattered Radiation) रोखणे",
    explanation: "Grids consist of lead strips that absorb scattered secondary photons while transmitting primary beam photons, enhancing image contrast.",
    explanation_mr: "अँटी-स्कॅटर ग्रिडमधील शिशाच्या पट्ट्या विखुरलेले रेडिएशन शोषून घेतात, ज्यामुळे प्रतिमेचा कॉन्ट्रास्ट (Image Contrast) सुधारतो.",
    difficulty: "medium" as const,
    topic: "Grid",
    category: "Technical: Radiophysics & Machine Principles"
  }
];

export const CHAPTER_7_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 7001 + i;
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
    chapter_name: "Radiation Safety, AERB & Equipment"
  };
});
