import { Question } from '../types';

const rawQuestions = [
  {
    id: 16001,
    question: "Increasing kVp while keeping mAs constant generally results in:",
    question_mr: "mAs स्थिर ठेवून kVp वाढवल्यास प्रतिमेच्या कॉन्ट्रास्टवर (Image Contrast) काय परिणाम होतो?",
    options: [
      "(A) Higher image contrast",
      "(B) Lower image contrast",
      "(C) No change",
      "(D) Complete image loss"
    ],
    options_mr: [
      "(A) प्रतिमेचा कॉन्ट्रास्ट वाढतो",
      "(B) प्रतिमेचा कॉन्ट्रास्ट कमी होतो (Lower image contrast / Long scale contrast)",
      "(C) काहीच फरक पडत नाही",
      "(D) प्रतिमा नष्ट होते"
    ],
    correct_answer: "(B) Lower image contrast",
    correct_answer_mr: "(B) प्रतिमेचा कॉन्ट्रास्ट कमी होतो (Lower image contrast / Long scale contrast)",
    explanation: "Higher kVp increases Compton scatter and penetrating power, creating more shades of gray and lowering overall subject contrast.",
    explanation_mr: "जास्त kVp मुळे कॉम्प्टन स्कॅटर वाढते, ज्यामुळे राखाडी छटा (Grays) वाढतात व कॉन्ट्रास्ट कमी होतो.",
    difficulty: "medium" as const,
    topic: "Radiographic Contrast",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 16002,
    question: "The main purpose of beam collimation is:",
    question_mr: "एक्स-रे बीमच्या कॉलिमेशनचा (Beam Collimation) मुख्य उद्देश काय आहे?",
    options: [
      "(A) Increase magnification",
      "(B) Reduce patient dose and scatter radiation",
      "(C) Increase focal spot size",
      "(D) Reduce SID"
    ],
    options_mr: [
      "(A) प्रतिमा मोठी करणे",
      "(B) रुग्णाचा रेडिएशन डोस आणि स्कॅटर रेडिएशन कमी करणे",
      "(C) फोकल स्पॉट वाढवणे",
      "(D) एसआयडी कमी करणे"
    ],
    correct_answer: "(B) Reduce patient dose and scatter radiation",
    correct_answer_mr: "(B) रुग्णाचा रेडिएशन डोस आणि स्कॅटर रेडिएशन कमी करणे",
    explanation: "Collimation restricts the irradiated tissue area, which directly reduces patient dose and decreases scatter radiation reaching the image receptor.",
    explanation_mr: "कॉलिमेशनमुळे फक्त आवश्यक भागावरच किरण पडतात, ज्यामुळे अनावश्यक डोस व स्कॅटर किरण कमी होतात.",
    difficulty: "medium" as const,
    topic: "Collimation",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 16003,
    question: "Added aluminum filtration primarily removes:",
    question_mr: "एक्स-रे ट्युबमध्ये जोडलेला ॲल्युमिनियम फिल्टर प्रामुख्याने कोणते किरण शोषून घेतो?",
    options: [
      "(A) High-energy photons",
      "(B) Low-energy X-ray photons",
      "(C) Visible light",
      "(D) Electrons"
    ],
    options_mr: [
      "(A) उच्च ऊर्जेचे किरण",
      "(B) कमी ऊर्जेचे (मऊ/Soft) एक्स-रे फोटॉन्स (Low-energy X-ray photons)",
      "(C) दृश्यमान प्रकाश",
      "(D) इलेक्ट्रॉन"
    ],
    correct_answer: "(B) Low-energy X-ray photons",
    correct_answer_mr: "(B) कमी ऊर्जेचे (मऊ/Soft) एक्स-रे फोटॉन्स (Low-energy X-ray photons)",
    explanation: "Filtration absorbs low-energy, non-penetrating X-ray photons that would otherwise contribute to patient skin dose without contributing to image formation.",
    explanation_mr: "ॲल्युमिनियम फिल्टर मऊ व कमी ऊर्जेचे किरण अडवतो ज्यामुळे रुग्णाच्या त्वचेचे रक्षण होते (Hardening the beam).",
    difficulty: "medium" as const,
    topic: "Filtration",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 16004,
    question: "Magnification can be reduced by:",
    question_mr: "एक्स-रे प्रतिमेतील मॅग्निफिकेशन (Magnification / आकार मोठा होणे) कसे कमी करता येते?",
    options: [
      "(A) Increasing OID",
      "(B) Decreasing SID",
      "(C) Increasing SID and decreasing OID",
      "(D) Increasing focal spot size"
    ],
    options_mr: [
      "(A) OID वाढवून",
      "(B) SID कमी करून",
      "(C) SID वाढवून आणि OID कमी करून (Increasing SID and decreasing OID)",
      "(D) फोकल स्पॉट वाढवून"
    ],
    correct_answer: "(C) Increasing SID and decreasing OID",
    correct_answer_mr: "(C) SID वाढवून आणि OID कमी करून (Increasing SID and decreasing OID)",
    explanation: "Magnification is minimized by using a maximum practical SID (Source-to-Image Distance) and minimum OID (Object-to-Image Distance).",
    explanation_mr: "अवयव कॅसेटच्या जास्तीत जास्त जवळ ठेवल्यास (कमी OID) व ट्युब लांब ठेवल्यास (जास्त SID) मॅग्निफिकेशन कमी होते.",
    difficulty: "medium" as const,
    topic: "Magnification",
    category: "Technical: Radiographic Procedures & Positioning"
  },
  {
    id: 16005,
    question: "The most effective device to reduce scatter reaching the detector is:",
    question_mr: "इमेज डिटेक्टरपर्यंत पोहोचणारे स्कॅटर रेडिएशन (Scatter Radiation) कमी करण्यासाठी सर्वात प्रभावी साधन कोणते?",
    options: [
      "(A) Compensating filter",
      "(B) Anti-scatter grid",
      "(C) Compression band",
      "(D) Beam limiter"
    ],
    options_mr: [
      "(A) कॉम्पेन्सेटिंग फिल्टर",
      "(B) अँटी-स्कॅटर ग्रिड (Anti-scatter Grid)",
      "(C) कॉम्प्रेसन बँड",
      "(D) बीम लिमीटर"
    ],
    correct_answer: "(B) Anti-scatter grid",
    correct_answer_mr: "(B) अँटी-स्कॅटर ग्रिड (Anti-scatter Grid)",
    explanation: "An anti-scatter grid placed between the patient and detector absorbs scattered radiation while allowing primary unscattered photons to pass through.",
    explanation_mr: "अँटी-स्कॅटर ग्रिड रुग्णाच्या पाठीमागे लावली जाते, जी विखुरलेले (स्कॅटर) किरण शोषून घेते आणि इमेजचा कॉन्ट्रास्ट सुधारते.",
    difficulty: "medium" as const,
    topic: "Scatter Radiation",
    category: "Technical: Radiophysics & Machine Principles"
  }
];

export const CHAPTER_16_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 16001 + i;
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
    chapter_name: "Contrast, Collimation, Filtration & Scatter"
  };
});
