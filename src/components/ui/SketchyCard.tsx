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
    hover:translate-y-[-3px] rounded-2xl
  `;

  const variantClasses = {
    default: 'shadow-[4px_4px_0_rgba(0,0,0,0.06)]',
    elevated: 'shadow-[6px_6px_0_rgba(91,143,185,0.15)]',
    bordered: 'border-2 border-dashed border-accent-beige',
  };

  const combinedClass = `${baseClass} ${variantClasses[variant]} ${className}`;

  return (
    <div className={combinedClass}>
      {children}
    </div>
  );
}