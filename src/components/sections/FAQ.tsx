'use client';

import { useEffect, useState } from 'react';

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

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: '料金はどの程度ですか？',
      answer: 'サイトの規模によりますが、30万円から承っております。\nシンプルな企業サイトは30万円から、ECサイトは50万円から、大規模なシステム開発は100万円からが目安です。\nまずはお気軽にご相談ください。無料でお見積もりいたします。',
    },
    {
      id: 2,
      question: '制作期間はどのくらいかかりますか？',
      answer: '規模にもよりますが、一般的な企業サイトで1〜2ヶ月程度です。\nランディングページは2週間〜、ECサイトは2〜3ヶ月が目安となります。\nお急ぎの場合は特急対応も可能ですので、ご相談ください。',
    },
    {
      id: 3,
      question: '遠方でも対応してもらえますか？',
      answer: 'はい、全国どこでも対応可能です！\n十勝エリア（帯広・音更・芽室・幕別など）は直接お伺いしての打ち合わせが可能で、\nそれ以外の地域はZoomやGoogle Meetなどオンラインでの打ち合わせで対応いたします。\n実際に道外のお客様とも多数お取引させていただいております。',
    },
    {
      id: 4,
      question: '制作後の更新や修正はお願いできますか？',
      answer: 'もちろん対応いたします。\n月額保守契約（月額1万円から）をご利用いただければ、定期的な更新や軽微な修正を承ります。\nスポット対応も可能ですので、お気軽にご相談ください。',
    },
    {
      id: 5,
      question: 'WordPressやShopifyなどの既存サイトの改修もできますか？',
      answer: 'はい、対応可能です！\n既存サイトのリニューアル、機能追加、デザイン変更など承っております。\nまずは現状のサイトを確認させていただき、最適なご提案をいたします。',
    },
  ];

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