'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="relative h-screen max-h-[100dvh] flex items-center overflow-hidden bg-white"
      style={{ 
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%)'
      }}
    >
      {/* アニメーション背景 */}
      <div className="absolute inset-0">
        {/* 動くグラデーション背景 */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(91, 143, 185, 0.1) 0%, transparent 50%)`,
            transition: 'all 0.3s ease-out',
          }}
        />
        
        {/* パーティクル風の動く要素 */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                background: i % 2 === 0 
                  ? 'radial-gradient(circle, rgba(139, 181, 209, 0.15) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(184, 212, 232, 0.12) 0%, transparent 70%)',
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animation: `float-${i % 3 + 1} ${15 + i * 3}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              }}
            />
          ))}
        </div>

        {/* 波形アニメーション */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#5b8fb9"
              fillOpacity="0.3"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              style={{
                animation: 'wave 20s linear infinite',
              }}
            />
          </svg>
        </div>
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
              <span className="inline-block" style={{ transform: 'rotate(-0.5deg)' }}>
                十勝の会社さんの
              </span>
              <br />
              <span 
                className="text-[#5b8fb9] inline-block relative"
                style={{ 
                  transform: 'rotate(0.3deg)',
                  fontSize: '1.15em'
                }}
              >
                ウェブのこと
                <span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#5b8fb9] opacity-20"
                  style={{
                    borderRadius: '50%',
                    transform: 'rotate(-1deg)',
                  }}
                />
              </span>
              <br />
              <span className="inline-block" style={{ transform: 'rotate(-0.3deg)' }}>
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
                  borderRadius: '24px',
                  transform: 'rotate(-0.5deg)'
                }}
              >
                まずは気軽に相談
              </a>
              <a
                href="#works"
                className="inline-block border-2 border-[#5b8fb9] text-[#5b8fb9] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#f0f7fc] transition-all hover:transform hover:scale-105 text-center"
                style={{ 
                  borderRadius: '24px',
                  transform: 'rotate(0.3deg)'
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
                  '十勝の会社さま150社以上の制作実績',
                  '地元だからこその細やかなサポート',
                  'Next.js・Shopifyなど最新技術も対応',
                  '制作後の運用もしっかりフォロー'
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 text-[#5a524c] text-sm lg:text-base"
                    style={{ 
                      transform: `rotate(${index % 2 === 0 ? '-0.2' : '0.2'}deg)`,
                      marginLeft: index % 2 === 0 ? '0' : '4px'
                    }}
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
              {/* 情報カード - パララックス効果 */}
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 xl:p-8 mb-6"
                style={{ 
                  borderRadius: '20px',
                  transform: `rotate(-1.5deg) translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
                  boxShadow: '0 20px 60px rgba(91, 143, 185, 0.15)',
                  transition: 'transform 0.3s ease-out',
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
              <div 
                className="text-right mr-4"
                style={{ 
                  transform: 'rotate(3deg)',
                  animation: 'bounce-light 3s ease-in-out infinite'
                }}
              >
                <span className="text-[#5a524c] text-sm inline-flex items-center gap-2">
                  <span style={{ transform: 'scaleX(-1)' }}>👈</span>
                  お気軽にどうぞ！
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* スタイル定義 */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
          66% { transform: translateY(10px) translateX(-10px) rotate(240deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(15px) translateX(-15px) rotate(-120deg); }
          66% { transform: translateY(-25px) translateX(15px) rotate(-240deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-10px) translateX(-20px) rotate(90deg); }
          66% { transform: translateY(20px) translateX(10px) rotate(180deg); }
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes bounce-light {
          0%, 100% { transform: rotate(3deg) translateY(0); }
          50% { transform: rotate(3deg) translateY(-5px); }
        }
      `}</style>
    </section>
  );
}