import { ReactNode } from 'react';

type SubHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function SubHeading({ children, className = "" }: SubHeadingProps) {
  return (
    <h2 className={`text-xl text-primary mt-8 mb-4 ${className}`}>
      {children}
    </h2>
  );
}