import React from "react";

interface HandDrawnButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function HandDrawnButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
}: HandDrawnButtonProps) {
  const baseClass = `
    inline-block font-klee relative transition-all duration-300
    hover:translate-y-[-2px] hover:rotate-[0.3deg]
    active:translate-y-[1px] active:rotate-[-0.1deg]
  `;

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-main-blue text-primary hover:bg-light-blue shadow-[3px_3px_0_rgba(0,0,0,0.1)]",
    secondary:
      "bg-accent-beige text-text-dark hover:bg-lighter-blue shadow-[3px_3px_0_rgba(0,0,0,0.08)]",
    outline:
      "bg-transparent text-main-blue border-2 border-main-blue hover:bg-main-blue hover:text-white",
  };

  const combinedClass = `${baseClass} ${sizeClasses[size]} ${variantClasses[variant]} rounded-2xl ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
