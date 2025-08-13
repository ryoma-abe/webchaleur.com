"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BlogGrid from "./BlogGrid";
import SectionHeader from "../common/SectionHeader";

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

    const element = document.getElementById("blog");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="blog" className="section-padding bg-light">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <SectionHeader isVisible={isVisible} title="ブログ" subTitle="Blog" />

        {/* ブログカードグリッド */}
        <BlogGrid items={items} isVisible={isVisible} />

        {/* もっと見るボタン */}
        {items.length > 0 && (
          <div
            className={`text-center mt-12 transition-all duration-800 delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href="/blog" className="btn-primary">
              すべての記事を見る
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
