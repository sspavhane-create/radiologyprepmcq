import { Question } from '../types';

const rawQuestions = [
  {
    id: 9001,
    question: "Which CT parameter primarily affects image noise?",
    question_mr: "सीटी स्कॅन प्रतिमेतील नॉईज (Image Noise) प्रामुख्याने कोणत्या तांत्रिक घटकावर (Parameter) अवलंबून असतो?",
    options: [
      "(A) kVp only",
      "(B) mAs",
      "(C) Gantry tilt",
      "(D) Pitch only"
    ],
    options_mr: [
      "(A) फक्त kVp",
      "(B) mAs (Milliampere-seconds)",
      "(C) गँट्री टिल्ट",
      "(D) फक्त पिच"
    ],
    correct_answer: "(B) mAs",
    correct_answer_mr: "(B) mAs (Milliampere-seconds)",
    explanation: "Image noise in CT is inversely proportional to the square root of mAs (photon quantum mottle). Increasing mAs reduces noise.",
    explanation_mr: "mAs वाढवल्याने सीटी प्रतिमेतील नॉईज (दाणेदारपणा) कमी होतो व इमेजची स्पष्टता वाढते.",
    difficulty: "medium" as const,
    topic: "CT Advanced",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 9002,
    question: "T1-weighted images typically show fat as:",
    question_mr: "एमआरआयमधील T1-वेटेड (T1-weighted) प्रतिमेत मेद/चरबी (Fat) कशी दिसते?",
    options: ["(A) Dark", "(B) Bright", "(C) Invisible", "(D) Variable"],
    options_mr: ["(A) काळी (Dark)", "(B) पांढरी/तेजस्वी (Bright / Hyperintense)", "(C) अदृश्य", "(D) बदलती"],
    correct_answer: "(B) Bright",
    correct_answer_mr: "(B) पांढरी/तेजस्वी (Bright / Hyperintense)",
    explanation: "Fat has a short T1 relaxation time and appears bright (hyperintense) on T1-weighted MRI sequences.",
    explanation_mr: "फॅटचा T1 रिलॅक्सेशन टाईम कमी असल्याने T1-वेटेड इमेजमध्ये फॅट उजळ/पांढरी (Bright) दिसते.",
    difficulty: "medium" as const,
    topic: "MRI",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 9003,
    question: "Compression in mammography primarily helps to:",
    question_mr: "मॅमोग्राफीमध्ये स्तनांवर दाब (Compression) देण्याचा मुख्य फायदा काय?",
    options: [
      "(A) Increase motion",
      "(B) Reduce dose and improve image quality",
      "(C) Increase magnification",
      "(D) Reduce SID"
    ],
    options_mr: [
      "(A) हालचाल वाढवणे",
      "(B) रेडिएशन डोस कमी करणे आणि प्रतिमेची स्पष्टता वाढवणे (Reduce dose & improve quality)",
      "(C) मॅग्निफिकेशन वाढवणे",
      "(D) एसआयडी कमी करणे"
    ],
    correct_answer: "(B) Reduce dose and improve image quality",
    correct_answer_mr: "(B) रेडिएशन डोस कमी करणे आणि प्रतिमेची स्पष्टता वाढवणे (Reduce dose & improve quality)",
    explanation: "Compression flattens breast tissue, reducing thickness, geometric unsharpness, scatter radiation, and required radiation dose.",
    explanation_mr: "दाब दिल्यामुळे स्तनांची जाडी कमी होते, पेशी एकमेकांपासून वेगळ्या होतात आणि एक्स-रे डोस कमी लागतो.",
    difficulty: "medium" as const,
    topic: "Mammography",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 9004,
    question: "Ultrasound uses:",
    question_mr: "अल्ट्रासाऊंड (Ultrasound / Sonography) तंत्रज्ञानामध्ये कशाचा वापर केला जातो?",
    options: [
      "(A) X-rays",
      "(B) Gamma rays",
      "(C) High-frequency sound waves",
      "(D) Radioactive tracers"
    ],
    options_mr: [
      "(A) क्ष-किरण",
      "(B) गॅमा किरण",
      "(C) उच्च वारंवारतेच्या ध्वनी लहरी (High-frequency sound waves)",
      "(D) रेडिओॲक्टिव्ह पदार्थ"
    ],
    correct_answer: "(C) High-frequency sound waves",
    correct_answer_mr: "(C) उच्च वारंवारतेच्या ध्वनी लहरी (High-frequency sound waves)",
    explanation: "Medical ultrasound uses high-frequency acoustic sound waves (>2 MHz) via piezoelectric transducers.",
    explanation_mr: "सोनोग्राफीमध्ये मानवी कानाला न ऐकू येणाऱ्या उच्च वारंवारतेच्या ध्वनी लहरी (Ultrasound waves) वापरतात.",
    difficulty: "medium" as const,
    topic: "Ultrasound",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 9005,
    question: "The most commonly used radionuclide in diagnostic nuclear medicine is:",
    question_mr: "निदानात्मक न्युक्लियर मेडिसिन (Nuclear Medicine) मध्ये सर्वाधिक वापरला जाणारा रेडिओन्यूक्लाईड कोणता?",
    options: [
      "(A) Iodine-131",
      "(B) Cobalt-60",
      "(C) Technetium-99m",
      "(D) Cesium-137"
    ],
    options_mr: [
      "(A) आयोडीन-१३१",
      "(B) कोबाल्ट-६०",
      "(C) टेक्नेशियम-९९एम (Technetium-99m / Tc-99m)",
      "(D) सिझियम-१३७"
    ],
    correct_answer: "(C) Technetium-99m",
    correct_answer_mr: "(C) टेक्नेशियम-९९एम (Technetium-99m / Tc-99m)",
    explanation: "Technetium-99m (Tc-99m) is ideal due to its short 6-hour half-life and 140 keV gamma photon energy.",
    explanation_mr: "६ तासांचे अर्धायुष्य आणि १४० keV गॅमा ऊर्जेमुळे टेक्नेशियम-९९एम हा न्यूक्लियर मेडिसिनमध्ये सर्वाधिक वापरला जातो.",
    difficulty: "medium" as const,
    topic: "Nuclear Medicine",
    category: "Technical: Special Imaging Modalities"
  }
];

export const CHAPTER_9_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 9001 + i;
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
    chapter_name: "CT, MRI, Mammography, Ultrasound & Nuclear Medicine"
  };
});
