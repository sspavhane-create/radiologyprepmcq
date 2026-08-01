export interface TopicItem {
  id: string;
  topicNumber: string; // "Topic 1", "Topic 2", etc.
  titleEn: string;
  titleMr: string;
  titleHi: string;
  estimatedTime: string;
  questionCount: number;
  freeQuestionsCount: number;
}

export interface ChapterHierarchyItem {
  id: string;
  chapterNumber: string; // "Chapter 1.1", "Chapter 1.2", etc.
  titleEn: string;
  titleMr: string;
  titleHi: string;
  categoryKey: string;
  descriptionEn: string;
  descriptionMr: string;
  descriptionHi: string;
  estimatedTime: string;
  questionCount: number;
  freeQuestionsCount: number;
  topics: TopicItem[];
}

export interface MainSubjectItem {
  id: number; // 1 to 30
  numberStr: string; // "01", "02", ... "30"
  titleEn: string;
  titleMr: string;
  titleHi: string;
  descriptionEn: string;
  descriptionMr: string;
  descriptionHi: string;
  iconName: string;
  color: string;
  section: 'sec1' | 'sec2' | 'both';
  chapters: ChapterHierarchyItem[];
}

export const MAIN_SUBJECTS_30: MainSubjectItem[] = [
  // 1. Radiography Physics
  {
    id: 1,
    numberStr: "01",
    titleEn: "Radiography Physics",
    titleMr: "राडिओग्राफी भौतिकशास्त्र",
    titleHi: "रेडियोग्राफी भौतिकी",
    descriptionEn: "Discovery of X-rays, electromagnetic spectrum, X-ray production & tube physics.",
    descriptionMr: "क्ष-किरणांचा शोध, इलेक्ट्रोमॅग्नेटिक स्पेक्ट्रम, एक्स-रे निर्मिती व ट्युब फिजिक्स.",
    descriptionHi: "एक्स-रे की खोज, विद्युत चुम्बकीय स्पेक्ट्रम, एक्स-रे उत्पादन और ट्यूब भौतिकी।",
    iconName: "Zap",
    color: "from-blue-600 to-indigo-700",
    section: "both",
    chapters: [
      {
        id: "ch_1_1",
        chapterNumber: "Chapter 1.1",
        titleEn: "History & Discovery of X-Rays",
        titleMr: "क्ष-किरणांचा इतिहास व शोध (Roentgen 1895)",
        titleHi: "एक्स-रे का इतिहास एवं खोज (रॉन्टगन 1895)",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Cathode ray experiments, discovery on Nov 8 1895, early Nobel Prize history.",
        descriptionMr: "कॅथोड रे प्रयोग, ८ नोव्हेंबर १८९५ मधील शोध व नोबेल पारितोषिक इतिहास.",
        descriptionHi: "कैथोड किरण प्रयोग, 8 नवंबर 1895 को खोज और नोबेल पुरस्कार इतिहास।",
        estimatedTime: "20 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_1_1_1",
            topicNumber: "Topic 1",
            titleEn: "Wilhelm Conrad Roentgen Discovery",
            titleMr: "व्हिल्हेल्म कॉनराड रॉन्टगेन यांचा शोध",
            titleHi: "विल्हेम कॉनराड रॉन्टगन की खोज",
            estimatedTime: "5 Mins",
            questionCount: 10,
            freeQuestionsCount: 15
          },
          {
            id: "tp_1_1_2",
            topicNumber: "Topic 2",
            titleEn: "Crookes & Hittorf Tube Experiments",
            titleMr: "क्रूक्स व हिटॉर्फ ट्युब प्रयोग",
            titleHi: "क्रूक्स और हिटॉर्फ ट्यूब प्रयोग",
            estimatedTime: "5 Mins",
            questionCount: 10,
            freeQuestionsCount: 15
          },
          {
            id: "tp_1_1_3",
            topicNumber: "Topic 3",
            titleEn: "Properties of X-Rays & Wavelength",
            titleMr: "क्ष-किरणांचे गुणधर्म व लहरींची लांबी",
            titleHi: "एक्स-रे के गुण और तरंग दैर्ध्य",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_1_2",
        chapterNumber: "Chapter 1.2",
        titleEn: "Electromagnetic Spectrum & Wave Mechanics",
        titleMr: "इलेक्ट्रोमॅग्नेटिक स्पेक्ट्रम व लहरींचे शास्त्र",
        titleHi: "विद्युत चुम्बकीय स्पेक्ट्रम एवं तरंग यांत्रिकी",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Photon energy, frequency (f), wavelength (λ), Planck's constant (E=hf).",
        descriptionMr: "फोटॉन ऊर्जा, फ्रिक्वेन्सी, वेव्हलेंथ व प्लॅंकचे समीकरण (E=hf).",
        descriptionHi: "फोटॉन ऊर्जा, आवृत्ति, तरंग दैर्ध्य और प्लांक समीकरण (E=hf)।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_1_2_1",
            topicNumber: "Topic 1",
            titleEn: "EM Spectrum Bands & Ionizing vs Non-Ionizing",
            titleMr: "आयनायझिंग व नॉन-आयनायझिंग स्पेक्ट्रम",
            titleHi: "आयनाइजिंग और नॉन-आयनाइजिंग स्पेक्ट्रम",
            estimatedTime: "10 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_1_2_2",
            topicNumber: "Topic 2",
            titleEn: "Photon Energy Calculations & E=hf",
            titleMr: "फोटॉन एनर्जी गणना व E=hf सूत्र",
            titleHi: "फोटॉन ऊर्जा गणना और E=hf सूत्र",
            estimatedTime: "15 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_1_3",
        chapterNumber: "Chapter 1.3",
        titleEn: "X-Ray Production & Interaction Physics",
        titleMr: "एक्स-रे निर्मिती (Bremsstrahlung & Characteristic)",
        titleHi: "एक्स-रे उत्पादन एवं अंतःक्रिया भौतिकी",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Bremsstrahlung radiation, characteristic X-rays, photoelectric effect & Compton scattering.",
        descriptionMr: "ब्रेम्सस्ट्रालुंग व कॅरेक्टरिस्टिक एक्स-रे, फोटोइलेक्ट्रिक व कॉम्प्टन स्कॅटरिंग.",
        descriptionHi: "ब्रेम्सस्ट्रालुंग और विशिष्ट एक्स-रे, फोटोइलेक्ट्रिक और कॉम्पटन स्कैटरिंग।",
        estimatedTime: "30 Mins",
        questionCount: 50,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_1_3_1",
            topicNumber: "Topic 1",
            titleEn: "Bremsstrahlung (Braking Radiation)",
            titleMr: "ब्रेम्सस्ट्रालुंग (ब्रेकिंग रेडिएशन)",
            titleHi: "ब्रेम्सस्ट्रालुंग (ब्रेकिंग रेडिएशन)",
            estimatedTime: "10 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_1_3_2",
            topicNumber: "Topic 2",
            titleEn: "Characteristic Radiation & K-Shell Binding Energy",
            titleMr: "कॅरेक्टरिस्टिक रेडिएशन व K-शेल उर्जा",
            titleHi: "विशिष्ट विकिरण और के-शेल बाइंडिंग ऊर्जा",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_1_3_3",
            topicNumber: "Topic 3",
            titleEn: "Photoelectric Effect vs Compton Scattering",
            titleMr: "फोटोइलेक्ट्रिक इफेक्ट व कॉम्प्टन स्कॅटरिंग",
            titleHi: "फोटोइलेक्ट्रिक प्रभाव बनाम कॉम्पटन स्कैटरिंग",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 2. X-ray Equipment
  {
    id: 2,
    numberStr: "02",
    titleEn: "X-ray Equipment",
    titleMr: "क्ष-किरण उपकरणे व मशिनरी",
    titleHi: "एक्स-रे उपकरण एवं मशीनरी",
    descriptionEn: "High voltage generators, transformers, rotating anodes, tube housings & grids.",
    descriptionMr: "हाय व्होल्टेज जनरेटर्स, ट्रान्सफॉर्मर, रोटेटिंग ॲनोड, ट्युब हाऊसिंग व ग्रिड्स.",
    descriptionHi: "उच्च वोल्टेज जनरेटर, ट्रांसफार्मर, घूर्णन एनोड, ट्यूब हाउसिंग और ग्रिड।",
    iconName: "Cpu",
    color: "from-amber-600 to-orange-700",
    section: "both",
    chapters: [
      {
        id: "ch_2_1",
        chapterNumber: "Chapter 2.1",
        titleEn: "X-Ray Tube Design & Construction",
        titleMr: "एक्स-रे ट्युबची रचना, अ‍ॅनोड व कॅथोड",
        titleHi: "एक्स-रे ट्यूब की संरचना, एनोड और कैथोड",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Tungsten filament, rotating anode disk, focal spot size, line-focus principle.",
        descriptionMr: "टंगस्टन फिलामेंट, रोटेटिंग ॲनोड डिश, फोकल स्पॉट आकार व लाईन-फोकस तत्त्व.",
        descriptionHi: "टंगस्टन फिलामेंट, घूर्णन एनोड डिस्क, फोकल स्पॉट आकार और लाइन-फोकस सिद्धांत।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_2_1_1",
            topicNumber: "Topic 1",
            titleEn: "Cathode Filament & Thermionic Emission",
            titleMr: "कॅथोड फिलामेंट व थर्मिओनिक एमिशन्स",
            titleHi: "कैथोड फिलामेंट और थर्मियोनिक उत्सर्जन",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_2_1_2",
            topicNumber: "Topic 2",
            titleEn: "Rotating Anode & Heel Effect",
            titleMr: "रोटेटिंग ॲनोड व ॲनोड हील इफेक्ट",
            titleHi: "घूर्णन एनोड और एनोड हील प्रभाव",
            estimatedTime: "15 Mins",
            questionCount: 25,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_2_2",
        chapterNumber: "Chapter 2.2",
        titleEn: "High-Voltage Generators & Transformers",
        titleMr: "हाय-व्होल्टेज जनरेटर्स, ट्रान्सफॉर्मर व रेक्टिफायर्स",
        titleHi: "उच्च-वोल्टेज जनरेटर, ट्रांसफार्मर और रेक्टिफायर",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Step-up transformers, autotransformers, diode rectifiers, high frequency circuits.",
        descriptionMr: "स्टेप-अप ट्रान्सफॉर्मर, ऑटोट्रान्सफॉर्मर, डायोड रेक्टिफायर्स व हाय-फ्रीक्वेन्सी जनरेटर्स.",
        descriptionHi: "स्टेप-अप ट्रांसफार्मर, ऑटो-ट्रांसफार्मर, डायोड रेक्टिफायर और उच्च आवृत्ति जनरेटर।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_2_2_1",
            topicNumber: "Topic 1",
            titleEn: "Autotransformer & Step-Up Circuits",
            titleMr: "ऑटोट्रान्सफॉर्मर व स्टेप-अप सर्किट्स",
            titleHi: "ऑटो-ट्रांसफार्मर और स्टेप-अप सर्किट",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_2_2_2",
            topicNumber: "Topic 2",
            titleEn: "Rectification & Ripple Factors",
            titleMr: "रेक्टिफिकेशन व रिपल फॅक्टर (1-Phase / 3-Phase / High-Freq)",
            titleHi: "रेक्टिफिकेशन और रिपल फैक्टर",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 3. Imaging Techniques
  {
    id: 3,
    numberStr: "03",
    titleEn: "Imaging Techniques",
    titleMr: "इमेजिंग तंत्रज्ञान व एक्सपोजर",
    titleHi: "इमेजिंग तकनीकें एवं एक्सपोजर",
    descriptionEn: "Exposure factors (mAs, kVp), geometric factors, density, contrast & resolution.",
    descriptionMr: "एक्सपोजर घटक (mAs, kVp), इमेज डेन्सिटी, कॉन्ट्रास्ट व रिसोल्यूशन.",
    descriptionHi: "एक्सपोजर कारक (mAs, kVp), घनत्व, कंट्रास्ट और रिज़ॉल्यूशन।",
    iconName: "Maximize",
    color: "from-emerald-600 to-teal-700",
    section: "both",
    chapters: [
      {
        id: "ch_3_1",
        chapterNumber: "Chapter 3.1",
        titleEn: "mAs & Quantity Factor Control",
        titleMr: "mAs व फोटॉन प्रमाण (Quantity) नियंत्रण",
        titleHi: "mAs और फोटॉन मात्रा नियंत्रण",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Milliampere-seconds relationship, density control, reciprocity law.",
        descriptionMr: "mAs व एक्सपोजर वेळ, इमेज डेन्सिटी नियंत्रण व रेसिप्रॉसिटी लॉ.",
        descriptionHi: "mAs और एक्सपोजर समय, छवि घनत्व नियंत्रण और पारस्परिकता नियम।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_3_1_1",
            topicNumber: "Topic 1",
            titleEn: "mAs Calculation & Reciprocity Law",
            titleMr: "mAs ची गणितीय सूत्रे व रेसिप्रॉसिटी लॉ",
            titleHi: "mAs गणना और पारस्परिकता नियम",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_3_1_2",
            topicNumber: "Topic 2",
            titleEn: "Quantum Mottle & Exposure Index",
            titleMr: "क्वांटम मॉटल व एक्सपोजर इंडेक्स",
            titleHi: "क्वांटम मोटल और एक्सपोजर सूचकांक",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_3_2",
        chapterNumber: "Chapter 3.2",
        titleEn: "kVp & 15% Rule Penetration",
        titleMr: "kVp, १५% नियम व बीमची भेदकता",
        titleHi: "kVp, 15% नियम और बीम पैनेट्रेशन",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Kilovoltage peak, 15% rule for contrast control, scatter generation.",
        descriptionMr: "kVp चे महत्त्व, १५% चा नियम, कॉन्ट्रास्ट नियंत्रण व स्कॅटर रेडिएशन.",
        descriptionHi: "kVp का महत्व, 15% नियम, कंट्रास्ट नियंत्रण और स्कैटर विकिरण।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_3_2_1",
            topicNumber: "Topic 1",
            titleEn: "15% Rule Calculations",
            titleMr: "१५% नियमावर आधारित गणिते",
            titleHi: "15% नियम गणनाएं",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_3_2_2",
            topicNumber: "Topic 2",
            titleEn: "Subject Contrast & Beam Quality",
            titleMr: "सब्जेक्ट कॉन्ट्रास्ट व बीम क्वालिटी",
            titleHi: "सब्जेक्ट कंट्रास्ट और बीम गुणवत्ता",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 4. CT Scan
  {
    id: 4,
    numberStr: "04",
    titleEn: "CT Scan",
    titleMr: "सी.टी. स्कॅन (Computed Tomography)",
    titleHi: "सीटी स्कैन (कंप्यूटेड टोमोग्राफी)",
    descriptionEn: "CT scanner generations, slip rings, Hounsfield units, pitch & multi-slice CT.",
    descriptionMr: "सी.टी. जनरेशन्स, स्लिप रिंग्स, हाउन्सफिल्ड युनिट्स, पिच व मल्टी-स्लाईस सी.टी.",
    descriptionHi: "सीटी पीढ़ियां, स्लिप रिंग्स, हाउंसफील्ड इकाइयां, पिच और मल्टी-स्लाइस सीटी।",
    iconName: "Layers",
    color: "from-cyan-600 to-blue-800",
    section: "both",
    chapters: [
      {
        id: "ch_4_1",
        chapterNumber: "Chapter 4.1",
        titleEn: "CT Scanner Hardware & Generations",
        titleMr: "सी.टी. स्कॅनर रचना व १ ते ६ जनरेशन्स",
        titleHi: "सीटी स्कैनर हार्डवेयर और 1 से 6 पीढ़ियां",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "1st to 6th generation CT, slip ring technology, detector arrays.",
        descriptionMr: "पहिली ते सहावी सी.टी. जनरेशन, स्लिप रिंग तंत्रज्ञान व डिटेक्टर्स.",
        descriptionHi: "1ली से 6ठी पीढ़ी सीटी, स्लिप रिंग तकनीक और डिटेक्टर एरे।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_4_1_1",
            topicNumber: "Topic 1",
            titleEn: "CT Generations Evolution (1st-6th)",
            titleMr: "सी.टी. जनरेशन्सचा इतिहास व बदल",
            titleHi: "सीटी पीढ़ियों का विकास (1ली-6ठी)",
            estimatedTime: "12 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_4_1_2",
            topicNumber: "Topic 2",
            titleEn: "Slip Ring & Spiral/Helical CT",
            titleMr: "स्लिप रिंग व स्पायरल/हेलिकल सी.टी.",
            titleHi: "स्लिप रिंग और स्पाइरल/हेलिकल सीटी",
            estimatedTime: "13 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_4_2",
        chapterNumber: "Chapter 4.2",
        titleEn: "Hounsfield Units & Image Parameters",
        titleMr: "हाउन्सफिल्ड युनिट्स (HU), विंडो लेव्हल व विड्थ",
        titleHi: "हाउंसफील्ड इकाइयां (HU), विंडो लेवल एवं विड्थ",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "HU scale for bone (+1000), water (0), air (-1000), pitch calculations.",
        descriptionMr: "हाउन्सफिल्ड स्केल - हाडे (+१०००), पाणी (०), हवा (-१०००) व पिच गणना.",
        descriptionHi: "हाउंसफील्ड स्केल - हड्डी (+1000), जल (0), हवा (-1000) और पिच गणना।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_4_2_1",
            topicNumber: "Topic 1",
            titleEn: "Hounsfield Unit Scale Values",
            titleMr: "हाउन्सफिल्ड युनिट्सची मूल्ये व मानके",
            titleHi: "हाउंसफील्ड यूनिट स्केल मान",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_4_2_2",
            topicNumber: "Topic 2",
            titleEn: "Window Width (WW) & Window Level (WL)",
            titleMr: "विंडो विड्थ व विंडो लेव्हल सराव",
            titleHi: "विंडो विड्थ और विंडो लेवल अभ्यास",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 5. MRI
  {
    id: 5,
    numberStr: "05",
    titleEn: "MRI",
    titleMr: "एम.आर.आय. (Magnetic Resonance Imaging)",
    titleHi: "एमआरआई (मैग्नेटिक रेजोनेंस इमेजिंग)",
    descriptionEn: "Magnetic fields, RF pulses, T1 & T2 relaxation, MRI sequences, safety zones.",
    descriptionMr: "चुंबकीय क्षेत्र, आर.एफ. पल्स, T1/T2 रिलॅक्सेशन, एम.आर.आय. सिक्वेन्स व सुरक्षा झोन.",
    descriptionHi: "चुंबकीय क्षेत्र, आरएफ पल्स, T1 और T2 रिलैक्सेशन, एमआरआई अनुक्रम और सुरक्षा जोन।",
    iconName: "Radio",
    color: "from-purple-600 to-indigo-800",
    section: "both",
    chapters: [
      {
        id: "ch_5_1",
        chapterNumber: "Chapter 5.1",
        titleEn: "MRI Physics & Hydrogen Proton Spin",
        titleMr: "एम.आर.आय. भौतिकशास्त्र व हायड्रोजन प्रोटॉन स्पिन",
        titleHi: "एमआरआई भौतिकी और हाइड्रोजन प्रोटॉन स्पिन",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "Superconducting magnets (1.5T/3T), Larmor frequency, RF excitation.",
        descriptionMr: "सुपरकंडक्टिंग मॅग्नेट्स (1.5T/3T), लार्मर फ्रिक्वेन्सी व आर.एफ. पल्स.",
        descriptionHi: "सुपरकंडक्टिंग मैग्नेट (1.5T/3T), लार्मर आवृत्ति और आरएफ उत्तेजना।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_5_1_1",
            topicNumber: "Topic 1",
            titleEn: "Larmor Equation & Magnet Types",
            titleMr: "लार्मर समीकरण व मॅग्नेटचे प्रकार",
            titleHi: "लार्मर समीकरण और मैग्नेट के प्रकार",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_5_1_2",
            topicNumber: "Topic 2",
            titleEn: "T1 vs T2 Relaxation Physics",
            titleMr: "T1 व T2 रिलॅक्सेशनमधील फरक",
            titleHi: "T1 बनाम T2 रिलैक्सेशन भौतिकी",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_5_2",
        chapterNumber: "Chapter 5.2",
        titleEn: "MRI Safety & Zone Classification",
        titleMr: "एम.आर.आय. सुरक्षा नियम व ४ झोन वर्गीकरण",
        titleHi: "एमआरआई सुरक्षा और 4 जोन वर्गीकरण",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "Zones I-IV, Quench protocol, Ferromagnetic missile hazard, SAR limits.",
        descriptionMr: "झोन १ ते ४, क्वेन्च प्रोटोकॉल, फेरोमॅग्नेटिक धोके व SAR मर्यादा.",
        descriptionHi: "जोन I-IV, क्वेंच प्रोटोकॉल, फेरोमैग्नेटिक मिसाइल खतरा और एसएआर सीमाएं।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_5_2_1",
            topicNumber: "Topic 1",
            titleEn: "MRI Zones I, II, III & IV Protocol",
            titleMr: "एम.आर.आय. झोन १, २, ३ व ४ चे नियम",
            titleHi: "एमआरआई जोन I, II, III और IV प्रोटोकॉल",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_5_2_2",
            topicNumber: "Topic 2",
            titleEn: "Quench Procedure & Emergency RF Off",
            titleMr: "क्वेन्च प्रक्रिया व आणीबाणी बटणे",
            titleHi: "क्वेन्च प्रक्रिया और आपातकालीन बटन",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 6. Ultrasound
  {
    id: 6,
    numberStr: "06",
    titleEn: "Ultrasound",
    titleMr: "सोनोग्राफी व अल्ट्रासाउंड",
    titleHi: "सोनोग्राफी एवं अल्ट्रासाउंड",
    descriptionEn: "Piezoelectric transducers, sound frequencies, Doppler imaging & acoustic artifacts.",
    descriptionMr: "पिझो-इलेक्ट्रिक ट्रान्सड्यूसर, साऊंड फ्रिक्वेन्सी, डॉप्लर इमेजिंग व आर्टिफॅक्ट्स.",
    descriptionHi: "पीजोइलेक्ट्रिक ट्रांसड्यूसर, ध्वनि आवृत्तियां, डॉपलर इमेजिंग और कलाकृतियां।",
    iconName: "Activity",
    color: "from-teal-600 to-emerald-800",
    section: "both",
    chapters: [
      {
        id: "ch_6_1",
        chapterNumber: "Chapter 6.1",
        titleEn: "Ultrasound Physics & Transducers",
        titleMr: "अल्ट्रासाउंड फिजिक्स व ट्रान्सड्यूसर रचना",
        titleHi: "अल्ट्रासाउंड भौतिकी और ट्रांसड्यूसर संरचना",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "Frequency ranges (2-15 MHz), PZT crystals, A-Mode, B-Mode, M-Mode.",
        descriptionMr: "साऊंड फ्रिक्वेन्सी (२-१५ मेगाहर्ट्झ), PZT क्रिस्टल्स, B-मोड व M-मोड.",
        descriptionHi: "ध्वनि आवृत्ति (2-15 मेगाहर्ट्ज), पीज़ेडटी क्रिस्टल, बी-मोड और एम-मोड।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_6_1_1",
            topicNumber: "Topic 1",
            titleEn: "Piezoelectric Effect & PZT Crystals",
            titleMr: "पिझो-इलेक्ट्रिक इफेक्ट व PZT क्रिस्टल्स",
            titleHi: "पीजोइलेक्ट्रिक प्रभाव और PZT क्रिस्टल",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_6_1_2",
            topicNumber: "Topic 2",
            titleEn: "A-Mode, B-Mode & Color Doppler",
            titleMr: "A-मोड, B-मोड व कलर डॉप्लर",
            titleHi: "ए-मोड, बी-मोड और कलर डॉपलर",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 7. Radiation Protection
  {
    id: 7,
    numberStr: "07",
    titleEn: "Radiation Protection",
    titleMr: "रेडिएशन संरक्षण व जैविक धोके",
    titleHi: "विकिरण सुरक्षा एवं जैविक खतरे",
    descriptionEn: "ALARA rules, biological effects (Somatic/Genetic), LET, RBE, TLD, AERB rules.",
    descriptionMr: "अलारा तत्त्व, जैविक परिणाम, LET, RBE, टी.एल.डी. बॅज व AERB नियमावली.",
    descriptionHi: "अलारा नियम, जैविक प्रभाव, LET, RBE, टीएलडी बैज और AERB नियम।",
    iconName: "Shield",
    color: "from-rose-600 to-red-800",
    section: "both",
    chapters: [
      {
        id: "ch_7_1",
        chapterNumber: "Chapter 7.1",
        titleEn: "ALARA & Time-Distance-Shielding Rules",
        titleMr: "अलारा (ALARA) तत्त्व, वेळ, अंतर व शील्डिंग",
        titleHi: "अलारा (ALARA) नियम, समय, दूरी और परिरक्षण",
        categoryKey: "Technical: Radiation Protection & Hazards",
        descriptionEn: "Time minimization, distance inverse square law, primary/secondary lead shielding.",
        descriptionMr: "वेळ कमी करणे, अंतराचा इनव्हर्स स्क्वेअर लॉ, लेड ॲप्रॉन व बॅरियर्स.",
        descriptionHi: "समय कम करना, दूरी व्युत्क्रम वर्ग नियम, सीसा एप्रन और बैरियर।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_7_1_1",
            topicNumber: "Topic 1",
            titleEn: "ALARA Principle & Inverse Square Law",
            titleMr: "अलारा तत्त्व व इनव्हर्स स्क्वेअर लॉ",
            titleHi: "अलारा सिद्धांत और व्युत्क्रम वर्ग नियम",
            estimatedTime: "12 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_7_1_2",
            topicNumber: "Topic 2",
            titleEn: "Lead Equivalent Barriers & Aprons",
            titleMr: "लेड ॲप्रॉन व प्रायमरी बॅरियर्स (0.25mm/0.5mm)",
            titleHi: "लीड एप्रन और प्राथमिक बाधाएं",
            estimatedTime: "13 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_7_2",
        chapterNumber: "Chapter 7.2",
        titleEn: "Biological Effects of Radiation & Dosimetry",
        titleMr: "मानवी शरीरावरील जैविक परिणाम व TLD/OSL बॅजेस",
        titleHi: "विकिरण के जैविक प्रभाव और टीएलडी/ओएसएल बैज",
        categoryKey: "Technical: Radiation Protection & Hazards",
        descriptionEn: "Somatic, genetic, stochastic, deterministic effects, Sievert units, TLD badges.",
        descriptionMr: "सोमॅटिक व जेनेटिक परिणाम, स्टोकॅस्टिक व डिटरमिनिस्टिक इफेक्ट्स, TLD बॅजेस.",
        descriptionHi: "दैहिक और आनुवंशिक प्रभाव, स्टोकेस्टिक और नियतात्मक प्रभाव, टीएलडी बैज।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_7_2_1",
            topicNumber: "Topic 1",
            titleEn: "Stochastic vs Deterministic Effects",
            titleMr: "स्टोकॅस्टिक व डिटरमिनिस्टिक इफेक्ट्स",
            titleHi: "स्टोकेस्टिक बनाम नियतात्मक प्रभाव",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_7_2_2",
            topicNumber: "Topic 2",
            titleEn: "TLD Badges & CaSO4:Dy Phosphor",
            titleMr: "TLD बॅजची रचना व कॅल्शियम सल्फेट फॉस्फर",
            titleHi: "टीएलडी बैज संरचना और कैल्शियम सल्फेट",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 8. Radiographic Positioning
  {
    id: 8,
    numberStr: "08",
    titleEn: "Radiographic Positioning",
    titleMr: "रेडिओग्राफिक पोझिशनिंग व अ‍ॅनाटॉमिकल व्ह्यूज",
    titleHi: "रेडियोग्राफिक पोजिशनिंग एवं शारीरिक दृश्य",
    descriptionEn: "Body habitus, planes, upper/lower limb, chest, abdomen, spine & skull views.",
    descriptionMr: "शरीराचे प्लॅन्स, छाती, पोट, पाठीचा कणा, कपाळ व अवयवांचे क्ष-किरण पोझिशन्स.",
    descriptionHi: "शरीर संरचना, विमान, छाती, पेट, रीढ़ और कपाल की रेडियोग्राफिक स्थिति।",
    iconName: "Maximize2",
    color: "from-blue-700 to-cyan-800",
    section: "both",
    chapters: [
      {
        id: "ch_8_1",
        chapterNumber: "Chapter 8.1",
        titleEn: "Chest & Abdomen Radiography (PA/Lateral/Supine/Erect)",
        titleMr: "चेस्ट एक्स-रे (छाती PA/Lateral) व पोट (Abdomen/KUB) पोझिशनिंग",
        titleHi: "छाती (PA/लैटरल) और पेट (KUB) पोजिशनिंग",
        categoryKey: "Technical: Anatomy & Radiographic Positioning",
        descriptionEn: "Full inspiration, pneumothorax, supine vs erect abdomen for free gas.",
        descriptionMr: "छातीचे PA/Lateral व्ह्यूज, पोटातील गॅस तपासणीसाठी Erect Abdomen.",
        descriptionHi: "छाती के PA/लैटरल व्यू, पेट में मुक्त गैस के लिए स्तंभित पेट।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_8_1_1",
            topicNumber: "Topic 1",
            titleEn: "Chest PA View Protocol & Criteria",
            titleMr: "चेस्ट PA व्ह्यू घेण्याच्या अचूक पायऱ्या",
            titleHi: "छाती PA व्यू प्रोटोकॉल और मानदंड",
            estimatedTime: "12 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_8_1_2",
            topicNumber: "Topic 2",
            titleEn: "KUB & Erect Abdomen Free Air View",
            titleMr: "KUB व इरेक्ट अब्डॉमेन फ्री एअर व्ह्यू",
            titleHi: "केयूबी और इरेक्ट पेट फ्री एयर व्यू",
            estimatedTime: "13 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_8_2",
        chapterNumber: "Chapter 8.2",
        titleEn: "Extremities & Spine Positioning",
        titleMr: "हात, पाय, सांधे व पाठीचा कणा (Spine) पोझिशन्स",
        titleHi: "हाथ, पैर, जोड़ और रीढ़ की हड्डी पोजिशनिंग",
        categoryKey: "Technical: Anatomy & Radiographic Positioning",
        descriptionEn: "Hand, wrist, elbow, shoulder, knee, ankle, Cervical & Lumbar spine.",
        descriptionMr: "हात, मनगट, कोपर, खांदा, गुडगा, सर्व्हाइकल व लंबर मणक्यांचे क्ष-किरण.",
        descriptionHi: "हाथ, कलाई, कोहनी, कंधा, घुटना, सर्वाइकल और लंबर स्पाइन।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_8_2_1",
            topicNumber: "Topic 1",
            titleEn: "Upper & Lower Limb Projections",
            titleMr: "वरील व खालील अवयवांचे अ‍ॅनाटॉमिकल प्रक्षेप",
            titleHi: "ऊपरी और निचले अंगों के प्रक्षेपण",
            estimatedTime: "12 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_8_2_2",
            topicNumber: "Topic 2",
            titleEn: "Cervical, Thoracic & Lumbar Spine Views",
            titleMr: "सर्व्हाइकल, थोरॅसिक व लंबर मणके व्ह्यूज",
            titleHi: "सर्वाइकल, थोरासिक और लंबर स्पाइन व्यू",
            estimatedTime: "13 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 9. Contrast Media
  {
    id: 9,
    numberStr: "09",
    titleEn: "Contrast Media",
    titleMr: "कॉन्ट्रास्ट मिडिया व विशेष तपासण्या",
    titleHi: "कंट्रास्ट मीडिया एवं विशेष परीक्षाएं",
    descriptionEn: "Barium sulfate, iodinated contrast (ionic/non-ionic), IVU, reactions & emergency CPR.",
    descriptionMr: "बेरियम सल्फेट, आयोडीनयुक्त कॉन्ट्रास्ट, IVU, रिॲक्शन्स व आणीबाणी उपचार.",
    descriptionHi: "बेरियम सल्फेट, आयोडीन युक्त कंट्रास्ट, IVU, प्रतिक्रियाएं और आपातकालीन सीपीआर।",
    iconName: "Droplet",
    color: "from-amber-500 to-red-700",
    section: "both",
    chapters: [
      {
        id: "ch_9_1",
        chapterNumber: "Chapter 9.1",
        titleEn: "Barium & Iodinated Contrast Media",
        titleMr: "बेरियम सल्फेट व आयोडीनयुक्त कॉन्ट्रास्ट डाय",
        titleHi: "बेरियम सल्फेट और आयोडीन युक्त कंट्रास्ट डाई",
        categoryKey: "Technical: Films, Contrast Media & Digital DR/PACS",
        descriptionEn: "Barium swallow, meal, enema, ionic vs non-ionic low osmolar media.",
        descriptionMr: "बेरियम स्वालो, मील, एनेमा, आयॉनिक व नॉन-आयॉनिक कॉन्ट्रास्ट मिडिया.",
        descriptionHi: "बेरियम स्वॉलो, मील, एनिमा, आयोनिक और नॉन-आयोनिक कंट्रास्ट।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_9_1_1",
            topicNumber: "Topic 1",
            titleEn: "Barium Studies Protocol & Contraindications",
            titleMr: "बेरियम तपासणी पद्धती व प्रतिबंध",
            titleHi: "बेरियम अध्ययन प्रोटोकॉल और मतभेद",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_9_1_2",
            topicNumber: "Topic 2",
            titleEn: "Ionic vs Non-Ionic Osmolality Factors",
            titleMr: "आयॉनिक व नॉन-आयॉनिक मिडिया ऑस्मोलॅलिटी",
            titleHi: "आयोनिक बनाम नॉन-आयोनिक ऑस्मोलैलिटी",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 10. Anatomy
  {
    id: 10,
    numberStr: "10",
    titleEn: "Anatomy",
    titleMr: "मानवी शरीर रचना शास्त्र (Anatomy)",
    titleHi: "मानव शरीर रचना विज्ञान (एनाटॉमी)",
    descriptionEn: "Osteology, joints, thoracic organs, abdominal viscera, neuroanatomy.",
    descriptionMr: "हाडे, सांधे, छातीतील अवयव, पोटातील इंद्रिये व मज्जासंस्था रचना.",
    descriptionHi: "अस्थि विज्ञान, जोड़, वक्षीय अंग, उदर अंग और तंत्रिका तंत्र।",
    iconName: "Heart",
    color: "from-rose-500 to-pink-700",
    section: "both",
    chapters: [
      {
        id: "ch_10_1",
        chapterNumber: "Chapter 10.1",
        titleEn: "Skeletal System & Joint Anatomy",
        titleMr: "अस्थि संस्था (Skeletal System) व सांधे रचना",
        titleHi: "कंकाल तंत्र एवं जोड़ संरचना",
        categoryKey: "Technical: Anatomy & Radiographic Positioning",
        descriptionEn: "Axial vs appendicular skeleton, synovial joints, ossification centers.",
        descriptionMr: "अ‍ॅक्सियल व अपेंडिक्युलर सांगडा, सांध्यांचे प्रकार व ऑसिफिकेशन सेंटर्स.",
        descriptionHi: "अक्षीय और उपांगीय कंकाल, सिनोवियल जोड़ और अस्थीभवन केंद्र।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_10_1_1",
            topicNumber: "Topic 1",
            titleEn: "Axial & Appendicular Bone Names",
            titleMr: "शरीरातील २०६ हाडांचे वर्गीकरण व नावे",
            titleHi: "शरीर की 206 हड्डियों का वर्गीकरण",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_10_1_2",
            topicNumber: "Topic 2",
            titleEn: "Synovial & Cartilaginous Joints",
            titleMr: "सांध्यांचे प्रकार व सिनोव्हिअल फ्लुइड",
            titleHi: "जोड़ों के प्रकार और सिनोवियल द्रव",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 11. Pathology
  {
    id: 11,
    numberStr: "11",
    titleEn: "Pathology",
    titleMr: "रोगशास्त्र व विकृती विज्ञान (Pathology)",
    titleHi: "विकृति विज्ञान (पैथोलॉजी)",
    descriptionEn: "Fracture types, bone tumors, chest pathologies (TB/Pneumonia), arthritis.",
    descriptionMr: "हाडांचे फ्रॅक्चर्स, ट्युमर्स, फुफ्फुसांचे आजार (टीबी/न्यूमोनिया) व ऑस्टियोआर्थरायटिस.",
    descriptionHi: "अस्थि फ्रैक्चर, ट्यूमर, फेफड़ों के रोग (टीबी/निमोनिया) और गठिया।",
    iconName: "AlertTriangle",
    color: "from-red-600 to-amber-800",
    section: "both",
    chapters: [
      {
        id: "ch_11_1",
        chapterNumber: "Chapter 11.1",
        titleEn: "Radiographic Pathology & Fractures",
        titleMr: "क्ष-किरणांमधील आजार, फ्रॅक्चर्स व ट्युमर्स",
        titleHi: "रेडियोग्राफिक पैथोलॉजी और फ्रैक्चर",
        categoryKey: "Technical: Anatomy & Radiographic Positioning",
        descriptionEn: "Greenstick, Colles, Smith, Monteggia fractures, osteosarcoma, TB chest.",
        descriptionMr: "ग्रीनस्टिक, कॉलीस, स्मिथ फ्रॅक्चर्स, ऑस्टियोसारकोमा व छातीचा क्षयरोग.",
        descriptionHi: "ग्रीनस्टिक, कॉल्स, स्मिथ फ्रैक्चर, बोन ट्यूमर और टीबी।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_11_1_1",
            topicNumber: "Topic 1",
            titleEn: "Fracture Eponyms & Classification",
            titleMr: "फ्रॅक्चर्सचे प्रकार व प्रसिद्ध नावे",
            titleHi: "फ्रैक्चर के प्रकार और नामकरण",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_11_1_2",
            topicNumber: "Topic 2",
            titleEn: "Chest X-ray Pathology Features",
            titleMr: "चेस्ट एक्स-रे मधील आजारांचे निदान",
            titleHi: "छाती के एक्स-रे में पैथोलॉजी निदान",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 12. Patient Care
  {
    id: 12,
    numberStr: "12",
    titleEn: "Patient Care",
    titleMr: "रुग्ण काळजी व संवाद कौशल्ये",
    titleHi: "मरीज देखभाल एवं संचार कौशल",
    descriptionEn: "Patient identification, body mechanics, vital signs, pediatric & geriatric care.",
    descriptionMr: "रुग्ण ओळख, बॉडी मेकॅनिक्स, ताप व बीपी तपासणी, बाल व वृद्ध रुग्णांची काळजी.",
    descriptionHi: "मरीज पहचान, बॉडी मैकेनिक्स, वाइटल साइंस, बाल एवं वृद्ध देखभाल।",
    iconName: "UserCheck",
    color: "from-teal-500 to-blue-700",
    section: "both",
    chapters: [
      {
        id: "ch_12_1",
        chapterNumber: "Chapter 12.1",
        titleEn: "Patient Care Protocols & Safety",
        titleMr: "रुग्ण काळजी, सुरक्षितता व संवाद पद्धती",
        titleHi: "मरीज देखभाल प्रोटोकॉल और सुरक्षा",
        categoryKey: "Technical: Anatomy & Radiographic Positioning",
        descriptionEn: "2-identifier patient check, wheelchair transfer, IV line precautions.",
        descriptionMr: "रुग्णाची दोन पद्धतीने पडताळणी, व्हीलचेअर ट्रान्सफर व आयव्ही काळजी.",
        descriptionHi: "मरीज की पहचान जांच, व्हीलचेयर स्थानांतरण और सुरक्षा।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_12_1_1",
            topicNumber: "Topic 1",
            titleEn: "Patient Identification & Verification",
            titleMr: "रुग्ण नाव व केसपेपर अचूक पडताळणी",
            titleHi: "मरीज का नाम एवं केस पेपर सत्यापन",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_12_1_2",
            topicNumber: "Topic 2",
            titleEn: "Pediatric Immobilization & Pigg-O-Stat",
            titleMr: "लहान मुलांसाठी पिग-ओ-स्टॅट व हालचाल नियंत्रण",
            titleHi: "बाल रोगियों के लिए पिग-ओ-स्टैट तकनीक",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 13. Infection Control
  {
    id: 13,
    numberStr: "13",
    titleEn: "Infection Control",
    titleMr: "संसर्ग नियंत्रण व जैववैद्यकीय कचरा (BMW)",
    titleHi: "संक्रमण नियंत्रण एवं जैव चिकित्सा कचरा",
    descriptionEn: "Asepsis, hand hygiene, PPE, biomedical waste color codes (Yellow, Red, Blue, White).",
    descriptionMr: "निर्जंतुकीकरण, हात धुण्याच्या पायऱ्या, पीपीई किट व बायोमेडिकल वेस्ट कलर कोड्स.",
    descriptionHi: "अस्पताल की स्वच्छता, हाथ धोने के कदम, पीपीई किट और बायोमेडिकल कचरा।",
    iconName: "ShieldAlert",
    color: "from-amber-600 to-yellow-800",
    section: "both",
    chapters: [
      {
        id: "ch_13_1",
        chapterNumber: "Chapter 13.1",
        titleEn: "Biomedical Waste & Medical Asepsis",
        titleMr: "जैववैद्यकीय कचरा व्यवस्थापन (BMW) व निर्जंतुकीकरण",
        titleHi: "जैव चिकित्सा कचरा प्रबंधन (BMW) और कीटाणुशोधन",
        categoryKey: "Technical: Radiation Protection & Hazards",
        descriptionEn: "Yellow (anatomical), Red (recyclable plastic), Blue (glass), White (sharps).",
        descriptionMr: "पिवळी पिशवी (मानवी अवयव), लाल (प्लास्टिक), निळी (काच), पांढरा बॉक्स (सुया).",
        descriptionHi: "पीला बैग (मानव अंग), लाल (प्लास्टिक), नीला (कांच), सफेद बॉक्स (सुई)।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_13_1_1",
            topicNumber: "Topic 1",
            titleEn: "Biomedical Waste Color Coding Rules",
            titleMr: "पिवळा, लाल, निळा व पांढरा डबा नियम",
            titleHi: "पीला, लाल, नीला और सफेद डिब्बा नियम",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_13_1_2",
            topicNumber: "Topic 2",
            titleEn: "WHO Handwashing 6 Steps Protocol",
            titleMr: "जागतिक आरोग्य संघटनेचे ६ हात धुण्याचे टप्पे",
            titleHi: "डब्ल्यूएचओ हाथ धोने के 6 चरण",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 14. Hospital Management
  {
    id: 14,
    numberStr: "14",
    titleEn: "Hospital Management",
    titleMr: "रुग्णालय व रेडिओलॉजी विभाग व्यवस्थापन",
    titleHi: "अस्पताल एवं रेडियोलॉजी विभाग प्रबंधन",
    descriptionEn: "Department layout, workflow, record keeping, inventory & AERB approval.",
    descriptionMr: "रेडिओलॉजी विभाग रचना, कामगार सुरक्षा, नोंदवही व AERB परवानग्या.",
    descriptionHi: "रेडियोलॉजी विभाग लेआउट, सुरक्षा, रिकॉर्ड और एईआरबी अनुमोदन।",
    iconName: "Briefcase",
    color: "from-slate-700 to-slate-900",
    section: "both",
    chapters: [
      {
        id: "ch_14_1",
        chapterNumber: "Chapter 14.1",
        titleEn: "Radiology Department Layout & Workflow",
        titleMr: "क्ष-किरण विभाग रचना, कामगार सुरक्षा व नोंदवह्या",
        titleHi: "एक्स-रे विभाग संरचना और सुरक्षा लेआउट",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "Darkroom layout, lead-lined walls, eLORA portal registration.",
        descriptionMr: "डार्कसूम रचना, लेड-लाईन्ड भिंती व ई-लोरा (eLORA) पोर्टल नोंदणी.",
        descriptionHi: "डार्क रूम लेआउट, लीड दीवारें और ई-लोरा (eLORA) पोर्टल।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_14_1_1",
            topicNumber: "Topic 1",
            titleEn: "AERB eLORA Registration & Licences",
            titleMr: "AERB चे eLORA पोर्टल व परवाने",
            titleHi: "AERB ई-लोरा पोर्टल और लाइसेंस",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_14_1_2",
            topicNumber: "Topic 2",
            titleEn: "Register Maintenance & TLD Record Keeping",
            titleMr: "रेडिएशन नोंदवही व TLD डोस रेकॉर्ड",
            titleHi: "विकिरण रजिस्टर और टीएलडी डोज रिकॉर्ड",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 15. Legal & Ethics
  {
    id: 15,
    numberStr: "15",
    titleEn: "Legal & Ethics",
    titleMr: "कायदेशीर व नैतिक पैलू (HIPAA / Patient Rights)",
    titleHi: "कानूनी एवं नैतिक पहलू (मरीज के अधिकार)",
    descriptionEn: "Informed consent, torts, negligence, HIPAA, patient confidentiality.",
    descriptionMr: "संमतीपत्र, वैद्यकीय निष्काळजीपणा, रुग्णांचे गुप्तता हक्क व कायदे.",
    descriptionHi: "सहमति पत्र, चिकित्सा लापरवाही, गोपनीयता और मरीज अधिकार।",
    iconName: "Lock",
    color: "from-amber-700 to-orange-900",
    section: "both",
    chapters: [
      {
        id: "ch_15_1",
        chapterNumber: "Chapter 15.1",
        titleEn: "Informed Consent & Medical Ethics",
        titleMr: "संमतीपत्र (Informed Consent) व वैद्यकीय नैतिक मूल्ये",
        titleHi: "सहमति पत्र (Informed Consent) और चिकित्सा नैतिकता",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Expressed vs implied consent, assault, battery, false imprisonment.",
        descriptionMr: "लिखित व गृहीत संमतीपत्र, पेशंटची हक्क पायमल्ली व कायदे.",
        descriptionHi: "लिखित और अंतर्निहित सहमति, रोगी के अधिकार और कानून।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_15_1_1",
            topicNumber: "Topic 1",
            titleEn: "Expressed vs Implied Consent Rules",
            titleMr: "लिखित व तोंडी संमतीपत्राचे नियम",
            titleHi: "लिखित और मौखिक सहमति नियम",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_15_1_2",
            topicNumber: "Topic 2",
            titleEn: "Res Ipsa Loquitur & Respondeat Superior",
            titleMr: "वैद्यकीय न्यायालयात वापरले जाणारे कायदेशीर शब्द",
            titleHi: "चिकित्सा न्यायालय कानूनी शब्द",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 16. Computer
  {
    id: 16,
    numberStr: "16",
    titleEn: "Computer Knowledge",
    titleMr: "संगणक व वैद्यकीय माहिती तंत्रज्ञान",
    titleHi: "कंप्यूटर ज्ञान एवं चिकित्सा आईटी",
    descriptionEn: "Hardware, operating systems, MS Office, PACS, DICOM, RIS, HIS & networking.",
    descriptionMr: "संगणक भाग, विंडोज, एमएस ऑफिस, PACS, DICOM, RIS व नेटवर्क.",
    descriptionHi: "हार्डवेयर, ऑपरेटिंग सिस्टम, एमएस ऑफिस, PACS, DICOM, RIS।",
    iconName: "Monitor",
    color: "from-blue-600 to-indigo-900",
    section: "both",
    chapters: [
      {
        id: "ch_16_1",
        chapterNumber: "Chapter 16.1",
        titleEn: "Computer Hardware & Hospital Informatics",
        titleMr: "संगणक हार्डवेअर व हॉस्पिटल इन्फॉर्मेटिक्स (HIS/RIS)",
        titleHi: "कंप्यूटर हार्डवेयर और अस्पताल सूचना विज्ञान",
        categoryKey: "Technical: Films, Contrast Media & Digital DR/PACS",
        descriptionEn: "CPU, RAM, Storage, PACS servers, DICOM 3.0 image standards.",
        descriptionMr: "सीपीयू, रॅम, स्टोरेज, PACS सर्व्हर्स व डायकॉम ३.० मानके.",
        descriptionHi: "सीपीयू, रैम, स्टोरेज, PACS सर्वर और डायकॉम 3.0 मानक।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_16_1_1",
            topicNumber: "Topic 1",
            titleEn: "HIS, RIS & PACS Integration",
            titleMr: "हॉस्पिटल व रेडिओलॉजी इन्फॉर्मेटिक्स",
            titleHi: "अस्पताल और रेडियोलॉजी सूचना प्रणाली",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_16_1_2",
            topicNumber: "Topic 2",
            titleEn: "DICOM File Format & Tagging",
            titleMr: "डायकॉम (DICOM) फाईल फॉरमॅट व टॅग्ज",
            titleHi: "डायकॉम (DICOM) फ़ाइल स्वरूप और टैगिंग",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 17. General Science
  {
    id: 17,
    numberStr: "17",
    titleEn: "General Science",
    titleMr: "सामान्य विज्ञान (General Science)",
    titleHi: "सामान्य विज्ञान (General Science)",
    descriptionEn: "Physics, Chemistry, Biology & Physiology basic questions.",
    descriptionMr: "मूलभूत भौतिकशास्त्र, रसायनशास्त्र व जीवशास्त्र प्रश्नसंच.",
    descriptionHi: "मूलभूत भौतिकी, रसायन विज्ञान और जीव विज्ञान प्रश्नोत्तर।",
    iconName: "BookOpen",
    color: "from-emerald-600 to-green-800",
    section: "both",
    chapters: [
      {
        id: "ch_17_1",
        chapterNumber: "Chapter 17.1",
        titleEn: "Physics & Biological Science Concepts",
        titleMr: "सामान्य भौतिकशास्त्र व मानवी शरीरक्रियाशास्त्र",
        titleHi: "सामान्य भौतिकी और मानव शरीर क्रिया विज्ञान",
        categoryKey: "Non-Technical: Marathi, English, GK & Reasoning",
        descriptionEn: "Units, work, power, energy, human cell biology & vitamins.",
        descriptionMr: "एकके, कार्य, ऊर्जा, पेशीशास्त्र व जीवनसत्त्वे.",
        descriptionHi: "इकाइयां, कार्य, ऊर्जा, कोशिका विज्ञान और विटामिन।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_17_1_1",
            topicNumber: "Topic 1",
            titleEn: "SI Units & Physics Measurements",
            titleMr: "एस.आय. एकके व भौतिकशास्त्रातील मानके",
            titleHi: "एसआई इकाइयां और भौतिक माप",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_17_1_2",
            topicNumber: "Topic 2",
            titleEn: "Human Physiology & Vitamins Table",
            titleMr: "मानवी शरीरशास्त्र व जीवनसत्त्व तक्ता",
            titleHi: "मानव शरीर विज्ञान और विटामिन तालिका",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 18. English
  {
    id: 18,
    numberStr: "18",
    titleEn: "English Grammar",
    titleMr: "इंग्रजी व्याकरण व शब्दसंग्रह",
    titleHi: "अंग्रेजी व्याकरण एवं शब्द संग्रह",
    descriptionEn: "Grammar, tenses, active/passive voice, direct/indirect speech, idioms.",
    descriptionMr: "व्याकरण, काळ, व्हॉईस, डायरेक्ट/इन्डायरेक्ट स्पीच, फ्रॅजेस व व्होकॅब्युलरी.",
    descriptionHi: "व्याकरण, काल, एक्टिव/पैसिव वॉइस, प्रत्यक्ष/अप्रत्यक्ष कथन।",
    iconName: "Globe",
    color: "from-indigo-600 to-blue-800",
    section: "both",
    chapters: [
      {
        id: "ch_18_1",
        chapterNumber: "Chapter 18.1",
        titleEn: "English Grammar & Vocabulary",
        titleMr: "इंग्रजी व्याकरण व शब्दसंग्रह (Section 1 & 2)",
        titleHi: "अंग्रेजी व्याकरण और शब्दावली",
        categoryKey: "English Language",
        descriptionEn: "Tenses, articles, prepositions, synonyms, antonyms & one-word substitutes.",
        descriptionMr: "काळ, आर्टिकल्स, प्रेपॉझिशन्स, समानार्थी व विरुद्धार्थी शब्द.",
        descriptionHi: "काल, आर्टिकल्स, प्रीपोजिशन, पर्यायवाची और विलोम शब्द।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_18_1_1",
            topicNumber: "Topic 1",
            titleEn: "Tenses & Prepositions Practice",
            titleMr: "काळ व प्रेपॉझिशन्स सराव",
            titleHi: "काल और प्रीपोजिशन अभ्यास",
            estimatedTime: "12 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_18_1_2",
            topicNumber: "Topic 2",
            titleEn: "Synonyms, Antonyms & Idioms",
            titleMr: "समानार्थी, विरुद्धार्थी व मनी",
            titleHi: "पर्यायवाची, विलोम और मुहावरे",
            estimatedTime: "13 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 19. Marathi
  {
    id: 19,
    numberStr: "19",
    titleEn: "Marathi Language",
    titleMr: "मराठी व्याकरण व शब्दसंग्रह (Section 1 Special)",
    titleHi: "मराठी भाषा और व्याकरण",
    descriptionEn: "Marathi grammar, Samas, Prayog, Alankar, Mhani & Vakyaprachar.",
    descriptionMr: "मराठी व्याकरण, समास, प्रयोग, अलंकार, म्हणी व वाक्यप्रचार.",
    descriptionHi: "मराठी व्याकरण, समास, प्रयोग, अलंकार और मुहावरे।",
    iconName: "FileText",
    color: "from-orange-600 to-amber-700",
    section: "sec1",
    chapters: [
      {
        id: "ch_19_1",
        chapterNumber: "Chapter 19.1",
        titleEn: "Marathi Grammar & Vocabulary",
        titleMr: "मराठी व्याकरण, प्रयोग, समास व म्हणी (१५ प्रश्न / ३० गुण)",
        titleHi: "मराठी व्याकरण और शब्दावली (विशेष)",
        categoryKey: "Marathi Language (मराठी भाषा)",
        descriptionEn: "Comprehensive Marathi grammar for Maharashtra Government Scientific Officer Exam.",
        descriptionMr: "सार्वजनिक आरोग्य विभाग गट 'क' परीक्षेसाठी संपूर्ण मराठी व्याकरण प्रश्नसंच.",
        descriptionHi: "महाराष्ट्र सार्वजनिक स्वास्थ्य विभाग परीक्षा के लिए संपूर्ण मराठी व्याकरण।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_19_1_1",
            topicNumber: "Topic 1",
            titleEn: "Marathi Samas, Prayog & Alankar",
            titleMr: "समास, प्रयोग व अलंकार सराव",
            titleHi: "समास, प्रयोग और अलंकार अभ्यास",
            estimatedTime: "12 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_19_1_2",
            topicNumber: "Topic 2",
            titleEn: "Mhani, Vakyaprachar & Shabdasangrah",
            titleMr: "म्हणी, वाक्प्रचार व शुद्ध शब्द",
            titleHi: "मुहावरे, कहावतें और शब्दावली",
            estimatedTime: "13 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 20. Aptitude
  {
    id: 20,
    numberStr: "20",
    titleEn: "Quantitative & Logical Aptitude",
    titleMr: "अंकगणित व बौद्धिक चाचणी",
    titleHi: "अंकगणित एवं तर्कशक्ति",
    descriptionEn: "Number series, coding-decoding, blood relations, profit-loss, percentages.",
    descriptionMr: "संख्यामाला, कोडिंग-डिकोडिंग, नातेसंबंध, नफा-तोटा व टक्केवारी.",
    descriptionHi: "संख्या श्रृंखला, कोडिंग-डिकोडिंग, रक्त संबंध, लाभ-हानि, प्रतिशत।",
    iconName: "Award",
    color: "from-blue-600 to-teal-800",
    section: "both",
    chapters: [
      {
        id: "ch_20_1",
        chapterNumber: "Chapter 20.1",
        titleEn: "Logical Reasoning & Quantitative Aptitude",
        titleMr: "बौद्धिक चाचणी, कोडिंग-डिकोडिंग व अंकगणित",
        titleHi: "तर्कशक्ति, कोडिंग-डिकोडिंग और अंकगणित",
        categoryKey: "Logical Ability & Mathematics (बौद्धिक चाचणी)",
        descriptionEn: "TCS/IBPS pattern reasoning and numerical problem solving.",
        descriptionMr: "टीसीएस/आयबीपीएस पॅटर्ननुसार बुद्धिमत्ता व गणिताचा सराव.",
        descriptionHi: "टीसीएस/आईबीपीएस पैटर्न तर्कशक्ति और गणितीय अभ्यास।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_20_1_1",
            topicNumber: "Topic 1",
            titleEn: "Coding-Decoding & Blood Relations",
            titleMr: "कोडिंग-डिकोडिंग व नातेसंबंध गणिते",
            titleHi: "कोडिंग-डिकोडिंग और रक्त संबंध",
            estimatedTime: "12 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_20_1_2",
            topicNumber: "Topic 2",
            titleEn: "Percentages, Profit-Loss & Ratio",
            titleMr: "टक्केवारी, नफा-तोटा व गुणोत्तर",
            titleHi: "प्रतिशतता, लाभ-हानि और अनुपात",
            estimatedTime: "13 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 21. Current Affairs
  {
    id: 21,
    numberStr: "21",
    titleEn: "Current Affairs",
    titleMr: "चालू घडामोडी (Current Affairs)",
    titleHi: "समसामयिक विषय (करंट अफेयर्स)",
    descriptionEn: "National health policies, new medical technologies, awards & health schemes.",
    descriptionMr: "राष्ट्रीय आरोग्य धोरणे, नवीन वैद्यकीय शोध, पुरस्कार व आरोग्य योजना.",
    descriptionHi: "राष्ट्रीय स्वास्थ्य नीतियां, नई चिकित्सा तकनीकें, पुरस्कार और योजनाएं।",
    iconName: "Sparkles",
    color: "from-amber-500 to-yellow-700",
    section: "both",
    chapters: [
      {
        id: "ch_21_1",
        chapterNumber: "Chapter 21.1",
        titleEn: "National Health Schemes & Awards",
        titleMr: "आरोग्य क्षेत्रातील चालू घडामोडी व सरकारी योजना",
        titleHi: "स्वास्थ्य क्षेत्र समसामयिकी और सरकारी योजनाएं",
        categoryKey: "General Knowledge (सामान्य ज्ञान)",
        descriptionEn: "Ayushman Bharat, Mahatma Jyotirao Phule Jan Arogya Yojana, medical news.",
        descriptionMr: "आयुष्मान भारत, महात्मा जोतीराव फुले जन आरोग्य योजना व चालू माहिती.",
        descriptionHi: "आयुष्मान भारत, महात्मा ज्योतिराव फुले जन आरोग्य योजना और स्वास्थ्य समाचार।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_21_1_1",
            topicNumber: "Topic 1",
            titleEn: "Ayushman Bharat & Health Initiatives",
            titleMr: "आयुष्मान भारत व राष्ट्रीय आरोग्य अभियान",
            titleHi: "आयुष्मान भारत और राष्ट्रीय स्वास्थ्य मिशन",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_21_1_2",
            topicNumber: "Topic 2",
            titleEn: "Recent Science & Medical Awards",
            titleMr: "वैद्यकीय क्षेत्रातील नोबेल व राष्ट्रीय पुरस्कार",
            titleHi: "चिकित्सा क्षेत्र के नोबेल और राष्ट्रीय पुरस्कार",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 22. General Knowledge
  {
    id: 22,
    numberStr: "22",
    titleEn: "General Knowledge",
    titleMr: "सामान्य ज्ञान (General Knowledge)",
    titleHi: "सामान्य ज्ञान (General Knowledge)",
    descriptionEn: "History, Geography, Indian Constitution, Public Health Infrastructure.",
    descriptionMr: "इतिहास, भूगोल, भारताची राज्यघटना व सार्वजनिक आरोग्य यंत्रणा.",
    descriptionHi: "इतिहास, भूगोल, भारतीय संविधान और जन स्वास्थ्य संरचना।",
    iconName: "BookOpen",
    color: "from-blue-700 to-indigo-900",
    section: "both",
    chapters: [
      {
        id: "ch_22_1",
        chapterNumber: "Chapter 22.1",
        titleEn: "Indian Constitution & Maharashtra History",
        titleMr: "भारतीय राज्यघटना, भूगोल व महाराष्ट्राचा इतिहास",
        titleHi: "भारतीय संविधान, भूगोल और इतिहास",
        categoryKey: "General Knowledge (सामान्य ज्ञान)",
        descriptionEn: "Fundamental Rights, Panchayat Raj, public health administration.",
        descriptionMr: "मूलभूत हक्क, पंचायत राज व सार्वजनिक आरोग्य प्रशासन.",
        descriptionHi: "मौलिक अधिकार, पंचायत राज और जन स्वास्थ्य प्रशासन।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_22_1_1",
            topicNumber: "Topic 1",
            titleEn: "Indian Constitution Articles on Health",
            titleMr: "राज्यघटनेतील आरोग्याविषयीची कलमे",
            titleHi: "संविधान में स्वास्थ्य संबंधी अनुच्छेद",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_22_1_2",
            topicNumber: "Topic 2",
            titleEn: "Maharashtra Health Department Setup",
            titleMr: "महाराष्ट्र सार्वजनिक आरोग्य विभाग रचना",
            titleHi: "महाराष्ट्र स्वास्थ्य विभाग संरचना",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 23. Communication Skills
  {
    id: 23,
    numberStr: "23",
    titleEn: "Communication Skills",
    titleMr: "संवाद कौशल्ये व रुग्णालयीन व्यवहार",
    titleHi: "संचार कौशल एवं अस्पताल व्यवहार",
    descriptionEn: "Verbal, non-verbal communication, empathy, patient rapport, team ethics.",
    descriptionMr: "शाब्दिक व अशाब्दिक संवाद, सहानुभूती, रुग्णांशी संवाद व सहकाऱ्यांशी समन्वय.",
    descriptionHi: "मौखिक, अमौखिक संचार, सहानुभूति, रोगी संबंध और टीम भावना।",
    iconName: "UserCheck",
    color: "from-teal-600 to-cyan-800",
    section: "both",
    chapters: [
      {
        id: "ch_23_1",
        chapterNumber: "Chapter 23.1",
        titleEn: "Healthcare Communication & Empathy",
        titleMr: "वैद्यकीय क्षेत्रातील संवाद कौशल्य व सहानुभूती",
        titleHi: "स्वास्थ्य सेवा में संचार कौशल और सहानुभूति",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "De-escalating anxious patients, explaining imaging procedures clearly.",
        descriptionMr: "घाबरलेल्या रुग्णांना धीर देणे व क्ष-किरण तपासणी सोप्या भाषेत समजावणे.",
        descriptionHi: "चिंतित रोगियों को आश्वस्त करना और इमेजिंग प्रक्रिया समझाना।",
        estimatedTime: "20 Mins",
        questionCount: 30,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_23_1_1",
            topicNumber: "Topic 1",
            titleEn: "Patient Procedure Explanation Steps",
            titleMr: "तपासणीपूर्वी रुग्णाला माहिती देण्याच्या पायऱ्या",
            titleHi: "जांच से पहले रोगी को जानकारी देने के कदम",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          },
          {
            id: "tp_23_1_2",
            topicNumber: "Topic 2",
            titleEn: "Non-Verbal Cues & Active Listening",
            titleMr: "अशाब्दिक संवाद व लक्षपूर्वक ऐकणे",
            titleHi: "अमौखिक संकेत और ध्यान से सुनना",
            estimatedTime: "10 Mins",
            questionCount: 15,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 24. Emergency Medicine
  {
    id: 24,
    numberStr: "24",
    titleEn: "Emergency Medicine",
    titleMr: "आणीबाणी वैद्यकीय मदत व सीपीआर (CPR)",
    titleHi: "आपातकालीन चिकित्सा एवं सीपीआर (CPR)",
    descriptionEn: "Anaphylactic shock management, CPR steps (C-A-B), oxygen therapy, crash cart.",
    descriptionMr: "ॲनाफायलॅक्टिक शॉक उपचार, सीपीआर पायऱ्या (C-A-B), ऑक्सिजन व क्रॅश कार्ट.",
    descriptionHi: "एनाफिलेक्टिक शॉक प्रबंधन, सीपीआर कदम (C-A-B), ऑक्सीजन थेरेपी।",
    iconName: "HeartPulse",
    color: "from-red-600 to-rose-800",
    section: "both",
    chapters: [
      {
        id: "ch_24_1",
        chapterNumber: "Chapter 24.1",
        titleEn: "Anaphylaxis, Shock & CPR Protocols",
        titleMr: "ॲनाफायलॅक्टिक शॉक, CPR व आणीबाणी किट",
        titleHi: "एनाफिलेक्टिक शॉक, सीपीआर और इमरजेंसी किट",
        categoryKey: "Technical: Films, Contrast Media & Digital DR/PACS",
        descriptionEn: "Adrenaline 1:1000 dosage, chest compressions 100-120/min, AED operation.",
        descriptionMr: "ॲड्रेनालीन इंजेक्शन डोस, छातीवर दाब (१००-१२०/मिनिट) व एइडी (AED) मशिन.",
        descriptionHi: "एड्रेनालिन इंजेक्शन खुराक, छाती संपीड़न (100-120/मिनट) और AED।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_24_1_1",
            topicNumber: "Topic 1",
            titleEn: "AHA CPR Guidelines C-A-B Sequence",
            titleMr: "अमेरिकन हार्ट असोसिएशन सीपीआर मार्गदर्शक तत्त्वे",
            titleHi: "अमेरिकन हार्ट एसोसिएशन सीपीआर दिशानिर्देश",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_24_1_2",
            topicNumber: "Topic 2",
            titleEn: "Contrast Reaction Drugs & Crash Cart",
            titleMr: "कॉन्ट्रास्ट रिॲक्शन औषधे व क्रॅश कार्ट ट्रे",
            titleHi: "कंट्रास्ट रिएक्शन दवाएं और क्रैश कार्ट",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 25. Quality Assurance
  {
    id: 25,
    numberStr: "25",
    titleEn: "Quality Assurance",
    titleMr: "गुणवत्ता नियंत्रण व उपकरणांची तपासणी (QC Tests)",
    titleHi: "गुणवत्ता आश्वासन एवं उपकरण जांच (QC Tests)",
    descriptionEn: "Collimator alignment, focal spot test, kVp accuracy, line pair resolution, artifacts.",
    descriptionMr: "कॉलिमेटर अलायन्मेंट, फोकल स्पॉट टेस्ट, kVp अचूकता, आर्टिफॅक्ट्स शोध.",
    descriptionHi: "कॉलीमीटर संरेखण, फोकल स्पॉट परीक्षण, kVp सटीकता, कलाकृतियां।",
    iconName: "CheckCircle2",
    color: "from-blue-600 to-indigo-800",
    section: "both",
    chapters: [
      {
        id: "ch_25_1",
        chapterNumber: "Chapter 25.1",
        titleEn: "X-Ray Quality Control Tests & Artifacts",
        titleMr: "एक्स-रे गुणवत्ता चाचण्या व आर्टिफॅक्ट्स निवारण",
        titleHi: "एक्स-रे गुणवत्ता नियंत्रण परीक्षण एवं कलाकृतियां",
        categoryKey: "Technical: Films, Contrast Media & Digital DR/PACS",
        descriptionEn: "Pinhole camera, star pattern, coin test for light field, grid cutoff artifacts.",
        descriptionMr: "पिनहोल कॅमेरा, कॉईन टेस्ट, ग्रिड कट-ऑफ व फिल्म आर्टिफॅक्ट्स.",
        descriptionHi: "पिनहोल कैमरा, कॉइन टेस्ट, ग्रिड कट-ऑफ और फिल्म आर्टिफैक्ट्स।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_25_1_1",
            topicNumber: "Topic 1",
            titleEn: "Focal Spot & Collimator Alignment QC",
            titleMr: "फोकल स्पॉट व कॉलिमेटर अलायन्मेंट चाचण्या",
            titleHi: "फोकल स्पॉट और कॉलीमीटर संरेखण परीक्षण",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_25_1_2",
            topicNumber: "Topic 2",
            titleEn: "Processing & Digital Artifact Identification",
            titleMr: "इमेज व डिजिटल आर्टिफॅक्ट्स ओळखणे",
            titleHi: "इमेज और डिजिटल आर्टिफैक्ट पहचान",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 26. Digital Radiography
  {
    id: 26,
    numberStr: "26",
    titleEn: "Digital Radiography",
    titleMr: "डिजिटल रेडिओोग्राफी (CR / DR / PACS)",
    titleHi: "डिजिटल रेडियोग्राफी (CR / DR / PACS)",
    descriptionEn: "CR imaging plates, direct/indirect DR flat panel detectors, PACS archiving, DICOM.",
    descriptionMr: "सी.आर. प्लेट्स, डायरेक्ट/इनडायरेक्ट DR डिटेक्टर्स, PACS सर्व्हर व डायकॉम.",
    descriptionHi: "सीआर प्लेट्स, डायरेक्ट/इनडायरेक्ट डीआर डिटेक्टर, PACS सर्वर और डायकॉम।",
    iconName: "Cpu",
    color: "from-cyan-600 to-blue-800",
    section: "both",
    chapters: [
      {
        id: "ch_26_1",
        chapterNumber: "Chapter 26.1",
        titleEn: "CR vs DR Physics & PACS Networks",
        titleMr: "सी.आर. (CR), डी.आर. (DR) व पी.ए.सी.एस. (PACS) नेटवर्क",
        titleHi: "सीआर, डीआर और पीएसीएस नेटवर्क भौतिकी",
        categoryKey: "Technical: Films, Contrast Media & Digital DR/PACS",
        descriptionEn: "Barium fluorohalide, TFT arrays, amorphous selenium, CsI scintillators.",
        descriptionMr: "बेरियम फ्लोरोहॅलाईड फॉस्फर, TFT अ‍ॅरे, अमोर्फस सेलेनियम व सिझियम आयोडाईड.",
        descriptionHi: "बेरियम फ्लोरोहैलाइड, टीएफटी एरे, अनाकार सेलेनियम और सीज़ियम आयोडाइड।",
        estimatedTime: "25 Mins",
        questionCount: 40,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_26_1_1",
            topicNumber: "Topic 1",
            titleEn: "CR Photostimulable Phosphor (PSP) Plates",
            titleMr: "सी.आर. इमेजिंग प्लेट्स व लेझर स्कॅनिंग",
            titleHi: "सीआर इमेजिंग प्लेट्स और लेजर स्कैनिंग",
            estimatedTime: "12 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          },
          {
            id: "tp_26_1_2",
            topicNumber: "Topic 2",
            titleEn: "Direct vs Indirect Flat Panel Detectors",
            titleMr: "डायरेक्ट व इनडायरेक्ट DR फ्लॅट पॅनेल",
            titleHi: "डायरेक्ट बनाम इनडायरेक्ट डीआर फ्लैट पैनल",
            estimatedTime: "13 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 27. Advanced Modalities
  {
    id: 27,
    numberStr: "27",
    titleEn: "Advanced Modalities",
    titleMr: "प्रगत मोडॅलिटीज (Fluoroscopy / Mammography / C-Arm)",
    titleHi: "उन्नत तकनीकें (फ्लोरोस्कोपी / मैमोग्राफी / सी-आर्म)",
    descriptionEn: "Image intensifier tubes, C-Arm operation, Mammography low-kVp, DEXA.",
    descriptionMr: "इमेज इंटेंसिफायर ट्युब, सी-आर्म ऑपरेटिंग, मॅमोग्राफी व DEXA स्कॅन.",
    descriptionHi: "इमेज इंटेंसिफायर ट्यूब, सी-आर्म, मैमोग्राफी और डेक्सा स्कैन।",
    iconName: "Layers",
    color: "from-purple-600 to-indigo-800",
    section: "both",
    chapters: [
      {
        id: "ch_27_1",
        chapterNumber: "Chapter 27.1",
        titleEn: "Fluoroscopy, C-Arm & Mammography",
        titleMr: "फ्लोरोस्कोपी, सी-आर्म (C-Arm) व मॅमोग्राफी",
        titleHi: "फ्लोरोस्कोपी, सी-आर्म और मैमोग्राफी",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "Flux gain, minification gain, Molybdenum target, low-kVp (25-30 kVp).",
        descriptionMr: "ब्राईटनेस गेन, सी-आर्म ऑपरेटिंग, मोलिब्डेनम टार्गेट व कमी व्होल्टेज मॅमोग्राफी.",
        descriptionHi: "ब्राइटनेस लाभ, सी-आर्म ऑपरेशन, मोलिब्डेनम टारगेट और मैमोग्राफी।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_27_1_1",
            topicNumber: "Topic 1",
            titleEn: "Image Intensifier Tube Construction & Gains",
            titleMr: "इमेज इंटेंसिफायर ट्युब रचना व ब्राईटनेस गेन",
            titleHi: "इमेज इंटेंसिफायर ट्यूब संरचना और लाभ",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_27_1_2",
            topicNumber: "Topic 2",
            titleEn: "Mammography Physics & Compression Paddle",
            titleMr: "मॅमोग्राफी भौतिकशास्त्र व कम्प्रेशन पॅडल",
            titleHi: "मैमोग्राफी भौतिकी और कम्प्रेशन पैडल",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 28. Nuclear Medicine
  {
    id: 28,
    numberStr: "28",
    titleEn: "Nuclear Medicine",
    titleMr: "न्यूक्लियर मेडिसिन व गॅमा कॅमेरा (Nuclear Medicine)",
    titleHi: "न्यूक्लियर मेडिसिन एवं गामा कैमरा",
    descriptionEn: "Radioisotopes (Tc-99m, I-131), Gamma camera, SPECT, PET-CT scan principles.",
    descriptionMr: "रेडिओआयसोटोप्स (Technetium-99m), गॅमा कॅमेरा, SPECT व PET-CT स्कॅन.",
    descriptionHi: "रेडियोआइसोटोप (Technetium-99m), गामा कैमरा, SPECT और PET-CT स्कैन।",
    iconName: "Radio",
    color: "from-amber-600 to-yellow-800",
    section: "both",
    chapters: [
      {
        id: "ch_28_1",
        chapterNumber: "Chapter 28.1",
        titleEn: "Radioisotopes, Gamma Camera & PET-CT",
        titleMr: "रेडिओआयसोटोप्स, गॅमा कॅमेरा, SPECT व PET-CT",
        titleHi: "रेडियोआइसोटोप, गामा कैमरा, SPECT और PET-CT",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "Technetium-99m generator, NaI(Tl) crystal, photomultiplier tubes, F-18 FDG.",
        descriptionMr: "टेक्नेशियम जनरेटर, सोडियम आयोडाईड क्रिस्टल, फोटोमल्टिप्लायर ट्युब्स व FDG.",
        descriptionHi: "टेक्नेटियम जनरेटर, सोडियम आयोडाइड क्रिस्टल और FDG PET।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_28_1_1",
            topicNumber: "Topic 1",
            titleEn: "Technetium-99m Generator & Half-Life (6 Hours)",
            titleMr: "टेक्नेशियम-९९m जनरेटर व अर्धआयुष्य (६ तास)",
            titleHi: "टेक्नेटियम-99m जनरेटर और अर्ध-आयु (6 घंटे)",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_28_1_2",
            topicNumber: "Topic 2",
            titleEn: "Gamma Camera Photomultiplier Tubes & PET",
            titleMr: "गॅमा कॅमेरा PMT ट्युब्स व PET-CT तत्त्व",
            titleHi: "गामा कैमरा पीएमटी ट्यूब और पेट-सीटी सिद्धांत",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 29. Radiotherapy
  {
    id: 29,
    numberStr: "29",
    titleEn: "Radiotherapy",
    titleMr: "रेडिओथेरपी व लिनिअर अ‍ॅक्सिलरेटर (LINAC)",
    titleHi: "रेडियोथेरेपी एवं लीनियर एक्सीलेटर (LINAC)",
    descriptionEn: "Teletherapy (Cobalt-60), Linear Accelerator (LINAC), Brachytherapy, treatment planning.",
    descriptionMr: "टेलिथेरपी (कोबाल्ट-६०), लिनिअर अ‍ॅक्सिलरेटर (LINAC), ब्रॅकीथेरपी व ट्रीटमेंट प्लॅनिंग.",
    descriptionHi: "टेलीथेरेपी (कोबाल्ट-60), लीनियर एक्सीलेटर (LINAC), ब्रैकीथेरेपी।",
    iconName: "Zap",
    color: "from-rose-600 to-pink-800",
    section: "both",
    chapters: [
      {
        id: "ch_29_1",
        chapterNumber: "Chapter 29.1",
        titleEn: "Teletherapy LINAC & Brachytherapy Physics",
        titleMr: "लिनिअर अ‍ॅक्सिलरेटर (LINAC), कोबाल्ट-६० व ब्रॅकीथेरपी",
        titleHi: "लीनियर एक्सीलेटर (LINAC), कोबाल्ट-60 और ब्रैकीथेरेपी",
        categoryKey: "Technical: Advanced Modalities CT/MRI/Radiotherapy",
        descriptionEn: "Cobalt-60 gamma energy (1.25 MeV), LINAC electron beam, Ir-192 seeds.",
        descriptionMr: "कोबाल्ट-६० गॅमा ऊर्जा (१.२५ MeV), LINAC इलेक्ट्रॉन्स व इरिडियम बीज.",
        descriptionHi: "कोबाल्ट-60 गामा ऊर्जा (1.25 MeV), LINAC इलेक्ट्रॉन बीम और इरिडियम सीज।",
        estimatedTime: "25 Mins",
        questionCount: 35,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_29_1_1",
            topicNumber: "Topic 1",
            titleEn: "Cobalt-60 vs LINAC Beam Characteristics",
            titleMr: "कोबाल्ट-६० व LINAC किरणांचे गुणधर्म",
            titleHi: "कोबाल्ट-60 बनाम LINAC किरण विशेषताएं",
            estimatedTime: "12 Mins",
            questionCount: 18,
            freeQuestionsCount: 15
          },
          {
            id: "tp_29_1_2",
            topicNumber: "Topic 2",
            titleEn: "Brachytherapy Seed Implantation Rules",
            titleMr: "ब्रॅकीथेरपी व आतून दिले जाणारे रेडिएशन",
            titleHi: "ब्रैकीथेरेपी और आंतरिक विकिरण तकनीक",
            estimatedTime: "13 Mins",
            questionCount: 17,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  },

  // 30. Complete Mock Tests
  {
    id: 30,
    numberStr: "30",
    titleEn: "Complete Grand Mock Tests",
    titleMr: "संपूर्ण सराव परीक्षा (२०० गुण महा प्रश्नसंच)",
    titleHi: "संपूर्ण मॉक टेस्ट सीरीज (200 अंक परीक्षा)",
    descriptionEn: "100 MCQs (80 Technical + 20 General) timed grand mock tests aligned with recruitment exams.",
    descriptionMr: "सार्वजनिक आरोग्य विभाग क्ष-किरण वैज्ञानिक अधिकारी परीक्षेसाठी १०० प्रश्न (२०० गुण) मॉक टेस्ट.",
    descriptionHi: "सार्वजनिक स्वास्थ्य विभाग और केंद्र सरकार परीक्षाओं के लिए 100 प्रश्न (200 अंक) ग्रैंड टेस्ट।",
    iconName: "Award",
    color: "from-amber-500 to-emerald-700",
    section: "both",
    chapters: [
      {
        id: "ch_30_1",
        chapterNumber: "Chapter 30.1",
        titleEn: "Maharashtra Health Department Grand Mock Test 1",
        titleMr: "महाराष्ट्र सार्वजनिक आरोग्य विभाग १०० प्रश्न सराव परीक्षा १",
        titleHi: "महाराष्ट्र स्वास्थ्य विभाग 100 प्रश्न ग्रैंड टेस्ट 1",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Full syllabus exam (80 Technical Radiology + 20 Non-Technical).",
        descriptionMr: "८० तांत्रिक प्रश्न + २० बिगर तांत्रिक (मराठी, इंग्रजी, सामान्य ज्ञान) परीक्षा.",
        descriptionHi: "80 तकनीकी प्रश्न + 20 गैर-तकनीकी प्रश्न संपूर्ण परीक्षा।",
        estimatedTime: "120 Mins",
        questionCount: 100,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_30_1_1",
            topicNumber: "Topic 1",
            titleEn: "Technical Section Practice (80 MCQs)",
            titleMr: "तांत्रिकी विभाग सराव (८० प्रश्न / १६० गुण)",
            titleHi: "तकनीकी अनुभाग अभ्यास (80 प्रश्न)",
            estimatedTime: "90 Mins",
            questionCount: 80,
            freeQuestionsCount: 15
          },
          {
            id: "tp_30_1_2",
            topicNumber: "Topic 2",
            titleEn: "Non-Technical Section Practice (20 MCQs)",
            titleMr: "बिगर तांत्रिकी विभाग सराव (२० प्रश्न / ४० गुण)",
            titleHi: "गैर-तकनीकी अनुभाग अभ्यास (20 प्रश्न)",
            estimatedTime: "30 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      },
      {
        id: "ch_30_2",
        chapterNumber: "Chapter 30.2",
        titleEn: "Central Government Radiology Officer Mock Test 2",
        titleMr: "केंद्र सरकार AIIMS / RRB क्ष-किरण अधिकारी मॉक टेस्ट २",
        titleHi: "केंद्र सरकार AIIMS / RRB रेडियोग्राफर मॉक टेस्ट 2",
        categoryKey: "Technical: Radiophysics & Machine Principles",
        descriptionEn: "Central Government exams pattern (AIIMS, RRB, ISRO, ESIC).",
        descriptionMr: "एम्स, रेल्वे, इस्रो व ईएसआयसी परीक्षा धर्तीवरील प्रश्नसंच.",
        descriptionHi: "एम्स, रेलवे, इसरो और ईएसआईसी परीक्षा पैटर्न प्रश्न बैंक।",
        estimatedTime: "120 Mins",
        questionCount: 100,
        freeQuestionsCount: 15,
        topics: [
          {
            id: "tp_30_2_1",
            topicNumber: "Topic 1",
            titleEn: "Central Exams Technical MCQs",
            titleMr: "केंद्र सरकार परीक्षा तांत्रिक प्रश्न",
            titleHi: "केंद्र सरकार परीक्षा तकनीकी प्रश्न",
            estimatedTime: "90 Mins",
            questionCount: 80,
            freeQuestionsCount: 15
          },
          {
            id: "tp_30_2_2",
            topicNumber: "Topic 2",
            titleEn: "Central Exams General Aptitude MCQs",
            titleMr: "केंद्र सरकार परीक्षा सामान्य व तर्कशक्ती प्रश्न",
            titleHi: "केंद्र सरकार परीक्षा सामान्य एवं रीजनिंग प्रश्न",
            estimatedTime: "30 Mins",
            questionCount: 20,
            freeQuestionsCount: 15
          }
        ]
      }
    ]
  }
];

export interface SectionMeta {
  id: 'sec1' | 'sec2';
  titleEn: string;
  titleMr: string;
  titleHi: string;
  badgeEn: string;
  badgeMr: string;
  badgeHi: string;
  languagesEn: string;
  languagesMr: string;
  languagesHi: string;
  descriptionEn: string;
  descriptionMr: string;
  descriptionHi: string;
}

export const SECTIONS_DATA: SectionMeta[] = [
  {
    id: 'sec1',
    titleEn: "Section 1: Maharashtra Scientific Officer",
    titleMr: "विभाग १: महाराष्ट्र सार्वजनिक आरोग्य विभाग (क्ष-किरण वैज्ञानिक अधिकारी)",
    titleHi: "भाग 1: महाराष्ट्र सार्वजनिक स्वास्थ्य विभाग वैज्ञानिक अधिकारी",
    badgeEn: "MH DHS / DMER Exam",
    badgeMr: "महाराष्ट्र शासन गट 'क' भरती",
    badgeHi: "महाराष्ट्र शासन ग्रुप सी भर्ती",
    languagesEn: "English + Marathi Mode",
    languagesMr: "मराठी व इंग्रजी माध्यम",
    languagesHi: "मराठी एवं अंग्रेजी माध्यम",
    descriptionEn: "Specially designed for Maharashtra Scientific Officer, DHS & DMER exams with dual Marathi-English questions.",
    descriptionMr: "महाराष्ट्र क्ष-किरण वैज्ञानिक अधिकारी व सार्वजनिक आरोग्य विभाग भरतीसाठी परिपूर्ण अभ्यासक्रम.",
    descriptionHi: "महाराष्ट्र वैज्ञानिक अधिकारी परीक्षा के लिए विशेष रूप से डिज़ाइन किया गया।"
  },
  {
    id: 'sec2',
    titleEn: "Section 2: Central Government Exams",
    titleMr: "विभाग २: केंद्र सरकार परीक्षा (AIIMS, RRB, ISRO, ESIC)",
    titleHi: "भाग 2: केंद्र सरकार परीक्षाएं (AIIMS, RRB, ISRO, ESIC)",
    badgeEn: "Central Govt Exams",
    badgeMr: "एम्स, रेल्वे व इस्रो परीक्षा",
    badgeHi: "एम्स, रेलवे एवं इसरो परीक्षा",
    languagesEn: "English + Hindi Mode",
    languagesMr: "हिंदी व इंग्रजी माध्यम",
    languagesHi: "हिंदी एवं अंग्रेजी माध्यम",
    descriptionEn: "Tailored for Central Government exams (AIIMS, RRB Radiology, ISRO, ESIC) with English & Hindi support.",
    descriptionMr: "एम्स, रेल्वे, इस्रो व केंद्र सरकारच्या परीक्षांसाठी हिंदी व इंग्रजी माध्यमातून सराव.",
    descriptionHi: "एम्स, रेलवे, इसरो और केंद्र सरकार की रेडियोग्राफर परीक्षाओं के लिए हिंदी एवं अंग्रेजी माध्यम।"
  }
];
