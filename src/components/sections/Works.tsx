"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Work {
  id: number;
  client: string;
  category: string;
  description: string;
  thumbnail: string;
  tags: string[];
  url?: string;
}

export default function Works() {
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

  const works: Work[] = [
    {
      id: 1,
      client: "○○農園様",
      category: "ECサイト",
      description: "十勝産野菜の直販サイトをShopifyで構築",
      thumbnail: "/works/sample1.jpg",
      tags: ["Shopify", "EC", "レスポンシブ"],
    },
    {
      id: 2,
      client: "△△建設様",
      category: "コーポレートサイト",
      description: "地域密着の建設会社様の企業サイト",
      thumbnail: "/works/sample2.jpg",
      tags: ["Next.js", "お問い合わせフォーム", "SEO対策"],
    },
    {
      id: 3,
      client: "□□カフェ様",
      category: "ブランドサイト",
      description: "音更町の人気カフェのブランディングサイト",
      thumbnail: "/works/sample3.jpg",
      tags: ["WordPress", "ブログ", "予約システム"],
    },
    {
      id: 4,
      client: "××牧場様",
      category: "ECサイト",
      description: "自社ブランド乳製品のオンラインショップ",
      thumbnail: "/works/sample4.jpg",
      tags: ["Shopify", "定期購入", "会員機能"],
    },
  ];

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
          <h2
            className="text-3xl md:text-4xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-2"
          >
            制作実績
          </h2>
          <span
            className="text-sm text-[var(--text-gray)] inline-block"
          >
            Works
          </span>
        </div>

        {/* 実績グリッド */}
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <article
              key={work.id}
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
              {/* サムネイル */}
              <div className="relative h-48 bg-gradient-to-br from-[var(--lighter-blue)] to-[var(--light-blue)] overflow-hidden">
                {/* プレースホルダー画像の代わりにグラデーション */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30">🖼️</span>
                </div>

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
                <h3
                  className="text-xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-2"
                >
                  {work.client}
                </h3>

                <p className="text-[var(--text-gray)] mb-4 text-sm">
                  {work.description}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, tagIndex) => (
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

                {/* 詳細を見るリンク */}
                <a
                  href={`/works/${work.id}`}
                  className="inline-flex items-center gap-2 text-[var(--main-blue)] font-medium hover:opacity-80 transition-opacity"
                >
                  詳しく見る
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div
          className={`text-center mt-12 transition-all duration-800 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="/works"
            className="inline-block bg-[var(--main-blue)] text-white px-8 py-4 font-medium hover:bg-[#4a7da6] transition-all hover:transform hover:scale-105"
            style={{
              borderRadius: "24px",
            }}
          >
            すべての制作実績を見る
          </a>
        </div>
      </div>
    </section>
  );
}
