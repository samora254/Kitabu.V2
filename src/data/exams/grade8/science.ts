import { Question } from '../../../types/exam';

export const grade8ScienceExam: Question[] = [
  // BIOLOGY
  {
    id: 1,
    text: 'What is the main function of DNA?',
    type: 'multiple-choice',
    options: [
      'Store energy',
      'Carry genetic information',
      'Digest food',
      'Filter blood'
    ],
    correctAnswer: 1,
    explanation: 'DNA carries genetic information that determines traits and functions in living things.'
  },
  {
    id: 2,
    text: 'Which organelle is known as the "powerhouse" of the cell?',
    type: 'multiple-choice',
    options: [
      'Nucleus',
      'Mitochondria',
      'Golgi body',
      'Endoplasmic reticulum'
    ],
    correctAnswer: 1,
    explanation: 'Mitochondria produce energy through cellular respiration.'
  },
  // ... rest of the questions updated with correctAnswer as numeric index
];