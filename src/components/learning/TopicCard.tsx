import React from 'react';
import { motion } from 'framer-motion';
import { useLearning } from '../../contexts/LearningContext';

interface TopicCardProps {
  subjectId: string;
  topic: {
    id: string;
    title: string;
    description: string;
  };
  onClick: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ subjectId, topic, onClick }) => {
  const { getTopicProgress, isTopicCompleted } = useLearning();
  const progress = getTopicProgress(subjectId, topic.id);
  const completed = isTopicCompleted(subjectId, topic.id);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow-sm p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
          <p className="text-gray-600">{topic.description}</p>
        </div>
        {completed && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
            Completed
          </span>
        )}
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="text-gray-800 font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}