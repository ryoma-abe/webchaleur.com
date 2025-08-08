'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      style={{ 
        paddingTop: '100px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)'
      }}
    >
      {/* 淡い背景パターン */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%235b8fb9' stroke-width='0.5' opacity='0.3'%3E%3Ccircle cx='50' cy='50' r='30'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <div className="text-left">
            {/* メインタイトル */}
            <h1 
              className={`text-3xl md:text-4xl lg:text-5xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                lineHeight: '1.6',
                letterSpacing: '0.03em'
              }}
            >
              <span className="inline-block" style={{ transform: 'rotate(-0.2deg)' }}>
                十勝の会社さんの
              </span>
              <br />
              <span className="text-[#5b8fb9] text-4xl md:text-5xl lg:text-6xl inline-block" style={{ transform: 'rotate(0.1deg)' }}>
                ウェブのこと
              </span>
              <br />
              <span className="inline-block" style={{ transform: 'rotate(-0.1deg)' }}>
                お手伝いします。
              </span>
            </h1>

            {/* サブテキスト */}
            <p 
              className={`text-base md:text-lg text-[#5a524c] mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              帯広・音更・十勝エリアで<br />
              ホームページやネットショップを作っています。<br />
              最新の技術を使いながら、<br />
              地元の会社さんに寄り添ったものづくりを。
            </p>

            {/* CTA ボタン */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#contact"
                className="inline-block bg-[#5b8fb9] text-white px-8 py-4 font-medium hover:bg-[#4a7da6] transition-all hover:transform hover:scale-105"
                style={{ 
                  borderRadius: '28px 32px 30px 31px',
                  transform: 'rotate(-0.2deg)'
                }}
              >
                まずは気軽に相談
              </a>
              <a
                href="#works"
                className="inline-block border-2 border-[#5b8fb9] text-[#5b8fb9] px-8 py-4 font-medium hover:bg-[#f0f7fc] transition-all hover:transform hover:scale-105"
                style={{ 
                  borderRadius: '30px 28px 31px 29px',
                  transform: 'rotate(0.1deg)'
                }}
              >
                制作事例を見る
              </a>
            </div>

            {/* チェックリスト */}
            <div 
              className={`mt-12 space-y-3 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {[
                '十勝の会社さま150社以上の制作実績',
                '地元だからこその細やかなサポート',
                'Next.js・Shopifyなど最新技術も対応',
                '制作後の運用もしっかりフォロー'
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 text-[#5a524c] text-sm md:text-base"
                  style={{ 
                    transform: `rotate(${index % 2 === 0 ? '-0.05' : '0.05'}deg)`,
                    marginLeft: index % 2 === 0 ? '0' : '2px'
                  }}
                >
                  <span className="text-[#5b8fb9] mt-1">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右側：ビジュアル要素 */}
          <div className="relative">
            <div 
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {/* 情報カード */}
              <div 
                className="bg-white rounded-2xl shadow-lg p-8 mb-6"
                style={{ 
                  borderRadius: '18px 22px 20px 19px',
                  transform: 'rotate(-1deg)',
                  boxShadow: '0 10px 40px rgba(91, 143, 185, 0.1)'
                }}
              >
                <h3 className="text-xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-6 flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  地域のこと
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    <div>
                      <span className="text-[#5a524c] block mb-1">活動エリア</span>
                      <span className="text-[#2c2825] font-medium">帯広・音更・十勝</span>
                    </div>
                    <div>
                      <span className="text-[#5a524c] block mb-1">制作実績</span>
                      <span className="text-[#2c2825] font-medium">152社</span>
                    </div>
                    <div>
                      <span className="text-[#5a524c] block mb-1">創業</span>
                      <span className="text-[#2c2825] font-medium">2018年</span>
                    </div>
                    <div>
                      <span className="text-[#5a524c] block mb-1">得意分野</span>
                      <span className="text-[#2c2825] font-medium">EC・企業サイト</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* お気軽にどうぞ！テキスト */}
              <div 
                className="text-right mr-4"
                style={{ transform: 'rotate(2deg)' }}
              >
                <span className="text-[#5a524c] text-sm inline-flex items-center gap-2">
                  <span style={{ transform: 'scaleX(-1)' }}>👈</span>
                  お気軽にどうぞ！
                </span>
              </div>
            </div>

            {/* 装飾要素 */}
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10"
              style={{ 
                background: 'radial-gradient(circle, #5b8fb9 0%, transparent 70%)',
                borderRadius: '48% 52% 49% 51%',
                animation: 'gentle-float 8s ease-in-out infinite'
              }}
            />
            <div 
              className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full opacity-10"
              style={{ 
                background: 'radial-gradient(circle, #8fb5d1 0%, transparent 70%)',
                borderRadius: '51% 49% 52% 48%',
                animation: 'gentle-float 10s ease-in-out infinite reverse'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}