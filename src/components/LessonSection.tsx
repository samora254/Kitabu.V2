import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LessonSectionProps {
  id: number;
  title: string;
  content: string;
  isCompleted: boolean;
  isExpanded: boolean;
  onToggle: (id: number) => void;
  onComplete: () => void;
}

export const LessonSection: React.FC<LessonSectionProps> = ({
  id,
  title,
  content,
  isCompleted,
  isExpanded,
  onToggle,
  onComplete
}) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle(id)}
        className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex items-center">
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
            isCompleted ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'
          }`}>
            {isCompleted && <span className="text-white text-sm">✓</span>}
          </div>
          <span className="font-medium">{title}</span>
        </div>
        <span className="transform transition-transform duration-200 text-xl">
          {isExpanded ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t"
          >
            <div className="p-4 whitespace-pre-line">
              <p className="text-gray-600 mb-4">{content}</p>
              {!isCompleted && (
                <button
                  onClick={onComplete}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Mark as Complete
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};