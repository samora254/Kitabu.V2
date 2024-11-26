import React from 'react';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredQuestions: boolean[];
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  answeredQuestions
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="text-sm font-medium text-gray-600">
          {Math.round((answeredQuestions.filter(Boolean).length / totalQuestions) * 100)}% Complete
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{
            width: `${(answeredQuestions.filter(Boolean).length / totalQuestions) * 100}%`
          }}
        />
      </div>
    </div>
  );
};