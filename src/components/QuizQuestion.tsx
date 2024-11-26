import React from 'react';
import { QuizOption } from './QuizOption';

interface QuizQuestionProps {
  question: {
    text: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  };
  selectedAnswer: number | null;
  showAnswer: boolean;
  onSelectAnswer: (index: number) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  showAnswer,
  onSelectAnswer
}) => {
  return (
    <div className="space-y-4">
      <p className="text-xl font-medium mb-6">{question.text}</p>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <QuizOption
            key={index}
            text={option}
            selected={selectedAnswer === index}
            correct={showAnswer ? index === question.correctAnswer : null}
            onClick={() => onSelectAnswer(index)}
            disabled={showAnswer}
          />
        ))}
      </div>

      {showAnswer && question.explanation && (
        <div className={`mt-6 p-4 rounded-lg ${
          selectedAnswer === question.correctAnswer
            ? 'bg-green-50 text-green-800'
            : 'bg-red-50 text-red-800'
        }`}>
          <p className="font-medium mb-2">
            {selectedAnswer === question.correctAnswer
              ? 'Great! That\'s correct!'
              : 'Oops! That\'s incorrect.'}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
};