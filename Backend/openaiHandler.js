import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEM_API_KEY);

async function getDiagnosis(req, res) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const disease = "acne";

  // Call the getDiagnosis function for each prompt
  const prompt = `Provide 5 key points about ${disease}.List 5 medicines commonly used to treat ${disease}.Outline 5 preventive measures against ${disease}.Share 5 effective home remedies for ${disease}.`;

  // const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  // console.log(text);
  return text;
}

export default getDiagnosis;
