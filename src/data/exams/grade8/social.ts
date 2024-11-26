import { Question } from '../../../types/exam';

export const grade8SocialExam: Question[] = [
  {
    id: 1,
    text: 'What are the three branches of government in Kenya?',
    type: 'multiple-choice',
    options: [
      'Executive, Legislative, Judiciary',
      'President, Parliament, Police',
      'County, National, Local',
      'Ministers, MPs, Judges'
    ],
    correctAnswer: 0,
    explanation: 'Kenya\'s government has three branches: Executive (implements laws), Legislative (makes laws), and Judiciary (interprets laws).'
  },
  // ... rest of the questions updated with correctAnswer as numeric index
];