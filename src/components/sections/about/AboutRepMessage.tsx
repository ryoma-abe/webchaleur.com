import SketchyCard from "@/components/ui/SketchyCard";

interface AboutRepMessageProps {
  isVisible: boolean;
}

export default function AboutRepMessage({ isVisible }: AboutRepMessageProps) {
  return (
    <div
      className={`max-w-4xl mx-auto mb-12 transition-all duration-800 delay-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h3 className="text-xl mb-6 text-center">
        代表メッセージ
      </h3>
      <SketchyCard>
        <div className="space-y-4">
          <p className="text-gray leading-relaxed">
            これまで100件以上のWeb制作実績を積み重ね、確かな技術力を培ってきました。
          </p>
          <p className="text-gray leading-relaxed">
            今、その経験を活かして十勝・帯広の地域企業様のデジタル化を本格的に支援していきます。
            <br />
            最新技術と温かみのあるデザインで、地域のビジネスの成長をお手伝いします。
          </p>
          <p className="text-gray leading-relaxed">
            「作って終わり」ではなく、作った後も一緒に成長していける。
            <br />
            地域に根ざしたパートナーとして、末永くお付き合いいただければ幸いです。
          </p>
        </div>
      </SketchyCard>
    </div>
  );
}