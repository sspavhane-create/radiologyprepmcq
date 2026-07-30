import { Question } from '../types';

const rawQuestions = [
  {
    id: 20001,
    question: "The primary purpose of fluoroscopy in interventional radiology is:",
    question_mr: "इंटरव्हेंशनल रेडिओलॉजीमध्ये (Interventional Radiology) फ्लोरोस्कोपीचा मुख्य उद्देश काय असतो?",
    options: [
      "(A) Static imaging only",
      "(B) Real-time image guidance",
      "(C) Radiotherapy planning",
      "(D) MRI localization"
    ],
    options_mr: [
      "(A) फक्त स्थिर चित्रे घेणे",
      "(B) शस्त्रक्रियेदरम्यान थेट/सलग व्हिडिओ मार्गदर्शन (Real-time image guidance)",
      "(C) रेडिओथेरपी नियोजन",
      "(D) एमआरआय लोकेशन"
    ],
    correct_answer: "(B) Real-time image guidance",
    correct_answer_mr: "(B) शस्त्रक्रियेदरम्यान थेट/सलग व्हिडिओ मार्गदर्शन (Real-time image guidance)",
    explanation: "Fluoroscopy provides dynamic real-time X-ray visualization to guide catheters, wires, and stents inside blood vessels.",
    explanation_mr: "फ्लोरोस्कोपीमुळे डॉक्टर थेट टीव्ही स्क्रीनवर कॅथेटर आणि वायरचा मार्ग पाहत शस्त्रक्रिया करू शकतात.",
    difficulty: "medium" as const,
    topic: "Interventional Radiology",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 20002,
    question: "The most common vascular access site for diagnostic angiography is:",
    question_mr: "अँजिओोग्राफी तपासणीसाठी रक्तवाहिनीत प्रवेश (Vascular Access) मिळवण्याची सर्वात सामान्य जागा कोणती?",
    options: [
      "(A) Radial vein",
      "(B) Femoral artery",
      "(C) Carotid artery",
      "(D) Popliteal vein"
    ],
    options_mr: [
      "(A) रेडिअल व्हेन",
      "(B) फिमोरल आर्टरी / मांड्यामधील रोहिणी (Femoral Artery)",
      "(C) कॅरोटिड आर्टरी",
      "(D) पॉपलिटिअल व्हेन"
    ],
    correct_answer: "(B) Femoral artery",
    correct_answer_mr: "(B) फिमोरल आर्टरी / मांड्यामधील रोहिणी (Femoral Artery)",
    explanation: "The common femoral artery (via Seldinger technique) has traditionally been the most frequent vascular access site for catheterization.",
    explanation_mr: "मांडीतील फिमोरल रोहिणी (Femoral Artery) आकाराने मोठी असल्याने कॅथेटर टाकण्यासाठी सर्वाधिक वापरली जाते.",
    difficulty: "medium" as const,
    topic: "Angiography",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 20003,
    question: "DSA improves visualization by:",
    question_mr: "डिजिटल सबट्रॅक्शन अँजिओोग्राफी (DSA) द्वारे रक्तवाहिन्या स्पष्ट कशा दिसतात?",
    options: [
      "(A) Increasing kVp",
      "(B) Subtracting pre-contrast images from contrast images",
      "(C) Reducing SID",
      "(D) Using ultrasound"
    ],
    options_mr: [
      "(A) kVp वाढवून",
      "(B) कॉन्ट्रास्ट देण्यापूर्वीच्या प्रतिमेतून (Mask image) कॉन्ट्रास्टयुक्त प्रतिमा वजा (Subtract) करून",
      "(C) एसआयडी कमी करून",
      "(D) सोनोग्राफी वापरून"
    ],
    correct_answer: "(B) Subtracting pre-contrast images from contrast images",
    correct_answer_mr: "(B) कॉन्ट्रास्ट देण्यापूर्वीच्या प्रतिमेतून (Mask image) कॉन्ट्रास्टयुक्त प्रतिमा वजा (Subtract) करून",
    explanation: "DSA subtracts a pre-contrast 'mask' image from live contrast-filled images, removing bone and soft tissue backgrounds to isolate vessels.",
    explanation_mr: "डीएसएमध्ये हाडे व इतर अवयव कॉम्प्युटरद्वारे वजा केले जातात, ज्यामुळे फक्त डाय भरलेल्या रक्तवाहिन्याच स्पष्ट दिसतात.",
    difficulty: "medium" as const,
    topic: "Digital Subtraction Angiography",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 20004,
    question: "A power injector is mainly used to:",
    question_mr: "कॅथ लॅब / अँजिओग्राफीमध्ये पॉवर इंजेक्टरचा (Power Injector) मुख्य उपयोग काय?",
    options: [
      "(A) Measure blood pressure",
      "(B) Deliver contrast media at a controlled rate",
      "(C) Generate X-rays",
      "(D) Filter contrast"
    ],
    options_mr: [
      "(A) रक्तदाब मोजणे",
      "(B) नियंत्रित दाबाने व ठराविक गतीने कॉन्ट्रास्ट डाय रक्तवाहिनीत सोडणे (Controlled Contrast Delivery)",
      "(C) एक्स-रे तयार करणे",
      "(D) डाय गाळणे"
    ],
    correct_answer: "(B) Deliver contrast media at a controlled rate",
    correct_answer_mr: "(B) नियंत्रित दाबाने व ठराविक गतीने कॉन्ट्रास्ट डाय रक्तवाहिनीत सोडणे (Controlled Contrast Delivery)",
    explanation: "Automatic power injectors precisely control volume, flow rate, and pressure of contrast media injections during vascular procedures.",
    explanation_mr: "पॉवर इंजेक्टरद्वारे ठराविक सेकंदात हवा तेवढाच डाय योग्य दाबाने थेट रक्तवाहिनीत टोचता येतो.",
    difficulty: "medium" as const,
    topic: "Contrast Injector",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 20005,
    question: "The most effective personal protective equipment in a cath lab is:",
    question_mr: "कॅथ लॅबमध्ये (Cath Lab) काम करणाऱ्या कर्मचाऱ्यांसाठी सर्वात महत्त्वाचे वैयक्तिक संरक्षण साधन (PPE) कोणते?",
    options: [
      "(A) Surgical mask",
      "(B) Lead apron with thyroid shield",
      "(C) Cotton gown",
      "(D) Face towel"
    ],
    options_mr: [
      "(A) सर्जिकल मास्क",
      "(B) थायरॉईड कॉलरसह लेड ॲप्रन (Lead apron with thyroid shield - 0.5mm Pb)",
      "(C) सुती गाऊन",
      "(D) रुमाल"
    ],
    correct_answer: "(B) Lead apron with thyroid shield",
    correct_answer_mr: "(B) थायरॉईड कॉलरसह लेड ॲप्रन (Lead apron with thyroid shield - 0.5mm Pb)",
    explanation: "Lead aprons (min 0.35–0.5 mm Pb equivalent) and thyroid shields protect radiation-sensitive organs from high scatter radiation during fluoroscopy.",
    explanation_mr: "कॅथ लॅबमध्ये सलग फ्लोरोस्कोपी चालू असल्याने थायरॉईड शील्ड आणि लेड ॲप्रन वापरणे अनिवार्य आहे.",
    difficulty: "medium" as const,
    topic: "Cath Lab Radiation Safety",
    category: "Technical: Radiation Protection & Hazards"
  }
];

export const CHAPTER_20_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 20001 + i;
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
    chapter_name: "Interventional Radiology, Angiography & Cath Lab"
  };
});
