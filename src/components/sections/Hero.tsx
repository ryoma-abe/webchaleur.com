"use client";

import { useEffect, useState } from "react";
import { FaCheck, FaRocket } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white py-12 lg:py-0">
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
              <span className="text-primary-blue inline-block relative text-[1.15em]">
                Webサイトのこと
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#5b8fb9] opacity-20 rounded-sm" />
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
              帯広・音更・十勝を中心に
              <br className="sm:hidden" />
              ホームページやネットショップを作っています。
              <br />
              <span className="hidden sm:inline">最新の技術を使いながら、</span>
              <span className="hidden sm:inline">
                お客様に寄り添ったものづくりを。
              </span>
              <br />
              <span className="text-sm text-gray-600">
                ※オンラインでの打ち合わせも対応しています
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
              <Link href="/contact" className="btn-primary text-center">
                まずは気軽に相談
              </Link>

              <Link href="/works" className="btn-secondary text-center">
                制作事例を見る
              </Link>
            </div>

            {/* チェックリスト - モバイルでは簡略化 */}
            <div
              className={`mt-8 lg:mt-10 space-y-2 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="hidden sm:block space-y-3">
                {[
                  "100件以上の制作実績で培った技術力",
                  "十勝・帯広の企業様へ寄り添うサポート",
                  "Next.js・Shopifyなど最新技術も対応",
                  "制作後の運用もしっかりフォロー",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-body">
                    <span className="text-primary-blue mt-1 flex-shrink-0">
                      <FaCheck className="text-sm" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              {/* モバイル用簡略版 */}
              <div className="sm:hidden flex flex-wrap gap-3 text-xs">
                <span className="text-primary-blue flex items-center gap-1">
                  <FaCheck className="text-xs" /> 100件以上の実績
                </span>
                <span className="text-primary-blue flex items-center gap-1">
                  <FaCheck className="text-xs" /> 地域密着を目指す
                </span>
                <span className="text-primary-blue flex items-center gap-1">
                  <FaCheck className="text-xs" /> 最新技術対応
                </span>
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
              <div className="bg-white/90 backdrop-blur-sm rounded-[20px] shadow-[0_20px_60px_rgba(91,143,185,0.15)] p-6 xl:p-8 mb-6">
                <h3 className="heading-card mb-4 flex items-center gap-2">
                  <FaRocket className="text-xl xl:text-2xl text-primary-blue" />
                  <span>WebChaleurについて</span>
                </h3>
                <div className="grid grid-cols-2 gap-3 xl:gap-4 text-sm">
                  <div>
                    <span className="text-caption block mb-1">対応エリア</span>
                    <span className="font-medium">全国対応可</span>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">制作実績</span>
                    <span className="font-medium">100件以上</span>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">拠点</span>
                    <span className="font-medium">十勝・帯広</span>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">得意分野</span>
                    <span className="font-medium">EC・企業サイト</span>
                  </div>
                </div>
              </div>

              {/* お気軽にどうぞ！テキスト */}
              <div className="text-right mr-4 mb-6">
                <span className="text-body">お気軽にご相談ください</span>
              </div>

              {/* ニュースセクション - NEW */}
              <div
                className={`bg-white/95 backdrop-blur-sm rounded-[20px] shadow-[0_15px_40px_rgba(91,143,185,0.1)] p-5 xl:p-6 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-blue rounded-full animate-pulse"></span>
                  最新のお知らせ
                </h4>
                <div className="space-y-2">
                  <a href="/news" className="block group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-gray-500 mt-0.5 whitespace-nowrap">2025.01.08</span>
                      <div className="flex-1">
                        <span className="text-sm text-gray-800 group-hover:text-primary-blue transition-colors duration-200 line-clamp-1">
                          新春キャンペーン！初期費用20%OFF実施中
                        </span>
                        <span className="inline-block ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                          NEW
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/news" className="block group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-gray-500 mt-0.5 whitespace-nowrap">2024.12.25</span>
                      <div className="flex-1">
                        <span className="text-sm text-gray-800 group-hover:text-primary-blue transition-colors duration-200 line-clamp-1">
                          年末年始の営業についてのお知らせ
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/news" className="block group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-gray-500 mt-0.5 whitespace-nowrap">2024.12.18</span>
                      <div className="flex-1">
                        <span className="text-sm text-gray-800 group-hover:text-primary-blue transition-colors duration-200 line-clamp-1">
                          Shopify構築サービスを強化しました
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <a href="/news" className="text-xs text-primary-blue hover:text-primary-blue/80 transition-colors duration-200 flex items-center gap-1">
                    すべてのお知らせを見る
                    <span className="text-[10px]">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
