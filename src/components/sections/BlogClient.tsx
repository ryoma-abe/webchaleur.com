'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
}

interface BlogClientProps {
  items: BlogItem[];
}

export default function BlogClient({ items }: BlogClientProps) {
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

    const element = document.getElementById('blog');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return {
      full: `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`,
      day: String(day),
      month: `${month}月`
    };
  };

  // 読み時間を計算（簡易的に文字数から推定）
  const getReadTime = (description: string) => {
    const wordsPerMinute = 300; // 日本語の平均読書速度
    const minutes = Math.ceil(description.length / wordsPerMinute);
    return `${minutes}分で読める`;
  };

  return (
    <section 
      id="blog"
      className="section-padding bg-[var(--bg-light)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div 
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="heading-section">
            技術ブログ
          </h2>
          <span className="text-caption inline-block">
            Technical Blog
          </span>
        </div>

        {/* ブログカードグリッド */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.length > 0 ? (
            items.map((item, index) => {
              const dateInfo = formatDate(item.date);
              return (
                <article
                  key={item.slug}
                  className={`bg-white hover:shadow-lg transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    borderRadius: '20px',
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <Link href={item.link} className="block p-6">
                    {/* 日付とカテゴリー */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-[var(--main-blue)] font-[var(--font-handwritten)]">
                          {dateInfo.day}
                        </span>
                        <span className="text-xs text-[var(--text-gray)]">
                          {dateInfo.month}
                        </span>
                      </div>
                      <span 
                        className="px-3 py-1 text-xs font-medium bg-[var(--lighter-blue)] text-[var(--main-blue)]"
                        style={{
                          borderRadius: '8px 10px 9px 11px',
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* タイトル */}
                    <h3 className="heading-card mb-3 line-clamp-2 min-h-[56px]">
                      {item.title}
                    </h3>

                    {/* 説明 */}
                    <p className="text-caption mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* メタ情報 */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-[var(--text-gray)] flex items-center gap-1">
                        <span>📖</span>
                        {getReadTime(item.description)}
                      </span>
                    </div>

                    {/* タグ */}
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 text-[var(--text-gray)]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* 読むリンク */}
                    <span className="inline-flex items-center gap-2 text-[var(--main-blue)] font-medium hover:opacity-80 transition-opacity">
                      読んでみる
                      <span>→</span>
                    </span>
                  </Link>
                </article>
              );
            })
          ) : (
            <div className="col-span-3 text-center py-12 text-[var(--text-gray)]">
              <p>現在準備中です</p>
            </div>
          )}
        </div>

        {/* もっと見るボタン */}
        {items.length > 0 && (
          <div 
            className={`text-center mt-12 transition-all duration-800 delay-600 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link
              href="/blog"
              className="btn-secondary"
            >
              すべての記事を読む
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}