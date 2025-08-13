"use client";

import { useEffect, useState } from "react";
import CoconalaBanner from "./CoconalaBanner";
import ReviewCard from "./ReviewCard";
import TrustIndicators from "./TrustIndicators";
import SectionHeader from "../common/SectionHeader";
import useInView from "@/hooks/useInView";

interface Review {
  id: number;
  content: string;
  author: string;
  rating: number;
}

export default function VoiceSection() {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);
  const reviews: Review[] = [
    {
      id: 1,
      content:
        "とても親切で、要望以上のサイトを作っていただきました。オンラインでのやり取りもスムーズでした。",
      author: "IT企業様",
      rating: 5,
    },
    {
      id: 2,
      content:
        "最新の技術を使って、理想通りのECサイトを構築していただきました。サポートも充実しています。",
      author: "ECサイト運営者様",
      rating: 5,
    },
    {
      id: 3,
      content:
        "細かい要望にも丁寧に対応していただき、満足のいくホームページが完成しました。",
      author: "サービス業様",
      rating: 5,
    },
  ];

  return (
    <section id="voice" className="section-padding bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <SectionHeader
          isVisible={isVisible}
          title="お客様の声"
          subTitle="Voice"
        />

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
