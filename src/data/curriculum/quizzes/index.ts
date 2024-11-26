import { Exercise } from '..';

interface QuizBank {
  subjectId: string;
  gradeLevel: number;
  topicId: string;
  questions: Exercise[];
}

export const quizBank: QuizBank[] = [];

export const getTopicQuestions = (
  subjectId: string,
  gradeLevel: number,
  topicId: string,
  count: number = 15
) => {
  const questions = quizBank.find(quiz => 
    quiz.subjectId === subjectId &&
    quiz.gradeLevel === gradeLevel &&
    quiz.topicId === topicId
  )?.questions || [];
  
  return questions
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};