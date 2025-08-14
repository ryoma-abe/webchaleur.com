import { ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl text-primary mb-10 text-center font-klee ${className}`}>
      {children}
    </h2>
  );
}