var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      return null;
    }
    return new import_genai.GoogleGenAI({ apiKey });
  };
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", appName: "X-Ray Scientific Officer Prep" });
  });
  app.post("/api/ai/explain", async (req, res) => {
    try {
      const { question, category, options, correct_answer, explanation, source_page } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.json({
          success: true,
          isFallback: true,
          explanation: {
            deepExplanation: `${explanation} (Note: Standard textbook reference from source page ${source_page || "N/A"}).`,
            clinicalCorrelation: `In clinical radiography practice for ${category}, understanding these principles ensures patient safety, image accuracy, and compliance with diagnostic protocols.`,
            keyTakeaways: [
              `Core concept relates directly to ${category} standards.`,
              `Always verify correct clinical protocols before exposure.`,
              `Refer to ASRT guidelines for official scope of practice.`
            ],
            mnemonic: `Remember: ${correct_answer.slice(0, 15)}... is key for ${category.split(" ")[0]}!`,
            relatedExamTopics: [`${category} Regulations`, "Patient Safety Protocols", "ASRT Practice Guidelines"]
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
Source Page: ${source_page || "N/A"}

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
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      const responseText = response.text || "";
      const parsedData = JSON.parse(responseText);
      res.json({
        success: true,
        isFallback: false,
        explanation: parsedData
      });
    } catch (err) {
      console.error("AI Explain Error:", err);
      res.status(500).json({
        success: false,
        error: "Failed to generate AI explanation.",
        details: err?.message
      });
    }
  });
  app.post("/api/ai/generate-questions", async (req, res) => {
    try {
      const { category, count = 5 } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        const generatedList = Array.from({ length: Math.min(count, 50) }).map((_, idx) => {
          const id = Date.now() + idx;
          return {
            id,
            category: category || "Technical: Radiophysics & Machine Principles",
            section: "technical",
            question: `High-yield Diagnostic Radiography Question #${idx + 1} regarding ${category || "X-Ray Science"} principles?`,
            question_mr: `${category || "\u0915\u094D\u0937-\u0915\u093F\u0930\u0923\u0936\u093E\u0938\u094D\u0924\u094D\u0930"} \u0938\u0902\u0926\u0930\u094D\u092D\u093E\u0924\u0940\u0932 \u092E\u0939\u0924\u094D\u0924\u094D\u0935\u093E\u091A\u093E \u0938\u0930\u093E\u0935 \u092A\u094D\u0930\u0936\u094D\u0928 \u0915\u094D\u0930. #${idx + 1}?`,
            options: [
              "(A) Principle Option A - Standard diagnostic protocol",
              "(B) Principle Option B - Correct ASRT & AERB guideline",
              "(C) Principle Option C - Alternative exposure parameter",
              "(D) Principle Option D - Non-standard setting"
            ],
            options_mr: [
              "(A) \u092A\u0930\u094D\u092F\u093E\u092F A - \u092E\u093E\u0928\u0915 \u0928\u093F\u0926\u093E\u0928 \u092A\u0926\u094D\u0927\u0924\u0940",
              "(B) \u092A\u0930\u094D\u092F\u093E\u092F B - \u092F\u094B\u0917\u094D\u092F ASRT \u0935 AERB \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u0915 \u0924\u0924\u094D\u0924\u094D\u0935\u0947",
              "(C) \u092A\u0930\u094D\u092F\u093E\u092F C - \u092A\u0930\u094D\u092F\u093E\u092F\u0940 \u090F\u0915\u094D\u0938\u092A\u094B\u091C\u0930 \u092A\u0945\u0930\u093E\u092E\u0940\u091F\u0930",
              "(D) \u092A\u0930\u094D\u092F\u093E\u092F D - \u0905\u092E\u093E\u0928\u0915 \u092E\u0942\u0932\u094D\u092F"
            ],
            correct_answer: "(B) Principle Option B - Correct ASRT & AERB guideline",
            correct_answer_mr: "(B) \u092A\u0930\u094D\u092F\u093E\u092F B - \u092F\u094B\u0917\u094D\u092F ASRT \u0935 AERB \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u0915 \u0924\u0924\u094D\u0924\u094D\u0935\u0947",
            explanation: `Option (B) is the correct standard for ${category || "radiography"}. Following these official guidelines ensures patient safety, radiation protection (ALARA), and high image contrast resolution.`,
            explanation_mr: `\u092A\u0930\u094D\u092F\u093E\u092F (B) \u0939\u0947 ${category || "\u0915\u094D\u0937-\u0915\u093F\u0930\u0923"} \u0938\u093E\u0920\u0940\u091A\u0947 \u092E\u093E\u0928\u0915\u0940\u0915\u0943\u0924 \u0928\u093F\u092F\u092E \u0906\u0939\u0947. \u092F\u093E\u092E\u0941\u0933\u0947 \u0930\u0941\u0917\u094D\u0923\u093E\u091A\u0940 \u0930\u0947\u0921\u093F\u090F\u0936\u0928\u092A\u093E\u0938\u0942\u0928 \u0938\u0941\u0930\u0915\u094D\u0937\u093E (ALARA) \u0906\u0923\u093F \u0909\u0924\u094D\u0915\u0943\u0937\u094D\u091F \u0907\u092E\u0947\u091C \u0915\u094D\u0935\u093E\u0932\u093F\u091F\u0940 \u092E\u093F\u0933\u0924\u0947.`,
            source_page: Math.floor(Math.random() * 200) + 1,
            difficulty: idx % 2 === 0 ? "easy" : "medium"
          };
        });
        return res.json({
          success: true,
          isFallback: true,
          questions: generatedList
        });
      }
      const prompt = `You are an expert X-Ray Scientific Officer exam author for Maharashtra Public Health Department (\u0906\u0930\u094B\u0917\u094D\u092F \u0935\u093F\u092D\u093E\u0917 \u0917\u091F '\u0915' \u092D\u0930\u0924\u0940 \u092A\u0930\u0940\u0915\u094D\u0937\u093E).
Generate ${count} high-yield multiple-choice questions for the category: "${category}".

Each question MUST strictly follow this JSON schema array with BOTH English and Marathi fields:
[
  {
    "question": "Clear English question stem",
    "question_mr": "\u092E\u0930\u093E\u0920\u0940\u0924\u0940\u0932 \u0938\u094D\u092A\u0937\u094D\u091F \u092A\u094D\u0930\u0936\u094D\u0928 \u0935\u093F\u0927\u093E\u0928",
    "options": ["(A) Option 1", "(B) Option 2", "(C) Option 3", "(D) Option 4"],
    "options_mr": ["(A) \u092A\u0930\u094D\u092F\u093E\u092F \u0967", "(B) \u092A\u0930\u094D\u092F\u093E\u092F \u0968", "(C) \u092A\u0930\u094D\u092F\u093E\u092F \u0969", "(D) \u092A\u0930\u094D\u092F\u093E\u092F \u096A"],
    "correct_answer": "(B) Option 2",
    "correct_answer_mr": "(B) \u092A\u0930\u094D\u092F\u093E\u092F \u0968",
    "explanation": "Clear explanation of the correct answer in English.",
    "explanation_mr": "\u092E\u0930\u093E\u0920\u0940\u0924\u0940\u0932 \u0938\u094D\u092A\u0937\u094D\u091F\u0940\u0915\u0930\u0923 \u0935 AERB/ASRT \u0938\u0902\u0926\u0930\u094D\u092D\u093E\u0924\u0940\u0932 \u0928\u093F\u092F\u092E.",
    "category": "${category}",
    "source_page": 100,
    "difficulty": "medium"
  }
]

Make sure option choices start with (A), (B), (C), (D) and correct_answer matches one of the options exactly.
Return ONLY a valid JSON array.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      const responseText = response.text || "";
      const questions = JSON.parse(responseText);
      res.json({
        success: true,
        questions
      });
    } catch (err) {
      console.error("AI Generate Questions Error:", err);
      res.status(500).json({
        success: false,
        error: "Failed to generate custom practice questions via AI."
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
