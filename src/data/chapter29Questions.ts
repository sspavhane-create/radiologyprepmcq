import { Question } from '../types';

const rawQuestions = [
  {
    id: 29001,
    question: "The inverse square law relates radiation intensity to:",
    question_mr: "इनव्हर्स स्क्वेअर लॉ (Inverse Square Law) रेडिएशनची तीव्रता आणि कोणत्या घटकातील संबंध दर्शवतो?",
    options: [
      "(A) Tube current",
      "(B) Distance from the source",
      "(C) Exposure time",
      "(D) Filtration"
    ],
    options_mr: [
      "(A) ट्युब करंट (mAs)",
      "(B) रेडिएशन स्त्रोतापासूनचे अंतर (Distance from source - I ∝ 1/d²)",
      "(C) वेळ",
      "(D) फिल्टर"
    ],
    correct_answer: "(B) Distance from the source",
    correct_answer_mr: "(B) रेडिएशन स्त्रोतापासूनचे अंतर (Distance from source - I ∝ 1/d²)",
    explanation: "Inverse square law states that radiation intensity is inversely proportional to the square of the distance from the source.",
    explanation_mr: "स्त्रोतापासूनचे अंतर दुप्पट केल्यास रेडिएशनची तीव्रता ४ पटीने कमी होते (I ∝ 1/d²).",
    difficulty: "medium" as const,
    topic: "Final Mock Test",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 29002,
    question: "The gonads should be shielded whenever:",
    question_mr: "रुग्णाच्या जननेंद्रियांचे (Gonadal Shielding) संरक्षण केव्हा केले पाहिजे?",
    options: [
      "(A) Never",
      "(B) Only in CT",
      "(C) When gonads are within 5 cm of primary beam and shielding doesn't obscure clinical area",
      "(D) Only in MRI"
    ],
    options_mr: [
      "(A) कधीही नाही",
      "(B) फक्त सीटी स्कॅनमध्ये",
      "(C) बीम ५ सेमी अंतरावर असताना व शील्डिंगमुळे महत्त्वाचा भाग झाकला जात नसल्यास",
      "(D) फक्त एमआरआय मध्ये"
    ],
    correct_answer: "(C) When gonads are within 5 cm of primary beam and shielding doesn't obscure clinical area",
    correct_answer_mr: "(C) बीम ५ सेमी अंतरावर असताना व शील्डिंगमुळे महत्त्वाचा भाग झाकला जात नसल्यास",
    explanation: "Gonadal shielding should be used when the gonads lie within or near (5 cm) the primary X-ray field unless it interferes with diagnosis.",
    explanation_mr: "अनुवंशिक दुष्परिणाम टाळण्यासाठी प्रजनन अवयव बीमच्या जवळ असताना योग्य लेड शील्ड वापरणे आवश्यक आहे.",
    difficulty: "medium" as const,
    topic: "Radiation Protection",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 29003,
    question: "Daily QC checks help to:",
    question_mr: "दैनंदिन क्वालिटी कंट्रोल (QC) चाचण्यांचा मुख्य फायदा काय?",
    options: [
      "(A) Increase patient dose",
      "(B) Detect equipment problems early",
      "(C) Replace servicing",
      "(D) Reduce image size"
    ],
    options_mr: [
      "(A) रेडिएशन डोस वाढवणे",
      "(B) उपकरणांमधील संभाव्य बिघाड आधीच ओळखणे (Detect problems early)",
      "(C) सर्व्हिसिंग बंद करणे",
      "(D) प्रतिमेचा आकार लहान करणे"
    ],
    correct_answer: "(B) Detect equipment problems early",
    correct_answer_mr: "(B) उपकरणांमधील संभाव्य बिघाड आधीच ओळखणे (Detect problems early)",
    explanation: "Daily quality control testing enables early detection of calibration drift or component failure before patient care is compromised.",
    explanation_mr: "रोजच्या तपासणीमुळे मशीनमधील बारीक बिघाड वेळेवर कळून मोठी अडचण टळते.",
    difficulty: "medium" as const,
    topic: "Quality Assurance",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 29004,
    question: "PACS stands for:",
    question_mr: "वैद्यकीय इमेजिंगमधील PACS चे पूर्ण नाव काय आहे?",
    options: [
      "(A) Patient Archive Control System",
      "(B) Picture Archiving and Communication System",
      "(C) Portable Acquisition Control System",
      "(D) Photo Archive Computer System"
    ],
    options_mr: [
      "(A) पेशंट आर्काईव्ह कंट्रोल",
      "(B) पिक्चर आर्काईव्हिंग अँड कम्युनिकेशन सिस्टीम (Picture Archiving and Communication System)",
      "(C) पोर्टेबल ॲक्विझिशन सिस्टीम",
      "(D) फोटो आर्काईव्ह कॉम्प्युटर"
    ],
    correct_answer: "(B) Picture Archiving and Communication System",
    correct_answer_mr: "(B) पिक्चर आर्काईव्हिंग अँड कम्युनिकेशन सिस्टीम (Picture Archiving and Communication System)",
    explanation: "PACS (Picture Archiving and Communication System) provides economical storage and convenient access to images from multiple modalities.",
    explanation_mr: "पॅक्स (PACS) मुळे एक्स-रे, सीटी व एमआरआयच्या प्रतिमेची साठवणूक व देवाणघेवाण डिजिटल माध्यमातून होते.",
    difficulty: "medium" as const,
    topic: "Digital Radiography",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 29005,
    question: "The radiographer should always confirm:",
    question_mr: "एक्स-रे काढण्यापूर्वी रेडिओग्राफरने नेहमी काय खात्रीपूर्वक तपासले पाहिजे?",
    options: [
      "(A) Only patient name",
      "(B) Correct patient, correct procedure, and correct side",
      "(C) Only doctor name",
      "(D) Only machine settings"
    ],
    options_mr: [
      "(A) फक्त रुग्णाचे नाव",
      "(B) अचूक रुग्ण, योग्य तपासणी आणि योग्य बाजू (Right Patient, Right Exam & Right Side)",
      "(C) डॉक्टरांचे नाव",
      "(D) फक्त मशीन सेटिंग"
    ],
    correct_answer: "(B) Correct patient, correct procedure, and correct side",
    correct_answer_mr: "(B) अचूक रुग्ण, योग्य तपासणी आणि योग्य बाजू (Right Patient, Right Exam & Right Side)",
    explanation: "Verifying the correct patient, correct anatomical site/side, and prescribed examination avoids medical errors and wrong-site imaging.",
    explanation_mr: "उजवा किंवा डावा हात/पाय तसेच केसपेपरनुसार अचूक रुग्णाची निवड करणे ही सर्वात महत्त्वाची पायरी आहे.",
    difficulty: "medium" as const,
    topic: "DHS Practice",
    category: "Technical: Patient Care & Contrast Media"
  }
];

export const CHAPTER_29_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 29001 + i;
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
    chapter_name: "Final Mock Test & Revision"
  };
});
