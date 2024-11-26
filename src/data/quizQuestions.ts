import { AIQuestion } from '../types/exam';

export const quizQuestions: Record<string, AIQuestion[]> = {
  social: [
    {
      id: 1,
      text: "What is the main purpose of the United Nations?",
      type: 'multiple-choice',
      options: [
        'To control world trade',
        'To promote world peace and security',
        'To enforce national laws',
        'To manage world sports events'
      ],
      correctAnswer: 1,
      explanation: 'The United Nations was established to maintain peace, foster friendly relations, and solve global issues.',
      difficulty: 'medium',
      gradeLevel: 8
    },
    // ... rest of the questions with the same structure
  ]
}