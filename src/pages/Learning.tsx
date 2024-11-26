import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { TopicCard } from '../components/learning/TopicCard';
import { SubtopicCard } from '../components/learning/SubtopicCard';
import { LearningContent } from '../components/learning/LearningContent';
import { ProgressBar } from '../components/learning/ProgressBar';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { useGrade } from '../contexts/GradeContext';
import { useLearning } from '../contexts/LearningContext';
import { useSubjectContent } from '../hooks/useGradeContent';

export const Learning: React.FC = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const navigate = useNavigate();
  const { selectedGrade } = useGrade();
  const { content, loading, error } = useSubjectContent(selectedGrade, subjectId || '');
  const { markTopicComplete, markSubtopicComplete, getTopicProgress } = useLearning();
  
  const [selectedTopic, setSelectedTopic] = useState<string | null>(topicId || null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);

  useEffect(() => {
    if (topicId) {
      setSelectedTopic(topicId);
    }
  }, [topicId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !content) {
    return <ErrorMessage message={error || 'Failed to load content'} />;
  }

  const currentTopic = content.topics.find((t: { id: string | null; }) => t.id === selectedTopic);
  const currentSubtopic = currentTopic?.subtopics.find((st: { id: string | null; }) => st.id === selectedSubtopic);

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    setSelectedSubtopic(null);
    navigate(`/learning/${subjectId}/${topicId}`);
  };

  const handleSubtopicSelect = (subtopicId: string) => {
    setSelectedSubtopic(subtopicId);
  };

  const handleSubtopicComplete = async () => {
    if (!subjectId || !selectedTopic || !selectedSubtopic) return;
    
    await markSubtopicComplete(subjectId, selectedTopic, selectedSubtopic);
    
    // Check if all subtopics are completed to mark the topic as complete
    const progress = getTopicProgress(subjectId, selectedTopic);
    if (progress === 100) {
      await markTopicComplete(subjectId, selectedTopic);
    }
  };

  const handleBack = () => {
    if (selectedSubtopic) {
      setSelectedSubtopic(null);
    } else if (selectedTopic) {
      setSelectedTopic(null);
      navigate(`/learning/${subjectId}`);
    } else {
      navigate(`/subject/${subjectId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-emerald-500 text-white p-6 relative">
        <BackButton className="absolute top-6 left-4 text-white" onClick={handleBack} />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2 capitalize">{content.subject.name}</h1>
          <p className="text-white/80">Grade {selectedGrade}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {!selectedTopic ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Select a Topic</h2>
            {content.topics.map((topic: { id: any; title?: string; description?: string; }) => (
              <TopicCard
                key={topic.id}
                subjectId={subjectId || ''}
                topic={topic}
                onClick={() => handleTopicSelect(topic.id)}
              />
            ))}
          </div>
        ) : !selectedSubtopic ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">{currentTopic?.title}</h2>
              <button
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Back to Topics
              </button>
            </div>
            
            <ProgressBar
              progress={getTopicProgress(subjectId || '', selectedTopic)}
            />

            <div className="grid gap-4 mt-6">
              {currentTopic?.subtopics.map((subtopic: { id: any; title?: string; content?: string; }) => (
                <SubtopicCard
                  key={subtopic.id}
                  subjectId={subjectId || ''}
                  topicId={selectedTopic}
                  subtopic={subtopic}
                  onSelect={() => handleSubtopicSelect(subtopic.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">{currentSubtopic?.title}</h2>
              <button
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Back to Subtopics
              </button>
            </div>

            <LearningContent
              subjectId={subjectId || ''}
              topicId={selectedTopic}
              subtopicId={selectedSubtopic}
              content={currentSubtopic?.content || ''}
              onComplete={handleSubtopicComplete}
            />
          </div>
        )}
      </div>
    </div>
  );
};