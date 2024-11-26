import { Topic } from './index';

// Map of all topics by subject and grade
export const topics: Record<string, Record<number, Topic[]>> = {
  mathematics: {
    8: [] // Grade 8 mathematics topics will be added here
  },
  english: {
    8: [] // Grade 8 English topics will be added here
  },
  kiswahili: {
    8: [] // Grade 8 Kiswahili topics will be added here
  },
  science: {
    8: [] // Grade 8 Science topics will be added here
  },
  social: {
    8: [] // Grade 8 Social Studies topics will be added here
  }
};

export function getTopics(subjectId: string, grade: number): Topic[] {
  return topics[subjectId]?.[grade] || [];
}