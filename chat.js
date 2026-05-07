import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

// Check API key
if (!process.env.GROQ_API_KEY) {
  console.log("❌ Missing GROQ_API_KEY in .env file");
  process.exit(1);
}

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Get question from terminal
const question = process.argv.slice(2).join(" ");

if (!question) {
  console.log("❌ Please provide a question");
  console.log('Example: node chat.js "Which department has highest placement?"');
  process.exit(1);
}

async function run() {
  try {
    console.log("⏳ Asking AI...\n");

    const response = await groq.chat.completions.create({
      // ✅ WORKING MODEL (2026 stable)
      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "system",
          content: `
You are a placement data analyst AI.

Your job:
1. Convert user question into SQL query
2. Give short business insight based on placement dataset

Dataset fields:
- student_name
- department
- company
- package
- placement_status

Always respond in this format:

SQL:
<query>

Insight:
<short explanation>
          `,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    console.log("🤖 RESPONSE:\n");
    console.log(response.choices[0].message.content);

  } catch (err) {
    console.log("❌ ERROR:");
    console.log(err.message);
  }
}

run();