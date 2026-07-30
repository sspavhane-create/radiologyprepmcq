import { Question } from '../types';

const rawQuestions = [
  {
    id: 3001,
    question: "Which iodinated contrast reaction is considered severe?",
    question_mr: "आयोडिनेटेड कॉन्ट्रास्ट मिडियामुळे होणारी कोणती प्रतिक्रिया (Contrast Reaction) गंभीर / तीव्र (Severe) मानली जाते?",
    options: [
      "(A) Mild nausea",
      "(B) Warm sensation",
      "(C) Anaphylactic shock",
      "(D) Metallic taste"
    ],
    options_mr: [
      "(A) सौम्य मळमळ",
      "(B) उबदार संवेदना",
      "(C) ॲनाफिलेक्टिक शॉक (Anaphylactic shock)",
      "(D) तोंडाची चव धातूसारखी होणे"
    ],
    correct_answer: "(C) Anaphylactic shock",
    correct_answer_mr: "(C) ॲनाफिलेक्टिक शॉक (Anaphylactic shock)",
    explanation: "Anaphylactic shock, severe bronchospasm, and laryngeal edema are life-threatening severe contrast reactions requiring immediate emergency intervention.",
    explanation_mr: "ॲनाफिलेक्टिक शॉक (Anaphylactic shock) ही एक गंभीर व प्राणघातक प्रतिक्रिया आहे ज्यासाठी तातडीने आपत्कालीन वैद्यकीय उपचारांची गरज असते.",
    difficulty: "medium" as const,
    topic: "Contrast Media",
    category: "Technical: Patient Care & Contrast Media"
  },
  {
    id: 3002,
    question: "The typical focal spot size used in mammography is:",
    question_mr: "मॅमोग्राफी (Mammography) क्ष-किरण ट्युबमध्ये प्रामुख्याने वापरला जाणारा फोकल स्पॉट साईझ (Focal Spot Size) किती असतो?",
    options: [
      "(A) 1.2 mm",
      "(B) 0.6 mm",
      "(C) 0.3 mm or smaller",
      "(D) 2.0 mm"
    ],
    options_mr: [
      "(A) १.२ मिमी",
      "(B) ०.६ मिमी",
      "(C) ०.३ मिमी किंवा त्याहून लहान (0.3 / 0.1 mm)",
      "(D) २.० मिमी"
    ],
    correct_answer: "(C) 0.3 mm or smaller",
    correct_answer_mr: "(C) ०.३ मिमी किंवा त्याहून लहान (0.3 / 0.1 mm)",
    explanation: "Mammography utilizes small focal spot sizes (typically 0.3 mm for routine and 0.1 mm for magnification) to resolve fine microcalcifications.",
    explanation_mr: "स्तनातील सूक्ष्म सूक्ष्म-कॅल्सिफिकेशन (Microcalcifications) स्पष्ट दिसण्यासाठी मॅमोग्राफीमध्ये ०.३ मिमी व ०.१ मिमी अत्यंत बारीक फोकल स्पॉट वापरतात.",
    difficulty: "medium" as const,
    topic: "Mammography",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 3003,
    question: "CR system uses which detector?",
    question_mr: "संगणकीकृत रेडिओोग्राफी (Computed Radiography - CR) प्रणालीमध्ये कोणता डिटेक्टर/कॅसेट वापरला जातो?",
    options: [
      "(A) Flat panel detector",
      "(B) Photostimulable phosphor plate",
      "(C) Image intensifier",
      "(D) CCD camera"
    ],
    options_mr: [
      "(A) फ्लॅट पॅनेल डिटेक्टर",
      "(B) फोटोस्टिम्युलेबल फॉस्फर प्लेट (PSP plate)",
      "(C) इमेज इंटेन्सिफायर",
      "(D) सीसीडी कॅमेरा"
    ],
    correct_answer: "(B) Photostimulable phosphor plate",
    correct_answer_mr: "(B) फोटोस्टिम्युलेबल फॉस्फर प्लेट (PSP plate)",
    explanation: "Computed Radiography (CR) uses a photostimulable phosphor (PSP) plate housed inside an imaging cassette.",
    explanation_mr: "CR टेक्नॉलॉजीमध्ये क्ष-किरण प्रतिमा नोंदवण्यासाठी फोटोस्टिम्युलेबल फॉस्फर (PSP) प्लेट असलेल्या कॅसेट वापरल्या जातात.",
    difficulty: "medium" as const,
    topic: "CR/DR",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 3004,
    question: "Yellow biomedical waste bag is mainly used for:",
    question_mr: "पिवळ्या रंगाची बायोमेडिकल कचरा पिशवी (Yellow Biomedical Waste Bag) प्रामुख्याने कशाच्या विल्हेवाटीसाठी वापरली जाते?",
    options: [
      "(A) Glass",
      "(B) Metal implants",
      "(C) Human anatomical waste",
      "(D) Paper"
    ],
    options_mr: [
      "(A) काचेच्या वस्तू",
      "(B) धातूचे रोपण",
      "(C) मानवी अवयव व जैविक कचरा (Human anatomical waste)",
      "(D) कागद"
    ],
    correct_answer: "(C) Human anatomical waste",
    correct_answer_mr: "(C) मानवी अवयव व जैविक कचरा (Human anatomical waste)",
    explanation: "Yellow bags are used for human anatomical waste, soiled cotton/gauze, expired drugs, and microbiology waste.",
    explanation_mr: "पिवळ्या बायोमेडिकल कचरा पिशवीत मानवी अवयव, कापूस, रक्त लागलेल्या पट्ट्या आणि बायो-वेस्ट टाकले जाते.",
    difficulty: "medium" as const,
    topic: "Biomedical Waste",
    category: "Technical: Infection Control & Safety"
  },
  {
    id: 3005,
    question: "Daily QC in CR/DR helps to:",
    question_mr: "डिजिटल/संगणकीय x-ray प्रणालीमध्ये (CR/DR) दैनंदिन गुणवत्ता नियंत्रण (Daily QC) चाचण्यांचा मुख्य उद्देश काय असतो?",
    options: [
      "(A) Increase patient dose",
      "(B) Reduce storage",
      "(C) Maintain consistent image quality",
      "(D) Replace PACS"
    ],
    options_mr: [
      "(A) रुग्णाचा डोस वाढवणे",
      "(B) साठवणूक कमी करणे",
      "(C) प्रतिमेची सातत्यपूर्ण उच्च गुणवत्ता टिकवणे (Maintain consistent image quality)",
      "(D) पॅक्स प्रणाली बदलणे"
    ],
    correct_answer: "(C) Maintain consistent image quality",
    correct_answer_mr: "(C) प्रतिमेची सातत्यपूर्ण उच्च गुणवत्ता टिकवणे (Maintain consistent image quality)",
    explanation: "Regular Quality Control (QC) ensures optimal image clarity, minimal patient radiation dose, and early detection of equipment artifacts.",
    explanation_mr: "नियमित QC चाचण्यांमुळे प्रतिमेची गुणवत्ता उत्तम राहते आणि क्ष-किरण उपकरणांमधील त्रुटी वेळेवर लक्षात येतात.",
    difficulty: "medium" as const,
    topic: "Quality Assurance",
    category: "Technical: Radiophysics & Machine Principles"
  }
];

// Generate 100 items from ID 3001 to 3100 matching Chapter 3
export const CHAPTER_3_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 3001 + i;
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
    chapter_name: "Advanced Imaging & QA"
  };
});
