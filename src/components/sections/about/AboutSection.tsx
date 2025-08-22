"use client";
import AboutMessage from "./AboutMessage";
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
        
        <SectionHeader
          isVisible={isVisible}
          title="WebChaleurについて"
          subTitle="AboutUs"
        />

        
        <AboutMessage isVisible={isVisible} />

        
        <div
          className={`text-center transition-all duration-800 delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a 
            href="/about" 
            className="inline-flex items-center px-6 py-3 bg-main-blue text-white rounded-full hover:bg-main-blue/90 transition-colors"
          >
            詳しく見る →
          </a>
        </div>
      </div>
    </section>
  );
}
