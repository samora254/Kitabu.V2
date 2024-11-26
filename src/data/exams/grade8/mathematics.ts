import { Question } from '../../../types/exam';

export const grade8MathematicsExam: Question[] = [
  {
    id: 1,
    text: 'Solve for x: 3(x - 4) = 21',
    type: 'multiple-choice',
    options: ['9', '11', '12', '15'],
    correctAnswer: 1,
    explanation: 'First distribute: 3x - 12 = 21, then add 12 to both sides: 3x = 33, finally divide by 3: x = 11'
  },
  // ... rest of the questions updated with correctAnswer as numeric index
];