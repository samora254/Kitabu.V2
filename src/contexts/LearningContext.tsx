import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../hooks/useAuth';

interface LearningProgress {
  [subjectId: string]: {
    [topicId: string]: {
      completed: boolean;
      lastAccessed: string;
      subtopics: {
        [subtopicId: string]: {
          completed: boolean;
          lastAccessed: string;
        };
      };
    };
  };
}

interface LearningContextType {
  progress: LearningProgress;
  markTopicComplete: (subjectId: string, topicId: string) => Promise<void>;
  markSubtopicComplete: (subjectId: string, topicId: string, subtopicId: string) => Promise<void>;
  isTopicCompleted: (subjectId: string, topicId: string) => boolean;
  isSubtopicCompleted: (subjectId: string, topicId: string, subtopicId: string) => boolean;
  getTopicProgress: (subjectId: string, topicId: string) => number;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export function LearningProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<LearningProgress>({});
  const { user } = useAuth();

  useEffect(() => {
    const loadProgress = async () => {
      if (!user) return;

      try {
        const progressDoc = await getDoc(doc(db, 'learningProgress', user.uid));
        if (progressDoc.exists()) {
          setProgress(progressDoc.data() as LearningProgress);
        }
      } catch (error) {
        console.error('Error loading learning progress:', error);
      }
    };

    loadProgress();
  }, [user]);

  const saveProgress = async (newProgress: LearningProgress) => {
    if (!user) return;

    try {
      await setDoc(doc(db, 'learningProgress', user.uid), newProgress);
      setProgress(newProgress);
    } catch (error) {
      console.error('Error saving learning progress:', error);
    }
  };

  const markTopicComplete = async (subjectId: string, topicId: string) => {
    const newProgress = {
      ...progress,
      [subjectId]: {
        ...progress[subjectId],
        [topicId]: {
          ...progress[subjectId]?.[topicId],
          completed: true,
          lastAccessed: new Date().toISOString()
        }
      }
    };
    await saveProgress(newProgress);
  };

  const markSubtopicComplete = async (subjectId: string, topicId: string, subtopicId: string) => {
    const newProgress = {
      ...progress,
      [subjectId]: {
        ...progress[subjectId],
        [topicId]: {
          ...progress[subjectId]?.[topicId],
          subtopics: {
            ...progress[subjectId]?.[topicId]?.subtopics,
            [subtopicId]: {
              completed: true,
              lastAccessed: new Date().toISOString()
            }
          }
        }
      }
    };
    await saveProgress(newProgress);
  };

  const isTopicCompleted = (subjectId: string, topicId: string): boolean => {
    return progress[subjectId]?.[topicId]?.completed || false;
  };

  const isSubtopicCompleted = (subjectId: string, topicId: string, subtopicId: string): boolean => {
    return progress[subjectId]?.[topicId]?.subtopics?.[subtopicId]?.completed || false;
  };

  const getTopicProgress = (subjectId: string, topicId: string): number => {
    const topic = progress[subjectId]?.[topicId];
    if (!topic?.subtopics) return 0;

    const subtopics = Object.values(topic.subtopics);
    if (subtopics.length === 0) return 0;

    const completedCount = subtopics.filter(subtopic => subtopic.completed).length;
    return (completedCount / subtopics.length) * 100;
  };

  const value = {
    progress,
    markTopicComplete,
    markSubtopicComplete,
    isTopicCompleted,
    isSubtopicCompleted,
    getTopicProgress
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}