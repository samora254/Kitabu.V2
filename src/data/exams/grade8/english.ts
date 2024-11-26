import { Question } from '../../../types/exam';

export const grade8EnglishExam: Question[] = [
  {
    id: 1,
    text: 'What is the main purpose of a thesis statement?',
    type: 'multiple-choice',
    options: [
      'To end an essay',
      'To state the main argument',
      'To list all topics',
      'To thank the reader'
    ],
    correctAnswer: 1,
    explanation: 'A thesis statement presents the main argument or central idea of an essay.'
  },
  // ... rest of the questions updated with correctAnswer as numeric index
];