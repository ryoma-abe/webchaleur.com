
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
      <h3 className="text-xl mb-6 text-center">代表メッセージ</h3>
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
        <div className="space-y-4">
          <p className="text-gray leading-relaxed text-center">
            これまで制作会社での勤務や150件以上の実績を積み重ね、確かな技術力を培ってきました。
            <br />
            その経験を活かして十勝・帯広の地域企業様のデジタル化を本格的に支援していきます。
            <br />
            最新技術と温かみのあるデザインで、地域のビジネスの成長をお手伝いします。
            <br />
            「作って終わり」ではなく、作った後も一緒に成長していける。
            <br />
            地域に根ざしたパートナーとして、末永くお付き合いいただければ幸いです。
          </p>
        </div>
      </div>
    </div>
  );
}
