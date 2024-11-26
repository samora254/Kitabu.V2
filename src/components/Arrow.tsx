import React from 'react';
import clsx from 'clsx';

interface ArrowProps {
  direction: 'left' | 'right';
  className?: string;
}

export const Arrow: React.FC<ArrowProps> = ({ direction, className }) => {
  return (
    <span 
      className={clsx(
        'text-2xl font-bold leading-none select-none',
        className
      )}
    >
      {direction === 'left' ? '←' : '→'}
    </span>
  );
};