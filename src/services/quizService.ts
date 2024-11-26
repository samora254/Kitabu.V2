import { OpenAI } from 'openai';
import { Question } from '../types/exam';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const QUESTIONS_PER_QUIZ = 10;

export interface AIQuestion extends Question {
  difficulty: 'easy' | 'medium' | 'hard';
  gradeLevel: number;
}

export async function getQuizQuestions(subjectId: string, _grade: number): Promise<Question[]> {
  try {
    const prompt = `Generate ${QUESTIONS_PER_QUIZ} multiple-choice questions for Grade 8 ${subjectId} with 4 options each. Include explanations. Format as JSON array with fields: text, options (array), correctAnswer (number - index of correct option), explanation.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert educational content creator specializing in creating high-quality quiz questions for Grade 8 students."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No questions generated');
    }

    const questions: Question[] = JSON.parse(content);
    return questions.map((q, index) => ({
      ...q,
      id: index + 1,
      type: 'multiple-choice'
    }));

  } catch (error) {
    console.error('Error getting quiz questions:', error);
    throw error;
  }
}