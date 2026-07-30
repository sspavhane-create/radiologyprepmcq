import { Question } from '../types';

const rawQuestions = [
  {
    id: 13001,
    question: "Which disease is characterized by decreased bone density?",
    question_mr: "हाडांचे वस्तुमान आणि घनता (Bone Density) कमी होणाऱ्या आजारास काय म्हणतात?",
    options: [
      "(A) Osteopetrosis",
      "(B) Osteoporosis",
      "(C) Osteomyelitis",
      "(D) Osteosarcoma"
    ],
    options_mr: [
      "(A) ऑस्टिओपेट्रोसिस",
      "(B) ऑस्टिओपोरोसिस (Osteoporosis)",
      "(C) ऑस्टिओमायलिटिस",
      "(D) ऑस्टिओसारकोमा"
    ],
    correct_answer: "(B) Osteoporosis",
    correct_answer_mr: "(B) ऑस्टिओपोरोसिस (Osteoporosis)",
    explanation: "Osteoporosis is a metabolic bone disease characterized by low bone mass, decreased density, and increased risk of fractures.",
    explanation_mr: "ऑस्टिओपोरोसिसमध्ये हाडांमधील कॅल्शियम व घनता कमी होऊन हाडे ठिसूळ होतात.",
    difficulty: "medium" as const,
    topic: "Radiographic Pathology",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 13002,
    question: "A motion artifact is primarily caused by:",
    question_mr: "एक्स-रे प्रतिमेमधील मोशन आर्टिफॅक्ट (Motion Artifact / इमेज अंधुक दिसणे) प्रामुख्याने कशामुळे होतो?",
    options: [
      "(A) Low kVp",
      "(B) High mAs",
      "(C) Patient movement during exposure",
      "(D) Large focal spot"
    ],
    options_mr: [
      "(A) कमी kVp मुळे",
      "(B) जास्त mAs मुळे",
      "(C) एक्स्पोजर चालू असताना रुग्णाची हालचाल झाल्यामुळे (Patient movement)",
      "(D) मोठ्या फोकल स्पॉटमुळे"
    ],
    correct_answer: "(C) Patient movement during exposure",
    correct_answer_mr: "(C) एक्स्पोजर चालू असताना रुग्णाची हालचाल झाल्यामुळे (Patient movement)",
    explanation: "Voluntary or involuntary patient movement during the exposure time is the primary cause of motion blur/artifacts.",
    explanation_mr: "एक्स-रे काढताना रुग्णाने श्वास घेतला किंवा हालचाल केली तर इमेज अंधुक येते.",
    difficulty: "medium" as const,
    topic: "Image Artifacts",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 13003,
    question: "An underexposed radiograph generally appears:",
    question_mr: "अंडर-एक्स्पोज्ड (Underexposed) एक्स-रे प्रतिमा साधारणपणे कशी दिसते?",
    options: [
      "(A) Too dark",
      "(B) Too light",
      "(C) Magnified",
      "(D) Distorted"
    ],
    options_mr: [
      "(A) अतिशय काळी (Too dark)",
      "(B) अतिशय फिकट / पांढरट (Too light)",
      "(C) मोठी (Magnified)",
      "(D) विकृत"
    ],
    correct_answer: "(B) Too light",
    correct_answer_mr: "(B) अतिशय फिकट / पांढरट (Too light)",
    explanation: "Underexposure means insufficient radiation photons reached the detector/film, resulting in a pale/too light image with high noise.",
    explanation_mr: "कमी mAs किंवा कमी डोस मिळाल्यामुळे इमेजवर अपुरे फोटॉन्स पोहोचतात व एक्स-रे फिकट दिसतो.",
    difficulty: "medium" as const,
    topic: "Exposure Errors",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 13004,
    question: "Window width primarily controls:",
    question_mr: "डिजिटल इमेजिंगमध्ये विंडो विड्थ (Window Width - WW) प्रामुख्याने प्रतिमेचा कोणता घटक नियंत्रित करते?",
    options: [
      "(A) Image brightness only",
      "(B) Image contrast",
      "(C) SID",
      "(D) Focal spot size"
    ],
    options_mr: [
      "(A) फक्त प्रतिमेची ब्राइटनेस",
      "(B) प्रतिमेचा कॉन्ट्रास्ट (Image Contrast)",
      "(C) एसआयडी",
      "(D) फोकल स्पॉट साईझ"
    ],
    correct_answer: "(B) Image contrast",
    correct_answer_mr: "(B) प्रतिमेचा कॉन्ट्रास्ट (Image Contrast)",
    explanation: "In digital image processing, Window Width (WW) controls image contrast scale, while Window Level (WL) controls image brightness/density.",
    explanation_mr: "विंडो विड्थ (WW) मुळे प्रतिमेचा कॉन्ट्रास्ट बदलतो आणि विंडो लेव्हल (WL) मुळे ब्राइटनेस बदलते.",
    difficulty: "medium" as const,
    topic: "Digital Imaging",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 13005,
    question: "RIS stands for:",
    question_mr: "RIS चा सविस्तर अर्थ (Full Form) काय आहे?",
    options: [
      "(A) Radiation Imaging Standard",
      "(B) Radiology Information System",
      "(C) Report Integration Service",
      "(D) Remote Imaging System"
    ],
    options_mr: [
      "(A) रेडिएशन इमेजिंग स्टँडर्ड",
      "(B) रेडिओलॉजी इन्फॉर्मेशन सिस्टीम (Radiology Information System)",
      "(C) रिपोर्ट इंटेग्रेशन सर्व्हिस",
      "(D) रिमोट इमेजिंग सिस्टीम"
    ],
    correct_answer: "(B) Radiology Information System",
    correct_answer_mr: "(B) रेडिओलॉजी इन्फॉर्मेशन सिस्टीम (Radiology Information System)",
    explanation: "Radiology Information System (RIS) is a networked software system used to manage medical imagery and associated patient registration, scheduling, and reporting data.",
    explanation_mr: "RIS प्रणालीचा वापर रेडिओलॉजी विभागातील पेशंट अपॉइंटमेंट, शेड्यूलिंग व रिपोर्ट व्यवस्थापनासाठी होतो.",
    difficulty: "medium" as const,
    topic: "PACS/RIS",
    category: "Technical: Digital Radiography & Image Processing"
  }
];

export const CHAPTER_13_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 13001 + i;
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
    chapter_name: "Radiographic Pathology, Artifacts & PACS"
  };
});
