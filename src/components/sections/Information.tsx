'use client';

import { useEffect, useState } from 'react';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  link?: string;
}

export default function Information() {
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

    const element = document.getElementById('information');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: '2024.12.20',
      category: 'お知らせ',
      title: '年末年始の営業についてのご案内',
    },
    {
      id: 2,
      date: '2024.12.15',
      category: '制作実績',
      title: '帯広市の○○農園様のECサイトをリニューアルしました',
    },
    {
      id: 3,
      date: '2024.11.28',
      category: 'ブログ',
      title: 'Shopifyで作る地域産品のオンラインショップ構築術',
    },
    {
      id: 4,
      date: '2024.11.10',
      category: 'お知らせ',
      title: 'ココナラでの評価が150件を突破しました！',
    },
  ];

  return (
    <section 
      id="information"
      className="section-padding bg-[var(--bg-light)]"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div 
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="heading-section"
          >
            お知らせ
          </h2>
          <span 
            className="text-caption inline-block"
          >
            Information
          </span>
        </div>

        {/* ニュースリスト */}
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={`bg-white p-6 hover:shadow-md transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{
                borderRadius: '16px',
                transitionDelay: `${index * 100}ms`,
                border: '1px solid rgba(91, 143, 185, 0.08)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* 日付 */}
                <time 
                  className="text-[var(--main-blue)] font-[var(--font-handwritten)] font-semibold text-lg"
                  style={{ minWidth: '120px' }}
                >
                  {item.date}
                </time>

                {/* カテゴリー */}
                <span 
                  className="inline-block px-3 py-1 text-xs font-medium text-white bg-[var(--light-blue)]"
                  style={{
                    borderRadius: '10px 12px 11px 13px',
                    width: 'fit-content',
                  }}
                >
                  {item.category}
                </span>

                {/* タイトル */}
                <h3 className="flex-1 text-primary font-medium hover:text-[var(--main-blue)] transition-colors cursor-pointer">
                  {item.title}
                </h3>

                {/* 矢印 */}
                <span className="text-body text-xl hidden md:block">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div 
          className={`text-center mt-10 transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="/news"
            className="inline-block text-[var(--main-blue)] font-medium hover:opacity-80 transition-opacity"
          >
            <span className="inline-flex items-center gap-2">
              すべてのお知らせを見る
              <span>→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}