'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative h-screen max-h-[100dvh] flex items-center overflow-hidden bg-white"
    >
      {/* Macスクリーンセーバー風の背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        
        {/* アニメーションするオーブ */}
        <div className="absolute inset-0">
          {/* オーブ1 - 大きくて明るい青 */}
          <div className="hero-orb hero-orb-1">
            <div className="w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-cyan-300/20 rounded-full blur-3xl" />
          </div>
          
          {/* オーブ2 - 中サイズの紫 */}
          <div className="hero-orb hero-orb-2">
            <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-400/25 to-pink-300/15 rounded-full blur-3xl" />
          </div>
          
          {/* オーブ3 - 小さめの緑 */}
          <div className="hero-orb hero-orb-3">
            <div className="w-[400px] h-[400px] bg-gradient-to-br from-emerald-300/20 to-teal-300/15 rounded-full blur-2xl" />
          </div>
          
          {/* オーブ4 - ピンクのアクセント */}
          <div className="hero-orb hero-orb-4">
            <div className="w-[350px] h-[350px] bg-gradient-to-br from-rose-300/20 to-orange-200/15 rounded-full blur-2xl" />
          </div>
          
          {/* オーブ5 - 黄色の小さなアクセント */}
          <div className="hero-orb hero-orb-5">
            <div className="w-[300px] h-[300px] bg-gradient-to-br from-yellow-300/15 to-amber-200/10 rounded-full blur-xl" />
          </div>
        </div>
        
        {/* ソフトなオーバーレイ */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <div className="text-left">
            {/* メインタイトル */}
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-6 lg:mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                lineHeight: '1.4',
                letterSpacing: '0.02em'
              }}
            >
              <span className="inline-block">
                十勝の企業様の
              </span>
              <br />
              <span 
                className="text-[#5b8fb9] inline-block relative"
                style={{ 
                  fontSize: '1.15em'
                }}
              >
                Webサイトのこと
                <span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#5b8fb9] opacity-20"
                  style={{
                    borderRadius: '2px',
                  }}
                />
              </span>
              <br />
              <span className="inline-block">
                お手伝いします。
              </span>
            </h1>

            {/* サブテキスト */}
            <p 
              className={`text-sm sm:text-base lg:text-lg text-[#5a524c] mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              帯広・音更・十勝エリアで<br className="sm:hidden" />
              ホームページやネットショップを作っています。<br />
              <span className="hidden sm:inline">最新の技術を使いながら、</span>
              <span className="hidden sm:inline">地元の会社さんに寄り添ったものづくりを。</span>
            </p>

            {/* CTA ボタン */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#contact"
                className="inline-block bg-[#5b8fb9] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#4a7da6] transition-all hover:transform hover:scale-105 hover:shadow-lg text-center"
                style={{ 
                  borderRadius: '24px'
                }}
              >
                まずは気軽に相談
              </a>
              <a
                href="#works"
                className="inline-block border-2 border-[#5b8fb9] text-[#5b8fb9] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#f0f7fc] transition-all hover:transform hover:scale-105 text-center"
                style={{ 
                  borderRadius: '24px'
                }}
              >
                制作事例を見る
              </a>
            </div>

            {/* チェックリスト - モバイルでは簡略化 */}
            <div 
              className={`mt-8 lg:mt-10 space-y-2 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="hidden sm:block space-y-3">
                {[
                  '十勝の企業様150社以上の制作実績',
                  '地元だからこその細やかなサポート',
                  'Next.js・Shopifyなど最新技術も対応',
                  '制作後の運用もしっかりフォロー'
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 text-[#5a524c] text-sm lg:text-base"
                    className="flex items-start gap-3 text-[#5a524c] text-sm lg:text-base"
                  >
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
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {/* 情報カード */}
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 xl:p-8 mb-6"
                style={{ 
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(91, 143, 185, 0.15)',
                }}
              >
                <h3 className="text-lg xl:text-xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-4 flex items-center gap-2">
                  <span className="text-xl xl:text-2xl">📍</span>
                  地域のこと
                </h3>
                <div className="grid grid-cols-2 gap-3 xl:gap-4 text-sm">
                  <div>
                    <span className="text-[#5a524c] block mb-1 text-xs">活動エリア</span>
                    <span className="text-[#2c2825] font-medium">帯広・音更・十勝</span>
                  </div>
                  <div>
                    <span className="text-[#5a524c] block mb-1 text-xs">制作実績</span>
                    <span className="text-[#2c2825] font-medium">152社</span>
                  </div>
                  <div>
                    <span className="text-[#5a524c] block mb-1 text-xs">創業</span>
                    <span className="text-[#2c2825] font-medium">2018年</span>
                  </div>
                  <div>
                    <span className="text-[#5a524c] block mb-1 text-xs">得意分野</span>
                    <span className="text-[#2c2825] font-medium">EC・企業サイト</span>
                  </div>
                </div>
              </div>

              {/* お気軽にどうぞ！テキスト */}
              <div className="text-right mr-4">
                <span className="text-[#5a524c] text-sm">
                  お気軽にご相談ください
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* アニメーション定義 */}
      <style jsx>{`
        .hero-orb {
          position: absolute;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-iteration-count: infinite;
        }
        
        .hero-orb-1 {
          top: -200px;
          left: -200px;
          animation: heroFloat1 20s infinite;
        }
        
        .hero-orb-2 {
          top: 50%;
          right: -150px;
          animation: heroFloat2 25s infinite;
        }
        
        .hero-orb-3 {
          bottom: -150px;
          left: 20%;
          animation: heroFloat3 30s infinite;
        }
        
        .hero-orb-4 {
          top: 20%;
          left: 50%;
          animation: heroFloat4 22s infinite;
        }
        
        .hero-orb-5 {
          bottom: 20%;
          right: 30%;
          animation: heroFloat5 28s infinite;
        }
        
        @keyframes heroFloat1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(200px, 100px) scale(1.1);
          }
          50% {
            transform: translate(150px, 200px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        
        @keyframes heroFloat2 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(-100px, -150px) scale(1.15) rotate(120deg);
          }
          66% {
            transform: translate(-200px, 100px) scale(0.85) rotate(240deg);
          }
        }
        
        @keyframes heroFloat3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          20% {
            transform: translate(100px, -100px) scale(1.2);
          }
          40% {
            transform: translate(200px, -50px) scale(0.9);
          }
          60% {
            transform: translate(50px, -150px) scale(1.1);
          }
          80% {
            transform: translate(150px, -100px) scale(0.95);
          }
        }
        
        @keyframes heroFloat4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-150px, 100px) scale(0.9);
          }
          50% {
            transform: translate(-100px, -50px) scale(1.1);
          }
          75% {
            transform: translate(-50px, 50px) scale(1);
          }
        }
        
        @keyframes heroFloat5 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          20% {
            transform: translate(80px, -80px) scale(1.1) rotate(72deg);
          }
          40% {
            transform: translate(-60px, -120px) scale(0.8) rotate(144deg);
          }
          60% {
            transform: translate(-100px, -40px) scale(1.15) rotate(216deg);
          }
          80% {
            transform: translate(40px, -60px) scale(0.95) rotate(288deg);
          }
        }
        
        @keyframes gentleBounce {
          0%, 100% { 
            transform: rotate(3deg) translateY(0);
          }
          50% { 
            transform: rotate(3deg) translateY(-5px);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-orb {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}