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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white py-12 lg:py-16">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center">
          {/* メインコンテンツを中央配置 */}
          <div className="">
            {/* メインタイトル - 中央で大きく */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 lg:mb-10 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block mb-2">十勝の企業様の</span>
              <span className="text-primary-blue block relative text-[1.2em] mb-2">
                Webサイトのこと
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#5b8fb9] to-transparent opacity-40 rounded-sm" />
              </span>
              <span className="block">お手伝いします。</span>
            </h1>

            {/* サブテキスト - 中央揃え */}
            <p
              className={`text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-10 lg:mb-12 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              帯広・音更・十勝を中心に
              <br className="sm:hidden" />
              ホームページやネットショップを作っています。
              <br />
              <span className="block sm:inline">最新の技術を使いながら、</span>
              <span className="block sm:inline">
                お客様に寄り添ったものづくりを。
              </span>
              <br />
              <span className="text-base text-gray-500 mt-2 block">
                ※オンラインでの打ち合わせも対応しています
              </span>
            </p>

            {/* CTA ボタン - 中央に大きく */}
            <div
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 lg:mb-16 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link href="/contact" className="btn-primary text-center text-lg px-8 py-4">
                まずは気軽に相談
              </Link>

              <Link href="/works" className="btn-secondary text-center text-lg px-8 py-4">
                制作事例を見る
              </Link>
            </div>

            {/* チェックリスト - 横並びに変更 */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {[
                "100件以上の制作実績で培った技術力",
                "十勝・帯広の企業様へ寄り添うサポート",
                "Next.js・Shopifyなど最新技術も対応",
                "制作後の運用もしっかりフォロー",
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="text-primary-blue mb-2">
                    <FaCheck className="text-xl" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 最新のお知らせを全幅に拡大 */}
          <div
            className={`w-full bg-white/95 backdrop-blur-sm rounded-[24px] shadow-[0_20px_60px_rgba(91,143,185,0.1)] p-8 lg:p-10 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-6 text-center">
              最新のお知らせ
            </h3>
            
            <div className="space-y-3 max-w-4xl mx-auto">
              <a href="/news" className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-500 whitespace-nowrap">2025.01.08</span>
                  <div className="flex-1">
                    <span className="text-base text-gray-800 group-hover:text-primary-blue transition-colors duration-200">
                      新春キャンペーン！初期費用20%OFF実施中
                    </span>
                    <span className="inline-block ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                      NEW
                    </span>
                  </div>
                </div>
              </a>
              
              <a href="/news" className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-500 whitespace-nowrap">2024.12.25</span>
                  <div className="flex-1">
                    <span className="text-base text-gray-800 group-hover:text-primary-blue transition-colors duration-200">
                      年末年始の営業についてのお知らせ
                    </span>
                  </div>
                </div>
              </a>
              
              <a href="/news" className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-500 whitespace-nowrap">2024.12.18</span>
                  <div className="flex-1">
                    <span className="text-base text-gray-800 group-hover:text-primary-blue transition-colors duration-200">
                      Shopify構築サービスを強化しました
                    </span>
                  </div>
                </div>
              </a>
              
              <a href="/news" className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-500 whitespace-nowrap">2024.12.10</span>
                  <div className="flex-1">
                    <span className="text-base text-gray-800 group-hover:text-primary-blue transition-colors duration-200">
                      制作実績100件を突破しました
                    </span>
                  </div>
                </div>
              </a>
              
              <a href="/news" className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-500 whitespace-nowrap">2024.11.28</span>
                  <div className="flex-1">
                    <span className="text-base text-gray-800 group-hover:text-primary-blue transition-colors duration-200">
                      Webマーケティングセミナーを開催しました
                    </span>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="mt-6 text-center">
              <a href="/news" className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 font-medium transition-colors duration-200">
                すべてのお知らせを見る
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
