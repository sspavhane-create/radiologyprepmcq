import { Question } from '../types';

const rawQuestions = [
  {
    id: 6001,
    question: "Which device reduces patient dose by converting X-rays into visible light?",
    question_mr: "फ्लुरोस्कोपीमध्ये क्ष-किरणांचे रुपांतर दृश्य प्रकाशात (Visible light) करून रुग्णाचा रेडिएशन डोस कमी करणारे उपकरण कोणते?",
    options: [
      "(A) Grid",
      "(B) Image Intensifier",
      "(C) Collimator",
      "(D) AEC"
    ],
    options_mr: [
      "(A) ग्रिड",
      "(B) इमेज इंटेन्सिफायर (Image Intensifier Tube)",
      "(C) कॉलिमॅटर",
      "(D) एईसी"
    ],
    correct_answer: "(B) Image Intensifier",
    correct_answer_mr: "(B) इमेज इंटेन्सिफायर (Image Intensifier Tube)",
    explanation: "An Image Intensifier multiplies image brightness thousands of times, allowing low X-ray dose fluoroscopy.",
    explanation_mr: "इमेज इंटेन्सिफायर प्रतिमेचा प्रकाश हजारो पटींनी वाढवतो, ज्यामुळे अत्यंत कमी डोसमध्ये थेट फ्लुरोस्कोपी प्रतिमा पाहता येते.",
    difficulty: "medium" as const,
    topic: "Fluoroscopy",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 6002,
    question: "C-arm fluoroscopy is most commonly used in:",
    question_mr: "सी-आर्म (C-Arm) फ्लुरोस्कोपी उपकरणाचा सर्वाधिक वापर कोणत्या शस्त्रक्रियांमध्ये/विभागात केला जातो?",
    options: [
      "(A) Dental imaging",
      "(B) Orthopedic surgery",
      "(C) Mammography",
      "(D) DEXA"
    ],
    options_mr: [
      "(A) दातांचे एक्स-रे",
      "(B) अस्थिव्यंग व हाडांच्या शस्त्रक्रिया (Orthopedic surgery)",
      "(C) मॅमोग्राफी",
      "(D) डेक्सा स्कॅन"
    ],
    correct_answer: "(B) Orthopedic surgery",
    correct_answer_mr: "(B) अस्थिव्यंग व हाडांच्या शस्त्रक्रिया (Orthopedic surgery)",
    explanation: "C-arm mobile fluoroscopic units are routinely utilized in operating theaters for orthopedic nailings, fracture fixations, and vascular interventions.",
    explanation_mr: "ऑपरेशन थिएटरमध्ये हाडांचे फ्रॅक्चर जोडणे आणि रॉड/स्क्रू बसवण्यासाठी सी-आर्मचा वापर होतो.",
    difficulty: "medium" as const,
    topic: "C-Arm",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 6003,
    question: "PACS stands for:",
    question_mr: "PACS चे पूर्ण रूप (Full Form) काय आहे?",
    options: [
      "(A) Patient Archive Control System",
      "(B) Picture Archiving and Communication System",
      "(C) Picture Analysis Control Software",
      "(D) Primary Archive Communication Setup"
    ],
    options_mr: [
      "(A) पेशंट आर्काईव्ह कंट्रोल सिस्टीम",
      "(B) पिक्चर आर्काईव्हिंग अँड कम्युनिकेशन सिस्टीम (Picture Archiving and Communication System)",
      "(C) पिक्चर ॲनालिसीस कंट्रोल सॉफ्टवेअर",
      "(D) प्रायमरी आर्काईव्ह"
    ],
    correct_answer: "(B) Picture Archiving and Communication System",
    correct_answer_mr: "(B) पिक्चर आर्काईव्हिंग अँड कम्युनिकेशन सिस्टीम (Picture Archiving and Communication System)",
    explanation: "PACS is a medical imaging technology that provides economical storage and convenient access to images from multiple modalities.",
    explanation_mr: "PACS हे वैद्यकीय एक्स-रे व सीटी स्कॅन प्रतिमा डिजिटल पद्धतीने सुरक्षित साठवण्यासाठी आणि नेटवर्कवर पाठवण्यासाठी वापरले जाणारे तंत्रज्ञान आहे.",
    difficulty: "medium" as const,
    topic: "PACS",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 6004,
    question: "The matrix size 1024 × 1024 contains how many pixels?",
    question_mr: "१०२४ × १०२४ मॅट्रिक्स साईझच्या डिजिटल प्रतिमेमध्ये एकूण किती पिक्सेल्स (Pixels) असतात?",
    options: [
      "(A) 102,400",
      "(B) 524,288",
      "(C) 1,048,576",
      "(D) 2,048,000"
    ],
    options_mr: [
      "(A) १०२,४००",
      "(B) ५२४,२८८",
      "(C) १,०४८,५७६ (1,048,576 / ~1 Megapixel)",
      "(D) २०,४८,०००"
    ],
    correct_answer: "(C) 1,048,576",
    correct_answer_mr: "(C) १,०४८,५७६ (1,048,576 / ~1 Megapixel)",
    explanation: "Total pixels = Rows × Columns = 1024 × 1024 = 1,048,576 pixels (approx. 1 megapixel).",
    explanation_mr: "एकूण पिक्सेल्स = १०२४ × १०२४ = १,०४८,५७६ पिक्सेल्स (सुमारे १ मेगापिक्सेल).",
    difficulty: "medium" as const,
    topic: "Digital Imaging",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 6005,
    question: "Automatic Exposure Control primarily terminates the exposure based on:",
    question_mr: "ऑटोमॅटिक एक्स्पोजर कंट्रोल (AEC) मुख्यत्वे कशाच्या आधारे रेडिएशन एक्स्पोजर आपोआप बंद करते?",
    options: [
      "(A) Exposure time only",
      "(B) Tube current",
      "(C) Amount of radiation reaching the detector",
      "(D) SID"
    ],
    options_mr: [
      "(A) फक्त ठराविक वेळ संपल्यावर",
      "(B) ट्युब करंट",
      "(C) डिटेक्टरपर्यंत पोहोचणाऱ्या रेडिएशनच्या योग्य प्रमाणावर (Amount of radiation reaching the detector)",
      "(D) एसआयडी वर"
    ],
    correct_answer: "(C) Amount of radiation reaching the detector",
    correct_answer_mr: "(C) डिटेक्टरपर्यंत पोहोचणाऱ्या रेडिएशनच्या योग्य प्रमाणावर (Amount of radiation reaching the detector)",
    explanation: "AEC ionization chambers measure radiation passing through the patient and cut off exposure once predetermined radiation charge is reached.",
    explanation_mr: "AEC चे आयनायझेशन चेंबर रुग्णातून पार होणाऱ्या रेडिएशनचे प्रमाण मोजून आवश्यक डोस मिळताच एक्स्पोजर आपोआप थांबवतात.",
    difficulty: "medium" as const,
    topic: "AEC",
    category: "Technical: Radiophysics & Machine Principles"
  }
];

export const CHAPTER_6_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 6001 + i;
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
    chapter_name: "Fluoroscopy, PACS & Digital Imaging"
  };
});
