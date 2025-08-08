'use client';

import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  tags: string[];
}

export default function Blog() {
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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      date: '2024.12.25',
      category: '技術',
      title: 'Next.js 14でISRを使った高速サイトの作り方',
      excerpt: '静的サイト生成とサーバーサイドレンダリングのいいとこ取りができるISRについて、実装例を交えて解説します。',
      readTime: '5分で読める',
      tags: ['Next.js', 'ISR', 'パフォーマンス'],
    },
    {
      id: 2,
      date: '2024.12.18',
      category: 'EC',
      title: 'Shopifyで地域産品を売るための5つのポイント',
      excerpt: '十勝の特産品をオンラインで販売する際に押さえておきたい、Shopifyの活用方法をご紹介します。',
      readTime: '7分で読める',
      tags: ['Shopify', 'EC', '地域ビジネス'],
    },
    {
      id: 3,
      date: '2024.12.10',
      category: 'デザイン',
      title: '人間味のあるWebデザインを作る方法',
      excerpt: 'AI感を消して、温かみのあるデザインを実現するための具体的なテクニックを解説します。',
      readTime: '4分で読める',
      tags: ['デザイン', 'UI/UX', 'CSS'],
    },
  ];

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
          <h2 
            className="text-3xl md:text-4xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-2"
          >
            ぎじゅつブログ
          </h2>
          <span 
            className="text-sm text-[var(--text-gray)] inline-block"
          >
            Technical Blog
          </span>
        </div>

        {/* ブログカードグリッド */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`bg-white hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                borderRadius: '20px',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-6">
                {/* 日付とカテゴリー */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span 
                      className="text-2xl font-bold text-[var(--main-blue)] font-[var(--font-handwritten)]"
                    >
                      {post.date.split('.')[2]}
                    </span>
                    <span className="text-xs text-[var(--text-gray)]">
                      {post.date.split('.')[1]}月
                    </span>
                  </div>
                  <span 
                    className="px-3 py-1 text-xs font-medium bg-[var(--lighter-blue)] text-[var(--main-blue)]"
                    style={{
                      borderRadius: '8px 10px 9px 11px',
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* タイトル */}
                <h3 
                  className="text-lg font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-3 line-clamp-2"
                  style={{ minHeight: '56px' }}
                >
                  {post.title}
                </h3>

                {/* 抜粋 */}
                <p className="text-sm text-[var(--text-gray)] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* メタ情報 */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[var(--text-gray)] flex items-center gap-1">
                    <span>📖</span>
                    {post.readTime}
                  </span>
                </div>

                {/* タグ */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 text-[var(--text-gray)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* 読むリンク */}
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[var(--main-blue)] font-medium hover:opacity-80 transition-opacity"
                >
                  読んでみる
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div 
          className={`text-center mt-12 transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="/blog"
            className="inline-block border-2 border-[var(--main-blue)] text-[var(--main-blue)] px-8 py-4 font-medium hover:bg-[var(--lighter-blue)] transition-all hover:transform hover:scale-105"
            style={{ 
              borderRadius: '24px'
            }}
          >
            すべての記事を読む
          </a>
        </div>
      </div>
    </section>
  );
}