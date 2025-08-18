"use client";

import { useEffect, useState } from "react";
import HeroTitleDynamic from "./HeroTitleDynamic";
import HeroSubtext from "./HeroSubtext";
import HeroCTA from "./HeroCTA";
import HeroNews from "./HeroNews";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  slug: string;
}

interface HeroSectionProps {
  latestNews: NewsItem[];
}

export default function HeroSection({ latestNews }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white py-12 lg:py-16">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center">
          {/* メインタイトル - 最適化されたタイピングアニメーション */}
          <HeroTitleDynamic isVisible={isVisible} />

          {/* サブテキスト - 中央揃え */}
          <HeroSubtext isVisible={isVisible} />

          {/* CTA ボタン - 中央に大きく */}
          <HeroCTA isVisible={isVisible} />

          {/* 最新のお知らせ */}
          <HeroNews latestNews={latestNews} isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}
