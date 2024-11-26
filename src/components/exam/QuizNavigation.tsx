import React from 'react';

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  hasAnswered: boolean;
}

export const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onSubmit,
  hasAnswered
}) => {
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
          currentQuestion === 0
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Previous
      </button>

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          disabled={!hasAnswered}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            hasAnswered
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit Quiz
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!hasAnswered}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            hasAnswered
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      )}
    </div>
  );
};