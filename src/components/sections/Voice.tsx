'use client';

import { useEffect, useState } from 'react';

interface Review {
  id: number;
  content: string;
  author: string;
  rating: number;
}

export default function Voice() {
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

    const element = document.getElementById('voice');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const reviews: Review[] = [
    {
      id: 1,
      content: 'とても親切で、要望以上のサイトを作っていただきました。地元の業者さんなので安心してお任せできました。',
      author: '帯広市 製造業A社様',
      rating: 5,
    },
    {
      id: 2,
      content: '技術力が高く、最新のECサイトを構築していただきました。売上も順調に伸びています！',
      author: '音更町 小売業B社様',
      rating: 5,
    },
    {
      id: 3,
      content: '細かい修正にも快く対応していただき、理想のホームページができました。',
      author: '芽室町 サービス業C社様',
      rating: 5,
    },
  ];

  return (
    <section 
      id="voice"
      className="section-padding bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div 
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="text-3xl md:text-4xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-2"
          >
            お客様の声
          </h2>
          <p 
            className="text-lg text-[var(--text-gray)]"
          >
            ココナラでの評価は
            <span className="text-[var(--main-blue)] font-bold mx-1">★4.9</span>
            です
          </p>
        </div>

        {/* ココナラバナー */}
        <div 
          className={`bg-gradient-to-r from-[var(--lighter-blue)] to-[var(--bg-light)] p-8 mb-12 text-center transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            borderRadius: '24px',
            border: '2px solid var(--light-blue)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div>
              {/* 星評価 */}
              <div className="text-3xl text-yellow-400 mb-2">
                ★★★★★
              </div>
              <div className="text-[var(--text-gray)] font-medium">
                152件のレビュー
              </div>
            </div>
            
            <div className="flex-1 max-w-md">
              <p className="text-[var(--text-dark)] mb-4">
                ココナラでも多くのお客様から高評価をいただいております
              </p>
              <a
                href="https://coconala.com/users/webchaleur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1bb774] text-white px-8 py-4 font-medium hover:bg-[#16a865] transition-all hover:transform hover:scale-105"
                style={{ 
                  borderRadius: '24px'
                }}
              >
                <span>ココナラで詳しく見る</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* レビュープレビュー */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-[var(--bg-light)] p-6 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderRadius: '20px',
                transitionDelay: `${300 + index * 100}ms`,
                border: '1px solid rgba(91, 143, 185, 0.1)',
              }}
            >
              {/* 星評価 */}
              <div className="text-yellow-400 mb-3">
                {'★'.repeat(review.rating)}
              </div>

              {/* レビュー内容 */}
              <p 
                className="text-[var(--text-gray)] text-sm mb-4 leading-relaxed"
                style={{ minHeight: '80px' }}
              >
                "{review.content}"
              </p>

              {/* 投稿者 */}
              <p className="text-xs text-[var(--text-gray)] font-medium">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* 信頼性アピール */}
        <div 
          className={`text-center transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--main-blue)]">152社</div>
              <div className="text-sm text-[var(--text-gray)]">制作実績</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--main-blue)]">98%</div>
              <div className="text-sm text-[var(--text-gray)]">満足度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--main-blue)]">7年</div>
              <div className="text-sm text-[var(--text-gray)]">運営実績</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}