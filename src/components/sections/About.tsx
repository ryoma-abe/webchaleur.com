"use client";

import { useEffect, useState } from "react";
import HandDrawnButton from "@/components/ui/HandDrawnButton";
import SketchyCard from "@/components/ui/SketchyCard";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const values = [
    {
      icon: "🏠",
      title: "地元密着",
      description:
        "帯広・音更なら30分以内にお伺い。対面でのお打ち合わせを大切にしています。",
    },
    {
      icon: "💡",
      title: "最新技術",
      description:
        "Next.jsやShopifyなど、最新の技術で高速・安全なサイトを構築します。",
    },
    {
      icon: "🤝",
      title: "継続サポート",
      description:
        "作った後も安心。更新や修正のご相談もいつでもお気軽にどうぞ。",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-section">私たちについて</h2>
          <span className="text-caption inline-block">About Us</span>
        </div>

        {/* メインメッセージ */}
        <div
          className={`max-w-3xl mx-auto mb-16 transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <SketchyCard variant="elevated">
            <div className="text-center p-4">
              <p className="text-lg text-[var(--text-gray)] font-[var(--font-main)] leading-relaxed mb-4">
                WebChaleurは、十勝・帯広エリアを拠点に
              </p>
              <p className="text-xl font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] mb-4">
                「地域企業様のデジタル化を支援する」
              </p>
              <p className="text-lg text-[var(--text-gray)] font-[var(--font-main)] leading-relaxed">
                Web制作パートナーです。
              </p>
            </div>
          </SketchyCard>
        </div>

        {/* 3つの価値 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className={`transition-all duration-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <SketchyCard className="h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--text-gray)] font-[var(--font-main)]">
                    {value.description}
                  </p>
                </div>
              </SketchyCard>
            </div>
          ))}
        </div>

        {/* 代表メッセージ */}
        <div
          className={`max-w-4xl mx-auto mb-12 transition-all duration-800 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-xl font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] mb-6 text-center">
            代表メッセージ
          </h3>
          <SketchyCard>
            <div className="space-y-4">
              <p className="text-[var(--text-gray)] font-[var(--font-main)] leading-relaxed">
                十勝で生まれ育った私たちは、この地域の温かさと可能性を知っています。
              </p>
              <p className="text-[var(--text-gray)] font-[var(--font-main)] leading-relaxed">
                東京での経験を活かしながら、地元企業様に寄り添い、
                最新技術と温かみのあるデザインで、皆様のビジネスの成長を支援いたします。
              </p>
              <p className="text-[var(--text-gray)] font-[var(--font-main)] leading-relaxed">
                「作って終わり」ではなく、作った後も一緒に成長していける。
                そんなパートナーとして、末永くお付き合いいただければ幸いです。
              </p>
            </div>
          </SketchyCard>
        </div>

        {/* CTAボタン */}
        <div
          className={`text-center transition-all duration-800 delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <HandDrawnButton href="/about" variant="primary" size="medium">
            詳しく見る →
          </HandDrawnButton>
        </div>
      </div>
    </section>
  );
}
