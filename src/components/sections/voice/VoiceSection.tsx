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
        "困りごとをあっという間に解消してくださり大変助かりました。制作会社でのご経験があるとのこと、依頼する上でとても安心材料になりました。今後も何かありましたらご相談させていただきたいです。",
      author: "ECサイト運営者様",
      rating: 5,
    },
    {
      id: 2,
      content:
        "こちらの無理な要望にも嫌な顔1つせずスピーディーに対応いただき、本当にお世話になりました。とても信頼できる方なので、ECサイトの構築を検討されている方はぜひ一度検討されることをオススメします。",
      author: "制作会社L様",
      rating: 5,
    },
    {
      id: 3,
      content:
        "大変親切かつ丁寧で、非常に細やかに確認して進めて頂きました。フォローもあり、依頼者と商品のお客様どちらの目線にもたって進めて頂き、助かりました。こちらで追加で色々と要望をした事にも、快く応えてくださり、改めて、ありがとうございました。",
      author: "ECサイト運営者様",
      rating: 5,
    },
  ];

  return (
    <section id="voice" className="section-padding bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        <SectionHeader
          isVisible={isVisible}
          title="お客様の声"
          subTitle="Voice"
        />

        
        <CoconalaBanner isVisible={isVisible} />

        
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

        
        <TrustIndicators isVisible={isVisible} />
      </div>
    </section>
  );
}
