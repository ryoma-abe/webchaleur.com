"use client";

import { useEffect, useState } from "react";
import StrengthsGrid from "./StrengthsGrid";
import StrengthsAppeal from "./StrengthsAppeal";
import SectionHeader from "../common/SectionHeader";

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
        <SectionHeader
          isVisible={isVisible}
          title="WebChaleurの強み"
          subTitle="Our Strengths"
        />

        {/* 強みカードグリッド */}
        <StrengthsGrid isVisible={isVisible} />

        {/* 特別なアピールセクション */}
        <StrengthsAppeal isVisible={isVisible} />
      </div>
    </section>
  );
}
