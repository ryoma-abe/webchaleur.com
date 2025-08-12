"use client";

import { useEffect, useState } from "react";
import StrengthsGrid from "./StrengthsGrid";
import StrengthsAppeal from "./StrengthsAppeal";

export default function StrengthsSection() {
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

    const element = document.getElementById("strengths");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="strengths" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-section">私の強み</h2>
          <span className="text-caption inline-block">Our Strengths</span>
          <p className="text-body mt-4 max-w-3xl mx-auto">
            100件以上の制作実績を活かし、十勝・帯広から全国へ。
            <br />
            <span className="text-primary-blue font-medium">AI活用</span>や
            <span className="text-primary-blue font-medium">SNS運用</span>まで、
            最新のデジタルマーケティングをサポート
          </p>
        </div>

        {/* 強みカードグリッド */}
        <StrengthsGrid isVisible={isVisible} />

        {/* 特別なアピールセクション */}
        <StrengthsAppeal isVisible={isVisible} />
      </div>
    </section>
  );
}