"use client";
import HandDrawnButton from "@/components/ui/HandDrawnButton";
import AboutMessage from "./AboutMessage";
import AboutValues from "./AboutValues";
import AboutRepMessage from "./AboutRepMessage";
import { useEffect, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import useInView from "@/hooks/useInView";

export default function AboutSection() {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <section
      id="about"
      className="section-padding bg-white"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <SectionHeader isVisible={isVisible} />

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
