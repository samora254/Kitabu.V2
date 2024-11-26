import React from 'react';
import { motion } from 'framer-motion';

interface ExamCardProps {
  subject: string;
  questionCount: number;
  onClick: () => void;
}

export const ExamCard: React.FC<ExamCardProps> = ({ subject, questionCount, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 capitalize">{subject}</h3>
        <p className="text-gray-600 mb-4">
          {questionCount} questions
        </p>
        <div className="flex justify-between items-center">
          <span className="text-green-500">Start Exam</span>
          <span className="text-gray-400">→</span>
        </div>
      </div>
    </motion.div>
  );
};