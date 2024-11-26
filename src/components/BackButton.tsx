import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Arrow } from './Arrow';

interface BackButtonProps {
  className?: string;
  customPath?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ className = '', customPath }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (customPath) {
      navigate(customPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className={`text-gray-600 hover:text-gray-800 transition-colors ${className}`}
      aria-label="Go back"
    >
      <Arrow direction="left" />
    </button>
  );
};