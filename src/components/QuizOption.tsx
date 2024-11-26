import React from 'react';
import { motion } from 'framer-motion';

interface QuizOptionProps {
  text: string;
  selected: boolean;
  correct: boolean | null;
  onClick: () => void;
  disabled: boolean;
}

export const QuizOption: React.FC<QuizOptionProps> = ({
  text,
  selected,
  correct,
  onClick,
  disabled
}) => {
  const getStyles = () => {
    if (!selected && !disabled) return 'border-gray-200 hover:border-blue-500';
    if (selected && correct === null) return 'border-blue-500 bg-blue-50';
    if (selected && correct === true) return 'border-green-500 bg-green-50';
    if (selected && correct === false) return 'border-red-500 bg-red-50';
    if (!selected && correct === true) return 'border-green-500 bg-green-50';
    return 'border-gray-200';
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-4 text-left rounded-lg border ${getStyles()} transition-colors`}
      role="option"
      aria-selected={selected}
      aria-disabled={disabled}
    >
      <div className="flex justify-between items-center">
        <span>{text}</span>
        {selected && correct !== null && (
          <span className="text-xl">
            {correct ? '✓' : '✗'}
          </span>
        )}
      </div>
    </motion.button>
  );
};