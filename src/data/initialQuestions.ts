import { Question, CategoryInfo } from '../types';
import { MASTER_QUESTION_BANK, DEDUPLICATED_QUESTION_BANK } from './masterQuestionBank';

export { MASTER_QUESTION_BANK, DEDUPLICATED_QUESTION_BANK };

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

export const INITIAL_QUESTIONS: Question[] = DEDUPLICATED_QUESTION_BANK;
