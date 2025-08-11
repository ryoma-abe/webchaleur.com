import React from "react";

interface HandDrawnButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function HandDrawnButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  disabled = false,
}: HandDrawnButtonProps) {
  // ボタンのクラスを組み合わせ
  const sizeClass = size === "small" ? "btn-small" : size === "large" ? "btn-large" : "";
  const combinedClass = `btn-${variant} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass} disabled={disabled}>
      {children}
    </button>
  );
}
