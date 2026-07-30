import { Question, CategoryInfo } from '../types';
import { CHAPTER_1_QUESTIONS } from './chapter1Questions';
import { CHAPTER_2_QUESTIONS } from './chapter2Questions';
import { CHAPTER_3_QUESTIONS } from './chapter3Questions';
import { CHAPTER_4_QUESTIONS } from './chapter4Questions';
import { CHAPTER_5_QUESTIONS } from './chapter5Questions';
import { CHAPTER_6_QUESTIONS } from './chapter6Questions';
import { CHAPTER_7_QUESTIONS } from './chapter7Questions';
import { CHAPTER_8_QUESTIONS } from './chapter8Questions';
import { CHAPTER_9_QUESTIONS } from './chapter9Questions';
import { CHAPTER_10_QUESTIONS } from './chapter10Questions';
import { CHAPTER_11_QUESTIONS } from './chapter11Questions';
import { CHAPTER_12_QUESTIONS } from './chapter12Questions';
import { CHAPTER_13_QUESTIONS } from './chapter13Questions';
import { CHAPTER_14_QUESTIONS } from './chapter14Questions';
import { CHAPTER_15_QUESTIONS } from './chapter15Questions';
import { CHAPTER_16_QUESTIONS } from './chapter16Questions';
import { CHAPTER_17_QUESTIONS } from './chapter17Questions';
import { CHAPTER_18_QUESTIONS } from './chapter18Questions';
import { CHAPTER_19_QUESTIONS } from './chapter19Questions';
import { CHAPTER_20_QUESTIONS } from './chapter20Questions';
import { CHAPTER_21_QUESTIONS } from './chapter21Questions';
import { CHAPTER_22_QUESTIONS } from './chapter22Questions';
import { CHAPTER_23_QUESTIONS } from './chapter23Questions';
import { CHAPTER_24_QUESTIONS } from './chapter24Questions';
import { CHAPTER_25_QUESTIONS } from './chapter25Questions';
import { CHAPTER_26_QUESTIONS } from './chapter26Questions';
import { CHAPTER_27_QUESTIONS } from './chapter27Questions';
import { CHAPTER_28_QUESTIONS } from './chapter28Questions';
import { CHAPTER_29_QUESTIONS } from './chapter29Questions';
import { CHAPTER_30_QUESTIONS } from './chapter30Questions';

export const OFFICIAL_EXAM_INFO = {
  department: "सार्वजनिक आरोग्य विभाग, महाराष्ट्र शासन (Public Health Department, Govt. of Maharashtra)",
  cadre: "गट 'क' पद भरती - क्ष-किरण वैज्ञानिक अधिकारी (X-Ray Scientific Officer)",
  postType: "गट 'क' ऑनलाईन परीक्षा (Group C Online Exam)",
  totalMarks: 200,
  totalQuestions: 100,
  durationMinutes: 120,
  marksPerQuestion: 2,
  technicalWeightageMarks: 160,
  technicalWeightagePercent: 80,
  nonTechnicalWeightageMarks: 40,
  nonTechnicalWeightagePercent: 20,
  rules: [
    "गट 'क' पदांकरिता १०० प्रश्न असलेली २०० गुणांची ऑनलाईन परीक्षा घेण्यात येईल.",
    "सदर परीक्षेच्या प्रश्नपत्रिका एकूण १०० प्रश्नांची वस्तुनिष्ठ बहुपर्यायी (MCQ) स्वरूपाच्या असतील. प्रत्येक प्रश्नास ०२ गुण ठेवण्यात येतील.",
    "विभागाशी निगडीत तांत्रिक / व्यावसायिक संवर्गातील पदांसाठी ८० टक्के गुण (८० प्रश्न = १६० गुण) हे तांत्रिक / शैक्षणिक अर्हतेशी संबंधित असतील आणि उर्वरित २० टक्के गुण (२० प्रश्न = ४० गुण) हे मराठी, इंग्रजी, सामान्य ज्ञान व गणित यांच्याशी निगडीत असतील.",
    "ज्या पदांसाठी शैक्षणिक अर्हता किमान पदवीधर आहे त्या पदांसाठी मराठी भाषा विषयक प्रश्न वगळता प्रश्नपत्रिकेतील सर्व प्रश्न इंग्रजी माध्यमामध्ये असतील.",
    "वाहनचालक या पदाकरिता मराठी, इंग्रजी, सामान्य ज्ञान व बौद्धिक चाचणी या विषयांवरील एकूण २० प्रश्नांकरिता ४० गुणांची व विषयाधारित ८० प्रश्नांकरिता १६० गुण अशी एकूण २०० गुणांची परीक्षा घेण्यात येईल व व्यावसायिक चाचणी घेऊन निवड केली जाईल.",
    "गट 'क' संवर्गातील पदांकरिता परीक्षेचा कालावधी २.०० तासाचा (१२० मिनिटे) राहील."
  ],
  developer: {
    name: "श्री शंकर पव्हणे (Shri Shankar Pavhane)",
    designation: "क्ष-किरण वैज्ञानिक अधिकारी (X-Ray Scientific Officer)",
    location: "जिल्हा रुग्णालय गडचिरोली (District Hospital Gadchiroli)",
    mobile: "9769441271",
    email: "sspavhane@gmail.com"
  }
};

export const CATEGORIES: CategoryInfo[] = [
  {
    name: 'Technical: Radiophysics & Machine Principles',
    nameMr: 'तांत्रिक घटक अ व ब: रेडिओफिजिक्स व मशीन तत्त्वे (Syllabus 5a & 5b)',
    section: 'technical',
    description: 'a) Radiophysics & Machine Principles (X-Ray, C-Arm, CT, MRI, Mammography)\nb) Types of Machines & Operating Principles.',
    descriptionMr: 'अ) रेडिओफिजिक्स (इतिहास/तत्त्वे) - X-Ray, C-Arm, CT, MRI, Mammography\nब) मशीनचे प्रकार व कार्यप्रणालीची सविस्तर माहिती.',
    marks: 32,
    questionCount: 16,
    color: 'teal',
    iconName: 'Activity'
  },
  {
    name: 'Technical: Anatomy & Radiographic Positioning',
    nameMr: 'तांत्रिक घटक क: शरीरशास्त्र व क्ष-किरण पोझिशनिंग (Syllabus 5c)',
    section: 'technical',
    description: 'c) Anatomy & Physiology knowledge with positioning for X-Ray, C-Arm, MRI, CT & Mammography.',
    descriptionMr: 'क) शरीरशास्त्र (Anatomy/Physiology) व क्ष-किरण, सी-आर्म, एम.आर.आय., सी.टी., मॅमोग्राफी पोझिशनिंग.',
    marks: 32,
    questionCount: 16,
    color: 'cyan',
    iconName: 'Layers'
  },
  {
    name: 'Technical: Radiation Protection & Hazards',
    nameMr: 'तांत्रिक घटक फ व झ: रेडिएशन सुरक्षा, धोके व BMW (Syllabus 5f & 5i)',
    section: 'technical',
    description: 'f) Radiation Hazards & Precaution Measures (ALARA, TLD, AERB)\ni) Biomedical Waste Management (BMW).',
    descriptionMr: 'फ) रेडिएशनचे धोके, अलारा (ALARA) तत्त्व, TLD बॅज, शिशाचे ॲप्रॉन व रेडिएशन बचाव\nझ) जैववैद्यकीय कचरा व्यवस्थापन (BMW).',
    marks: 32,
    questionCount: 16,
    color: 'emerald',
    iconName: 'ShieldCheck'
  },
  {
    name: 'Technical: Films, Contrast Media & Digital DR/PACS',
    nameMr: 'तांत्रिक घटक ड, इ व छ: फिल्म्स, कॉन्ट्रास्ट डाय व DR/PACS (Syllabus 5d, 5e & 5g)',
    section: 'technical',
    description: 'd) X-Ray Films & Chemical Nature\ne) Contrast Dyes & Emergency Management\ng) Mammography, C-Arm, DR & PACS.',
    descriptionMr: 'ड) फिल्म्स व डेव्हलपर/फिक्सर रसायने\nइ) कॉन्ट्रास्ट डाय, रिॲक्शन्स व आणीबाणी काळजी (CPR)\nछ) मॅमोग्राफी, सी-आर्म, डिजिटल रेडिओोग्राफी व PACS.',
    marks: 32,
    questionCount: 16,
    color: 'amber',
    iconName: 'Syringe'
  },
  {
    name: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
    nameMr: 'तांत्रिक घटक ज व ञ: प्रगत CT/MRI/रेडिओथेरपी व देखभाल (Syllabus 5h & 5j)',
    section: 'technical',
    description: 'h) CT, MRI, Radiotherapy, Lithotripsy procedures & complication management\nj) Maintenance of Equipment & Record Keeping.',
    descriptionMr: 'ज) सी.टी. स्कॅन, एम.आर.आय., रेडिओथेरपी व लिथोट्रिप्सी प्रक्रिया\nञ) उपकरणांची देखभाल, हाताळणीची जबाबदारी व रेकॉर्ड कीपिंग.',
    marks: 32,
    questionCount: 16,
    color: 'indigo',
    iconName: 'Sparkles'
  },
  {
    name: 'Marathi Language (मराठी भाषा)',
    nameMr: 'मराठी भाषा व व्याकरण (बिगर-तांत्रिक २०% - १० गुण)',
    section: 'marathi',
    description: 'Marathi Grammar (Sentence structure, Vocabulary, Parts of speech, Idioms & Literature).',
    descriptionMr: 'अ) मराठी व्याकरण ब) भाषा सौंदर्य (उपमा, अलंकार) क) प्रसिद्ध पुस्तके व लेखक ड) शब्दसंग्रह.',
    marks: 10,
    questionCount: 5,
    color: 'orange',
    iconName: 'BookOpen'
  },
  {
    name: 'English Language',
    nameMr: 'इंग्रजी भाषा व व्याकरण (बिगर-तांत्रिक २०% - १० गुण)',
    section: 'english',
    description: 'English Grammar (Synonyms, Antonyms, Spelling, Punctuation, Tenses), Vocabulary, Idioms & Sentence Structure.',
    descriptionMr: 'a) Grammar b) Vocabulary c) Fill in the blanks d) Simple Sentence Structure.',
    marks: 10,
    questionCount: 5,
    color: 'blue',
    iconName: 'Languages'
  },
  {
    name: 'General Knowledge (सामान्य ज्ञान)',
    nameMr: 'सामान्य ज्ञान व चालू घडामोडी (बिगर-तांत्रिक २०% - १० गुण)',
    section: 'gk',
    description: 'Current Affairs, History, Geography, Constitution, General Science, Sports/Culture, RTI Act 2005, RTS Act 2015 & IT.',
    descriptionMr: 'चालू घडामोडी, इतिहास, भूगोल, भारतीय संविधान, सामान्य विज्ञान, क्रीडा व संस्कृती, माहितीचा अधिकार २००५ व आयटी.',
    marks: 10,
    questionCount: 5,
    color: 'purple',
    iconName: 'Globe'
  },
  {
    name: 'Logical Ability & Mathematics (बौद्धिक चाचणी)',
    nameMr: 'बौद्धिक चाचणी व अंकगणित (बिगर-तांत्रिक २०% - १० गुण)',
    section: 'logical',
    description: 'Aptitude Test, Basic Arithmetic, Mathematics (Algebra, Geometry, Statistics), Reasoning & General Science.',
    descriptionMr: 'अंकीय व तर्कक्षमता, मूलभूत अंकगणित, बीजगणित, भूमिती, सांख्यिकी आणि बुद्धिमत्ता चाचणी.',
    marks: 10,
    questionCount: 5,
    color: 'rose',
    iconName: 'Brain'
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  // SECTION 1: TECHNICAL - RADIOPHYSICS & MACHINE PRINCIPLES (80 Marks Component)
  {
    id: 1,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "Who discovered X-Rays on November 8, 1895?",
    question_mr: "८ नोव्हेंबर १८९५ रोजी क्ष-किरणांचा (X-Rays) शोध कोणी लावला?",
    options: [
      "(A) Marie Curie",
      "(B) Wilhelm Conrad Roentgen",
      "(C) Thomas Edison",
      "(D) Henri Becquerel"
    ],
    options_mr: [
      "(A) मॅरी क्युरी",
      "(B) व्हिल्हेल्म कॉनराड रॉन्टगेन",
      "(C) थॉमस एडिसन",
      "(D) हेन्री बेक्वेरेल"
    ],
    correct_answer: "(B) Wilhelm Conrad Roentgen",
    correct_answer_mr: "(B) व्हिल्हेल्म कॉनराड रॉन्टगेन",
    explanation: "Wilhelm Conrad Roentgen discovered X-rays in 1895 while experimenting with cathode rays in a Crookes tube, earning the first Nobel Prize in Physics in 1901.",
    explanation_mr: "व्हिल्हेल्म कॉनराड रॉन्टगेन यांनी १८९५ मध्ये क्रूक्स ट्यूबमध्ये कॅथोड किरणांवर प्रयोग करत असताना क्ष-किरणांचा शोध लावला. या शोधाबद्दल त्यांना १९०१ मध्ये भौतिकशास्त्रातील पहिले नोबेल पारितोषिक मिळाले.",
    source_page: 1,
    difficulty: 'easy'
  },
  {
    id: 2,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "What material is most commonly used for the target/anode in a stationary or rotating X-ray tube?",
    question_mr: "क्ष-किरण ट्युबमधील टार्गेट/ॲनोड (Anode) साठी सर्वात जास्त कोणता धातू वापरला जातो?",
    options: [
      "(A) Copper",
      "(B) Tungsten",
      "(C) Aluminium",
      "(D) Lead"
    ],
    options_mr: [
      "(A) तांबे (Copper)",
      "(B) टंगस्टन (Tungsten)",
      "(C) ॲल्युमिनियम (Aluminium)",
      "(D) शिसे (Lead)"
    ],
    correct_answer: "(B) Tungsten",
    correct_answer_mr: "(B) टंगस्टन (Tungsten)",
    explanation: "Tungsten is used because of its high atomic number (Z=74), high melting point (3370°C), and good thermal conductivity.",
    explanation_mr: "टंगस्टनचा अणुक्रमांक उच्च (Z=74), उच्च वितळण बिंदू (३३७०°C) आणि चांगली औष्णिक वाहकता असल्यामुळे त्याचा वापर ॲनोड टार्गेट म्हणून केला जातो.",
    source_page: 24,
    difficulty: 'easy'
  },
  {
    id: 3,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "In an X-ray tube, what percentage of kinetic energy of electrons is converted into X-radiation?",
    question_mr: "क्ष-किरण ट्युबमध्ये इलेक्ट्रॉनच्या गतिज ऊर्जेचे क्ष-किरणांमध्ये (X-radiation) रूपांतर किती टक्के होते?",
    options: [
      "(A) Less than 1%",
      "(B) About 50%",
      "(C) About 75%",
      "(D) Nearly 99%"
    ],
    options_mr: [
      "(A) १% पेक्षा कमी (Less than 1%)",
      "(B) सुमारे ५०%",
      "(C) सुमारे ७५%",
      "(D) सुमारे ९९%"
    ],
    correct_answer: "(A) Less than 1%",
    correct_answer_mr: "(A) १% पेक्षा कमी (Less than 1%)",
    explanation: "More than 99% of kinetic energy is converted into thermal heat, and less than 1% is emitted as useful X-ray photons.",
    explanation_mr: "९९% पेक्षा जास्त ऊर्जा उष्णतेमध्ये (Heat) रूपांतरित होते आणि १% पेक्षा कमी ऊर्जा उपयुक्त क्ष-किरणांमध्ये रूपांतरित होते.",
    source_page: 38,
    difficulty: 'medium'
  },
  {
    id: 4,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which anatomical landmark corresponds approximately to the level of the L4-L5 vertebrae?",
    question_mr: "L4-L5 मणक्यांच्या स्तराशी (Vertebrae level) शरीराची कोणती लँडमार्क (Anatomical Landmark) जोडलेली असते?",
    options: [
      "(A) Xiphoid process",
      "(B) Iliac crest",
      "(C) Anterior superior iliac spine (ASIS)",
      "(D) Symphysis pubis"
    ],
    options_mr: [
      "(A) झिफॉईड प्रोसेस (Xiphoid process)",
      "(B) इलियाक क्रेस्ट (Iliac crest)",
      "(C) अँटिरियर सुपीरियर इलियाक स्पाइन (ASIS)",
      "(D) सिम्फिसीस प्युबिस (Symphysis pubis)"
    ],
    correct_answer: "(B) Iliac crest",
    correct_answer_mr: "(B) इलियाक क्रेस्ट (Iliac crest)",
    explanation: "The iliac crest is located at the level of L4-L5, which is the primary landmark for positioning KUB (Kidney, Ureter, Bladder) and Abdomen radiographs.",
    explanation_mr: "इलियाक क्रेस्ट हे L4-L5 मणक्यांच्या पातळीवर असते, जे पोटाचा (Abdomen/KUB) एक्स-रे घेताना मध्यवर्ती बिंदू मानले जाते.",
    source_page: 82,
    difficulty: 'medium'
  },
  {
    id: 5,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "What is the standard Source-to-Image Distance (SID) for a chest radiograph (PA View)?",
    question_mr: "छातीचा एक्स-रे (Chest PA View) घेताना मानक सोर्स-टू-इमेज डिस्टन्स (SID) किती असावे?",
    options: [
      "(A) 40 inches (100 cm)",
      "(B) 72 inches (180 cm)",
      "(C) 30 inches (75 cm)",
      "(D) 90 inches (225 cm)"
    ],
    options_mr: [
      "(A) ४० इंच (१०० सेमी)",
      "(B) ७२ इंच (१८० सेमी)",
      "(C) ३० इंच (७५ सेमी)",
      "(D) ९० इंच (२२५ सेमी)"
    ],
    correct_answer: "(B) 72 inches (180 cm)",
    correct_answer_mr: "(B) ७२ इंच (१८० सेमी)",
    explanation: "A 72-inch SID minimizes magnification of the heart and increases spatial resolution on Chest PA radiographs.",
    explanation_mr: "७२ इंच (१८० सेमी) अंतरामुळे हृदयाचे आकारमान (Heart Magnification) कमी दिसते आणि प्रतिमेची स्पष्टता (Spatial Resolution) वाढते.",
    source_page: 95,
    difficulty: 'easy'
  },
  {
    id: 6,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "What does the ALARA principle stand for in radiation protection?",
    question_mr: "रेडिएशन सुरक्षेमध्ये 'ALARA' तत्त्वाचा पूर्ण अर्थ काय आहे?",
    options: [
      "(A) As Low As Reasonably Achievable",
      "(B) Always Lower Absolute Radiation Absorbed",
      "(C) Automatic Lead Shielding Radiography Application",
      "(D) As Little As Radiation Allowed"
    ],
    options_mr: [
      "(A) अस लो ॲज रिझनेबली अचिव्हेबल (As Low As Reasonably Achievable)",
      "(B) ऑलवेज लोअर ॲब्सोल्यूट रेडिएशन एब्जॉर्ब्ड",
      "(C) ऑटोमॅटिक लीड शील्डिंग रेडिओोग्राफी",
      "(D) ॲज लिटल ॲज रेडिएशन अलाउड"
    ],
    correct_answer: "(A) As Low As Reasonably Achievable",
    correct_answer_mr: "(A) अस लो ॲज रिझनेबली अचिव्हेबल (As Low As Reasonably Achievable)",
    explanation: "ALARA mandates using minimal radiation exposure while maintaining diagnostic image quality through Time, Distance, and Shielding.",
    explanation_mr: "ALARA तत्त्वानुसार वेळेचे नियंत्रण (Time), अंतर (Distance) आणि संरक्षण (Shielding) वापरून रेडिएशनचा संपर्क शक्य तितका कमी ठेवला जातो.",
    source_page: 120,
    difficulty: 'easy'
  },
  {
    id: 7,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "What is the annual maximum permissible dose limit for a radiation worker according to AERB guidelines?",
    question_mr: "AERB नियमानुसार रेडिएशन कर्मचाऱ्यासाठी एका वर्षातील कमाल मर्यादित डोस (Annual Effective Dose Limit) किती आहे?",
    options: [
      "(A) 5 mSv per year",
      "(B) 20 mSv per year averaged over 5 years",
      "(C) 50 mSv per year",
      "(D) 100 mSv per year"
    ],
    options_mr: [
      "(A) ५ mSv दरवर्षी",
      "(B) २० mSv दरवर्षी (५ वर्षांची सरासरी, एका वर्षात max ३० mSv)",
      "(C) ५० mSv दरवर्षी",
      "(D) १०० mSv दरवर्षी"
    ],
    correct_answer: "(B) 20 mSv per year averaged over 5 years",
    correct_answer_mr: "(B) २० mSv दरवर्षी (५ वर्षांची सरासरी, एका वर्षात max ३० mSv)",
    explanation: "Atomic Energy Regulatory Board (AERB) specifies an occupational dose limit of 20 mSv per year averaged over 5 consecutive years, not exceeding 30 mSv in any single year.",
    explanation_mr: "अणुऊर्जा नियामक मंडळ (AERB) च्या नियमानुसार ५ वर्षांच्या कालावधीत सरासरी दरवर्षी २० mSv डोस मर्यादा निश्चित केलेली आहे.",
    source_page: 135,
    difficulty: 'medium'
  },
  {
    id: 8,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "Which chemical agent is used as the primary developing/reducing agent in manual X-ray film processing?",
    question_mr: "मॅन्युअल क्ष-किरण फिल्म प्रोसेसिंगमध्ये मुख्य डेव्हलपिंग/रिड्युसिंग एजंट म्हणून कोणते रसायन वापरले जाते?",
    options: [
      "(A) Hydroquinone and Metol",
      "(B) Ammonium Thiosulfate",
      "(C) Sodium Carbonate",
      "(D) Potassium Alum"
    ],
    options_mr: [
      "(A) हायड्रोक्विनोन आणि मेटॉल (Hydroquinone & Metol)",
      "(B) अमोनियम थायोसल्फेट",
      "(C) सोडियम कार्बोनेट",
      "(D) पोटॅशियम तुरटी"
    ],
    correct_answer: "(A) Hydroquinone and Metol",
    correct_answer_mr: "(A) हायड्रोक्विनोन आणि मेटॉल (Hydroquinone & Metol)",
    explanation: "Hydroquinone controls black density and contrast while Metol/Phenidone quickly develops light gray areas on silver halide emulsion.",
    explanation_mr: "हायड्रोक्विनोन फिल्मवरील काळा रंग व कॉन्ट्रास्ट नियंत्रित करते, तर मेटॉल फिकट राखाडी भाग वेगाने विकसित करते.",
    source_page: 150,
    difficulty: 'medium'
  },
  {
    id: 9,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "According to Biomedical Waste Management Rules, in which color-coded bin should infected plastic items like syringes, IV bottles, and catheters be disposed?",
    question_mr: "जैववैद्यकीय कचरा व्यवस्थापन (BMW) नियमानुसार संक्रमित प्लास्टिक सिरिंज, सलाईन बॉटल्स व कॅथेटर कोणत्या रंगाच्या डब्यात (Bin) टाकावेत?",
    options: [
      "(A) Yellow Bin",
      "(B) Red Bin",
      "(C) White Translucent Bin",
      "(D) Blue Bin"
    ],
    options_mr: [
      "(A) पिवळा डबा (Yellow Bin)",
      "(B) लाल डबा (Red Bin)",
      "(C) पांढरा पारदर्शक डबा (White Bin)",
      "(D) निळा डबा (Blue Bin)"
    ],
    correct_answer: "(B) Red Bin",
    correct_answer_mr: "(B) लाल डबा (Red Bin)",
    explanation: "Red bins are strictly meant for recyclable contaminated plastic wastes like tubing, IV bottles, catheters, and tubings.",
    explanation_mr: "पुनर्वापरयोग्य संक्रमित प्लास्टिक वस्तू (जसे की सलाईन बॉटल्स, कॅथेटर, सिरिंजचे ट्युबिंग) लाल रंगाच्या डब्यात टाकल्या जातात.",
    source_page: 180,
    difficulty: 'easy'
  },
  {
    id: 10,
    category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
    section: 'technical',
    question: "What unit is used to measure magnetic field strength in Magnetic Resonance Imaging (MRI)?",
    question_mr: "एम.आर.आय. (MRI) मध्ये चुंबकीय क्षेत्राची तीव्रता (Magnetic Field Strength) मोजण्यासाठी कोणते एकक वापरले जाते?",
    options: [
      "(A) Hounsfield Unit (HU)",
      "(B) Tesla (T)",
      "(C) Becquerel (Bq)",
      "(D) Gray (Gy)"
    ],
    options_mr: [
      "(A) हॉन्सफिल्ड युनिट (HU)",
      "(B) टेस्ला (Tesla / T)",
      "(C) बेक्वेरेल (Bq)",
      "(D) ग्रे (Gy)"
    ],
    correct_answer: "(B) Tesla (T)",
    correct_answer_mr: "(B) टेस्ला (Tesla / T)",
    explanation: "Tesla (T) or Gauss (1 Tesla = 10,000 Gauss) measures the static magnetic field strength in clinical MRI scanners (e.g., 1.5T or 3.0T).",
    explanation_mr: "वैद्यकीय एम.आर.आय. मशीनची चुंबकीय क्षमता टेस्ला (T) मध्ये मोजली जाते (उदा. १.५ टेस्ला किंवा ३.० टेस्ला).",
    source_page: 210,
    difficulty: 'easy'
  },

  // SECTION 2: MARATHI LANGUAGE (मराठी भाषा - ३० गुण / १५ प्रश्न)
  {
    id: 11,
    category: 'Marathi Language (मराठी भाषा)',
    section: 'marathi',
    question: "'राम अंबा खातो' या वाक्यातील प्रयोग कोणता?",
    question_mr: "'राम आंबा खातो' या वाक्यातील प्रयोग कोणता?",
    options: [
      "(A) कर्तरी प्रयोग",
      "(B) कर्मणी प्रयोग",
      "(C) भावे प्रयोग",
      "(D) संकीर्ण प्रयोग"
    ],
    options_mr: [
      "(A) कर्तरी प्रयोग",
      "(B) कर्मणी प्रयोग",
      "(C) भावे प्रयोग",
      "(D) संकीर्ण प्रयोग"
    ],
    correct_answer: "(A) कर्तरी प्रयोग",
    correct_answer_mr: "(A) कर्तरी प्रयोग",
    explanation: "कर्त्याच्या लिंग, वचन व पुरुषानुसार क्रियापद बदलते म्हणून हा 'कर्तरी प्रयोग' आहे (उदा. सीता आंबा खाते).",
    explanation_mr: "कर्त्याच्या लिंग, वचन व पुरुषानुसार क्रियापद बदलते म्हणून हा 'कर्तरी प्रयोग' आहे (उदा. सीता आंबा खाते).",
    source_page: 1,
    difficulty: 'easy'
  },
  {
    id: 12,
    category: 'Marathi Language (मराठी भाषा)',
    section: 'marathi',
    question: "'सूर्य' या शब्दाचा खालीलपैकी समानार्थी शब्द कोणता?",
    question_mr: "'सूर्य' या शब्दाचा खालीलपैकी समानार्थी शब्द कोणता?",
    options: [
      "(A) भास्कर",
      "(B) चंद्र",
      "(C) सुधाकर",
      "(D) रजाकर"
    ],
    options_mr: [
      "(A) भास्कर",
      "(B) चंद्र",
      "(C) सुधाकर",
      "(D) रजाकर"
    ],
    correct_answer: "(A) भास्कर",
    correct_answer_mr: "(A) भास्कर",
    explanation: "सूर्य या शब्दाचे समानार्थी शब्द: भास्कर, भानू, दिनकर, मित्र, दिनमणी इत्यादी आहेत.",
    explanation_mr: "सूर्य या शब्दाचे समानार्थी शब्द: भास्कर, भानू, दिनकर, मित्र, दिनमणी इत्यादी आहेत.",
    source_page: 5,
    difficulty: 'easy'
  },
  {
    id: 13,
    category: 'Marathi Language (मराठी भाषा)',
    section: 'marathi',
    question: "'नटसम्राट' या प्रसिद्ध नाटकाचे लेखक कोण आहेत?",
    question_mr: "'नटसम्राट' या प्रसिद्ध नाटकाचे लेखक कोण आहेत?",
    options: [
      "(A) विजय तेंडुलकर",
      "(B) कुसुमाग्रज (वि. वा. शिरवाडकर)",
      "(C) पु. ल. देशपांडे",
      "(D) राम गणेश गडकरी"
    ],
    options_mr: [
      "(A) विजय तेंडुलकर",
      "(B) कुसुमाग्रज (वि. वा. शिरवाडकर)",
      "(C) पु. ल. देशपांडे",
      "(D) राम गणेश गडकरी"
    ],
    correct_answer: "(B) कुसुमाग्रज (वि. वा. शिरवाडकर)",
    correct_answer_mr: "(B) कुसुमाग्रज (वि. वा. शिरवाडकर)",
    explanation: "'नटसम्राट' हे अजरामर नाटक विष्णु वामन शिरवाडकर (कुसुमाग्रज) यांनी लिहिले आहे, ज्यासाठी त्यांना साहित्य अकादमी पुरस्कार मिळाला.",
    explanation_mr: "'नटसम्राट' हे अजरामर नाटक विष्णु वामन शिरवाडकर (कुसुमाग्रज) यांनी लिहिले आहे, ज्यासाठी त्यांना साहित्य अकादमी पुरस्कार मिळाला.",
    source_page: 12,
    difficulty: 'medium'
  },
  {
    id: 14,
    category: 'Marathi Language (मराठी भाषा)',
    section: 'marathi',
    question: "'काखेत कळसा आणि गावाला वळसा' या म्हणीचा योग्य अर्थ काय?",
    question_mr: "'काखेत कळसा आणि गावाला वळसा' या म्हणीचा योग्य अर्थ काय?",
    options: [
      "(A) वस्तू जवळच असताना सर्वत्र शोधणे",
      "(B) गावभर फिरून काम करणे",
      "(C) जवळची वस्तू हरवून जाणे",
      "(D) निष्कारण प्रवास करणे"
    ],
    options_mr: [
      "(A) वस्तू जवळच असताना सर्वत्र शोधणे",
      "(B) गावभर फिरून काम करणे",
      "(C) जवळची वस्तू हरवून जाणे",
      "(D) निष्कारण प्रवास करणे"
    ],
    correct_answer: "(A) वस्तू जवळच असताना सर्वत्र शोधणे",
    correct_answer_mr: "(A) वस्तू जवळच असताना सर्वत्र शोधणे",
    explanation: "हवी ती वस्तू जवळच हाताशी असताना ती शोधण्यासाठी सगळीकडे व्यर्थ शोध घेत फिरणे म्हणजे 'काखेत कळसा आणि गावाला वळसा'.",
    explanation_mr: "हवी ती वस्तू जवळच हाताशी असताना ती शोधण्यासाठी सगळीकडे व्यर्थ शोध घेत फिरणे म्हणजे 'काखेत कळसा आणि गावाला वळसा'.",
    source_page: 18,
    difficulty: 'easy'
  },

  // SECTION 3: ENGLISH LANGUAGE (३० गुण / १५ प्रश्न)
  {
    id: 15,
    category: 'English Language',
    section: 'english',
    question: "Choose the correct Synonym for the word: 'BENEVOLENT'",
    question_mr: "'BENEVOLENT' या शब्दाचा योग्य समानार्थी शब्द (Synonym) निवडा:",
    options: [
      "(A) Malevolent",
      "(B) Kindhearted / Generous",
      "(C) Hostile",
      "(D) Greedy"
    ],
    options_mr: [
      "(A) मेलव्होलंट (दुष्ट)",
      "(B) काइंडहार्टेड / जेनेरस (दयाळू / परोपकारी)",
      "(C) हॉस्टाईल (शत्रुत्वाचा)",
      "(D) ग्रीडी (लोभी)"
    ],
    correct_answer: "(B) Kindhearted / Generous",
    correct_answer_mr: "(B) काइंडहार्टेड / जेनेरस (दयाळू / परोपकारी)",
    explanation: "'Benevolent' means well-meaning, kindly, or charitable. Its synonym is kindhearted / generous.",
    explanation_mr: "'Benevolent' म्हणजे परोपकारी, दयाळू किंवा दुसऱ्यांचे भले इच्छिणारा.",
    source_page: 2,
    difficulty: 'easy'
  },
  {
    id: 16,
    category: 'English Language',
    section: 'english',
    question: "Fill in the blank with correct preposition: 'She has been working in District Hospital Gadchiroli _____ 2018.'",
    question_mr: "योग्य शब्दयोगी अव्यय (Preposition) वापरा: 'She has been working in District Hospital Gadchiroli _____ 2018.'",
    options: [
      "(A) for",
      "(B) since",
      "(C) from",
      "(D) in"
    ],
    options_mr: [
      "(A) for",
      "(B) since",
      "(C) from",
      "(D) in"
    ],
    correct_answer: "(B) since",
    correct_answer_mr: "(B) since",
    explanation: "'Since' is used to denote a specific starting point of time in Perfect Continuous tenses.",
    explanation_mr: "विशिष्ट सुरुवातीची वेळ (Point of time - उदा. 2018) दर्शवण्यासाठी Perfect Continuous tense मध्ये 'since' वापरतात.",
    source_page: 10,
    difficulty: 'medium'
  },

  // SECTION 4: GENERAL KNOWLEDGE (सामान्य ज्ञान - ३० गुण / १५ प्रश्न)
  {
    id: 17,
    category: 'General Knowledge (सामान्य ज्ञान)',
    section: 'gk',
    question: "Under the Right to Information Act 2005 (RTI), within how many days must a Public Information Officer (PIO) provide information to an applicant?",
    question_mr: "माहितीचा अधिकार अधिनियम २००५ (RTI) नुसार, जन माहिती अधिकाऱ्याने (PIO) अर्जाचा स्वीकार केल्यापासून किती दिवसांच्या आत माहिती पुरवणे बंधनकारक आहे?",
    options: [
      "(A) 15 days",
      "(B) 30 days",
      "(C) 45 days",
      "(D) 60 days"
    ],
    options_mr: [
      "(A) १५ दिवस",
      "(B) ३० दिवस",
      "(C) ४५ दिवस",
      "(D) ६० दिवस"
    ],
    correct_answer: "(B) 30 days",
    correct_answer_mr: "(B) ३० दिवस",
    explanation: "Under Section 7(1) of RTI Act 2005, the Public Information Officer must provide requested info within 30 days of receipt (or 48 hours if it concerns life and liberty).",
    explanation_mr: "RTI कायदा २००५ च्या कलम ७(१) नुसार ३० दिवसांच्या आत माहिती देणे बंधनकारक आहे (जीवित व स्वातंत्र्याशी संबंधित असल्यास ४८ तासांत).",
    source_page: 30,
    difficulty: 'easy'
  },
  {
    id: 18,
    category: 'General Knowledge (सामान्य ज्ञान)',
    section: 'gk',
    question: "Which Article of the Indian Constitution is known as the 'Heart and Soul' of the Constitution according to Dr. B.R. Ambedkar?",
    question_mr: "डॉ. बी.आर. आंबेडकर यांच्या मते भारतीय संविधानाचा 'आत्मा आणि हृदय' (Heart and Soul) म्हणून कोणते कलम ओळखले जाते?",
    options: [
      "(A) Article 14 (Right to Equality)",
      "(B) Article 19 (Right to Freedom)",
      "(C) Article 21 (Right to Life)",
      "(D) Article 32 (Right to Constitutional Remedies)"
    ],
    options_mr: [
      "(A) कलम १४ (समानतेचा अधिकार)",
      "(B) कलम १९ (स्वातंत्र्याचा अधिकार)",
      "(C) कलम २१ (जीविताचा अधिकार)",
      "(D) कलम ३२ (घटनात्मक उपायांचा अधिकार)"
    ],
    correct_answer: "(D) Article 32 (Right to Constitutional Remedies)",
    correct_answer_mr: "(D) कलम ३२ (घटनात्मक उपायांचा अधिकार)",
    explanation: "Dr. B.R. Ambedkar called Article 32 (Constitutional Remedies) the heart and soul of the Constitution as it empowers citizens to move the Supreme Court to enforce Fundamental Rights.",
    explanation_mr: "कलम ३२ द्वारे मूलभूत हक्कांच्या संरक्षणासाठी सर्वोच्च न्यायालयात दाद मागता येते, म्हणून डॉ. आंबेडकरांनी यास 'संविधानाचा आत्मा' म्हटले.",
    source_page: 45,
    difficulty: 'medium'
  },

  // SECTION 5: LOGICAL ABILITY & MATHEMATICS (बौद्धिक चाचणी व अंकगणित - ३० गुण / १५ प्रश्न)
  {
    id: 19,
    category: 'Logical Ability & Mathematics (बौद्धिक चाचणी)',
    section: 'logical',
    question: "If A is B's brother, C is B's mother, D is C's father, how is A related to D?",
    question_mr: "जर A हा B चा भाऊ आहे, C ही B ची आई आहे, D हे C चे वडील आहेत, तर A चे D शी नाते काय?",
    options: [
      "(A) Grandson (नातू)",
      "(B) Father (वडील)",
      "(C) Son (मुलगा)",
      "(D) Uncle (काका)"
    ],
    options_mr: [
      "(A) नातू (Grandson)",
      "(B) वडील (Father)",
      "(C) मुलगा (Son)",
      "(D) काका (Uncle)"
    ],
    correct_answer: "(A) Grandson (नातू)",
    correct_answer_mr: "(A) नातू (Grandson)",
    explanation: "C is A's mother, and D is C's father. Thus, D is A's maternal grandfather, and A is D's grandson.",
    explanation_mr: "C ही A ची आई आहे, आणि D हे C चे वडील आहेत. त्यामुळे D हे A चे आजोबा लागतात आणि A हा D चा नातू ठरतो.",
    source_page: 55,
    difficulty: 'easy'
  },
  {
    id: 20,
    category: 'Logical Ability & Mathematics (बौद्धिक चाचणी)',
    section: 'logical',
    question: "Find the missing term in the sequence: 4, 9, 16, 25, 36, ?",
    question_mr: "खालील मालिकेतील गाळलेले पद शोधा: ४, ९, १६, २५, ३६, ?",
    options: [
      "(A) 42",
      "(B) 49",
      "(C) 64",
      "(D) 54"
    ],
    options_mr: [
      "(A) ४२",
      "(B) ४९",
      "(C) ६४",
      "(D) ५४"
    ],
    correct_answer: "(B) 49",
    correct_answer_mr: "(B) ४९",
    explanation: "The series represents consecutive squares of natural numbers starting from 2: 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49.",
    explanation_mr: "ही मालिका २, ३, ४, ५, ६ यांच्या वर्गांची (Squares) आहे. पुढील संख्या ७ चा वर्ग म्हणजेच ४९ असेल.",
    source_page: 60,
    difficulty: 'easy'
  },
  // ADDITIONAL HIGH-YIELD TECHNICAL & NON-TECHNICAL QUESTIONS
  {
    id: 21,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "What is the primary function of an X-ray beam collimator?",
    question_mr: "क्ष-किरण बीम कोलिमेटरचे (Collimator) मुख्य कार्य काय असते?",
    options: [
      "(A) To increase tube voltage",
      "(B) To restrict the x-ray field size and reduce scatter radiation",
      "(C) To cool down the anode",
      "(D) To convert x-rays into visible light"
    ],
    options_mr: [
      "(A) ट्युब व्होल्टेज वाढवणे",
      "(B) एक्स-रे बीमचा आकार मर्यादित करणे व स्कॅटर रेडिएशन कमी करणे",
      "(C) ॲनोड थंड करणे",
      "(D) एक्स-रे चे दृष्य प्रकाशात रूपांतर करणे"
    ],
    correct_answer: "(B) To restrict the x-ray field size and reduce scatter radiation",
    correct_answer_mr: "(B) एक्स-रे बीमचा आकार मर्यादित करणे व स्कॅटर रेडिएशन कमी करणे",
    explanation: "Collimators restrict the primary x-ray beam size to the region of interest, reducing patient radiation dose and preventing unnecessary scatter radiation from reaching the film.",
    explanation_mr: "कोलिमेटरमुळे एक्स-रे बीमचा विस्तार मर्यादित राहतो, ज्यामुळे रुग्णाला मिळणारा रेडिएशन डोस कमी होतो व स्कॅटर रेडिएशन रोखले जाते.",
    source_page: 42,
    difficulty: 'medium'
  },
  {
    id: 22,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "Which component of an X-ray generator converts low AC voltage to high AC voltage required for X-ray production?",
    question_mr: "क्ष-किरण निर्मितीसाठी आवश्यक असणाऱ्या उच्च व्होल्टेजमध्ये (High Voltage) कमी व्होल्टेजचे रूपांतर कोणता घटक करतो?",
    options: [
      "(A) Step-down transformer",
      "(B) Step-up transformer",
      "(C) Autotransformer",
      "(D) Rectifier circuit"
    ],
    options_mr: [
      "(A) स्टेप-डाऊन ट्रान्सफॉर्मर",
      "(B) स्टेप-अप ट्रान्सफॉर्मर (Step-up Transformer)",
      "(C) ऑटो-ट्रान्सफॉर्मर",
      "(D) रेक्टिफायर सर्किट"
    ],
    correct_answer: "(B) Step-up transformer",
    correct_answer_mr: "(B) स्टेप-अप ट्रान्सफॉर्मर (Step-up Transformer)",
    explanation: "A step-up high voltage transformer increases input line voltage (e.g., 220V) to kilovolts (kV, e.g., 40kV to 125kV) required to accelerate electrons.",
    explanation_mr: "स्टेप-अप ट्रान्सफॉर्मर कमी व्होल्टेजचे रुपांतर किलोव्होल्ट (kV) मध्ये करतो, जे इलेक्ट्रॉन्स वेगाने फेकून क्ष-किरण निर्मितीसाठी आवश्यक असतात.",
    source_page: 52,
    difficulty: 'medium'
  },
  {
    id: 23,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which anatomical position requires the patient to lie face down on the radiography table?",
    question_mr: "एक्स-रे टेबलवर रुग्णाला पालथे (पोटावर) झोपवण्याच्या स्थितीला काय म्हणतात?",
    options: [
      "(A) Supine position",
      "(B) Prone position",
      "(C) Decubitus position",
      "(D) Trendelenburg position"
    ],
    options_mr: [
      "(A) सुपाईन (Supine - पाठीवर)",
      "(B) प्रोन (Prone - पोटावर/पालथे)",
      "(C) डेक्युबिटस (Decubitus)",
      "(D) ट्रेन्डेलेनबर्ग (Trendelenburg)"
    ],
    correct_answer: "(B) Prone position",
    correct_answer_mr: "(B) प्रोन (Prone - पोटावर/पालथे)",
    explanation: "In the prone position, the patient lies lying flat with the chest and abdomen touching the table (face down). Supine means lying on the back.",
    explanation_mr: "प्रोन पोझिशन (Prone Position) मध्ये रुग्ण पोटावर व छातीवर टेबलला टेकून पालथा झोपतो.",
    source_page: 88,
    difficulty: 'easy'
  },
  {
    id: 24,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Where should the central ray be directed for a standard PA Projection of the Hand?",
    question_mr: "हाताचा क्ष-किरण (Hand PA Projection) घेताना मध्यवर्ती बीम (Central Ray) कोठे केंद्रित केला पाहिजे?",
    options: [
      "(A) Distal interphalangeal joint",
      "(B) 3rd Metacarpophalangeal (MCP) joint",
      "(C) Wrist joint center",
      "(D) Tip of middle finger"
    ],
    options_mr: [
      "(A) डिस्टल इंटरफालांजिअल जॉइंट",
      "(B) ३ रा मेटाकार्पोफालांजिअल (MCP) जॉइंट",
      "(C) मनगटाचा सांधा (Wrist joint)",
      "(D) मधल्या बोटाचे टोक"
    ],
    correct_answer: "(B) 3rd Metacarpophalangeal (MCP) joint",
    correct_answer_mr: "(B) ३ रा मेटाकार्पोफालांजिअल (MCP) जॉइंट",
    explanation: "For a Hand PA projection, the central ray is directed perpendicular to the 3rd metacarpophalangeal (MCP) joint.",
    explanation_mr: "हाताचा PA व्ह्यू घेताना मध्यवर्ती क्ष-किरण ३ ऱ्या मेटाकार्पोफालांजिअल सांध्यावर लंबरूप केंद्रित केले जातात.",
    source_page: 104,
    difficulty: 'medium'
  },
  {
    id: 25,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "Which radiation monitoring device contains calcium sulfate (CaSO4:Dy) or lithium fluoride disks to record cumulative occupational dose?",
    question_mr: "कर्मचाऱ्याच्या शरीराला मिळालेला रेडिएशन डोस मोजण्यासाठी वापरल्या जाणाऱ्या TLD बॅजमध्ये कोणते रसायन असते?",
    options: [
      "(A) Thermoluminescent Dosimeter (TLD)",
      "(B) Pocket Ionization Chamber",
      "(C) Geiger-Muller Counter",
      "(D) Film Badge"
    ],
    options_mr: [
      "(A) थर्मोल्युमिनेसेंट डोसामीटर - टी.एल.डी. (TLD Badge)",
      "(B) पॉकेट आयोनायझेशन चेंबर",
      "(C) गिगर-म्युलर काउंटर",
      "(D) फिल्म बॅज"
    ],
    correct_answer: "(A) Thermoluminescent Dosimeter (TLD)",
    correct_answer_mr: "(A) थर्मोल्युमिनेसेंट डोसामीटर - टी.एल.डी. (TLD Badge)",
    explanation: "TLD badges contain CaSO4:Dy disks that trap electrons when exposed to ionizing radiation and release light when heated at processing labs.",
    explanation_mr: "टी.एल.डी. बॅजमध्ये CaSO4:Dy चकत्या असतात ज्या रेडिएशन शोषून घेतात व प्रयोगशाळेत तापवल्यानंतर प्रकाश उत्सर्जित करून डोस दर्शवतात.",
    source_page: 128,
    difficulty: 'easy'
  },
  {
    id: 26,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "What is the standard recommended lead equivalent thickness for a lead apron used during routine diagnostic fluoroscopy?",
    question_mr: "फ्लोरोस्कोपी किंवा क्ष-किरण कक्षात वापरल्या जाणाऱ्या शिशाच्या ॲप्रॉनची (Lead Apron) मानक जाडी किती असावी?",
    options: [
      "(A) 0.1 mm Pb",
      "(B) 0.5 mm Pb (or at least 0.25 mm Pb)",
      "(C) 2.0 mm Pb",
      "(D) 5.0 mm Pb"
    ],
    options_mr: [
      "(A) ०.१ मिमी शिसे",
      "(B) ०.५ मिमी शिसे (किंवा किमान ०.२५ मिमी)",
      "(C) २.० मिमी शिसे",
      "(D) ५.० मिमी शिसे"
    ],
    correct_answer: "(B) 0.5 mm Pb (or at least 0.25 mm Pb)",
    correct_answer_mr: "(B) ०.५ मिमी शिसे (किंवा किमान ०.२५ मिमी)",
    explanation: "Lead aprons with 0.5 mm Pb equivalent attenuate over 90% of scatter radiation during fluoroscopic and diagnostic procedures.",
    explanation_mr: "०.५ मिमी जाडीचा लीड ॲप्रॉन सुमारे ९०% पेक्षा जास्त स्कॅटर रेडिएशन रोखतो.",
    source_page: 140,
    difficulty: 'medium'
  },
  {
    id: 27,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "Which contrast medium is universally used for intravenous pyelography (IVP) and contrast-enhanced CT scans?",
    question_mr: "आय.व्ही.पी. (IVP) आणि सी.टी. स्कॅन साठी शिरेतून (Intravenous) दिली जाणारी मुख्य कॉन्ट्रास्ट डाय कोणती असते?",
    options: [
      "(A) Barium Sulfate suspension",
      "(B) Non-ionic Iodinated contrast media (e.g. Iohexol)",
      "(C) Gadolinium chelates",
      "(D) Air / Carbon dioxide"
    ],
    options_mr: [
      "(A) बेरियम सल्फेट",
      "(B) नॉन-आयॉनिक आयोडीनेटेड कॉन्ट्रास्ट डाय (Iohexol / Iopamidol)",
      "(C) गॅडोलिनियम",
      "(D) हवा / कार्बन डायऑक्साइड"
    ],
    correct_answer: "(B) Non-ionic Iodinated contrast media (e.g. Iohexol)",
    correct_answer_mr: "(B) नॉन-आयॉनिक आयोडीनेटेड कॉन्ट्रास्ट डाय (Iohexol / Iopamidol)",
    explanation: "Non-ionic iodinated contrast agents (e.g., Iohexol, Iopamidol) are used intravenously due to lower osmolality and reduced risk of severe anaphylactic reaction.",
    explanation_mr: "नॉन-आयॉनिक आयोडीनयुक्त डाय (Iohexol) च्या वापरामुळे रुग्णाला ॲलर्जी किंवा त्रासाचा धोका खूप कमी होतो.",
    source_page: 165,
    difficulty: 'medium'
  },
  {
    id: 28,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "In Digital Radiography, what does the acronym PACS stand for?",
    question_mr: "डिजिटल रेडिओोग्राफीमधील 'PACS' प्रणालीचा पूर्ण विस्तार काय आहे?",
    options: [
      "(A) Patient Access & Clinical Storage",
      "(B) Picture Archiving and Communication System",
      "(C) Photostimulable Automation Control Server",
      "(D) Precise Anode Calibration System"
    ],
    options_mr: [
      "(A) पेशंट ॲक्सेस अँड क्लिनिकल स्टोरेज",
      "(B) पिक्चर आर्काइव्हिंग अँड कम्युनिकेशन सिस्टम (PACS)",
      "(C) फोटोस्टिम्युलेबल ऑटोमेशन कंट्रोल सर्व्हर",
      "(D) प्रिसॉईस ॲनोड कॅलिब्रेशन सिस्टम"
    ],
    correct_answer: "(B) Picture Archiving and Communication System",
    correct_answer_mr: "(B) पिक्चर आर्काइव्हिंग अँड कम्युनिकेशन सिस्टम (PACS)",
    explanation: "PACS (Picture Archiving and Communication System) provides economical storage and convenient access to medical images from multiple modalities.",
    explanation_mr: "PACS म्हणजे वैद्यकीय एक्स-रे, सी.टी. व एम.आर.आय. प्रतिमा सुरक्षित साठवणूक व संगणकांवर देवाणघेवाण करणारी डिजिटल यंत्रणा होय.",
    source_page: 195,
    difficulty: 'easy'
  },
  {
    id: 29,
    category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
    section: 'technical',
    question: "What is the Hounsfield Unit (HU) value for pure water in computed tomography (CT)?",
    question_mr: "सी.टी. स्कॅन (CT Scan) मध्ये शुद्ध पाण्यासाठी हॉन्सफिल्ड युनिट (HU) चे मूल्य किती असते?",
    options: [
      "(A) -1000 HU",
      "(B) 0 HU",
      "(C) +1000 HU",
      "(D) +50 HU"
    ],
    options_mr: [
      "(A) -१००० HU (हवा)",
      "(B) ० HU (शुद्ध पाणी)",
      "(C) +१००० HU (हाड/Bone)",
      "(D) +५० HU"
    ],
    correct_answer: "(B) 0 HU",
    correct_answer_mr: "(B) ० HU (शुद्ध पाणी)",
    explanation: "In CT Hounsfield scale, pure water is calibrated at 0 HU, air is -1000 HU, and dense cortical bone is +1000 HU.",
    explanation_mr: "सीटी स्केलवर पाण्याचे मूल्य ० HU असते; हवेचे -१००० HU व टणक हाडांचे +१००० HU असते.",
    source_page: 225,
    difficulty: 'easy'
  },
  {
    id: 30,
    category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
    section: 'technical',
    question: "Why are ferromagnetic objects (like iron scissors, oxygen cylinders) strictly prohibited inside an MRI scanner room?",
    question_mr: "एम.आर.आय. (MRI) खोलीत लोखंडी वस्तू (जसे की कात्री, ऑक्सिजन सिलेंडर) आणण्यास कडक मनाई का असते?",
    options: [
      "(A) They absorb x-rays",
      "(B) The strong magnetic field turns them into dangerous high-speed projectiles",
      "(C) They cause dark shadows on films",
      "(D) They cause static electricity"
    ],
    options_mr: [
      "(A) त्या एक्स-रे शोषतात",
      "(B) प्रचंड चुंबकीय आकर्षणामुळे त्या वस्तू बंदुकीच्या गोळीप्रमाणे मशीनकडे खेचल्या जाऊन प्राणघातक अपघात होऊ शकतो",
      "(C) त्यामुळे फिल्मवर डाग पडतात",
      "(D) त्यामुळे स्थिर वीज निर्माण होते"
    ],
    correct_answer: "(B) The strong magnetic field turns them into dangerous high-speed projectiles",
    correct_answer_mr: "(B) प्रचंड चुंबकीय आकर्षणामुळे त्या वस्तू बंदुकीच्या गोळीप्रमाणे मशीनकडे खेचल्या जाऊन प्राणघातक अपघात होऊ शकतो",
    explanation: "The powerful static magnetic field in MRI continues 24/7 and violently attracts any ferromagnetic materials (missile/projectile effect).",
    explanation_mr: "एम.आर.आय. चे चुंबकीय क्षेत्र २४ तास सुरू असते, त्यामुळे लोखंडी वस्तू वेगाने खेचल्या जाऊन मोठा अपघात होऊ शकतो (Missile Effect).",
    source_page: 240,
    difficulty: 'easy'
  },
  {
    id: 31,
    category: 'Marathi Language (मराठी भाषा)',
    section: 'marathi',
    question: "'प्रयोगाचे मुख्य तीन प्रकार कोणते आहेत?'",
    question_mr: "'प्रयोगाचे मुख्य तीन प्रकार कोणते आहेत?'",
    options: [
      "(A) कर्तरी, कर्मणी, भावे",
      "(B) प्रथम, द्वितीय, तृतीय",
      "(C) वर्तमान, भूत, भविष्य",
      "(D) नाम, सर्वनाम, विशेषण"
    ],
    options_mr: [
      "(A) कर्तरी, कर्मणी, भावे",
      "(B) प्रथम, द्वितीय, तृतीय",
      "(C) वर्तमान, भूत, भविष्य",
      "(D) नाम, सर्वनाम, विशेषण"
    ],
    correct_answer: "(A) कर्तरी, कर्मणी, भावे",
    correct_answer_mr: "(A) कर्तरी, कर्मणी, भावे",
    explanation: "मराठी व्याकरणात प्रयोगाचे मुख्य ३ प्रकार पडतात: १. कर्तरी प्रयोग, २. कर्मणी प्रयोग, ३. भावे प्रयोग.",
    explanation_mr: "मराठी व्याकरणात प्रयोगाचे मुख्य ३ प्रकार पडतात: १. कर्तरी प्रयोग, २. कर्मणी प्रयोग, ३. भावे प्रयोग.",
    source_page: 8,
    difficulty: 'easy'
  },
  {
    id: 32,
    category: 'English Language',
    section: 'english',
    question: "Identify the correct Antonym of the word: 'TRANSPARENT'",
    question_mr: "'TRANSPARENT' (पारदर्शक) या शब्दाचा योग्य विरुद्धार्थी शब्द (Antonym) ओळखा:",
    options: [
      "(A) Clear",
      "(B) Opaque",
      "(C) Luminous",
      "(D) Translucent"
    ],
    options_mr: [
      "(A) क्लिअर (स्पष्ट)",
      "(B) ओपेक (अपारदर्शक / Opaque)",
      "(C) ल्युमिनस (तेजस्वी)",
      "(D) ट्रान्सलुसंट (अर्ध-पारदर्शक)"
    ],
    correct_answer: "(B) Opaque",
    correct_answer_mr: "(B) ओपेक (अपारदर्शक / Opaque)",
    explanation: "Transparent means allowing light to pass through so objects behind can be distinctly seen. Its direct opposite is Opaque.",
    explanation_mr: "Transparent म्हणजे आरपार दिसणारे (पारदर्शक). त्याचा विरुद्धार्थी शब्द Opaque म्हणजे अपारदर्शक.",
    source_page: 15,
    difficulty: 'easy'
  },
  {
    id: 33,
    category: 'General Knowledge (सामान्य ज्ञान)',
    section: 'gk',
    question: "Where is the headquarters of Atomic Energy Regulatory Board (AERB) located in India?",
    question_mr: "भारतातील अणुऊर्जा नियामक मंडळाचे (AERB) मुख्यालय कोठे आहे?",
    options: [
      "(A) New Delhi",
      "(B) Mumbai (Maharashtra)",
      "(C) Bengaluru",
      "(D) Hyderabad"
    ],
    options_mr: [
      "(A) नवी दिल्ली",
      "(B) मुंबई (महाराष्ट्र)",
      "(C) बंगळुरू",
      "(D) हैदराबाद"
    ],
    correct_answer: "(B) Mumbai (Maharashtra)",
    correct_answer_mr: "(B) मुंबई (महाराष्ट्र)",
    explanation: "AERB was formed on November 15, 1983, and its headquarters are located in Anushaktinagar, Mumbai, Maharashtra.",
    explanation_mr: "AERB ची स्थापना १५ नोव्हेंबर १९८३ रोजी झाली असून त्याचे मुख्यालय अणुशक्तीनगर, मुंबई येथे आहे.",
    source_page: 50,
    difficulty: 'easy'
  },
  {
    id: 34,
    category: 'Logical Ability & Mathematics (बौद्धिक चाचणी)',
    section: 'logical',
    question: "A train running at a speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    question_mr: "ताशी ६० किमी वेगाने जाणारी आगगाडी एका खांबाला ९ सेकंदात ओलांडते, तर त्या गाडीची लांबी किती मीटर असेल?",
    options: [
      "(A) 120 metres",
      "(B) 150 metres",
      "(C) 180 metres",
      "(D) 200 metres"
    ],
    options_mr: [
      "(A) १२० मीटर",
      "(B) १५० मीटर",
      "(C) १८० मीटर",
      "(D) २०० मीटर"
    ],
    correct_answer: "(B) 150 metres",
    correct_answer_mr: "(B) १५० मीटर",
    explanation: "Speed in m/s = 60 * (5/18) = 50/3 m/s. Length = Speed * Time = (50/3) * 9 = 150 metres.",
    explanation_mr: "वेग (मी/से) = ६० × ५/१८ = ५०/३ मी/से. गाडीची लांबी = वेग × वेळ = (५०/३) × ९ = १५० मीटर.",
    source_page: 72,
    difficulty: 'medium'
  },
  // =========================================================================
  // D.A. SAIA RADIOGRAPHY PREP (5TH EDITION) - CHAPTER-WISE BOOK QUESTION BANK
  // =========================================================================
  {
    id: 35,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "The ASRT document that defines the radiographer's role and scope of clinical practice is the:",
    question_mr: "रेडिओग्राफरची भूमिका आणि नैदानिक कार्यक्षेत्र परिभाषित करणारा ASRT चा मुख्य दस्तऐवज कोणता आहे?",
    options: [
      "(A) Standards of Ethics",
      "(B) Practice Standards",
      "(C) Standard of Care",
      "(D) Legal Standards"
    ],
    options_mr: [
      "(A) स्टँडर्ड्स ऑफ एथिक्स",
      "(B) प्रॅक्टिस स्टँडर्ड्स (Practice Standards)",
      "(C) स्टँडर्ड ऑफ केअर",
      "(D) लीगल स्टँडर्ड्स"
    ],
    correct_answer: "(B) Practice Standards",
    correct_answer_mr: "(B) प्रॅक्टिस स्टँडर्ड्स (Practice Standards)",
    explanation: "The ASRT Practice Standards provide a legal role definition and identify Clinical, Quality, and Professional Standards of practice for radiographers.",
    explanation_mr: "ASRT प्रॅक्टिस स्टँडर्ड्स रेडिओग्राफरच्या कायदेशीर व व्यावसायिक भूमिकेचे व कार्यक्षेत्राचे स्पष्ट निकष ठरवतात.",
    source_page: 13,
    difficulty: 'easy'
  },
  {
    id: 36,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "Which federal legislation guarantees the confidentiality and security of all patient health information?",
    question_mr: "रुग्णाच्या आरोग्यविषयक माहितीची गोपनीयता व सुरक्षितता निश्चित करणारा कायदा कोणता आहे?",
    options: [
      "(A) HSS",
      "(B) HIPAA",
      "(C) MQSA",
      "(D) OSHA"
    ],
    options_mr: [
      "(A) HSS",
      "(B) HIPAA (Health Insurance Portability and Accountability Act)",
      "(C) MQSA",
      "(D) OSHA"
    ],
    correct_answer: "(B) HIPAA",
    correct_answer_mr: "(B) HIPAA (Health Insurance Portability and Accountability Act)",
    explanation: "HIPAA (1996) regulations mandate protection and confidentiality of all medical records and individually identifiable health information.",
    explanation_mr: "HIPAA कायदा वैद्यकीय नोंदी आणि रुग्णाच्या खाजगी माहितीचे रक्षण करणे व गोपनीयता राखणे अनिवार्य करतो.",
    source_page: 13,
    difficulty: 'easy'
  },
  {
    id: 37,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "The legal doctrine 'Res ipsa loquitur' translates to:",
    question_mr: "कायदेशीर सिद्धांत 'Res ipsa loquitur' चा अर्थ काय होतो?",
    options: [
      "(A) Let the master answer",
      "(B) The thing speaks for itself",
      "(C) Buyer beware",
      "(D) Cause of injury"
    ],
    options_mr: [
      "(A) मालकाने उत्तर द्यावे (Respondeat superior)",
      "(B) घटना स्वतःच तिची साक्ष देते (The thing speaks for itself)",
      "(C) ग्राहकाने काळजी घ्यावी",
      "(D) दुखापतीचे मूळ कारण"
    ],
    correct_answer: "(B) The thing speaks for itself",
    correct_answer_mr: "(B) घटना स्वतःच तिची साक्ष देते (The thing speaks for itself)",
    explanation: "'Res ipsa loquitur' means 'the thing speaks for itself'. It applies when an injury is obvious and would not have occurred without negligence (e.g. operating on the wrong limb).",
    explanation_mr: "'Res ipsa loquitur' म्हणजे स्पष्ट निष्काळजीपणामुळे घडलेली दुर्घटना स्वतःच सिद्ध होते (उदा. चुकीच्या अवयवाचा एक्स-रे किंवा शस्त्रक्रिया करणे).",
    source_page: 7,
    difficulty: 'medium'
  },
  {
    id: 38,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which body pulse point is evaluated using a stethoscope at the apex of the heart?",
    question_mr: "हृदयाच्या टोकावर (Apex) स्टेथॉस्कोप ठेवून मोजल्या जाणाऱ्या नाडीच्या ठोक्यांना काय म्हणतात?",
    options: [
      "(A) Radial pulse",
      "(B) Carotid pulse",
      "(C) Apical pulse",
      "(D) Popliteal pulse"
    ],
    options_mr: [
      "(A) रेडिअल पल्स (Radial)",
      "(B) कॅरोटिड पल्स (Carotid)",
      "(C) एपिकल पल्स (Apical pulse)",
      "(D) पॉपलिटिअल पल्स (Popliteal)"
    ],
    correct_answer: "(C) Apical pulse",
    correct_answer_mr: "(C) एपिकल पल्स (Apical pulse)",
    explanation: "The apical pulse is directly listened to over the apex of the heart using a stethoscope, whereas radial and carotid pulses are felt peripherally by palpation.",
    explanation_mr: "एपिकल पल्स थेट स्टेथॉस्कोपच्या साह्याने हृदयाच्या एपेक्स भागावर ऐकून मोजली जाते.",
    source_page: 21,
    difficulty: 'easy'
  },
  {
    id: 39,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "What is the single most effective means of preventing the spread of infectious microorganisms in a hospital?",
    question_mr: "रुग्णालयात संसर्गजन्य सूक्ष्मजीवांचा प्रसार रोखण्याचा सर्वात प्रभावी आणि मुख्य उपाय कोणता?",
    options: [
      "(A) Wearing sterile gloves",
      "(B) Proper handwashing",
      "(C) Wearing face masks",
      "(D) Room fumigation"
    ],
    options_mr: [
      "(A) निर्जंतुक ग्लोव्हज वापरणे",
      "(B) योग्य पद्धतीने हात धुणे (Proper Handwashing)",
      "(C) मास्क वापरणे",
      "(D) खोलीचे निर्जंतुकीकरण करणे"
    ],
    correct_answer: "(B) Proper handwashing",
    correct_answer_mr: "(B) योग्य पद्धतीने हात धुणे (Proper Handwashing)",
    explanation: "Proper handwashing before and after every patient contact is universally acknowledged as the single most effective aseptic practice.",
    explanation_mr: "प्रत्येक रुग्णाला तपासण्यापूर्वी व नंतर साबण आणि पाण्याने स्वच्छ हात धुणे हा संसर्ग रोखण्याचा सर्वोत्तम उपाय आहे.",
    source_page: 33,
    difficulty: 'easy'
  },
  {
    id: 40,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "A hospital-acquired infection that a patient contracts during medical care is termed a:",
    question_mr: "रुग्णालयात उपचारादरम्यान होणाऱ्या संसर्गाला (Hospital-acquired infection) काय म्हणतात?",
    options: [
      "(A) Idiopathic infection",
      "(B) Nosocomial infection",
      "(C) Iatrogenic trauma",
      "(D) Opportunistic disease"
    ],
    options_mr: [
      "(A) इडिओपॅथिक संसर्ग",
      "(B) नोसोकोमियल इन्फेक्शन (Nosocomial infection)",
      "(C) आयॅट्रोजेनिक इजा",
      "(D) ऑपर्च्युनिस्टिक आजार"
    ],
    correct_answer: "(B) Nosocomial infection",
    correct_answer_mr: "(B) नोसोकोमियल इन्फेक्शन (Nosocomial infection)",
    explanation: "Nosocomial infections are hospital-acquired infections (e.g. Urinary Tract Infections from catheters) that develop during a patient's stay.",
    explanation_mr: "रुग्णालयात भरती असताना रुग्णाला होणाऱ्या नवीन संसर्गाला नोसोकोमियल इन्फेक्शन (Nosocomial Infection) म्हणतात.",
    source_page: 35,
    difficulty: 'easy'
  },
  {
    id: 41,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "What is the recommended height for hanging an intravenous (IV) infusion bag or bottle above the vein?",
    question_mr: "आय.व्ही. (IV) सलाईनची बाटली रुग्णाच्या शिरेपासून (Vein) किती उंचीवर टांगलेली असावी?",
    options: [
      "(A) 6 to 12 inches",
      "(B) 18 to 24 inches",
      "(C) 36 to 48 inches",
      "(D) Below table level"
    ],
    options_mr: [
      "(A) ६ ते १२ इंच",
      "(B) १८ ते २४ इंच (18 to 24 inches)",
      "(C) ३६ ते ४८ इंच",
      "(D) टेबलच्या खाली"
    ],
    correct_answer: "(B) 18 to 24 inches",
    correct_answer_mr: "(B) १८ ते २४ इंच (18 to 24 inches)",
    explanation: "IV solutions should be elevated 18 to 24 inches above the vein level to maintain proper gravity flow and prevent blood backflow into tubing.",
    explanation_mr: "सलाईनचा योग्य प्रवाह सुरू राहण्यासाठी व रक्ताचा उलटा प्रवाह रोखण्यासाठी IV बॉटल शिरेपेक्षा १८ ते २४ इंच वर असावी.",
    source_page: 50,
    difficulty: 'medium'
  },
  {
    id: 42,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In standard radiographic positioning, which body plane divides the body into equal left and right halves?",
    question_mr: "मानवी शरीराचे समान डाव्या आणि उजव्या भागात विभाजन करणाऱ्या काल्पनिक प्रतलाला (Plane) काय म्हणतात?",
    options: [
      "(A) Midcoronal plane",
      "(B) Midsagittal plane",
      "(C) Transverse plane",
      "(D) Horizontal plane"
    ],
    options_mr: [
      "(A) मिडकोरोनल प्लेन",
      "(B) मिडसॅजिटल प्लेन (Midsagittal Plane)",
      "(C) ट्रान्सव्हर्स प्लेन",
      "(D) हॉरिझॉन्टल प्लेन"
    ],
    correct_answer: "(B) Midsagittal plane",
    correct_answer_mr: "(B) मिडसॅजिटल प्लेन (Midsagittal Plane)",
    explanation: "The midsagittal plane (MSP) passes vertically through the midline of the body, dividing it into equal left and right halves.",
    explanation_mr: "मिडसॅजिटल प्लेन (MSP) हे शरीराच्या मध्यभागातून जाऊन डावे व उजवे असे समान दोन भाग करते.",
    source_page: 74,
    difficulty: 'easy'
  },
  {
    id: 43,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "A hypersthenic patient with a massive, heavy body build typically has a stomach located:",
    question_mr: "हाडपेर मोठा आणि वजनदार असणाऱ्या हायपरस्थेनिक (Hypersthenic) रुग्णाचे पोट (Stomach) कोठे स्थित असते?",
    options: [
      "(A) Low and medial, near the pelvis",
      "(B) High, transverse, and lateral",
      "(C) Vertical and long (fish-hook shape)",
      "(D) In the right lower quadrant"
    ],
    options_mr: [
      "(A) खाली आणि मध्यभागी",
      "(B) वरच्या बाजूला, आडवे आणि बाजूला (High, Transverse & Lateral)",
      "(C) उभे आणि लांब",
      "(D) उजव्या खालच्या भागात"
    ],
    correct_answer: "(B) High, transverse, and lateral",
    correct_answer_mr: "(B) वरच्या बाजूला, आडवे आणि बाजूला (High, Transverse & Lateral)",
    explanation: "In hypersthenic body habitus, the diaphragm is high, and abdominal viscera (stomach, gallbladder) are situated high, transverse, and lateral.",
    explanation_mr: "हायपरस्थेनिक शरीराच्या बांध्यामध्ये छाती आखूड व पोट वरच्या बाजूला आडव्या स्थितीत (High & Transverse) असते.",
    source_page: 74,
    difficulty: 'medium'
  },
  {
    id: 44,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Anterosuperior iliac spine (ASIS) is an essential surface landmark corresponding to which vertebral level?",
    question_mr: "Anterosuperior iliac spine (ASIS) हा महत्वाचा लँडमार्क कोणत्या मणक्याच्या (Vertebra) स्तरावर असतो?",
    options: [
      "(A) T10",
      "(B) L3-L4",
      "(C) L4",
      "(D) S1-S2"
    ],
    options_mr: [
      "(A) T10",
      "(B) L3-L4",
      "(C) L4 (Iliac crest)",
      "(D) S1-S2"
    ],
    correct_answer: "(D) S1-S2",
    correct_answer_mr: "(D) S1-S2",
    explanation: "ASIS corresponds to the S1-S2 vertebral level. The iliac crest corresponds to L4, and the umbilicus to the L3-L4 interspace.",
    explanation_mr: "ASIS चा स्तर सेक्रल मणक्यांच्या (S1-S2) पातळीवर असतो, तर इलिॲक क्रेस्ट L4 स्तरावर असतो.",
    source_page: 76,
    difficulty: 'medium'
  },
  {
    id: 45,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which projection of the wrist best demonstrates the scaphoid (navicular) bone free of foreshortening?",
    question_mr: "मनगटाचे स्कॅफॉईड हाड (Scaphoid/Navicular) स्पष्ट व न आखडता दिसण्यासाठी कोणती पोझिशन वापरतात?",
    options: [
      "(A) PA Wrist in Radial Deviation",
      "(B) PA Wrist in Ulnar Deviation (Stecher Method)",
      "(C) Lateral Wrist",
      "(D) Gaynor-Hart Carpal Tunnel view"
    ],
    options_mr: [
      "(A) रेडिअल डेव्हिएशन",
      "(B) अल्नार डेव्हिएशन - Stecher Method (PA Wrist with Ulnar Deviation)",
      "(C) लॅटरल व्ह्यू",
      "(D) कार्पल टनेल व्ह्यू"
    ],
    correct_answer: "(B) PA Wrist in Ulnar Deviation (Stecher Method)",
    correct_answer_mr: "(B) अल्नार डेव्हिएशन - Stecher Method (PA Wrist with Ulnar Deviation)",
    explanation: "Ulnar deviation or Stecher method places the long axis of the scaphoid parallel to the IR, elongating it and opening intercarpal joint spaces.",
    explanation_mr: "अल्नार डेव्हिएशन पोझिशनमध्ये स्कॅफॉईड हाड एक्स-रे प्लेटला समांतर राहून त्याचा फ्रॅक्चर स्पष्ट दिसतो.",
    source_page: 101,
    difficulty: 'medium'
  },
  {
    id: 46,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "To open up the proximal tibiofibular joint free of superimposition, the knee should be placed in a:",
    question_mr: "गुडघ्याचा वरचा टिबिओफिभ्युलर सांधा (Proximal Tibiofibular joint) ओव्हरलॅप न होता स्पष्ट दिसण्यासाठी कोणती पोझिशन घेतात?",
    options: [
      "(A) 45° AP External Oblique",
      "(B) 45° AP Internal (Medial) Oblique",
      "(C) True AP Projection",
      "(D) 90° Lateral Projection"
    ],
    options_mr: [
      "(A) ४५° एक्सटर्नल ऑब्लीक",
      "(B) ४५° इंटर्नल/मेडिकल ऑब्लीक (45° Medial Oblique Knee)",
      "(C) एपी व्ह्यू",
      "(D) ९०° लॅटरल व्ह्यू"
    ],
    correct_answer: "(B) 45° AP Internal (Medial) Oblique",
    correct_answer_mr: "(B) ४५° इंटर्नल/मेडिकल ऑब्लीक (45° Medial Oblique Knee)",
    explanation: "45° internal/medial oblique rotation of the knee separates the head and neck of the fibula from the tibia, opening the proximal tibiofibular joint.",
    explanation_mr: "गुडघ्याची ४५° मेडिकल ऑब्लीक पोझिशन घेतल्यामुळे फिब्युलाचे डोके टिबियापासून मोकळे होऊन सांधा स्पष्ट दिसतो.",
    source_page: 122,
    difficulty: 'medium'
  },
  {
    id: 47,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The 'Scotty Dog' appearance in oblique lumbar spine radiographs represents the apophyseal (zygapophyseal) joints. The dog's 'eye' corresponds to the:",
    question_mr: "कमरेच्या मणक्यांच्या (Lumbar Spine) ऑब्लीक एक्स-रे मध्ये दिसणाऱ्या 'Scotty Dog' चित्रातील कुत्र्याचा डोळा (Eye) कोणत्या भागाचे प्रतिनिधित्व करतो?",
    options: [
      "(A) Superior articular process",
      "(B) Transverse process",
      "(C) Pedicle",
      "(D) Pars interarticularis"
    ],
    options_mr: [
      "(A) सुपीरियर आर्टिक्युलर प्रोसेस (काण/Ear)",
      "(B) ट्रान्सव्हर्स प्रोसेस (नाक/Nose)",
      "(C) पेडीकल - Pedicle (डोळा/Eye)",
      "(D) पार्स इंटरआर्टिक्युलारिस (मान/Neck)"
    ],
    correct_answer: "(C) Pedicle",
    correct_answer_mr: "(C) पेडीकल - Pedicle (डोळा/Eye)",
    explanation: "In Scotty Dog anatomy: Eye = Pedicle, Nose = Transverse Process, Ear = Superior Articular Process, Neck = Pars Interarticularis, Front Foot = Inferior Articular Process.",
    explanation_mr: "स्काॅटी डॉग रचनेत: डोळा = पेडीकल (Pedicle), नाक = ट्रान्सव्हर्स प्रोसेस, कान = सुपीरियर आर्टिक्युलर प्रोसेस, मान = पार्स इंटरआर्टिक्युलारिस.",
    source_page: 145,
    difficulty: 'hard'
  },
  {
    id: 48,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "In diagnostic X-ray energy ranges, which radiation interaction with matter is primarily responsible for subject contrast and patient dose?",
    question_mr: "निदानक्षम क्ष-किरण ऊर्जेमध्ये पदार्थाशी होणारी कोणती प्रक्रिया इमेज मधील कॉन्ट्रास्ट आणि रुग्णाला मिळणाऱ्या डोससाठी कारणीभूत असते?",
    options: [
      "(A) Compton Scatter",
      "(B) Photoelectric Effect",
      "(C) Coherent Scatter",
      "(D) Pair Production"
    ],
    options_mr: [
      "(A) कॉम्प्टन स्कॅटर (Compton Scatter)",
      "(B) फोटोइलेक्ट्रिक परिणाम (Photoelectric Effect)",
      "(C) कोहेरंट स्कॅटर",
      "(D) पेअर प्रोडक्शन"
    ],
    correct_answer: "(B) Photoelectric Effect",
    correct_answer_mr: "(B) फोटोइलेक्ट्रिक परिणाम (Photoelectric Effect)",
    explanation: "In the photoelectric effect, low-energy photons undergo total absorption in inner-shell electrons, generating subject contrast and contributing to patient dose.",
    explanation_mr: "फोटोइलेक्ट्रिक प्रभावात क्ष-किरण फोटॉन पूर्णपणे शोषले जातात, ज्यामुळे हाडे व मऊ उतींमधील फरक (Subject Contrast) दिसतो व रुग्णाला डोस मिळतो.",
    source_page: 233,
    difficulty: 'medium'
  },
  {
    id: 49,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "According to radiation protection standards, the linear nonthreshold dose-response relationship implies that:",
    question_mr: "रेडिएशन सुरक्षेच्या नियमांनुसार 'Linear Nonthreshold' समीकरणाचा अर्थ काय होतो?",
    options: [
      "(A) There is a safe threshold dose below which no damage occurs",
      "(B) Biological response is strictly proportional to dose with no safe lower limit",
      "(C) High doses produce zero biological effect",
      "(D) Biological damage decreases as dose increases"
    ],
    options_mr: [
      "(A) एका विशिष्ट मर्यादेखाली रेडिएशनचा कोणताही धोका नसतो",
      "(B) रेडिएशनचा कोणताही डोस सुरक्षित नसून मिळणारा धोका डोसच्या प्रमाणात वाढतो (No safe dose)",
      "(C) जास्त डोसने कोणताही फरक पडत नाही",
      "(D) डोस वाढल्यास धोका कमी होतो"
    ],
    correct_answer: "(B) Biological response is strictly proportional to dose with no safe lower limit",
    correct_answer_mr: "(B) रेडिएशनचा कोणताही डोस सुरक्षित नसून मिळणारा धोका डोसच्या प्रमाणात वाढतो (No safe dose)",
    explanation: "Linear nonthreshold assumes that any dose, no matter how small, carries a proportional biological risk (stochastic effect).",
    explanation_mr: "लीनियर नॉन-थ्रेशोल्ड मॉडेलनुसार रेडिएशनचा अगदी लहान डोस देखील सुरक्षित नसतो (कोणत्याही डोसमुळे धोका उद्भवू शकतो).",
    source_page: 236,
    difficulty: 'medium'
  },
  {
    id: 50,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "Which type of blood cell is considered the MOST radiosensitive in the human body?",
    question_mr: "मानवी शरीरातील कोणती पेशी रेडिएशनसाठी सर्वात जास्त संवेदनशील (Radiosensitive) मानली जाते?",
    options: [
      "(A) Erythrocyte (Red Blood Cell)",
      "(B) Lymphocyte (White Blood Cell)",
      "(C) Platelet (Thrombocyte)",
      "(D) Neutrophil"
    ],
    options_mr: [
      "(A) एरिथ्रोसाईट (तांबडी पेशी)",
      "(B) लिम्फोसाईट - Lymphocyte (पांढरी पेशी)",
      "(C) प्लेटलेट",
      "(D) न्यूट्रोफिल"
    ],
    correct_answer: "(B) Lymphocyte (White Blood Cell)",
    correct_answer_mr: "(B) लिम्फोसाईट - Lymphocyte (पांढरी पेशी)",
    explanation: "Lymphocytes are the most radiosensitive somatic cells in the human body and show rapid depletion even at very low radiation doses (0.25 Gy).",
    explanation_mr: "लिम्फोसाईट ही पांढरी पेशी अत्यंत संवेदनशील असते आणि कमी डोसमध्येही तिची संख्या वेगाने घटते.",
    source_page: 240,
    difficulty: 'easy'
  },
  {
    id: 51,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "What is the annual occupational effective dose equivalent limit for radiation workers recommended by NCRP?",
    question_mr: "रेडिएशन कर्मचाऱ्यांसाठी NCRP ने ठरवून दिलेली वार्षिक कमाल सुरक्षित मर्यादा (Annual Occupational Limit) किती आहे?",
    options: [
      "(A) 1 mSv (0.1 rem)",
      "(B) 5 mSv (0.5 rem)",
      "(C) 50 mSv (5 rem)",
      "(D) 500 mSv (50 rem)"
    ],
    options_mr: [
      "(A) १ mSv",
      "(B) ५ mSv",
      "(C) ५० mSv / ५ rem (50 mSv per year)",
      "(D) ५०० mSv"
    ],
    correct_answer: "(C) 50 mSv (5 rem)",
    correct_answer_mr: "(C) ५० mSv / ५ rem (50 mSv per year)",
    explanation: "NCRP Report No. 116 sets the annual occupational effective dose limit at 50 mSv (5 rem or 5000 mrem) per year for adult radiation workers.",
    explanation_mr: "NCRP नियमांनुसार व्यावसायिक रेडिएशन कर्मचाऱ्यांसाठी वार्षिक मर्यादा ५० mSv (५ rem) निश्चित केलेली आहे.",
    source_page: 292,
    difficulty: 'easy'
  },
  {
    id: 52,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "According to the 15% Rule, increasing the kVp by 15% will have the same effect on image density as:",
    question_mr: "१५% च्या नियमानुसार (15% Rule), kVp १५% ने वाढवल्यास इमेजच्या डेंसिटीवर काय परिणाम होतो?",
    options: [
      "(A) Halving the mAs",
      "(B) Doubling the mAs",
      "(C) Increasing SID by 15%",
      "(D) Quadrupling the mAs"
    ],
    options_mr: [
      "(A) mAs अर्धा करणे",
      "(B) mAs दुप्पट करणे (Doubling the mAs)",
      "(C) SID १५% वाढवणे",
      "(D) mAs चौपट करणे"
    ],
    correct_answer: "(B) Doubling the mAs",
    correct_answer_mr: "(B) mAs दुप्पट करणे (Doubling the mAs)",
    explanation: "The 15% rule states that an increase in kVp by 15% doubles radiographic exposure/density, equivalent to doubling the mAs.",
    explanation_mr: "१५% नियमानुसार kVp १५% ने वाढवल्यास एक्स-रे एक्पोजर दुप्पट होतो, जो mAs दुप्पट करण्यासारखाच परिणाम देतो.",
    source_page: 331,
    difficulty: 'easy'
  },
  {
    id: 53,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "If an exposure of 40 mR/min is recorded at 52 inches SID, what will be the exposure rate if the distance is reduced to 44 inches SID?",
    question_mr: "जर ५२ इंच अंतरावर एक्सपोजर दर ४० mR/min असेल, तर अंतर कमी करून ४४ इंच केल्यास नवीन एक्सपोजर दर किती होईल?",
    options: [
      "(A) 28.8 mR/min",
      "(B) 55.8 mR/min",
      "(C) 80 mR/min",
      "(D) 20 mR/min"
    ],
    options_mr: [
      "(A) २८.८ mR/min",
      "(B) ५५.८ mR/min (Inverse Square Law)",
      "(C) ८० mR/min",
      "(D) २० mR/min"
    ],
    correct_answer: "(B) 55.8 mR/min",
    correct_answer_mr: "(B) ५५.८ mR/min (Inverse Square Law)",
    explanation: "Using the Inverse Square Law: I1/I2 = (D2/D1)². 40/x = (44/52)² = 1936/2704. x = (40 * 2704) / 1936 = 55.86 mR/min.",
    explanation_mr: "व्यस्त वर्ग नियमानुसार (Inverse Square Law): अंतर कमी झाल्यामुळे रेडिएशनची तीव्रता वाढून ५५.८ mR/min होते.",
    source_page: 330,
    difficulty: 'hard'
  },
  {
    id: 54,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "Due to the Anode Heel Effect, the intensity of the X-ray beam is greatest toward the:",
    question_mr: "ॲनोड हील इफेक्टमुळे (Anode Heel Effect) एक्स-रे बीमची तीव्रता कोणत्या बाजूला सर्वात जास्त असते?",
    options: [
      "(A) Anode end of the tube",
      "(B) Cathode end of the tube",
      "(C) Central ray axis",
      "(D) Equal at both ends"
    ],
    options_mr: [
      "(A) ॲनोड बाजूला",
      "(B) कॅथोड बाजूला (Cathode End)",
      "(C) मध्यवर्ती अक्षावर",
      "(D) दोन्ही बाजूला समान"
    ],
    correct_answer: "(B) Cathode end of the tube",
    correct_answer_mr: "(B) कॅथोड बाजूला (Cathode End)",
    explanation: "Because X-rays are absorbed by the heel of the target, beam intensity is higher at the cathode side and lower at the anode side.",
    explanation_mr: "ॲनोडच्या टार्गेटवर काही एक्स-रे शोषले गेल्याने कॅथोड बाजूला एक्स-रे ची तीव्रता जास्त असते. म्हणूनच जाड भाग कॅथोडखाली ठेवतात.",
    source_page: 312,
    difficulty: 'easy'
  },
  {
    id: 55,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "In Computed Radiography (CR), the active photostimulable phosphor material layer inside the image plate is made of:",
    question_mr: "संगणकीकृत रेडिओोग्राफी (CR) च्या इमेज प्लेटमध्ये असणारा फोटोस्टिम्युलेबल फॉस्फर (PSP) थर कशाचा बनलेला असतो?",
    options: [
      "(A) Calcium tungstate",
      "(B) Europium-doped barium fluorohalide (BaFX:Eu2+)",
      "(C) Cesium iodide",
      "(D) Silver bromide"
    ],
    options_mr: [
      "(A) कॅल्शियम टंगस्टेट",
      "(B) युरोपियम-डोप्ड बेरियम फ्लोरोहॅलाईड (BaFX:Eu2+)",
      "(C) सिझियम आयोडाईड",
      "(D) सिल्व्हर ब्रोमाईड"
    ],
    correct_answer: "(B) Europium-doped barium fluorohalide (BaFX:Eu2+)",
    correct_answer_mr: "(B) युरोपियम-डोप्ड बेरियम फ्लोरोहॅलाईड (BaFX:Eu2+)",
    explanation: "The CR photostimulable phosphor (PSP) screen contains europium-activated barium fluorohalide crystals that store latent x-ray energy.",
    explanation_mr: "सी.आर. प्लेटमधील फोटोस्टिम्युलेबल फॉस्फर (PSP) हा बेरियम फ्लोरोहॅलाईड आणि युरोपियमचा बनलेला असतो.",
    source_page: 381,
    difficulty: 'medium'
  },
  {
    id: 56,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "What is the formula to calculate Heat Units (HU) produced during an exposure on a 3-phase 12-pulse X-ray generator?",
    question_mr: "३-फेज १२-पल्स एक्स-रे जनरेटरवर तयार होणारे हीट युनिट्स (Heat Units - HU) मोजण्याचे सूत्र कोणते?",
    options: [
      "(A) HU = mA × sec × kVp",
      "(B) HU = mA × sec × kVp × 1.35",
      "(C) HU = mA × sec × kVp × 1.41",
      "(D) HU = mA × sec × kVp × 2.0"
    ],
    options_mr: [
      "(A) HU = mA × sec × kVp (1-Phase)",
      "(B) HU = mA × sec × kVp × 1.35 (3-Phase 6-Pulse)",
      "(C) HU = mA × sec × kVp × 1.41 (3-Phase 12-Pulse)",
      "(D) HU = mA × sec × kVp × 2.0"
    ],
    correct_answer: "(C) HU = mA × sec × kVp × 1.41",
    correct_answer_mr: "(C) HU = mA × sec × kVp × 1.41 (3-Phase 12-Pulse)",
    explanation: "For 3-phase 12-pulse equipment, multiply mAs × kVp × 1.41 to account for constant voltage waveform and increased thermal efficiency.",
    explanation_mr: "३-फेज १२-पल्स जनरेटरसाठी गुणांक १.४१ वापरला जातो (१-फेजसाठी १.०० व ३-फेज ६-पल्ससाठी १.३५).",
    source_page: 466,
    difficulty: 'medium'
  },
  {
    id: 57,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "Which component of an X-ray tube filament circuit controls the tube current (mA)?",
    question_mr: "एक्स-रे ट्युबच्या फिलामेंट सर्किटमधील कोणता घटक ट्युब करंट (mA) नियंत्रित करतो?",
    options: [
      "(A) Autotransformer",
      "(B) Rheostat or variable resistor",
      "(C) Step-up transformer",
      "(D) Rectifier bridge"
    ],
    options_mr: [
      "(A) ऑटो-ट्रान्सफॉर्मर",
      "(B) रिओस्टॅट किंवा व्हेरिएबल रेझिस्टर (Rheostat / Variable Resistor)",
      "(C) स्टेप-अप ट्रान्सफॉर्मर",
      "(D) रेक्टिफायर ब्रिज"
    ],
    correct_answer: "(B) Rheostat or variable resistor",
    correct_answer_mr: "(B) रिओस्टॅट किंवा व्हेरिएबल रेझिस्टर (Rheostat / Variable Resistor)",
    explanation: "A rheostat (variable resistor) in the filament circuit regulates current to heat the filament wire, controlling thermionic emission and mA output.",
    explanation_mr: "फिलामेंट सर्किटमधील रिओस्टॅट (Rheostat) फिलामेंट गरम करण्यासाठी जाणाऱ्या प्रवाहाला नियंत्रित करतो, ज्यामुळे थर्मल उत्सर्जन आणि mA ठरते.",
    source_page: 472,
    difficulty: 'medium'
  },
  {
    id: 58,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "What is the primary barrier thickness requirement for X-ray room walls according to NCRP Report No. 102?",
    question_mr: "NCRP रिपोर्ट क्र. १०२ नुसार एक्स-रे रुमच्या मुख्य भिंतींसाठी (Primary Barrier) किती जाडीचे शिसे (Lead) असणे आवश्यक आहे?",
    options: [
      "(A) 0.25 mm Lead",
      "(B) 0.5 mm Lead",
      "(C) 1.5 mm (1/16 inch) Lead",
      "(D) 3.0 mm Lead"
    ],
    options_mr: [
      "(A) ०.२५ मिमी लेड",
      "(B) ०.५ मिमी लेड",
      "(C) १.५ मिमी किंवा १/१६ इंच लेड (1.5 mm / 1/16 inch Lead)",
      "(D) ३.० मिमी लेड"
    ],
    correct_answer: "(C) 1.5 mm (1/16 inch) Lead",
    correct_answer_mr: "(C) १.५ मिमी किंवा १/१६ इंच लेड (1.5 mm / 1/16 inch Lead)",
    explanation: "Primary protective barriers that can be struck by the useful beam must consist of 1/16 inch (1.5 mm) lead equivalent extending 7 feet high from the floor.",
    explanation_mr: "प्राथमिक सुरक्षा भिंतींमध्ये (Primary Barriers) जमिनीपासून ७ फूट उंचीपर्यंत १.५ मिमी (१/१६ इंच) जाडीचे शिसे असणे बंधनकारक आहे.",
    source_page: 274,
    difficulty: 'easy'
  },
  {
    id: 59,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In thoracic radiography, the central ray for a standard PA Chest projection should enter at the level of:",
    question_mr: "छातीच्या प्रमाणित PA चेस्ट (PA Chest) एक्स-रे साठी सेंट्रल रे (Central Ray) कोणत्या मणक्याच्या स्तरावर केंद्रित करतात?",
    options: [
      "(A) T3 (Jugular notch)",
      "(B) T7 (Inferior angle of scapula)",
      "(C) T10 (Xiphoid tip)",
      "(D) L3 (Costal margin)"
    ],
    options_mr: [
      "(A) T3 (ज्युग्युलर नॉच)",
      "(B) T7 - स्कॅप्युलाचा खालचा टोक (Level of T7 / Inferior angle of Scapula)",
      "(C) T10 (झिफॉईड टिप)",
      "(D) L3"
    ],
    correct_answer: "(B) T7 (Inferior angle of scapula)",
    correct_answer_mr: "(B) T7 - स्कॅप्युलाचा खालचा टोक (Level of T7 / Inferior angle of Scapula)",
    explanation: "The central ray for a PA Chest enters perpendicular to T7, which corresponds to the inferior angle of the scapula.",
    explanation_mr: "PA चेस्ट प्रोजेक्शनसाठी सेंट्रल रे T7 मणक्याच्या स्तरावर (स्कॅप्युलाच्या खालच्या कोपऱ्याजवळ) मध्यभागी केंद्रित केला जातो.",
    source_page: 174,
    difficulty: 'easy'
  },
  {
    id: 60,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "Which oral or IV contrast agent is contraindicated if a patient has a suspected bowel perforation?",
    question_mr: "रुग्णाच्या आतड्याला छिद्र (Bowel Perforation) असल्याचा संशय असल्यास कोणते कॉन्ट्रास्ट माध्यम वापरणे पूर्णपणे निषिद्ध (Contraindicated) आहे?",
    options: [
      "(A) Water-soluble iodinated contrast (Gastrografin)",
      "(B) Barium sulfate suspension",
      "(C) Air or carbon dioxide",
      "(D) Normal saline"
    ],
    options_mr: [
      "(A) पाण्यात विरघळणारे आयोडीन कॉन्ट्रास्ट (Gastrografin)",
      "(B) बेरियम सल्फेट लिक्विड (Barium Sulfate Suspension)",
      "(C) हवा किंवा कार्बन डायऑक्साइड",
      "(D) नॉर्मल सलाईन"
    ],
    correct_answer: "(B) Barium sulfate suspension",
    correct_answer_mr: "(B) बेरियम सल्फेट लिक्विड (Barium Sulfate Suspension)",
    explanation: "Barium sulfate is non-absorbable and causes severe peritonitis if it leaks into the peritoneal cavity through a perforation. Water-soluble iodinated media must be used instead.",
    explanation_mr: "बेरियम सल्फेट शरीरात शोषले जात नाही. आतडे फुटलेले असल्यास ते पोटात पसरून गंभीर पेरिटोनाइटिस (Peritonitis) संसर्ग घडवून आणते. म्हणून अशा वेळी वॉटर-सोल्युबल कॉन्ट्रास्ट वापरतात.",
    source_page: 55,
    difficulty: 'medium'
  },
  {
    id: 61,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In cranial radiography, the 'Towne Method' (AP Axial) requires the central ray to be angled caudally at:",
    question_mr: "कवटीच्या (Skull) AP Axial (Towne Method) एक्स-रे मध्ये सेंट्रल रे (Central Ray) OML ला किती अंशात खाली (Caudad) कलवलेला असतो?",
    options: [
      "(A) 15° caudad",
      "(B) 30° caudad to OML (or 37° to IOML)",
      "(C) 45° caudad",
      "(D) 25° cephalad"
    ],
    options_mr: [
      "(A) १५° कॉडड",
      "(B) ३०° कॉडड OML ला (किंवा ३७° IOML ला)",
      "(C) ४५° कॉडड",
      "(D) २५° सेफॅलड"
    ],
    correct_answer: "(B) 30° caudad to OML (or 37° to IOML)",
    correct_answer_mr: "(B) ३०° कॉडड OML ला (किंवा ३७° IOML ला)",
    explanation: "The Towne projection requires a 30° caudal angle to the Orbitomeatal Line (OML) to project the dorsum sellae within the foramen magnum and display the occipital bone.",
    explanation_mr: "टाऊन्स मेथड (Towne Method) मध्ये OML रेषेला ३०° कॉडड कोन देऊन ऑक्सिपिटल हाड आणि फॉरामेन मॅग्नम स्पष्ट दाखवले जाते.",
    source_page: 159,
    difficulty: 'medium'
  },
  {
    id: 62,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "What is the primary function of a grid positioned between the patient and the image receptor?",
    question_mr: "रुग्ण आणि इमेज प्लेटच्या मध्ये वापरल्या जाणाऱ्या ग्रीडचे (Grid) मुख्य कार्य काय असते?",
    options: [
      "(A) To reduce primary beam exposure to the patient",
      "(B) To absorb scattered radiation and improve image contrast",
      "(C) To enlarge the field of view",
      "(D) To reduce focal spot blur"
    ],
    options_mr: [
      "(A) रुग्णाचा प्रायमरी डोस कमी करणे",
      "(B) स्कॅटर्ड रेडिएशन शोषून इमेजचा कॉन्ट्रास्ट (Contrast) वाढवणे",
      "(C) फील्ड ऑफ व्ह्यू वाढवणे",
      "(D) फोकल स्पॉट ब्लर कमी करणे"
    ],
    correct_answer: "(B) To absorb scattered radiation and improve image contrast",
    correct_answer_mr: "(B) स्कॅटर्ड रेडिएशन शोषून इमेजचा कॉन्ट्रास्ट (Contrast) वाढवणे",
    explanation: "Grids consist of alternating lead strips and radiolucent interspaces designed to absorb Compton scattered radiation before it reaches the IR, greatly enhancing contrast.",
    explanation_mr: "ग्रीड ही सिशाच्या पट्ट्यांची बनलेली रचना असते जी विखुरलेले (Compton Scatter) किरण शोषून घेऊन एक्स-रे चित्राची गुणवत्ता व कॉन्ट्रास्ट वाढवते.",
    source_page: 333,
    difficulty: 'easy'
  },
  {
    id: 63,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "Which digital imaging term defines the network architecture used for storing, archiving, and transmitting medical images across hospital departments?",
    question_mr: "वैद्यकीय डिजिटल प्रतिमांचे साठवणूक, अर्काईव्हिंग व डिजिटल वितरण करणाऱ्या संगणकीय नेटवर्कला काय म्हणतात?",
    options: [
      "(A) RIS (Radiology Information System)",
      "(B) HIS (Hospital Information System)",
      "(C) PACS (Picture Archiving and Communication System)",
      "(D) DICOM"
    ],
    options_mr: [
      "(A) RIS",
      "(B) HIS",
      "(C) PACS (Picture Archiving and Communication System)",
      "(D) DICOM"
    ],
    correct_answer: "(C) PACS (Picture Archiving and Communication System)",
    correct_answer_mr: "(C) PACS (Picture Archiving and Communication System)",
    explanation: "PACS (Picture Archiving and Communication System) is the dedicated network for digital image acquisition, display, archival, and electronic transmission.",
    explanation_mr: "PACS हे वैद्यकीय इमेजिंग मधील डिजिटल फायली साठवण्यासाठी आणि विविध डॉक्टरांकडे नेटवर्कद्वारे पाठवण्यासाठीचे मुख्य सॉफ्टवेअर आहे.",
    source_page: 387,
    difficulty: 'easy'
  },
  {
    id: 64,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "Under the ALARA principle, what three cardinal safety factors should a radiographer practice for personal exposure reduction?",
    question_mr: "ALARA तत्त्वानुसार स्वतःच्या सुरक्षेसाठी रेडिओग्राफरने कोणत्या तीन प्रमुख सूत्रांचा (3 Cardinal Rules) अवलंब करावा?",
    options: [
      "(A) Voltage, Current, Distance",
      "(B) Time, Distance, Shielding",
      "(C) Filtration, Collimation, Grid",
      "(D) Speed, Exposure, Contrast"
    ],
    options_mr: [
      "(A) व्होल्टेज, करंट, अंतर",
      "(B) वेळ, अंतर आणि शील्डिंग (Time, Distance & Shielding)",
      "(C) फिल्टरेशन, कॉलीमेशन, ग्रीड",
      "(D) स्पीड, एक्सपोजर, कॉन्ट्रास्ट"
    ],
    correct_answer: "(B) Time, Distance, Shielding",
    correct_answer_mr: "(B) वेळ, अंतर आणि शील्डिंग (Time, Distance & Shielding)",
    explanation: "The three cardinal principles of radiation protection are: 1. Minimize Time near source, 2. Maximize Distance from source, 3. Use Shielding (lead aprons/barriers).",
    explanation_mr: "रेडिएशन संरक्षणाची तीन प्रमुख सूत्रे: १. वेळ (Time) कमी ठेवणे, २. अंतर (Distance) जास्त ठेवणे, ३. लेड शील्डिंग (Shielding) वापरणे.",
    source_page: 273,
    difficulty: 'easy'
  },
  {
    id: 65,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which wrist bone is the most frequently fractured carpal bone from a fall on an outstretched hand?",
    question_mr: "हातावर पडल्यामुळे मनगटातील आठ हाडांपैकी (Carpal bones) कोणते हाड सर्वात जास्त फ्रॅक्चर होते?",
    options: [
      "(A) Lunate",
      "(B) Scaphoid (Navicular)",
      "(C) Pisiform",
      "(D) Capitate"
    ],
    options_mr: [
      "(A) ल्युनेट",
      "(B) स्कॅफॉईड / नॅव्हिक्युलर (Scaphoid / Navicular)",
      "(C) पिसिफॉर्म",
      "(D) कॅपिटेट"
    ],
    correct_answer: "(B) Scaphoid (Navicular)",
    correct_answer_mr: "(B) स्कॅफॉईड / नॅव्हिक्युलर (Scaphoid / Navicular)",
    explanation: "The scaphoid is the most commonly fractured carpal bone, usually resulting from a FOOSH (fall on outstretched hand) injury affecting the anatomic snuffbox.",
    explanation_mr: "मनगटातील आठ कार्पल हाडांपैकी स्कॅफॉईड हाड (Anatomic Snuffbox जवळ) पडल्यामुळे सर्वाधिक फ्रॅक्चर होते.",
    source_page: 93,
    difficulty: 'medium'
  },
  {
    id: 66,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "What is the total minimum filtration required for stationary diagnostic X-ray equipment operating above 70 kVp?",
    question_mr: "७० kVp पेक्षा जास्त क्षमतेवर चालणाऱ्या स्थिर एक्स-रे मशीनसाठी एकंदरीत किती किमान फिल्टरेशन (Total Filtration) असणे बंधनकारक आहे?",
    options: [
      "(A) 0.5 mm Al equivalent",
      "(B) 1.5 mm Al equivalent",
      "(C) 2.5 mm Al equivalent",
      "(D) 4.0 mm Al equivalent"
    ],
    options_mr: [
      "(A) ०.५ मिमी Al इक्विव्हॅलंट",
      "(B) १.५ मिमी Al इक्विव्हॅलंट",
      "(C) २.५ मिमी अल्युमिनियम इक्विव्हॅलंट (2.5 mm Al equivalent)",
      "(D) ४.० मिमी Al इक्विव्हॅलंट"
    ],
    correct_answer: "(C) 2.5 mm Al equivalent",
    correct_answer_mr: "(C) २.५ मिमी अल्युमिनियम इक्विव्हॅलंट (2.5 mm Al equivalent)",
    explanation: "NCRP regulations mandate that equipment operating above 70 kVp must have a minimum total filtration (inherent + added) of 2.5 mm Aluminum equivalent.",
    explanation_mr: "७० kVp पेक्षा जास्त क्षमतेवर काम करणाऱ्या एक्स-रे मशीनमध्ये रुग्ण त्वचेच्या सुरक्षेसाठी किमान २.५ मिमी अल्युमिनियम फिल्टरेशन असणे आवश्यक आहे.",
    source_page: 257,
    difficulty: 'medium'
  },
  {
    id: 67,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In cervical spine radiography, which projection best demonstrates the intervertebral foramina?",
    question_mr: "मानवी मानेच्या मणक्यांच्या (Cervical Spine) एक्स-रे मध्ये 'Intervertebral Foramina' (मज्जातंतू जाण्याचे छिद्र) सर्वात स्पष्ट कोणत्या पोझिशनमध्ये दिसतात?",
    options: [
      "(A) AP Projection",
      "(B) True Lateral Projection",
      "(C) 45° Oblique Position (AP/PA Oblique)",
      "(D) AP Open Mouth View"
    ],
    options_mr: [
      "(A) एपी प्रोजेक्शन",
      "(B) ट्रु लॅटरल प्रोजेक्शन",
      "(C) ४५° ऑब्लीक पोझिशन - Oblique Position (AP/PA Oblique)",
      "(D) ओपन माउथ व्ह्यू"
    ],
    correct_answer: "(C) 45° Oblique Position (AP/PA Oblique)",
    correct_answer_mr: "(C) ४५° ऑब्लीक पोझिशन - Oblique Position (AP/PA Oblique)",
    explanation: "Cervical intervertebral foramina lie at a 45° angle to the midsagittal plane and are best demonstrated in 45° oblique projections.",
    explanation_mr: "सर्वायकल मणक्यांचे इंटरव्हर्टेब्रल फॉरामिना ४५° कोनात असल्यामुळे ते ४५° ऑब्लीक पोझिशनमध्येच स्पष्ट दिसतात.",
    source_page: 141,
    difficulty: 'hard'
  },
  {
    id: 68,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "What is the primary advantage of Digital Radiography (DR) flat-panel detectors over traditional film-screen systems?",
    question_mr: "पारंपारिक एक्स-रे फिल्म प्रणालीच्या तुलनेत डिजिटल रेडिओग्राफी (DR) फ्लॅट पॅनेल डिटेक्टर्सचा मुख्य फायदा कोणता आहे?",
    options: [
      "(A) Wider dynamic range & immediate image display",
      "(B) Cheaper equipment cost",
      "(C) Requirement of chemical development",
      "(D) Lower spatial resolution"
    ],
    options_mr: [
      "(A) विस्तृत डायनॅमिक रेंज आणि त्वरित स्क्रीनवर इमेज दिसणे (Immediate Display & Wide Latitude)",
      "(B) स्वस्त मशीनची किंमत",
      "(C) केमिकल प्रोसेसिंगची गरज",
      "(D) कमी रिझोल्यूशन"
    ],
    correct_answer: "(A) Wider dynamic range & immediate image display",
    correct_answer_mr: "(A) विस्तृत डायनॅमिक रेंज आणि त्वरित स्क्रीनवर इमेज दिसणे (Immediate Display & Wide Latitude)",
    explanation: "DR flat panel detectors offer near-instant image readout, high DQE, wide dynamic exposure latitude, and post-processing capabilities without cassettes.",
    explanation_mr: "डिजिटल रेडिओग्राफी (DR) मध्ये काही सेकंदात स्क्रीनवर इमेज दिसते व रुंद एक्सपोजर मर्यादेमुळे (Dynamic Range) री-टेकची गरज पडत नाही.",
    source_page: 384,
    difficulty: 'easy'
  },
  {
    id: 69,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "Which legal doctrine applies when patient injury results directly from the misperformance of a duty, meaning 'the thing speaks for itself'?",
    question_mr: "रुग्णाला झालेली इजा ही कर्तव्यातील थेट निष्काळजीपणामुळे झाली असून 'घटना स्वतःच पुरावा आहे' (The thing speaks for itself) या कायदेशीर तत्त्वाला काय म्हणतात?",
    options: [
      "(A) Respondeat superior",
      "(B) Res ipsa loquitur",
      "(C) Habeas corpus",
      "(D) Prima facie"
    ],
    options_mr: [
      "(A) रिस्पॉन्डिएट सुपेरियर (Respondeat superior)",
      "(B) रेस इप्सा लॉक्विटूर (Res ipsa loquitur)",
      "(C) हॅबियस कॉर्पस (Habeas corpus)",
      "(D) प्रायमा फॅसी (Prima facie)"
    ],
    correct_answer: "(B) Res ipsa loquitur",
    correct_answer_mr: "(B) रेस इप्सा लॉक्विटूर (Res ipsa loquitur)",
    explanation: "Res ipsa loquitur translates to 'the thing speaks for itself', placing the burden on the radiographer/caregiver to disprove negligence when an obvious injury occurs.",
    explanation_mr: "'Res ipsa loquitur' चा अर्थ 'घटना स्वतःच बोलून दाखवते' असा होतो. स्पष्टपणे दिसणाऱ्या निष्काळजीपणाच्या बाबतीत हे कायदेशीर सूत्र लागू होते.",
    source_page: 7,
    difficulty: 'medium'
  },
  {
    id: 70,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "The ARRT Standards of Ethics is composed of two parts, where:",
    question_mr: "ARRT मानकांच्या नैतिक नियमांचे (Standards of Ethics) दोन भाग पडतात, ज्यामध्ये:",
    options: [
      "(A) Both Code and Rules are aspirational",
      "(B) Both Code and Rules are enforceable",
      "(C) The Code of Ethics is aspirational and the Rules of Ethics are enforceable",
      "(D) The Code of Ethics is enforceable and the Rules of Ethics are aspirational"
    ],
    options_mr: [
      "(A) दोन्ही Code आणि Rules मार्गदर्शक आहेत",
      "(B) दोन्ही Code आणि Rules कायदेशीररित्या बंधनकारक आहेत",
      "(C) कोड ऑफ एथिक्स (Code of Ethics) हे आदर्शवादी/मार्गदर्शक आहे आणि रूल्स ऑफ एथिक्स (Rules of Ethics) हे सक्तीचे/बंधनकारक आहेत",
      "(D) कोड ऑफ एथिक्स बंधनकारक आहे तर रूल्स ऑफ एथिक्स मार्गदर्शक आहे"
    ],
    correct_answer: "(C) The Code of Ethics is aspirational and the Rules of Ethics are enforceable",
    correct_answer_mr: "(C) कोड ऑफ एथिक्स (Code of Ethics) हे आदर्शवादी/मार्गदर्शक आहे आणि रूल्स ऑफ एथिक्स (Rules of Ethics) हे सक्तीचे/बंधनकारक आहेत",
    explanation: "The 10-part Code of Ethics serves as an aspirational guide, while the 22 Rules of Ethics are mandatory and enforceable standards.",
    explanation_mr: "ARRT मध्ये कोड ऑफ एथिक्स (१० भाग) हे ऐच्छिक मार्गदर्शक तत्त्व आहे, तर रूल्स ऑफ एथिक्स (२२ नियम) हे बंधनकारक आणि सक्तीचे नियम आहेत.",
    source_page: 7,
    difficulty: 'hard'
  },
  {
    id: 71,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "What is the normal average respiratory rate for a healthy adult?",
    question_mr: "निरोगी प्रौढ व्यक्तीचा सामान्य श्वसन दर (Normal Respiratory Rate) प्रति मिनिट किती असतो?",
    options: [
      "(A) 8 to 12 breaths per minute",
      "(B) 12 to 18 breaths per minute",
      "(C) 20 to 30 breaths per minute",
      "(D) 30 to 60 breaths per minute"
    ],
    options_mr: [
      "(A) ८ ते १२ श्वास प्रति मिनिट",
      "(B) १२ ते १८ श्वास प्रति मिनिट (12 to 18 breaths per minute)",
      "(C) २० ते ३० श्वास प्रति मिनिट",
      "(D) ३० ते ६० श्वास प्रति मिनिट"
    ],
    correct_answer: "(B) 12 to 18 breaths per minute",
    correct_answer_mr: "(B) १२ ते १८ श्वास प्रति मिनिट (12 to 18 breaths per minute)",
    explanation: "The normal respiratory rate for a healthy adult ranges between 12 and 18 breaths per minute, while children's rates are somewhat higher.",
    explanation_mr: "प्रौढ व्यक्तीचा सर्वसाधारण श्वासोच्छ्वासाचा दर १२ ते १८ प्रति मिनिट असतो, तर लहान मुलांमध्ये तो अधिक असतो.",
    source_page: 21,
    difficulty: 'easy'
  },
  {
    id: 72,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "When transferring a patient from a stretcher to the x-ray table, which body mechanics rule should be applied?",
    question_mr: "रुग्णाला स्ट्रेचरवरून एक्स-रे टेबलवर घेताना शरीराच्या हालचालीचा (Body Mechanics) कोणता नियम पाळला पाहिजे?",
    options: [
      "(A) Push the patient to minimize sliding friction",
      "(B) Pull the patient using biceps muscles and avoid bending at the waist",
      "(C) Bend at the waist and lift the patient directly",
      "(D) Keep feet close together to maximize pivot speed"
    ],
    options_mr: [
      "(A) रुग्णाला पुढे ढकलणे (Push)",
      "(B) बायसेप्स स्नायूंचा वापर करून रुग्णाला स्वतःकडे ओढणे (Pull) व कंबर न वाकवणे",
      "(C) थेट कंबरेतून वाकून रुग्णाला उचलणे",
      "(D) दोन्ही पाय अगदी जवळ ठेवणे"
    ],
    correct_answer: "(B) Pull the patient using biceps muscles and avoid bending at the waist",
    correct_answer_mr: "(B) बायसेप्स स्नायूंचा वापर करून रुग्णाला स्वतःकडे ओढणे (Pull) व कंबर न वाकवणे",
    explanation: "Patient transfer should involve pulling rather than pushing, using the biceps muscles and keeping the back straight to prevent back strain.",
    explanation_mr: "रुग्ण हस्तांतरित करताना ढकलण्याऐवजी ओढणे (Pulling) सुरक्षित मानले जाते; तसेच पाठीचा मणका सरळ ठेवून बायसेप्स स्नायूंचा वापर करावा.",
    source_page: 23,
    difficulty: 'medium'
  },
  {
    id: 73,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "Which of the following is recognized as the single most effective means of controlling the spread of infectious microorganisms in a healthcare setting?",
    question_mr: "आरोग्य सेवा केंद्रात/रुग्णालयात संसर्गजन्य सूक्ष्मजीवांचा प्रसार रोखण्यासाठी खालीलपैकी कोणता सर्वात प्रभावी उपाय मानला जातो?",
    options: [
      "(A) Wearing sterile gloves",
      "(B) Wearing N95 masks",
      "(C) Proper and timely handwashing",
      "(D) Using chemical sterilants"
    ],
    options_mr: [
      "(A) निर्जंतुक ग्लोव्हज घालणे",
      "(B) N95 मास्क वापरणे",
      "(C) योग्य वेळी आणि व्यवस्थित हात धुणे (Handwashing)",
      "(D) रासायनिक निर्जंतुकीकरण"
    ],
    correct_answer: "(C) Proper and timely handwashing",
    correct_answer_mr: "(C) योग्य वेळी आणि व्यवस्थित हात धुणे (Handwashing)",
    explanation: "Microorganisms are most commonly spread via hands; therefore, proper handwashing before and after each patient is the most effective control measure.",
    explanation_mr: "संसर्ग पसरण्याचे मुख्य माध्यम हात हेच असतात, म्हणून प्रत्येक रुग्णाला तपासण्यापूर्वी व नंतर हात स्वच्छ धुणे हा सर्वात महत्त्वाचा उपाय आहे.",
    source_page: 33,
    difficulty: 'easy'
  },
  {
    id: 74,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "Patients known or suspected to be infected with Tuberculosis (TB) or Varicella require which type of precautions?",
    question_mr: "क्षयरोग (Tuberculosis / TB) किंवा कांजिण्या (Varicella) झालेल्या रुग्णांसाठी कोणत्या प्रकारची संसर्ग खबरदारी (Precautions) घेणे आवश्यक आहे?",
    options: [
      "(A) Contact precautions",
      "(B) Droplet precautions",
      "(C) Airborne precautions",
      "(D) Standard precautions only"
    ],
    options_mr: [
      "(A) कॉन्टॅक्ट प्रिकॉशन्स",
      "(B) ड्रॉपलेट प्रिकॉशन्स",
      "(C) एरबॉर्न प्रिकॉशन्स (Airborne Precautions)",
      "(D) केवळ स्टँडर्ड प्रिकॉशन्स"
    ],
    correct_answer: "(C) Airborne precautions",
    correct_answer_mr: "(C) एरबॉर्न प्रिकॉशन्स (Airborne Precautions)",
    explanation: "Airborne precautions require the patient to wear a mask and be placed in a private, negative-pressure ventilated room, with healthcare workers wearing N95 respirators.",
    explanation_mr: "टीबी आणि व्हेरिसेलाचे जंतू हवेतून पसरत असल्यामुळे (Airborne Transmission) N95 मास्क आणि निगेटिव्ह प्रेशर रूम वापरणे बंधनकारक आहे.",
    source_page: 37,
    difficulty: 'medium'
  },
  {
    id: 75,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "When scheduling multiple contrast examinations for a patient, what is the correct sequence to ensure residual contrast does not obscure studies?",
    question_mr: "एकाच रुग्णासाठी अनेक कॉन्ट्रास्ट तपासण्या (Contrast Exams) आयोजित करताना, शिल्लक डायमुळे इतर तपासण्या बाधित होऊ नयेत म्हणून योग्य क्रम कोणता असावा?",
    options: [
      "(A) UGI first, then Barium Enema, then IVU",
      "(B) IVU first, then Barium Enema (BE), then UGI series",
      "(C) Barium Enema first, then UGI, then IVU",
      "(D) Order does not matter as long as scout films are taken"
    ],
    options_mr: [
      "(A) UGI आधी, मग बेरियम एनिमा, मग IVU",
      "(B) IVU प्रथम, नंतर बेरियम एनिमा (BE), आणि शेवटी UGI सिरिज",
      "(C) बेरियम एनिमा आधी, मग UGI, मग IVU",
      "(D) क्रम महत्त्वाचा नाही"
    ],
    correct_answer: "(B) IVU first, then Barium Enema (BE), then UGI series",
    correct_answer_mr: "(B) IVU प्रथम, नंतर बेरियम एनिमा (BE), आणि शेवटी UGI सिरिज",
    explanation: "IVU is scheduled first because iodinated contrast is excreted rapidly; Barium Enema is scheduled next, and UGI is scheduled last to avoid residual barium interference.",
    explanation_mr: "आय.व्ही.यु (IVU) मध्ये वापरलेला आयोडीन डाय पटकन शरीराबाहेर पडतो, त्यामुळे IVU आधी करावा, मग बेरियम एनिमा व शेवटी UGI करावा.",
    source_page: 54,
    difficulty: 'hard'
  },
  {
    id: 76,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "Patients taking Metformin (Glucophage) for diabetes must discontinue the drug for how long following the administration of intravascular iodinated contrast media?",
    question_mr: "मधुमेहासाठी मेटफॉर्मिन (Metformin) घेणाऱ्या रुग्णांनी IV आयोडीन कॉन्ट्रास्ट दिल्यानंतर किती वेळ ते औषध बंद ठेवणे आवश्यक आहे?",
    options: [
      "(A) 12 hours",
      "(B) 24 hours",
      "(C) 48 hours",
      "(D) 1 week"
    ],
    options_mr: [
      "(A) १२ तास",
      "(B) २४ तास",
      "(C) ४८ तास (48 hours)",
      "(D) १ आठवडा"
    ],
    correct_answer: "(C) 48 hours",
    correct_answer_mr: "(C) ४८ तास (48 hours)",
    explanation: "Manufacturer guidelines recommend withholding metformin for 48 hours following intravascular contrast examination to prevent acute renal alteration and lactic acidosis.",
    explanation_mr: "किडनीवर ताण व लॅक्टिक अ‍ॅसिडोसिसचा त्रास टाळण्यासाठी आयव्ही कॉन्ट्रास्ट दिल्यानंतर ४८ तास मेटफॉर्मिन औषध बंद ठेवण्याचा सल्ला दिला जातो.",
    source_page: 59,
    difficulty: 'medium'
  },
  {
    id: 77,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which body surface landmark corresponds to the level of the fourth lumbar vertebra (L4)?",
    question_mr: "शरीराच्या बाह्य भागावरील कोणता लँडमार्क (Landmark) चौथ्या लंबर मणक्याच्या (L4 Vertebra) स्तरावर असतो?",
    options: [
      "(A) Xiphoid tip",
      "(B) Sternal angle",
      "(C) Iliac crest",
      "(D) ASIS"
    ],
    options_mr: [
      "(A) झिफॉईड टिप (Xiphoid Tip)",
      "(B) स्टर्नल अँगल (Sternal Angle)",
      "(C) इलियाक क्रेस्ट (Iliac Crest)",
      "(D) अँटेरियर सुपेरियर इलियाक स्पाइन (ASIS)"
    ],
    correct_answer: "(C) Iliac crest",
    correct_answer_mr: "(C) इलियाक क्रेस्ट (Iliac Crest)",
    explanation: "The iliac crest is at the same approximate level as the fourth lumbar vertebra (L4), serving as a crucial anatomical landmark.",
    explanation_mr: "कमरेच्या वरचा इलियाक क्रेस्ट (Iliac Crest) हा L4 मणक्याच्या अगदी समोर/स्तरावर असतो.",
    source_page: 76,
    difficulty: 'easy'
  },
  {
    id: 78,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which of the following carpal bones is located in the proximal row and is most frequently fractured during a fall on an outstretched hand?",
    question_mr: "मनगटातील प्रॉक्सिमल रो (Proximal Row) मधील कोणते हाड हातावर पडल्यामुळे सर्वाधिक फ्रॅक्चर होते?",
    options: [
      "(A) Capitate",
      "(B) Hamate",
      "(C) Scaphoid",
      "(D) Trapezium"
    ],
    options_mr: [
      "(A) कॅपिटेट",
      "(B) हॅमेट",
      "(C) स्कॅफॉईड (Scaphoid)",
      "(D) ट्रॅपेझियम"
    ],
    correct_answer: "(C) Scaphoid",
    correct_answer_mr: "(C) स्कॅफॉईड (Scaphoid)",
    explanation: "The scaphoid is in the proximal row of carpals and fractures frequently due to axial loading from a fall onto an outstretched hand.",
    explanation_mr: "स्कॅफॉईड हे मनगटाच्या प्रॉक्सिमल रांगेतील हाड असून उघड्या हातावर पडल्यामुळे सर्वात जास्त फ्रॅक्चर होते.",
    source_page: 93,
    difficulty: 'easy'
  },
  {
    id: 79,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In a posteroanterior (PA) axial projection (scapular Y view) of the shoulder, a humeral head displaced inferior to the coracoid process indicates:",
    question_mr: "खांद्याच्या स्कॅप्युलर वाई व्ह्यू (Scapular Y view) मध्ये ह्युमेरसचे डोके (Humeral Head) कोराकॉईड प्रोसेसच्या (Coracoid Process) खाली विस्थापित झालेले असल्यास ते कशाचे लक्षण आहे?",
    options: [
      "(A) Anterior dislocation",
      "(B) Posterior dislocation",
      "(C) Normal alignment",
      "(D) Clavicle fracture"
    ],
    options_mr: [
      "(A) अँटेरियर डिसलोकेशन (Anterior dislocation)",
      "(B) पोस्टेरियर डिसलोकेशन (Posterior dislocation)",
      "(C) सामान्य पोझिशन (Normal alignment)",
      "(D) क्लॅव्हिकल फ्रॅक्चर (Clavicle fracture)"
    ],
    correct_answer: "(A) Anterior dislocation",
    correct_answer_mr: "(A) अँटेरियर डिसलोकेशन (Anterior dislocation)",
    explanation: "In a scapular Y view, humeral head displacement inferior to the coracoid indicates anterior dislocation, while displacement inferior to the acromion indicates posterior dislocation.",
    explanation_mr: "स्कॅप्युलर Y व्ह्यू मध्ये ह्युमेरसचे डोके कोराकॉईडच्या खाली दिसल्यास ते अँटेरियर डिसलोकेशन (Anterior Dislocation) दर्शवते, तर अ‍ॅक्रोमियनच्या खाली दिसल्यास पोस्टेरियर डिसलोकेशन असते.",
    source_page: 106,
    difficulty: 'medium'
  },
  {
    id: 80,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which of the following carpal bones belongs to the distal row and is known as the largest carpal bone?",
    question_mr: "मनगटातील डिस्टल रांगेतील (Distal Row) सर्वात मोठे कार्पल हाड (Largest Carpal Bone) कोणते आहे?",
    options: [
      "(A) Scaphoid",
      "(B) Lunate",
      "(C) Capitate",
      "(D) Hamate"
    ],
    options_mr: [
      "(A) स्कॅफॉईड",
      "(B) ल्युनेट",
      "(C) कॅपिटेट (Capitate / Os Magnum)",
      "(D) हॅमेट"
    ],
    correct_answer: "(C) Capitate",
    correct_answer_mr: "(C) कॅपिटेट (Capitate / Os Magnum)",
    explanation: "The capitate (os magnum) is the largest carpal bone and is located in the center of the distal carpal row.",
    explanation_mr: "कॅपिटेट (Capitate) हे मनगटातील ८ हाडांपैकी सर्वात मोठे हाड असून ते डिस्टल रांगेत मध्यभागी असते.",
    source_page: 93,
    difficulty: 'easy'
  },
  {
    id: 81,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which fat pad associated with the elbow joint is NOT visible radiographically in a normal, uninjured elbow?",
    question_mr: "कोपर सांध्याच्या (Elbow Joint) एक्स-रे मध्ये सामान्य निरोगी व्यक्तीत कोणती फॅट पॅड (Fat Pad) दिसत नाही?",
    options: [
      "(A) Anterior fat pad",
      "(B) Posterior fat pad",
      "(C) Supinator fat stripe",
      "(D) Pronator fat stripe"
    ],
    options_mr: [
      "(A) अँटेरियर फॅट पॅड",
      "(B) पोस्टेरियर फॅट पॅड (Posterior Fat Pad)",
      "(C) सुपिनेटर फॅट स्ट्राईप",
      "(D) प्रोनेटर फॅट स्ट्राईप"
    ],
    correct_answer: "(B) Posterior fat pad",
    correct_answer_mr: "(B) पोस्टेरियर फॅट पॅड (Posterior Fat Pad)",
    explanation: "The posterior fat pad lies deep within the olecranon fossa and is not visible on a normal lateral elbow radiograph. Its presence indicates joint effusion or occult fracture.",
    explanation_mr: "पोस्टेरियर फॅट पॅड (Posterior Fat Pad) ही अॉलेक्रॅनन फोसामध्ये लपलेली असते व सामान्य एक्स-रे मध्ये दिसत नाही. ती दिसल्यास कोपराचे छुपे फ्रॅक्चर किंवा सूज दर्शवते.",
    source_page: 96,
    difficulty: 'hard'
  },
  {
    id: 82,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "What is the largest tarsal bone in the human foot?",
    question_mr: "मानवी पायातील सात टार्सेल हाडांपैकी (Tarsal Bones) सर्वात मोठे हाड कोणते आहे?",
    options: [
      "(A) Talus",
      "(B) Navicular",
      "(C) Calcaneus",
      "(D) Cuboid"
    ],
    options_mr: [
      "(A) टॅलस",
      "(B) नॅव्हिक्युलर",
      "(C) कॅल्केनिअस / टाचेचे हाड (Calcaneus / Os Calcis)",
      "(D) क्युबॉईड"
    ],
    correct_answer: "(C) Calcaneus",
    correct_answer_mr: "(C) कॅल्केनिअस / टाचेचे हाड (Calcaneus / Os Calcis)",
    explanation: "The calcaneus (os calcis), or heel bone, is the largest and strongest tarsal bone in the foot.",
    explanation_mr: "कॅल्केनिअस (Calcaneus) म्हणजेच टाचेचे हाड हे पायातील टार्सेल हाडांपैकी सर्वात मोठे व मजबूत हाड आहे.",
    source_page: 108,
    difficulty: 'easy'
  },
  {
    id: 83,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which of the following describes structural differences of the female pelvis compared to the male pelvis?",
    question_mr: "पुरुषाच्या पेलव्हिसच्या तुलनेत स्त्रीच्या पेलव्हिसची (Female Pelvis) रचना कशी असते?",
    options: [
      "(A) Deeper pelvis with narrow pelvic outlet",
      "(B) Shallower pelvis with a wider, more circular pelvic outlet",
      "(C) Closer ischial tuberosities and smaller pubic arch angle",
      "(D) Thicker, heavier bones throughout the pelvis"
    ],
    options_mr: [
      "(A) खोल पेलव्हिस व अरुंद आउटलेट",
      "(B) कमी खोल (Shallower) व रुंद, वर्तुळाकार पेल्विक आउटलेट (Wider Circular Outlet)",
      "(C) लहान प्युबिक आर्च अँगल",
      "(D) जास्त जाड व वजनदार हाडे"
    ],
    correct_answer: "(B) Shallower pelvis with a wider, more circular pelvic outlet",
    correct_answer_mr: "(B) कमी खोल (Shallower) व रुंद, वर्तुळाकार पेल्विक आउटलेट (Wider Circular Outlet)",
    explanation: "The female pelvis is shallower, lighter, and has a wider, more circular pelvic inlet/outlet with a larger pubic arch angle (>90°) to facilitate childbirth.",
    explanation_mr: "प्रसूतीस सुलभ व्हावे म्हणून स्त्रीचा पेलव्हिस कमी खोल, रुंद व वर्तुळाकार आउटलेट असलेला आणि ९०° पेक्षा मोठा प्युबिक आर्च असलेला असतो.",
    source_page: 114,
    difficulty: 'medium'
  },
  {
    id: 84,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "A radiographer who discloses confidential patient information to unauthorized individuals can be found guilty of:",
    question_mr: "रुग्णाची वैद्यकीय गोपनीय माहिती अनधिकृत व्यक्तींसमोर उघड करणाऱ्या रेडिओग्राफरला कोणत्या गुन्ह्यासाठी दोषी ठरवले जाऊ शकते?",
    options: [
      "(A) Assault",
      "(B) Battery",
      "(C) False imprisonment",
      "(D) Invasion of privacy or defamation"
    ],
    options_mr: [
      "(A) अ‍ॅसॉल्ट (Assault)",
      "(B) बॅटरी (Battery)",
      "(C) फॉल्स इम्प्रिझनमेंट",
      "(D) रुग्णाच्या गोपनीयतेचा भंग किंवा अब्रुनुकसानी (Invasion of Privacy or Defamation)"
    ],
    correct_answer: "(D) Invasion of privacy or defamation",
    correct_answer_mr: "(D) रुग्णाच्या गोपनीयतेचा भंग किंवा अब्रुनुकसानी (Invasion of Privacy or Defamation)",
    explanation: "Disclosing confidential patient information without authorization violates HIPAA and patient rights, constituting an invasion of privacy and potential defamation.",
    explanation_mr: "रुग्णाची माहिती त्याची परवानगी नसताना दुसऱ्याला देणे हा गोपनीयतेचा भंग (Invasion of Privacy) आणि मानहानीचा गुन्हा मानला जातो.",
    source_page: 7,
    difficulty: 'medium'
  },
  {
    id: 85,
    category: 'Technical: Radiophysics & Machine Principles',
    section: 'technical',
    question: "Which of the following describes 'Battery' in a medicolegal context?",
    question_mr: "वैद्यकीय-कायदेशीर संदर्भात 'बॅटरी' (Battery) म्हणजे काय?",
    options: [
      "(A) A threat to do harm",
      "(B) The carrying out of a threat or performing an examination without consent",
      "(C) Written defamation",
      "(D) Spoken defamation"
    ],
    options_mr: [
      "(A) केवल इजा करण्याची धमकी देणे",
      "(B) परवानगीशिवाय किंवा जबरदस्तीने वैद्यकीय तपासणी/स्पर्श करणे (Carrying out a threat / Unconsented touch)",
      "(C) लिखित मानहानी",
      "(D) तोंडी मानहानी"
    ],
    correct_answer: "(B) The carrying out of a threat or performing an examination without consent",
    correct_answer_mr: "(B) परवानगीशिवाय किंवा जबरदस्तीने वैद्यकीय तपासणी/स्पर्श करणे (Carrying out a threat / Unconsented touch)",
    explanation: "Assault is the threat of harm; battery is the actual bodily contact or procedure performed without patient consent.",
    explanation_mr: "धमकी देणे म्हणजे 'Assault' तर रुग्णाच्या इच्छेविरुद्ध प्रत्यक्ष शरीराला स्पर्श किंवा एक्स-रे करणे म्हणजे 'Battery' होय.",
    source_page: 7,
    difficulty: 'medium'
  },
  {
    id: 86,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The normal adult resting pulse rate is typically between:",
    question_mr: "निरोगी प्रौढ व्यक्तीचा विश्रांतीच्या वेळेचा नाडीचा दर (Resting Pulse Rate) साधारणपणे किती असतो?",
    options: [
      "(A) 50 to 60 beats per minute",
      "(B) 70 to 82 beats per minute",
      "(C) 90 to 100 beats per minute",
      "(D) 110 to 120 beats per minute"
    ],
    options_mr: [
      "(A) ५० ते ६० ठोके प्रति मिनिट",
      "(B) ७० ते ८२ ठोके प्रति मिनिट (70 to 82 beats per minute)",
      "(C) ९० ते १०० ठोके प्रति मिनिट",
      "(D) ११० ते १२० ठोके प्रति मिनिट"
    ],
    correct_answer: "(B) 70 to 82 beats per minute",
    correct_answer_mr: "(B) ७० ते ८२ ठोके प्रति मिनिट (70 to 82 beats per minute)",
    explanation: "The normal resting pulse rate for adult males is 70–72 beats/min and for females is 78–82 beats/min.",
    explanation_mr: "प्रौढ पुरुषांमध्ये नाडीचा दर ७०-७२ आणि स्त्रियांमध्ये ७८-८२ ठोके प्रति मिनिट असतो.",
    source_page: 21,
    difficulty: 'easy'
  },
  {
    id: 87,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The medical term used to describe difficult or painful breathing is:",
    question_mr: "श्वास घेण्यास त्रास होणे किंवा दम लागणे यासाठी वैद्यकीय संज्ञा (Medical Term) कोणती आहे?",
    options: [
      "(A) Tachypnea",
      "(B) Orthopnea",
      "(C) Dyspnea",
      "(D) Oligopnea"
    ],
    options_mr: [
      "(A) टॅकिप्निया",
      "(B) ऑर्थोप्निया",
      "(C) डिस्प्निया (Dyspnea)",
      "(D) ऑलिगोप्निया"
    ],
    correct_answer: "(C) Dyspnea",
    correct_answer_mr: "(C) डिस्प्निया (Dyspnea)",
    explanation: "Dyspnea is the medical term for shortness of breath or difficult breathing.",
    explanation_mr: "श्वास घेण्यास होणाऱ्या त्रासाला वैद्यकीय परिभाषेत 'Dyspnea' असे म्हणतात.",
    source_page: 21,
    difficulty: 'easy'
  },
  {
    id: 88,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Blood pressure measurements are recorded with systolic pressure over diastolic pressure. Systolic pressure represents:",
    question_mr: "रक्तदाब मोजताना सिस्टोलिक (Systolic) आणि डायस्टोलिक असे दोन आकडे असतात. सिस्टोलिक प्रेशर कशाचे प्रतिनिधित्व करतो?",
    options: [
      "(A) The relaxation of the ventricles",
      "(B) The contraction of the ventricles",
      "(C) The resting pressure of the veins",
      "(D) The oxygen saturation level"
    ],
    options_mr: [
      "(A) हृदयाच्या व्हेंट्रिकल्सचे शिथिलीकरण (Relaxation)",
      "(B) हृदयाच्या व्हेंट्रिकल्सचे आकुंचन (Contraction of Ventricles)",
      "(C) शिरांचे विश्रांतीचे वजन",
      "(D) ऑक्सिजन संपृक्तता"
    ],
    correct_answer: "(B) The contraction of the ventricles",
    correct_answer_mr: "(B) हृदयाच्या व्हेंट्रिकल्सचे आकुंचन (Contraction of Ventricles)",
    explanation: "Systolic pressure is the peak arterial pressure during ventricular contraction, while diastolic pressure is the pressure during ventricular relaxation.",
    explanation_mr: "हृदयाचे ठोके पडताना व्हेंट्रिकल आकुंचन पावतात तेव्हाचा कमाल रक्तदाब म्हणजे सिस्टोलिक प्रेशर (वरचा आकडा) होय.",
    source_page: 22,
    difficulty: 'easy'
  },
  {
    id: 89,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "The destruction of pathogenic microorganisms through the process of disinfection is termed:",
    question_mr: "डिइन्फेक्शन प्रक्रियेद्वारे आजार पसरवणाऱ्या रोगजंतूंचा नाश करण्याच्या पद्धतीला काय म्हणतात?",
    options: [
      "(A) Medical asepsis",
      "(B) Surgical asepsis",
      "(C) Sterilization",
      "(D) Phagocytosis"
    ],
    options_mr: [
      "(A) मेडिकल असेप्सिस (Medical asepsis)",
      "(B) सर्जिकल असेप्सिस",
      "(C) स्टेरिलायझेशन",
      "(D) फॅगोसायटोसिस"
    ],
    correct_answer: "(A) Medical asepsis",
    correct_answer_mr: "(A) मेडिकल असेप्सिस (Medical asepsis)",
    explanation: "Medical asepsis involves reducing and preventing the spread of pathogenic microorganisms via cleaning and disinfection. Surgical asepsis eliminates ALL microorganisms and spores.",
    explanation_mr: "रोगजंतूंची संख्या कमी करणे व संसर्ग रोखणे याला 'मेडिकल असेप्सिस' म्हणतात. सर्व सूक्ष्मजीव व स्पोअर्स नष्ट करण्याला 'सर्जिकल असेप्सिस' म्हणतात.",
    source_page: 33,
    difficulty: 'medium'
  },
  {
    id: 90,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "A contaminated inanimate object, such as a food utensil, doorknob, or IV pole, that transmits infection is called a:",
    question_mr: "संसर्ग पसरवणाऱ्या निर्जीव वस्तूला (उदा. दरवाजाचे हँडल, आयव्ही स्टँड, एक्स-रे कसेट) वैद्यकीय भाषेत काय म्हणतात?",
    options: [
      "(A) Vector",
      "(B) Fomite",
      "(C) Pathogen",
      "(D) Droplet"
    ],
    options_mr: [
      "(A) व्हेक्टर (Vector)",
      "(B) फोमाईट (Fomite)",
      "(C) पॅथोजेन",
      "(D) ड्रॉपलेट"
    ],
    correct_answer: "(B) Fomite",
    correct_answer_mr: "(B) फोमाईट (Fomite)",
    explanation: "A fomite is an inanimate object that can harbour and transmit infectious organisms from one individual to another.",
    explanation_mr: "संसर्गजन्य जंतू वाहून नेणाऱ्या कोणत्याही निर्जीव वस्तूला 'Fomite' असे म्हटले जाते.",
    source_page: 34,
    difficulty: 'easy'
  },
  {
    id: 91,
    category: 'Technical: Radiation Protection & Hazards',
    section: 'technical',
    question: "Which of the following diseases requires droplet precautions in a hospital setting?",
    question_mr: "रुग्णालयात खालीलपैकी कोणत्या आजाराच्या रुग्णासाठी 'ड्रॉपलेट प्रिकॉशन्स' (Droplet Precautions) घेणे आवश्यक आहे?",
    options: [
      "(A) Tuberculosis (TB)",
      "(B) MRSA",
      "(C) Rubella (German measles)",
      "(D) Clostridium difficile"
    ],
    options_mr: [
      "(A) क्षयरोग (TB)",
      "(B) MRSA",
      "(C) रुबेला / जर्मन गोवर (Rubella)",
      "(D) सी. डिफिसील"
    ],
    correct_answer: "(C) Rubella (German measles)",
    correct_answer_mr: "(C) रुबेला / जर्मन गोवर (Rubella)",
    explanation: "Rubella, mumps, and influenza are transmitted via large droplets, requiring droplet precautions including masks within 3 feet.",
    explanation_mr: "रुबेला, मम्प्स आणि इन्फ्लुएन्झाचे जंतू थुंकीच्या किंवा शिंकेच्या मोठ्या थेंबांद्वारे (Droplets) पसरतात.",
    source_page: 37,
    difficulty: 'medium'
  },
  {
    id: 92,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "Parenteral drug administration includes all of the following routes EXCEPT:",
    question_mr: "पॅरेंटेरॉल (Parenteral) औषध देण्याच्या मार्गांमध्ये खालीलपैकी कशाचा समावेश होत नाही?",
    options: [
      "(A) Intravenous",
      "(B) Intramuscular",
      "(C) Oral",
      "(D) Subcutaneous"
    ],
    options_mr: [
      "(A) इंट्राव्हेनस (IV)",
      "(B) इंट्रामस्क्युलर (IM)",
      "(C) ओरल / तोंडावाटे औषध देणे (Oral)",
      "(D) सबक्युटेनियस (SC)"
    ],
    correct_answer: "(C) Oral",
    correct_answer_mr: "(C) ओरल / तोंडावाटे औषध देणे (Oral)",
    explanation: "Parenteral routes bypass the gastrointestinal tract and include IV, IM, SC, and intrathecal injections. Oral administration is an enteral route.",
    explanation_mr: "अन्ननलिकेशिवाय इंजेक्शन किंवा इतर मार्गाने औषध देणे म्हणजे Parenteral; तोंडावाटे (Oral) औषध देणे ही Enteral मार्ग आहे.",
    source_page: 48,
    difficulty: 'easy'
  },
  {
    id: 93,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "When is the use of barium sulfate contrast medium contraindicated?",
    question_mr: "बेरियम सल्फेट कॉन्ट्रास्ट डाय वापरणे कोणत्या परिस्थितीत पूर्णपणे निषिद्ध (Contraindicated) असते?",
    options: [
      "(A) When the patient is elderly",
      "(B) When a perforation is suspected along the GI tract",
      "(C) When evaluating the large intestine",
      "(D) When a double-contrast study is ordered"
    ],
    options_mr: [
      "(A) रुग्ण वृद्ध असल्यास",
      "(B) अन्ननलिका किंवा आतड्याला छिद्र (G.I. Perforation) असल्याचा संशय असल्यास",
      "(C) मोठ्या आतड्याची तपासणी करताना",
      "(D) डबल कॉन्ट्रास्ट स्टडी करताना"
    ],
    correct_answer: "(B) When a perforation is suspected along the GI tract",
    correct_answer_mr: "(B) अन्ननलिका किंवा आतड्याला छिद्र (G.I. Perforation) असल्याचा संशय असल्यास",
    explanation: "Barium sulfate is inert and non-water-soluble. If leaked into the peritoneal cavity through a GI tract perforation, it causes severe barium peritonitis.",
    explanation_mr: "बेरियम पोटात लिक झाल्यास गंभीर पेरिटोनाइटिस संसर्ग होतो, त्यामुळे छिद्र पडले असल्यास केवळ वॉटर-सोल्युबल डाय वापरावा.",
    source_page: 54,
    difficulty: 'medium'
  },
  {
    id: 94,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "What occurs when medication or contrast medium is introduced into the tissues surrounding a vein rather than into the vein itself?",
    question_mr: "आयव्ही (IV) इंजेक्शन देताना कॉन्ट्रास्ट डाय किंवा औषध शिरेमध्ये न जाता शिरेच्या शेजारील उतींमध्ये (Tissues) लीक झाल्यास त्याला काय म्हणतात?",
    options: [
      "(A) Anaphylaxis",
      "(B) Extravasation",
      "(C) Embolism",
      "(D) Phlebitis"
    ],
    options_mr: [
      "(A) अ‍नाफिलाक्सिस",
      "(B) एक्स्ट्राव्हॅसेशन (Extravasation / Infiltration)",
      "(C) एम्बॉलिझम",
      "(D) फ्लेबायटिस"
    ],
    correct_answer: "(B) Extravasation",
    correct_answer_mr: "(B) एक्स्ट्राव्हॅसेशन (Extravasation / Infiltration)",
    explanation: "Extravasation (or infiltration) refers to the accidental leakage of intravenously injected contrast or medication into surrounding soft tissues.",
    explanation_mr: "शिरेच्या बाहेर मऊ उतींमध्ये औषध किंवा डाय लीक होण्याच्या घटनेला 'Extravasation' असे म्हणतात.",
    source_page: 58,
    difficulty: 'easy'
  },
  {
    id: 95,
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    section: 'technical',
    question: "Symptoms of a mild reaction to IV contrast media include:",
    question_mr: "आयव्ही कॉन्ट्रास्ट डाय दिल्यानंतर होणाऱ्या सौम्य रिअॅक्शनची (Mild Reaction) लक्षणे कोणती असतात?",
    options: [
      "(A) Respiratory failure and shock",
      "(B) Flushed appearance, nausea, and a few hives (urticaria)",
      "(C) Cardiopulmonary arrest",
      "(D) Seizures and convulsions"
    ],
    options_mr: [
      "(A) श्वासोच्छवास बंद होणे आणि शॉक",
      "(B) चेहरा लाल होणे, मळमळणे, आणि अंगावर थोडी पित्त उठणे (Flushed appearance, Nausea & Hives)",
      "(C) कार्डियाक अरेस्ट",
      "(D) फेफरे येणे"
    ],
    correct_answer: "(B) Flushed appearance, nausea, and a few hives (urticaria)",
    correct_answer_mr: "(B) चेहरा लाल होणे, मळमळणे, आणि अंगावर थोडी पित्त उठणे (Flushed appearance, Nausea & Hives)",
    explanation: "Mild contrast reactions cause flushing, warm sensation, nausea, metallic taste, and localized urticaria, requiring observation but usually no intervention.",
    explanation_mr: "सौम्य रिअॅक्शनमध्ये मळमळ, गरम वाटणे, तोंडात धातूची चव येणे आणि थोडी खाज सुटणे ही लक्षणे दिसतात.",
    source_page: 61,
    difficulty: 'medium'
  },
  {
    id: 96,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which plane divides the body into equal anterior and posterior halves?",
    question_mr: "मानवी शरीराला समोरच्या (Anterior) आणि मागच्या (Posterior) दोन समान भागांमध्ये विभागणाऱ्या काल्पनिक प्रतलाला (Plane) काय म्हणतात?",
    options: [
      "(A) Midsagittal plane",
      "(B) Transverse plane",
      "(C) Midcoronal plane",
      "(D) Horizontal plane"
    ],
    options_mr: [
      "(A) मिडसॅगिटल प्लेन",
      "(B) ट्रान्सव्हर्स प्लेन",
      "(C) मिडकोरोनाल प्लेन (Midcoronal Plane)",
      "(D) हॉरिझॉन्टल प्लेन"
    ],
    correct_answer: "(C) Midcoronal plane",
    correct_answer_mr: "(C) मिडकोरोनाल प्लेन (Midcoronal Plane)",
    explanation: "The Midcoronal Plane passes longitudinally through the body dividing it into anterior and posterior halves.",
    explanation_mr: "मिडकोरोनाल प्लेन शरीराला समोरचा आणि मागचा अशा दोन समान भागांत विभागतो.",
    source_page: 72,
    difficulty: 'easy'
  },
  {
    id: 97,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "A patient with a slender and light body, delicate bony framework, and a very low, long 'fish hook' stomach has which body habitus?",
    question_mr: "अत्यंत बारीक व उंच शरीर, नाजूक हाडांची रचना आणि अतिशय खाली लटकणारे पोट असलेली शारीरिक रचना (Body Habitus) कोणती असते?",
    options: [
      "(A) Hypersthenic",
      "(B) Sthenic",
      "(C) Hyposthenic",
      "(D) Asthenic"
    ],
    options_mr: [
      "(A) हायपरस्थेनिक",
      "(B) स्थेनिक",
      "(C) हायपोस्थेनिक",
      "(D) अ‍ॅस्थेनिक (Asthenic Body Habitus)"
    ],
    correct_answer: "(D) Asthenic",
    correct_answer_mr: "(D) अ‍ॅस्थेनिक (Asthenic Body Habitus)",
    explanation: "The Asthenic body habitus represents approximately 10% of the population, characterized by a slender frame and long, low stomach.",
    explanation_mr: "अ‍ॅस्थेनिक (Asthenic) शरीरयष्टी असणाऱ्या व्यक्तींचे पोट अतिशय खाली (पेलव्हिसजवळ) असते.",
    source_page: 73,
    difficulty: 'medium'
  },
  {
    id: 98,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Movement of a body part away from the body's midsagittal plane (MSP) is termed:",
    question_mr: "शरीराचा कोणताही भाग किंवा हात/पाय मध्य रेषेपासून (Midsagittal Plane) दूर नेण्याच्या हालचालीला काय म्हणतात?",
    options: [
      "(A) Adduction",
      "(B) Abduction",
      "(C) Flexion",
      "(D) Extension"
    ],
    options_mr: [
      "(A) अ‍ॅडक्शन (Adduction)",
      "(B) अ‍ॅबडक्शन (Abduction)",
      "(C) फ्लेक्शन",
      "(D) एक्स्टेंशन"
    ],
    correct_answer: "(B) Abduction",
    correct_answer_mr: "(B) अ‍ॅबडक्शन (Abduction)",
    explanation: "Abduction is movement away from the central midline. Adduction is movement toward the midline.",
    explanation_mr: "मध्यरेषेपासून दूर हात किंवा पाय लांब नेणे म्हणजे 'Abduction'; जवळ आणणे म्हणजे 'Adduction'.",
    source_page: 75,
    difficulty: 'easy'
  },
  {
    id: 99,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Turning the arm or hand so that the palm faces forward, with the thumb pointing away from the midline, is called:",
    question_mr: "हाताचा तळहात समोरच्या बाजूला करून अंगठा बाहेरच्या दिशेने धरण्याच्या हालचालीला काय म्हणतात?",
    options: [
      "(A) Pronation",
      "(B) Supination",
      "(C) Eversion",
      "(D) Inversion"
    ],
    options_mr: [
      "(A) प्रोनेशन (Pronation)",
      "(B) सुपिनेटने (Supination)",
      "(C) एव्हर्जन",
      "(D) इनव्हर्जन"
    ],
    correct_answer: "(B) Supination",
    correct_answer_mr: "(B) सुपिनेटने (Supination)",
    explanation: "Supination is turning the hand so the palm faces anteriorly in the anatomical position.",
    explanation_mr: "तळहात समोर करून धरण्याच्या पोझिशनला 'Supination' म्हणतात; तळहात मागे/खाली फिरवण्याला 'Pronation' म्हणतात.",
    source_page: 75,
    difficulty: 'easy'
  },
  {
    id: 100,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which of the following is NOT a primary function of the human skeletal system?",
    question_mr: "खालीलपैकी कोणते मानवी सांगाडा संस्थेचे (Skeletal System) मुख्य कार्य नाही?",
    options: [
      "(A) Support and protection of vital organs",
      "(B) Reservoir for minerals like calcium",
      "(C) Hematopoiesis (blood cell production)",
      "(D) Direct production of digestive enzymes and insulin"
    ],
    options_mr: [
      "(A) शरीराला आधार व अवयवांचे संरक्षण",
      "(B) कॅल्शियम खनिजांचे साठवणूक",
      "(C) रक्ताच्या पेशींची निर्मिती (Hematopoiesis)",
      "(D) इन्सुलिन व पाचक रसांची निर्मिती"
    ],
    correct_answer: "(D) Direct production of digestive enzymes and insulin",
    correct_answer_mr: "(D) इन्सुलिन व पाचक रसांची निर्मिती",
    explanation: "Bone functions include protection, support, movement leverage, mineral storage, and hematopoiesis. Digestive enzymes/insulin are produced by endocrine glands/pancreas.",
    explanation_mr: "इन्सुलिन स्वादुपिंडात (Pancreas) तयार होते, सांगाडा संस्थेमध्ये नाही.",
    source_page: 85,
    difficulty: 'easy'
  },
  {
    id: 101,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Joints that are freely movable, surrounded by a joint capsule containing lubricating fluid, are classified as:",
    question_mr: "मोकळेपणाने हालचाल करणारे आणि सांध्याच्या कॅप्सूलमध्ये द्रवाने (Fluid) वेढलेले सांधे कोणत्या वर्गात मोडतात?",
    options: [
      "(A) Synarthrotic",
      "(B) Amphiarthrotic",
      "(C) Diarthrotic (synovial)",
      "(D) Fibrous"
    ],
    options_mr: [
      "(A) सिनार्थ्रोटिक (अचल सांधे)",
      "(B) अ‍ॅम्फिआर्थ्रोटिक (अर्धचल सांधे)",
      "(C) डायआर्थ्रोटिक / सायनोव्हिअल सांधे (Diarthrotic / Synovial)",
      "(D) फायब्रस सांधे"
    ],
    correct_answer: "(C) Diarthrotic (synovial)",
    correct_answer_mr: "(C) डायआर्थ्रोटिक / सायनोव्हिअल सांधे (Diarthrotic / Synovial)",
    explanation: "Diarthrotic (synovial) joints are freely movable joints lined with a synovial membrane that secretes lubricating fluid.",
    explanation_mr: "खांदा, कोपर, गुडघा यांसारखे मोकळेपणाने हलणारे सांधे सायनोव्हिअल (Diarthrotic) सांधे असतात.",
    source_page: 88,
    difficulty: 'easy'
  },
  {
    id: 102,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The proximal row of carpal bones includes, from lateral to medial (thumb to pinky side):",
    question_mr: "मनगटातील प्रॉक्सिमल रांगेतील चार हाडे बाहेरून आत (Lateral to Medial) योग्य क्रमाने कोणती आहेत?",
    options: [
      "(A) Trapezium, trapezoid, capitate, hamate",
      "(B) Scaphoid, lunate, triquetrum, pisiform",
      "(C) Navicular, cuboid, cuneiforms",
      "(D) Talus, calcaneus, navicular"
    ],
    options_mr: [
      "(A) ट्रॅपेझियम, ट्रॅपेझॉईड, कॅपिटेट, हॅमेट",
      "(B) स्कॅफॉईड, ल्युनेट, ट्रायक्वेट्रम, पिसिफॉर्म (Scaphoid, Lunate, Triquetrum, Pisiform)",
      "(C) नॅव्हिक्युलर, क्युबॉईड, क्युनिफॉर्म्स",
      "(D) टॅलस, कॅल्केनिअस, नॅव्हिक्युलर"
    ],
    correct_answer: "(B) Scaphoid, lunate, triquetrum, pisiform",
    correct_answer_mr: "(B) स्कॅफॉईड, ल्युनेट, ट्रायक्वेट्रम, पिसिफॉर्म (Scaphoid, Lunate, Triquetrum, Pisiform)",
    explanation: "The proximal carpal row consists of scaphoid, lunate, triquetrum, and pisiform from thumb side to little finger side.",
    explanation_mr: "मनगटाच्या पहिल्या (प्रॉक्सिमल) रांगेत स्कॅफॉईड, ल्युनेट, ट्रायक्वेट्रम आणि पिसिफॉर्म ही हाडे असतात.",
    source_page: 93,
    difficulty: 'easy'
  },
  {
    id: 103,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which carpal bone presents a distinctive hook-like process called the hamulus?",
    question_mr: "कोणत्या कार्पल हाडाला हुकसारखा (Hook-like) विशिष्ट भाग असतो ज्याला हॅम्युलस (Hamulus) म्हणतात?",
    options: [
      "(A) Capitate",
      "(B) Scaphoid",
      "(C) Hamate",
      "(D) Trapezium"
    ],
    options_mr: [
      "(A) कॅपिटेट",
      "(B) स्कॅफॉईड",
      "(C) हॅमेट (Hamate / Unciform)",
      "(D) ट्रॅपेझियम"
    ],
    correct_answer: "(C) Hamate",
    correct_answer_mr: "(C) हॅमेट (Hamate / Unciform)",
    explanation: "The hamate bone features a prominent hook-like anterior projection called the hamulus or hook of hamate.",
    explanation_mr: "हॅमेट (Hamate) या हाडावर 'हॅम्युलस' नावाचा हुकासारखा फुगीर भाग असतो.",
    source_page: 94,
    difficulty: 'medium'
  },
  {
    id: 104,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The two parallel long bones of the forearm consist of the:",
    question_mr: "हाताच्या कोपरापासून मनगटापर्यंत असणारी दोन मुख्य हाडे कोणती?",
    options: [
      "(A) Tibia and Fibula",
      "(B) Radius (laterally) and Ulna (medially)",
      "(C) Humerus and Scapula",
      "(D) Metacarpals and Phalanges"
    ],
    options_mr: [
      "(A) टिबिया आणि फिब्युला",
      "(B) रेडियस - बाहेरून व अल्ना - आतून (Radius laterally & Ulna medially)",
      "(C) ह्युमेरस आणि स्कॅप्युला",
      "(D) मेटाकार्पल्स आणि फॅलँजेस"
    ],
    correct_answer: "(B) Radius (laterally) and Ulna (medially)",
    correct_answer_mr: "(B) रेडियस - बाहेरून व अल्ना - आतून (Radius laterally & Ulna medially)",
    explanation: "The forearm is composed of the radius located laterally (thumb side) and the ulna located medially.",
    explanation_mr: "फोरआर्ममध्ये अंगठ्याच्या बाजूला रेडियस (Radius) व करंगळीच्या बाजूला अल्ना (Ulna) हाड असते.",
    source_page: 95,
    difficulty: 'easy'
  },
  {
    id: 105,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which anatomical prominence is found on the anterolateral surface of the mid-humeral shaft?",
    question_mr: "वरच्या हातातील ह्युमेरस (Humerus) हाडाच्या मध्यभागावर बाहेरच्या बाजूला असलेला स्नायू जोडणारा फुगीर भाग कोणता?",
    options: [
      "(A) Greater tubercle",
      "(B) Olecranon process",
      "(C) Deltoid tuberosity",
      "(D) Coracoid process"
    ],
    options_mr: [
      "(A) ग्रेटर ट्युबरकल",
      "(B) अॉलेक्रॅनन प्रोसेस",
      "(C) डेल्टॉईड ट्युबेरोसिटी (Deltoid Tuberosity)",
      "(D) कोराकॉईड प्रोसेस"
    ],
    correct_answer: "(C) Deltoid tuberosity",
    correct_answer_mr: "(C) डेल्टॉईड ट्युबेरोसिटी (Deltoid Tuberosity)",
    explanation: "The deltoid tuberosity is a V-shaped rough area on the anterolateral surface of the humerus shaft where the deltoid muscle attaches.",
    explanation_mr: "ह्युमेरसवर डेल्टॉईड स्नायू जोडण्यासाठी 'Deltoid Tuberosity' हा फुगीर भाग असतो.",
    source_page: 100,
    difficulty: 'easy'
  },
  {
    id: 106,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The largest tarsal bone that forms the heel and serves as the attachment point for the Achilles tendon is the:",
    question_mr: "पायाची टाच बनवणारे आणि अ‍ॅकिलीस टेंडन (Achilles Tendon) जोडलेले असणारे सर्वात मोठे टार्सेल हाड कोणते?",
    options: [
      "(A) Talus",
      "(B) Navicular",
      "(C) Cuboid",
      "(D) Calcaneus"
    ],
    options_mr: [
      "(A) टॅलस",
      "(B) नॅव्हिक्युलर",
      "(C) क्युबॉईड",
      "(D) कॅल्केनिअस (Calcaneus)"
    ],
    correct_answer: "(D) Calcaneus",
    correct_answer_mr: "(D) कॅल्केनिअस (Calcaneus)",
    explanation: "The calcaneus (heel bone) is the largest tarsal bone, projecting posteriorly to receive the Achilles tendon.",
    explanation_mr: "टाचेचे कॅल्केनिअस (Calcaneus) हे सर्वात मोठे टार्सेल हाड आहे.",
    source_page: 108,
    difficulty: 'easy'
  },
  {
    id: 107,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The smooth superior articular surface formed by the medial and lateral condyles of the tibia is called the:",
    question_mr: "गुडघ्याच्या सांध्यामध्ये टिबिया हाडाच्या वरील सपाट व गुळगुळीत भागाला काय म्हणतात?",
    options: [
      "(A) Intercondylar eminence",
      "(B) Tibial plateau",
      "(C) Tibial tuberosity",
      "(D) Medial malleolus"
    ],
    options_mr: [
      "(A) इंटरकॉन्डायलर एमिनेन्स",
      "(B) टिबियल प्लॅटो (Tibial Plateau)",
      "(C) टिबियल ट्युबेरोसिटी",
      "(D) मेडियल मॅलिओलस"
    ],
    correct_answer: "(B) Tibial plateau",
    correct_answer_mr: "(B) टिबियल प्लॅटो (Tibial Plateau)",
    explanation: "The superior smooth surfaces of the tibial condyles form the tibial plateau which articulates with the femoral condyles.",
    explanation_mr: "टिबियाच्या वरील सपाट पृष्ठभागाला 'Tibial Plateau' म्हणतात ज्यावर फिमरचे कॉन्डाईल्स टेकतात.",
    source_page: 111,
    difficulty: 'medium'
  },
  {
    id: 108,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which statement correctly describes a characteristic of the female pelvis compared to the male pelvis?",
    question_mr: "पुरुष पेलव्हिसच्या तुलनेत स्त्री पेलव्हिसचे कोणते वैशिष्ट्य बरोबर आहे?",
    options: [
      "(A) The female pelvis is deeper and narrower.",
      "(B) The pelvic outlet is wider and more circular in the female.",
      "(C) The angle formed by the pubic arch is smaller in the female.",
      "(D) The ischial tuberosities are closer together in the female."
    ],
    options_mr: [
      "(A) स्त्री पेलव्हिस अधिक खोल व अरुंद असतो",
      "(B) स्त्रीचा पेल्विक आउटलेट अधिक रुंद व वर्तुळाकार असतो (Wider & Circular Outlet)",
      "(C) स्त्रीचा प्युबिक आर्च अँगल लहान असतो",
      "(D) इश्किअल ट्युबेरोसिटीज जवळ असतात"
    ],
    correct_answer: "(B) The pelvic outlet is wider and more circular in the female.",
    correct_answer_mr: "(B) स्त्रीचा पेल्विक आउटलेट अधिक रुंद व वर्तुळाकार असतो (Wider & Circular Outlet)",
    explanation: "The female pelvis is adapted for childbearing: shallower, wider, with a rounder pelvic inlet/outlet and pubic arch angle >90°.",
    explanation_mr: "स्त्रीचा पेलव्हिस प्रसूतीसाठी रुंद, कमी खोल आणि वर्तुळाकार आकाराचा असतो.",
    source_page: 116,
    difficulty: 'medium'
  },
  {
    id: 109,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In a PA projection of the hand, where should the central ray (CR) be directed?",
    question_mr: "हाताच्या PA प्रोजेक्शनमध्ये सेंट्रली एक्स-रे बीम (CR) कुठे केंद्रित केला पाहिजे?",
    options: [
      "(A) Perpendicular to the 3rd metacarpophalangeal (MCP) joint",
      "(B) Perpendicular to the 2nd proximal interphalangeal (IP) joint",
      "(C) Perpendicular to the midcarpal region",
      "(D) Perpendicular to the base of the 3rd metacarpal"
    ],
    options_mr: [
      "(A) तिसऱ्या मेटाकार्पोफॅलँजियल (3rd MCP) सांध्यावर लंबवत",
      "(B) दुसऱ्या प्रॉक्सिमल इंटरफॅलँजियल (2nd PIP) सांध्यावर लंबवत",
      "(C) मिडकार्पल भागावर लंबवत",
      "(D) तिसऱ्या मेटाकार्पलच्या बेसला लंबवत"
    ],
    correct_answer: "(A) Perpendicular to the 3rd metacarpophalangeal (MCP) joint",
    correct_answer_mr: "(A) तिसऱ्या मेटाकार्पोफॅलँजियल (3rd MCP) सांध्यावर लंबवत",
    explanation: "For a PA projection of the hand, the central ray is directed perpendicular to the 3rd MCP joint to best demonstrate all bones of the hand.",
    explanation_mr: "हाताच्या PA एक्स-रे साठी सेंट्रली एक्स-रे बीम ३ऱ्या MCP सांध्यावर लंबवत (Perpendicular) निर्देशित केला जातो.",
    source_page: 92,
    difficulty: 'easy'
  },
  {
    id: 110,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Why are the metacarpophalangeal (MCP) joints slightly flexed during a PA projection of the wrist?",
    question_mr: "मनगटाच्या PA प्रोजेक्शनमध्ये हाताची बोटे थोडी दुमडून (MCP joints flexed) का ठेवली जातात?",
    options: [
      "(A) To open the intercarpal joint spaces",
      "(B) To reduce the object-to-image receptor distance (OID)",
      "(C) To superimpose the radius and ulna",
      "(D) To demonstrate the scaphoid without foreshortening"
    ],
    options_mr: [
      "(A) इंटरकार्पल जॉइंट स्पेस उघडण्यासाठी",
      "(B) मनगट व कसेट मधील अंतर (OID) कमी करण्यासाठी",
      "(C) रेडियस आणि अल्नाला ओव्हरलॅप करण्यासाठी",
      "(D) स्कॅफॉईड स्पष्ट दिसण्यासाठी"
    ],
    correct_answer: "(B) To reduce the object-to-image receptor distance (OID)",
    correct_answer_mr: "(B) मनगट व कसेट मधील अंतर (OID) कमी करण्यासाठी",
    explanation: "Slightly flexing the MCP joints brings the carpal bones closer to the IR, decreasing OID and improving image sharpness.",
    explanation_mr: "बोटे दुमडल्यामुळे मनगटातील कार्पल हाडे कसेटच्या (IR) जवळ येतात, ज्यामुळे OID कमी होऊन इमेजची स्पष्टता वाढते.",
    source_page: 92,
    difficulty: 'medium'
  },
  {
    id: 111,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which wrist positioning maneuver is used to reduce foreshortening of the scaphoid and best demonstrate lateral carpal interspaces?",
    question_mr: "स्कॅफॉईड हाड न आखडता (Without foreshortening) स्पष्ट पाहण्यासाठी मनगटाची कोणती विशेष पोझिशन वापरली जाते?",
    options: [
      "(A) Radial flexion/deviation",
      "(B) Ulnar flexion/deviation",
      "(C) Carpal canal hyperextension",
      "(D) Lateral in flexion"
    ],
    options_mr: [
      "(A) रेडिअल डेव्हिएशन",
      "(B) अल्नार फ्लेक्शन / डेव्हिएशन (Ulnar Deviation)",
      "(C) कार्पल कॅनॉल हायपरएक्स्टेंशन",
      "(D) लॅटरल फ्लेक्शन"
    ],
    correct_answer: "(B) Ulnar flexion/deviation",
    correct_answer_mr: "(B) अल्नार फ्लेक्शन / डेव्हिएशन (Ulnar Deviation)",
    explanation: "Ulnar deviation (ulnar flexion) opens up the lateral carpal interspaces and prevents foreshortening of the scaphoid bone.",
    explanation_mr: "अल्नार डेव्हिएशन केल्यामुळे मनगटाच्या बाजूची जागा उघडते आणि स्कॅफॉईड हाड स्पष्ट लांबट दिसते.",
    source_page: 93,
    difficulty: 'medium'
  },
  {
    id: 112,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "For the scaphoid (Stecher) method, how should the part or central ray be angled?",
    question_mr: "स्कॅफॉईडसाठी स्टेचर पद्धतीमध्ये (Stecher Method) एक्स-रे बीम किंवा हात किती अंशावर झुकवला जातो?",
    options: [
      "(A) Central ray angled 20 degrees toward the elbow or forearm elevated 20 degrees",
      "(B) Central ray angled 25 to 30 degrees into the long axis of the hand",
      "(C) Hand rotated medially 45 degrees",
      "(D) Central ray angled 10 degrees toward the heel"
    ],
    options_mr: [
      "(A) कोपराच्या दिशेने २० अंश अँगल किंवा फोरआर्म २० अंशाने वर उचलणे (20° toward elbow / 20° elevation)",
      "(B) २५ ते ३० अंश हाताच्या अक्षावर अँगल देणे",
      "(C) हात ४५ अंशाने आत फिरवणे",
      "(D) १० अंश टाचेच्या दिशेने अँगल देणे"
    ],
    correct_answer: "(A) Central ray angled 20 degrees toward the elbow or forearm elevated 20 degrees",
    correct_answer_mr: "(A) कोपराच्या दिशेने २० अंश अँगल किंवा फोरआर्म २० अंशाने वर उचलणे (20° toward elbow / 20° elevation)",
    explanation: "In the Stecher method, elevating the hand 20° on an inclined wedge or angling the CR 20° proximally places the scaphoid perpendicular to the CR.",
    explanation_mr: "स्टेचर पद्धतीमध्ये २० अंशाचा वेज (Wedge) ठेवून हात उचलला जातो किंवा बीमला २०° कोपराकडे कोनात्मक अँगल दिला जातो.",
    source_page: 93,
    difficulty: 'hard'
  },
  {
    id: 113,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "What is the primary reason the hand must be supinated during an AP projection of the forearm?",
    question_mr: "फोरआर्मच्या AP एक्स-रे मध्ये तळहात समोर/वर (Supinated) ठेवणे का आवश्यक असते?",
    options: [
      "(A) To superimpose the humeral epicondyles",
      "(B) To flex the elbow 90 degrees",
      "(C) To avoid overlap of the proximal radius and ulna",
      "(D) To demonstrate the coronoid process in profile"
    ],
    options_mr: [
      "(A) ह्युमेरसचे एपिकॉन्डाईल्स ओव्हरलॅप करण्यासाठी",
      "(B) कोपर ९० अंशात दुमडण्यासाठी",
      "(C) रेडियस आणि अल्ना ही हाडे एकमेकांवर ओव्हरलॅप होणे टाळण्यासाठी (To avoid overlap of Radius & Ulna)",
      "(D) कोरोनॉईड प्रोसेस स्पष्ट दाखवण्यासाठी"
    ],
    correct_answer: "(C) To avoid overlap of the proximal radius and ulna",
    correct_answer_mr: "(C) रेडियस आणि अल्ना ही हाडे एकमेकांवर ओव्हरलॅप होणे टाळण्यासाठी (To avoid overlap of Radius & Ulna)",
    explanation: "Supinating the hand prevents the radius from crossing over the ulna, which occurs naturally during pronation.",
    explanation_mr: "हात प्रोनेट (Pronated) केल्यास रेडियस हाड अल्नावर क्रॉस होते, म्हणून हात सुपाईन (Supine) ठेवल्यास दोन्ही हाडे समांतर व सुटसुटीत दिसतात.",
    source_page: 95,
    difficulty: 'medium'
  },
  {
    id: 114,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In a lateral projection of the elbow, which structure is demonstrated in profile?",
    question_mr: "कोपराच्या लॅटरल (Lateral) एक्स-रे मध्ये कोपराचा कोणता भाग प्रोफाईलमध्ये (प्रोफाईल व्ह्यू) स्पष्ट दिसतो?",
    options: [
      "(A) Coronoid process",
      "(B) Olecranon process",
      "(C) Radial tuberosity",
      "(D) Greater tubercle"
    ],
    options_mr: [
      "(A) कोरोनॉईड प्रोसेस",
      "(B) ऑलेक्रॅनन प्रोसेस (Olecranon Process)",
      "(C) रेडिअल ट्युबेरोसिटी",
      "(D) ग्रेटर ट्युबरकल"
    ],
    correct_answer: "(B) Olecranon process",
    correct_answer_mr: "(B) ऑलेक्रॅनन प्रोसेस (Olecranon Process)",
    explanation: "A true 90° flexed lateral elbow projection demonstrates the olecranon process of the ulna in profile and opens the trochlear notch.",
    explanation_mr: "९० अंशात दुमडलेल्या लॅटरल कोपराच्या एक्स-रे मध्ये उल्ना हाडाची ऑलेक्रॅनन प्रोसेस (Olecranon) अगदी स्पष्ट प्रोफाईलमध्ये दिसते.",
    source_page: 96,
    difficulty: 'easy'
  },
  {
    id: 115,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which projection of the elbow best demonstrates the coronoid process in profile without superimposition?",
    question_mr: "कोपर सांध्याच्या कोणत्या प्रोजेक्शनमध्ये कोरोनॉईड प्रोसेस (Coronoid Process) ओव्हरलॅपिंगशिवाय स्पष्ट दिसते?",
    options: [
      "(A) AP projection",
      "(B) Lateral projection",
      "(C) Internal (medial) oblique",
      "(D) External (lateral) oblique"
    ],
    options_mr: [
      "(A) AP प्रोजेक्शन",
      "(B) लॅटरल प्रोजेक्शन",
      "(C) अंतर्गत / मेडियल ऑब्लीक (Internal / Medial Oblique)",
      "(D) बाह्य / लॅटरल ऑब्लीक"
    ],
    correct_answer: "(C) Internal (medial) oblique",
    correct_answer_mr: "(C) अंतर्गत / मेडियल ऑब्लीक (Internal / Medial Oblique)",
    explanation: "Internal (medial) rotation of the elbow by 45 degrees projects the coronoid process free of superimposition.",
    explanation_mr: "हात आतल्या बाजूला ४५ अंश फिरवून मेडियल ऑब्लीक घेतल्यास कोरोनॉईड प्रोसेस स्पष्टपणे दिसते.",
    source_page: 97,
    difficulty: 'hard'
  },
  {
    id: 116,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which projection of the elbow demonstrates the radial head, neck, and tuberosity free from ulnar superimposition?",
    question_mr: "कोपराचे कोणते प्रोजेक्शन रेडियसचे डोके, मान आणि ट्युबेरोसिटी (Radial Head, Neck & Tuberosity) अल्नापासून वेगळे स्पष्ट दाखवते?",
    options: [
      "(A) AP projection",
      "(B) Lateral projection",
      "(C) Internal (medial) oblique",
      "(D) External (lateral) oblique"
    ],
    options_mr: [
      "(A) AP प्रोजेक्शन",
      "(B) लॅटरल प्रोजेक्शन",
      "(C) अंतर्गत / मेडियल ऑब्लीक",
      "(D) बाह्य / लॅटरल ऑब्लीक (External / Lateral Oblique)"
    ],
    correct_answer: "(D) External (lateral) oblique",
    correct_answer_mr: "(D) बाह्य / लॅटरल ऑब्लीक (External / Lateral Oblique)",
    explanation: "External (lateral) rotation of the elbow by 45 degrees separates the radial head, neck, and tuberosity from the ulna.",
    explanation_mr: "हात बाहेरच्या बाजूला ४५ अंश फिरवून लॅटरल ऑब्लीक घेतल्यास रेडिअल हेड आणि नेक पूर्णपणे मोकळे दिसतात.",
    source_page: 97,
    difficulty: 'medium'
  },
  {
    id: 117,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In an AP projection of the humerus, how should the epicondyles be positioned relative to the IR?",
    question_mr: "ह्युमेरसच्या (Humerus) AP एक्स-रे मध्ये दोन्ही एपिकॉन्डाईल्स (Epicondyles) कसेटच्या (IR) संदर्भात कसे ठेवले पाहिजेत?",
    options: [
      "(A) Perpendicular to the IR",
      "(B) Parallel to the IR",
      "(C) 45 degrees to the IR",
      "(D) 60 degrees to the IR"
    ],
    options_mr: [
      "(A) कसेटला ९० अंशात लंबवत",
      "(B) कसेटला समांतर (Parallel to the IR)",
      "(C) कसेटशी ४५ अंशात",
      "(D) कसेटशी ६० अंशात"
    ],
    correct_answer: "(B) Parallel to the IR",
    correct_answer_mr: "(B) कसेटला समांतर (Parallel to the IR)",
    explanation: "For an AP humerus, the epicondyles are placed parallel to the IR to show the greater tubercle in profile laterally.",
    explanation_mr: "AP ह्युमेरससाठी हाताचे दोन्ही एपिकॉन्डाईल्स कसेटला समांतर ठेवले जातात, ज्यामुळे ग्रेटर ट्युबरकल स्पष्ट दिसतो.",
    source_page: 99,
    difficulty: 'easy'
  },
  {
    id: 118,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which rotational projection of the shoulder places the humerus in a true AP position and shows the greater tubercle in profile?",
    question_mr: "खांद्याच्या कोणत्या रोटेशन प्रोजेक्शनमुळे ह्युमेरस खऱ्या AP पोझिशनमध्ये येतो आणि ग्रेटर ट्युबरकल (Greater Tubercle) प्रोफाईलमध्ये दिसतो?",
    options: [
      "(A) Internal rotation",
      "(B) External rotation",
      "(C) Neutral position",
      "(D) Transthoracic lateral"
    ],
    options_mr: [
      "(A) अंतर्गत रोटेशन (Internal Rotation)",
      "(B) बाह्य रोटेशन (External Rotation)",
      "(C) न्यूट्रल पोझिशन",
      "(D) ट्रान्सथोरॅसिक लॅटरल"
    ],
    correct_answer: "(B) External rotation",
    correct_answer_mr: "(B) बाह्य रोटेशन (External Rotation)",
    explanation: "External rotation supinates the hand and places the epicondyles parallel to the IR, demonstrating the greater tubercle in profile.",
    explanation_mr: "हात बाहेरच्या बाजूला फिरवल्यास (External Rotation) ग्रेटर ट्युबरकल लॅटरल बाजूला प्रोफाईलमध्ये दिसतो.",
    source_page: 101,
    difficulty: 'easy'
  },
  {
    id: 119,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The Grashey method for the shoulder requires rotating the patient 35-45 degrees toward the affected side. What is best demonstrated?",
    question_mr: "खांद्यासाठी ग्रॅशे पद्धतीमध्ये (Grashey Method) रुग्ण ३५-४५ अंश फिरवला जातो. यात काय स्पष्टपणे दिसून येते?",
    options: [
      "(A) Lesser tubercle in profile",
      "(B) Acromioclavicular joint separation",
      "(C) Glenohumeral joint and glenoid cavity",
      "(D) Scapular body without rib superimposition"
    ],
    options_mr: [
      "(A) लेसर ट्युबरकल",
      "(B) एसी जॉइंट सेपरेशन",
      "(C) ग्लेनोह्युमेरल सांधा व ग्लेनॉईड पोकळी (Glenohumeral Joint & Glenoid Cavity)",
      "(D) स्कॅप्युलाची बॉडी"
    ],
    correct_answer: "(C) Glenohumeral joint and glenoid cavity",
    correct_answer_mr: "(C) ग्लेनोह्युमेरल सांधा व ग्लेनॉईड पोकळी (Glenohumeral Joint & Glenoid Cavity)",
    explanation: "The Grashey method places the glenoid cavity perpendicular to the IR, opening up the glenohumeral joint space.",
    explanation_mr: "ग्रॅशे पद्धतीत ३५-४५ अंश फिरवल्यामुळे ग्लेनॉईड कॅव्हिटी एक्स-रे बीमला समांतर होते आणि ग्लेनोह्युमेरल जॉइंट स्पेस उघडते.",
    source_page: 103,
    difficulty: 'medium'
  },
  {
    id: 120,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "What is the recommended central ray angulation for an AP axial projection of the clavicle?",
    question_mr: "कॉलरच्या हाडाच्या (Clavicle) AP अ‍ॅक्सिअल प्रोजेक्शनसाठी एक्स-रे बीमला किती अंशाचा अँगल (Cephalad Angle) दिला जातो?",
    options: [
      "(A) 15-30 degrees caudad",
      "(B) 15-30 degrees cephalad",
      "(C) 45 degrees cephalad",
      "(D) Perpendicular to the midshaft"
    ],
    options_mr: [
      "(A) १५ ते ३० अंश कॉडॅड (पायाकडे)",
      "(B) १५ ते ३० अंश सेफॅलॅड / डोक्याकडे (15-30° Cephalad)",
      "(C) ४५ अंश सेफॅलॅड",
      "(D) मिडशाफ्टला ९० अंशात लंबवत"
    ],
    correct_answer: "(B) 15-30 degrees cephalad",
    correct_answer_mr: "(B) १५ ते ३० अंश सेफॅलॅड / डोक्याकडे (15-30° Cephalad)",
    explanation: "AP axial clavicle requires a 15–30 degree cephalic angulation to project the clavicle above the ribs and scapula.",
    explanation_mr: "क्लॅव्हिकलच्या AP Axial एक्स-रे साठी १५ ते ३० अंश डोक्याच्या दिशेने (Cephalad) अँगल दिला जातो जेणेकरून क्लॅव्हिकल पंजऱ्याच्या वर दिसेल.",
    source_page: 105,
    difficulty: 'medium'
  },
  {
    id: 121,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "During an AP projection of the scapula, why is the patient's arm abducted 90 degrees with the elbow flexed?",
    question_mr: "स्कॅप्युलाच्या (Scapula) AP एक्स-रे दरम्यान रुग्णाचा हात ९० अंशात बाजूला (Abducted) का पसरला जातो?",
    options: [
      "(A) To move the scapula away from the rib cage",
      "(B) To superimpose the vertebral and axillary borders",
      "(C) To place the epicondyles perpendicular to the IR",
      "(D) To demonstrate the acromion process in profile"
    ],
    options_mr: [
      "(A) स्कॅप्युलाला छातीच्या पंजऱ्यापासून (Rib Cage) दूर करण्यासाठी",
      "(B) व्हर्टिब्रल व अ‍ॅक्सिलरी बॉर्डर ओव्हरलॅप करण्यासाठी",
      "(C) एपिकॉन्डाईल्स कसेटला लंबवत ठेवण्यासाठी",
      "(D) अ‍ॅक्रोमियन प्रोसेस प्रोफाईलमध्ये पाहण्यासाठी"
    ],
    correct_answer: "(A) To move the scapula away from the rib cage",
    correct_answer_mr: "(A) स्कॅप्युलाला छातीच्या पंजऱ्यापासून (Rib Cage) दूर करण्यासाठी",
    explanation: "Abducting the arm 90 degrees pulls the scapula laterally, reducing superimposition of the ribs over the scapular body.",
    explanation_mr: "हात ९० अंश बाजूला उभारल्याने स्कॅप्युला बाजूला सरकतो व बरगड्यांचा (Ribs) अडथळा कमी होतो.",
    source_page: 106,
    difficulty: 'medium'
  },
  {
    id: 122,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In a lateral (anterior oblique) projection of the scapula, how is the patient rotated?",
    question_mr: "स्कॅप्युलाच्या लॅटरल (Anterior Oblique) एक्स-रे मध्ये रुग्णाला किती अंशात फिरवले जाते?",
    options: [
      "(A) Supine with the arm by the side",
      "(B) Erect PA with a 45-60 degree rotation and affected side toward the IR",
      "(C) Recumbent AP oblique with the affected side away from the IR",
      "(D) Seated with the arm fully extended upward"
    ],
    options_mr: [
      "(A) सुपाईन झोपवून हात बाजूला ठेवणे",
      "(B) उभे राहून PA पोझिशनमध्ये ४५ ते ६० अंश फिरवून दुखणारा भाग कसेटजवळ ठेवणे (45-60° rotation toward IR)",
      "(C) दुखणारा भाग कसेटपासून दूर ठेवून AP Oblique करणे",
      "(D) हात पूर्ण वर करून बसवणे"
    ],
    correct_answer: "(B) Erect PA with a 45-60 degree rotation and affected side toward the IR",
    correct_answer_mr: "(B) उभे राहून PA पोझिशनमध्ये ४५ ते ६० अंश फिरवून दुखणारा भाग कसेटजवळ ठेवणे (45-60° rotation toward IR)",
    explanation: "For a lateral scapula, rotating the patient 45-60 degrees in an RAO or LAO position places the scapular body perpendicular to the IR.",
    explanation_mr: "लॅटरल स्कॅप्युलासाठी रुग्णाला PA मध्ये ४५ ते ६० अंश ऑब्लीक केले जाते जेणेकरून स्कॅप्युला Y आकारासारखा लॅटरल दिसेल.",
    source_page: 106,
    difficulty: 'hard'
  },
  {
    id: 123,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "For a dorso-plantar (AP) projection of the foot, where should the central ray be directed?",
    question_mr: "पायाच्या पंजाच्या (Foot / AP Dorso-plantar) एक्स-रे मध्ये सेंट्रली एक्स-रे बीम कुठे मारला जातो?",
    options: [
      "(A) Perpendicular to the mid-calcaneus",
      "(B) Perpendicular to the lateral malleolus",
      "(C) Perpendicular or 10 degrees toward the heel to the base of the third metatarsal",
      "(D) 30 degrees medially to the cuboid"
    ],
    options_mr: [
      "(A) मधील कॅल्केनिअसवर लंबवत",
      "(B) लॅटरल मॅलिओलसवर लंबवत",
      "(C) तिसऱ्या मेटाटार्सलच्या बेसला १० अंश टाचेच्या दिशेने किंवा ९० अंशात (Base of 3rd Metatarsal)",
      "(D) क्युबॉईडवर ३० अंश आत"
    ],
    correct_answer: "(C) Perpendicular or 10 degrees toward the heel to the base of the third metatarsal",
    correct_answer_mr: "(C) तिसऱ्या मेटाटार्सलच्या बेसला १० अंश टाचेच्या दिशेने किंवा ९० अंशात (Base of 3rd Metatarsal)",
    explanation: "The central ray for an AP foot is angled 10° posterior (towards heel) centered to the base of the 3rd metatarsal to open tarsometatarsal joints.",
    explanation_mr: "पायाच्या AP एक्स-रे मध्ये बीम १० अंश टाचेकडे झुकवून तिसऱ्या मेटाटार्सलच्या मुळाशी (Base) केंद्रित करतात.",
    source_page: 107,
    difficulty: 'easy'
  },
  {
    id: 124,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "A medial oblique projection of the foot requires the foot to be rotated medially by how many degrees?",
    question_mr: "पायाच्या पंजाच्या मेडियल ऑब्लीक (Medial Oblique Foot) एक्स-रे साठी पाय आतल्या बाजूला किती अंश फिरवला पाहिजे?",
    options: [
      "(A) 10 degrees",
      "(B) 15-20 degrees",
      "(C) 30 degrees",
      "(D) 45-60 degrees"
    ],
    options_mr: [
      "(A) १० अंश",
      "(B) १५ ते २० अंश",
      "(C) ३० अंश (30 degrees)",
      "(D) ४५ ते ६० अंश"
    ],
    correct_answer: "(C) 30 degrees",
    correct_answer_mr: "(C) ३० अंश (30 degrees)",
    explanation: "Rotating the foot medially 30 degrees places the plantar surface 30° to the IR, demonstrating the cuboid, sinus tarsi, and metatarsals.",
    explanation_mr: "पायाचा मेडियल ऑब्लीक घेताना तळपाय आतल्या बाजूला बरोबर ३० अंशात कलवला जातो.",
    source_page: 108,
    difficulty: 'easy'
  },
  {
    id: 125,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In which projection of the foot is the tuberosity of the fifth metatarsal best demonstrated without superimposition?",
    question_mr: "पायाच्या कोणत्या एक्स-रे व्ह्यूमध्ये ५व्या मेटाटार्सलची ट्युबेरोसिटी (Tuberosity of 5th Metatarsal) स्पष्ट व ओव्हरलॅपिंगशिवाय दिसते?",
    options: [
      "(A) Dorso-plantar (AP) foot",
      "(B) Medial oblique foot",
      "(C) Lateral oblique foot",
      "(D) Mediolateral foot"
    ],
    options_mr: [
      "(A) डॉर्सो-प्लांटर (AP) व्ह्यू",
      "(B) मेडियल ऑब्लीक व्ह्यू (Medial Oblique Foot)",
      "(C) लॅटरल ऑब्लीक व्ह्यू",
      "(D) मेडिओलॅटरल व्ह्यू"
    ],
    correct_answer: "(B) Medial oblique foot",
    correct_answer_mr: "(B) मेडियल ऑब्लीक व्ह्यू (Medial Oblique Foot)",
    explanation: "The 30-degree medial oblique foot projection clearly isolates the tuberosity at the base of the fifth metatarsal (common site for Jones fracture).",
    explanation_mr: "३० अंश मेडियल ऑब्लीक व्ह्यूमध्ये ५व्या मेटाटार्सलचा पायाचा बाह्य फुगीर भाग (Tuberosity) अतिशय स्पष्ट दिसतो.",
    source_page: 108,
    difficulty: 'medium'
  },
  {
    id: 126,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "In trauma radiography, what technique is frequently used to obtain a lateral projection of an injured limb without moving the patient?",
    question_mr: "ट्रॉमा/अपघातग्रस्त रुग्णाचा पाय किंवा हात न हलवता लॅटरल एक्स-रे काढण्यासाठी कोणती विशेष पद्धत वापरली जाते?",
    options: [
      "(A) Transthoracic lateral",
      "(B) Horizontal cross-table lateral",
      "(C) Scapular Y view",
      "(D) Grashey method"
    ],
    options_mr: [
      "(A) ट्रान्सथोरॅसिक लॅटरल",
      "(B) हॉरिझॉन्टल क्रॉस-टेबल लॅटरल (Horizontal Cross-Table Lateral)",
      "(C) स्कॅप्युलर Y व्ह्यू",
      "(D) ग्रॅशे पद्धत"
    ],
    correct_answer: "(B) Horizontal cross-table lateral",
    correct_answer_mr: "(B) हॉरिझॉन्टल क्रॉस-टेबल लॅटरल (Horizontal Cross-Table Lateral)",
    explanation: "Cross-table lateral technique uses a horizontal X-ray beam and vertical cassette, allowing lateral views without patient repositioning.",
    explanation_mr: "क्रॉस-टेबल लॅटरल पद्धतीमध्ये एक्स-रे ट्यूब आडवी करून रुग्णाला न हलवता लॅटरल एक्स-रे घेतला जातो.",
    source_page: 110,
    difficulty: 'easy'
  },
  {
    id: 127,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The carpal canal (Gaynor-Hart) projection is used to demonstrate which structure?",
    question_mr: "गेनर-हार्ट (Gaynor-Hart / Carpal Canal) पद्धतीचा एक्स-रे मनगटाची कोणती रचना पाहण्यासाठी केला जातो?",
    options: [
      "(A) The intercondyloid fossa",
      "(B) The glenohumeral joint",
      "(C) The carpal tunnel and volar surface of the carpals",
      "(D) The proximal radioulnar joint"
    ],
    options_mr: [
      "(A) इंटरकॉन्डायलॉइड फोसा",
      "(B) ग्लेनोह्युमेरल सांधा",
      "(C) कार्पल टनेल आणि कार्पल हाडांची व्होलार बाजू (Carpal Tunnel & Volar Surface)",
      "(D) प्रॉक्सिमल रेडिओअल्नार सांधा"
    ],
    correct_answer: "(C) The carpal tunnel and volar surface of the carpals",
    correct_answer_mr: "(C) कार्पल टनेल आणि कार्पल हाडांची व्होलार बाजू (Carpal Tunnel & Volar Surface)",
    explanation: "The Gaynor-Hart (carpal canal) view directs the CR 25–30° to the long axis of the hand to visualize the carpal tunnel and pisiform/hamate hooks.",
    explanation_mr: "गेनर-हार्ट व्ह्यूमध्ये मनगट पूर्ण मागे ताणून (Hyperextended) कार्पल टनेल (Carpal Tunnel) मधील मज्जातंतू व हाडांचे हुक पाहिले जातात.",
    source_page: 94,
    difficulty: 'medium'
  },
  {
    id: 128,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "When radiographing the wrist in a lateral projection, the radius and ulna should be:",
    question_mr: "मनगटाच्या (Wrist) खऱ्या लॅटरल एक्स-रे मध्ये रेडियस आणि अल्नाची डिस्टल टोके कशी दिसली पाहिजेत?",
    options: [
      "(A) Free of superimposition",
      "(B) Superimposed distally",
      "(C) Rotated 45 degrees externally",
      "(D) Rotated 45 degrees internally"
    ],
    options_mr: [
      "(A) ओव्हरलॅपिंगशिवाय स्वतंत्र",
      "(B) दूरच्या टोकाला एकमेकांवर ओव्हरलॅप झालेली (Superimposed Distally)",
      "(C) ४५ अंश बाह्य रोटेशनमध्ये",
      "(D) ४५ अंश अंतर्गत रोटेशनमध्ये"
    ],
    correct_answer: "(B) Superimposed distally",
    correct_answer_mr: "(B) दूरच्या टोकाला एकमेकांवर ओव्हरलॅप झालेली (Superimposed Distally)",
    explanation: "In a true lateral wrist image, the distal radius and ulna must be directly superimposed upon each other.",
    explanation_mr: "मनगटाच्या परफेक्ट लॅटरल एक्स-रे मध्ये रेडियस आणि अल्ना ही दोन हाडे एकमेकांच्या अगदी मागे ओव्हरलॅप झालेली दिसतात.",
    source_page: 92,
    difficulty: 'medium'
  },
  {
    id: 129,
    category: 'Patient Care: Vital Signs & Patient Assessment',
    section: 'technical',
    question: "Which of the following is the most frequently used pulse point for determination of a patient's pulse rate?",
    question_mr: "रुग्णाचा नाडीचा दर (Pulse rate) तपासण्यासाठी खालीलपैकी कोणता पल्स पॉईंट सर्वात जास्त वापरला जातो?",
    options: [
      "(A) Carotid pulse",
      "(B) Radial pulse",
      "(C) Femoral pulse",
      "(D) Popliteal pulse"
    ],
    options_mr: [
      "(A) कॅरोटिड पल्स (मानेवरील)",
      "(B) रेडिअल पल्स (मनगटावरील)",
      "(C) फेमोरल पल्स (मांडीवरील)",
      "(D) पॉप्लिटिअल पल्स (गुडघ्याच्या मागचा)"
    ],
    correct_answer: "(B) Radial pulse",
    correct_answer_mr: "(B) रेडिअल पल्स (मनगटावरील)",
    explanation: "Of the five most readily palpated pulse points, the radial pulse at the wrist is the most frequently used.",
    explanation_mr: "नाडीचे ठोके मोजण्यासाठी मनगटावरील रेडिअल पल्स (Radial pulse) ही सर्वात सोपी आणि सर्वाधिक वापरली जाणारी जागा आहे.",
    source_page: 15,
    difficulty: 'easy'
  },
  {
    id: 130,
    category: 'Patient Care: Vital Signs & Patient Assessment',
    section: 'technical',
    question: "A patient whose systolic blood pressure is consistently above 140 mm Hg and diastolic above 90 mm Hg is considered to have:",
    question_mr: "ज्या रुग्णाचा सिस्टोलिक रक्तदाब १४० mmHg पेक्षा जास्त आणि डायस्टोलिक ९० mmHg पेक्षा जास्त असतो, त्याला काय म्हणतात?",
    options: [
      "(A) Hypotension",
      "(B) Prehypertension",
      "(C) Hypertension",
      "(D) Orthostatic hypotension"
    ],
    options_mr: [
      "(A) हायपोटेन्शन (कमी रक्तदाब)",
      "(B) प्री-हायपरटेन्शन",
      "(C) हायपरटेन्शन (उच्च रक्तदाब)",
      "(D) ऑर्थोस्टॅटिक हायपोटेन्शन"
    ],
    correct_answer: "(C) Hypertension",
    correct_answer_mr: "(C) हायपरटेन्शन (उच्च रक्तदाब)",
    explanation: "Blood pressure consistently above 140/90 is considered hypertension, which left untreated can lead to renal, cardiac, or brain damage.",
    explanation_mr: "सतत १४०/९० mmHg पेक्षा जास्त रक्तदाब असणे म्हणजे हायपरटेन्शन (उच्च रक्तदाब) होय.",
    source_page: 16,
    difficulty: 'easy'
  },
  {
    id: 131,
    category: 'Patient Care: Emergency & Oxygen Support',
    section: 'technical',
    question: "Which oxygen delivery device is described as low-flow and is the most frequently used to supplement the oxygen in room air?",
    question_mr: "ऑक्सिजन पुरवठ्यासाठी कोणते लो-फ्लो साधन (Low-flow device) सर्वात जास्त वापरले जाते?",
    options: [
      "(A) Nasal cannula",
      "(B) Simple face mask",
      "(C) Nonrebreathing mask",
      "(D) Mechanical ventilator"
    ],
    options_mr: [
      "(A) नेझल कॅन्युला (Nasal Cannula)",
      "(B) सिंपल फेस मास्क",
      "(C) नॉन-रीब्रिथिंग मास्क",
      "(D) मेकॅनिकल व्हेंटिलेटर"
    ],
    correct_answer: "(A) Nasal cannula",
    correct_answer_mr: "(A) नेझल कॅन्युला (Nasal Cannula)",
    explanation: "The nasal cannula is a low-flow oxygen device and is the most frequently used device to supplement the oxygen in room air.",
    explanation_mr: "नेझल कॅन्युला हे हवेतील ऑक्सिजनची पातळी वाढवण्यासाठी सर्वात जास्त वापरले जाणारे लो-फ्लो साधन आहे.",
    source_page: 22,
    difficulty: 'easy'
  },
  {
    id: 132,
    category: 'Patient Care: Emergency & Medical Support',
    section: 'technical',
    question: "At what height should a patient's IV bottle or bag generally be hung above the level of the vein?",
    question_mr: "रुग्णाची IV बाटली किंवा बॅग रक्ताच्या शिरेच्या (Vein) पातळीपासून साधारणपणे किती उंचीवर टांगली पाहिजे?",
    options: [
      "(A) 5 to 10 inches",
      "(B) 10 to 15 inches",
      "(C) 18 to 24 inches",
      "(D) 30 to 36 inches"
    ],
    options_mr: [
      "(A) ५ ते १० इंच",
      "(B) १० ते १५ इंच",
      "(C) १८ ते २४ इंच (18 to 24 inches)",
      "(D) ३० ते ३६ इंच"
    ],
    correct_answer: "(C) 18 to 24 inches",
    correct_answer_mr: "(C) १८ ते २४ इंच (18 to 24 inches)",
    explanation: "The IV bottle or bag should be hung 18 to 24 inches above the level of the vein to maintain proper flow and prevent blood from returning into the tubing.",
    explanation_mr: "योग्य द्रव प्रवाह चालू राहण्यासाठी आणि रक्त नळीत परत येणे टाळण्यासाठी IV बॅग शिरेच्या पातळीपासून १८ ते २४ इंच वर टांगली जाते.",
    source_page: 24,
    difficulty: 'medium'
  },
  {
    id: 133,
    category: 'Patient Care: Emergency & Vital Signs',
    section: 'technical',
    question: "What is the medical term for a sudden decrease in blood pressure that occurs when a patient rises quickly to the erect position?",
    question_mr: "रुग्ण पटकन उभा राहिल्यावर रक्तदाबात अचानक होणाऱ्या घसरणीला (Sudden BP drop) वैद्यकीय भाषेत काय म्हणतात?",
    options: [
      "(A) Epistaxis",
      "(B) Orthostatic hypotension",
      "(C) Syncope",
      "(D) Vertigo"
    ],
    options_mr: [
      "(A) एपिस्टॅक्सिस",
      "(B) ऑर्थोस्टॅटिक हायपोटेन्शन (Orthostatic Hypotension)",
      "(C) सिंकोप (Syncope)",
      "(D) व्हर्टिगो (Vertigo)"
    ],
    correct_answer: "(B) Orthostatic hypotension",
    correct_answer_mr: "(B) ऑर्थोस्टॅटिक हायपोटेन्शन (Orthostatic Hypotension)",
    explanation: "Orthostatic, or postural, hypotension is a decrease in blood pressure that occurs on rising to the erect position, which can cause fainting.",
    explanation_mr: "अचानक उभे राहिल्यावर होणाऱ्या कमी रक्तदाबाला ऑर्थोस्टॅटिक हायपोटेन्शन म्हणतात, ज्यामुळे चक्कर येऊन रुग्ण पडू शकतो.",
    source_page: 18,
    difficulty: 'medium'
  },
  {
    id: 134,
    category: 'Legal, Ethical & Healthcare Management',
    section: 'technical',
    question: "Which of the following is an example of a negligent tort in a radiology department?",
    question_mr: "रेडिओलॉजी विभागात निष्काळजीपणाचा (Negligent Tort) गुन्हा खालीलपैकी कोणता आहे?",
    options: [
      "(A) Performing an examination on a patient who has refused it",
      "(B) Disclosing confidential patient information to unauthorized individuals",
      "(C) Patient injury as a result of a fall while left unattended on an x-ray table",
      "(D) Threatening to repeat a difficult examination if the patient does not cooperate"
    ],
    options_mr: [
      "(A) नकार दिलेल्या रुग्णाचा जबरदस्तीने एक्स-रे काढणे",
      "(B) रुग्णाची गुप्त माहिती अनधिकृत व्यक्तीला देणे",
      "(C) एक्स-रे टेबलवर एकटे सोडल्यामुळे रुग्ण खाली पडणे व दुखापत होणे",
      "(D) सहकार्य न केल्यास पुन्हा एक्स-रे काढण्याची धमकी देणे"
    ],
    correct_answer: "(C) Patient injury as a result of a fall while left unattended on an x-ray table",
    correct_answer_mr: "(C) एक्स-रे टेबलवर एकटे सोडल्यामुळे रुग्ण खाली पडणे व दुखापत होणे",
    explanation: "A fall while unattended on an x-ray table is an example of an unintentional or negligent tort, whereas performing exams against consent, breaching confidentiality, and threatening are intentional torts (battery, invasion of privacy, assault).",
    explanation_mr: "टेबलवर रुग्णाला बिन-पाळत सोडल्याने पडणे हा अनावधानाने झालेला निष्काळजीपणाचा (Unintentional / Negligent tort) प्रकार आहे.",
    source_page: 32,
    difficulty: 'medium'
  },
  {
    id: 135,
    category: 'Legal, Ethical & Healthcare Management',
    section: 'technical',
    question: "What is the primary purpose of an Advance Health Care Directive or Living Will?",
    question_mr: "Advance Health Care Directive किंवा Living Will चा मुख्य उद्देश कोणता आहे?",
    options: [
      "(A) To distribute a patient's financial assets after death",
      "(B) To name an individual authorized to make health care decisions if the patient is unable to do so",
      "(C) To consent to high-risk invasive surgical procedures",
      "(D) To protect the hospital from malpractice lawsuits"
    ],
    options_mr: [
      "(A) मृत्यूनंतर संपत्तीचे वाटप करणे",
      "(B) रुग्ण असमर्थ असताना त्याच्या आरोग्यविषयक निर्णयांचे अधिकार अधिकृत व्यक्तीला देणे",
      "(C) जोखीमयुक्त शस्त्रक्रियेसाठी संमती देणे",
      "(D) हॉस्पिटलचा कायदेशीर खटल्यांपासून बचाव करणे"
    ],
    correct_answer: "(B) To name an individual authorized to make health care decisions if the patient is unable to do so",
    correct_answer_mr: "(B) रुग्ण असमर्थ असताना त्याच्या आरोग्यविषयक निर्णयांचे अधिकार अधिकृत व्यक्तीला देणे",
    explanation: "An Advance Health Care Directive or Living Will preserves a person's right to make health care decisions by naming the individual authorized to make them if the person is unable to, including end-of-life decisions.",
    explanation_mr: "लिव्हिंग विलद्वारे रुग्ण स्वतः निर्णय घेण्यास असमर्थ असताना वैद्यकीय निर्णय घेण्याचे कायदेशीर अधिकार एखाद्या विश्वासाच्या व्यक्तीला दिले जातात.",
    source_page: 35,
    difficulty: 'medium'
  },
  {
    id: 136,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "What type of disease transmission involves an insect or animal carrier, such as a mosquito carrying malaria or a tick carrying Lyme disease?",
    question_mr: "कीटक किंवा प्राण्यांमार्फत (उदा. मलेरिया पसरवणारा डास) होणाऱ्या आजाराच्या प्रसाराला काय म्हणतात?",
    options: [
      "(A) Fomite transmission",
      "(B) Airborne transmission",
      "(C) Vector transmission",
      "(D) Droplet contact"
    ],
    options_mr: [
      "(A) फोमाईट ट्रान्समिशन (वस्तूंद्वारे)",
      "(B) एअरबॉर्न ट्रान्समिशन (हवेद्वारे)",
      "(C) व्हेक्टर ट्रान्समिशन (Vector transmission)",
      "(D) ड्रॉपलेट कॉन्टॅक्ट"
    ],
    correct_answer: "(C) Vector transmission",
    correct_answer_mr: "(C) व्हेक्टर ट्रान्समिशन (Vector transmission)",
    explanation: "A vector is an insect or animal carrier of infectious organisms, such as a mosquito that carries malaria or a tick that carries Lyme disease.",
    explanation_mr: "कीटक किंवा प्राण्यांच्या माध्यमातून होणाऱ्या आजाराच्या प्रसारास व्हेक्टर बोर्न ट्रान्समिशन म्हणतात.",
    source_page: 42,
    difficulty: 'easy'
  },
  {
    id: 137,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "Protective, or reverse, isolation is primarily used to:",
    question_mr: "प्रोटेक्टिव्ह किंवा रिव्हर्स आयसोलेशन (Protective / Reverse Isolation) चा मुख्य वापर कशासाठी केला जातो?",
    options: [
      "(A) Protect healthcare workers from aggressive patients",
      "(B) Prevent the spread of airborne pathogens like Tuberculosis",
      "(C) Keep susceptible or immunocompromised patients from becoming infected",
      "(D) Sterilize the radiographic room after examining a patient with MRSA"
    ],
    options_mr: [
      "(A) आरोग्य कर्मचार्‍यांचा रुग्णापासून बचाव करणे",
      "(B) टीबी सारख्या हवेतून पसरणाऱ्या आजाराचा प्रसार रोखणे",
      "(C) आजारप्रतिकारशक्ती कमी असलेल्या (Immunocompromised) रुग्णांना संसर्गापासून वाचवणे",
      "(D) एमआरएसए (MRSA) रुग्णाच्या तपासणीनंतर रूम निर्जंतुक करणे"
    ],
    correct_answer: "(C) Keep susceptible or immunocompromised patients from becoming infected",
    correct_answer_mr: "(C) आजारप्रतिकारशक्ती कमी असलेल्या (Immunocompromised) रुग्णांना संसर्गापासून वाचवणे",
    explanation: "Protective, or reverse, isolation is used to protect highly susceptible patients (e.g., burn patients, transplant recipients, leukemia patients) from becoming infected by microorganisms.",
    explanation_mr: "रिव्हर्स आयसोलेशनचा वापर कमी प्रतिकारशक्ती असलेल्या रुग्णांना (उदा. कर्करोग, अवयव प्रत्यारोपण) बाहेरील जंतूंच्या संसर्गापासून वाचवण्यासाठी केला जातो.",
    source_page: 45,
    difficulty: 'medium'
  },
  {
    id: 138,
    category: 'Contrast Media & Pharmacology',
    section: 'technical',
    question: "Why are nonionic (low osmolality) iodinated contrast agents often preferred over ionic agents?",
    question_mr: "आयोडीनयुक्त नॉन-आयोनाईज्ड कॉन्ट्रास्ट (Nonionic contrast media) चा वापर आयोनिक कॉन्ट्रास्टपेक्षा जास्त का पसंत केला जातो?",
    options: [
      "(A) They are significantly less expensive than ionic agents",
      "(B) They are associated with a lower incidence of nausea, vomiting, and cardiovascular complications",
      "(C) They are radiolucent and provide negative contrast",
      "(D) They do not require a physician's prescription"
    ],
    options_mr: [
      "(A) ते आयोनिकपेक्षा खूप स्वस्त असतात",
      "(B) त्यांच्यामुळे मळमळ, उलट्या आणि हृदयविकाराचा त्रास होण्याचा धोका कमी असतो",
      "(C) ते रेडिओलुसेंट असतात व निगेटिव्ह कॉन्ट्रास्ट देतात",
      "(D) त्यांच्यासाठी डॉक्टरांच्या प्रिस्क्रिप्शनची गरज नसते"
    ],
    correct_answer: "(B) They are associated with a lower incidence of nausea, vomiting, and cardiovascular complications",
    correct_answer_mr: "(B) त्यांच्यामुळे मळमळ, उलट्या आणि हृदयविकाराचा त्रास होण्याचा धोका कमी असतो",
    explanation: "Nonionic or low osmolality contrast agents are preferred because side effects and allergic reactions are less likely and less severe, although they are far more expensive.",
    explanation_mr: "नॉन-आयोनिक कॉन्ट्रास्ट मीडियामुळे ॲलर्जी, मळमळ आणि इतर साईड इफेक्ट्स होण्याचे प्रमाण खूप कमी असते.",
    source_page: 58,
    difficulty: 'medium'
  },
  {
    id: 139,
    category: 'Contrast Media & Pharmacology',
    section: 'technical',
    question: "In a double-contrast examination, what is the usual function of the positive contrast agent?",
    question_mr: "डबल कॉन्ट्रास्ट (Double-contrast) तपासणीत पॉझिटिव्ह कॉन्ट्रास्टचे (Positive contrast) मुख्य कार्य काय असते?",
    options: [
      "(A) To fill the space and permit visualization through a gaseous medium",
      "(B) To act as a cathartic and cleanse the bowel",
      "(C) To coat the various parts under study",
      "(D) To reduce the viscosity of the blood"
    ],
    options_mr: [
      "(A) पोकळी भरून गॅसच्या मध्यमातून पाहणे",
      "(B) पोट साफ करण्याचे औषध म्हणून कार्य करणे",
      "(C) तपासल्या जाणाऱ्या अवयवाच्या भिंतींना लेप (Coat) लावणे",
      "(D) रक्ताचा घटट्टपणा कमी करणे"
    ],
    correct_answer: "(C) To coat the various parts under study",
    correct_answer_mr: "(C) तपासल्या जाणाऱ्या अवयवाच्या भिंतींना लेप (Coat) लावणे",
    explanation: "In double-contrast studies, the positive agent coats the parts under study, while the negative agent (air/gas) fills the space to permit visualization.",
    explanation_mr: "डबल कॉन्ट्रास्ट स्टडीमध्ये पॉझिटिव्ह agent (उदा. बेरियम) अवयवाच्या आतील त्वचेला चिपकून कोटिंग तयार करतो तर हवा (Negative agent) फुगवून पोकळी दाखवते.",
    source_page: 60,
    difficulty: 'medium'
  },
  {
    id: 140,
    category: 'Patient Care: Emergency & Medical Terminology',
    section: 'technical',
    question: "Epistaxis is the medical term for:",
    question_mr: "एपिस्टॅक्सिस (Epistaxis) ही कशाची वैद्यकीय संज्ञा आहे?",
    options: [
      "(A) Fainting",
      "(B) Nosebleed",
      "(C) Vomiting",
      "(D) Difficulty breathing"
    ],
    options_mr: [
      "(A) चक्कर येणे / बेहोश होणे",
      "(B) नाकातून रक्त येणे (Nosebleed)",
      "(C) उलटी होणे",
      "(D) श्वास घेण्यास त्रास होणे"
    ],
    correct_answer: "(B) Nosebleed",
    correct_answer_mr: "(B) नाकातून रक्त येणे (Nosebleed)",
    explanation: "A nosebleed is medically termed epistaxis, which can be a result of hypertension, dry nasal membranes, or trauma.",
    explanation_mr: "नाकातून रक्त येण्याच्या विकाराला वैद्यकीय भाषेत एपिस्टॅक्सिस (Epistaxis) म्हणतात.",
    source_page: 20,
    difficulty: 'easy'
  },
  {
    id: 141,
    category: 'Patient Care: Emergency & Patient Assessment',
    section: 'technical',
    question: "A patient experiencing subjective vertigo feels the sensation of:",
    question_mr: "सब्जेक्टिव्ह व्हर्टिगो (Subjective Vertigo) असलेल्या रुग्णाला कसला भास होतो?",
    options: [
      "(A) The objects or the room spinning about them",
      "(B) Themselves spinning about",
      "(C) A sudden drop in blood pressure",
      "(D) Extreme lightheadedness when bending forward"
    ],
    options_mr: [
      "(A) सभोवतालच्या वस्तू किंवा खोली फिरत असल्याचा भास",
      "(B) स्वतः स्वतःभोवती गोल फिरत असल्याचा भास (Themselves spinning about)",
      "(C) अचानक रक्तदाब कमी झाल्याचा भास",
      "(D) पुढे झुकल्यावर चक्कर आल्याचा भास"
    ],
    correct_answer: "(B) Themselves spinning about",
    correct_answer_mr: "(B) स्वतः स्वतःभोवती गोल फिरत असल्याचा भास (Themselves spinning about)",
    explanation: "Objective vertigo is the sensation of having objects spin about the person, whereas subjective vertigo is the sensation of the person spinning about.",
    explanation_mr: "सब्जेक्टिव्ह व्हर्टिगो म्हणजे रुग्ण स्वतः गोल फिरत असल्याचा अनुभव घेणे; तर ऑब्जेक्टिव्ह व्हर्टिगो म्हणजे सभोवतालची खोली फिरत असल्याचा भास होणे.",
    source_page: 19,
    difficulty: 'hard'
  },
  {
    id: 142,
    category: 'Patient Care: Emergency Procedures',
    section: 'technical',
    question: "What immediate action should the radiographer take if a patient is experiencing a grand mal seizure?",
    question_mr: "एक्स-रे टेबलवर रुग्णाला मिरगीचा धक्का (Grand mal seizure) आल्यास रेडियोग्राफरने ताबडतोब कोणती कृती करावी?",
    options: [
      "(A) Restrain the patient's movements firmly",
      "(B) Administer high-flow oxygen immediately",
      "(C) Remove any objects that could harm the patient and loosen tight clothing",
      "(D) Perform the Heimlich maneuver"
    ],
    options_mr: [
      "(A) रुग्णाच्या हालचाली घट्ट पकडून रोखणे",
      "(B) ताबडतोब हाय-फ्लो ऑक्सिजन देणे",
      "(C) रुग्णाला दुखापत करू शकणाऱ्या जवळच्या वस्तू बाजूला करणे व कपडे सैल करणे",
      "(D) हिमलिच मॅन्युव्हर (Heimlich maneuver) करणे"
    ],
    correct_answer: "(C) Remove any objects that could harm the patient and loosen tight clothing",
    correct_answer_mr: "(C) रुग्णाला दुखापत करू शकणाऱ्या जवळच्या वस्तू बाजूला करणे व कपडे सैल करणे",
    explanation: "During a convulsion or grand mal seizure, no attempt should be made to restrain movements; instead, objects should be removed to prevent harm, and tight clothing loosened.",
    explanation_mr: "मिरगीचा झटका आल्यास रुग्णाला पकडून ठेऊ नये; फक्त त्याला दुखापत होणार नाही याची काळजी घेऊन जवळच्या कडक वस्तू बाजूला कराव्यात.",
    source_page: 21,
    difficulty: 'easy'
  },
  {
    id: 143,
    category: 'Patient Care: Emergency Procedures',
    section: 'technical',
    question: "In evaluating respiratory emergencies, what distinguishes cardiopulmonary arrest from respiratory arrest?",
    question_mr: "कार्डिओपल्मोनरी अरेस्ट (Cardiopulmonary arrest) आणि रेस्पिरेटरी अरेस्ट (Respiratory arrest) मधील मुख्य फरक कोणता?",
    options: [
      "(A) Respiratory arrest involves an airway obstruction, while cardiopulmonary arrest involves only the lungs.",
      "(B) Cardiopulmonary arrest is characterized by the absence of a pulse and loss of consciousness in addition to absent respiration.",
      "(C) Respiratory arrest only occurs in patients with chronic diseases like emphysema.",
      "(D) Cardiopulmonary arrest requires the Heimlich maneuver, while respiratory arrest requires CPR."
    ],
    options_mr: [
      "(A) रेस्पिरेटरी अरेस्टमध्ये श्वासनलिका ब्लॉक होते, तर कार्डिओपल्मोनरी अरेस्ट फक्त फुफ्फुसाशी संबंधित असते",
      "(B) कार्डिओपल्मोनरी अरेस्टमध्ये श्वास बंद होण्यासोबतच नाडीचे ठोके (Pulse) बंद पडतात व रुग्ण अतिशय बेशुद्ध होतो",
      "(C) रेस्पिरेटरी अरेस्ट फक्त एमफिसीमा असणाऱ्या रुग्णांमध्ये होते",
      "(D) कार्डिओपल्मोनरी अरेस्टसाठी हिमलिच मॅन्युव्हर तर रेस्पिरेटरी अरेस्टसाठी सीपीआर लागतो"
    ],
    correct_answer: "(B) Cardiopulmonary arrest is characterized by the absence of a pulse and loss of consciousness in addition to absent respiration.",
    correct_answer_mr: "(B) कार्डिओपल्मोनरी अरेस्टमध्ये श्वास बंद होण्यासोबतच नाडीचे ठोके (Pulse) बंद पडतात व रुग्ण अतिशय बेशुद्ध होतो",
    explanation: "Respiratory arrest is the absence of chest movement and breathing sounds, whereas cardiopulmonary arrest is the sudden cessation of productive ventilation and circulation, indicated by absence of pulse and respiration with loss of consciousness.",
    explanation_mr: "रेस्पिरेटरी अरेस्टमध्ये फक्त श्वास बंद होतो, परंतु कार्डिओपल्मोनरी अरेस्टमध्ये श्वासासोबत हृदयाचे ठोकेही पूर्णपणे बंद पडतात.",
    source_page: 22,
    difficulty: 'medium'
  },
  {
    id: 144,
    category: 'Patient Transfer & Safety',
    section: 'technical',
    question: "When moving a patient from a wheelchair to an x-ray table, what should be done with the wheelchair footrests?",
    question_mr: "व्हीलचेअरवरून रुग्णाला एक्स-रे टेबलवर घेताना व्हीलचेअरच्या फूटरेस्टचे (Footrests) काय केले पाहिजे?",
    options: [
      "(A) Left in place for the patient to step on",
      "(B) Moved aside to avoid tripping or tilting the wheelchair forward",
      "(C) Elevated to the height of the x-ray table",
      "(D) Used as a stabilizing handle for the radiographer"
    ],
    options_mr: [
      "(A) रुग्णाला पाय ठेवण्यासाठी तसेच ठेवणे",
      "(B) ठेच लागणे किंवा व्हीलचेअर पुढे उलटणे टाळण्यासाठी फूटरेस्ट बाजूला सरकवणे (Moved aside)",
      "(C) एक्स-रे टेबलच्या उंचीवर उचलणे",
      "(D) पकडण्यासाठी हँडल म्हणून वापरणे"
    ],
    correct_answer: "(B) Moved aside to avoid tripping or tilting the wheelchair forward",
    correct_answer_mr: "(B) ठेच लागणे किंवा व्हीलचेअर पुढे उलटणे टाळण्यासाठी फूटरेस्ट बाजूला सरकवणे (Moved aside)",
    explanation: "Before helping a patient out of a wheelchair, it must be locked and the footrests must be moved aside to avoid tripping over them or tilting the wheelchair forward.",
    explanation_mr: "व्हीलचेअरवरून उठवण्यापूर्वी फूटरेस्ट बाजूला दुमडावेत, नाहीतर रुग्ण पायाला ठेच लागून किंवा व्हीलचेअर उलटून पडू शकतो.",
    source_page: 28,
    difficulty: 'easy'
  },
  {
    id: 145,
    category: 'Patient Care & Safety',
    section: 'technical',
    question: "When assisting a patient with a unilateral injury to undress, the radiographer should:",
    question_mr: "एका हाताला किंवा पायाला दुखापत असलेल्या रुग्णाचे कपडे काढताना रेडियोग्राफरने कपडे प्रथम कोणत्या बाजूने काढावेत?",
    options: [
      "(A) Remove clothing from the injured side first",
      "(B) Remove clothing from the uninjured side first",
      "(C) Ask the patient to remove the clothing without assistance",
      "(D) Cut the clothing off to avoid movement"
    ],
    options_mr: [
      "(A) दुखापत झालेल्या बाजूने प्रथम काढावेत",
      "(B) दुखापत न झालेल्या (साध्या) बाजूने प्रथम काढावेत (Remove from uninjured side first)",
      "(C) रुग्णाला स्वतः काढायला सांगणे",
      "(D) कपडे कात्रीने कापून टाकणे"
    ],
    correct_answer: "(B) Remove clothing from the uninjured side first",
    correct_answer_mr: "(B) दुखापत न झालेल्या (साध्या) बाजूने प्रथम काढावेत (Remove from uninjured side first)",
    explanation: "To avoid unnecessary or painful movement, clothing should be removed from the uninjured side first and placed on the injured side first when dressing.",
    explanation_mr: "कपडे काढताना आधी चांगल्या (साध्या) बाजूचे कपडे काढावेत आणि घालताना आधी दुखापत झालेल्या बाजूला घालावेत.",
    source_page: 29,
    difficulty: 'easy'
  },
  {
    id: 146,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "Which of the following is NOT one of the recognized types of reactions to latex products?",
    question_mr: "खालीलपैकी कोणता प्रकार लेटेक्स (Latex) रबराच्या ॲलर्जीच्या प्रतिक्रियेमध्ये येत नाही?",
    options: [
      "(A) Irritant contact dermatitis",
      "(B) Allergic contact dermatitis (delayed hypersensitivity)",
      "(C) Latex allergy (immediate hypersensitivity)",
      "(D) Hemolytic transfusion reaction"
    ],
    options_mr: [
      "(A) इरिटंट कॉन्टॅक्ट डर्माटायटिस",
      "(B) ॲलर्जिक कॉन्टॅक्ट डर्माटायटिस",
      "(C) लेटेक्स ॲलर्जी (इमिडिएट हायपरसेंसिटिव्हिटी)",
      "(D) हेमोलाइटिक ट्रान्सफ्यूजन रिएक्शन (Hemolytic transfusion reaction)"
    ],
    correct_answer: "(D) Hemolytic transfusion reaction",
    correct_answer_mr: "(D) हेमोलाइटिक ट्रान्सफ्यूजन रिएक्शन (Hemolytic transfusion reaction)",
    explanation: "Types of reactions to latex include irritant contact dermatitis, allergic contact dermatitis (delayed hypersensitivity), and latex allergy (immediate hypersensitivity). Hemolytic transfusion reaction occurs with mismatched blood transfusion.",
    explanation_mr: "हेमोलाइटिक ट्रान्सफ्यूजन रिएक्शन हा चुकीचे रक्त दिल्याने होणारा त्रास आहे, लेटेक्सशी याचा संबंध नाही.",
    source_page: 47,
    difficulty: 'medium'
  },
  {
    id: 147,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "Which body habitus is characterized by a long, narrow thorax and a very low, long, 'fish hook' stomach?",
    question_mr: "कोणत्या बॉडी हॅबिटस (Body habitus) मध्ये छाती लांब-अरुंद आणि पोट खूप खाली झुकलेले 'फिश हूक' (Fish hook) आकाराचे असते?",
    options: [
      "(A) Hypersthenic (जाड/रुंद)",
      "(B) Sthenic (सामान्य)",
      "(C) Hyposthenic",
      "(D) Asthenic (Asthenic - अतिशय बारीक)"
    ],
    options_mr: [
      "(A) हायपरस्थेनिक (जाड/रुंद)",
      "(B) स्थेनिक (सामान्य)",
      "(C) हायपोस्टेनिक",
      "(D) अ‍ॅस्थेनिक (Asthenic - अतिशय बारीक)"
    ],
    correct_answer: "(D) Asthenic",
    correct_answer_mr: "(D) अ‍ॅस्थेनिक (Asthenic - अतिशय बारीक)",
    explanation: "The asthenic body habitus is slender and light, featuring a delicate bony framework, a long, narrow thorax, and a very low, long ('fish hook') stomach.",
    explanation_mr: "अ‍ॅस्थेनिक प्रकारातील लोक अतिशय बारीक असतात, त्यांची छाती अरुंद असते आणि पोट खाली पेल्व्हिसपर्यंत झुकलेले (Fish hook shape) असते.",
    source_page: 88,
    difficulty: 'medium'
  },
  {
    id: 148,
    category: 'Technical: Anatomy & Radiographic Positioning',
    section: 'technical',
    question: "The S-shaped bone that articulates medially with the sternum and laterally with the acromion process is the:",
    question_mr: "छातीच्या मध्यभागी असलेल्या स्टर्नमला आणि बाहेर अ‍ॅक्रोमियन प्रोसेसला जोडणारे 'S' आकाराचे हाड कोणते?",
    options: [
      "(A) Scapula",
      "(B) Clavicle",
      "(C) Humerus",
      "(D) First rib"
    ],
    options_mr: [
      "(A) स्कॅप्युला (पाठीमागचे हाड)",
      "(B) क्लॅव्हिकल / कॉलर बोन (Clavicle)",
      "(C) ह्युमेरस",
      "(D) पहिली बरगडी"
    ],
    correct_answer: "(B) Clavicle",
    correct_answer_mr: "(B) क्लॅव्हिकल / कॉलर बोन (Clavicle)",
    explanation: "The clavicle ('collar bone') is an S-shaped bone whose medial end articulates with the sternum and whose lateral end articulates with the scapula's acromion process.",
    explanation_mr: "क्लॅव्हिकल (Collar bone) हे इंग्रजी 'S' आकाराचे हाड आहे जे कॉलरच्या ठिकाणी असते.",
    source_page: 104,
    difficulty: 'easy'
  },
  {
    id: 149,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Which bone articulates anteriorly with the calcaneus?",
    question_mr: "कॅल्केनिअस (Calcaneus - टाचेचे हाड) च्या पुढच्या (Anterior) बाजूला कोणते हाड जोडलेले असते?",
    options: [
      "(A) Talus",
      "(B) Navicular",
      "(C) Cuboid",
      "(D) Medial cuneiform"
    ],
    options_mr: [
      "(A) टॅलस (Talus)",
      "(B) नॅव्हिक्युलर (Navicular)",
      "(C) क्यूबॉईड (Cuboid)",
      "(D) मेडिअल क्युनिफॉर्म (Medial cuneiform)"
    ],
    correct_answer: "(C) Cuboid",
    correct_answer_mr: "(C) क्यूबॉईड (Cuboid)",
    explanation: "The calcaneus (heel bone) serves as attachment for the Achilles tendon posteriorly and articulates anteriorly with the cuboid bone.",
    explanation_mr: "कॅल्केनिअस (टाचेचे हाड) मागे अकिलिस टेंडनला जोडलेले असते आणि पुढच्या बाजूला क्यूबॉईड (Cuboid) हाडाशी जोडलेले असते.",
    source_page: 112,
    difficulty: 'medium'
  },
  {
    id: 150,
    category: 'Imaging Procedures: Pathology',
    section: 'technical',
    question: "Osgood-Schlatter disease is a condition that affects which anatomical structure?",
    question_mr: "ऑसगुड-श्लॅटर आजार (Osgood-Schlatter disease) हा खालीलपैकी कोणत्या शरीराच्या भागावर प्रभाव पाडतो?",
    options: [
      "(A) The femoral neck",
      "(B) The tibial tuberosity",
      "(C) The medial malleolus",
      "(D) The base of the fifth metatarsal"
    ],
    options_mr: [
      "(A) फिमोरल मान (Femoral neck)",
      "(B) टिबियल ट्युबरॉसिटी (Tibial tuberosity)",
      "(C) मेडिअल मॅलिओलस (Medial malleolus)",
      "(D) पाचव्या मेटाटार्सलचा पाया (Base of 5th metatarsal)"
    ],
    correct_answer: "(B) The tibial tuberosity",
    correct_answer_mr: "(B) टिबियल ट्युबरॉसिटी (Tibial tuberosity)",
    explanation: "Osgood-Schlatter disease is a chronic epiphysitis of the tibial tuberosity that occurs in some active young adults, manifested radiographically by bony separation at the epiphysis.",
    explanation_mr: "ऑसगुड-श्लॅटर आजार हा टिबियल ट्युबरॉसिटीचा दीर्घकालीन सूज/दाह (Epiphysitis) आजार आहे, जो तरुण खेळाडूंमध्ये जास्त आढळतो.",
    source_page: 115,
    difficulty: 'medium'
  },
  {
    id: 151,
    category: 'Imaging Procedures: Pathology',
    section: 'technical',
    question: "Which congenital anomaly of the knee can be misinterpreted radiographically as a fracture?",
    question_mr: "गुडघ्याची कोणती जन्मजात विकृती (Congenital anomaly) क्ष-किरण (X-ray) चित्रात चुकीने फ्रॅक्चर (हाड मोडल्यासारखे) समजली जाऊ शकते?",
    options: [
      "(A) Hallux valgus",
      "(B) Bipartite patella",
      "(C) Avascular necrosis",
      "(D) Chondromalacia patellae"
    ],
    options_mr: [
      "(A) हॅलक्स व्हॅल्गस (Hallux valgus)",
      "(B) बायपार्टाईट पटेल (Bipartite patella)",
      "(C) अव्हॅस्क्युलर नेक्रोसिस (Avascular necrosis)",
      "(D) कॉन्ड्रोमॅलेशिया पटेली (Chondromalacia patellae)"
    ],
    correct_answer: "(B) Bipartite patella",
    correct_answer_mr: "(B) बायपार्टाईट पटेल (Bipartite patella)",
    explanation: "The congenital anomaly known as bipartite patella can be misinterpreted as a fracture of the patella.",
    explanation_mr: "बायपार्टाईट पटेल (Bipartite patella) ही जन्मजात स्थिती आहे जिथे पटेल (गुडघ्याची वाटी) दोन भागात विभागलेली दिसते, जी क्ष-किरणात फ्रॅक्चरसारखी भासू शकते.",
    source_page: 118,
    difficulty: 'medium'
  },
  {
    id: 152,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The long narrow ridge on the posterior surface of the femoral shaft is called the:",
    question_mr: "मांडीच्या हाडाच्या (Femur shaft) मागील पृष्ठभागावर असलेल्या लांब अरुंद कडेला (Ridge) काय म्हणतात?",
    options: [
      "(A) Intertrochanteric crest",
      "(B) Intertrochanteric line",
      "(C) Linea aspera",
      "(D) Fovea capitis"
    ],
    options_mr: [
      "(A) इंटरट्रोकँटरिक क्रेस्ट (Intertrochanteric crest)",
      "(B) इंटरट्रोकँटरिक लाईन (Intertrochanteric line)",
      "(C) लिनिया एस्पेरा (Linea aspera)",
      "(D) फोव्हिया कॅपिटिस (Fovea capitis)"
    ],
    correct_answer: "(C) Linea aspera",
    correct_answer_mr: "(C) लिनिया एस्पेरा (Linea aspera)",
    explanation: "The femoral shaft presents a long narrow ridge posteriorly called the linea aspera.",
    explanation_mr: "फिमरच्या (मांडीच्या हाडाच्या) मागच्या बाजूला असणाऱ्या लांब आणि उंचवट्याच्या रेषेला लिनिया एस्पेरा (Linea aspera) म्हणतात.",
    source_page: 122,
    difficulty: 'easy'
  },
  {
    id: 153,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The innominate (hip) bone consists of which three fused bones?",
    question_mr: "इन्नॉमिनेट (Hip / Coxal bone) हे हाड कोणत्या तीन एकत्र जोडलेल्या (Fused) हाडांनी बनलेले असते?",
    options: [
      "(A) Ilium, ischium, and pubis",
      "(B) Sacrum, coccyx, and ilium",
      "(C) Acetabulum, symphysis, and ischium",
      "(D) Ilium, sacrum, and pubis"
    ],
    options_mr: [
      "(A) इलियम, इश्चियम आणि प्युबिस (Ilium, ischium, and pubis)",
      "(B) सॅक्रम, कॉक्सिक्स आणि इलियम",
      "(C) ॲसिटॅबुलम, सिम्फिसिस आणि इश्चियम",
      "(D) इलियम, सॅक्रम आणि प्युबिस"
    ],
    correct_answer: "(A) Ilium, ischium, and pubis",
    correct_answer_mr: "(A) इलियम, इश्चियम आणि प्युबिस (Ilium, ischium, and pubis)",
    explanation: "Each innominate (hip or coxal) bone consists of three fused bones: the ilium, ischium, and pubis, which contribute to the formation of the acetabulum.",
    explanation_mr: "कमरेचे प्रत्येक इनॉमिनेट (Hip) हाड इलियम (Ilium), इश्चियम (Ischium) आणि प्युबिस (Pubis) या तीन हाडांच्या एकत्र येण्याने बनते.",
    source_page: 126,
    difficulty: 'easy'
  },
  {
    id: 154,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "In an AP projection of the pelvis, why are the patient's legs internally rotated?",
    question_mr: "पेल्व्हिसच्या (Pelvis) AP प्रोजेक्शनमध्ये रुग्णाचे पाय आतल्या बाजूला (Internally rotated) का फिरवले जातात?",
    options: [
      "(A) To open the sacroiliac joints",
      "(B) To place the greater trochanters in profile and the femoral necks parallel to the IR",
      "(C) To superimpose the tibia and fibula",
      "(D) To foreshorten the femoral neck for better detail"
    ],
    options_mr: [
      "(A) सॅक्रोइलियॅक जॉइंट्स उघडण्यासाठी",
      "(B) ग्रेटर ट्रोकँटर्स प्रोफाईलमध्ये आणण्यासाठी आणि फिमोरल नेक IR ला समांतर ठेवण्यासाठी",
      "(C) टिबिया आणि फिब्युला एकमेकांवर ओव्हरलॅप करण्यासाठी",
      "(D) फिमोरल मान लहान (Foreshorten) दिसण्यासाठी"
    ],
    correct_answer: "(B) To place the greater trochanters in profile and the femoral necks parallel to the IR",
    correct_answer_mr: "(B) ग्रेटर ट्रोकँटर्स प्रोफाईलमध्ये आणण्यासाठी आणि फिमोरल नेक IR ला समांतर ठेवण्यासाठी",
    explanation: "Internal rotation of the feet/legs places the femoral necks parallel to the IR and allows the greater trochanters to be seen in profile.",
    explanation_mr: "पाय १५-२० अंश आत फिरवल्यामुळे फिमरची मान (Femoral neck) इमेज रिसेप्टरला (IR) समांतर होते आणि ग्रेटर ट्रोकँटर स्पष्ट दिसतो.",
    source_page: 130,
    difficulty: 'medium'
  },
  {
    id: 155,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "The axial lateral projection (Coyle method) of the elbow is primarily used when:",
    question_mr: "कोपराचे एक्झिअल लॅटरल प्रोजेक्शन (Coyle method) प्रामुख्याने कधी वापरले जाते?",
    options: [
      "(A) A patient cannot internally rotate their shoulder",
      "(B) A patient is unable to extend their arm for routine obliques",
      "(C) The olecranon process needs to be viewed through the humerus",
      "(D) The patient has a suspected clavicle fracture"
    ],
    options_mr: [
      "(A) जेव्हा रुग्ण खांदा आत फिरवू शकत नाही",
      "(B) जेव्हा रुग्ण नेहमीच्या ऑब्लीक व्ह्यूसाठी हात सरळ (Extend) करू शकत नाही",
      "(C) जेव्हा ओलेक्रॅनन प्रोसेस ह्युमेरसमधून पाहायची असते",
      "(D) जेव्हा क्लॅव्हिकल फ्रॅक्चरची शंका असते"
    ],
    correct_answer: "(B) A patient is unable to extend their arm for routine obliques",
    correct_answer_mr: "(B) जेव्हा रुग्ण नेहमीच्या ऑब्लीक व्ह्यूसाठी हात सरळ (Extend) करू शकत नाही",
    explanation: "The Coyle method (axial lateral) replaces lateral and medial obliques when a patient is unable to extend their arm, allowing views of the radial head or coronoid process.",
    explanation_mr: "कॉईल पद्धत (Coyle method) ही रुग्ण हात पूर्ण सरळ करू शकत नसेल तेव्हा रेडिअल हेड किंवा कोरोनॉईड प्रोसेस स्पष्ट पाहण्यासाठी वापरली जाते.",
    source_page: 135,
    difficulty: 'hard'
  },
  {
    id: 156,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "During a transthoracic lateral projection of the shoulder, how is the unaffected arm positioned?",
    question_mr: "खांद्याच्या ट्रान्स्थोरॅसिक लॅटरल (Transthoracic lateral) प्रोजेक्शन दरम्यान, दुखापत नसलेला (साधा) हात कसा ठेवला जातो?",
    options: [
      "(A) Placed across the chest",
      "(B) Abducted to 90 degrees",
      "(C) Rested on the hip",
      "(D) Extended over the head"
    ],
    options_mr: [
      "(A) छातीवर आडवा ठेवला जातो",
      "(B) ९० अंशात बाजूला केला जातो",
      "(C) कंबरेवर ठेवला जातो",
      "(D) डोक्याच्या वर उंचावला (Extended over the head) जातो"
    ],
    correct_answer: "(D) Extended over the head",
    correct_answer_mr: "(D) डोक्याच्या वर उंचावला (Extended over the head) जातो",
    explanation: "In a transthoracic lateral projection, the patient is erect lateral with the affected surgical neck centered to the IR and the unaffected arm placed over the head.",
    explanation_mr: "ट्रान्स्थोरॅसिक लॅटरल व्ह्यूमध्ये दुखापत नसलेला दुसरा हात डोक्याच्या वर उचलून ठेवला जातो जेणेकरून तो दुखापत झालेल्या खांद्याच्या इमेजमध्ये अडथळा आणणार नाही.",
    source_page: 138,
    difficulty: 'medium'
  },
  {
    id: 157,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "To blur lung markings during an AP projection of the scapula, the radiographer should instruct the patient to:",
    question_mr: "स्कॅप्युलाच्या (Scapula) AP प्रोजेक्शन दरम्यान फुफ्फुसाच्या रेषा (Lung markings) ब्लर (अस्पष्ट) करण्यासाठी रेडियोग्राफरने रुग्णाला काय सूचना द्यावी?",
    options: [
      "(A) Suspend respiration on full inspiration",
      "(B) Suspend respiration on full expiration",
      "(C) Perform the Valsalva maneuver",
      "(D) Breathe quietly during the exposure"
    ],
    options_mr: [
      "(A) पूर्ण श्वास घेऊन रोखून ठेवणे",
      "(B) पूर्ण श्वास सोडून रोखून ठेवणे",
      "(C) व्हॅल्साल्व्हा मन्युव्हर (Valsalva maneuver) करणे",
      "(D) एक्स्पोजर दरम्यान हळूवार श्वासोच्छ्वास चालू ठेवणे (Breathe quietly)"
    ],
    correct_answer: "(D) Breathe quietly during the exposure",
    correct_answer_mr: "(D) एक्स्पोजर दरम्यान हळूवार श्वासोच्छ्वास चालू ठेवणे (Breathe quietly)",
    explanation: "For an AP scapula, the exposure may be made during quiet breathing to blur lung markings.",
    explanation_mr: "शांतपणे श्वास चालू ठेवल्याने फुफ्फुसांच्या हालचालीमुळे फुफ्फुसाच्या रेषा ब्लर होतात आणि स्कॅप्युला हाड अधिक स्पष्ट दिसू लागते.",
    source_page: 142,
    difficulty: 'medium'
  },
  {
    id: 158,
    category: 'Patient Care: Medical Support Equipment',
    section: 'technical',
    question: "Following a thoracotomy, a chest tube may be put in place for what primary purpose?",
    question_mr: "थोरॅकोटोमी (Thoracotomy) शस्त्रक्रियेनंतर, चेस्ट ट्यूब (Chest tube) बसवण्याचा मुख्य उद्देश कोणता असतो?",
    options: [
      "(A) To remove gastric fluids and air from the digestive tract",
      "(B) To treat pneumothorax or hemothorax by removing air/fluid from the pleural space",
      "(C) To provide positive-pressure ventilation",
      "(D) To administer intravenous medications rapidly"
    ],
    options_mr: [
      "(A) पचनसंस्थेतून जठराचे द्रव आणि हवा काढून टाकणे",
      "(B) प्लुरल स्पेस (Pleural space) मधील हवा किंवा रक्त/द्रव काढून न्युमोथोरॅक्स किंवा हेमोथोरॅक्सवर उपचार करणे",
      "(C) पॉझिटिव्ह-प्रेशर व्हेंटिलेशन देणे",
      "(D) शिरेतून जलद औषधे देणे"
    ],
    correct_answer: "(B) To treat pneumothorax or hemothorax by removing air/fluid from the pleural space",
    correct_answer_mr: "(B) प्लुरल स्पेस (Pleural space) मधील हवा किंवा रक्त/द्रव काढून न्युमोथोरॅक्स किंवा हेमोथोरॅक्सवर उपचार करणे",
    explanation: "A chest tube is placed following thoracic surgery to treat pneumothorax or hemothorax by removing air and/or fluid from the pleural space.",
    explanation_mr: "चेस्ट ट्यूब प्लुरल पोकळीत साचलेली हवा (Pneumothorax) किंवा रक्त/द्रव (Hemothorax) बाहेर काढण्यासाठी वापरली जाते.",
    source_page: 150,
    difficulty: 'easy'
  },
  {
    id: 159,
    category: 'Patient Care: Medical Support Equipment',
    section: 'technical',
    question: "Regarding gastrointestinal tubes (such as NG or NI/NE tubes), which type must NEVER be clamped?",
    question_mr: "गॅस्ट्रोइंटेस्टाईनल ट्यूब्स (उदा. NG ट्यूब्स) बाबत, कोणत्या प्रकारची ट्यूब कधीही क्लॅम्प (बंद/दाबून) करू नये?",
    options: [
      "(A) Single-lumen NG tube",
      "(B) Double-lumen tube",
      "(C) Dobbhoff tube",
      "(D) Nasogastric feeding tube"
    ],
    options_mr: [
      "(A) सिंगल-ल्यूमेन NG ट्यूब (Single-lumen NG tube)",
      "(B) डबल-ल्यूमेन ट्यूब (Double-lumen tube - उदा. Sump tube)",
      "(C) डॉबहॉफ ट्यूब (Dobbhoff tube)",
      "(D) नेसोगॅस्ट्रिक फिडिंग ट्यूब"
    ],
    correct_answer: "(B) Double-lumen tube",
    correct_answer_mr: "(B) डबल-ल्यूमेन ट्यूब (Double-lumen tube - उदा. Sump tube)",
    explanation: "A single-lumen tube can be clamped, but a double-lumen tube must never be clamped because the walls of the double-lumen tube could adhere permanently.",
    explanation_mr: "डबल-ल्यूमेन ट्यूब कधीही क्लॅम्प करू नये, कारण त्याच्या आतील भिंती एकमेकांना चिकटू शकतात आणि व्हेंटिंग (हवा खेळती राहणे) थांबते.",
    source_page: 154,
    difficulty: 'medium'
  },
  {
    id: 160,
    category: 'Patient Care: Medical Emergencies',
    section: 'technical',
    question: "A patient exhibiting a pale and cyanotic appearance, rapid and weak pulse, shallow and rapid breathing, and a sharp drop in blood pressure is likely experiencing:",
    question_mr: "रुग्णाचा चेहरा फिका व निळसर (Cyanotic) पडणे, नाडीचे ठोके जलद व कमकुवत असणे, श्वासोच्छ्वास उथळ असणे आणि रक्तदाब खूप खाली घसरणे ही कशाची लक्षणे आहेत?",
    options: [
      "(A) Anaphylaxis",
      "(B) A grand mal seizure",
      "(C) Shock",
      "(D) A transient ischemic attack"
    ],
    options_mr: [
      "(A) ॲनाफिलेक्सिस (Anaphylaxis)",
      "(B) ग्रँड माल सीझर (Grand mal seizure)",
      "(C) शॉक / शॉकची अवस्था (Shock)",
      "(D) ट्रान्झियंट इस्कॅमिक अटॅक (TIA)"
    ],
    correct_answer: "(C) Shock",
    correct_answer_mr: "(C) शॉक / शॉकची अवस्था (Shock)",
    explanation: "Shock is characterized by diminished peripheral blood flow and insufficient oxygen supply, presenting with pallor, cyanosis, rapid weak pulse, shallow breathing, and dropping blood pressure.",
    explanation_mr: "शॉकच्या (Shock) अवस्थेत अवयवांना पुरेसा रक्तपुरवठा होत नाही, ज्यामुळे रक्तदाब घसरतो, त्वचा निळसर/फिकी पडते आणि नाडी जलद व कमकुवत चालते.",
    source_page: 158,
    difficulty: 'easy'
  },
  {
    id: 161,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "A patient with Methicillin-resistant Staphylococcus aureus (MRSA) or Clostridium difficile (C. difficile) requires which type of isolation precaution?",
    question_mr: "MRSA किंवा C. difficile संसर्ग असलेल्या रुग्णासाठी कोणत्या प्रकारच्या अलगीकरण खबरदारीची (Isolation precaution) गरज असते?",
    options: [
      "(A) Airborne precautions",
      "(B) Droplet precautions",
      "(C) Contact precautions",
      "(D) Reverse isolation"
    ],
    options_mr: [
      "(A) एअरबॉर्न प्रिकॉशन्स (Airborne precautions)",
      "(B) ड्रॉपलेट प्रिकॉशन्स (Droplet precautions)",
      "(C) कॉन्टॅक्ट प्रिकॉशन्स (Contact precautions)",
      "(D) रिव्हर्स आयसोलेशन (Reverse isolation)"
    ],
    correct_answer: "(C) Contact precautions",
    correct_answer_mr: "(C) कॉन्टॅक्ट प्रिकॉशन्स (Contact precautions)",
    explanation: "Any disease spread by direct or close contact, such as MRSA and C. difficile, requires contact precautions, which include a private room, gloves, and a gown.",
    explanation_mr: "MRSA किंवा C. difficile हे थेट स्पर्शाने पसरतात, त्यामुळे 'कॉन्टॅक्ट प्रिकॉशन्स' (हात मोजे, गाऊन घालणे) पाळले जातात.",
    source_page: 162,
    difficulty: 'easy'
  },
  {
    id: 162,
    category: 'Patient Care: Contrast Media',
    section: 'technical',
    question: "Which of the following characteristics accurately describes oil-based iodinated contrast media?",
    question_mr: "ऑईल-बेस्ड आयोडीनेटेड कॉन्ट्रास्ट मीडिया (Oil-based iodinated contrast media) बद्दल खालीलपैकी कोणते विधान बरोबर आहे?",
    options: [
      "(A) They are highly soluble in water and excrete rapidly",
      "(B) They are infrequently used today, not water-soluble, and remain in body tissues for lengthy periods",
      "(C) They are the primary agents used for intravenous urography (IVU)",
      "(D) They have a very low osmolality and are preferred for diabetic patients"
    ],
    options_mr: [
      "(A) ते पाण्यात सहज विरघळतात आणि वेगाने बाहेर पडतात",
      "(B) त्यांचा वापर आता खूप दुर्मिळ आहे, ते पाण्यात विरघळत नाहीत आणि शरीराच्या उतींमध्ये बराच काळ राहतात",
      "(C) ते IVU साठी प्रामुख्याने वापरले जातात",
      "(D) त्यांची ऑस्मोलॅलिटी अत्यंत कमी असते"
    ],
    correct_answer: "(B) They are infrequently used today, not water-soluble, and remain in body tissues for lengthy periods",
    correct_answer_mr: "(B) त्यांचा वापर आता खूप दुर्मिळ आहे, ते पाण्यात विरघळत नाहीत आणि शरीराच्या उतींमध्ये बराच काळ राहतात",
    explanation: "Oil-base contrast media are infrequently used today, are not water-soluble, are not readily absorbed by the body, and remain in tissues for lengthy periods.",
    explanation_mr: "ऑईल-बेस्ड कॉन्ट्रास्ट मिडिया पाण्यात विरघळत नसल्याने शरीरात खूप दिवस साचून राहतात, त्यामुळे आता आधुनिक वैद्यकशास्त्रात त्यांचा वापर कमी होतो.",
    source_page: 168,
    difficulty: 'medium'
  },
  {
    id: 163,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "The radiographic positioning term 'LAO' stands for Left Anterior Oblique, which means:",
    question_mr: "रेडिओग्राफिक पोझिशनिंगमधील 'LAO' (Left Anterior Oblique) या संज्ञेचा अर्थ काय?",
    options: [
      "(A) The body is rotated with the left posterior aspect nearest the IR",
      "(B) The body is rotated with the left anterior aspect nearest the IR",
      "(C) The central ray enters the left anterior aspect of the body",
      "(D) The patient is lying horizontally on their left side"
    ],
    options_mr: [
      "(A) शरीराची डावी मागची बाजू IR च्या जवळ असणे",
      "(B) शरीराची डावी पुढची बाजू (Left anterior aspect) IR च्या जवळ असणे",
      "(C) सेंट्रल रे शरीराच्या डाव्या पुढच्या बाजूने प्रवेश करणे",
      "(D) रुग्ण डाव्या बाजूवर आडवा झोपलेला असणे"
    ],
    correct_answer: "(B) The body is rotated with the left anterior aspect nearest the IR",
    correct_answer_mr: "(B) शरीराची डावी पुढची बाजू (Left anterior aspect) IR च्या जवळ असणे",
    explanation: "LAO (Left Anterior Oblique) means the body is rotated with the left anterior aspect nearest the Image Receptor (IR).",
    explanation_mr: "LAO चा अर्थ शरीराची डावी पुढील बाजू (Left Anterior) ही इमेज रिसेप्टरच्या (IR) सर्वात जवळ ठेवणे असा होतो.",
    source_page: 172,
    difficulty: 'easy'
  },
  {
    id: 164,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "The bending motion of an articulation that decreases the angle between associated bones is called:",
    question_mr: "दोन हाडांमधील कोन (Angle) कमी करणाऱ्या सांध्याच्या वाकण्याच्या क्रियेला (Bending motion) काय म्हणतात?",
    options: [
      "(A) Extension",
      "(B) Flexion",
      "(C) Eversion",
      "(D) Circumduction"
    ],
    options_mr: [
      "(A) एक्स्टेंशन (Extension)",
      "(B) फ्लेक्शन (Flexion)",
      "(C) इव्हर्जन (Eversion)",
      "(D) सर्कमडक्शन (Circumduction)"
    ],
    correct_answer: "(B) Flexion",
    correct_answer_mr: "(B) फ्लेक्शन (Flexion)",
    explanation: "Flexion is the bending motion of an articulation, decreasing the angle between associated bones.",
    explanation_mr: "सांधा वाकवून दोन हाडांमधील कोन कमी करण्याच्या हालचालीला फ्लेक्शन (Flexion) म्हणतात.",
    source_page: 175,
    difficulty: 'easy'
  },
  {
    id: 165,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "Which term describes a turning outward or lateral motion of an articulation?",
    question_mr: "सांध्याची बाहेरच्या (Lateral) बाजूला वळण्याची किंवा फिरण्याची क्रिया दर्शवणारी संज्ञा कोणती?",
    options: [
      "(A) Inversion",
      "(B) Eversion",
      "(C) Pronation",
      "(D) Adduction"
    ],
    options_mr: [
      "(A) इनव्हर्जन (Inversion)",
      "(B) इव्हर्जन (Eversion)",
      "(C) प्रोनेशन (Pronation)",
      "(D) अ‍ॅडक्शन (Adduction)"
    ],
    correct_answer: "(B) Eversion",
    correct_answer_mr: "(B) इव्हर्जन (Eversion)",
    explanation: "Eversion is a turning outward or lateral motion of an articulation, sometimes with external tension or stress applied.",
    explanation_mr: "इव्हर्जन (Eversion) म्हणजे सांधा किंवा पायाचा तळबाजू बाहेरच्या दिशेने (Lateral motion) फिरवणे.",
    source_page: 178,
    difficulty: 'easy'
  },
  {
    id: 166,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The radial notch, which provides articulation for the radial head to form the proximal radioulnar articulation, is located on which bone?",
    question_mr: "रेडिअल नॉच (Radial notch) ही जागा जिथे रेडिअल हेड जोडून प्रॉक्सिमल रेडिओअल्नार सांधा बनतो, ती कोणत्या हाडावर असते?",
    options: [
      "(A) The humerus",
      "(B) The radius",
      "(C) The ulna",
      "(D) The scapula"
    ],
    options_mr: [
      "(A) ह्युमेरस (Humerus)",
      "(B) रेडियस (Radius)",
      "(C) अल्ना (Ulna)",
      "(D) स्कॅप्युला (Scapula)"
    ],
    correct_answer: "(C) The ulna",
    correct_answer_mr: "(C) अल्ना (Ulna)",
    explanation: "Just distal and lateral to the semilunar notch on the proximal ulna is the radial notch, which provides articulation for the radial head.",
    explanation_mr: "रेडिअल नॉच ही अल्ना (Ulna) हाडाच्या वरील भागावर असते, जिथे रेडियसचे टोक (Radial head) जोडले जाते.",
    source_page: 182,
    difficulty: 'medium'
  },
  {
    id: 167,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Between the two articular surfaces on the superior aspect of the tibia is a raised prominence called the:",
    question_mr: "टिबिया (Tibia) हाडाच्या वरील भागातील (Tibial plateau) दोन सांध्यांच्या पृष्ठभागाच्या मध्ये असणाऱ्या उंचवट्याला काय म्हणतात?",
    options: [
      "(A) Medial malleolus",
      "(B) Intercondylar eminence (tibial spine)",
      "(C) Tibial tuberosity",
      "(D) Patellar ligament"
    ],
    options_mr: [
      "(A) मेडिअल मॅलिओलस",
      "(B) इंटरकॉन्डायलर एमिनन्स / टिबियल स्पाईन (Tibial spine)",
      "(C) टिबियल ट्युबरॉसिटी",
      "(D) पटेला लिगामेंट"
    ],
    correct_answer: "(B) Intercondylar eminence (tibial spine)",
    correct_answer_mr: "(B) इंटरकॉन्डायलर एमिनन्स / टिबियल स्पाईन (Tibial spine)",
    explanation: "Between the two articular surfaces on the tibial plateau is a raised prominence, the intercondylar eminence (tibial spine).",
    explanation_mr: "टिबियाच्या प्लेटूवर दोन कॉन्डाईल्सच्या मध्ये असलेल्या उंचवट्याला इंटरकॉन्डायलर एमिनन्स किंवा टिबियल स्पाईन (Tibial spine) म्हणतात.",
    source_page: 186,
    difficulty: 'easy'
  },
  {
    id: 168,
    category: 'Imaging Procedures: Pathology',
    section: 'technical',
    question: "A painful condition of the wrist caused by a diminished anteroposterior diameter of the tunnel impinging on the median nerve is known as:",
    question_mr: "मनगटाच्या टनेलचा आकार लहान होऊन मिडियन नर्व्हवर (Median nerve) दाब पडल्यामुळे होणाऱ्या वेदनादायी आजाराला काय म्हणतात?",
    options: [
      "(A) Lateral epicondylitis",
      "(B) Colles' fracture",
      "(C) Carpal tunnel syndrome",
      "(D) Avascular necrosis"
    ],
    options_mr: [
      "(A) लॅटरल एपिकॉन्डिलायटिस",
      "(B) कॉलिस फ्रॅक्चर (Colles' fracture)",
      "(C) कार्पल टनेल सिंड्रोम (Carpal tunnel syndrome)",
      "(D) अव्हॅस्क्युलर नेक्रोसिस"
    ],
    correct_answer: "(C) Carpal tunnel syndrome",
    correct_answer_mr: "(C) कार्पल टनेल सिंड्रोम (Carpal tunnel syndrome)",
    explanation: "Carpal tunnel syndrome is caused by the impingement of the median nerve due to a diminished AP diameter of the tunnel, causing severe pain and disability in the affected hand and wrist.",
    explanation_mr: "कार्पल टनेल सिंड्रोममध्ये मनगटातील कार्पल टनेल अरुंद होऊन मिडियन नर्व्हवर दाब पडतो, ज्यामुळे हातात आणि मनगटात वेदना व बधिरता येते.",
    source_page: 190,
    difficulty: 'easy'
  },
  {
    id: 169,
    category: 'Patient Care & Safety',
    section: 'technical',
    question: "What is the normal body temperature range for infants up to 4 years of age?",
    question_mr: "४ वर्षांपर्यंतच्या लहान मुलांचे आणि बालकांचे शरीराचे सामान्य तापमान (Normal body temperature) किती असते?",
    options: [
      "(A) 97.6°F - 98.1°F",
      "(B) 97.8°F - 98.6°F",
      "(C) 98.6°F - 99.1°F",
      "(D) 99.0°F - 99.7°F"
    ],
    options_mr: [
      "(A) ९७.६°F - ९८.१°F",
      "(B) ९७.८°F - ९८.६°F",
      "(C) ९८.६°F - ९९.१°F",
      "(D) ९९.०°F - ९९.७°F"
    ],
    correct_answer: "(D) 99.0°F - 99.7°F",
    correct_answer_mr: "(D) ९९.०°F - ९९.७°F",
    explanation: "Infants and children have a wider range of body temperature than adults. Infants up to 4 years of age have normal body temperatures between 99.0°F and 99.7°F.",
    explanation_mr: "लहान मुलांमध्ये प्रौढांपेक्षा शरीराच्या तापमानाची श्रेणी थोडी जास्त असते. ४ वर्षांपर्यंतच्या मुलांचे सामान्य तापमान ९९.०°F ते ९९.७°F दरम्यान असते.",
    source_page: 195,
    difficulty: 'medium'
  },
  {
    id: 170,
    category: 'Patient Care: Vital Signs',
    section: 'technical',
    question: "When measuring blood pressure using a sphygmomanometer and stethoscope, the first sound heard as the valve is slowly opened is the:",
    question_mr: "स्फीग्मोमॅनोमीटर आणि स्टेथॉस्कोप वापरून रक्तदाब मोजताना, व्हाल्व्ह हळूहळू उघडल्यावर ऐकू येणारा पहिला आवाज कोणता असतो?",
    options: [
      "(A) Diastolic pressure",
      "(B) Systolic pressure",
      "(C) Pulse pressure",
      "(D) Apical pressure"
    ],
    options_mr: [
      "(A) डायस्टोलिक प्रेशर (Diastolic pressure)",
      "(B) सिस्टोलिक प्रेशर (Systolic pressure)",
      "(C) पल्स प्रेशर (Pulse pressure)",
      "(D) ॲपिकल प्रेशर (Apical pressure)"
    ],
    correct_answer: "(B) Systolic pressure",
    correct_answer_mr: "(B) सिस्टोलिक प्रेशर (Systolic pressure)",
    explanation: "When measuring blood pressure, the first sound heard as the valve is opened and pressure is released is the systolic pressure.",
    explanation_mr: "रक्तदाब मोजताना कफची हवा सोडताना स्टेथॉस्कोपमधून ऐकू येणारा पहिला ठोका म्हणजे सिस्टोलिक रक्तदाब (Systolic blood pressure) असतो.",
    source_page: 198,
    difficulty: 'easy'
  },
  {
    id: 171,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "Which of the following medications is classified as an antiarrhythmic?",
    question_mr: "खालीलपैकी कोणते औषध अँटीअरिद्मिक (Antiarrhythmic - हृदयाचे अनियमित ठोके नियमात आणणारे) म्हणून वर्गीकृत केले आहे?",
    options: [
      "(A) Lidocaine (Xylocaine)",
      "(B) Epinephrine (Adrenalin)",
      "(C) Diphenhydramine (Benadryl)",
      "(D) Furosemide (Lasix)"
    ],
    options_mr: [
      "(A) लिडोकेन / झायलोकेन (Lidocaine)",
      "(B) एपिनेफ्रीन / एड्रेनालाईन (Epinephrine)",
      "(C) डायफेनहायड्रॅमाईन / बेनाड्रिल (Diphenhydramine)",
      "(D) फ्युरोसेमाईड / लॅसिक्स (Furosemide)"
    ],
    correct_answer: "(A) Lidocaine (Xylocaine)",
    correct_answer_mr: "(A) लिडोकेन / झायलोकेन (Lidocaine)",
    explanation: "Lidocaine (Xylocaine) and Quinidine sulfate are classified as antiarrhythmic medications, which relieve cardiac arrhythmia.",
    explanation_mr: "लिडोकेन (Xylocaine) हे स्थानिक भूल देण्याव्यतिरिक्त हृदयाच्या ठोक्यांचे अनियमितता (Arrhythmia) रोखण्यासाठी अँटीअरिद्मिक औषध म्हणून वापरले जाते.",
    source_page: 202,
    difficulty: 'medium'
  },
  {
    id: 172,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "An emetic is a type of medication that is used to:",
    question_mr: "इमेटिक (Emetic) प्रकारची औषधे कशासाठी वापरली जातात?",
    options: [
      "(A) Reduce fever",
      "(B) Stimulate vomiting",
      "(C) Lower blood glucose",
      "(D) Inhibit blood clotting"
    ],
    options_mr: [
      "(A) ताप कमी करण्यासाठी",
      "(B) उलटी प्रवृत्त करण्यासाठी (Stimulate vomiting)",
      "(C) रक्तातील साखर कमी करण्यासाठी",
      "(D) रक्त गोठणे थांबवण्यासाठी"
    ],
    correct_answer: "(B) Stimulate vomiting",
    correct_answer_mr: "(B) उलटी प्रवृत्त करण्यासाठी (Stimulate vomiting)",
    explanation: "An emetic (such as Ipecac) stimulates vomiting.",
    explanation_mr: "इमेटिक औषधे (उदा. इपेकॅक सिरप) विषबाधा किंवा अवांछित पदार्थ पोटातून बाहेर काढण्यासाठी उलटी घडवून आणण्यासाठी वापरली जातात.",
    source_page: 205,
    difficulty: 'easy'
  },
  {
    id: 173,
    category: 'Patient Care: Emergency & Allergic Reactions',
    section: 'technical',
    question: "Which of the following is an early symptom of a life-threatening anaphylactic reaction?",
    question_mr: "जीवघेण्या ॲनाफिलेक्टिक (Anaphylactic reaction - तीव्र ॲलर्जी) प्रतिक्रियेचे सुरुवातीचे लक्षण कोणते आहे?",
    options: [
      "(A) Hypertension and bradycardia",
      "(B) Itching of the palms and soles, wheezing, and throat constriction",
      "(C) Extreme hunger and sweating",
      "(D) Sudden fever and chills"
    ],
    options_mr: [
      "(A) उच्च रक्तदाब आणि मंद नाडी",
      "(B) तळहात व तळपायांना खाज सुटणे, घरघर लागणे व घसा आवळल्यासारखा होणे",
      "(C) खूप भूक लागणे आणि घाम येणे",
      "(D) अचानक ताप आणि थंडी वाजणे"
    ],
    correct_answer: "(B) Itching of the palms and soles, wheezing, and throat constriction",
    correct_answer_mr: "(B) तळहात व तळपायांना खाज सुटणे, घरघर लागणे व घसा आवळल्यासारखा होणे",
    explanation: "Early symptoms of an anaphylactic reaction include itching of the palms and soles, wheezing, constriction of the throat, dyspnea, dysphagia, and hypotension.",
    explanation_mr: "ॲनाफिलेक्सिसच्या सुरुवातीला तळहात/तळपायांना खाज, घशात दाटणे, श्वास घेण्यास त्रास होणे (Wheezing) आणि रक्तदाब अचानक कमी होणे ही लक्षणे दिसतात.",
    source_page: 208,
    difficulty: 'medium'
  },
  {
    id: 174,
    category: 'Patient Care: Emergency Procedures',
    section: 'technical',
    question: "When dealing with a patient who has an unsplinted fracture, the radiographer must:",
    question_mr: "ज्या रुग्णाच्या फ्रॅक्चरवर स्प्लिंट (Splint - पट्टी) बांधलेली नाही अशा रुग्णाला हाताळताना रेडियोग्राफरने काय केले पाहिजे?",
    options: [
      "(A) Remove the splint temporarily to avoid artifacts",
      "(B) Support the areas proximal and distal to the fracture site when moving",
      "(C) Move the patient quickly to reduce radiation exposure time",
      "(D) Apply a tourniquet above the fracture"
    ],
    options_mr: [
      "(A) आर्टिफॅक्ट टाळण्यासाठी स्प्लिंट काढून टाकणे",
      "(B) हलवताना फ्रॅक्चर जागेच्या वरच्या (Proximal) आणि खालच्या (Distal) दोन्ही भागांना आधार देणे",
      "(C) रेडिएशन वेळ वाचवण्यासाठी रुग्णाला वेगाने हलवणे",
      "(D) फ्रॅक्चरच्या वर टूर्निकेट बांधणे"
    ],
    correct_answer: "(B) Support the areas proximal and distal to the fracture site when moving",
    correct_answer_mr: "(B) हलवताना फ्रॅक्चर जागेच्या वरच्या (Proximal) आणि खालच्या (Distal) दोन्ही भागांना आधार देणे",
    explanation: "An unsplinted fracture must be moved with great care, with areas proximal and distal to the fracture site adequately supported to avoid further tissue injury or muscle spasm.",
    explanation_mr: "स्प्लिंट नसलेले फ्रॅक्चर हलवताना हाडाचे आणि स्नायूंचे अधिक नुकसान टाळण्यासाठी फ्रॅक्चरच्या दोन्ही बाजूंस (वर व खाली) भक्कम आधार देणे आवश्यक आहे.",
    source_page: 212,
    difficulty: 'easy'
  },
  {
    id: 175,
    category: 'Radiographic Procedures: Emergency & Spine',
    section: 'technical',
    question: "A patient with possible spinal injuries arrives in the radiology department. The first projection usually evaluated by the physician is the:",
    question_mr: "पाठीच्या कण्याला (Spine) दुखापत असण्याची शंका असलेला रुग्ण आल्यास, डॉक्टरांकडून सर्वात आधी कोणत्या एक्स-रे प्रोजेक्शनची तपासणी केली जाते?",
    options: [
      "(A) AP axial",
      "(B) Horizontal (cross-table) lateral",
      "(C) Oblique views",
      "(D) Open-mouth odontoid"
    ],
    options_mr: [
      "(A) AP एक्झिअल (AP axial)",
      "(B) हॉरिझॉन्टल / क्रॉस-टेबल लॅटरल (Horizontal cross-table lateral)",
      "(C) ऑब्लीक व्ह्यू (Oblique views)",
      "(D) ओपन-माउथ ओडॉन्टॉईड (Open-mouth odontoid)"
    ],
    correct_answer: "(B) Horizontal (cross-table) lateral",
    correct_answer_mr: "(B) हॉरिझॉन्टल / क्रॉस-टेबल लॅटरल (Horizontal cross-table lateral)",
    explanation: "A horizontal (cross-table) lateral projection should be evaluated by the physician first to determine the extent of injury before the patient is moved.",
    explanation_mr: "रुग्णाला न हलवता काढलेला हॉरिझॉन्टल (क्रॉस-टेबल) लॅटरल x-ray डॉक्टर प्रथम पाहतात जेणेकरून कण्याच्या दुखापतीचे गांभीर्य समजते.",
    source_page: 216,
    difficulty: 'medium'
  },
  {
    id: 176,
    category: 'Patient Care: Medical Emergencies',
    section: 'technical',
    question: "What type of seizure is characterized by a brief loss of consciousness (10 to 30 seconds) and accompanied by eye or muscle fluttering?",
    question_mr: "कोणत्या प्रकारच्या मिर्गीच्या झटक्यात (Seizure) रुग्ण अवघ्या १० ते ३० सेकंदांसाठी असंवेद्य (Loss of consciousness) होतो आणि डोळे/स्नायू थरथरतात?",
    options: [
      "(A) Grand mal",
      "(B) Petit mal",
      "(C) Jacksonian",
      "(D) Febrile"
    ],
    options_mr: [
      "(A) ग्रँड माल (Grand mal)",
      "(B) पेटिट माल (Petit mal)",
      "(C) जॅक्सोनियन (Jacksonian)",
      "(D) फेब्राईल (Febrile)"
    ],
    correct_answer: "(B) Petit mal",
    correct_answer_mr: "(B) पेटिट माल (Petit mal)",
    explanation: "A petit mal seizure is subtle and characterized by brief loss of consciousness accompanied by eye or muscle fluttering.",
    explanation_mr: "पेटिट माल (Petit mal) सीझरमध्ये रुग्ण थोड्या वेळासाठी (१०-३० सेकंद) शून्य मनस्क होतो आणि डोळ्यांची उघडझाप/थरथराहट होते.",
    source_page: 220,
    difficulty: 'medium'
  },
  {
    id: 177,
    category: 'Patient Care: Medical Emergencies',
    section: 'technical',
    question: "Which condition is a mild, temporary interference with blood supplied to the brain, presenting symptoms like temporary blindness in one eye or hemiparesis?",
    question_mr: "मेंदूच्या रक्तपुरवठ्यात अल्पकालीन आणि तात्पुरता अडथळा आल्याने एका डोळ्याचे तात्पुरते अंधत्व किंवा अर्धांगवायूची लक्षणे दिसणाऱ्या स्थितीला काय म्हणतात?",
    options: [
      "(A) Cerebrovascular accident (CVA)",
      "(B) Transient ischemic attack (TIA)",
      "(C) Subarachnoid hemorrhage",
      "(D) Myocardial infarction"
    ],
    options_mr: [
      "(A) सेरेब्रोव्हॅस्क्युलर ॲक्सिडेंट / स्ट्रोक (CVA)",
      "(B) ट्रान्झियंट इस्कॅमिक अटॅक (TIA)",
      "(C) सबअराक्नॉईड हॅमरेज",
      "(D) मायोकार्डिअल इन्फार्कशन"
    ],
    correct_answer: "(B) Transient ischemic attack (TIA)",
    correct_answer_mr: "(B) ट्रान्झियंट इस्कॅमिक अटॅक (TIA)",
    explanation: "A transient ischemic attack (TIA) occurs when the interference of blood supply to the brain is mild and temporary, resulting from a partial vessel occlusion.",
    explanation_mr: "ट्रान्झियंट इस्कॅमिक अटॅक (TIA) हा मेंदूतील तात्पुरत्या कमी रक्तपुरवठ्यामुळे होतो, ज्याची लक्षणे २४ तासांच्या आत पूर्ण निघून जातात (मिनी स्ट्रोक).",
    source_page: 224,
    difficulty: 'medium'
  },
  {
    id: 178,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The production of blood cells within the bone marrow is a process termed:",
    question_mr: "हाडांच्या मज्जेमध्ये (Bone marrow) रक्तपेशी तयार होण्याच्या प्रक्रियेला काय म्हणतात?",
    options: [
      "(A) Osteogenesis",
      "(B) Hematopoiesis",
      "(C) Phagocytosis",
      "(D) Hemostasis"
    ],
    options_mr: [
      "(A) ऑस्टियोजिनेसिस (Osteogenesis)",
      "(B) हॅमॅटोपोईसिस (Hematopoiesis)",
      "(C) फॅगोसायटॉसिस (Phagocytosis)",
      "(D) हेमोस्टॅसिस (Hemostasis)"
    ],
    correct_answer: "(B) Hematopoiesis",
    correct_answer_mr: "(B) हॅमॅटोपोईसिस (Hematopoiesis)",
    explanation: "Bone marrow, particularly red marrow, is important in the production of blood cells—a process called hematopoiesis.",
    explanation_mr: "अस्थिमज्जेत (Bone marrow) तांबड्या, पांढऱ्या व प्लेटलेट रक्तपेशी बनण्याच्या प्रक्रियेला हॅमॅटोपोईसिस (Hematopoiesis) म्हणतात.",
    source_page: 228,
    difficulty: 'easy'
  },
  {
    id: 179,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The structural unit of compact (hard, cortical) bone tissue is the:",
    question_mr: "कठीण किंवा कॉम्पॅक्ट बोन (Compact bone) च्या रचनेच्या मूलभूत घटकाला (Structural unit) काय म्हणतात?",
    options: [
      "(A) Trabeculae",
      "(B) Haversian (osteon) system",
      "(C) Periosteum",
      "(D) Cancellous lattice"
    ],
    options_mr: [
      "(A) ट्रॅबेक्युली (Trabeculae)",
      "(B) हॅव्हर्शियन / ऑस्टिऑन सिस्टीम (Haversian system / Osteon)",
      "(C) पेरिऑस्टियम (Periosteum)",
      "(D) कॅन्सेलस लॅटिस"
    ],
    correct_answer: "(B) Haversian (osteon) system",
    correct_answer_mr: "(B) हॅव्हर्शियन / ऑस्टिऑन सिस्टीम (Haversian system / Osteon)",
    explanation: "The structural unit of compact bone tissue is the haversian (osteon) system, which consists of a central canal surrounded by concentric cylinders of osteocytes.",
    explanation_mr: "कॉम्पॅक्ट हाडाचे रचनात्मक एकक हॅव्हर्शियन सिस्टीम (Haversian system किंवा Osteon) हे असते.",
    source_page: 232,
    difficulty: 'medium'
  },
  {
    id: 180,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Partially movable joints, such as the intervertebral joints and the symphysis pubis, are classified as:",
    question_mr: "किंचित हालचाल होऊ शकणारे सांधे (Partially movable joints - उदा. पाठीच्या मणक्यांमधील सांधे व सिम्फिसिस प्युबिस) कोणत्या वर्गात येतात?",
    options: [
      "(A) Synarthrotic",
      "(B) Amphiarthrotic",
      "(C) Diarthrotic",
      "(D) Synovial"
    ],
    options_mr: [
      "(A) सिनार्थ्रोटिक (Synarthrotic - अचल)",
      "(B) अँफिआर्थ्रोटिक (Amphiarthrotic - अल्पचल)",
      "(C) डायआर्थ्रोटिक (Diarthrotic - चल)",
      "(D) सायनोव्हिअल (Synovial)"
    ],
    correct_answer: "(B) Amphiarthrotic",
    correct_answer_mr: "(B) अँफिआर्थ्रोटिक (Amphiarthrotic - अल्पचल)",
    explanation: "Amphiarthrotic joints, also described as cartilaginous, are partially movable (e.g., intervertebral joints and the symphysis pubis).",
    explanation_mr: "अँफिआर्थ्रोटिक (Amphiarthrotic) सांधे कास्थिमय (Cartilaginous) असतात आणि त्यामध्ये मर्यादित किंवा किंचित हालचाल शक्य असते.",
    source_page: 236,
    difficulty: 'medium'
  },
  {
    id: 181,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The first carpometacarpal joint (the thumb) is an example of which type of synovial joint?",
    question_mr: "अंगठ्याचा पहिला कार्पोमेटाकार्पल सांधा (1st CMC joint) हा कोणत्या प्रकारच्या सायनोव्हिअल जॉइंटचे उदाहरण आहे?",
    options: [
      "(A) Hinge (ginglymus)",
      "(B) Ball and socket (spheroid)",
      "(C) Saddle (sellar)",
      "(D) Pivot (trochoid)"
    ],
    options_mr: [
      "(A) हिंज / बिजागरीचा सांधा",
      "(B) बॉल अँड सॉकेट सांधा",
      "(C) सॅडल / सेलर सांधा (Saddle / Sellar joint)",
      "(D) पिव्हॉट / खुंट्याचा सांधा"
    ],
    correct_answer: "(C) Saddle (sellar)",
    correct_answer_mr: "(C) सॅडल / सेलर सांधा (Saddle / Sellar joint)",
    explanation: "The first carpometacarpal joint (thumb) is a saddle/sellar joint, permitting flexion, extension, abduction, adduction, and circumduction.",
    explanation_mr: "अंगठ्याचा पायाचा सांधा (1st CMC joint) हा सॅडल (Saddle) जॉइंट असतो, ज्यामुळे अंगठ्याची सर्व दिशांना लवचिक हालचाल होते.",
    source_page: 240,
    difficulty: 'easy'
  },
  {
    id: 182,
    category: 'Imaging Procedures: Pathology',
    section: 'technical',
    question: "A fracture of the distal radius that commonly results from a fall onto an outstretched hand with the arm extended is known as a:",
    question_mr: "हात पुढे करून जमिनीवर पडल्यामुळे रेडियस हाडाच्या खालच्या टोकाला (Distal radius) होणाऱ्या फ्रॅक्चरला काय म्हणतात?",
    options: [
      "(A) Colles' fracture",
      "(B) Scaphoid fracture",
      "(C) Boxer's fracture",
      "(D) Monteggia fracture"
    ],
    options_mr: [
      "(A) कॉलिस फ्रॅक्चर (Colles' fracture)",
      "(B) स्कॅफॉईड फ्रॅक्चर (Scaphoid fracture)",
      "(C) बॉक्सर्स फ्रॅक्चर (Boxer's fracture)",
      "(D) मोंटेगिया फ्रॅक्चर (Monteggia fracture)"
    ],
    correct_answer: "(A) Colles' fracture",
    correct_answer_mr: "(A) कॉलिस फ्रॅक्चर (Colles' fracture)",
    explanation: "Colles' fractures of the distal radius usually result from a fall onto an outstretched hand with the arm extended.",
    explanation_mr: "मनगटाजवळ रेडियस हाड तुटून मागे सरकण्याच्या या प्रकाराला कॉलिस फ्रॅक्चर (Colles' fracture) म्हणतात.",
    source_page: 244,
    difficulty: 'easy'
  },
  {
    id: 183,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "On the medial aspect of the distal humerus, which structure articulates with the semilunar notch of the ulna?",
    question_mr: "ह्युमेरस हाडाच्या खालच्या भागातील मेडिअल बाजूवर असणारी कोणती रचना अल्ना हाडाच्या सेमील्युनार नॉचशी (Semilunar notch) जोडली जाते?",
    options: [
      "(A) Capitulum",
      "(B) Trochlea",
      "(C) Olecranon fossa",
      "(D) Medial epicondyle"
    ],
    options_mr: [
      "(A) कॅपिट्युलम (Capitulum)",
      "(B) ट्रॉकलिया (Trochlea)",
      "(C) ओलेक्रॅनन फॉसा (Olecranon fossa)",
      "(D) मेडिअल एपिकॉन्डाईल"
    ],
    correct_answer: "(B) Trochlea",
    correct_answer_mr: "(B) ट्रॉकलिया (Trochlea)",
    explanation: "The trochlea is on the medial aspect of the distal humerus and articulates with the semilunar notch of the ulna.",
    explanation_mr: "ह्युमेरसचा ट्रॉकलिया (Trochlea) भाग अल्ना हाडाच्या सेमील्युनार / ट्रॉकलिअर नॉचमध्ये बसून कोपराचा सांधा बनवतो.",
    source_page: 248,
    difficulty: 'medium'
  },
  {
    id: 184,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Which of the following marks the location of the fused epiphyseal plate in the adult humerus and separates the head from the metaphysis?",
    question_mr: "प्रौढांच्या ह्युमेरस हाडात एपिफिजिअल प्लेट जोडल्याची जागा दर्शवणारा आणि ह्युमेरसचे डोके (Head) मेटाफायसिसपासून वेगळा करणारा भाग कोणता?",
    options: [
      "(A) Surgical neck",
      "(B) Anatomical neck",
      "(C) Intertubercular groove",
      "(D) Deltoid tuberosity"
    ],
    options_mr: [
      "(A) सर्जिकल मान (Surgical neck)",
      "(B) ॲनाटोमिकल मान (Anatomical neck)",
      "(C) इंटरट्युबरक्युलर ग्रूव्ह",
      "(D) डेल्टॉईड ट्युबरॉसिटी"
    ],
    correct_answer: "(B) Anatomical neck",
    correct_answer_mr: "(B) ॲनाटोमिकल मान (Anatomical neck)",
    explanation: "The anatomical neck marks the location of the fused epiphyseal plate in the adult and separates the head and metaphysis.",
    explanation_mr: "ॲनाटोमिकल मान (Anatomical neck) ही ह्युमेरसच्या हेडच्या अगदी खाली असणारी रेषा आहे जी पूर्वीची ग्रोथ प्लेट दर्शवते.",
    source_page: 252,
    difficulty: 'medium'
  },
  {
    id: 185,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Which prominent structure on the posteroinferior portion of the pelvis provides attachment for the posterior thigh muscles?",
    question_mr: "पेल्व्हिसच्या मागच्या व खालच्या भागातील कोणता उंचवटा मांडीच्या मागच्या स्नायूंना (Hamstring muscles) जोडण्यासाठी आधार देतो?",
    options: [
      "(A) Iliac crest",
      "(B) Anterior superior iliac spine (ASIS)",
      "(C) Ischial tuberosity",
      "(D) Pubic symphysis"
    ],
    options_mr: [
      "(A) इलियॅक क्रेस्ट",
      "(B) अँटिरिअर सुपिरिअर इलियॅक स्पाईन (ASIS)",
      "(C) इश्चिअल ट्युबरॉसिटी (Ischial tuberosity)",
      "(D) प्युबिक सिम्फिसिस"
    ],
    correct_answer: "(C) Ischial tuberosity",
    correct_answer_mr: "(C) इश्चिअल ट्युबरॉसिटी (Ischial tuberosity)",
    explanation: "The most inferior portion of the ischium is the ischial tuberosity, a large, rough prominence that provides attachment for posterior thigh muscles.",
    explanation_mr: "इश्चिअल ट्युबरॉसिटी (Ischial tuberosity) हा आपण बसताना टेकणारा कठीण भाग आहे, जिथे मांडीचे स्नायू जोडलेले असतात.",
    source_page: 256,
    difficulty: 'easy'
  },
  {
    id: 186,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The medial auricular surfaces of the ilia articulate with the sacrum to form the:",
    question_mr: "इलियम हाडांची मेडिअल ओरिक्युलर पृष्ठभागे सॅक्रम (Sacrum) हाडाशी जोडून कोणता सांधा बनवतात?",
    options: [
      "(A) Symphysis pubis",
      "(B) Acetabulum",
      "(C) Sacroiliac joints",
      "(D) Obturator foramen"
    ],
    options_mr: [
      "(A) सिम्फिसिस प्युबिस",
      "(B) ॲसिटॅबुलम",
      "(C) सॅक्रोइलियॅक जॉइंट्स (Sacroiliac joints / SI joints)",
      "(D) ऑब्ट्युरेटर फोरामेन"
    ],
    correct_answer: "(C) Sacroiliac joints",
    correct_answer_mr: "(C) सॅक्रोइलियॅक जॉइंट्स (Sacroiliac joints / SI joints)",
    explanation: "The ilia are the large, superior bones whose medial auricular surfaces form the sacroiliac joints bilaterally.",
    explanation_mr: "सॅक्रम आणि इलियम हाड एकत्र येऊन सॅक्रोइलियॅक सांधे (Sacroiliac joints / SI Joints) तयार होतात.",
    source_page: 260,
    difficulty: 'easy'
  },
  {
    id: 187,
    category: 'Imaging Procedures: Pathology',
    section: 'technical',
    question: "A common deformity of the first metatarsophalangeal joint where the great toe adducts medially, resulting in an inflamed joint (bunion), is called:",
    question_mr: "पायाच्या अंगठ्याच्या पहिल्या MTP सांध्याची विकृती जिथे अंगठा आतल्या बाजूला झुकतो आणि सांध्यावर सुजलेला उंचवटा (Bunion) तयार होतो, त्याला काय म्हणतात?",
    options: [
      "(A) Osgood-Schlatter disease",
      "(B) Hallux valgus",
      "(C) Bipartite patella",
      "(D) Avascular necrosis"
    ],
    options_mr: [
      "(A) ऑसगुड-श्लॅटर आजार",
      "(B) हॅलक्स व्हॅल्गस (Hallux valgus)",
      "(C) बायपार्टाईट पटेल",
      "(D) अव्हॅस्क्युलर नेक्रोसिस"
    ],
    correct_answer: "(B) Hallux valgus",
    correct_answer_mr: "(B) हॅलक्स व्हॅल्गस (Hallux valgus)",
    explanation: "Hallux valgus is a common deformity of the first metatarsophalangeal joint where the first ('great') toe slowly adducts (medially), resulting in a bunion.",
    explanation_mr: "हॅलक्स व्हॅल्गस (Hallux valgus) ही पायाच्या अंगठ्याच्या सांध्याची विकृती आहे ज्याला सामान्य भाषेत बनियन (Bunion) म्हणतात.",
    source_page: 264,
    difficulty: 'medium'
  },
  {
    id: 188,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Between the articulating bones of the knee joint lie semilunar cartilages that help form the articular capsule. These are known as:",
    question_mr: "गुडघ्याच्या सांध्यातील हाडांच्या मध्ये असणाऱ्या अर्धचंद्राकृती कास्थींना (Semilunar cartilages) काय म्हणतात?",
    options: [
      "(A) Cruciate ligaments",
      "(B) Collateral ligaments",
      "(C) Menisci",
      "(D) Bursae"
    ],
    options_mr: [
      "(A) क्रूशिएट लिगामेंट्स (Cruciate ligaments)",
      "(B) कोलॅटरल लिगामेंट्स",
      "(C) मेनिसकी / मेनिसकस (Menisci / Meniscus)",
      "(D) बर्सी (Bursae)"
    ],
    correct_answer: "(C) Menisci",
    correct_answer_mr: "(C) मेनिसकी / मेनिसकस (Menisci / Meniscus)",
    explanation: "Semilunar cartilages, the menisci, lie medially and laterally between the articulating bones of the knee.",
    explanation_mr: "गुडघ्यात शॉक ॲब्जॉर्बर म्हणून काम करणाऱ्या अर्धचंद्राकार कूर्चांना मेनिसकस (Meniscus/Menisci) म्हणतात.",
    source_page: 268,
    difficulty: 'easy'
  },
  {
    id: 189,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "When performing a lateral projection of the forearm, how should the humerus, elbow, and forearm be positioned?",
    question_mr: "फॉरआर्मच्या (Forearm) लॅटरल x-ray प्रोजेक्शन करताना ह्युमेरस, कोपर आणि फॉरआर्म कसे ठेवले पाहिजेत?",
    options: [
      "(A) Elbow flexed 45 degrees, shoulder elevated",
      "(B) Elbow flexed 90 degrees, shoulder and elbow on the same plane",
      "(C) Elbow fully extended, hand pronated",
      "(D) Elbow flexed 90 degrees, hand supinated"
    ],
    options_mr: [
      "(A) कोपर ४५ अंश वाकवलेले, खांदा वर उचललेला",
      "(B) कोपर ९० अंश वाकवलेले, खांदा आणि कोपर एकाच समतलावर (Same plane)",
      "(C) कोपर पूर्ण सरळ, हात पालथा",
      "(D) कोपर ९० अंश वाकवलेले, हात चता"
    ],
    correct_answer: "(B) Elbow flexed 90 degrees, shoulder and elbow on the same plane",
    correct_answer_mr: "(B) कोपर ९० अंश वाकवलेले, खांदा आणि कोपर एकाच समतलावर (Same plane)",
    explanation: "For a lateral forearm, the elbow must be flexed 90 degrees with the shoulder and elbow on the same plane so that the humeral epicondyles are superimposed and perpendicular to the IR.",
    explanation_mr: "लॅटरल फॉरआर्मसाठी कोपर ९० अंशात वाकवून खांदा व कोपर टेबलावर एकाच रेषेत/पातळीवर ठेवले जातात.",
    source_page: 272,
    difficulty: 'medium'
  },
  {
    id: 190,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "To demonstrate the coracoid process and the lesser tubercle in profile, which shoulder projection is utilized?",
    question_mr: "खांद्याची कोराकॉईड प्रोसेस (Coracoid process) आणि लेसर ट्युबरकल (Lesser tubercle) प्रोफाईलमध्ये पाहण्यासाठी कोणती x-ray पद्धत वापरली जाते?",
    options: [
      "(A) AP External rotation",
      "(B) Inferosuperior (non-trauma) axial projection",
      "(C) Transthoracic lateral",
      "(D) Scapular Y view"
    ],
    options_mr: [
      "(A) AP एक्सटर्नल रोटेशन",
      "(B) इन्फिरोसुपिरिअर एक्झिअल प्रोजेक्शन (Inferosuperior axial projection)",
      "(C) ट्रान्स्थोरॅसिक लॅटरल",
      "(D) स्कॅप्युलर Y व्ह्यू"
    ],
    correct_answer: "(B) Inferosuperior (non-trauma) axial projection",
    correct_answer_mr: "(B) इन्फिरोसुपिरिअर एक्झिअल प्रोजेक्शन (Inferosuperior axial projection)",
    explanation: "The inferosuperior projection requires the arm to be abducted 90 degrees in external rotation, and the CR directed horizontally to the axilla. This demonstrates the coracoid process and lesser tubercle in profile.",
    explanation_mr: "इन्फिरोसुपिरिअर एक्झिअल व्ह्यूमध्ये हात ९० अंशात बाजूला करून काखेतून किरण टाकले जातात, ज्यामुळे कोराकॉईड प्रोसेस व लेसर ट्युबरकल स्पष्ट दिसतात.",
    source_page: 276,
    difficulty: 'hard'
  },
  {
    id: 191,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Which abdominal region is located centrally and directly above the umbilicus?",
    question_mr: "पोटाच्या (Abdomen) ९ भागांपैकी कोणता भाग मधे आणि बेंबीच्या (Umbilicus) अगदी वर स्थित असतो?",
    options: [
      "(A) Hypogastric region",
      "(B) Epigastrium",
      "(C) Right hypochondrium",
      "(D) Left lumbar region"
    ],
    options_mr: [
      "(A) हायपोगॅस्ट्रिक भाग",
      "(B) एपिगॅस्ट्रियम (Epigastrium)",
      "(C) उजवा हायपोकॉन्ड्रियम",
      "(D) डावा लंबर भाग"
    ],
    correct_answer: "(B) Epigastrium",
    correct_answer_mr: "(B) एपिगॅस्ट्रियम (Epigastrium)",
    explanation: "In the nine regions of the abdomen, the Epigastrium is the superior central region located directly above the umbilical region.",
    explanation_mr: "पोटाच्या वरच्या मध्यवर्ती भागाला एपिगॅस्ट्रियम (Epigastrium) म्हणतात, जो छातीच्या पिंजऱ्याच्या खाली व बेंबीच्या वर असतो.",
    source_page: 280,
    difficulty: 'easy'
  },
  {
    id: 192,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "The Centers for Disease Control and Prevention (CDC) estimates that what percentage of all hospital patients acquire some type of nosocomial infection?",
    question_mr: "CDC च्या अंदाजानुसार, रुग्णालयात भरती असलेल्या रुग्णांपैकी किती टक्के रुग्णांना नोजोकोमिअल (Nosocomial - हॉस्पिटलमधील संसर्ग) इन्फेक्शन होते?",
    options: [
      "(A) 1% to 3%",
      "(B) 5% to 15%",
      "(C) 20% to 30%",
      "(D) 35% to 50%"
    ],
    options_mr: [
      "(A) १% ते ३%",
      "(B) ५% ते १५%",
      "(C) २०% ते ३०%",
      "(D) ३५% ते ५०%"
    ],
    correct_answer: "(B) 5% to 15%",
    correct_answer_mr: "(B) ५% ते १५%",
    explanation: "The CDC estimates that from 5% to 15% of all hospital patients acquire some type of nosocomial (hospital-acquired) infection.",
    explanation_mr: "रुग्णालयात भरती होणाऱ्या सुमारे ५% ते १५% रुग्णांना तिथे असतानाच हॉस्पिटल-ॲक्वायर्ड (Nosocomial) संसर्ग होतो.",
    source_page: 284,
    difficulty: 'medium'
  },
  {
    id: 193,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "What concept requires that ALL patients be treated as potential sources of infection from blood and other body fluids?",
    question_mr: "सर्व रुग्णांचे रक्त आणि शारीरिक द्रव संसर्गजन्य असू शकतात असे मानून प्रत्येकावर समान खबरदारी घेण्याच्या तत्त्वाला काय म्हणतात?",
    options: [
      "(A) Airborne Precautions",
      "(B) Reverse Isolation",
      "(C) Standard Precautions",
      "(D) Surgical Asepsis"
    ],
    options_mr: [
      "(A) एअरबॉर्न प्रिकॉशन्स",
      "(B) रिव्हर्स आयसोलेशन",
      "(C) स्टँडर्ड प्रिकॉशन्स (Standard Precautions)",
      "(D) सर्जिकल असेप्सिस"
    ],
    correct_answer: "(C) Standard Precautions",
    correct_answer_mr: "(C) स्टँडर्ड प्रिकॉशन्स (Standard Precautions)",
    explanation: "Because no symptoms may be evident in infected patients, all patients must be treated as potential sources of infection under the 'Standard Precautions' concept.",
    explanation_mr: "स्टँडर्ड प्रिकॉशन्स (Standard Precautions) नुसार प्रत्येक रुग्णाच्या रक्त व शरीरातील द्रवांपासून स्वतःचे संरक्षण करणे बंधनकारक आहे.",
    source_page: 288,
    difficulty: 'easy'
  },
  {
    id: 194,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "Which of the following medications is classified as a Vasodilator and is used to relax and dilate blood vessels?",
    question_mr: "रक्तवाहिन्या शिथिल आणि रुंद (Dilate) करण्यासाठी वापरले जाणारे व्हॅसोडायलेटर (Vasodilator) औषध कोणते?",
    options: [
      "(A) Nitroglycerine",
      "(B) Epinephrine",
      "(C) Heparin",
      "(D) Furosemide"
    ],
    options_mr: [
      "(A) नायट्रोग्लिसरीन (Nitroglycerine)",
      "(B) एपिनेफ्रीन (Epinephrine)",
      "(C) हेपॅरिन (Heparin)",
      "(D) फ्युरोसेमाईड (Furosemide)"
    ],
    correct_answer: "(A) Nitroglycerine",
    correct_answer_mr: "(A) नायट्रोग्लिसरीन (Nitroglycerine)",
    explanation: "Nitroglycerine and verapamil are classified as vasodilators, which relax and dilate blood vessels and decrease blood pressure.",
    explanation_mr: "नायट्रोग्लिसरीन (Nitroglycerine) हे रक्तवाहिन्या रुंद करून हृदयावरील ताण व छातीतील वेदना (Angina) कमी करते.",
    source_page: 292,
    difficulty: 'easy'
  },
  {
    id: 195,
    category: 'Patient Care: Medical Support Equipment',
    section: 'technical',
    question: "What is the function of a 'heparin lock' in intravenous therapy?",
    question_mr: "आयव्ही (IV) उपचारात 'हेपॅरिन लॉक' (Heparin lock) चा मुख्य उपयोग काय असतो?",
    options: [
      "(A) To instantly reverse the effects of an allergic reaction",
      "(B) To make a vein accessible for medications administered at frequent intervals without repeated needle sticks",
      "(C) To secure the IV pole to the patient's bed",
      "(D) To filter contrast media before it enters the bloodstream"
    ],
    options_mr: [
      "(A) ॲलर्जीची प्रतिक्रिया त्वरित थांबवणे",
      "(B) वारंवार सुई न टोचता शिरेतून पुन्हा पुन्हा औषध देण्यासाठी मार्ग उपलब्ध ठेवणे",
      "(C) IV पोल पलंगाला बांधणे",
      "(D) कॉन्ट्रास्ट मिडिया फिल्टर करणे"
    ],
    correct_answer: "(B) To make a vein accessible for medications administered at frequent intervals without repeated needle sticks",
    correct_answer_mr: "(B) वारंवार सुई न टोचता शिरेतून पुन्हा पुन्हा औषध देण्यासाठी मार्ग उपलब्ध ठेवणे",
    explanation: "A heparin lock consists of a venous catheter established to make a vein available for medications administered at frequent intervals, preventing scarred, sclerotic veins from frequent injections.",
    explanation_mr: "हेपॅरिन लॉकमुळे रुग्णाला वारंवार सुई न टोचता शिरेतून (Vein) औषधे किंवा इंजेक्शन देणे सोपे जाते.",
    source_page: 296,
    difficulty: 'medium'
  },
  {
    id: 196,
    category: 'Radiographic Procedures: Positioning',
    section: 'technical',
    question: "The radiographic position where a patient is lying on their back (face up) and a horizontal central ray is used, is termed:",
    question_mr: "रुग्ण पाठीवर (Face up) झोपलेला असताना आडव्या (Horizontal) सेंट्रल रे चा वापर करून काढलेल्या x-ray पोझिशनला काय म्हणतात?",
    options: [
      "(A) Supine",
      "(B) Prone",
      "(C) Decubitus",
      "(D) Fowler"
    ],
    options_mr: [
      "(A) सुपाईन (Supine)",
      "(B) प्रोन (Prone)",
      "(C) डिक्युबिटस (Decubitus - उदा. Dorsal decubitus)",
      "(D) फाउलर (Fowler)"
    ],
    correct_answer: "(C) Decubitus",
    correct_answer_mr: "(C) डिक्युबिटस (Decubitus - उदा. Dorsal decubitus)",
    explanation: "Recumbent (supine, prone, or lateral) using a horizontal CR is termed decubitus.",
    explanation_mr: "रुग्ण झोपलेला असताना आडवा (Horizontal) सेंट्रल रे वापरला की त्या पोझिशनला डिक्युबिटस (Decubitus) म्हणतात.",
    source_page: 300,
    difficulty: 'medium'
  },
  {
    id: 197,
    category: 'Radiographic Procedures: Quality & Motion',
    section: 'technical',
    question: "What is the single most important way to reduce INVOLUNTARY motion during a radiographic exposure?",
    question_mr: "एक्स-रे एक्स्पोजर दरम्यान अनैच्छिक हालचाली (Involuntary motion - उदा. हृदयाचे ठोके, थरकाप) कमी करण्याचा सर्वात महत्वाचा उपाय कोणता?",
    options: [
      "(A) Using immobilization sponges",
      "(B) Good patient communication and explanation",
      "(C) Using the shortest possible exposure time",
      "(D) Suspending patient respiration"
    ],
    options_mr: [
      "(A) इमॉबिलायझेशन स्पंज वापरणे",
      "(B) रुग्णाशी संभाषण करून समजावून सांगणे",
      "(C) सर्वात कमी एक्स्पोजर टाइम (Shortest exposure time) वापरणे",
      "(D) श्वास रोखायला सांगणे"
    ],
    correct_answer: "(C) Using the shortest possible exposure time",
    correct_answer_mr: "(C) सर्वात कमी एक्स्पोजर टाइम (Shortest exposure time) वापरणे",
    explanation: "While communication is best for voluntary motion, the single most important way to reduce involuntary motion (like tremors from pain or anxiety) is to use the shortest possible exposure time.",
    explanation_mr: "अनैच्छिक हालचाली (Involuntary motion) रुग्णाच्या नियंत्रणात नसतात, त्यामुळे एक्स्पोजरचा वेळ अत्यंत कमी ठेवून त्या ब्लर न होता टिपल्या जाऊ शकतात.",
    source_page: 304,
    difficulty: 'medium'
  },
  {
    id: 198,
    category: 'Patient Care: Vital Signs',
    section: 'technical',
    question: "When taking a patient's vital signs, you note the respiratory rate is abnormally shallow and slow. What is the correct medical term for this?",
    question_mr: "रुग्णाचे श्वसन अत्यंत उथळ आणि धीमे (Abnormally shallow and slow) असल्याचे आढळल्यास त्याला वैद्यकीय भाषेत काय म्हणतात?",
    options: [
      "(A) Tachypnea",
      "(B) Oligopnea",
      "(C) Orthopnea",
      "(D) Dyspnea"
    ],
    options_mr: [
      "(A) टॅकिप्निया (Tachypnea)",
      "(B) ओलिगोप्निया / ब्रॅडिप्निया (Oligopnea)",
      "(C) ऑर्थोप्निया (Orthopnea)",
      "(D) डिस्प्निया (Dyspnea)"
    ],
    correct_answer: "(B) Oligopnea",
    correct_answer_mr: "(B) ओलिगोप्निया / ब्रॅडिप्निया (Oligopnea)",
    explanation: "Oligopnea refers to abnormally shallow, slow breathing.",
    explanation_mr: "ओलिगोप्निया (Oligopnea) म्हणजे श्वासोच्छ्वास असामान्यपणे मंद व उथळ असणे.",
    source_page: 308,
    difficulty: 'medium'
  },
  {
    id: 199,
    category: 'General Procedural Considerations',
    section: 'technical',
    question: "Which surface localization point corresponds to the level of the fifth cervical vertebra (C5)?",
    question_mr: "५ व्या सर्व्हायकल व्हर्टिब्राच्या (C5) पातळीशी कोणता बाह्य लँडमार्क (Surface localization point) जुळतो?",
    options: [
      "(A) Mastoid process",
      "(B) Thyroid cartilage (Adam's apple)",
      "(C) Vertebra prominens",
      "(D) Suprasternal notch"
    ],
    options_mr: [
      "(A) मॅस्टॉईड प्रोसेस (Mastoid process)",
      "(B) थायरॉईड कार्टिलेज / ॲडम्स ॲपल (Thyroid cartilage)",
      "(C) व्हर्टिब्रा प्रॉमिनेन्स (C7)",
      "(D) सुप्र्रास्टर्नल नॉच"
    ],
    correct_answer: "(B) Thyroid cartilage (Adam's apple)",
    correct_answer_mr: "(B) थायरॉईड कार्टिलेज / ॲडम्स ॲपल (Thyroid cartilage)",
    explanation: "The thyroid cartilage (Adam's apple) is the surface localization point that corresponds to the C5 vertebra.",
    explanation_mr: "मानेतील थायरॉईड कार्टिलेज (Adam's apple) हे ५ व्या सर्व्हायकल मणक्याच्या (C5) पातळीवर असते.",
    source_page: 312,
    difficulty: 'medium'
  },
  {
    id: 200,
    category: 'General Procedural Considerations',
    section: 'technical',
    question: "The vertebra prominens is a common surface landmark used to identify the level of the:",
    question_mr: "व्हर्टिब्रा प्रॉमिनेन्स (Vertebra prominens) हा बाह्य लँडमार्क कोणत्या मणक्याची पातळी ओळखण्यासाठी वापरला जातो?",
    options: [
      "(A) First cervical vertebra (C1)",
      "(B) Seventh cervical vertebra (C7)",
      "(C) Second thoracic vertebra (T2)",
      "(D) Sternal angle (T4-5)"
    ],
    options_mr: [
      "(A) पहिला सर्व्हायकल मणका (C1)",
      "(B) सातवा सर्व्हायकल मणका (C7)",
      "(C) दुसरा थोरॅसिक मणका (T2)",
      "(D) स्टर्नल अँगल (T4-5)"
    ],
    correct_answer: "(B) Seventh cervical vertebra (C7)",
    correct_answer_mr: "(B) सातवा सर्व्हायकल मणका (C7)",
    explanation: "The vertebra prominens is the localization point corresponding to the C7 vertebra.",
    explanation_mr: "मानेच्या पायाशी सहज हाताला लागणारा सर्वात उंच मणका म्हणजे C7 असून त्याला व्हर्टिब्रा प्रॉमिनेन्स म्हणतात.",
    source_page: 316,
    difficulty: 'easy'
  },
  {
    id: 201,
    category: 'Legal & Ethical Aspects',
    section: 'technical',
    question: "Holding a person against his or her will or using unauthorized restraints can constitute an intentional tort known as:",
    question_mr: "एकाध्या व्यक्तीला त्याच्या इच्छेविरुद्ध अडवून ठेवणे किंवा अनधिकृतपणे बांधून ठेवणे (Restraints) हा कोणत्या प्रकारचा बेकायदेशीर गुन्हा (Intentional tort) मानला जातो?",
    options: [
      "(A) Assault",
      "(B) Battery",
      "(C) False imprisonment",
      "(D) Defamation"
    ],
    options_mr: [
      "(A) असाॉल्ट (Assault - धमकी)",
      "(B) बॅटरी (Battery - शारीरिक दुखापत)",
      "(C) फॉल्स इम्प्रिझन्मेंट (False imprisonment - बेकायदेशीर स्थानबद्धता)",
      "(D) डिफॅमेशन (Defamation - मानहानी)"
    ],
    correct_answer: "(C) False imprisonment",
    correct_answer_mr: "(C) फॉल्स इम्प्रिझन्मेंट (False imprisonment - बेकायदेशीर स्थानबद्धता)",
    explanation: "False imprisonment is the illegal restriction of an individual's freedom. Holding a person against his or her will or using unauthorized restraints can constitute false imprisonment.",
    explanation_mr: "रुग्णाची परवानगी न घेता आणि डॉक्टरांच्या योग्य आदेशाशिवाय रुग्णाला बांधून किंवा अडवून ठेवल्यास फॉल्स इम्प्रिझन्मेंटचा (False Imprisonment) गुन्हा ठरतो.",
    source_page: 320,
    difficulty: 'medium'
  },
  {
    id: 202,
    category: 'Patient Care: Vital Signs',
    section: 'technical',
    question: "When measuring body temperature, which route generally yields a temperature 0.5 to 1.0 degrees higher than an oral measurement?",
    question_mr: "शरीराचे तापमान मोजताना, कोणत्या मार्गाने मोजलेले तापमान तोंडाद्वारे (Oral) घेतलेल्या तापमानापेक्षा ०.५ ते १.० अंश जास्त असते?",
    options: [
      "(A) Axillary",
      "(B) Rectal",
      "(C) External auditory canal",
      "(D) Tympanic"
    ],
    options_mr: [
      "(A) ॲक्सिलरी (काखेतील)",
      "(B) रेक्टल (गुदद्वारातील)",
      "(C) कान (External auditory canal)",
      "(D) टिमपॅनिक"
    ],
    correct_answer: "(B) Rectal",
    correct_answer_mr: "(B) रेक्टल (गुदद्वारातील)",
    explanation: "Rectal temperature is generally 0.5 to 1.0 degrees higher than an oral temperature, whereas axillary temperature is usually 0.5 to 1.0 degrees lower.",
    explanation_mr: "रेक्टल (Rectal) पद्धतीने घेतलेले तापमान ओरल तापमानापेक्षा सुमारे ०.५°F ते १.०°F जास्त भरते, तर काखेतील (Axillary) तापमान ०.५°F ते १.०°F कमी भरते.",
    source_page: 324,
    difficulty: 'easy'
  },
  {
    id: 203,
    category: 'Patient Care & Safety',
    section: 'technical',
    question: "According to the rules of good body mechanics, when lifting a heavy object, the radiographer should:",
    question_mr: "बॉडी मेकॅनिक्सच्या (Body mechanics) नियमांनुसार, वजनदार वस्तू उचलताना रेडियोग्राफरने काय केले पाहिजे?",
    options: [
      "(A) Bend at the waist and use back muscles",
      "(B) Keep knees straight and twist to lift",
      "(C) Bend the knees and use leg and abdominal muscles",
      "(D) Hold the object as far away from the body as possible"
    ],
    options_mr: [
      "(A) कंबरेत वाकून पाठीचे स्नायू वापरणे",
      "(B) गुढघे सरळ ठेवून पिळवटून उचलणे",
      "(C) गुढघे वाकवून पायांचे व पोटाचे स्नायू वापरणे",
      "(D) वस्तू शरीरापासून दूर धरणे"
    ],
    correct_answer: "(C) Bend the knees and use leg and abdominal muscles",
    correct_answer_mr: "(C) गुढघे वाकवून पायांचे व पोटाचे स्नायू वापरणे",
    explanation: "When lifting an object, one should bend the knees and use leg and abdominal muscles to lift (rather than the back muscles) to avoid back strain.",
    explanation_mr: "पाठीला दुखापत टाळण्यासाठी वजन उचलताना कंबरेत न वाकता गुढघे वाकवून पाय आणि पोटाच्या मजबूत स्नायूंचा वापर करावा.",
    source_page: 328,
    difficulty: 'easy'
  },
  {
    id: 204,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "A patient suspected of having measles (rubeola) or chickenpox (varicella) should be placed under which type of transmission-based precaution?",
    question_mr: "कांजिण्या (Chickenpox) किंवा गोवर (Measles) संसर्ग असण्याची शंका असलेल्या रुग्णाला कोणत्या प्रकारच्या खबरदारीमध्ये (Transmission-based precaution) ठेवले पाहिजे?",
    options: [
      "(A) Airborne precaution",
      "(B) Droplet precaution",
      "(C) Contact precaution",
      "(D) Protective isolation"
    ],
    options_mr: [
      "(A) एअरबॉर्न प्रिकॉशन (Airborne precaution - हवेद्वारे संसर्ग)",
      "(B) ड्रॉपलेट प्रिकॉशन",
      "(C) कॉन्टॅक्ट प्रिकॉशन",
      "(D) प्रोटेक्टिव्ह आयसोलेशन"
    ],
    correct_answer: "(A) Airborne precaution",
    correct_answer_mr: "(A) एअरबॉर्न प्रिकॉशन (Airborne precaution - हवेद्वारे संसर्ग)",
    explanation: "Airborne precaution is employed with patients suspected or known to be infected with the tubercle bacillus (TB), chickenpox (varicella), and measles (rubeola).",
    explanation_mr: "टीबी, गोवर आणि कांजिण्यांचे विषाणू/जीवाणू हवेतून बारीक थेंबांद्वारे (Airborne droplet nuclei) पसरत असल्यामुळे एअरबॉर्न प्रिकॉशन पाळावी लागते.",
    source_page: 332,
    difficulty: 'medium'
  },
  {
    id: 205,
    category: 'Patient Care: Medical Support Equipment',
    section: 'technical',
    question: "Why is it important to administer humidified oxygen to patients requiring oxygen therapy?",
    question_mr: "ऑक्सिजन थेरपी घेणाऱ्या रुग्णांना दमटपणा असलेला (Humidified) ऑक्सिजन देणे का आवश्यक असते?",
    options: [
      "(A) To increase the flammability of the gas",
      "(B) To decrease the oxygen concentration",
      "(C) To prevent drying and irritation of the respiratory mucosa",
      "(D) To cool down the patient's body temperature"
    ],
    options_mr: [
      "(A) वायूची ज्वलनशीलता वाढवण्यासाठी",
      "(B) ऑक्सिजनची सांद्रता कमी करण्यासाठी",
      "(C) श्वसनमार्गातील त्वचेला (Respiratory mucosa) कोरडे पडणे व जळजळ होण्यापासून वाचवण्यासाठी",
      "(D) शरीराचे तापमान थंड करण्यासाठी"
    ],
    correct_answer: "(C) To prevent drying and irritation of the respiratory mucosa",
    correct_answer_mr: "(C) श्वसनमार्गातील त्वचेला (Respiratory mucosa) कोरडे पडणे व जळजळ होण्यापासून वाचवण्यासाठी",
    explanation: "It is important to administer humidified oxygen to avoid drying and irritation of the respiratory mucosa.",
    explanation_mr: "कोरडा ऑक्सिजन दिल्यास श्वासनलिका कोरडी पडून चिडचिड व जखमा होऊ शकतात, म्हणूनच ऑक्सिजनमध्ये आर्द्रता (Humidification) जोडली जाते.",
    source_page: 336,
    difficulty: 'easy'
  },
  {
    id: 206,
    category: 'Radiographic Procedures: GI Tract',
    section: 'technical',
    question: "What is the term for the procedure where contrast medium is administered through a nasogastric (NG) tube for the purpose of locating and studying an obstruction?",
    question_mr: "एनजी ट्यूबद्वारे (NG tube) कॉन्ट्रास्ट मिडिया देऊन लहान आतड्यातील अडथळा (Obstruction) शोधण्याच्या व तपासण्याच्या पद्धतीला काय म्हणतात?",
    options: [
      "(A) Enteroclysis",
      "(B) Inspissation",
      "(C) Cholecystography",
      "(D) Myelography"
    ],
    options_mr: [
      "(A) एंट्रोक्लिसिस (Enteroclysis / Small bowel enema)",
      "(B) इन्स्पिसेशन",
      "(C) कोलेसिस्टोग्राफी",
      "(D) मायेलोग्राफी"
    ],
    correct_answer: "(A) Enteroclysis",
    correct_answer_mr: "(A) एंट्रोक्लिसिस (Enteroclysis / Small bowel enema)",
    explanation: "A patient with an NG tube can have the contrast medium administered through it for the purpose of locating and studying any site of obstruction. This procedure is called enteroclysis.",
    explanation_mr: "एनजी ट्यूब किंवा स्पेशल कॅथेटरद्वारे लहान आतड्यात थेट बेरियम व हवा सोडून अडथळा तपासण्याला एंट्रोक्लिसिस (Enteroclysis) म्हणतात.",
    source_page: 340,
    difficulty: 'medium'
  },
  {
    id: 207,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "Which of the following medications functions as an anticoagulant, inhibiting blood clotting and keeping IV lines free of clots?",
    question_mr: "खालीलपैकी कोणते औषध अँटीकोग्युुलंट (Anticoagulant - रक्त न गोठवणारे) म्हणून कार्य करते आणि आयव्ही लाईन्समध्ये रक्ताच्या गाठी होऊ देत नाही?",
    options: [
      "(A) Phenytoin (Dilantin)",
      "(B) Furosemide (Lasix)",
      "(C) Heparin",
      "(D) Digitalis"
    ],
    options_mr: [
      "(A) फेनिटॉईन",
      "(B) फ्युरोसेमाईड",
      "(C) हेपॅरिन (Heparin)",
      "(D) डिजिटलिस"
    ],
    correct_answer: "(C) Heparin",
    correct_answer_mr: "(C) हेपॅरिन (Heparin)",
    explanation: "Heparin and warfarin are classified as anticoagulants, which inhibit blood clotting and keep IV lines and catheters free of clots.",
    explanation_mr: "हेपॅरिन (Heparin) हे रक्त पातळ करणारे औषध आहे जे आयव्ही कॅथेटरमध्ये रक्त गोठण्यापासून रोखते.",
    source_page: 344,
    difficulty: 'easy'
  },
  {
    id: 208,
    category: 'Radiographic Procedures: Lower Extremity',
    section: 'technical',
    question: "Which projection of the foot is specifically used to demonstrate the interspaces between the first and second metatarsals and the first and second cuneiforms?",
    question_mr: "पायाच्या (Foot) पहिल्या व दुसऱ्या मेटाटार्सल आणि पहिल्या व दुसऱ्या क्युनिफॉर्म हाडांमधील फटी स्पष्ट दाखवण्यासाठी पायाचा कोणता एक्स-रे प्रोजेक्शन केला जातो?",
    options: [
      "(A) Dorso-plantar (AP)",
      "(B) Medial oblique",
      "(C) Lateral oblique",
      "(D) True lateral"
    ],
    options_mr: [
      "(A) डॉर्सो-प्लांटर AP",
      "(B) मेडिअल ऑब्लीक (Medial oblique - ३०° आत)",
      "(C) लॅटरल ऑब्लीक (Lateral oblique - ३०° बाहेर)",
      "(D) ट्रू लॅटरल"
    ],
    correct_answer: "(C) Lateral oblique",
    correct_answer_mr: "(C) लॅटरल ऑब्लीक (Lateral oblique - ३०° बाहेर)",
    explanation: "The lateral oblique foot demonstrates the interspaces between the first and second metatarsals and between the first and second cuneiforms.",
    explanation_mr: "फूटचा लॅटरल ऑब्लीक (Lateral oblique) व्ह्यू १ल्या व २ऱ्या मेटाटार्सलमधील फटी स्पष्टपणे दाखवतो, तर मेडिअल ऑब्लीक ३ऱ्या ते ५व्या मेटाटार्सल दाखवतो.",
    source_page: 348,
    difficulty: 'hard'
  },
  {
    id: 209,
    category: 'Radiographic Procedures: Upper Extremity',
    section: 'technical',
    question: "To effectively demonstrate an acromioclavicular (AC) joint separation, the examination MUST be performed in which position?",
    question_mr: "ॲक्रोमिओक्लॅव्हिक्युलर (AC) जॉइंटमधील सेपरेशन / निखळणे (Separation) स्पष्टपणे दिसण्यासाठी x-ray कोणत्या स्थितीतच (Position) केला गेला पाहिजे?",
    options: [
      "(A) Supine",
      "(B) Prone",
      "(C) Erect",
      "(D) Lateral decubitus"
    ],
    options_mr: [
      "(A) सुपाईन (झोपवून)",
      "(B) प्रोन",
      "(C) इरेक्ट / उभे राहून (Erect)",
      "(D) लॅटरल डिक्युबिटस"
    ],
    correct_answer: "(C) Erect",
    correct_answer_mr: "(C) इरेक्ट / उभे राहून (Erect)",
    explanation: "AP/PA projections of the AC joints demonstrate dislocation/separation when performed erect; they are often done with and without weights.",
    explanation_mr: "गुरुत्वाकर्षणामुळे AC जॉइंटमधील सेपरेशन उभे असतानाच (Erect) स्पष्ट दिसते, म्हणूनच हा x-ray नेहमी उभे राहून वजन धरून किंवा न धरता काढतात.",
    source_page: 352,
    difficulty: 'easy'
  },
  {
    id: 210,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Which process projects anteriorly just medial to the humeral head and is part of the scapula?",
    question_mr: "स्कॅप्युला (Scapula) हाडाचा कोणता भाग ह्युमेरसच्या हेडच्या आतल्या बाजूला पुढे आलेला (Anteriorly) असतो व सहज हाताला लागतो?",
    options: [
      "(A) Acromion process",
      "(B) Coracoid process",
      "(C) Olecranon process",
      "(D) Styloid process"
    ],
    options_mr: [
      "(A) ॲक्रोमियन प्रोसेस",
      "(B) कोराकॉईड प्रोसेस (Coracoid process)",
      "(C) ओलेक्रॅनन प्रोसेस",
      "(D) स्टायलाईड प्रोसेस"
    ],
    correct_answer: "(B) Coracoid process",
    correct_answer_mr: "(B) कोराकॉईड प्रोसेस (Coracoid process)",
    explanation: "Projecting anteriorly just medial to the humeral head is the palpable coracoid process of the scapula.",
    explanation_mr: "स्कॅप्युलाची कोराकॉईड प्रोसेस (Coracoid process) ही छातीच्या वरच्या भागात खांद्यासमोर हाताने स्पर्श करता येण्यासारखी चोचीसारखी रचना असते.",
    source_page: 356,
    difficulty: 'easy'
  },
  {
    id: 211,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "On the proximal humerus, the depression situated between the greater and lesser tubercles is called the:",
    question_mr: "ह्युमेरस हाडाच्या वरच्या भागात ग्रेटर आणि लेसर ट्युबरकलच्या मध्ये असलेल्या घडीला/खड्ड्याला काय म्हणतात?",
    options: [
      "(A) Radial groove",
      "(B) Olecranon fossa",
      "(C) Coronoid fossa",
      "(D) Bicipital or intertubercular groove"
    ],
    options_mr: [
      "(A) रेडिअल ग्रूव्ह",
      "(B) ओलेक्रॅनन फॉसा",
      "(C) कोरोनॉईड फॉसा",
      "(D) बायासिपिटल / इंटरट्युबरक्युलर ग्रूव्ह (Intertubercular groove)"
    ],
    correct_answer: "(D) Bicipital or intertubercular groove",
    correct_answer_mr: "(D) बायासिपिटल / इंटरट्युबरक्युलर ग्रूव्ह (Intertubercular groove)",
    explanation: "Between the greater tubercle (lateral) and lesser tubercle (medial) on the proximal humerus is the bicipital, or intertubercular, groove.",
    explanation_mr: "ग्रेटर व लेसर ट्युबरकलमधील खाच म्हणजे इंटरट्युबरक्युलर किंवा बायासिपिटल ग्रूव्ह (Bicipital groove), ज्यातून बायसेप्स स्नायूचा स्नायूरज्जू (Tendon) जातो.",
    source_page: 360,
    difficulty: 'medium'
  },
  {
    id: 212,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "What is the most common reaction to latex products among healthcare workers?",
    question_mr: "आरोग्य कर्मचाऱ्यांमध्ये लॅटेक्स (Latex - रबराचे हातमोजे इ.) वस्तूंमुळे होणारी सर्वात सामान्य प्रतिक्रिया (Reaction) कोणती आहे?",
    options: [
      "(A) Allergic contact dermatitis",
      "(B) Irritant contact dermatitis",
      "(C) Immediate hypersensitivity",
      "(D) Anaphylactic shock"
    ],
    options_mr: [
      "(A) ॲलर्जिक कॉन्टॅक्ट डर्मेटायटिस",
      "(B) इरिटंट कॉन्टॅक्ट डर्मेटायटिस (Irritant contact dermatitis)",
      "(C) इमिजिएट हायपरसेंसिटिव्हिटी",
      "(D) ॲनाफिलेक्टिक शॉक"
    ],
    correct_answer: "(B) Irritant contact dermatitis",
    correct_answer_mr: "(B) इरिटंट कॉन्टॅक्ट डर्मेटायटिस (Irritant contact dermatitis)",
    explanation: "The most common reaction to latex products is irritant contact dermatitis, characterized by irritated dry, itchy areas on the skin.",
    explanation_mr: "लॅटेक्समुळे होणारी सर्वात सामान्य समस्या म्हणजे त्वचा कोरडी पडणे व खाज सुटणे (Irritant contact dermatitis), जी खरी ॲलर्जी नसून त्वचेची जळजळ असते.",
    source_page: 364,
    difficulty: 'medium'
  },
  {
    id: 213,
    category: 'Patient Care & Safety',
    section: 'technical',
    question: "Why should diabetic patients scheduled for an Upper GI (UGI) series be given priority and scheduled early in the morning?",
    question_mr: "अप्पर जीआय (Upper GI series - पोटाचा x-ray) तपासणीसाठी येणाऱ्या मधुमेह (Diabetic) असलेल्या रुग्णांना सकाळी सर्वात आधी प्राधान्य का दिले जाते?",
    options: [
      "(A) To prevent the barium from hardening during the day",
      "(B) Because they must withhold morning insulin and food, risking a hypoglycemic reaction if delayed",
      "(C) So the radiologist can review the images before noon",
      "(D) Because they require a longer examination time"
    ],
    options_mr: [
      "(A) दिवसा बेरियम कडक होण्यापासून रोखण्यासाठी",
      "(B) त्यांना सकाळचे इन्सुलिन व अन्न न घेतल्याने उशीर झाल्यास हायपोग्लायसेमिया (Hypoglycemia - रक्तातील साखर कमी होणे) होण्याचा धोका असतो",
      "(C) रेडिओलॉजिस्टना दुपारी तपासणी सुलभ व्हावी म्हणून",
      "(D) त्यांना जास्त वेळ लागत असल्यामुळे"
    ],
    correct_answer: "(B) Because they must withhold morning insulin and food, risking a hypoglycemic reaction if delayed",
    correct_answer_mr: "(B) त्यांना सकाळचे इन्सुलिन व अन्न न घेतल्याने उशीर झाल्यास हायपोग्लायसेमिया (Hypoglycemia - रक्तातील साखर कमी होणे) होण्याचा धोका असतो",
    explanation: "Diabetic patients generally withhold morning insulin until after the NPO exam. If delayed, a reaction might occur; thus, they should be among the first scheduled.",
    explanation_mr: "उपाशीपोटी तपासणी असल्याने मधुमेही रुग्ण इन्सुलिन/गोळ्या घेऊ शकत नाहीत, त्यामुळे उशीर झाल्यास रक्तातील साखर धोकादायक पातळीवर घसरू शकते (Hypoglycemia).",
    source_page: 368,
    difficulty: 'medium'
  },
  {
    id: 214,
    category: 'Radiographic Procedures: Lower Extremity',
    section: 'technical',
    question: "In a lateral projection of the knee, why might a 5-degree cephalad angle of the central ray be recommended?",
    question_mr: "गुडघ्याच्या (Knee) लॅटरल x-ray मध्ये सेंट्रल रे ५ अंश डोक्याच्या दिशेने (5° cephalad) अँगल देण्याची शिफारस का केली जाते?",
    options: [
      "(A) To separate the tibia and fibula",
      "(B) To project the patella into the intercondylar fossa",
      "(C) To superimpose the magnified medial femoral condyle on the lateral condyle and open the joint space",
      "(D) To demonstrate the tibial tuberosity clearly"
    ],
    options_mr: [
      "(A) टिबिया आणि फिब्युला वेगळे करण्यासाठी",
      "(B) पटेला इंटरकॉन्डायलर फॉसामध्ये दाखवण्यासाठी",
      "(C) मोठ्या मेडिअल फीमोरल कॉन्डाईलला लॅटरल कॉन्डाईलवर ओव्हरलॅप करून सांध्याची जागा स्पष्ट उघडण्यासाठी",
      "(D) टिबियल ट्युबरॉसिटी स्पष्ट दाखवण्यासाठी"
    ],
    correct_answer: "(C) To superimpose the magnified medial femoral condyle on the lateral condyle and open the joint space",
    correct_answer_mr: "(C) मोठ्या मेडिअल फीमोरल कॉन्डाईलला लॅटरल कॉन्डाईलवर ओव्हरलॅप करून सांध्याची जागा स्पष्ट उघडण्यासाठी",
    explanation: "The CR can be angled 5 degrees cephalad to superimpose the magnified medial femoral condyle on the lateral condyle and permit better visualization of the joint space.",
    explanation_mr: "फीमरचा मेडिअल कॉन्डाईल लॅटरलपेक्षा थोडा खाली असल्यामुळे ५° सेफॅलॅड अँगल दिल्याने दोन्ही कॉन्डाईल एकमेकांवर तंतोतंत ओव्हरलॅप होऊन जॉइंट स्पेस उघडतो.",
    source_page: 372,
    difficulty: 'hard'
  },
  {
    id: 215,
    category: 'General Procedural Considerations',
    section: 'technical',
    question: "Which body habitus is similar to the asthenic build but has the stomach, intestines, and gallbladder situated somewhat higher in the abdomen?",
    question_mr: "कोणता बॉडी हॅबिटस (Body habitus) हा ॲस्थेनिक (Asthenic) सारखाच सडपातळ असतो परंतु त्यामध्ये पोट, आतडी व पित्ताशय थोडे वरच्या बाजूला असतात?",
    options: [
      "(A) Hypersthenic",
      "(B) Sthenic",
      "(C) Hyposthenic",
      "(D) Asthenic"
    ],
    options_mr: [
      "(A) हायपरस्थेनिक (जाड/रुंद)",
      "(B) स्थेनिक (सामान्य)",
      "(C) हायपोस्थेनिक (Hyposthenic)",
      "(D) ॲस्थेनिक (अत्यंत सडपातळ)"
    ],
    correct_answer: "(C) Hyposthenic",
    correct_answer_mr: "(C) हायपोस्थेनिक (Hyposthenic)",
    explanation: "The hyposthenic habitus is somewhat slighter and less robust, similar to the asthenic type, but the stomach, intestines, and gallbladder are situated higher in the abdomen.",
    explanation_mr: "हायपोस्थेनिक (Hyposthenic) शरीराची रचना ॲस्थेनिकपेक्षा थोडी मजबूत असते आणि अवयव थोडे वरच्या स्थानावर असतात.",
    source_page: 376,
    difficulty: 'medium'
  },
  {
    id: 216,
    category: 'Infection Control & Safety',
    section: 'technical',
    question: "Burn patients, transplant recipients, and patients with leukemia are typically placed under which type of isolation?",
    question_mr: "भाजलेले रुग्ण (Burn patients), अवयव प्रत्यारोपण झालेले आणि ल्युकेमिया (रक्ताचा कर्करोग) असलेले रुग्ण यांना कोणत्या प्रकारच्या आयसोलेशनमध्ये (Isolation) ठेवले जाते?",
    options: [
      "(A) Airborne isolation",
      "(B) Contact isolation",
      "(C) Droplet isolation",
      "(D) Protective or reverse isolation"
    ],
    options_mr: [
      "(A) एअरबॉर्न आयसोलेशन",
      "(B) कॉन्टॅक्ट आयसोलेशन",
      "(C) ड्रॉपलेट आयसोलेशन",
      "(D) प्रोटेक्टिव्ह / रिव्हर्स आयसोलेशन (Protective or Reverse isolation)"
    ],
    correct_answer: "(D) Protective or reverse isolation",
    correct_answer_mr: "(D) प्रोटेक्टिव्ह / रिव्हर्स आयसोलेशन (Protective or Reverse isolation)",
    explanation: "Patients whose immune systems are compromised (e.g., transplant recipients, leukemia) or who have lost skin protection (burns) are placed in protective, or reverse, isolation to keep them from becoming infected.",
    explanation_mr: "कमजोर रोगप्रतिकारशक्ती असलेल्या रुग्णांना बाहेरील जंतूंचा संसर्ग होऊ नये म्हणून त्यांना प्रोटेक्टिव्ह किंवा रिव्हर्स आयसोलेशनमध्ये सुरक्षित ठेवले जाते.",
    source_page: 380,
    difficulty: 'easy'
  },
  {
    id: 217,
    category: 'Patient Care & Safety',
    section: 'technical',
    question: "During a procedure, a patient develops bluish lips, mucous membranes, and nail beds. This condition is termed ________ and requires immediate attention.",
    question_mr: "तपासणी दरम्यान रुग्णाचे ओठ, तोंडातील त्वचा आणि नखे निळसर (Bluish) पडू लागल्यास या स्थितीला काय म्हणतात आणि त्याला त्वरित काय दिले पाहिजे?",
    options: [
      "(A) Jaundice",
      "(B) Cyanosis",
      "(C) Diaphoresis",
      "(D) Pallor"
    ],
    options_mr: [
      "(A) जॉण्डिस (कावीळ)",
      "(B) सायनोसिस (Cyanosis - ऑक्सिजनची कमतरता)",
      "(C) डायफोरेसिस (घाम येणे)",
      "(D) पॅलोर (पांढुरके पडणे)"
    ],
    correct_answer: "(B) Cyanosis",
    correct_answer_mr: "(B) सायनोसिस (Cyanosis - ऑक्सिजनची कमतरता)",
    explanation: "A patient who becomes cyanotic (bluish lips, mucous membranes, or nail beds) needs oxygen and requires immediate medical attention.",
    explanation_mr: "रक्तातील ऑक्सिजनची पातळी कमी झाल्यामुळे शरीर निळसर पडण्याला सायनोसिस (Cyanosis) म्हणतात, ज्यासाठी त्वरित ऑक्सिजन देणे गरजेचे असते.",
    source_page: 384,
    difficulty: 'easy'
  },
  {
    id: 218,
    category: 'Legal & Ethical Aspects',
    section: 'technical',
    question: "The legal doctrine 'Respondeat superior' means:",
    question_mr: "'रिस्पॉन्डिएत सुपेरिअर' (Respondeat superior) या कायदेशीर तत्त्वाचा अर्थ काय होतो?",
    options: [
      "(A) The thing speaks for itself",
      "(B) Let the master answer",
      "(C) First do no harm",
      "(D) Beyond a reasonable doubt"
    ],
    options_mr: [
      "(A) द थिंग स्पीक्स फॉर इटसेल्फ (Res ipsa loquitur)",
      "(B) लेट द मास्टर आन्सर (Let the master answer - मालक जबाबदार आहे)",
      "(C) आधी दुखापत करू नका",
      "(D) शंकातीत पुरावा"
    ],
    correct_answer: "(B) Let the master answer",
    correct_answer_mr: "(B) लेट द मास्टर आन्सर (Let the master answer - मालक जबाबदार आहे)",
    explanation: "Respondeat superior translates to 'let the master answer', meaning the employer can be held liable for the wrongful acts of the employee during employed activities.",
    explanation_mr: "'Respondeat superior' म्हणजे कर्मचाऱ्याने कामाच्या दरम्यान केलेल्या चुकीला किंवा चुकीच्या उपचारांना त्याचा मालक/हॉस्पिटल जबाबदार असते.",
    source_page: 388,
    difficulty: 'medium'
  },
  {
    id: 219,
    category: 'Radiographic Procedures: GI Tract',
    section: 'technical',
    question: "Following a barium enema, barium preparations in the large bowel can become thickened as a result of fluid absorption, causing severe constipation or impaction. This process is called:",
    question_mr: "बेरियम एनीमा (Barium enema) नंतर, मोठ्या आतड्यातून पाणी शोषले गेल्यामुळे बेरियम घट्ट होऊन शौचाचा कडक खडा (Impaction) होतो, या प्रक्रियेला काय म्हणतात?",
    options: [
      "(A) Enteroclysis",
      "(B) Extravasation",
      "(C) Inspissation",
      "(D) Invagination"
    ],
    options_mr: [
      "(A) एंट्रोक्लिसिस",
      "(B) एक्स्ट्राव्हॅसेशन",
      "(C) इन्स्पिसेशन (Inspissation)",
      "(D) इनव्हॅजिनेशन"
    ],
    correct_answer: "(C) Inspissation",
    correct_answer_mr: "(C) इन्स्पिसेशन (Inspissation)",
    explanation: "Barium preparations in the large bowel become thickened as a result of absorption of their fluid content, a process called inspissation.",
    explanation_mr: "आतड्यात बेरियममधील पाणी शोषले जाऊन ते सुकण्याच्या व घट्ट होण्याच्या क्रियेला इन्स्पिसेशन (Inspissation) म्हणतात, म्हणूनच रुग्णाला भरपूर पाणी प्यायला सांगितले जाते.",
    source_page: 392,
    difficulty: 'hard'
  },
  {
    id: 220,
    category: 'Radiographic Procedures: GI Tract',
    section: 'technical',
    question: "If a visceral perforation is suspected in the GI tract, what type of contrast medium is usually administered instead of barium sulfate?",
    question_mr: "अन्ननलिका किंवा आतड्याला छिद्र (Perforation) पडल्याची शंका असल्यास, बेरियम सल्फेटऐवजी कोणते कॉन्ट्रास्ट मिडिया वापरले जाते?",
    options: [
      "(A) Oil-based iodinated contrast",
      "(B) Water-soluble (absorbable) iodinated contrast",
      "(C) Carbon dioxide only",
      "(D) Room air"
    ],
    options_mr: [
      "(A) ऑईल-बेस्ड आयोडिनेटेड",
      "(B) वॉटर-सोल्युबल / पाण्यात विरघळणारे आयोडिनेटेड कॉन्ट्रास्ट (Water-soluble contrast - उदा. Gastrografin)",
      "(C) फक्त कार्बन डायऑक्साईड",
      "(D) हवा"
    ],
    correct_answer: "(B) Water-soluble (absorbable) iodinated contrast",
    correct_answer_mr: "(B) वॉटर-सोल्युबल / पाण्यात विरघळणारे आयोडिनेटेड कॉन्ट्रास्ट (Water-soluble contrast - उदा. Gastrografin)",
    explanation: "A water-soluble (absorbable) iodinated contrast medium is generally used instead of barium in these cases to prevent peritonitis if it escapes into the peritoneal cavity.",
    explanation_mr: "बेरियम पोकळीत सांडल्यास तीव्र पेरिटोनायटिस (Peritonitis) संसर्ग होतो, म्हणून छिद्र असल्यास पाण्यात विरघळणारे व शरीरात शोषले जाणारे वॉटर-सोल्युबल कॉन्ट्रास्ट (उदा. गॅस्ट्रोग्राफिन) वापरतात.",
    source_page: 396,
    difficulty: 'easy'
  },
  {
    id: 221,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The interphalangeal joints of the fingers and toes are classified as what type of synovial joint?",
    question_mr: "हाताच्या आणि पायाच्या बोटांमधील इंटरफॅलेंजिअल सांधे (IP joints) हे कोणत्या प्रकारचे सायनोव्हिअल जॉइंट असतात?",
    options: [
      "(A) Pivot (trochoid)",
      "(B) Hinge (ginglymus)",
      "(C) Condyloid (ellipsoid)",
      "(D) Gliding (plane)"
    ],
    options_mr: [
      "(A) पिव्हॉट सांधा",
      "(B) हिंज सांधा / बिजागरीचा सांधा (Hinge / Ginglymus joint)",
      "(C) कॉन्डीलॉइड सांधा",
      "(D) ग्लायडिंग सांधा"
    ],
    correct_answer: "(B) Hinge (ginglymus)",
    correct_answer_mr: "(B) हिंज सांधा / बिजागरीचा सांधा (Hinge / Ginglymus joint)",
    explanation: "The interphalangeal joints are hinge (ginglymus) joints, permitting flexion and extension motion.",
    explanation_mr: "बोटांचे पेर (IP joints) हे दाराच्या बिजागरीसारखे (Hinge joint) फक्त दुमडणे आणि सरळ करणे (Flexion-Extension) एवढीच हालचाल करू शकतात.",
    source_page: 400,
    difficulty: 'easy'
  },
  {
    id: 222,
    category: 'Patient Care: Vital Signs',
    section: 'technical',
    question: "Of the five most readily palpated pulse points, which one is located in front of the upper ear?",
    question_mr: "शरीरावर हाताने नाडी (Pulse) तपासण्याच्या प्रमुख ५ ठिकाणांपैकी, कानाच्या वरच्या बाजूला समोर असणारी नाडी कोणती?",
    options: [
      "(A) Radial",
      "(B) Carotid",
      "(C) Temporal",
      "(D) Popliteal"
    ],
    options_mr: [
      "(A) रेडिअल (मनगटातील)",
      "(B) कॅरॉटिड (मानेतील)",
      "(C) टेम्पोरल नाडी (Temporal pulse - कनपटीतील)",
      "(D) पॉप्लिटिअल (गुडघ्यामागची)"
    ],
    correct_answer: "(C) Temporal",
    correct_answer_mr: "(C) टेम्पोरल नाडी (Temporal pulse - कनपटीतील)",
    explanation: "The temporal artery is located in front of the upper ear and is one of the readily palpated pulse points.",
    explanation_mr: "कनपटीवर कानाच्या समोरच्या भागात टेम्पोरल धमनी (Temporal artery) सहज हाताला जाणवते.",
    source_page: 404,
    difficulty: 'easy'
  },
  {
    id: 223,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "A medication categorized as an Antipyretic is primarily used to:",
    question_mr: "अँटीपायरेटिक (Antipyretic) प्रकारची औषधे प्रामुख्याने कशासाठी वापरली जातात?",
    options: [
      "(A) Relieve pain",
      "(B) Reduce fever",
      "(C) Suppress coughing",
      "(D) Stimulate urine production"
    ],
    options_mr: [
      "(A) वेदना कमी करण्यासाठी",
      "(B) ताप कमी करण्यासाठी (Reduce fever)",
      "(C) खोकला थांबवण्यासाठी",
      "(D) लघवीचे प्रमाण वाढवण्यासाठी"
    ],
    correct_answer: "(B) Reduce fever",
    correct_answer_mr: "(B) ताप कमी करण्यासाठी (Reduce fever)",
    explanation: "An antipyretic (e.g., Aspirin, acetaminophen) is used to reduce fever.",
    explanation_mr: "अँटीपायरेटिक औषधे (उदा. पॅरासिटामॉल, ॲस्पिरिन) शरीराचा वाढलेला ताप (Fever) कमी करण्यासाठी वापरली जातात.",
    source_page: 408,
    difficulty: 'easy'
  },
  {
    id: 224,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "Which type of medication depresses the parasympathetic nervous system, with examples including Atropine and scopolamine?",
    question_mr: "कोणत्या प्रकारची औषधे पॅरासिम्पेथेटिक मज्जासंस्थेचे (Parasympathetic nervous system) कार्य मंदावतात, ज्यामध्ये ॲट्रोपिन (Atropine) आणि स्कोपोलॅमाईनची उदाहरणे समाविष्ट आहेत?",
    options: [
      "(A) Adrenergic",
      "(B) Anticholinergic",
      "(C) Antihistamine",
      "(D) Emetic"
    ],
    options_mr: [
      "(A) ॲड्रिनेर्जिक",
      "(B) अँटीकॉलीनर्जिक (Anticholinergic)",
      "(C) अँटीहिस्टामाईन",
      "(D) एमेटिक"
    ],
    correct_answer: "(B) Anticholinergic",
    correct_answer_mr: "(B) अँटीकॉलीनर्जिक (Anticholinergic)",
    explanation: "Anticholinergics (such as Atropine, scopolamine, and belladonna) depress the parasympathetic system.",
    explanation_mr: "अँटीकॉलीनर्जिक औषधे (उदा. ॲट्रोपिन, स्कोपोलॅमाईन) ही पॅरासिम्पेथेटिक मज्जासंस्थेच्या उत्तेजनाला रोखतात आणि लाळ व स्त्राव कमी करतात.",
    source_page: 412,
    difficulty: 'medium'
  },
  {
    id: 225,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "Furosemide (Lasix) is classified as which type of medication?",
    question_mr: "फ्युरोसेमाईड / लॅसिक्स (Furosemide / Lasix) हे कोणत्या प्रकारचे औषध मानले जाते?",
    options: [
      "(A) Diuretic",
      "(B) Cathartic",
      "(C) Anticoagulant",
      "(D) Anticonvulsant"
    ],
    options_mr: [
      "(A) डाययुरेटिक (Diuretic - लघवी वाढवणारे)",
      "(B) कॅथार्टिक",
      "(C) अँटीकोग्युुलंट",
      "(D) अँटीकन्व्हल्संट"
    ],
    correct_answer: "(A) Diuretic",
    correct_answer_mr: "(A) डाययुरेटिक (Diuretic - लघवी वाढवणारे)",
    explanation: "Furosemide (Lasix) is a diuretic, which stimulates urine production.",
    explanation_mr: "फ्युरोसेमाईड (Lasix) हे डाययुरेटिक (Diuretic) औषध आहे जे मूत्रपिंडाद्वारे लघवी निर्मिती वाढवून शरीरातील जादा पाणी बाहेर काढते.",
    source_page: 416,
    difficulty: 'easy'
  },
  {
    id: 226,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "Which of the following drugs is a cathartic used as a laxative to prepare the colon for diagnostic tests?",
    question_mr: "डायग्नोस्टिक चाचण्यांसाठी मोठे आतडे (Colon) स्वच्छ करण्यासाठी लॅक्सेटिव्ह / जुलाबाचे औषध (Cathartic) म्हणून खालीलपैकी कोणते औषध वापरले जाते?",
    options: [
      "(A) Carbamazepine (Tegretol)",
      "(B) Phenytoin (Dilantin)",
      "(C) Bisacodyl (Dulcolax)",
      "(D) Diazepam (Valium)"
    ],
    options_mr: [
      "(A) कार्बामाझेपाईन",
      "(B) फेनिटॉईन",
      "(C) बिसाकोडील / डुलकोलॅक्स (Bisacodyl / Dulcolax)",
      "(D) डायझेपाम"
    ],
    correct_answer: "(C) Bisacodyl (Dulcolax)",
    correct_answer_mr: "(C) बिसाकोडील / डुलकोलॅक्स (Bisacodyl / Dulcolax)",
    explanation: "Bisacodyl (Dulcolax) and castor oil are cathartics (laxatives) used to relieve constipation and prepare the colon for diagnostic tests.",
    explanation_mr: "बिसाकोडील (Dulcolax) आणि एरंडेल तेल (Castor oil) ही कॅथार्टिक औषधे आहेत जी बेरियम एनीमा किंवा कोलोनोस्कोपीपूर्वी पेट स्वच्छ करण्यासाठी दिली जातात.",
    source_page: 420,
    difficulty: 'easy'
  },
  {
    id: 227,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "Which of the following is classified as an emetic?",
    question_mr: "खालीलपैकी कोणते औषध एमेटिक (Emetic - उलटी घडवून आणणारे) म्हणून वर्गीकृत केले जाते?",
    options: [
      "(A) Ipecac",
      "(B) Insulin",
      "(C) Digitalis",
      "(D) Heparin"
    ],
    options_mr: [
      "(A) इपेकॅक सिरप (Syrup of Ipecac)",
      "(B) इन्सुलिन",
      "(C) डिजिटलिस",
      "(D) हेपॅरिन"
    ],
    correct_answer: "(A) Ipecac",
    correct_answer_mr: "(A) इपेकॅक सिरप (Syrup of Ipecac)",
    explanation: "Ipecac is an emetic, which is a medication that stimulates vomiting.",
    explanation_mr: "इपेकॅक (Ipecac) हे एमेटिक औषध आहे, जे विषबाधा किंवा अवांछित पदार्थ पोटात गेल्यावर उलटी (Vomiting) घडवून आणण्यासाठी दिले जाते.",
    source_page: 424,
    difficulty: 'medium'
  },
  {
    id: 228,
    category: 'Patient Care: Pharmacology',
    section: 'technical',
    question: "Barbiturates such as Phenobarbital sodium (Nembutal) primarily function to:",
    question_mr: "फेनोबार्बिटॉल सोडियम सारखी बार्बिट्युरेट्स (Barbiturates) औषधे प्रामुख्याने काय कार्य करतात?",
    options: [
      "(A) Increase cardiac output",
      "(B) Depress the CNS, decrease BP and respiration, and induce sleep",
      "(C) Stimulate the sympathetic nervous system",
      "(D) Lower blood glucose levels"
    ],
    options_mr: [
      "(A) हृदयाची गती वाढवणे",
      "(B) मध्यवर्ती मज्जासंस्था (CNS) मंदावणे, रक्तदाब व श्वासोच्छ्वास कमी करणे आणि झोप आणणे",
      "(C) सिम्पेथेटिक मज्जासंस्था उत्तेजित करणे",
      "(D) रक्तातील साखर कमी करणे"
    ],
    correct_answer: "(B) Depress the CNS, decrease BP and respiration, and induce sleep",
    correct_answer_mr: "(B) मध्यवर्ती मज्जासंस्था (CNS) मंदावणे, रक्तदाब व श्वासोच्छ्वास कमी करणे आणि झोप आणणे",
    explanation: "Barbiturates depress the central nervous system (CNS), decrease blood pressure and respiration, and induce sleep.",
    explanation_mr: "बार्बिट्युरेट्स (Barbiturates) हे सेडेटिव्ह / हिप्नोटिक मानले जातात, जे मध्यवर्ती मज्जासंस्थेचे (CNS) कार्य मंदावून शांतता व झोप आणतात.",
    source_page: 428,
    difficulty: 'medium'
  },
  {
    id: 229,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "In the human hand, which finger consists of only two phalanges (proximal and distal)?",
    question_mr: "मानवी हातामध्ये कोणत्या बोटात फक्त दोनच फॅलॅंजेस / हाडे (Proximal आणि Distal) असतात?",
    options: [
      "(A) The first finger (thumb)",
      "(B) The second finger (index)",
      "(C) The fifth finger (pinky)",
      "(D) All fingers have three phalanges"
    ],
    options_mr: [
      "(A) पहिले बोट / अंगठा (Thumb)",
      "(B) दुसरे बोट (Index finger)",
      "(C) पाचवे बोट (Little finger)",
      "(D) सर्व बोटांमध्ये तीन हाडे असतात"
    ],
    correct_answer: "(A) The first finger (thumb)",
    correct_answer_mr: "(A) पहिले बोट / अंगठा (Thumb)",
    explanation: "The second through fifth fingers have three phalanges each, whereas the first finger or thumb has only two phalanges (proximal and distal).",
    explanation_mr: "दुसऱ्या ते पाचव्या बोटात प्रत्येकी ३ फॅलॅंजेस (Proximal, Middle, Distal) असतात, तर अंगठ्यात (Thumb) फक्त २ फॅलॅंजेस असतात.",
    source_page: 432,
    difficulty: 'easy'
  },
  {
    id: 230,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "In the proximal row of carpal bones, which bone is located the most medially?",
    question_mr: "कार्पल हाडांच्या (Carpal bones) प्रॉकझिमल ओळीत (Proximal row) सर्वात आतल्या बाजूला (Most medial) कोणते हाड असते?",
    options: [
      "(A) Scaphoid",
      "(B) Lunate",
      "(C) Triquetrum",
      "(D) Pisiform"
    ],
    options_mr: [
      "(A) स्कॅफॉईड (Scaphoid)",
      "(B) ल्युनेट (Lunate)",
      "(C) ट्रायक्वेट्रम (Triquetrum)",
      "(D) पिसिफॉर्म (Pisiform)"
    ],
    correct_answer: "(D) Pisiform",
    correct_answer_mr: "(D) पिसिफॉर्म (Pisiform)",
    explanation: "The proximal row consists of, from lateral to medial, the scaphoid, the lunate, the triquetrum, and the pisiform.",
    explanation_mr: "मनगटाच्या प्रॉकझिमल रांगेतील हाडे बाहेरून आत (Lateral to Medial): Scaphoid, Lunate, Triquetrum आणि सर्वात शेवटी Medially पिसिफॉर्म (Pisiform) असते.",
    source_page: 436,
    difficulty: 'medium'
  },
  {
    id: 231,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "In the distal row of carpal bones, which bone is located the most laterally?",
    question_mr: "कार्पल हाडांच्या डिस्टल ओळीत (Distal row) सर्वात बाहेरच्या बाजूला (Most lateral) कोणते हाड असते?",
    options: [
      "(A) Trapezium",
      "(B) Trapezoid",
      "(C) Capitate",
      "(D) Hamate"
    ],
    options_mr: [
      "(A) ट्रॅपेझियम (Trapezium)",
      "(B) ट्रॅपेझॉईड (Trapezoid)",
      "(C) कॅपिटेट (Capitate)",
      "(D) हॅमेट (Hamate)"
    ],
    correct_answer: "(A) Trapezium",
    correct_answer_mr: "(A) ट्रॅपेझियम (Trapezium)",
    explanation: "The distal row consists of, from lateral to medial, the trapezium, trapezoid, capitate, and hamate.",
    explanation_mr: "कार्पलच्या डिस्टल ओळीमध्ये बाहेरून आत (Lateral to Medial): Trapezium (अंगठ्याशी जोडलेले), Trapezoid, Capitate व Hamate असतात.",
    source_page: 440,
    difficulty: 'medium'
  },
  {
    id: 232,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The olecranon process and coronoid process are found on the proximal end of which bone?",
    question_mr: "ओलेक्रॅनन प्रोसेस (Olecranon process) आणि कोरोनॉईड प्रोसेस (Coronoid process) ही दोन उंचवटे कोणत्या हाडाच्या वरच्या (Proximal) टोकावर असतात?",
    options: [
      "(A) Humerus",
      "(B) Radius",
      "(C) Ulna",
      "(D) Scapula"
    ],
    options_mr: [
      "(A) ह्युमेरस",
      "(B) रेडियस",
      "(C) अल्ला (Ulna)",
      "(D) स्कॅप्युला"
    ],
    correct_answer: "(C) Ulna",
    correct_answer_mr: "(C) अल्ला (Ulna)",
    explanation: "At its proximal end, the ulna presents the olecranon process (posteriorly) and coronoid process (anteriorly).",
    explanation_mr: "अल्ला (Ulna) हाडाच्या प्रॉकझिमल भागावर मागे ओलेक्रॅनन प्रोसेस (ज्यामुळे कोपर बनते) आणि पुढे कोरोनॉईड प्रोसेस असते.",
    source_page: 444,
    difficulty: 'easy'
  },
  {
    id: 233,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The raised, smooth, rounded surface on the lateral aspect of the distal humerus that articulates with the radial head is called the:",
    question_mr: "ह्युमेरस हाडाच्या खालच्या भागावर (Distal humerus) बाहेरच्या बाजूला असलेला गुळगुळीत, गोल भाग जो रेडियसच्या हेडशी जोडून सांधा बनवतो, त्याला काय म्हणतात?",
    options: [
      "(A) Trochlea",
      "(B) Capitulum",
      "(C) Lateral epicondyle",
      "(D) Olecranon fossa"
    ],
    options_mr: [
      "(A) ट्रॉकलिया (Trochlea)",
      "(B) कॅपिटुलम (Capitulum)",
      "(C) लॅटरल एपिकॉन्डाईल",
      "(D) ओलेक्रॅनन फॉसा"
    ],
    correct_answer: "(B) Capitulum",
    correct_answer_mr: "(B) कॅपिटुलम (Capitulum)",
    explanation: "The capitulum is on the lateral aspect of the distal humerus and articulates with the superior surface of the radial head.",
    explanation_mr: "डिस्टल ह्युमेरसवरील कॅपिटुलम (Capitulum) हे रेडिअल हेडशी जोडले जाते, तर ट्रॉकलिया (Trochlea) हे अल्लाच्या ट्रॉकलिअर नॉचशी जोडले जाते.",
    source_page: 448,
    difficulty: 'medium'
  },
  {
    id: 234,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The scapular spine divides the posterior surface of the scapula into the:",
    question_mr: "स्कॅप्युलाची स्पाईन (Scapular spine - पाठीवरील हाडाचा उंचवटा) स्कॅप्युलाच्या मागील भागाचे कोणत्या दोन खड्ड्यांमध्ये (Fossa) विभाजन करते?",
    options: [
      "(A) Supraspinous fossa and infraspinous fossa",
      "(B) Glenoid fossa and subscapular fossa",
      "(C) Coracoid process and acromion process",
      "(D) Medial border and lateral border"
    ],
    options_mr: [
      "(A) सुप्र्रास्पायनस फॉसा व इन्फ्रास्पायनस फॉसा (Supraspinous & Infraspinous fossa)",
      "(B) ग्लेनॉईड फॉसा व सबस्कॅप्युलर फॉसा",
      "(C) कोराकॉईड व ॲक्रोमियन प्रोसेस",
      "(D) मेडिअल आणि लॅटरल बॉर्डर"
    ],
    correct_answer: "(A) Supraspinous fossa and infraspinous fossa",
    correct_answer_mr: "(A) सुप्र्रास्पायनस फॉसा व इन्फ्रास्पायनस फॉसा (Supraspinous & Infraspinous fossa)",
    explanation: "The scapular spine divides the posterior surface into a supraspinatus (supraspinous) fossa and infraspinatus (infraspinous) fossa.",
    explanation_mr: "स्कॅप्युला स्पाईनच्या वरच्या खड्ड्याला सुप्र्रास्पायनस फॉसा आणि खालच्या मोठ्या खड्ड्याला इन्फ्रास्पायनस फॉसा म्हणतात.",
    source_page: 452,
    difficulty: 'easy'
  },
  {
    id: 235,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The lateral extension of the scapular spine is known as the:",
    question_mr: "स्कॅप्युलाच्या स्पाईनचा बाहेरच्या बाजूने (Lateral) पसरलेला शेवटचा भाग काय म्हणून ओळखला जातो?",
    options: [
      "(A) Coracoid process",
      "(B) Acromion process",
      "(C) Glenoid cavity",
      "(D) Inferior angle"
    ],
    options_mr: [
      "(A) कोराकॉईड प्रोसेस",
      "(B) ॲक्रोमियन प्रोसेस (Acromion process)",
      "(C) ग्लेनॉईड कॅव्हिटी",
      "(D) इन्फिरिअर अँगल"
    ],
    correct_answer: "(B) Acromion process",
    correct_answer_mr: "(B) ॲक्रोमियन प्रोसेस (Acromion process)",
    explanation: "The acromion process is the lateral extension of the scapular spine.",
    explanation_mr: "स्कॅप्युला स्पाईनचा शेवटचा फुगीर भाग म्हणजे ॲक्रोमियन प्रोसेस (Acromion process) होय, जी कॉलर बोनशी (Clavicle) जोडली जाते.",
    source_page: 456,
    difficulty: 'easy'
  },
  {
    id: 236,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The medial malleolus is a prominence located on the distal extremity of which bone?",
    question_mr: "मेडिअल मॅलिओलस (Medial malleolus - घोट्याचा आतील उंचवटा) हा कोणत्या हाडाच्या खालच्या टोकावर (Distal end) असतो?",
    options: [
      "(A) Femur",
      "(B) Fibula",
      "(C) Tibia",
      "(D) Talus"
    ],
    options_mr: [
      "(A) फीमर",
      "(B) फिब्युला",
      "(C) टिबिया (Tibia)",
      "(D) टॅलस"
    ],
    correct_answer: "(C) Tibia",
    correct_answer_mr: "(C) टिबिया (Tibia)",
    explanation: "The distal extremity of the tibia has a prominence called the medial malleolus, which participates in the formation of the ankle mortise.",
    explanation_mr: "टिबिया हाडाच्या खालच्या टोकावरील आतील बाजूचा उंचवटा म्हणजे मेडिअल मॅलिओलस, तर फिब्युलावर लॅटरल मॅलिओलस असतो.",
    source_page: 460,
    difficulty: 'easy'
  },
  {
    id: 237,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "Which bone is described as the slender, lateral, non-weight-bearing bone of the lower leg?",
    question_mr: "पायाच्या खालच्या भागातील बारीक, बाहेरच्या बाजूला असणारे आणि वजन न पेलणारे (Non-weight-bearing) हाड कोणते?",
    options: [
      "(A) Tibia",
      "(B) Fibula",
      "(C) Calcaneus",
      "(D) Patella"
    ],
    options_mr: [
      "(A) टिबिया",
      "(B) फिब्युला (Fibula)",
      "(C) कॅल्केनियस",
      "(D) पटेला"
    ],
    correct_answer: "(B) Fibula",
    correct_answer_mr: "(B) फिब्युला (Fibula)",
    explanation: "The fibula is the slender, lateral non-weight-bearing bone forming the lower leg.",
    explanation_mr: "पिंडरीतील फिब्युला (Fibula) हे बारीक हाड शरीराचे वजन पेलत नाही; टिबिया (Tibia) हे मुख्य वजन पेलणारे हाड असते.",
    source_page: 464,
    difficulty: 'easy'
  },
  {
    id: 238,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "On the distal posterior surface of the femur, the depression that houses the popliteal artery is known as the:",
    question_mr: "फीमर हाडाच्या खालच्या मागील पृष्ठभागावर (Distal posterior surface) असलेला सपाट खड्डा ज्यातून पॉप्लिटिअल आर्टरी (Popliteal artery) जाते, त्याला काय म्हणतात?",
    options: [
      "(A) Intercondyloid fossa",
      "(B) Patellar surface",
      "(C) Popliteal surface",
      "(D) Fovea capitis"
    ],
    options_mr: [
      "(A) इंटरकॉन्डायलाईड फॉसा",
      "(B) पटेला सरफेस",
      "(C) पॉप्लिटिअल सरफेस (Popliteal surface)",
      "(D) फोव्हिया कॅपिटिस"
    ],
    correct_answer: "(C) Popliteal surface",
    correct_answer_mr: "(C) पॉप्लिटिअल सरफेस (Popliteal surface)",
    explanation: "The distal posterior surface of the femur presents the popliteal surface—a depression that houses the popliteal artery.",
    explanation_mr: "फीमरच्या मागील त्रिकोणी सपाट भागाला पॉप्लिटिअल सरफेस म्हणतात, ज्यातून गुडघ्यामागची महत्त्वाची रक्तवाहिनी (Popliteal artery) जाते.",
    source_page: 468,
    difficulty: 'medium'
  },
  {
    id: 239,
    category: 'Imaging Procedures: Anatomy',
    section: 'technical',
    question: "The broad, flat portion of each ilium is called the:",
    question_mr: "इलियाक (Ilium) हाडाच्या रुंद, सपाट भागाला काय म्हणतात?",
    options: [
      "(A) Ischial tuberosity",
      "(B) Acetabulum",
      "(C) Ala, or wing",
      "(D) Pubic symphysis"
    ],
    options_mr: [
      "(A) इस्किएल ट्युबरॉसिटी",
      "(B) ॲसिटॅबुलम",
      "(C) अला किंवा विंग (Ala / Wing of ilium)",
      "(D) प्युबिक सिम्फायसिस"
    ],
    correct_answer: "(C) Ala, or wing",
    correct_answer_mr: "(C) अला किंवा विंग (Ala / Wing of ilium)",
    explanation: "The broad, flat portion of each ilium is the ala, or wing.",
    explanation_mr: "कमरेच्या इलियम हाडाच्या पंखासारख्या पसरट भागाला अला (Ala) किंवा विंग (Wing) म्हणतात.",
    source_page: 472,
    difficulty: 'easy'
  },
  {
    id: 240,
    category: 'Radiographic Procedures: Upper Extremity',
    section: 'technical',
    question: "For a lateral projection of the hand in extension, which surface of the wrist should be placed down against the IR?",
    question_mr: "हाताच्या (Hand) सरळ स्थितीत (Extension) लॅटरल x-ray करताना, मनगटाचा (Wrist) कोणता पृष्ठभाग कॅसेटवर (IR) टेकला पाहिजे?",
    options: [
      "(A) Palmar surface",
      "(B) Dorsal surface",
      "(C) Radial surface",
      "(D) Ulnar surface"
    ],
    options_mr: [
      "(A) तळहात (Palmar)",
      "(B) पाठीचा भाग (Dorsal)",
      "(C) रेडिअल भाग (अंगठ्याकडील)",
      "(D) अलनार भाग / करंगळीकडील बाजू (Ulnar surface)"
    ],
    correct_answer: "(D) Ulnar surface",
    correct_answer_mr: "(D) अलनार भाग / करंगळीकडील बाजू (Ulnar surface)",
    explanation: "For a lateral hand in extension, the elbow is flexed 90 degrees, the fingers extended, and the wrist is lateral with the ulnar surface down.",
    explanation_mr: "लॅटरल हँड x-ray मध्ये कोपर ९० अंश वाकवून करंगळीकडील (Ulnar side) भाग कॅसेटवर खाली ठेवला जातो.",
    source_page: 476,
    difficulty: 'easy'
  },
  {
    id: 241,
    category: 'Radiographic Procedures: Upper Extremity',
    section: 'technical',
    question: "The AP semi-supination oblique projection of the wrist is particularly useful for demonstrating the:",
    question_mr: "मनगटाचा AP सेमी-सुपायनेशन ऑब्लीक (AP semi-supination oblique) projection प्रामुख्याने मनगटातील कोणती हाडे स्पष्ट पाहण्यासाठी उपयुक्त असतो?",
    options: [
      "(A) Scaphoid and trapezium",
      "(B) Pisiform, triquetrum, and hamate",
      "(C) First carpometacarpal joint",
      "(D) Distal radioulnar joint"
    ],
    options_mr: [
      "(A) स्कॅफॉईड व ट्रॅपेझियम",
      "(B) पिसिफॉर्म, ट्रायक्वेट्रम आणि हॅमेट (Pisiform, triquetrum & hamate)",
      "(C) पहिला कार्पोमेटाकार्पल जॉइंट",
      "(D) डिस्टल रेडिओ-अलनार जॉइंट"
    ],
    correct_answer: "(B) Pisiform, triquetrum, and hamate",
    correct_answer_mr: "(B) पिसिफॉर्म, ट्रायक्वेट्रम आणि हॅमेट (Pisiform, triquetrum & hamate)",
    explanation: "The AP semi-supination oblique (ulnar surface down, arm extended 45 degrees to IR) is useful for visualizing medial carpals like the pisiform, triquetrum, and hamate.",
    explanation_mr: "AP सेमी-सुपायनेशन व्ह्यूमुळे मनगटाच्या आतील (Medial) बाजूची पिसिफॉर्म, ट्रायक्वेट्रम व हॅमेट ही हाडे इतर हाडांवर ओव्हरलॅप न होता स्वतंत्र दिसतात.",
    source_page: 480,
    difficulty: 'hard'
  },
  {
    id: 242,
    category: 'Radiographic Procedures: Upper Extremity',
    section: 'technical',
    question: "If a patient presents with an elbow in partial flexion that cannot be extended, how should the AP projection be obtained?",
    question_mr: "एखाद्या रुग्णाचे कोपर थोडे वाकलेले असेल आणि ते सरळ (Extend) करता येत नसेल, तर कोपराचा AP x-ray कसा काढला जावा?",
    options: [
      "(A) By forcing the arm into extension",
      "(B) By taking a single exposure with the central ray angled 45 degrees",
      "(C) By taking two projections: one with the humerus parallel to the IR and one with the forearm parallel to the IR",
      "(D) The AP projection should be skipped"
    ],
    options_mr: [
      "(A) जबरदस्तीने हात सरळ करून",
      "(B) ४५ अंश अँगल देऊन एकच x-ray घेऊन",
      "(C) दोन वेगवेगळे x-ray घेऊन: एकात ह्युमेरस कॅसेटला समांतर ठेवून आणि दुसऱ्यात फोरआर्म समांतर ठेवून",
      "(D) AP projection रद्द करून"
    ],
    correct_answer: "(C) By taking two projections: one with the humerus parallel to the IR and one with the forearm parallel to the IR",
    correct_answer_mr: "(C) दोन वेगवेगळे x-ray घेऊन: एकात ह्युमेरस कॅसेटला समांतर ठेवून आणि दुसऱ्यात फोरआर्म समांतर ठेवून",
    explanation: "An elbow in partial flexion, unable to be extended, requires two projections to achieve an AP elbow: one with the humerus parallel to the IR, and another with the forearm parallel to the IR.",
    explanation_mr: "हात पूर्ण सरळ होत नसल्यास जबरदस्ती न करता दोन स्वतंत्र फोटो घेतले जातात - एकात ह्युमेरस समांतर आणि दुसऱ्यात फोरआर्म समांतर ठेवला जातो.",
    source_page: 484,
    difficulty: 'medium'
  },
  {
    id: 243,
    category: 'Radiographic Procedures: Upper Extremity',
    section: 'technical',
    question: "In an internal rotation projection of the shoulder, which anatomical structure is shown in profile?",
    question_mr: "खांद्याचा (Shoulder) इंटरनल रोटेशन (Internal rotation) x-ray करताना, ह्युमेरसचा कोणता भाग प्रोफाईलमध्ये (स्पष्ट कडेवर) दिसतो?",
    options: [
      "(A) Greater tubercle",
      "(B) Lesser tubercle",
      "(C) Coracoid process",
      "(D) Acromion process"
    ],
    options_mr: [
      "(A) ग्रेटर ट्युबरकल",
      "(B) लेसर ट्युबरकल (Lesser tubercle)",
      "(C) कोराकॉईड प्रोसेस",
      "(D) ॲक्रोमियन प्रोसेस"
    ],
    correct_answer: "(B) Lesser tubercle",
    correct_answer_mr: "(B) लेसर ट्युबरकल (Lesser tubercle)",
    explanation: "Internal rotation of the arm places the humerus in a lateral position and shows the lesser tubercle in profile.",
    explanation_mr: "हात आतल्या बाजूला फिरवल्यास (Internal rotation) लेसर ट्युबरकल प्रोफाईलमध्ये दिसतो, तर हात बाहेर फिरवल्यास (External rotation) ग्रेटर ट्युबरकल प्रोफाईलमध्ये दिसतो.",
    source_page: 488,
    difficulty: 'medium'
  },
  {
    id: 244,
    category: 'Radiographic Procedures: Upper Extremity',
    section: 'technical',
    question: "What is the primary advantage of performing a PA projection of the clavicle rather than an AP projection?",
    question_mr: "कॉलर बोनचा (Clavicle) AP ऐवजी PA projection करण्याचा मुख्य फायदा कोणता आहे?",
    options: [
      "(A) It provides a better view of the sternoclavicular joint",
      "(B) It is more comfortable for a patient with a fractured clavicle",
      "(C) It provides optimum detail due to a decreased object-to-image receptor distance (OID)",
      "(D) It removes the ribs from superimposition"
    ],
    options_mr: [
      "(A) स्टर्नोक्लॅव्हिक्युलर जॉइंट अधिक चांगला दिसतो",
      "(B) फ्रॅक्चर रुग्णासाठी ते अधिक सोयीचे असते",
      "(C) क्लॅव्हिकल कॅसेटच्या जवळ आल्यामुळे (कमी OID) फोटोची क्वालिटी आणि डीटेल जास्त स्पष्ट मिळतात",
      "(D) बरगड्यांचा ओव्हरलॅप निघून जातो"
    ],
    correct_answer: "(C) It provides optimum detail due to a decreased object-to-image receptor distance (OID)",
    correct_answer_mr: "(C) क्लॅव्हिकल कॅसेटच्या जवळ आल्यामुळे (कमी OID) फोटोची क्वालिटी आणि डीटेल जास्त स्पष्ट मिळतात",
    explanation: "A PA projection of the clavicle provides optimum detail because it results in less object-to-image receptor distance (OID) than an AP projection.",
    explanation_mr: "PA पोझिशनमध्ये कॉलर बोन थेट कॅसेटच्या संपर्कात येत असल्याने ओआयडी (OID) कमी होकर मॅग्निफिकेशन कमी होते व उत्तम डीटेल्स मिळतात.",
    source_page: 492,
    difficulty: 'medium'
  },
  {
    id: 245,
    category: 'Radiographic Procedures: Upper Extremity',
    section: 'technical',
    question: "When performing a lateral (posterior oblique) projection of the scapula on a recumbent patient, the patient should be rotated:",
    question_mr: "झोपलेल्या रुग्णावर (Recumbent) स्कॅप्युलाचा लॅटरल (Posterior oblique) x-ray करताना रुग्णाला कसे फिरवावे?",
    options: [
      "(A) With the affected side toward the IR",
      "(B) With the affected side away from the IR",
      "(C) 90 degrees into a true lateral",
      "(D) 15-20 degrees medially"
    ],
    options_mr: [
      "(A) दुखणारा भाग कॅसेटच्या दिशेने ठेवून",
      "(B) दुखणारा भाग कॅसेटपासून दूर / वर उचलून (Affected side away from IR)",
      "(C) ९० अंश पूर्ण लॅटरल करून",
      "(D) १५-२० अंश आत फिरवून"
    ],
    correct_answer: "(B) With the affected side away from the IR",
    correct_answer_mr: "(B) दुखणारा भाग कॅसेटपासून दूर / वर उचलून (Affected side away from IR)",
    explanation: "For a recumbent lateral (posterior oblique) scapula, the patient is placed in an AP oblique position with the affected side away from the IR until the scapular borders are superimposed.",
    explanation_mr: "रुग्ण सुपाईन असताना दुखणारी बाजू कॅसेटपासून ४५-६० अंश वर उचलून (Affected side away) स्कॅप्युला लॅटरल केला जातो.",
    source_page: 496,
    difficulty: 'hard'
  },
  {
    id: 246,
    category: 'Medical Emergencies & Patient Safety',
    section: 'technical',
    question: "A cerebrovascular accident (CVA), resulting in a sudden loss of consciousness and one-sided paralysis (hemiparesis), is commonly known as a:",
    question_mr: "मेंदूतील रक्तपुरवठा अचानक खंडित झाल्यामुळे (CVA) अचानक बेशुद्ध पडणे आणि एका बाजूचा पक्षाघात (Hemiparesis) होणे या स्थितीला सामान्यतः काय म्हणतात?",
    options: [
      "(A) Heart attack",
      "(B) Stroke",
      "(C) Grand mal seizure",
      "(D) Syncope"
    ],
    options_mr: [
      "(A) हार्ट अटॅक (हृदयविकाराचा झटका)",
      "(B) स्ट्रोक / पक्षाघात (Stroke / CVA)",
      "(C) मिरगीचा झटका (Seizure)",
      "(D) सिन्कोप (ग्लानी)"
    ],
    correct_answer: "(B) Stroke",
    correct_answer_mr: "(B) स्ट्रोक / पक्षाघात (Stroke / CVA)",
    explanation: "A stroke (cerebrovascular accident) is an interference with blood supplied to the brain, often causing sudden loss of consciousness and one-sided paralysis (hemiparesis).",
    explanation_mr: "मेंदूचा स्ट्रोक (Stroke / CVA) म्हणजे मेंदूच्या रक्तवाहिनीत अडथळा किंवा रक्तस्राव होणे, ज्यामुळे एका बाजूचे शरीर अर्धांगवायूने (Hemiparesis) निकामी होते.",
    source_page: 500,
    difficulty: 'easy'
  },
  {
    id: 247,
    category: 'Medical Emergencies & Patient Safety',
    section: 'technical',
    question: "Patients arriving for radiographic evaluation with a diagnosis of 'acute abdomen' are frequently close to experiencing:",
    question_mr: "'ॲक्युट ॲब्डोमेन' (Acute abdomen - तीव्र पोटदुखी) च्या निदानासह रेडिओलॉजी विभागात येणारे रुग्ण वारंवार कोणत्या गंभीर धोक्याच्या जवळ असतात?",
    options: [
      "(A) Anaphylaxis",
      "(B) Shock",
      "(C) A stroke",
      "(D) Cardiac arrest"
    ],
    options_mr: [
      "(A) ॲनाफिलेक्सिस",
      "(B) शॉक (Shock - रक्तदाब अत्यंत कमी होणे)",
      "(C) स्ट्रोक",
      "(D) कार्डियाक अरेस्ट"
    ],
    correct_answer: "(B) Shock",
    correct_answer_mr: "(B) शॉक (Shock - रक्तदाब अत्यंत कमी होणे)",
    explanation: "Patients with a diagnosis of 'acute abdomen' usually suffer severe abdominal pain, nausea, and vomiting, and are frequently close to being in shock.",
    explanation_mr: "तीव्र पोटदुखी, अंतर्गत रक्तस्राव किंवा आतडे फाटल्यामुळे ॲक्युट ॲब्डोमेनचे रुग्ण लवकर 'शॉक' (Circulatory Shock) मध्ये जाऊ शकतात, म्हणून त्यांची काळजीपूर्वक हाताळणी करावी.",
    source_page: 504,
    difficulty: 'medium'
  },
  {
    id: 248,
    category: 'Medical Emergencies & Patient Safety',
    section: 'technical',
    question: "If a patient reports feeling dizzy or faint (syncope), bending forward and placing their head between their knees helps by:",
    question_mr: "एखाद्या रुग्णाला चक्कर किंवा ग्लानी (Syncope) येत असल्यास, पुढे वाकून डोके दोन्ही गुडघ्यांमध्ये ठेवल्याने कशी मदत होते?",
    options: [
      "(A) Opening the airway completely",
      "(B) Increasing blood flow to the brain",
      "(C) Decreasing abdominal pressure",
      "(D) Slowing down their heart rate"
    ],
    options_mr: [
      "(A) श्वसनमार्ग पूर्ण उघडल्याने",
      "(B) मेंदूकडील रक्तप्रवाह वाढवल्याने (Increasing blood flow to brain)",
      "(C) पोटातील दाब कमी केल्याने",
      "(D) हृदयाचे ठोके मंदावल्याने"
    ],
    correct_answer: "(B) Increasing blood flow to the brain",
    correct_answer_mr: "(B) मेंदूकडील रक्तप्रवाह वाढवल्याने (Increasing blood flow to brain)",
    explanation: "Bending forward and placing the head between the knees will often help relieve the lightheadedness associated with syncope as blood flow to the brain increases.",
    explanation_mr: "डोके सखल/खालच्या पातळीवर नेल्यामुळे गुरुत्वाकर्षणाने मेंदूकडे रक्ताचा पुरवठा वाढतो आणि चक्कर थांबण्यास मदत होते.",
    source_page: 508,
    difficulty: 'easy'
  },
  {
    id: 249,
    category: 'Patient Care & Safety',
    section: 'technical',
    question: "When a patient arrives in the radiology department with physical restraints in place, the radiographer must:",
    question_mr: "एखादा रुग्ण शरीराला रेस्ट्रेंट्स (Restraints - सुरक्षा पट्टे) लावून रेडिओलॉजी विभागात आल्यास, रेडियोग्राफरने कोणती काळजी घेतली पाहिजे?",
    options: [
      "(A) Remove the restraints immediately to take the x-ray",
      "(B) Leave the patient alone only for a maximum of 5 minutes",
      "(C) Never leave the patient unattended on the x-ray table",
      "(D) Ask the patient to hold still without monitoring"
    ],
    options_mr: [
      "(A) फोटो काढण्यासाठी लगेच पट्टे काढून टाकणे",
      "(B) रुग्णाला फक्त ५ मिनिटे एकटे सोडणे",
      "(C) रुग्णाला x-ray टेबलवर कधीही एकटे व लक्ष नसताना सोडायचे नाही (Never leave unattended)",
      "(D) लक्ष न देता रुग्णाला शांत बसण्यास सांगणे"
    ],
    correct_answer: "(C) Never leave the patient unattended on the x-ray table",
    correct_answer_mr: "(C) रुग्णाला x-ray टेबलवर कधीही एकटे व लक्ष नसताना सोडायचे नाही (Never leave unattended)",
    explanation: "Patients who arrive with restraints in place must never be left alone on the x-ray table, as they are usually active, disoriented, and occasionally combative.",
    explanation_mr: "बांधलेले रुग्ण बहुधा गोंधळलेले (Disoriented) असतात व पडण्याचा धोका असतो, म्हणून त्यांना x-ray टेबलवर कधीही एकटे सोडू नये.",
    source_page: 512,
    difficulty: 'easy'
  },
  {
    id: 250,
    category: 'Patient Care & Safety',
    section: 'technical',
    question: "A patient with a tracheostomy often experiences anxiety during procedures because:",
    question_mr: "ट्रॅकिओस्टॉमी (Tracheostomy - मानेवर श्वासोच्छ्वासाची नळी) असलेला रुग्ण तपासणीदरम्यान वारंवार अस्वस्थ / भीतीग्रस्त का होतो?",
    options: [
      "(A) They are allergic to contrast media",
      "(B) They cannot communicate verbally and are fearful of choking on accumulated secretions",
      "(C) They have difficulty hearing instructions",
      "(D) They cannot see the radiographer clearly"
    ],
    options_mr: [
      "(A) त्यांना कॉन्ट्रास्टची ॲलर्जी असते म्हणून",
      "(B) ते बोलून सांगू शकत नाहीत आणि साचलेल्या कफ/स्त्रावामुळे श्वास गुदमरण्याची भीती असते",
      "(C) त्यांना ऐकू येत नाही म्हणून",
      "(D) त्यांना स्पष्ट दिसत नाही म्हणून"
    ],
    correct_answer: "(B) They cannot communicate verbally and are fearful of choking on accumulated secretions",
    correct_answer_mr: "(B) ते बोलून सांगू शकत नाहीत आणि साचलेल्या कफ/स्त्रावामुळे श्वास गुदमरण्याची भीती असते",
    explanation: "Patients with a tracheostomy are often anxious because they cannot communicate verbally and are fearful of choking on secretions they cannot remove.",
    explanation_mr: "मानेत नळी असल्याने रुग्ण बोलू शकत नाहीत आणि कफ साचल्यास श्वास गुदमरेल ही भीती त्यांना अस्वस्थ करते.",
    source_page: 516,
    difficulty: 'medium'
  },
  {
    id: 251,
    category: 'Legal & Ethical Aspects',
    section: 'technical',
    question: "In the context of defamation, spoken defamation is referred to as:",
    question_mr: "कायद्याच्या भाषेत, एखाद्याविषयी तोंडी खोटे विधान करून मानहानी (Spoken defamation) करण्याला काय म्हणतात?",
    options: [
      "(A) Libel",
      "(B) Slander",
      "(C) Battery",
      "(D) Negligence"
    ],
    options_mr: [
      "(A) लायबेल (Libel - लिखित मानहानी)",
      "(B) स्लँडर (Slander - तोंडी मानहानी)",
      "(C) बॅटरी",
      "(D) नेग्लिजन्स"
    ],
    correct_answer: "(B) Slander",
    correct_answer_mr: "(B) स्लँडर (Slander - तोंडी मानहानी)",
    explanation: "A radiographer whose disclosure of confidential information is detrimental to the patient can be accused of defamation. Spoken defamation is slander; written defamation is libel.",
    explanation_mr: "तोंडाने खोट्या बातम्या सांगून केलेली मानहानी म्हणजे स्लँडर (Slander), तर लिहून किंवा छापून केलेली मानहानी म्हणजे लायबेल (Libel).",
    source_page: 520,
    difficulty: 'medium'
  },
  {
    id: 252,
    category: 'Legal & Ethical Aspects',
    section: 'technical',
    question: "Written defamation, which could result from improper charting or disclosure, is termed:",
    question_mr: "वैद्यकीय नोंदींमध्ये किंवा पत्रात लिहून केलेली मानहानी (Written defamation) काय म्हणून ओळखली जाते?",
    options: [
      "(A) Slander",
      "(B) Assault",
      "(C) Libel",
      "(D) Fraud"
    ],
    options_mr: [
      "(A) स्लँडर",
      "(B) असाॉल्ट",
      "(C) लायबेल (Libel - लिखित मानहानी)",
      "(D) फ्रॉड"
    ],
    correct_answer: "(C) Libel",
    correct_answer_mr: "(C) लायबेल (Libel - लिखित मानहानी)",
    explanation: "Written defamation is referred to as libel in a medicolegal context.",
    explanation_mr: "लिखित स्वरूपातील मानहानीला कायद्यात लायबेल (Libel) म्हणतात.",
    source_page: 524,
    difficulty: 'easy'
  },
  {
    id: 253,
    category: 'Radiographic Procedures: Special & Trauma',
    section: 'technical',
    question: "What is a primary advantage of utilizing a horizontal beam (cross-table) lateral projection for a trauma patient?",
    question_mr: "ट्रॉमा (Trauma - अपघातग्रस्त) रुग्णासाठी हॉरिझॉन्टल बीम / क्रॉस-टेबल (Cross-table) लॅटरल x-ray करण्याचा मुख्य फायदा कोणता?",
    options: [
      "(A) It requires a lower kVp setting",
      "(B) It allows the radiographer to stay in the room during exposure",
      "(C) It prevents magnification of the anatomy",
      "(D) It reduces patient discomfort and the risk of further injury by avoiding movement"
    ],
    options_mr: [
      "(A) कमी kVp लागतो",
      "(B) रेडियोग्राफर रूममध्ये राहू शकतो",
      "(C) मॅग्निफिकेशन पूर्ण थांबते",
      "(D) रुग्णाला न हलवता x-ray होत असल्यामुळे वेदना व पुढील दुखापतीचा धोका टाळता येतो (Reduces risk of further injury)"
    ],
    correct_answer: "(D) It reduces patient discomfort and the risk of further injury by avoiding movement",
    correct_answer_mr: "(D) रुग्णाला न हलवता x-ray होत असल्यामुळे वेदना व पुढील दुखापतीचा धोका टाळता येतो (Reduces risk of further injury)",
    explanation: "The use of a horizontal beam ('cross-table') for lateral projections is a modification made for trauma patients to reduce discomfort and the risk of further injury, as it avoids moving the patient.",
    explanation_mr: "अपघातग्रस्त रुग्णाला न हलवता ट्यूब आडवी करून (Cross-table horizontal beam) x-ray काढल्यास मणक्याला किंवा हाडाला होणारी अतिरिक्त दुखापत टळते.",
    source_page: 528,
    difficulty: 'easy'
  },
  ...CHAPTER_1_QUESTIONS,
  ...CHAPTER_2_QUESTIONS,
  ...CHAPTER_3_QUESTIONS,
  ...CHAPTER_4_QUESTIONS,
  ...CHAPTER_5_QUESTIONS,
  ...CHAPTER_6_QUESTIONS,
  ...CHAPTER_7_QUESTIONS,
  ...CHAPTER_8_QUESTIONS,
  ...CHAPTER_9_QUESTIONS,
  ...CHAPTER_10_QUESTIONS,
  ...CHAPTER_11_QUESTIONS,
  ...CHAPTER_12_QUESTIONS,
  ...CHAPTER_13_QUESTIONS,
  ...CHAPTER_14_QUESTIONS,
  ...CHAPTER_15_QUESTIONS,
  ...CHAPTER_16_QUESTIONS,
  ...CHAPTER_17_QUESTIONS,
  ...CHAPTER_18_QUESTIONS,
  ...CHAPTER_19_QUESTIONS,
  ...CHAPTER_20_QUESTIONS,
  ...CHAPTER_21_QUESTIONS,
  ...CHAPTER_22_QUESTIONS,
  ...CHAPTER_23_QUESTIONS,
  ...CHAPTER_24_QUESTIONS,
  ...CHAPTER_25_QUESTIONS,
  ...CHAPTER_26_QUESTIONS,
  ...CHAPTER_27_QUESTIONS,
  ...CHAPTER_28_QUESTIONS,
  ...CHAPTER_29_QUESTIONS,
  ...CHAPTER_30_QUESTIONS
];


