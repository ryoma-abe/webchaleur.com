'use client';

import { useEffect, useState } from 'react';

interface Strength {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function Strengths() {
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

    const element = document.getElementById('strengths');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const strengths: Strength[] = [
    {
      id: 1,
      number: '01',
      title: '地元だから、すぐ会える',
      description: '帯広・音更なら30分以内に\nお伺いします',
      icon: '🚗',
    },
    {
      id: 2,
      number: '02',
      title: '最新技術も、おまかせ',
      description: 'Next.jsやShopifyなど\n新しい技術もしっかり対応',
      icon: '💻',
    },
    {
      id: 3,
      number: '03',
      title: '作ったあとも、ずっと一緒',
      description: '更新や修正のご相談も\nいつでもお気軽に',
      icon: '🤝',
    },
  ];

  return (
    <section 
      id="strengths"
      className="section-padding bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div 
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="text-3xl md:text-4xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-2"
          >
            わたしたちの強み
          </h2>
          <span 
            className="text-sm text-[var(--text-gray)] inline-block"
          >
            Our Strengths
          </span>
        </div>

        {/* 強みカードグリッド */}
        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={strength.id}
              className={`relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div 
                className="bg-[var(--bg-light)] p-8 h-full hover:shadow-lg transition-all hover:translate-y-[-4px]"
                style={{
                  borderRadius: '20px',
                }}
              >
                {/* 番号バッジ */}
                <div 
                  className="inline-block mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'white',
                    border: '3px solid var(--main-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span 
                    className="text-[var(--main-blue)] font-bold text-xl font-[var(--font-handwritten)]"
                  >
                    {strength.number}
                  </span>
                </div>

                {/* アイコン */}
                <div className="text-4xl mb-4">{strength.icon}</div>

                {/* タイトル */}
                <h3 
                  className="text-xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-4"
                  style={{ lineHeight: '1.6' }}
                >
                  {strength.title}
                </h3>

                {/* 説明文 */}
                <p 
                  className="text-[var(--text-gray)] whitespace-pre-line"
                  style={{ lineHeight: '1.8' }}
                >
                  {strength.description}
                </p>

                {/* 装飾的な下線 */}
                <div 
                  className="mt-6 h-1 bg-[var(--main-blue)] opacity-20"
                  style={{
                    borderRadius: '2px',
                    width: '60%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 補足メッセージ */}
        <div 
          className={`text-center mt-16 transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p 
            className="text-[var(--text-gray)] text-lg"
          >
            十勝の企業さまの「困った」を
            <span className="text-[var(--main-blue)] font-medium mx-1">まごころ</span>
            で解決します
          </p>
        </div>
      </div>
    </section>
  );
}