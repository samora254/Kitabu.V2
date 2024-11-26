import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateBrainTeaseFacts(subject: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert at creating engaging and educational fun facts for Grade 8 students."
        },
        {
          role: "user",
          content: `Generate 5 interesting and educational fun facts about Grade 8 ${subject}. Make them engaging, memorable, and appropriate for the grade level.`
        }
      ],
      temperature: 0.8,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No facts generated');
    }

    // Split the content into individual facts
    const facts = content.split('\n').filter(fact => fact.trim());
    return facts.slice(0, 5); // Ensure we only return 5 facts

  } catch (error) {
    console.error('Error generating brain tease facts:', error);
    throw error;
  }
}