import React from 'react';
import { motion } from 'framer-motion';
import { Arrow } from './Arrow';

interface TopicNavigationProps {
  currentTopic: number;
  totalTopics: number;
  topicTitle: string;
  onPrevious: () => void;
  onNext: () => void;
}

export const TopicNavigation: React.FC<TopicNavigationProps> = ({
  currentTopic,
  totalTopics,
  topicTitle,
  onPrevious,
  onNext
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={onPrevious}
          disabled={currentTopic === 1}
          className="p-3 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous topic"
        >
          <Arrow direction="left" className="text-gray-700" />
        </button>
        
        <motion.div
          key={currentTopic}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center"
        >
          <h2 className="text-xl font-bold">Topic {currentTopic} of {totalTopics}</h2>
          <h3 className="text-lg font-medium text-gray-600">{topicTitle}</h3>
        </motion.div>

        <button
          onClick={onNext}
          disabled={currentTopic === totalTopics}
          className="p-3 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next topic"
        >
          <Arrow direction="right" className="text-gray-700" />
        </button>
      </div>
      
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentTopic / totalTopics) * 100}%` }}
        />
      </div>
    </div>
  );
};