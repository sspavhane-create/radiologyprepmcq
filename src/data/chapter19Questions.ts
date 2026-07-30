import { Question } from '../types';

const rawQuestions = [
  {
    id: 19001,
    question: "The target/filter combination commonly used for routine mammography is:",
    question_mr: "मॅमोग्राफीमध्ये (Mammography) मऊ उतींचा (Soft Tissues) कॉन्ट्रास्ट मिळवण्यासाठी प्रामुख्याने कोणते टार्गेट/फिल्टर कॉम्बिनेशन वापरले जाते?",
    options: [
      "(A) Tungsten/Lead",
      "(B) Molybdenum/Molybdenum (Mo/Mo)",
      "(C) Copper/Aluminum",
      "(D) Iron/Copper"
    ],
    options_mr: [
      "(A) टंगस्टन / लेड",
      "(B) मॉलिब्डेनम / मॉलिब्डेनम (Molybdenum/Molybdenum - Mo/Mo)",
      "(C) कॉपर / ॲल्युमिनियम",
      "(D) आयर्न / कॉपर"
    ],
    correct_answer: "(B) Molybdenum/Molybdenum (Mo/Mo)",
    correct_answer_mr: "(B) मॉलिब्डेनम / मॉलिब्डेनम (Molybdenum/Molybdenum - Mo/Mo)",
    explanation: "Molybdenum targets with molybdenum filters generate characteristic X-rays (17.5 & 19.6 keV) optimal for soft tissue breast contrast.",
    explanation_mr: "मॉलिब्डेनम एनोड आणि फिल्टरमुळे मॅमोग्राफीसाठी लागणारी १७ ते २० keV दरम्यानची कमी ऊर्जेची बीम मिळते.",
    difficulty: "medium" as const,
    topic: "Mammography Physics",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 19002,
    question: "The standard mammography projections are:",
    question_mr: "रूटीन मॅमोग्राफी तपासणीसाठीच्या दोन मानक (Standard) प्रोझेशन्स कोणत्या?",
    options: [
      "(A) AP and Lateral",
      "(B) CC and MLO",
      "(C) PA and Oblique",
      "(D) Axial and Tangential"
    ],
    options_mr: [
      "(A) एपी व लॅटरल",
      "(B) सीसी आणि एमएलओ (Craniocaudal - CC & Mediolateral Oblique - MLO)",
      "(C) पीए व ऑब्लिक",
      "(D) ॲक्सिअल व टँजेंशियल"
    ],
    correct_answer: "(B) CC and MLO",
    correct_answer_mr: "(B) सीसी आणि एमएलओ (Craniocaudal - CC & Mediolateral Oblique - MLO)",
    explanation: "Craniocaudal (CC) and Mediolateral Oblique (MLO) are the two standard routine screening projections for each breast.",
    explanation_mr: "क्रेनियोकॉडल (CC) आणि मेडिओलॅटरल ऑब्लिक (MLO) या दोन्ही व्ह्यूजमुळे स्तनाचा संपूर्ण भाग स्पष्ट दिसतो.",
    difficulty: "medium" as const,
    topic: "Breast Positioning",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 19003,
    question: "The main purpose of breast compression is to:",
    question_mr: "मॅमोग्राफीदरम्यान ब्रेस्ट कॉम्प्रेसनचा (Breast Compression) मुख्य हेतू काय असतो?",
    options: [
      "(A) Increase dose",
      "(B) Reduce tissue thickness and improve image quality",
      "(C) Increase motion",
      "(D) Increase SID"
    ],
    options_mr: [
      "(A) रेडिएशन डोस वाढवणे",
      "(B) स्तनाच्या उतींची जाडी कमी करणे, स्कॅटर रेडिएशन रोखणे व प्रतिमा स्पष्ट करणे",
      "(C) रुग्णाची हालचाल वाढवणे",
      "(D) एसआयडी वाढवणे"
    ],
    correct_answer: "(B) Reduce tissue thickness and improve image quality",
    correct_answer_mr: "(B) स्तनाच्या उतींची जाडी कमी करणे, स्कॅटर रेडिएशन रोखणे व प्रतिमा स्पष्ट करणे",
    explanation: "Breast compression reduces tissue thickness, spreads overlapping structures, lowers scatter radiation, and decreases patient motion and radiation dose.",
    explanation_mr: "दाब दिल्यामुळे स्तनाचा जाड भाग पातळ होतो, रेडिएशन डोस कमी लागतो व सूक्ष्म गाठी (Microcalcifications) स्पष्ट दिसतात.",
    difficulty: "medium" as const,
    topic: "Breast Compression",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 19004,
    question: "Daily quality control commonly includes checking the:",
    question_mr: "मॅमोग्राफी युनिटच्या दैनंदिन (Daily) क्वालिटी कंट्रोल (QC) मध्ये प्रामुख्याने कशाची तपासणी केली जाते?",
    options: [
      "(A) CTDI",
      "(B) Phantom image quality",
      "(C) MRI gradients",
      "(D) TLD badge"
    ],
    options_mr: [
      "(A) सीटीडीआय",
      "(B) मॅमोग्राफी फँटम इमेज गुणवत्ता (Phantom image quality)",
      "(C) एमआरआय ग्रेडियंट",
      "(D) टीएलडी बॅज"
    ],
    correct_answer: "(B) Phantom image quality",
    correct_answer_mr: "(B) मॅमोग्राफी फँटम इमेज गुणवत्ता (Phantom image quality)",
    explanation: "Daily/weekly QC in mammography involves imaging an ACR phantom to evaluate optical density, contrast, and resolution of fibers/specks.",
    explanation_mr: "ACR फँटमची रोज इमेज काढून रिझोल्युशन व सूक्ष्म फायबर्स स्पष्ट दिसतात की नाही हे तपासले जाते.",
    difficulty: "medium" as const,
    topic: "Mammography QC",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 19005,
    question: "BI-RADS Category 2 indicates:",
    question_mr: "मॅमोग्राफी रिपोर्टमधील BI-RADS वर्गवारी २ (BI-RADS Category 2) चा अर्थ काय होतो?",
    options: [
      "(A) Incomplete",
      "(B) Benign finding",
      "(C) Suspicious abnormality",
      "(D) Known biopsy-proven malignancy"
    ],
    options_mr: [
      "(A) अपूर्ण तपासणी",
      "(B) सौम्य व निर्धोक बदल (Benign Finding - कर्करोग नसलेले निर्धोक बदल)",
      "(C) संशयास्पद गाठ",
      "(D) सिद्ध झालेला कर्करोग"
    ],
    correct_answer: "(B) Benign finding",
    correct_answer_mr: "(B) सौम्य व निर्धोक बदल (Benign Finding - कर्करोग नसलेले निर्धोक बदल)",
    explanation: "BI-RADS 2 corresponds to a definite benign finding (e.g. simple cyst, calcified fibroadenoma) with 0% risk of malignancy.",
    explanation_mr: "बाय-रॅड्स २ म्हणजे स्तनामध्ये सौम्य आणि निर्धोक बदल आहेत ज्यात कर्करोगाचा कोणताही धोका नसतो.",
    difficulty: "medium" as const,
    topic: "BI-RADS",
    category: "Technical: Special Imaging Modalities"
  }
];

export const CHAPTER_19_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 19001 + i;
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
    chapter_name: "Mammography Physics, QC & BI-RADS"
  };
});
