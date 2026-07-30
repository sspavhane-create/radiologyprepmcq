import { Question } from '../types';

const rawQuestions = [
  {
    id: 14001,
    question: "Which phase of the cell cycle is generally the most radiosensitive?",
    question_mr: "पेशी चक्रातील (Cell cycle) कोणती अवस्था रेडिएशनला सर्वात जास्त संवेदनशील (Radiosensitive) मानली जाते?",
    options: [
      "(A) S phase",
      "(B) G0 phase",
      "(C) M phase (mitosis)",
      "(D) Late G1 phase"
    ],
    options_mr: [
      "(A) एस-फेज (S phase)",
      "(B) जी०-फेज",
      "(C) एम-फेज / पेशी विभाजन अवस्था (M phase - Mitosis)",
      "(D) जी१-फेज"
    ],
    correct_answer: "(C) M phase (mitosis)",
    correct_answer_mr: "(C) एम-फेज / पेशी विभाजन अवस्था (M phase - Mitosis)",
    explanation: "Cells are most radiosensitive during the M phase (mitosis) of the cell cycle and least sensitive during late S phase.",
    explanation_mr: "मायटॉसिस (M-phase) दरम्यान पेशींमधील गुणसूत्रे उघडी व विभाजन स्थितीत असल्याने त्या किरणोत्सर्गास सर्वाधिक संवेदनशील असतात.",
    difficulty: "medium" as const,
    topic: "Radiation Biology",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 14002,
    question: "The SI unit of equivalent dose is:",
    question_mr: "इक्विव्हॅलेंट डोसचे (Equivalent Dose) SI एकक कोणते?",
    options: [
      "(A) Gray (Gy)",
      "(B) Roentgen (R)",
      "(C) Sievert (Sv)",
      "(D) Curie (Ci)"
    ],
    options_mr: [
      "(A) ग्रे (Gray)",
      "(B) रॉन्टगेन (Roentgen)",
      "(C) सीव्हर्ट (Sievert - Sv)",
      "(D) क्युरी (Curie)"
    ],
    correct_answer: "(C) Sievert (Sv)",
    correct_answer_mr: "(C) सीव्हर्ट (Sievert - Sv)",
    explanation: "Sievert (Sv) is the SI unit of radiation equivalent dose and effective dose (1 Sv = 1 Joule/kg).",
    explanation_mr: "रेडिएशनच्या इक्विव्हॅलेंट व इफेक्टिव्ह डोसचे SI एकक सीव्हर्ट (Sv) आहे.",
    difficulty: "medium" as const,
    topic: "Radiation Dosimetry",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 14003,
    question: "According to radiation protection principles, the three basic methods of protection are:",
    question_mr: "रेडिएशन संरक्षणाच्या तीन मूलभूत पद्धती कोणत्या?",
    options: [
      "(A) Filtration, Grid and Collimation",
      "(B) Time, Distance and Shielding",
      "(C) kVp, mAs and SID",
      "(D) Dose, DAP and CTDI"
    ],
    options_mr: [
      "(A) फिल्टर, ग्रिड व कॉलिमेशन",
      "(B) वेळ, अंतर आणि शील्डिंग (Time, Distance and Shielding)",
      "(C) केव्हीपी, एमएएस व एसआयडी",
      "(D) डोस आणि सीटीडीआय"
    ],
    correct_answer: "(B) Time, Distance and Shielding",
    correct_answer_mr: "(B) वेळ, अंतर आणि शील्डिंग (Time, Distance and Shielding)",
    explanation: "The cardinal principles of radiation safety are: min Time near source, max Distance from source, and effective Shielding.",
    explanation_mr: "कमी वेळ, जास्तीत जास्त अंतर आणि योग्य लेड शील्डिंग या तीन मुख्य गोष्टी रेडिएशनपासून संरक्षण करतात.",
    difficulty: "medium" as const,
    topic: "AERB",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 14004,
    question: "In India, the Atomic Energy Regulatory Board (AERB) functions under:",
    question_mr: "भारतामध्ये अणु ऊर्जा नियामक मंडळ (AERB) कोणत्या विभागांतर्गत कार्य करते?",
    options: [
      "(A) Ministry of Health",
      "(B) Department of Atomic Energy (DAE)",
      "(C) AIIMS",
      "(D) NMC"
    ],
    options_mr: [
      "(A) आरोग्य मंत्रालय",
      "(B) अणू ऊर्जा विभाग, भारत सरकार (Department of Atomic Energy - DAE)",
      "(C) एम्स",
      "(D) एनएमसी"
    ],
    correct_answer: "(B) Department of Atomic Energy (DAE)",
    correct_answer_mr: "(B) अणू ऊर्जा विभाग, भारत सरकार (Department of Atomic Energy - DAE)",
    explanation: "AERB was constituted on November 15, 1983 by the President of India under the Atomic Energy Act, 1962 (DAE).",
    explanation_mr: "AERB ही अणू ऊर्जा कायद्यांतर्गत DAE (Department of Atomic Energy) अंतर्गत काम करणारी सर्वोच्च नियामक संस्था आहे.",
    difficulty: "medium" as const,
    topic: "Atomic Energy Act",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 14005,
    question: "Biomedical waste should be segregated:",
    question_mr: "बायोमेडिकल कचऱ्याचे वर्गीकरण (Segregation) केव्हा व कोठे केले पाहिजे?",
    options: [
      "(A) At the end of the day",
      "(B) After transport",
      "(C) At the point of generation",
      "(D) Only before disposal"
    ],
    options_mr: [
      "(A) दिवस संपल्यानंतर",
      "(B) कचरा हलवल्यानंतर",
      "(C) कचरा निर्माण होतो त्याच ठिकाणी (At the point of generation)",
      "(D) फक्त विल्हेवाट लावण्यापूर्वी"
    ],
    correct_answer: "(C) At the point of generation",
    correct_answer_mr: "(C) कचरा निर्माण होतो त्याच ठिकाणी (At the point of generation)",
    explanation: "Biomedical waste rules require immediate segregation into color-coded containers right at the point of generation.",
    explanation_mr: "इन्फेक्शन पसरू नये म्हणून कचरा तयार होताच लगेच त्या त्या रंगाच्या डब्यात वेगळा केला पाहिजे.",
    difficulty: "medium" as const,
    topic: "Biomedical Waste",
    category: "Technical: Infection Control & Safety"
  }
];

export const CHAPTER_14_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 14001 + i;
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
    chapter_name: "Radiation Biology, Dosimetry, AERB & Biomedical Waste"
  };
});
