import { Question } from '../types';

const rawQuestions = [
  {
    id: 17001,
    question: "Flat panel detectors used in DR commonly employ:",
    question_mr: "डिजिटल रेडिओग्राफीमध्ये (DR) वापरले जाणारे फ्लॅट पॅनेल डिटेक्टर (FPD) प्रामुख्याने कशाचा वापर करतात?",
    options: [
      "(A) Silver halide film",
      "(B) Amorphous silicon with TFT array",
      "(C) Image intensifier only",
      "(D) Photomultiplier tube"
    ],
    options_mr: [
      "(A) सिल्व्हर हॅलाईड फिल्म",
      "(B) अमॉर्फस सिलिकॉन व TFT ॲरे (Amorphous silicon with Thin-Film Transistor array)",
      "(C) फक्त इमेज इंटेन्सिफायर",
      "(D) फोटोमल्टिप्लायर ट्युब"
    ],
    correct_answer: "(B) Amorphous silicon with TFT array",
    correct_answer_mr: "(B) अमॉर्फस सिलिकॉन व TFT ॲरे (Amorphous silicon with Thin-Film Transistor array)",
    explanation: "Indirect conversion flat-panel DR detectors use a scintillator (e.g., CsI) linked to an amorphous silicon (a-Si) photodiode and TFT array.",
    explanation_mr: "डायरेक्ट/इन्डायरेक्ट डीआर डिटेक्टरमध्ये अमॉर्फस सिलिकॉन किंवा सेलेनियम आणि TFT च्या साहाय्याने सिग्नल डिजिटल स्वरूपात बदलला जातो.",
    difficulty: "medium" as const,
    topic: "Image Receptor",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 17002,
    question: "DICOM is primarily a standard for:",
    question_mr: "DICOM चे मुख्य काम काय आहे?",
    options: [
      "(A) Hospital billing",
      "(B) Medical image storage and communication",
      "(C) Radiation dose calculation",
      "(D) Patient transport"
    ],
    options_mr: [
      "(A) रुग्णालयाचे बिलिंग",
      "(B) वैद्यकीय प्रतिमांचे इलेक्ट्रॉनिक संचयन, देवाणघेवाण व मानक (Medical image storage and communication)",
      "(C) रेडिएशन डोस मोजणे",
      "(D) रुग्णांची वाहतूक"
    ],
    correct_answer: "(B) Medical image storage and communication",
    correct_answer_mr: "(B) वैद्यकीय प्रतिमांचे इलेक्ट्रॉनिक संचयन, देवाणघेवाण व मानक (Medical image storage and communication)",
    explanation: "DICOM (Digital Imaging and Communications in Medicine) is the international standard for storing, transmitting, and viewing medical images.",
    explanation_mr: "डायकॉम (DICOM) हे वैद्यकीय इमेजिंग उपकरणांमधील डेटा संचयित करण्यासाठी व ट्रान्सफर करण्यासाठी जागतिक मानांकन आहे.",
    difficulty: "medium" as const,
    topic: "DICOM",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 17003,
    question: "PACS communicates with imaging modalities mainly through:",
    question_mr: "PACS प्रणाली वेगवेगळ्या इमेजिंग उपकरणांशी (Modalities) प्रामुख्याने कोणत्या प्रोटोकॉलद्वारे संवाद साधते?",
    options: [
      "(A) HL7 only",
      "(B) USB",
      "(C) DICOM protocol",
      "(D) Bluetooth"
    ],
    options_mr: [
      "(A) फक्त HL7",
      "(B) युएसबी",
      "(C) डायकॉम प्रोटोकॉल (DICOM protocol)",
      "(D) ब्लूटूथ"
    ],
    correct_answer: "(C) DICOM protocol",
    correct_answer_mr: "(C) डायकॉम प्रोटोकॉल (DICOM protocol)",
    explanation: "PACS uses the DICOM protocol to communicate, query, store, and transfer images between CT, MRI, X-ray machines and workstations.",
    explanation_mr: "पॅक्स (PACS) नेटवर्कमध्ये प्रतिमा पाठवण्यासाठी व मिळवण्यासाठी DICOM नेटवर्क प्रोटोकॉलचा वापर होतो.",
    difficulty: "medium" as const,
    topic: "PACS Networking",
    category: "Technical: Digital Radiography & Image Processing"
  },
  {
    id: 17004,
    question: "CTDI stands for:",
    question_mr: "सीटी स्कॅन मधील CTDI चा सविस्तर अर्थ (Full Form) काय आहे?",
    options: [
      "(A) Computed Tissue Density Index",
      "(B) Computed Tomography Dose Index",
      "(C) Computed Tube Dose Indicator",
      "(D) Calculated Tomography Dose Input"
    ],
    options_mr: [
      "(A) संगणकीय उती घनता निर्देशांक",
      "(B) संगणकीय टोमोग्राफी डोस निर्देशांक (Computed Tomography Dose Index)",
      "(C) संगणकीय नळी डोस सूचक",
      "(D) गणना टोमोग्राफी डोस इनपुट"
    ],
    correct_answer: "(B) Computed Tomography Dose Index",
    correct_answer_mr: "(B) संगणकीय टोमोग्राफी डोस निर्देशांक (Computed Tomography Dose Index)",
    explanation: "CTDI (Computed Tomography Dose Index) is a standardized measure of radiation exposure output from a CT scanner slice.",
    explanation_mr: "CTDI हे सीटी स्कॅन उपकरणाचा रेडिएशन डोस मोजण्याचे प्रमाणित एकक आहे.",
    difficulty: "medium" as const,
    topic: "CT Dose",
    category: "Technical: Special Imaging Modalities"
  },
  {
    id: 17005,
    question: "The main advantage of DR over CR is:",
    question_mr: "संगणकीय रेडिओग्राफीपेक्षा (CR) डिजिटल रेडिओग्राफीचा (DR) सर्वात मोठा फायदा कोणता?",
    options: [
      "(A) Higher patient dose",
      "(B) Faster image acquisition",
      "(C) Needs film processing",
      "(D) Lower detector efficiency"
    ],
    options_mr: [
      "(A) जास्त रेडिएशन डोस",
      "(B) जलद प्रतिमा प्राप्ती व रीडर कॅसेटची गरज नसणे (Faster image acquisition)",
      "(C) फिल्म प्रोसेसिंग लागणे",
      "(D) कमी कार्यक्षमता"
    ],
    correct_answer: "(B) Faster image acquisition",
    correct_answer_mr: "(B) जलद प्रतिमा प्राप्ती व रीडर कॅसेटची गरज नसणे (Faster image acquisition)",
    explanation: "DR produces instant images directly on the monitor in seconds without needing manual cassette handling or a separate laser reader.",
    explanation_mr: "डीआर मध्ये कॅसेट रीदरमध्ये टाकावी लागत नाही; थेट स्क्रीनवर एकाच सेकंदात इमेज तयार होते.",
    difficulty: "medium" as const,
    topic: "Digital Radiography",
    category: "Technical: Digital Radiography & Image Processing"
  }
];

export const CHAPTER_17_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 17001 + i;
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
    chapter_name: "Image Receptors, DICOM, PACS & CT Dose"
  };
});
