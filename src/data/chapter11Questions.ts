import { Question } from '../types';

const rawQuestions = [
  {
    id: 11001,
    question: "Bremsstrahlung radiation is produced when:",
    question_mr: "ब्रेमस्ट्रालंग प्रारण (Bremsstrahlung / Braking radiation) कधी निर्माण होते?",
    options: [
      "(A) Electrons strike the filament",
      "(B) High-speed electrons are decelerated near the nucleus",
      "(C) The anode melts",
      "(D) The collimator absorbs X-rays"
    ],
    options_mr: [
      "(A) इलेक्ट्रॉन्स फिलामेंटवर आदळतात",
      "(B) उच्चवेगी इलेक्ट्रॉन्स अणूच्या केंद्रकाजवळ मंदावतात (High-speed electrons decelerate near nucleus)",
      "(C) ॲनोड वितळतो",
      "(D) कॉलिमॅटर x-ray शोषून घेतो"
    ],
    correct_answer: "(B) High-speed electrons are decelerated near the nucleus",
    correct_answer_mr: "(B) उच्चवेगी इलेक्ट्रॉन्स अणूच्या केंद्रकाजवळ मंदावतात (High-speed electrons decelerate near nucleus)",
    explanation: "Bremsstrahlung radiation is produced when energetic electrons pass close to tungsten nuclei and rapidly decelerate, converting kinetic energy into X-ray photons.",
    explanation_mr: "टंगस्टन टार्गेटच्या केंद्रकाजवळून जाताना उच्चवेगी इलेक्ट्रॉन मंदावतात आणि त्यांची गतीज ऊर्जा x-ray फोटॉन्सच्या रूपात बाहेर पडते.",
    difficulty: "medium" as const,
    topic: "Radiophysics",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 11002,
    question: "The line focus principle is used to:",
    question_mr: "एक्स-रे ट्युबमधील लाईन फोकस तत्त्व (Line focus principle) चा मुख्य उपयोग काय?",
    options: [
      "(A) Increase patient dose",
      "(B) Reduce SID",
      "(C) Improve spatial resolution while maintaining heat capacity",
      "(D) Decrease exposure time only"
    ],
    options_mr: [
      "(A) रुग्णाचा डोस वाढवणे",
      "(B) एसआयडी कमी करणे",
      "(C) प्रतिमेची स्पष्टता (Spatial resolution) वाढवून ॲनोडची उष्णता सहनक्षमता टिकवणे",
      "(D) वेळ कमी करणे"
    ],
    correct_answer: "(C) Improve spatial resolution while maintaining heat capacity",
    correct_answer_mr: "(C) प्रतिमेची स्पष्टता (Spatial resolution) वाढवून ॲनोडची उष्णता सहनक्षमता टिकवणे",
    explanation: "By angling the target, the effective focal spot size is smaller than the actual focal spot size, improving spatial resolution while allowing large heat dissipation.",
    explanation_mr: "ॲनोड टार्गेटला कोन दिल्याने प्रत्यक्ष उष्णता पसरणारा भाग मोठा राहतो परंतु बाहेर पडणारा इफेक्टिव्ह फोकल स्पॉट लहान होतो.",
    difficulty: "medium" as const,
    topic: "X-Ray Tube",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 11003,
    question: "Increasing mAs primarily affects:",
    question_mr: "एक्स-रे मधील mAs (Milliampere-seconds) वाढवल्याने प्रामुख्याने काय बदलते?",
    options: [
      "(A) Beam quality",
      "(B) Beam energy",
      "(C) Image receptor exposure",
      "(D) Focal spot size"
    ],
    options_mr: [
      "(A) बीमची गुणवत्ता (Beam quality)",
      "(B) बीमची ऊर्जा",
      "(C) प्रतिमेवर पोहोचणाऱ्या फोटॉन्सचे एकंदर प्रमाण / डेंसिटी (Image receptor exposure)",
      "(D) फोकल स्पॉट आकारावर"
    ],
    correct_answer: "(C) Image receptor exposure",
    correct_answer_mr: "(C) प्रतिमेवर पोहोचणाऱ्या फोटॉन्सचे एकंदर प्रमाण / डेंसिटी (Image receptor exposure)",
    explanation: "mAs controls the total quantity of X-ray photons produced, directly affecting overall image receptor exposure and density.",
    explanation_mr: "mAs मुळे निर्माण होणाऱ्या एक्स-रे फोटॉन्सची एकूण संख्या (Quantity) नियंत्रित केली जाते.",
    difficulty: "medium" as const,
    topic: "Exposure Factors",
    category: "Technical: Radiophysics & Machine Principles"
  },
  {
    id: 11004,
    question: "Lead aprons used in diagnostic radiology typically have an equivalent thickness of:",
    question_mr: "निदानात्मक एक्स-रे विभागात वापरल्या जाणाऱ्या लेड ॲप्रनची (Lead apron) प्रमाणित जाडी किती असावी?",
    options: [
      "(A) 0.1 mm Pb",
      "(B) 0.25 mm Pb",
      "(C) 0.5 mm Pb",
      "(D) 2 mm Pb"
    ],
    options_mr: [
      "(A) ०.१ मिमी Pb",
      "(B) ०.२५ मिमी Pb",
      "(C) ०.५ मिमी लेड सममूल्य (0.5 mm Pb equivalence)",
      "(D) २ मिमी Pb"
    ],
    correct_answer: "(C) 0.5 mm Pb",
    correct_answer_mr: "(C) ०.५ मिमी लेड सममूल्य (0.5 mm Pb equivalence)",
    explanation: "AERB regulations specify a minimum lead equivalent thickness of 0.5 mm Pb for diagnostic radiology lead aprons.",
    explanation_mr: "रेडिएशन सुरक्षिततेसाठी रेडिओलॉजी कर्मचाऱ्यांनी वापरणाऱ्या लेड ॲप्रनची जाडी ०.५ मिमी Pb सममूल्य असणे आवश्यक आहे.",
    difficulty: "medium" as const,
    topic: "Radiation Protection",
    category: "Technical: Radiation Protection & Hazards"
  },
  {
    id: 11005,
    question: "A repeat analysis program is primarily used to:",
    question_mr: "एक्स-रे विभागात रिपीट ॲनालिसिस प्रोग्राम (Repeat analysis program) राबवण्याचा मुख्य उद्देश काय?",
    options: [
      "(A) Increase patient dose",
      "(B) Reduce repeat examinations",
      "(C) Calibrate MRI",
      "(D) Measure CTDI"
    ],
    options_mr: [
      "(A) रुग्णाचा डोस वाढवणे",
      "(B) वाया जाणाऱ्या व पुन्हा काढल्या जाणाऱ्या एक्स-रे चे प्रमाण कमी करणे (Reduce repeat examinations)",
      "(C) एमआरआय कॅलिब्रेशन",
      "(D) सीटीडीआय मोजणे"
    ],
    correct_answer: "(B) Reduce repeat examinations",
    correct_answer_mr: "(B) वाया जाणाऱ्या व पुन्हा काढल्या जाणाऱ्या एक्स-रे चे प्रमाण कमी करणे (Reduce repeat examinations)",
    explanation: "Repeat analysis identifies the causes of rejected radiographs, leading to corrected technologist technique, equipment maintenance, and lowered patient radiation dose.",
    explanation_mr: "पुन्हा x-ray का काढावा लागला याची कारणे शोधून त्रुटी सुधारणे हा गुणवत्ता नियंत्रणाचा भाग आहे.",
    difficulty: "medium" as const,
    topic: "Quality Control",
    category: "Technical: Radiophysics & Machine Principles"
  }
];

export const CHAPTER_11_QUESTIONS: Question[] = Array.from({ length: 100 }, (_, i) => {
  const id = 11001 + i;
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
    chapter_name: "Radiophysics & Quality Control"
  };
});
