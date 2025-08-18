import React from "react";
import Link from "next/link";

interface HandDrawnButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
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
  target,
  rel,
}: HandDrawnButtonProps) {
  // ボタンのクラスを組み合わせ
  const sizeClass = size === "small" ? "btn-small" : size === "large" ? "btn-large" : "";
  const combinedClass = `btn-${variant} ${sizeClass} ${className}`.trim();

  if (href) {
    // 外部リンクかどうかを判定
    const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={combinedClass}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        >
          {children}
        </a>
      );
    }
    
    // 内部リンクの場合はLinkコンポーネントを使用
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass} disabled={disabled}>
      {children}
    </button>
  );
}
