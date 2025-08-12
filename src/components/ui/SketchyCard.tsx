import React from 'react';

interface SketchyCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  rotate?: boolean;
}

export default function SketchyCard({
  children,
  className = '',
  variant = 'default',
  rotate = false,
}: SketchyCardProps) {
  const baseClass = `
    relative bg-white p-6 transition-all duration-300
    hover:translate-y-[-2px] rounded-2xl
  `;

  const variantClasses = {
    default: 'shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]',
    elevated: 'shadow-[0_4px_16px_rgba(91,143,185,0.1)] hover:shadow-[0_12px_32px_rgba(91,143,185,0.15)]',
    bordered: 'border border-gray-100 shadow-sm hover:shadow-md',
  };

  const combinedClass = `${baseClass} ${variantClasses[variant]} ${className}`;

  return (
    <div className={combinedClass}>
      {children}
    </div>
  );
}