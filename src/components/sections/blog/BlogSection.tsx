'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BlogGrid from './BlogGrid';

interface BlogItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
}

interface BlogSectionProps {
  items: BlogItem[];
}

export default function BlogSection({ items }: BlogSectionProps) {
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
        <BlogGrid items={items} isVisible={isVisible} />

        {/* もっと見るボタン */}
        {items.length > 0 && (
          <div 
            className={`text-center mt-12 transition-all duration-800 delay-600 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link
              href="/blog"
              className="btn-primary"
            >
              すべての記事を見る
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}