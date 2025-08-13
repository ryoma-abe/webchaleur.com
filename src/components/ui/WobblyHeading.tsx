import React from 'react';

interface WobblyHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  underline?: boolean;
  english?: string;
}

export default function WobblyHeading({
  children,
  level = 2,
  className = '',
  underline = false,
  english,
}: WobblyHeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const sizeClasses = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  const baseClass = `
    relative inline-block
  `;

  const combinedClass = `${baseClass} ${sizeClasses[level]} ${className}`;

  return (
    <div className="text-center mb-8">
      <Tag className={combinedClass}>
        {children}
        {underline && (
          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-main-blue/40 rounded-full" />
        )}
      </Tag>
      {english && (
        <span className="block mt-2 text-sm text-text-gray font-zenmaru tracking-wider">
          {english}
        </span>
      )}
    </div>
  );
}