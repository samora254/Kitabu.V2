// Core curriculum types
export interface Topic {
  id: string;
  title: string;
  description: string;
  gradeLevel: number;
  learningObjectives: string[];
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  title: string;
  content: string;
  examples: string[];
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  topics: Record<number, Topic[]>;
}

export interface Grade {
  level: number;
  name: string;
  subjects: string[];
}

// Export all curriculum modules
export * from './subjects';
export * from './topics';
export * from './grades';
export * from './quizzes';
export * from './facts';