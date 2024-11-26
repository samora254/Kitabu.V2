import { grades } from '../data/curriculum';
import { getSubjectTopics, getSubject } from '../data/curriculum/subjects';

export interface GradeContent {
  subjects: string[];
  topics: Record<string, any[]>;
  facts: Record<string, any[]>;
  quizzes: Record<string, any[]>;
}

export function validateGrade(grade: number): boolean {
  return grade === 8;
}

export function getGradeContent(grade: number): GradeContent | null {
  if (!validateGrade(grade)) {
    console.error('Only Grade 8 is supported');
    return null;
  }

  try {
    const gradeLevel = grades.find(g => g.level === grade);
    if (!gradeLevel) {
      console.error('Grade level not found:', grade);
      return null;
    }

    const subjects = gradeLevel.subjects;
    const topics: Record<string, any[]> = {};
    const facts: Record<string, any[]> = {};
    const quizzes: Record<string, any[]> = {};

    subjects.forEach(subjectId => {
      topics[subjectId] = getSubjectTopics(subjectId, grade);
      facts[subjectId] = [];
      quizzes[subjectId] = [];
    });

    return {
      subjects,
      topics,
      facts,
      quizzes
    };
  } catch (error) {
    console.error('Error getting grade content:', error);
    return null;
  }
}

export function getSubjectContent(grade: number, subjectId: string) {
  if (!validateGrade(grade) || !subjectId) {
    return null;
  }

  try {
    const subject = getSubject(subjectId);
    if (!subject) return null;

    const topics = getSubjectTopics(subjectId, grade);

    return {
      subject,
      topics,
      facts: [],
      quizzes: []
    };
  } catch (error) {
    console.error('Error getting subject content:', error);
    return null;
  }
}

export function getTopicContent(grade: number, subjectId: string, topicId: string) {
  if (!validateGrade(grade) || !subjectId || !topicId) {
    return null;
  }

  try {
    const topics = getSubjectTopics(subjectId, grade);
    const topic = topics.find(t => t.id === topicId);
    if (!topic) return null;

    return {
      topic,
      facts: [],
      quizzes: []
    };
  } catch (error) {
    console.error('Error getting topic content:', error);
    return null;
  }
}