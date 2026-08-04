import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // Helper for Gemini AI client initialization
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      return null;
    }
    return new GoogleGenAI({ apiKey });
  };

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', appName: 'X-Ray Scientific Officer Prep' });
  });

  // AI Endpoint: Deep Question Explanation & Clinical Analysis
  app.post('/api/ai/explain', async (req, res) => {
    try {
      const { question, category, options, correct_answer, explanation, source_page } = req.body;

      const ai = getGeminiClient();
      if (!ai) {
        return res.json({
          success: true,
          isFallback: true,
          explanation: {
            deepExplanation: `${explanation} (Note: Standard textbook reference from source page ${source_page || 'N/A'}).`,
            clinicalCorrelation: `In clinical radiography practice for ${category}, understanding these principles ensures patient safety, image accuracy, and compliance with diagnostic protocols.`,
            keyTakeaways: [
              `Core concept relates directly to ${category} standards.`,
              `Always verify correct clinical protocols before exposure.`,
              `Refer to ASRT guidelines for official scope of practice.`
            ],
            mnemonic: `Remember: ${correct_answer.slice(0, 15)}... is key for ${category.split(' ')[0]}!`,
            relatedExamTopics: [`${category} Regulations`, 'Patient Safety Protocols', 'ASRT Practice Guidelines']
          }
        });
      }

      const prompt = `You are a Senior Radiography Scientific Officer and Medical Imaging Educator.
Analyze the following exam question for an X-Ray Scientific Officer candidate:

Category: ${category}
Question: "${question}"
Options: ${JSON.stringify(options)}
Correct Answer: "${correct_answer}"
Existing Brief Explanation: "${explanation}"
Source Page: ${source_page || 'N/A'}

Provide a structured, deeply educational response in JSON format matching this exact schema:
{
  "deepExplanation": "A thorough 2-3 sentence clinical explanation of WHY this answer is correct and why other key choices are incorrect.",
  "clinicalCorrelation": "A 1-2 sentence practical real-world scenario in an X-ray department or hospital room illustrating this rule.",
  "keyTakeaways": ["Bullet 1", "Bullet 2", "Bullet 3"],
  "mnemonic": "A memorable memory trick or mnemonic to remember this concept for board exams.",
  "relatedExamTopics": ["Related Topic 1", "Related Topic 2", "Related Topic 3"]
}
Return ONLY valid JSON.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const responseText = response.text || '';
      const parsedData = JSON.parse(responseText);

      res.json({
        success: true,
        isFallback: false,
        explanation: parsedData
      });
    } catch (err: any) {
      console.error('AI Explain Error:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to generate AI explanation.',
        details: err?.message
      });
    }
  });

  // AI Endpoint: Generate Custom High-Yield Practice Questions (Supports bulk generation & bilingual)
  app.post('/api/ai/generate-questions', async (req, res) => {
    try {
      const { category, count = 5 } = req.body;

      const ai = getGeminiClient();
      if (!ai) {
        // Fallback local question generator for offline/quick generation
        const generatedList = Array.from({ length: Math.min(count, 50) }).map((_, idx) => {
          const id = Date.now() + idx;
          return {
            id,
            category: category || 'Technical: Radiophysics & Machine Principles',
            section: 'technical',
            question: `High-yield Diagnostic Radiography Question #${idx + 1} regarding ${category || 'X-Ray Science'} principles?`,
            question_mr: `${category || 'क्ष-किरणशास्त्र'} संदर्भातील महत्त्वाचा सराव प्रश्न क्र. #${idx + 1}?`,
            options: [
              "(A) Principle Option A - Standard diagnostic protocol",
              "(B) Principle Option B - Correct ASRT & AERB guideline",
              "(C) Principle Option C - Alternative exposure parameter",
              "(D) Principle Option D - Non-standard setting"
            ],
            options_mr: [
              "(A) पर्याय A - मानक निदान पद्धती",
              "(B) पर्याय B - योग्य ASRT व AERB मार्गदर्शक तत्त्वे",
              "(C) पर्याय C - पर्यायी एक्सपोजर पॅरामीटर",
              "(D) पर्याय D - अमानक मूल्य"
            ],
            correct_answer: "(B) Principle Option B - Correct ASRT & AERB guideline",
            correct_answer_mr: "(B) पर्याय B - योग्य ASRT व AERB मार्गदर्शक तत्त्वे",
            explanation: `Option (B) is the correct standard for ${category || 'radiography'}. Following these official guidelines ensures patient safety, radiation protection (ALARA), and high image contrast resolution.`,
            explanation_mr: `पर्याय (B) हे ${category || 'क्ष-किरण'} साठीचे मानकीकृत नियम आहे. यामुळे रुग्णाची रेडिएशनपासून सुरक्षा (ALARA) आणि उत्कृष्ट इमेज क्वालिटी मिळते.`,
            source_page: Math.floor(Math.random() * 200) + 1,
            difficulty: idx % 2 === 0 ? 'easy' : 'medium'
          };
        });

        return res.json({
          success: true,
          isFallback: true,
          questions: generatedList
        });
      }

      const prompt = `You are an expert X-Ray Scientific Officer exam author for Maharashtra Public Health Department (आरोग्य विभाग गट 'क' भरती परीक्षा).
Generate ${count} high-yield multiple-choice questions for the category: "${category}".

Each question MUST strictly follow this JSON schema array with BOTH English and Marathi fields:
[
  {
    "question": "Clear English question stem",
    "question_mr": "मराठीतील स्पष्ट प्रश्न विधान",
    "options": ["(A) Option 1", "(B) Option 2", "(C) Option 3", "(D) Option 4"],
    "options_mr": ["(A) पर्याय १", "(B) पर्याय २", "(C) पर्याय ३", "(D) पर्याय ४"],
    "correct_answer": "(B) Option 2",
    "correct_answer_mr": "(B) पर्याय २",
    "explanation": "Clear explanation of the correct answer in English.",
    "explanation_mr": "मराठीतील स्पष्टीकरण व AERB/ASRT संदर्भातील नियम.",
    "category": "${category}",
    "source_page": 100,
    "difficulty": "medium"
  }
]

Make sure option choices start with (A), (B), (C), (D) and correct_answer matches one of the options exactly.
Return ONLY a valid JSON array.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const responseText = response.text || '';
      const questions = JSON.parse(responseText);

      res.json({
        success: true,
        questions
      });
    } catch (err: any) {
      console.error('AI Generate Questions Error:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to generate custom practice questions via AI.'
      });
    }
  });

  // AI Endpoint: Parse PDF File or Text into App-Compatible MCQ JSON
  app.post('/api/ai/parse-pdf-mcqs', async (req, res) => {
    try {
      const { pdfBase64, rawText, category, chapterId = 19 } = req.body;

      const ai = getGeminiClient();
      if (!ai) {
        const sampleQs = Array.from({ length: 5 }).map((_, idx) => {
          return {
            id: Date.now() + idx,
            category: category || 'General Radiography',
            section: 'technical',
            question: `Extracted MCQ #${idx + 1} from PDF Document`,
            question_mr: `PDF दस्तऐवजातील एक्सट्रॅक्ट केलेला MCQ प्रश्न क्र. #${idx + 1}`,
            options: [
              "(A) Standard Parameter Choice A",
              "(B) Clinical Guideline Choice B",
              "(C) Alternative Protocol Choice C",
              "(D) Exposure Control Choice D"
            ],
            options_mr: [
              "(A) मानक निकष पर्याय A",
              "(B) क्लिनिकल मार्गदर्शक पर्याय B",
              "(C) पर्यायी प्रोटोकॉल पर्याय C",
              "(D) एक्सपोजर नियंत्रण पर्याय D"
            ],
            correct_answer: "(B) Clinical Guideline Choice B",
            correct_answer_mr: "(B) क्लिनिकल मार्गदर्शक पर्याय B",
            explanation: "Extracted from uploaded PDF source material.",
            explanation_mr: "अपलोड केलेल्या PDF संदर्भातून एक्सट्रॅक्ट केलेले स्पष्टीकरण.",
            source_page: Number(chapterId) || 19,
            difficulty: "medium"
          };
        });

        return res.json({
          success: true,
          isFallback: true,
          questions: sampleQs,
          message: 'Local fallback MCQ parser used (GEMINI_API_KEY not configured).'
        });
      }

      let contents: any[];
      const promptText = `You are a Senior Radiography Scientific Officer and Exam Question Author.
Analyze the attached PDF document / text content.
Extract all Multiple Choice Questions (MCQs) present in the document into a standard web-app compatible JSON array.
If the document contains study notes or chapter content instead of explicit MCQs, create high-yield MCQs covering the key concepts in the document for the category "${category || 'Radiography'}".

Each question in the JSON array MUST strictly follow this schema:
[
  {
    "question": "Question text in English",
    "question_mr": "प्रश्न विधान मराठीत",
    "options": ["(A) Choice 1", "(B) Choice 2", "(C) Choice 3", "(D) Choice 4"],
    "options_mr": ["(A) पर्याय १", "(B) पर्याय २", "(C) पर्याय ३", "(D) पर्याय ४"],
    "correct_answer": "(A) Choice 1",
    "correct_answer_mr": "(A) पर्याय १",
    "explanation": "Clear explanation in English",
    "explanation_mr": "स्पष्टीकरण मराठीत",
    "category": "${category || 'Radiography & Machine Principles'}",
    "source_page": ${Number(chapterId) || 19},
    "difficulty": "medium"
  }
]

Requirements:
- Ensure each option string starts with "(A)", "(B)", "(C)", or "(D)".
- "correct_answer" must match one of the string elements in "options" exactly.
- Provide both English and Marathi translations for questions, options, correct_answer, and explanation.
- Return ONLY a valid JSON array.`;

      if (pdfBase64) {
        contents = [
          {
            role: 'user',
            parts: [
              {
                inlineData: {
                  mimeType: 'application/pdf',
                  data: pdfBase64
                }
              },
              { text: promptText }
            ]
          }
        ];
      } else {
        contents = [`${promptText}\n\nDOCUMENT CONTENT:\n${rawText || ''}`];
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const responseText = response.text || '[]';
      const questions = JSON.parse(responseText);

      res.json({
        success: true,
        questions
      });
    } catch (err: any) {
      console.error('PDF MCQ Parse Error:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to convert PDF into MCQs.',
        details: err?.message
      });
    }
  });

  // Serve Vite in development or static in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
