import { Topic, Subject } from '../index';
import { grade8Mathematics } from './mathematics/grade8';
import { grade8English } from './english/grade8';
import { grade8Kiswahili } from './kiswahili/grade8';
import { grade8Science } from './science/grade8';
import { grade8Social } from './social/grade8';

// Subject definitions
const subjects: Record<string, Subject> = {
  mathematics: {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Advanced mathematics concepts and problem-solving',
    icon: '🔢',
    color: 'bg-red-500',
    topics: { 8: grade8Mathematics }
  },
  english: {
    id: 'english',
    name: 'English',
    description: 'Advanced English language and literature',
    icon: '📚',
    color: 'bg-blue-500',
    topics: { 8: grade8English }
  },
  kiswahili: {
    id: 'kiswahili',
    name: 'Kiswahili',
    description: 'Advanced Kiswahili language and literature',
    icon: '🗣️',
    color: 'bg-green-500',
    topics: { 8: grade8Kiswahili }
  },
  science: {
    id: 'science',
    name: 'Science',
    description: 'Advanced scientific concepts and experimentation',
    icon: '🔬',
    color: 'bg-purple-500',
    topics: { 8: grade8Science }
  },
  social: {
    id: 'social',
    name: 'Social Studies',
    description: 'Advanced social studies and citizenship',
    icon: '🌍',
    color: 'bg-yellow-500',
    topics: { 8: grade8Social }
  }
};

// Export individual grade 8 subjects
export {
  grade8Mathematics,
  grade8English,
  grade8Kiswahili,
  grade8Science,
  grade8Social
};

// Export helper functions
export const getSubject = (subjectId: string): Subject | undefined => {
  return subjects[subjectId];
};

export const getSubjectTopics = (subjectId: string, grade: number): Topic[] => {
  return subjects[subjectId]?.topics[grade] || [];
};