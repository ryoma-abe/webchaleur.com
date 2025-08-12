'use client';

import { useEffect, useState } from 'react';
import CoconalaBanner from './CoconalaBanner';
import ReviewCard from './ReviewCard';
import TrustIndicators from './TrustIndicators';

interface Review {
  id: number;
  content: string;
  author: string;
  rating: number;
}

export default function VoiceSection() {
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
      content: 'とても親切で、要望以上のサイトを作っていただきました。オンラインでのやり取りもスムーズでした。',
      author: 'IT企業様',
      rating: 5,
    },
    {
      id: 2,
      content: '最新の技術を使って、理想通りのECサイトを構築していただきました。サポートも充実しています。',
      author: 'ECサイト運営者様',
      rating: 5,
    },
    {
      id: 3,
      content: '細かい要望にも丁寧に対応していただき、満足のいくホームページが完成しました。',
      author: 'サービス業様',
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
          <h2 className="heading-section">
            お客様の声
          </h2>
          <p className="text-lg text-[var(--text-gray)]">
            ココナラでの評価は
            <span className="text-primary-blue font-bold mx-1">★4.9</span>
            です
          </p>
        </div>

        {/* ココナラバナー */}
        <CoconalaBanner isVisible={isVisible} />

        {/* レビュープレビュー */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              {...review}
              isVisible={isVisible}
              delay={300 + index * 100}
            />
          ))}
        </div>

        {/* 信頼性アピール */}
        <TrustIndicators isVisible={isVisible} />
      </div>
    </section>
  );
}