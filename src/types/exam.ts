export interface Question {
  id: number;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'short-answer';
  options?: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface AIQuestion extends Question {
  difficulty: 'easy' | 'medium' | 'hard';
  gradeLevel: number;
}