import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  leftElement?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  leftElement 
}) => {
  return (
    <div className="min-h-screen bg-[#FDF8FF] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        {leftElement && (
          <div className="absolute top-8 left-8">
            {leftElement}
          </div>
        )}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold">
              <span className="text-black">KITABU</span>
              <span className="text-[#FF69B4]">.AI</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-bold mt-6 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};