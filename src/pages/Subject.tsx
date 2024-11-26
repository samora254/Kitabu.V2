import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TopicNavigation } from '../components/TopicNavigation';
import { useGrade } from '../contexts/GradeContext';
import { useSubjectContent } from '../hooks/useGradeContent';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const Subject: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { selectedGrade } = useGrade();
  const { content, loading, error } = useSubjectContent(selectedGrade, subjectId || '');
  
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  const handleBrainTeaseClick = () => {
    navigate(`/brain-tease/${subjectId}`);
  };

  const handleQuizClick = () => {
    navigate(`/quiz/${subjectId}`);
  };

  const handleLearningClick = () => {
    if (content?.topics?.[currentTopicIndex]) {
      navigate(`/learning/${subjectId}/${content.topics[currentTopicIndex].id}`);
    }
  };

  const handleBackClick = () => {
    navigate('/home');
  };

  const goToNextTopic = () => {
    if (content?.topics && currentTopicIndex < content.topics.length - 1) {
      setCurrentTopicIndex(prev => prev + 1);
    }
  };

  const goToPreviousTopic = () => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(prev => prev - 1);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !content) {
    return <ErrorMessage message={error || 'Failed to load subject content'} />;
  }

  const { subject, topics } = content;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-emerald-400 text-white p-6 relative">
        <button
          onClick={handleBackClick}
          className="absolute top-6 left-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Back to Dashboard"
        >
          ←
        </button>
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-2">Grade {selectedGrade}</h1>
          <p className="capitalize">{subject.name}</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4">
        {topics && topics.length > 0 && (
          <TopicNavigation
            currentTopic={currentTopicIndex + 1}
            totalTopics={topics.length}
            topicTitle={topics[currentTopicIndex].title}
            onPrevious={goToPreviousTopic}
            onNext={goToNextTopic}
          />
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* Brain Teaser Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold">Brain Tease</h3>
                <p className="text-gray-500 text-sm">Warm up your mind with quick exercises</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                🧠
              </div>
            </div>
            <button
              onClick={handleBrainTeaseClick}
              className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
            >
              Start Challenge
            </button>
          </div>

          {/* Let's Learn Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold">Let's Learn</h3>
                <p className="text-gray-500 text-sm">Master the concepts with interactive lessons</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                📚
              </div>
            </div>
            <button 
              onClick={handleLearningClick}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Start Learning
            </button>
          </div>

          {/* Quiz Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold">Take Quiz</h3>
                <p className="text-gray-500 text-sm">Check your understanding with a quiz</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                📝
              </div>
            </div>
            <button
              onClick={handleQuizClick}
              className="w-full bg-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-600 transition-colors"
            >
              Take Quiz
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};