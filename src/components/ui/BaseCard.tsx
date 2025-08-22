import { ReactNode } from 'react';


function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  shadow?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function BaseCard({
  children,
  className,
  hover = true,
  onClick,
  shadow = 'md',
  rounded = 'lg'
}: BaseCardProps) {
  const shadowStyles = {
    sm: 'shadow-[0_2px_4px_rgba(0,0,0,0.02)]',
    md: 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
    lg: 'shadow-[0_4px_12px_rgba(0,0,0,0.06)]'
  };

  const roundedStyles = {
    sm: 'rounded-[12px]',
    md: 'rounded-[16px]',
    lg: 'rounded-[20px]',
    xl: 'rounded-[24px]'
  };

  return (
    <div
      className={cn(
        'bg-white border border-[var(--accent-beige)] overflow-hidden',
        'transition-all duration-500 ease-out',
        shadowStyles[shadow],
        roundedStyles[rounded],
        hover && 'hover:translate-y-[-3px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}