import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question } from '../../types/exam';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface ExamPaperProps {
  subject: string;
  grade: number;
  term: string;
  questions: Question[];
  onBack: () => void;
}

export const ExamPaper: React.FC<ExamPaperProps> = ({
  subject,
  grade,
  term,
  questions,
  onBack
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const resultsSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleAnswerSelect = (questionId: number, answer: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (question.options && userAnswers[index] === question.options[question.correctAnswer]) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const handleSubmit = () => {
    const totalScore = calculateScore();
    setScore(totalScore);
    setIsSubmitted(true);
    
    if (totalScore / questions.length >= 0.7) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReview = () => {
    setShowAnswers(true);
  };

  const handleNewExam = () => {
    navigate('/revision-papers', { 
      state: { 
        generateNew: true,
        subject,
        grade 
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-500 text-white p-6 relative">
        <button
          onClick={onBack}
          className="absolute top-6 left-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Back to Revision Papers"
        >
          ←
        </button>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2 capitalize">{subject} Exam</h1>
          <p className="text-white/80">Grade {grade} - {term}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {!isSubmitted && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Instructions:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Read each question carefully before answering</li>
              <li>Answer all questions in the spaces provided</li>
              <li>Show your working where necessary</li>
              <li>You have 1 hour to complete this exam</li>
            </ul>
          </div>
        )}

        {isSubmitted && !showAnswers && (
          <motion.div
            ref={resultsSectionRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-white rounded-lg shadow text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Exam Complete!</h2>
            <div className="text-5xl font-bold text-green-500 mb-4">
              {Math.round((score / questions.length) * 100)}%
            </div>
            <p className="text-xl mb-2">
              You got {score} out of {questions.length} questions correct
            </p>
            <p className="text-gray-600 mb-6">
              {score === questions.length
                ? 'Perfect score! Outstanding work! 🌟'
                : score >= questions.length * 0.7
                ? 'Great job! Keep it up! 🎯'
                : 'Good effort! Keep practicing! 💪'}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleReview}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Review Answers
              </button>
              <button
                onClick={handleNewExam}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                New Exam
              </button>
            </div>
          </motion.div>
        )}

        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={question.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start">
                <span className="mr-4 bg-green-100 text-green-800 px-2 py-1 rounded">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-gray-800 mb-4">{question.text}</p>

                  {question.type === 'multiple-choice' && question.options && (
                    <div className="space-y-2">
                      {question.options.map((option, optIndex) => (
                        <label 
                          key={optIndex} 
                          className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                            userAnswers[index] === option 
                              ? 'bg-blue-50 border border-blue-200' 
                              : 'hover:bg-gray-50'
                          } ${isSubmitted ? 'cursor-default' : ''}`}
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            checked={userAnswers[index] === option}
                            onChange={() => handleAnswerSelect(index, option)}
                            disabled={isSubmitted}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                          {showAnswers && optIndex === question.correctAnswer && (
                            <span className="ml-2 text-green-600">✓</span>
                          )}
                        </label>
                      ))}
                    </div>
                  )}

                  {showAnswers && question.explanation && (
                    <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-lg">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isSubmitted && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleSubmit}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                Object.keys(userAnswers).length < questions.length
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
              disabled={Object.keys(userAnswers).length < questions.length}
            >
              Submit Exam
            </button>
          </div>
        )}

        {showAnswers && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleNewExam}
              className="px-8 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Try Another Exam
            </button>
          </div>
        )}
      </div>
    </div>
  );
};