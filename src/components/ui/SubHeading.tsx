import { ReactNode } from 'react';

type SubHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function SubHeading({ children, className = "" }: SubHeadingProps) {
  return (
    <h3 className={`text-xl md:text-2xl font-klee font-semibold text-primary mt-8 mb-4 ${className}`}>
      {children}
    </h3>
  );
}