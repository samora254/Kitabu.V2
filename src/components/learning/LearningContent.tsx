import React from 'react';
import { motion } from 'framer-motion';
import { marked } from 'marked';
import { useLearning } from '../../contexts/LearningContext';

interface LearningContentProps {
  subjectId: string;
  topicId: string;
  subtopicId: string;
  content: string;
  onComplete: () => void;
}

export const LearningContent: React.FC<LearningContentProps> = ({
  subjectId,
  topicId,
  subtopicId,
  content,
  onComplete
}) => {
  const { isSubtopicCompleted } = useLearning();
  const completed = isSubtopicCompleted(subjectId, topicId, subtopicId);

  // Configure marked options for security
  marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true
  });

  // Convert markdown to HTML
  const htmlContent = marked(content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm p-6"
    >
      <div 
        className="prose max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {!completed && (
        <button
          onClick={onComplete}
          className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
        >
          Mark as Complete
        </button>
      )}

      {completed && (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
          <p className="font-medium">You've completed this section! 🎉</p>
          <p className="text-sm mt-1">Feel free to review the content anytime.</p>
        </div>
      )}
    </motion.div>
  );
};