import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function checkAvailableModels() {
  try {
    const models = await openai.models.list();
    console.log('Available models:', models.data);
  } catch (error) {
    console.error('Error fetching models:', error);
  }
}