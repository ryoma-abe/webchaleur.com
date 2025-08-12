'use client';

import { useEffect, useState } from 'react';
import FAQItem from './FAQItem';
import faqData from '@/data/faq.json';

interface FAQItemData {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('faq');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqItems: FAQItemData[] = faqData.items;

  return (
    <section 
      id="faq"
      className="section-padding bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div 
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="heading-section">
            よくある質問
          </h2>
          <span className="text-caption inline-block">
            FAQ
          </span>
        </div>

        {/* FAQ リスト */}
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