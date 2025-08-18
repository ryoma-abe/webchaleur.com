"use client";

import { useState, useEffect } from "react";
import TypingAnimationWithDelete from "@/components/animations/TypingAnimationWithDelete";

// デスクトップ用の動的タイトル
export default function HeroTitleDynamic() {
  const [currentMessageSet, setCurrentMessageSet] = useState(0);
  const [currentLine, setCurrentLine] = useState(2);
  const [isDeleting, setIsDeleting] = useState(false);
  const [lines, setLines] = useState<string[]>(["", "", ""]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const messages = [
    {
      line1: "十勝の企業様の",
      line2: "Webサイトのこと",
      line3: "お手伝いします。",
    },
    {
      line1: "100件以上の制作実績で",
      line2: "培った技術力で",
      line3: "サポートします。",
    },
    {
      line1: "Next.js・Astroなど",
      line2: "最新技術も",
      line3: "しっかり対応。",
    },
    {
      line1: "制作後の運用も",
      line2: "ずっと一緒に",
      line3: "フォローします。",
    },
  ];

  useEffect(() => {
    // 初期メッセージを全て表示した状態でセット
    setLines([messages[0].line1, messages[0].line2, messages[0].line3]);
    
    // 3秒間表示してから削除を開始
    const timer = setTimeout(() => {
      setIsDeleting(true);
      setCurrentLine(2);
      setIsFirstRender(false);
    }, 3000);
    
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // タイピング完了時の処理
  const handleLineComplete = (lineIndex: number) => {
    if (lineIndex === 0) {
      setLines((prev) => [prev[0], messages[currentMessageSet].line2, ""]);
      setCurrentLine(1);
    } else if (lineIndex === 1) {
      setLines((prev) => [prev[0], prev[1], messages[currentMessageSet].line3]);
      setCurrentLine(2);
    } else if (lineIndex === 2) {
      if (currentMessageSet < messages.length - 1) {
        setTimeout(() => {
          setIsDeleting(true);
          setCurrentLine(2);
        }, 5000);
      }
    }
  };

  // 削除完了時の処理
  const handleDeleteComplete = (lineIndex: number) => {
    if (lineIndex === 2) {
      setLines((prev) => [prev[0], prev[1], ""]);
      setCurrentLine(1);
    } else if (lineIndex === 1) {
      setLines((prev) => [prev[0], "", ""]);
      setCurrentLine(0);
    } else if (lineIndex === 0) {
      const nextIndex = (currentMessageSet + 1) % messages.length;
      setCurrentMessageSet(nextIndex);
      setLines(["", "", ""]);
      setIsDeleting(false);

      setTimeout(() => {
        setLines([messages[nextIndex].line1, "", ""]);
        setCurrentLine(0);
      }, 200);
    }
  };

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 lg:mb-10 min-h-[200px] lg:min-h-[250px]">
      <span className="block mb-2 min-h-[1.2em]">
        {lines[0] && (
          <TypingAnimationWithDelete
            key={`line1-${currentMessageSet}`}
            text={lines[0]}
            speed={80}
            deleteSpeed={40}
            showCursor={currentLine === 0 || (currentLine === 0 && isDeleting)}
            onComplete={() => !isDeleting && handleLineComplete(0)}
            onDeleteComplete={() => handleDeleteComplete(0)}
            isDeleting={isDeleting && currentLine === 0}
            initialDisplay={isFirstRender}
          />
        )}
      </span>
      <span className="text-primary-blue block relative text-[1.2em] mb-2 min-h-[1.2em]">
        {lines[1] && (
          <>
            <TypingAnimationWithDelete
              key={`line2-${currentMessageSet}`}
              text={lines[1]}
              speed={80}
              deleteSpeed={40}
              showCursor={currentLine === 1 || (currentLine === 1 && isDeleting)}
              onComplete={() => !isDeleting && handleLineComplete(1)}
              onDeleteComplete={() => handleDeleteComplete(1)}
              isDeleting={isDeleting && currentLine === 1}
              initialDisplay={isFirstRender}
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#2c5478] to-transparent opacity-40 rounded-sm" />
          </>
        )}
      </span>
      <span className="block min-h-[1.2em]">
        {lines[2] && (
          <TypingAnimationWithDelete
            key={`line3-${currentMessageSet}`}
            text={lines[2]}
            speed={80}
            deleteSpeed={40}
            showCursor={true}
            onComplete={() => !isDeleting && handleLineComplete(2)}
            onDeleteComplete={() => handleDeleteComplete(2)}
            isDeleting={isDeleting && currentLine === 2}
            initialDisplay={isFirstRender}
          />
        )}
      </span>
    </h1>
  );
}