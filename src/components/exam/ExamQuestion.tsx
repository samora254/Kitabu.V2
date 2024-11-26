import React from 'react';

interface ExamQuestionProps {
  number: number;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'short-answer';
  options?: string[];
  answer?: string;
  showAnswer?: boolean;
}

export const ExamQuestion: React.FC<ExamQuestionProps> = ({
  number,
  question,
  type,
  options = [],
  answer,
  showAnswer = false
}) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-start">
        <span className="mr-4 bg-green-100 text-green-800 px-2 py-1 rounded">
          {number}
        </span>
        <div className="flex-1">
          <p className="text-gray-800 mb-3">{question}</p>
          
          {type === 'multiple-choice' && options.length > 0 && (
            <div className="space-y-2">
              {options.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                  <input type="radio" name={`question-${number}`} className="text-green-600" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}

          {type === 'true-false' && (
            <div className="space-x-4">
              <label className="inline-flex items-center space-x-2">
                <input type="radio" name={`question-${number}`} className="text-green-600" />
                <span>True</span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input type="radio" name={`question-${number}`} className="text-green-600" />
                <span>False</span>
              </label>
            </div>
          )}

          {type === 'fill-blank' && (
            <div className="mt-2">
              <input
                type="text"
                className="w-32 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your answer..."
              />
            </div>
          )}

          {type === 'short-answer' && (
            <div className="mt-2">
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
                placeholder="Write your answer here..."
              />
            </div>
          )}

          {showAnswer && answer && (
            <div className="mt-3 p-2 bg-green-50 text-green-800 rounded">
              <strong>Answer:</strong> {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};