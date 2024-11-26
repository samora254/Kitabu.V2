import { useState, useEffect } from 'react';
import { getQuizQuestions } from '../services/quizService';
import { Question } from '../types/exam';

interface UseQuizReturn {
  questions: Question[];
  loading: boolean;
  error: string | null;
  retryLoading: () => void;
}

export const useQuiz = (subjectId: string, grade: number): UseQuizReturn => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    
    const loadQuestions = async () => {
      if (!subjectId || !grade) {
        setError('Subject and grade are required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const loadedQuestions = await getQuizQuestions(subjectId, grade);
        
        if (mounted) {
          if (!loadedQuestions || loadedQuestions.length === 0) {
            setError(`No questions available for ${subjectId} grade ${grade}`);
          } else {
            setQuestions(loadedQuestions);
            setError(null);
          }
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load questions');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadQuestions();

    return () => {
      mounted = false;
    };
  }, [subjectId, grade, retryCount]);

  const retryLoading = () => {
    setRetryCount(prev => prev + 1);
  };

  return {
    questions,
    loading,
    error,
    retryLoading
  };
};