import React from "react";

interface ArticleLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  backLink: {
    href: string;
    text: string;
  };
  thumbnail?: React.ReactNode;
  extraContent?: React.ReactNode;
}

export default function ArticleLayout({
  children,
  header,
  backLink,
  thumbnail,
  extraContent,
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <article className="container mx-auto px-4 max-w-3xl">
        {/* ヘッダー部分 */}
        <header className="mb-16 text-center">{header}</header>

        {/* サムネイル（制作実績用） */}
        {thumbnail && <div className="mb-12">{thumbnail}</div>}

        {/* 本文 */}
        <div className="article-content">{children}</div>

        {/* 追加コンテンツ（シェアボタンなど） */}
        {extraContent && extraContent}

        {/* 戻るボタン */}
        <div className="text-center mt-16">
          <a href={backLink.href} className="btn-secondary">
            ← {backLink.text}
          </a>
        </div>
      </article>
    </div>
  );
}