"use client";

import { useEffect, useState } from "react";
import HandDrawnButton from "@/components/ui/HandDrawnButton";
import AboutMessage from "./AboutMessage";
import AboutValues from "./AboutValues";
import AboutRepMessage from "./AboutRepMessage";

export default function AboutSection() {
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

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-section">私について</h2>
          <span className="text-caption inline-block">About Us</span>
        </div>

        {/* メインメッセージ */}
        <AboutMessage isVisible={isVisible} />

        {/* 3つの価値 */}
        <AboutValues isVisible={isVisible} />

        {/* 代表メッセージ */}
        <AboutRepMessage isVisible={isVisible} />

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