import { Question } from '../types';

const rawQuestions = [
  {
    id: 5001,
    question: "Which projection best demonstrates the occipital bone and foramen magnum?",
    question_mr: "कपाल (Skull) एक्स-रे मध्ये ऑक्सिपिटल हाड (Occipital bone) आणि फोरॅमेन मॅग्नम स्पष्ट दिसण्यासाठी कोणती व्ह्यू वापरली जाते?",
    options: [
      "(A) Waters",
      "(B) Towne AP Axial",
      "(C) Caldwell",
      "(D) SMV"
    ],
    options_mr: [
      "(A) वॉटर्स व्ह्यू (Waters)",
      "(B) टाउन्स एपी एक्झिअल व्ह्यू (Towne AP Axial)",
      "(C) कॉल्डवेल (Caldwell)",
      "(D) एसएमव्ही (SMV)"
    ],
    correct_answer: "(B) Towne AP Axial",
    correct_answer_mr: "(B) टाउन्स एपी एक्झिअल व्ह्यू (Towne AP Axial)",
    explanation: "Towne projection (30° caudad to OML) projects the petrous pyramids laterally and clearly demonstrates the occipital bone and foramen magnum.",
    explanation_mr: "टाउन्स व्ह्यू (Towne projection) मध्ये ३०° अँगल दिल्याने ऑक्सिपिटल हाड आणि फोरॅमेन मॅग्नम अतिशय स्पष्ट दिसतात.",
    difficulty: "medium" as const,
    topic: "Skull",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 5002,
    question: "The intervertebral foramina of the lumbar spine are best demonstrated in:",
    question_mr: "कमरेच्या मणक्याचे (Lumbar spine) इंटरव्हर्टेब्रल फोरॅमिना (Intervertebral foramina) कोणत्या व्ह्यूमध्ये सर्वाधिक स्पष्ट दिसतात?",
    options: [
      "(A) AP projection",
      "(B) Lateral projection",
      "(C) 45° Oblique projection",
      "(D) PA projection"
    ],
    options_mr: [
      "(A) एपी (AP) व्ह्यू",
      "(B) लॅटरल (Lateral) व्ह्यू",
      "(C) ४५° ऑब्लिक (Oblique) व्ह्यू",
      "(D) पीए (PA) व्ह्यू"
    ],
    correct_answer: "(B) Lateral projection",
    correct_answer_mr: "(B) लॅटरल (Lateral) व्ह्यू",
    explanation: "The intervertebral foramina of the lumbar spine are at 90° to the MSP and are best demonstrated in a true lateral projection.",
    explanation_mr: "लंबर मणक्याचे इंटरव्हर्टेब्रल फोरॅमिना हे ९०° कोनात असल्याने लॅटरल व्ह्यूमध्ये अगदी स्पष्ट दिसतात.",
    difficulty: "medium" as const,
    topic: "Spine",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 5003,
    question: "Which projection is commonly used to evaluate acetabular fractures?",
    question_mr: "कुबड्याच्या हाडातील ॲसिटॅब्युलम फ्रॅक्चर (Acetabular fractures) तपासण्यासाठी कोणती विशेष व्ह्यू घेतली जाते?",
    options: [
      "(A) Frog-leg",
      "(B) AP pelvis",
      "(C) Judet projection",
      "(D) Taylor method"
    ],
    options_mr: [
      "(A) फ्रॉग-लेग",
      "(B) एपी पेल्व्हिस",
      "(C) जुडेट प्रोजेक्शन (Judet projection / Oblique pelvis)",
      "(D) टेलर मेथड"
    ],
    correct_answer: "(C) Judet projection",
    correct_answer_mr: "(C) जुडेट प्रोजेक्शन (Judet projection / Oblique pelvis)",
    explanation: "Judet method (45° internal and external oblique projections of the pelvis) is used to evaluate anterior and posterior acetabular rims and columns.",
    explanation_mr: "ॲसिटॅब्युलमच्या पुढील व मागील बाजूंचे फ्रॅक्चर तपासण्यासाठी ४५° कोनात जुडेट पद्धत (Judet method) वापरली जाते.",
    difficulty: "medium" as const,
    topic: "Pelvis",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 5004,
    question: "The PA chest radiograph is usually taken during:",
    question_mr: "छातीचा PA x-ray रुग्णाच्या कोणत्या श्वासोच्छ्वासाच्या स्थितीत काढला जातो?",
    options: [
      "(A) Expiration",
      "(B) Quiet breathing",
      "(C) Second full inspiration",
      "(D) First inspiration"
    ],
    options_mr: [
      "(A) श्वास पूर्ण बाहेर सोडल्यावर",
      "(B) सामान्य श्वासोच्छ्वास सुरू असताना",
      "(C) दुसऱ्यांदा मोठा पूर्ण श्वास रोखून धरल्यावर (Second full inspiration)",
      "(D) पहिल्या श्वासावर"
    ],
    correct_answer: "(C) Second full inspiration",
    correct_answer_mr: "(C) दुसऱ्यांदा मोठा पूर्ण श्वास रोखून धरल्यावर (Second full inspiration)",
    explanation: "Taking the exposure on second full inspiration ensures maximum lung expansion and consistent diaphragm lowering.",
    explanation_mr: "दुसऱ्यांदा मोठा श्वास घेऊन छातीत रोखल्याने फुफ्फुसे पूर्ण फुलतात व डायफ्राम जास्तीत जास्त खाली जातो.",
    difficulty: "medium" as const,
    topic: "Chest",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 5005,
    question: "Free intraperitoneal air is best demonstrated on:",
    question_mr: "पोटाच्या पोकळीत साचलेली मोकळी हवा (Free intraperitoneal air / Pneumoperitoneum) शोधण्यासाठी कोणता x-ray सर्वात उपयुक्त ठरतो?",
    options: [
      "(A) Supine abdomen",
      "(B) AP pelvis",
      "(C) Erect abdomen radiograph",
      "(D) PA chest expiration"
    ],
    options_mr: [
      "(A) झोपवून काढलेला पोटाचा x-ray (Supine)",
      "(B) पेल्व्हिस x-ray",
      "(C) उभे राहून काढलेला पोटाचा x-ray (Erect Abdomen radiograph)",
      "(D) पीए चेस्ट एक्सप्रिेशन"
    ],
    correct_answer: "(C) Erect abdomen radiograph",
    correct_answer_mr: "(C) उभे राहून काढलेला पोटाचा x-ray (Erect Abdomen radiograph)",
    explanation: "Free air rises to the highest point under the diaphragm in an erect position, making Erect Abdomen or Chest PA ideal for detecting perforation.",
    explanation_mr: "रुग्ण उभा असताना पोटातील मोकळी हवा डायफ्रामच्या खाली जमा होते, ज्यामुळे आतड्याचे छिद्र (Perforation) ओळखणे सोपे होते.",
    difficulty: "medium" as const,
    topic: "Abdomen",
    category: "Technical: Radiographic Procedures & Positioning"
  }
];

export const CHAPTER_5_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 5001 + i;
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
    chapter_name: "Positioning - Skull, Spine, Pelvis, Chest & Abdomen"
  };
});
