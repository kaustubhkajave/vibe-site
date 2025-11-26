import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini AI client
// The API key is assumed to be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are "Lumina," a helpful digital assistant for a professional photographer named Alex.
Alex specializes in urban, landscape, and portrait photography with a moody, teal-and-charcoal aesthetic.
The portfolio showcases high-contrast, emotive imagery.
Your goal is to answer visitor questions about Alex's style, availability for bookings, and technical approach.
- Alex is based in Seattle, WA but travels worldwide.
- Alex shoots with a Sony A7R V.
- Bookings are currently open for 2024.
- Keep answers concise, professional, and slightly artistic in tone.
If the user asks about the specific photos in the gallery, explain that you are a language model and can discuss the general style but cannot "see" the specific dynamic masonry grid images in real-time.
`;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[] = []): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I'm currently in offline mode (API Key missing). Please enjoy the gallery!";
    }

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({ message });
    
    // Validate response
    if (response && response.text) {
      return response.text;
    } else {
      throw new Error("Empty response from AI");
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the studio right now. Please try again later.";
  }
};