import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateLearningContent(subject: string, topic: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert teacher creating educational content for Grade 8 students. Create clear, engaging, and accurate content."
        },
        {
          role: "user",
          content: `Create a detailed lesson about ${topic} for Grade 8 ${subject}. Include explanations, examples, and key points. Format the content with clear sections and bullet points.`
        }
      ],
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || 'Content generation failed';
  } catch (error) {
    console.error('Error generating learning content:', error);
    throw error;
  }
}