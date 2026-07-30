import { Question } from '../types';

const rawQuestions = [
  {
    id: 15001,
    question: "The primary purpose of preventive maintenance is:",
    question_mr: "प्रिव्हेंटिव्ह मेंटेनन्सचा (Preventive Maintenance) मुख्य उद्देश काय आहे?",
    options: [
      "(A) Increase patient dose",
      "(B) Reduce equipment breakdown and ensure safe operation",
      "(C) Increase exposure time",
      "(D) Replace QA tests"
    ],
    options_mr: [
      "(A) रुग्णाचा डोस वाढवणे",
      "(B) उपकरणांचे अचानक होणारे ब्रेकडाऊन रोखणे व सुरक्षितता सुनिश्चित करणे",
      "(C) एक्स्पोजर वेळ वाढवणे",
      "(D) चाचण्या बंद करणे"
    ],
    correct_answer: "(B) Reduce equipment breakdown and ensure safe operation",
    correct_answer_mr: "(B) उपकरणांचे अचानक होणारे ब्रेकडाऊन रोखणे व सुरक्षितता सुनिश्चित करणे",
    explanation: "Scheduled preventive maintenance minimizes unscheduled downtime, ensures mechanical and electrical safety, and maintains calibration.",
    explanation_mr: "वेळोवेळी उपकरणांची देखभाल केल्यास अचानक होणारे बिघाड टळतात आणि मशिन व्यवस्थित काम करते.",
    difficulty: "medium" as const,
    topic: "X-Ray Machine Maintenance",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 15002,
    question: "A quality assurance program primarily aims to:",
    question_mr: "रेडिओग्राफीमधील क्वालिटी अशुरन्स (Quality Assurance - QA) प्रोग्रामचा मुख्य उद्देश काय?",
    options: [
      "(A) Increase film usage",
      "(B) Maintain consistent image quality while minimizing patient dose",
      "(C) Increase repeat rate",
      "(D) Eliminate collimation"
    ],
    options_mr: [
      "(A) फिल्मचा वापर वाढवणे",
      "(B) रुग्णाचा रेडिएशन डोस कमी ठेवून सातत्याने उत्तम इमेज गुणवत्ता राखणे",
      "(C) रिपीट एक्स-रे वाढवणे",
      "(D) कॉलिमेशन न वापरणे"
    ],
    correct_answer: "(B) Maintain consistent image quality while minimizing patient dose",
    correct_answer_mr: "(B) रुग्णाचा रेडिएशन डोस कमी ठेवून सातत्याने उत्तम इमेज गुणवत्ता राखणे",
    explanation: "QA programs ensure diagnostic image quality is consistently high while patient exposure and repeat examinations are kept ALARA.",
    explanation_mr: "क्यूए प्रोग्राममुळे नको तो डोस टळतो आणि एक्स-रे ची अचूकता टिकून राहते.",
    difficulty: "medium" as const,
    topic: "Quality Assurance",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 15003,
    question: "The imaging plate in CR is composed mainly of:",
    question_mr: "संगणकीय रेडिओग्राफीमध्ये (Computed Radiography - CR) इमेजिंग प्लेट (IP) कशापासून बनलेली असते?",
    options: [
      "(A) Amorphous selenium",
      "(B) Photostimulable phosphor",
      "(C) Cesium iodide TFT",
      "(D) Silver halide film"
    ],
    options_mr: [
      "(A) अमॉर्फस सेलेनियम",
      "(B) फोटोस्टिम्युलेबल फॉस्फर (Photostimulable Phosphor - PSP / BaFBr:Eu)",
      "(C) सिसियम आयोडा़ईड",
      "(D) सिल्व्हर हॅलाईड फिल्म"
    ],
    correct_answer: "(B) Photostimulable phosphor",
    correct_answer_mr: "(B) फोटोस्टिम्युलेबल फॉस्फर (Photostimulable Phosphor - PSP / BaFBr:Eu)",
    explanation: "CR imaging plates contain photostimulable europium-doped barium fluorohalide (PSP) crystals that trap latent image energy.",
    explanation_mr: "सीआर मधील प्लेटवर युरोपियम डॉप केलेले बेरियम फ्लोरोहालाईड फॉस्फर कोटिंग असते जे रेडिएशन ऊर्जा साठवून ठेवते.",
    difficulty: "medium" as const,
    topic: "Computed Radiography (CR)",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 15004,
    question: "The exposure index (EI) is mainly used to indicate:",
    question_mr: "डिजिटल इमेजिंगमध्ये एक्स्पोजर इंडेक्स (Exposure Index - EI) प्रामुख्याने काय दर्शवतो?",
    options: [
      "(A) Patient weight",
      "(B) Tube output",
      "(C) Detector exposure",
      "(D) SID accuracy"
    ],
    options_mr: [
      "(A) रुग्णाचे वजन",
      "(B) ट्यूबचा आउटपुट",
      "(C) डिटेक्टरवर पोहोचलेला रेडिएशनचा डोस (Detector Exposure)",
      "(D) एसआयडी अचूकता"
    ],
    correct_answer: "(C) Detector exposure",
    correct_answer_mr: "(C) डिटेक्टरवर पोहोचलेला रेडिएशनचा डोस (Detector Exposure)",
    explanation: "Exposure Index (EI) is a numerical measure proportional to the total amount of radiation received by the digital receptor.",
    explanation_mr: "एक्स्पोजर इंडेक्सवरून एक्स-रे अति (Overexposed) झाला आहे की कमी (Underexposed) झाला आहे हे कळते.",
    difficulty: "medium" as const,
    topic: "Exposure Index",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 15005,
    question: "Grid cutoff is most commonly caused by:",
    question_mr: "ग्रिड कट-ऑफ (Grid Cutoff) होण्याचे सर्वात मुख्य कारण कोणते?",
    options: [
      "(A) Low mAs",
      "(B) Improper grid alignment",
      "(C) Short exposure time",
      "(D) High kVp"
    ],
    options_mr: [
      "(A) कमी mAs",
      "(B) ग्रिड व बीमची अयोग्य अलाइनमेंट किंवा तिरपेपणा (Improper grid alignment)",
      "(C) कमी वेळ",
      "(D) जास्त kVp"
    ],
    correct_answer: "(B) Improper grid alignment",
    correct_answer_mr: "(B) ग्रिड व बीमची अयोग्य अलाइनमेंट किंवा तिरपेपणा (Improper grid alignment)",
    explanation: "Grid cutoff occurs when primary X-ray photons are absorbed by grid lead strips due to grid titling, off-centering, or wrong distance.",
    explanation_mr: "ग्रिड तिरपी किंवा सेंट्रल बीमच्या अलाइनमेंटमध्ये नसल्यास प्राथमिक किरण शोषले जातात व कडा फिकट येतात.",
    difficulty: "medium" as const,
    topic: "Troubleshooting",
    category: "Technical: Radiophysics & Machine Principles"
  }
];

export const CHAPTER_15_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 15001 + i;
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
    chapter_name: "Maintenance, QA/QC, CR & Troubleshooting"
  };
});
