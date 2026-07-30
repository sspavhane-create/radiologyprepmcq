export interface ChapterItem {
  id: number;
  part: string;
  title: string;
  titleMr: string;
  category: string;
  description: string;
  descriptionMr: string;
  freeQuestionsCount: number;
}

export const ALL_30_CHAPTERS: ChapterItem[] = [
  {
    id: 1,
    part: 'Part I',
    title: 'Chapter 1: Legal and Ethical Aspects',
    titleMr: 'प्रकरण १: कायदेशीर आणि नैतिक पैलू (HIPAA, Patient Rights, Torts)',
    category: 'Technical: Radiophysics & Machine Principles',
    description: 'Patient rights, consent, HIPAA rules, and legal responsibilities in radiography.',
    descriptionMr: 'रुग्णाचे हक्क, संमतीपत्र (Consent), HIPAA नियम व क्ष-किरण तंत्रज्ञांची कायदेशीर जबाबदारी.',
    freeQuestionsCount: 15
  },
  {
    id: 2,
    part: 'Part I',
    title: 'Chapter 2: Patient Communication and Safety',
    titleMr: 'प्रकरण २: रुग्ण संवादाची कौशल्ये, सुरक्षा व व्हेरीफिकेशन',
    category: 'Technical: Anatomy & Radiographic Positioning',
    description: 'Patient identification, communication techniques, and safety verification protocols.',
    descriptionMr: 'रुग्ण ओळख (Patient ID), संवाद कौशल्ये व सुरक्षितता तपासणी कार्यपद्धती.',
    freeQuestionsCount: 15
  },
  {
    id: 3,
    part: 'Part I',
    title: 'Chapter 3: Infection Control',
    titleMr: 'प्रकरण ३: संसर्ग नियंत्रण, Asepsis व Handwashing मार्गदर्शक तत्त्वे',
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    description: 'Sterilization, medical asepsis, hand hygiene, and infection prevention.',
    descriptionMr: 'निर्जंतुकीकरण, वैद्यकीय Asepsis, हात धुणे व संसर्ग प्रतिबंधक उपाय.',
    freeQuestionsCount: 15
  },
  {
    id: 4,
    part: 'Part I',
    title: 'Chapter 4: Medical Emergencies and Contrast Media',
    titleMr: 'प्रकरण ४: वैद्यकीय आणीबाणी, शॉक, ऑक्सिजन व कॉन्ट्रास्ट डाय',
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    description: 'Anaphylactic shock, contrast reactions, CPR, oxygen administration, and emergency care.',
    descriptionMr: 'ॲनाफायलॅक्टिक शॉक, कॉन्ट्रास्ट डायचे रिॲक्शन, सीपीआर व आणीबाणीच्या परिस्थितीतील काळजी.',
    freeQuestionsCount: 15
  },
  {
    id: 5,
    part: 'Part II',
    title: 'Chapter 5: General Procedural Considerations',
    titleMr: 'प्रकरण ५: सामान्य पोझिशनिंग तत्त्वे, बॉडी प्लॅन्स व बॉडी हॅबिटस',
    category: 'Technical: Anatomy & Radiographic Positioning',
    description: 'Body planes, anatomical positions, motion control, and body habitus.',
    descriptionMr: 'शरीराचे प्लॅन्स (Body Planes), अ‍ॅनाटॉमिकल पोझिशन्स व बॉडी हॅबिटस.',
    freeQuestionsCount: 15
  },
  {
    id: 6,
    part: 'Part II',
    title: 'Chapter 6: Imaging Procedures: Upper Extremity',
    titleMr: 'प्रकरण ६: अवयव रचना: वरील अवयव (हस्त, मनगट, कोपर, खांदा)',
    category: 'Technical: Anatomy & Radiographic Positioning',
    description: 'Anatomy and positioning for hand, wrist, forearm, elbow, and shoulder radiography.',
    descriptionMr: 'हात, मनगट, कोपर व खांद्याच्या क्ष-किरण तपासणीच्या पोझिशन्स.',
    freeQuestionsCount: 15
  },
  {
    id: 7,
    part: 'Part II',
    title: 'Chapter 7: Imaging Procedures: Lower Extremity',
    titleMr: 'प्रकरण ७: अवयव रचना: खालील अवयव (पाऊल, टाच, गुडगा, मांडी)',
    category: 'Technical: Anatomy & Radiographic Positioning',
    description: 'Foot, ankle, lower leg, knee, femur, and hip anatomical projections.',
    descriptionMr: 'पाऊल, घोटा, गुडगा व मांडीच्या हाडांच्या क्ष-किरण पोझिशन्स.',
    freeQuestionsCount: 15
  },
  {
    id: 8,
    part: 'Part II',
    title: 'Chapter 8: Imaging Procedures: Chest and Abdomen',
    titleMr: 'प्रकरण ८: चेस्ट एक्स-रे (छाती) व पोट (Abdomen/KUB) पोझिशनिंग',
    category: 'Technical: Anatomy & Radiographic Positioning',
    description: 'Chest PA/Lateral, Supine/Erect Abdomen, KUB, and diaphragm views.',
    descriptionMr: 'छाती (PA/Lateral), पोटाच्या एक्स-रे पोझिशन्स व KUB तपासणी.',
    freeQuestionsCount: 15
  },
  {
    id: 9,
    part: 'Part II',
    title: 'Chapter 9: Imaging Procedures: Vertebral Column and Pelvis',
    titleMr: 'प्रकरण ९: पाठीचा कणा (Cervical, Thoracic, Lumbar Spine) व पेलव्हिस',
    category: 'Technical: Anatomy & Radiographic Positioning',
    description: 'Spinal projections, SI joints, sacrum, coccyx, and pelvic radiography.',
    descriptionMr: 'पाठीच्या कण्याचे मणके (Spine), पेलव्हिस व एस.आय. जॉइंट्सचे क्ष-किरण.',
    freeQuestionsCount: 15
  },
  {
    id: 10,
    part: 'Part II',
    title: 'Chapter 10: Imaging Procedures: Skull and Cranial Bones',
    titleMr: 'प्रकरण १०: कपाळ व डोक्याची हाडे (Skull, Facial Bones & Sinuses)',
    category: 'Technical: Anatomy & Radiographic Positioning',
    description: 'Skull radiography, Towne method, Waters view, facial bones, and PNS sinuses.',
    descriptionMr: 'स्कल (Skull), टाऊन मेथड, वॉटर व्ह्यू, चेहऱ्याची हाडे व सायनस तपासणी.',
    freeQuestionsCount: 15
  },
  {
    id: 11,
    part: 'Part III',
    title: 'Chapter 11: Radiation Protection Principles',
    titleMr: 'प्रकरण ११: रेडिएशन संरक्षणाची मूलतत्त्वे (ALARA, Time, Distance, Shielding)',
    category: 'Technical: Radiation Protection & Hazards',
    description: 'ALARA concepts, time-distance-shielding rules, and cardinal principles.',
    descriptionMr: 'अलारा (ALARA) तत्त्व, वेळ-अंतर-शील्डिंग नियम व रेडिएशन बचाव.',
    freeQuestionsCount: 15
  },
  {
    id: 12,
    part: 'Part III',
    title: 'Chapter 12: Biological Effects of Ionizing Radiation',
    titleMr: 'प्रकरण १२: आयनायझिंग रेडिएशनचे मानवी शरीरावरील जैविक परिणाम (LET & RBE)',
    category: 'Technical: Radiation Protection & Hazards',
    description: 'Somatic, genetic, stochastic, deterministic effects, LET, and RBE.',
    descriptionMr: 'सोमॅटिक व जेनेटिक परिणाम, स्टोकॅस्टिक व डिटरमिनिस्टिक इफेक्ट्स.',
    freeQuestionsCount: 15
  },
  {
    id: 13,
    part: 'Part III',
    title: 'Chapter 13: Patient Radiation Safety and Shielding',
    titleMr: 'प्रकरण १३: रुग्णांचे रेडिएशनपासून संरक्षण (Collimation, Lead Shielding & 10-Day Rule)',
    category: 'Technical: Radiation Protection & Hazards',
    description: 'Collimation techniques, gonadal shielding, 10-day rule, and dose reduction.',
    descriptionMr: 'कॉलिमेशन पद्धती, गोनाडल शील्डिंग, १० दिवसांचा नियम व डोस कमी करणे.',
    freeQuestionsCount: 15
  },
  {
    id: 14,
    part: 'Part III',
    title: 'Chapter 14: Personnel Radiation Protection',
    titleMr: 'प्रकरण १४: रेडिएशन कर्मचाऱ्यांचे संरक्षण व अडथळे (Primary/Secondary Barriers)',
    category: 'Technical: Radiation Protection & Hazards',
    description: 'Occupational dose limits, lead aprons, primary and secondary protective barriers.',
    descriptionMr: 'व्यवसायिक डोस मर्यादा, लेड ॲप्रॉन, प्रायमरी व सेकंडरी बॅरियर्स.',
    freeQuestionsCount: 15
  },
  {
    id: 15,
    part: 'Part III',
    title: 'Chapter 15: Radiation Units and Dosimetry Monitoring',
    titleMr: 'प्रकरण १५: रेडिएशन मापन एकके (Gray, Sievert, Roentgen) व TLD/OSL बॅज',
    category: 'Technical: Radiation Protection & Hazards',
    description: 'Units of radiation measurement, TLD badges, OSL dosimeters, and pocket chambers.',
    descriptionMr: 'रेडिएशन मोजण्याची एकके, टी.एल.डी. व ओ.एस.एल. डोसीमीटर बॅजेस.',
    freeQuestionsCount: 15
  },
  {
    id: 16,
    part: 'Part IV',
    title: 'Chapter 16: Image Production: mAs and Exposure Time',
    titleMr: 'प्रकरण १६: इमेज प्रोडक्शन: mAs, टाइम व फोटॉन प्रमाण (Quantity)',
    category: 'Technical: Radiophysics & Machine Principles',
    description: 'Milliampere-seconds relationship, reciprocity law, and quantum mottle.',
    descriptionMr: 'mAs व एक्सपोजर टाइम संबंध, रेसिप्रॉसिटी लॉ व इमेज डेंसिटी.',
    freeQuestionsCount: 15
  },
  {
    id: 17,
    part: 'Part IV',
    title: 'Chapter 17: Image Production: kVp and Beam Penetrability',
    titleMr: 'प्रकरण १७: इमेज प्रोडक्शन: kVp, 15% Rule व बीमची भेदकता (Quality)',
    category: 'Technical: Radiophysics & Machine Principles',
    description: 'Kilovoltage peak, 15% rule, contrast control, and beam quality.',
    descriptionMr: 'पीक किलोव्होल्टेज (kVp), १५% नियम, इमेज कॉन्ट्रास्ट नियंत्रण.',
    freeQuestionsCount: 15
  },
  {
    id: 18,
    part: 'Part IV',
    title: 'Chapter 18: Distance and Geometry: SID, OID & Grid Principles',
    titleMr: 'प्रकरण १८: सिड (SID), ओआयडी (OID) व अँोड हील इफेक्ट व ग्रिड्स',
    category: 'Technical: Radiophysics & Machine Principles',
    description: 'Inverse square law, geometric distortion, focal spot blur, and anti-scatter grids.',
    descriptionMr: 'इनव्हर्स स्क्वेअर लॉ, डिस्टॉर्शन, फोकल स्पॉट व स्कॅटर रेडिएशन ग्रिड्स.',
    freeQuestionsCount: 15
  },
  {
    id: 19,
    part: 'Part IV',
    title: 'Chapter 19: Screen-Film and Photostimulable Phosphor CR Systems',
    titleMr: 'प्रकरण १९: कम्प्युटेड रेडिओोग्राफी (CR) व PSP इमेजिंग प्लेट्स',
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    description: 'CR imaging plates, barium fluorohalide phosphor, erasure, and laser scanning.',
    descriptionMr: 'सी.आर. प्लेट्स, बेरियम फ्लोरोहॅलाईड फॉस्फर, लेझर स्कॅनिंग व इमेज रिडिंग.',
    freeQuestionsCount: 15
  },
  {
    id: 20,
    part: 'Part IV',
    title: 'Chapter 20: Digital Radiography (DR) Flat-Panel Detectors',
    titleMr: 'प्रकरण २०: डिजिटल रेडिओोग्राफी (DR) फ्लॅट पॅनेल डिटेक्टर्स (Direct/Indirect DR)',
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    description: 'Direct vs indirect DR detectors, TFT arrays, amorphous selenium, and CsI phosphors.',
    descriptionMr: 'डायरेक्ट व इनडायरेक्ट DR डिटेक्टर्स, TFT अ‍ॅरे, सेलेनियम व सिझियम आयोडाईड.',
    freeQuestionsCount: 15
  },
  {
    id: 21,
    part: 'Part IV',
    title: 'Chapter 21: PACS, DICOM, and Image Processing Parameters',
    titleMr: 'प्रकरण २१: पी.ए.सी.एस. (PACS), डायकॉम (DICOM) व विंडो लेव्हल / विड्थ',
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    description: 'PACS archiving, DICOM standard, RIS/HIS integration, histogram, and LUT.',
    descriptionMr: 'पी.ए.सी.एस. आर्काईव्हिंग, डायकॉम नेटवर्क, हिस्टोग्राम व विंडो लेव्हल.',
    freeQuestionsCount: 15
  },
  {
    id: 22,
    part: 'Part IV',
    title: 'Chapter 22: Radiographic Artifacts & Quality Control Tests',
    titleMr: 'प्रकरण २२: एक्स-रे आर्टिफॅक्ट्स व गुणवत्ता नियंत्रण (QC Tests & Calibration)',
    category: 'Technical: Films, Contrast Media & Digital DR/PACS',
    description: 'Processing artifacts, grid cut-off, linepair resolution, and QC testing.',
    descriptionMr: 'प्रोसेसिंग आर्टिफॅक्ट्स, ग्रिड कट-ऑफ व उपकरणांची गुणवत्ता तपासणी.',
    freeQuestionsCount: 15
  },
  {
    id: 23,
    part: 'Part V',
    title: 'Chapter 23: X-Ray Tube Design, Anode, and Cathode Physics',
    titleMr: 'प्रकरण २३: एक्स-रे ट्युब रचना, अ‍ॅनोड, कॅथोड, टंगस्टन फिलामेंट व रोटेटिंग डिस्क',
    category: 'Technical: Radiophysics & Machine Principles',
    description: 'Cathode filament, rotating anode tungsten disk, housing, and Bremsstrahlung radiation.',
    descriptionMr: 'एक्स-रे ट्युबची रचना, रोटेटिंग अ‍ॅनोड, टंगस्टन फिलामेंट व उष्णता नियंत्रण.',
    freeQuestionsCount: 15
  },
  {
    id: 24,
    part: 'Part V',
    title: 'Chapter 24: High-Voltage Generators, Transformers, and Rectifiers',
    titleMr: 'प्रकरण २४: हाय व्होल्टेज जनरेटर्स, ट्रान्सफॉर्मर, रेक्टिफायर्स व थ्री-फेस पॉवर',
    category: 'Technical: Radiophysics & Machine Principles',
    description: 'Step-up/step-down transformers, autotransformers, diode rectifiers, and high-frequency units.',
    descriptionMr: 'स्टेप-अप ट्रान्सफॉर्मर, ऑटोट्रान्सफॉर्मर, रेक्टिफायर्स व हाय-फ्रीक्वेन्सी जनरेटर्स.',
    freeQuestionsCount: 15
  },
  {
    id: 25,
    part: 'Part V',
    title: 'Chapter 25: Fluoroscopy and Image Intensifiers (C-Arm Systems)',
    titleMr: 'प्रकरण २५: फ्लोरोस्कोपी, इमेज इंटेंसिफायर ट्युब व सी-आर्म (C-Arm) सिस्टीम्स',
    category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
    description: 'Image intensifier tubes, flux gain, minification gain, pulse fluoroscopy, and C-Arm operation.',
    descriptionMr: 'इमेज इंटेंसिफायर ट्युब, ब्राईटनेस गेन, सी-आर्म ऑपरेटिंग पद्धती.',
    freeQuestionsCount: 15
  },
  {
    id: 26,
    part: 'Part V',
    title: 'Chapter 26: Computed Tomography (CT Scan) Fundamentals',
    titleMr: 'प्रकरण २६: सी.टी. स्कॅन मूलभूत तत्त्वे (CT Generations, Hounsfield Units, Pitch)',
    category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
    description: 'CT scanner generations, slip rings, helical/spiral CT, Hounsfield numbers, and pitch.',
    descriptionMr: 'सी.टी. जनरेशन्स, स्लिप रिंग्स, स्पायरल सी.टी., हाउन्सफिल्ड युनिट्स व पिच.',
    freeQuestionsCount: 15
  },
  {
    id: 27,
    part: 'Part V',
    title: 'Chapter 27: Magnetic Resonance Imaging (MRI) Principles',
    titleMr: 'प्रकरण २७: एम.आर.आय. (MRI) मूलभूत तत्त्वे (Magnetic Field, T1/T2 Relaxation)',
    category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
    description: 'Superconducting magnets, RF pulses, hydrogen proton spin, T1/T2 relaxation, and safety.',
    descriptionMr: 'मॅग्नेटिक फिल्ड, आर.एफ. पल्स, हायड्रोजन प्रोटॉन स्पिन, T1/T2 रिलॅक्सेशन.',
    freeQuestionsCount: 15
  },
  {
    id: 28,
    part: 'Part V',
    title: 'Chapter 28: Mammography, Ultrasound, and Special Imaging Modalities',
    titleMr: 'प्रकरण २८: मॅमोग्राफी (Mammography), सोनोग्राफी (USG) व प्रगत तंत्रज्ञान',
    category: 'Technical: Advanced Modalities CT/MRI/Radiotherapy',
    description: 'Molybdenum targets, low-kVp mammography, transducer piezo-electric ultrasound, and DEXA.',
    descriptionMr: 'मोलिब्डेनम टार्गेट, मॅमोग्राफी, पिझो-इलेक्ट्रिक ट्रान्सड्यूसर व सोनोग्राफी.',
    freeQuestionsCount: 15
  },
  {
    id: 29,
    part: 'Part V',
    title: 'Chapter 29: Non-Technical General Knowledge, Marathi & English',
    titleMr: 'प्रकरण २९: बिगर तांत्रिक विषय: मराठी, इंग्रजी व सामान्य ज्ञान (120 Marks)',
    category: 'Non-Technical: Marathi, English, GK & Reasoning',
    description: 'Syllabus breakdown for Marathi grammar, English vocabulary, GK, and logical reasoning.',
    descriptionMr: 'मराठी व्याकरण, इंग्रजी व्होकॅब्युलरी, सामान्य ज्ञान व बौद्धिक चाचणी सराव.',
    freeQuestionsCount: 15
  },
  {
    id: 30,
    part: 'Part V',
    title: 'Chapter 30: Grand Mock Exam Practice (3000+ Question Set)',
    titleMr: 'प्रकरण ३०: ३०००+ महा-प्रश्नसंच सराव परीक्षा (२०० गुण पॅटर्न)',
    category: 'Technical: Radiophysics & Machine Principles',
    description: '3000+ Comprehensive Question Bank grand mock test aligned with Maharashtra PHD exam pattern.',
    descriptionMr: 'सार्वजनिक आरोग्य विभाग क्ष-किरण वैज्ञानिक अधिकारी परीक्षेसाठी ३०००+ प्रश्नांचा महाप्रश्नसंच.',
    freeQuestionsCount: 15
  }
];
