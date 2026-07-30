import { Question } from '../types';

const rawQuestions = [
  {
    id: 27001,
    question: "The AP axial skull projection commonly used to demonstrate the occipital bone is:",
    question_mr: "खोपडीतील ऑक्सिपिटल हाड (Occipital Bone) व फोरॅमेन मॅग्नम स्पष्ट दिसण्यासाठी कोणती AP ॲक्सिअल प्रोजेक्शन काढली जाते?",
    options: [
      "(A) Waters projection",
      "(B) Towne projection",
      "(C) Caldwell projection",
      "(D) SMV projection"
    ],
    options_mr: [
      "(A) वॉटर प्रोजेक्शन",
      "(B) टाऊन प्रोजेक्शन (Towne's Method / 30° caudad)",
      "(C) कॉलडवेल प्रोजेक्शन",
      "(D) सबमेंटोव्हर्टेक्स"
    ],
    correct_answer: "(B) Towne projection",
    correct_answer_mr: "(B) टाऊन प्रोजेक्शन (Towne's Method / 30° caudad)",
    explanation: "Towne projection (AP axial with 30° caudad angle to OML) clearly shows the occipital bone, foramen magnum, and dorsum sellae.",
    explanation_mr: "टाऊन व्ह्यूमध्ये ३०° खालील बाजूला (Caudad) कोन देऊन ऑक्सिपिटल बोन व फोरॅमेन मॅग्नम स्पष्ट पाहिले जाते.",
    difficulty: "medium" as const,
    topic: "Advanced Positioning",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 27002,
    question: "CT image brightness and tissue attenuation are primarily represented by:",
    question_mr: "सीटी स्कॅन प्रतिमेमध्ये उतींची घनता आणि ब्राइटनेस मोजण्यासाठी कोणते एकक वापरले जाते?",
    options: [
      "(A) Tesla",
      "(B) Hounsfield Units (HU)",
      "(C) Gauss",
      "(D) Pixel pitch"
    ],
    options_mr: [
      "(A) टेस्ला",
      "(B) हाउन्सफिल्ड युनिट्स (Hounsfield Units - HU)",
      "(C) गॉस",
      "(D) पिक्सेल पिच"
    ],
    correct_answer: "(B) Hounsfield Units (HU)",
    correct_answer_mr: "(B) हाउन्सफिल्ड युनिट्स (Hounsfield Units - HU)",
    explanation: "Hounsfield Units (HU) quantify linear attenuation coefficients of tissues relative to water (0 HU) and air (-1000 HU).",
    explanation_mr: "हाउन्सफिल्ड युनिट (HU) द्वारे सीटी स्कॅनवर पाण्याचा डोस 0 HU, हवेचा -1000 HU आणि हाडाचा +1000 HU मानला जातो.",
    difficulty: "medium" as const,
    topic: "CT Concepts",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 27003,
    question: "MRI primarily uses:",
    question_mr: "एमआरआय (MRI) प्रामुख्याने कशाचा वापर करून चित्रे तयार करतो?",
    options: [
      "(A) X-rays",
      "(B) Gamma rays",
      "(C) Magnetic fields and radiofrequency pulses",
      "(D) Ultrasound"
    ],
    options_mr: [
      "(A) एक्स-रे",
      "(B) गॅमा किरण",
      "(C) शक्तिशाली चुंबकीय क्षेत्र आणि रेडिओ फ्रिक्वेन्सी लहरी (Magnetic fields & RF pulses)",
      "(D) ध्वनी लहरी"
    ],
    correct_answer: "(C) Magnetic fields and radiofrequency pulses",
    correct_answer_mr: "(C) शक्तिशाली चुंबकीय क्षेत्र आणि रेडिओ फ्रिक्वेन्सी लहरी (Magnetic fields & RF pulses)",
    explanation: "MRI relies on nuclear magnetic resonance of hydrogen protons subjected to strong static magnetic fields and resonant RF pulses.",
    explanation_mr: "शरीरातील हायड्रोजन प्रोटॉन्सना चुंबकीय क्षेत्रात ठेवून त्यावर रेडिओ लहरी (RF Pulses) सोडून एमआरआय इमेज मिळते.",
    difficulty: "medium" as const,
    topic: "MRI Concepts",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 27004,
    question: "The tissue generally considered most radiosensitive is:",
    question_mr: "खालीलपैकी कोणती उती / अवयव रेडिएशनला सर्वाधिक संवेदनशील मानला जातो?",
    options: [
      "(A) Muscle",
      "(B) Bone marrow",
      "(C) Cartilage",
      "(D) Tendon"
    ],
    options_mr: [
      "(A) स्नायू (Muscle)",
      "(B) अस्थिमज्जा / रक्ताभिसरण पेशी (Active Bone Marrow / Lymphocytes)",
      "(C) कास्थी (Cartilage)",
      "(D) स्नायूबंध (Tendon)"
    ],
    correct_answer: "(B) Bone marrow",
    correct_answer_mr: "(B) अस्थिमज्जा / रक्ताभिसरण पेशी (Active Bone Marrow / Lymphocytes)",
    explanation: "According to the Law of Bergonie and Tribondeau, rapidly dividing stem cells like erythroblasts in bone marrow are highly radiosensitive.",
    explanation_mr: "बर्गोनी-ट्रिबॉन्ड्यू नियमानुसार जलद पेशीविभाजन होणाऱ्या अस्थिमज्जेतील (Bone marrow) पेशी सर्वात जास्त संवेदनशील असतात.",
    difficulty: "medium" as const,
    topic: "Radiation Biology",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 27005,
    question: "Spatial resolution refers to the ability to:",
    question_mr: "इमेजिंगमधील स्पॅशियल रिझोल्युशन (Spatial Resolution) म्हणजे काय?",
    options: [
      "(A) Reduce patient dose",
      "(B) Increase exposure time",
      "(C) Distinguish small adjacent structures as separate",
      "(D) Measure tube output"
    ],
    options_mr: [
      "(A) रुग्णाचा डोस कमी करणे",
      "(B) वेळ वाढवणे",
      "(C) एकमेकांलगत असलेल्या अतिसूक्ष्म भागांना स्पष्टपणे वेगळे दाखवण्याची क्षमता (Distinguish small adjacent objects)",
      "(D) ट्युबचा आउटपुट मोजणे"
    ],
    correct_answer: "(C) Distinguish small adjacent structures as separate",
    correct_answer_mr: "(C) एकमेकांलगत असलेल्या अतिसूक्ष्म भागांना स्पष्टपणे वेगळे दाखवण्याची क्षमता (Distinguish small adjacent objects)",
    explanation: "Spatial resolution is the capacity of an imaging system to resolve closely spaced small high-contrast detail.",
    explanation_mr: "स्पॅशियल रिझोल्युशन जितके जास्त तितकी एक्स-रे प्रतिमेमधील सूक्ष्म हाडे व कडा स्पष्ट दिसतात.",
    difficulty: "medium" as const,
    topic: "Image Quality",
    category: "Technical: Digital Radiography & Image Processing"
  }
];

export const CHAPTER_27_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 27001 + i;
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
    chapter_name: "Advanced Imaging & Final Mock Set-3"
  };
});
