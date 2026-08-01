import { Question } from '../types';

// Pre-defined high-quality translations for the most common questions
const EXACT_QUESTION_MAP: Record<string, { question: string; options: string[]; explanation: string }> = {
  "Who discovered X-rays?": {
    question: "एक्स-रे (X-rays) की खोज किसने की थी?",
    options: ["(A) मैरी क्यूरी", "(B) विल्हेम कॉनराड रॉटजन", "(C) थॉमस एडिसन", "(D) हेनरी बेकरेल"],
    explanation: "विल्हेम कॉनराड रॉटजन ने 8 नवंबर 1895 को कैथोड किरणों के साथ प्रयोग करते समय एक्स-रे की खोज की थी।"
  },
  "ALARA stands for?": {
    question: "ALARA का पूर्ण रूप (Stands for) क्या है?",
    options: ["(A) एज़ लो एज़ रीज़नेबली अचीवेबल (As Low As Reasonably Achievable)", "(B) ऑटोमैटिक लो एरिया रेडिएशन", "(C) एडवांस्ड रेडिएशन रूल", "(D) इनमें से कोई नहीं"],
    explanation: "ALARA का अर्थ 'As Low As Reasonably Achievable' है, जो विकिरण सुरक्षा (Radiation Protection) का एक मुख्य सुरक्षा सिद्धांत है।"
  },
  "Which factor controls beam quality?": {
    question: "एक्स-रे बीम की गुणवत्ता (Beam Quality) को कौन सा कारक नियंत्रित करता है?",
    options: ["(A) mAs (मात्रा)", "(B) SID (दूरी)", "(C) kVp (वोल्टेज)", "(D) OID (ऑब्जेक्ट-फिल्म दूरी)"],
    explanation: "kVp (peak kilovoltage) एक्स-रे बीम की ऊर्जा, गुणवत्ता और मर्मज्ञ शक्ति (penetrating power) को नियंत्रित करता है।"
  }
};

// Vocabulary mapping from Marathi Devanagari to Hindi Devanagari
const MARATHI_TO_HINDI_GLOSSARY: Array<[RegExp, string]> = [
  [/कोणी लावला\?/g, 'किसने की?'],
  [/शोध कोणी लावला\?/g, 'खोज किसने की?'],
  [/शोध/g, 'खोज'],
  [/म्हणजे काय\?/g, 'क्या है?'],
  [/चा सविस्तर अर्थ काय\?/g, 'का विस्तृत अर्थ क्या है?'],
  [/म्हणजे काय/g, 'का क्या अर्थ है'],
  [/कोणता घटक/g, 'कौन सा कारक'],
  [/कोणते/g, 'कौन सा'],
  [/कोणता/g, 'कौन सा'],
  [/कोणती/g, 'कौन सी'],
  [/खालीलपैकी/g, 'निम्नलिखित में से'],
  [/यापैकी नाही/g, 'इनमें से कोई नहीं'],
  [/वाढवण्यासाठी/g, 'बढ़ाने के लिए'],
  [/कमी करण्यासाठी/g, 'कम करने के लिए'],
  [/कशासाठी वापरतात\?/g, 'किसके लिए उपयोग किया जाता है?'],
  [/वापरले जाते/g, 'उपयोग किया जाता है'],
  [/वापरतात/g, 'उपयोग करते हैं'],
  [/आहे\?/g, 'है?'],
  [/आहे/g, 'है'],
  [/आहेत/g, 'हैं'],
  [/होतो/g, 'होता है'],
  [/नाही/g, 'नहीं'],
  [/करते/g, 'करता है'],
  [/करणे/g, 'करना'],
  [/कमी होते/g, 'कम होता है'],
  [/वाढते/g, 'बढ़ता है'],
  [/पाहिजे/g, 'चाहिए'],
  [/पद्धत/g, 'विधि'],
  [/प्रकार/g, 'प्रकार'],
  [/भाग/g, 'भाग'],
  [/मुख्य/g, 'मुख्य'],
  [/कार्यात्मक/g, 'कार्यात्मक'],
  [/मुलभूत/g, 'मूलभूत'],
  [/कवच/g, 'शील्ड (Shield)'],
  [/किरणोत्सर्ग/g, 'विकिरण (Radiation)'],
  [/सुरक्षा/g, 'सुरक्षा'],
  [/धोका/g, 'खतरा'],
  [/चाचणी/g, 'परीक्षण (Test)'],
  [/परीक्षा/g, 'परीक्षा'],
  [/उत्तर/g, 'उत्तर'],
  [/स्पष्टीकरण/g, 'स्पष्टीकरण'],
  [/बरोबर/g, 'सही'],
  [/चूक/g, 'गलत'],
  [/द्रव/g, 'तरल'],
  [/वायू/g, 'गैस'],
  [/तापमान/g, 'तापमान'],
  [/दाब/g, 'दबाव'],
  [/क्ष-किरणांचा/g, 'एक्स-रे का'],
  [/क्ष-किरण/g, 'एक्स-रे (X-ray)'],
  [/नियम/g, 'नियम'],
  [/तत्व/g, 'सिद्धांत'],
  [/मराठी भाषांतर \(मराठी प्रश्न\):/g, 'हिंदी अनुवाद (हिंदी प्रश्न):']
];

/**
 * Translates a Marathi string to Hindi using our high-quality Devanagari dictionary
 */
export function translateMarathiToHindi(text: string): string {
  let result = text;
  for (const [pattern, replacement] of MARATHI_TO_HINDI_GLOSSARY) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

/**
 * Gets Hindi translation for a question, using exact map or smart Marathi-to-Hindi mapping
 */
export function getHindiQuestion(q: Question): { question: string; options: string[]; explanation: string } {
  // Check exact question map first
  if (EXACT_QUESTION_MAP[q.question]) {
    return EXACT_QUESTION_MAP[q.question];
  }

  // If Marathi is available, use our smart translator
  const questionHi = q.question_mr ? translateMarathiToHindi(q.question_mr) : q.question;
  
  const optionsHi = q.options_mr 
    ? q.options_mr.map(opt => translateMarathiToHindi(opt)) 
    : q.options;

  const explanationHi = q.explanation_mr 
    ? translateMarathiToHindi(q.explanation_mr) 
    : q.explanation;

  return {
    question: questionHi,
    options: optionsHi,
    explanation: explanationHi
  };
}
