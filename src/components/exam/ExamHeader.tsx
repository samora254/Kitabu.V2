import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ExamHeaderProps {
  grade: number;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({ grade }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="bg-green-500 text-white p-6 relative">
      <button
        onClick={handleBack}
        className="absolute top-6 left-4 text-white hover:text-gray-200 transition-colors"
        aria-label="Back to Home"
      >
        ←
      </button>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Revision Papers</h1>
        <p className="text-white/80">Grade {grade}</p>
      </div>
    </div>
  );
};