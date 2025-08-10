"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen max-h-[100dvh] flex items-center overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <div className="text-left">
            {/* メインタイトル */}
            <h1
              className={`heading-hero mb-6 lg:mb-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-block">十勝の企業様の</span>
              <br />
              <span
                className="text-[#5b8fb9] inline-block relative"
                style={{
                  fontSize: "1.15em",
                }}
              >
                Webサイトのこと
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#5b8fb9] opacity-20"
                  style={{
                    borderRadius: "2px",
                  }}
                />
              </span>
              <br />
              <span className="inline-block">お手伝いします。</span>
            </h1>

            {/* サブテキスト */}
            <p
              className={`text-body lg:text-lg mb-8 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              帯広・音更・十勝エリアで
              <br className="sm:hidden" />
              ホームページやネットショップを作っています。
              <br />
              <span className="hidden sm:inline">最新の技術を使いながら、</span>
              <span className="hidden sm:inline">
                地元の会社さんに寄り添ったものづくりを。
              </span>
            </p>

            {/* CTA ボタン */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="/contact"
                className="inline-block bg-[#5b8fb9] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#4a7da6] transition-all hover:transform hover:scale-105 hover:shadow-lg text-center"
                style={{
                  borderRadius: "24px",
                }}
              >
                まずは気軽に相談
              </a>
              <a
                href="/works"
                className="inline-block border-2 border-[#5b8fb9] text-[#5b8fb9] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#f0f7fc] transition-all hover:transform hover:scale-105 text-center"
                style={{
                  borderRadius: "24px",
                }}
              >
                制作事例を見る
              </a>
            </div>

            {/* チェックリスト - モバイルでは簡略化 */}
            <div
              className={`mt-8 lg:mt-10 space-y-2 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="hidden sm:block space-y-3">
                {[
                  "十勝の企業様150社以上の制作実績",
                  "地元だからこその細やかなサポート",
                  "Next.js・Shopifyなど最新技術も対応",
                  "制作後の運用もしっかりフォロー",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-body">
                    <span className="text-[#5b8fb9] mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              {/* モバイル用簡略版 */}
              <div className="sm:hidden flex flex-wrap gap-3 text-xs">
                <span className="text-[#5b8fb9]">✓ 152社の実績</span>
                <span className="text-[#5b8fb9]">✓ 地元密着</span>
                <span className="text-[#5b8fb9]">✓ 最新技術対応</span>
              </div>
            </div>
          </div>

          {/* 右側：ビジュアル要素 */}
          <div className="relative hidden lg:block">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              {/* 情報カード */}
              <div
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 xl:p-8 mb-6"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(91, 143, 185, 0.15)",
                }}
              >
                <h3 className="heading-card mb-4 flex items-center gap-2">
                  <span className="text-xl xl:text-2xl">📍</span>
                  地域のこと
                </h3>
                <div className="grid grid-cols-2 gap-3 xl:gap-4 text-sm">
                  <div>
                    <span className="text-caption block mb-1">活動エリア</span>
                    <span className="font-medium">帯広・音更・十勝</span>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">制作実績</span>
                    <span className="font-medium">152社</span>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">創業</span>
                    <span className="font-medium">2018年</span>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">得意分野</span>
                    <span className="font-medium">EC・企業サイト</span>
                  </div>
                </div>
              </div>

              {/* お気軽にどうぞ！テキスト */}
              <div className="text-right mr-4">
                <span className="text-body">お気軽にご相談ください</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
