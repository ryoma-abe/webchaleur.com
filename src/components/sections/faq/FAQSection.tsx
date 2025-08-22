"use client";

import { useEffect, useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "@/data/faq.json";
import SectionHeader from "../common/SectionHeader";
import useInView from "@/hooks/useInView";

interface FAQItemData {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqItems: FAQItemData[] = faqData.items;

  return (
    <section id="faq" className="section-padding bg-white mb-10" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <SectionHeader
          isVisible={isVisible}
          title="よくある質問"
          subTitle="Q&A"
        />

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id}
              {...item}
              isOpen={openItems.includes(item.id)}
              isVisible={isVisible}
              delay={index * 100}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
