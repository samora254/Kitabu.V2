import { useState, useEffect } from 'react';
import { getGradeContent, getSubjectContent, getTopicContent } from '../services/gradeService';

export function useGradeContent(grade: number) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const gradeContent = getGradeContent(grade);
        setContent(gradeContent);
      } catch (err) {
        console.error('Error loading grade content:', err);
        setError('Failed to load grade content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [grade]);

  return { content, loading, error };
}

export function useSubjectContent(grade: number, subjectId: string) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const subjectContent = getSubjectContent(grade, subjectId);
        setContent(subjectContent);
      } catch (err) {
        console.error('Error loading subject content:', err);
        setError('Failed to load subject content');
      } finally {
        setLoading(false);
      }
    };

    if (grade && subjectId) {
      loadContent();
    }
  }, [grade, subjectId]);

  return { content, loading, error };
}

export function useTopicContent(grade: number, subjectId: string, topicId: string) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const topicContent = getTopicContent(grade, subjectId, topicId);
        setContent(topicContent);
      } catch (err) {
        console.error('Error loading topic content:', err);
        setError('Failed to load topic content');
      } finally {
        setLoading(false);
      }
    };

    if (grade && subjectId && topicId) {
      loadContent();
    }
  }, [grade, subjectId, topicId]);

  return { content, loading, error };
}