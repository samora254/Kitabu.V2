import React from 'react';
import { motion } from 'framer-motion';
import { useLearning } from '../../contexts/LearningContext';

interface SubtopicCardProps {
  subjectId: string;
  topicId: string;
  subtopic: {
    id: string;
    title: string;
    content: string;
  };
  onSelect: () => void;
}

export const SubtopicCard: React.FC<SubtopicCardProps> = ({
  subjectId,
  topicId,
  subtopic,
  onSelect
}) => {
  const { isSubtopicCompleted } = useLearning();
  const completed = isSubtopicCompleted(subjectId, topicId, subtopic.id);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-4 rounded-lg cursor-pointer transition-colors ${
        completed
          ? 'bg-green-50 border border-green-200'
          : 'bg-white border border-gray-200 hover:border-blue-200'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between">
        <h4 className="font-medium">{subtopic.title}</h4>
        {completed && (
          <span className="text-green-600">✓</span>
        )}
      </div>
    </motion.div>
  );
}