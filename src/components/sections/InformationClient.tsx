'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface NewsItem {
  slug: string;
  date: string;
  category: string;
  title: string;
  link: string;
  type: 'news' | 'blog' | 'works';
}

interface InformationClientProps {
  items: NewsItem[];
}

export default function InformationClient({ items }: InformationClientProps) {
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

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  // カテゴリーの色を決定
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'キャンペーン':
        return 'bg-yellow-500';
      case 'ブログ':
        return 'bg-primary-light';
      case '制作実績':
        return 'bg-primary';
      default:
        return 'bg-primary-light';
    }
  };

  return (
    <section 
      id="information"
      className="section-padding bg-light"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div 
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="heading-section">
            お知らせ
          </h2>
          <span className="text-caption inline-block">
            Information
          </span>
        </div>

        {/* ニュースリスト */}
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <article
                key={`${item.type}-${item.slug}`}
                className={`bg-white p-6 hover:shadow-md transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{
                  borderRadius: '16px',
                  transitionDelay: `${index * 100}ms`,
                  border: '1px solid rgba(91, 143, 185, 0.08)',
                }}
              >
                <Link href={item.link} className="flex flex-col md:flex-row md:items-center gap-4 group">
                  {/* 日付 */}
                  <time 
                    className="text-primary-blue font-[var(--font-handwritten)] font-semibold text-lg"
                    style={{ minWidth: '120px' }}
                  >
                    {formatDate(item.date)}
                  </time>

                  {/* カテゴリー */}
                  <span 
                    className={`inline-block px-3 py-1 text-xs font-medium text-white ${getCategoryColor(item.category)}`}
                    style={{
                      borderRadius: '10px 12px 11px 13px',
                      width: 'fit-content',
                    }}
                  >
                    {item.category}
                  </span>

                  {/* タイトル */}
                  <h3 className="flex-1 text-primary font-medium group-hover:text-primary-blue transition-colors">
                    {item.title}
                  </h3>

                  {/* 矢印 */}
                  <span className="text-body text-xl hidden md:block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </article>
            ))
          ) : (
            <div className="text-center py-12 text-gray">
              <p>現在お知らせはありません</p>
            </div>
          )}
        </div>

        {/* もっと見るボタン */}
        {items.length > 0 && (
          <div 
            className={`text-center mt-10 transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link
              href="/news"
              className="inline-block text-primary-blue font-medium hover:opacity-80 transition-opacity"
            >
              <span className="inline-flex items-center gap-2">
                すべてのお知らせを見る
                <span>→</span>
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}