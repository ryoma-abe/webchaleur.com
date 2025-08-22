"use client";

import { useEffect, useState } from "react";
import StrengthsGrid from "./StrengthsGrid";
import StrengthsAppeal from "./StrengthsAppeal";
import SectionHeader from "../common/SectionHeader";
import useInView from "@/hooks/useInView";

export default function StrengthsSection() {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <section id="strengths" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <SectionHeader
          isVisible={isVisible}
          title="WebChaleurの強み"
          subTitle="Our Strengths"
        />

        
        <StrengthsGrid isVisible={isVisible} />

        
        <StrengthsAppeal isVisible={isVisible} />
      </div>
    </section>
  );
}
