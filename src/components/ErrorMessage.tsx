import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  onBack?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry, onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6">
        <p className="text-red-500 mb-4">{message}</p>
        <div className="flex gap-4 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors"
            >
              Try Again
            </button>
          )}
          {onBack && (
            <button
              onClick={onBack}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};