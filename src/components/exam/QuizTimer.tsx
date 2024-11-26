import React, { useState, useEffect } from 'react';

interface QuizTimerProps {
  duration: number; // in minutes
  onTimeUp: () => void;
}

export const QuizTimer: React.FC<QuizTimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`text-lg font-semibold ${timeLeft < 60 ? 'text-red-500' : 'text-gray-700'}`}>
      Time Left: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};