"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface WorkItem {
  slug: string;
  date: string;
  title: string;
  client: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  link: string;
}

interface WorksClientProps {
  items: WorkItem[];
}

export default function WorksClient({ items }: WorksClientProps) {
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

    const element = document.getElementById("works");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="works"
      className="section-padding bg-[var(--bg-light)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-section">
            制作実績
          </h2>
          <span className="text-caption inline-block">
            Works
          </span>
        </div>

        {/* 実績グリッド */}
        <div className="grid md:grid-cols-2 gap-8">
          {items.length > 0 ? (
            items.map((work, index) => (
              <article
                key={work.slug}
                className={`bg-white overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  borderRadius: "20px",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Link href={work.link} className="block">
                  {/* サムネイル */}
                  <div className="relative h-48 bg-gradient-to-br from-[var(--lighter-blue)] to-[var(--light-blue)] overflow-hidden">
                    {work.thumbnail && work.thumbnail !== '/images/works/default.jpg' ? (
                      <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-30">🖼️</span>
                      </div>
                    )}

                    {/* カテゴリーバッジ */}
                    <div
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[var(--main-blue)]"
                      style={{
                        borderRadius: "8px 10px 9px 11px",
                      }}
                    >
                      {work.category}
                    </div>
                  </div>

                  {/* コンテンツ */}
                  <div className="p-6">
                    <h3 className="heading-card mb-2">
                      {work.client || work.title}
                    </h3>

                    <p className="text-body mb-4 text-sm">
                      {work.description}
                    </p>

                    {/* タグ */}
                    {work.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-3 py-1 bg-[var(--accent-beige)] text-[var(--text-gray)]"
                            style={{
                              borderRadius: "8px",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* 詳細を見るリンク */}
                    <span className="inline-flex items-center gap-2 text-[var(--main-blue)] font-medium hover:opacity-80 transition-opacity">
                      詳しく見る
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-[var(--text-gray)]">
              <p>現在準備中です</p>
            </div>
          )}
        </div>

        {/* もっと見るボタン */}
        {items.length > 0 && (
          <div
            className={`text-center mt-12 transition-all duration-800 delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href="/works"
              className="btn-primary"
            >
              すべての制作実績を見る
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}