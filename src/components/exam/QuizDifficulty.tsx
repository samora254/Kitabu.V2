import React from 'react';

interface QuizDifficultyProps {
  difficulty: 'easy' | 'medium' | 'hard';
}

export const QuizDifficulty: React.FC<QuizDifficultyProps> = ({ difficulty }) => {
  const getColor = () => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 py-1 rounded text-sm font-medium ${getColor()}`}>
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
  );
};