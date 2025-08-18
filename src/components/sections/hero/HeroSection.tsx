"use client";

import HeroTitle from "./HeroTitle";
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

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white py-12 lg:py-16">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center">
          {/* メインタイトル - タイピングアニメーション */}
          <HeroTitle />

          {/* サブテキスト - 中央揃え */}
          <HeroSubtext />

          {/* CTA ボタン - 中央に大きく */}
          <HeroCTA />

          {/* 最新のお知らせ */}
          <HeroNews latestNews={latestNews} />
        </div>
      </div>
    </section>
  );
}
