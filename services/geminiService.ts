
import { GoogleGenAI } from '@google/genai';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecipe = async (ingredients: string[], diet: string): Promise<string> => {
  const prompt = `
You are a world-class creative chef known for inventing unique and delicious recipes. 
Your task is to create an exciting new recipe based on the provided ingredients and dietary preference.

Ingredients available: ${ingredients.join(', ')}
Dietary Preference: ${diet}

Please provide a recipe that includes:
1.  A creative and appealing title (using '# Title').
2.  A short, enticing description of the dish (1-2 sentences).
3.  A list of all ingredients with specific quantities (using '- ' for each item). You can add a few common pantry items like oil, salt, and pepper if necessary.
4.  Step-by-step preparation instructions (using numbered points like '1. ').

The recipe should be easy to follow for a home cook. Make it sound delicious!
Format the entire response in Markdown.
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating recipe with Gemini:", error);
    throw new Error("Failed to communicate with the recipe AI. Please check your connection or API key.");
  }
};
