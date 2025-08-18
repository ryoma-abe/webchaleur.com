"use client";

import { useEffect, useState } from "react";

interface TypingAnimationWithDeleteProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  onDeleteComplete?: () => void;
  isDeleting?: boolean;
  initialDisplay?: boolean; // 初期表示で全文表示するかどうか
}

export default function TypingAnimationWithDelete({
  text,
  speed = 100,
  deleteSpeed = 50,
  className = "",
  showCursor = true,
  onComplete,
  onDeleteComplete,
  isDeleting = false,
  initialDisplay = false,
}: TypingAnimationWithDeleteProps) {
  // initialDisplayがtrueの場合は、最初から全文を表示
  const [displayText, setDisplayText] = useState(initialDisplay ? text : "");
  const [currentIndex, setCurrentIndex] = useState(
    initialDisplay ? text.length : 0
  );
  const [isTypeComplete, setIsTypeComplete] = useState(initialDisplay);

  // タイピングアニメーション
  useEffect(() => {
    if (!isDeleting && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === text.length && !isTypeComplete) {
      setIsTypeComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, isDeleting, isTypeComplete, onComplete]);

  // 削除アニメーション
  useEffect(() => {
    if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length === 0 && onDeleteComplete) {
      onDeleteComplete();
    }
  }, [isDeleting, displayText, deleteSpeed, onDeleteComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          className={`inline-block w-0.5 h-[1.2em] bg-current ml-1 animate-pulse`}
        />
      )}
    </span>
  );
}
