import { Question } from '../types';

const rawQuestions = [
  {
    id: 4001,
    question: "Which CT generation introduced continuous rotation using slip-ring technology?",
    question_mr: "कोणत्या सीटी स्कॅन जनरेशनने स्लिप-रिंग (Slip-ring) तंत्रज्ञानाचा वापर करून सतत रोटेशन (Continuous Rotation) सुरू केले?",
    options: [
      "(A) First-generation CT",
      "(B) Second-generation CT",
      "(C) Third-generation slip-ring CT",
      "(D) Fourth-generation translate-rotate CT"
    ],
    options_mr: [
      "(A) पहिली जनरेशन सीटी",
      "(B) दुसरी जनरेशन सीटी",
      "(C) तिसरी जनरेशन स्लिप-रिंग सीटी (Third-generation slip-ring CT)",
      "(D) चौथी जनरेशन"
    ],
    correct_answer: "(C) Third-generation slip-ring CT",
    correct_answer_mr: "(C) तिसरी जनरेशन स्लिप-रिंग सीटी (Third-generation slip-ring CT)",
    explanation: "Slip-ring technology eliminated the need for cables, allowing continuous 360-degree rotation and enabling helical/spiral CT scanning in 3rd generation CT scanners.",
    explanation_mr: "स्लिप-रिंग तंत्रज्ञानामुळे केबल्सचा अडथळा दूर होऊन निरंतर ३६०° रोटेशन आणि स्पायरल/हेलिकल सीटी स्कॅनिंग शक्य झाले.",
    difficulty: "medium" as const,
    topic: "CT Scan",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 4002,
    question: "The Larmor frequency depends primarily on:",
    question_mr: "एमआरआयमधील लार्मर फ्रिक्वेन्सी (Larmor frequency) प्रामुख्याने कशावर अवलंबून असते?",
    options: [
      "(A) Patient age",
      "(B) Magnetic field strength",
      "(C) Slice thickness",
      "(D) Matrix size"
    ],
    options_mr: [
      "(A) रुग्णाचे वय",
      "(B) चुंबकीय क्षेत्राची तीव्रता (Magnetic field strength - B0)",
      "(C) स्लाईसची जाडी",
      "(D) मॅट्रिक्स साईझ"
    ],
    correct_answer: "(B) Magnetic field strength",
    correct_answer_mr: "(B) चुंबकीय क्षेत्राची तीव्रता (Magnetic field strength - B0)",
    explanation: "The Larmor equation (f = γ × B0) shows that Larmor frequency is directly proportional to the magnetic field strength (B0).",
    explanation_mr: "लार्मर समीकरणांनुसार (f = γ × B0) लार्मर फ्रिक्वेन्सी ही थेट चुंबकीय क्षेत्राच्या (Magnetic field strength) समानुपाती असते.",
    difficulty: "medium" as const,
    topic: "MRI",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 4003,
    question: "The largest carpal bone is:",
    question_mr: "मनगटातील कार्पल (Carpal) हाडांपैकी सर्वात मोठे हाड कोणते आहे?",
    options: ["(A) Scaphoid", "(B) Lunate", "(C) Capitate", "(D) Hamate"],
    options_mr: ["(A) स्कॅफॉईड", "(B) ल्युनेट", "(C) कॅपिटेट (Capitate)", "(D) हॅमेट"],
    correct_answer: "(C) Capitate",
    correct_answer_mr: "(C) कॅपिटेट (Capitate)",
    explanation: "Capitate is the largest carpal bone in the human wrist, located in the center of the distal row.",
    explanation_mr: "कॅपिटेट (Capitate) हे मानवी मनगटातील ८ कार्पल हाडांपैकी आकाराने सर्वात मोठे हाड आहे.",
    difficulty: "medium" as const,
    topic: "Radiographic Anatomy",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 4004,
    question: "For a PA chest radiograph, the patient should position the shoulders:",
    question_mr: "छातीच्या PA x-ray साठी, रुग्णाचे खांदे कोणत्या स्थितीत फिरवले पाहिजेत?",
    options: [
      "(A) Rolled backward",
      "(B) Relaxed",
      "(C) Rolled forward",
      "(D) Raised upward"
    ],
    options_mr: [
      "(A) मागे झुकवलेले",
      "(B) सैल सोडलेले",
      "(C) पुढे व खाली फिरवलेले (Rolled forward & down)",
      "(D) वर उचललेले"
    ],
    correct_answer: "(C) Rolled forward",
    correct_answer_mr: "(C) पुढे व खाली फिरवलेले (Rolled forward & down)",
    explanation: "Rolling shoulders forward and touching the cassette removes the scapulae from superimposition over the lung fields.",
    explanation_mr: "खांदे पुढे फिरवून कॅसेटला टेकवल्यामुळे पाठीचे स्कॅप्युला (Scapulae) फुफ्फुसांच्या क्षेत्राच्या बाहेर सरकतात.",
    difficulty: "medium" as const,
    topic: "Positioning",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 4005,
    question: "The most radiosensitive cells are:",
    question_mr: "खालीलपैकी कोणत्या पेशी रेडिएशनला सर्वात जास्त संवेदनशील (Radiosensitive) असतात?",
    options: [
      "(A) Muscle cells",
      "(B) Nerve cells",
      "(C) Rapidly dividing undifferentiated cells",
      "(D) Fat cells"
    ],
    options_mr: [
      "(A) स्नायू पेशी",
      "(B) चेता पेशी",
      "(C) वेगाने विभाजित होणाऱ्या अपरिपक्व पेशी (Rapidly dividing undifferentiated cells)",
      "(D) मेद पेशी"
    ],
    correct_answer: "(C) Rapidly dividing undifferentiated cells",
    correct_answer_mr: "(C) वेगाने विभाजित होणाऱ्या अपरिपक्व पेशी (Rapidly dividing undifferentiated cells)",
    explanation: "According to the Law of Bergonie and Tribondeau, stem cells and rapidly dividing, unspecialized cells are most sensitive to radiation.",
    explanation_mr: "बर्गोनी-ट्रिबोंड्यू नियमानुसार, ज्या पेशी जितक्या अपरिपक्व व वेगाने विभाजित होतात त्या रेडिएशनला तितक्याच जास्त संवेदनशील असतात.",
    difficulty: "medium" as const,
    topic: "Radiation Biology",
    category: "Technical: Radiation Protection & Hazards"
  }
];

export const CHAPTER_4_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 4001 + i;
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
    chapter_name: "CT, MRI, Anatomy & Radiation Biology"
  };
});
