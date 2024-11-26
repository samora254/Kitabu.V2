import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Howl } from 'howler';

interface QuizScoreProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onExit: () => void;
}

export const QuizScore: React.FC<QuizScoreProps> = ({
  score,
  totalQuestions,
  onRetry,
  onExit
}) => {
  const percentage = (score / totalQuestions) * 100;
  const applauseSound = new Howl({
    src: ['https://raw.githubusercontent.com/samora254/Kitabu/main/Applause%20Sound%20Effect.mp3'],
    volume: 0.5,
    html5: true
  });

  React.useEffect(() => {
    if (percentage >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      applauseSound.play();
    }
    return () => {
      applauseSound.unload();
    };
  }, [percentage]);

  const getFeedback = () => {
    if (percentage >= 90) return 'Excellent! Outstanding performance!';
    if (percentage >= 70) return 'Great job! Well done!';
    if (percentage >= 50) return 'Good effort! Keep practicing!';
    return 'Keep trying! You can improve!';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
        <div className="text-6xl font-bold mb-4 text-green-500">
          {percentage.toFixed(0)}%
        </div>
        <p className="text-xl mb-2">
          You got {score} out of {totalQuestions} questions correct
        </p>
        <p className="text-gray-600 mb-6">{getFeedback()}</p>
        
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={onExit}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Exit Quiz
          </button>
        </div>
      </div>
    </motion.div>
  );
};