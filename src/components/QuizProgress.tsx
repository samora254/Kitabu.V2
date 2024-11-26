import React from 'react';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredQuestions: boolean[];
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  answeredQuestions,
}) => {
  return (
    <div className="flex space-x-1 mb-8">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full ${
            index === currentQuestion
              ? 'bg-red-500'
              : answeredQuestions[index]
              ? 'bg-green-500'
              : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
};