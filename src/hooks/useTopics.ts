import { useState, useEffect } from 'react';
import { Topic } from '../types/curriculum';
import { getTopicsForGrade } from '../services/topicService';

export const useTopics = (grade: number, subject: string) => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        const fetchedTopics = await getTopicsForGrade(grade, subject);
        setTopics(fetchedTopics);
        setLoading(false);
      } catch (err) {
        setError('Failed to load topics');
        setLoading(false);
      }
    };

    fetchTopics();
  }, [grade, subject]);

  const goToNextTopic = () => {
    if (currentTopicIndex < topics.length - 1) {
      setCurrentTopicIndex(prev => prev + 1);
    }
  };

  const goToPreviousTopic = () => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(prev => prev - 1);
    }
  };

  return {
    topics,
    currentTopic: topics[currentTopicIndex],
    currentTopicIndex,
    totalTopics: topics.length,
    loading,
    error,
    goToNextTopic,
    goToPreviousTopic
  };
};