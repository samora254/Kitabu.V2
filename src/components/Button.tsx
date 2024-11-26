import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'px-4 py-3 rounded-md font-medium transition-colors',
        {
          'bg-black text-white hover:bg-gray-800': variant === 'primary',
          'border border-gray-300 hover:bg-gray-50': variant === 'outline',
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}