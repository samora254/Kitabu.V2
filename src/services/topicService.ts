import { Topic } from '../types/curriculum';
import { getSubjectTopics } from '../data/curriculum/subjects';

export const getTopicsForGrade = async (grade: number, subject: string): Promise<Topic[]> => {
  // Get topics for the specified grade and subject
  return getSubjectTopics(subject, grade);
};