'use client';

import { useEffect, useState } from 'react';
import faqData from '@/data/faq.json';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
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

  const faqItems: FAQItem[] = faqData.items;

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
          <h2 
            className="heading-section"
          >
            よくある質問
          </h2>
          <span 
            className="text-caption inline-block"
          >
            FAQ
          </span>
        </div>

        {/* FAQ リスト */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`border border-[var(--accent-beige)] overflow-hidden transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{
                borderRadius: '16px',
                transitionDelay: `${index * 100}ms`,
                borderStyle: 'dashed',
              }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left hover:bg-[var(--bg-light)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <span 
                      className="inline-flex items-center justify-center w-8 h-8 bg-primary-lighter text-primary-blue font-bold text-sm"
                      style={{
                        borderRadius: '50%',
                      }}
                    >
                      Q
                    </span>
                    <span className="flex-1 text-primary font-medium pr-4">
                      {item.question}
                    </span>
                  </div>
                  <span 
                    className={`text-2xl text-primary-blue transition-transform ${
                      openItems.includes(item.id) ? 'rotate-45' : ''
                    }`}
                    style={{ minWidth: '24px' }}
                  >
                    +
                  </span>
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all ${
                  openItems.includes(item.id) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="flex items-start gap-4">
                    <span 
                      className="inline-flex items-center justify-center w-8 h-8 bg-white border-2 border-primary text-primary-blue font-bold text-sm"
                      style={{
                        borderRadius: '50%',
                      }}
                    >
                      A
                    </span>
                    <p className="flex-1 text-[var(--text-gray)] whitespace-pre-line leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 追加の質問への誘導 */}
        <div 
          className={`text-center mt-12 transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-body mb-4">
            その他のご質問も
            <span className="text-primary-blue font-medium mx-1">お気軽に</span>
            お問い合わせください
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}