interface AboutMessageProps {
  isVisible: boolean;
}

export default function AboutMessage({ isVisible }: AboutMessageProps) {
  return (
    <div
      className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-center space-y-8">
        {/* メインメッセージ */}
        <div className="space-y-4">
          <p className="text-lg text-gray">
            十勝・帯広から全国へ
          </p>
          <h3 className="text-3xl md:text-4xl leading-relaxed">
            <span className="text-primary">Webの力で</span>
            <br />
            <span className="text-primary">ビジネスの成長をサポート</span>
          </h3>
        </div>

        {/* 屋号の説明 - シンプルに */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base text-gray leading-relaxed">
            十勝を拠点に、地元の方も遠方の方も
            <br />
            Webのことなら何でも気軽に相談できます。
          </p>
        </div>

        {/* シンプルな区切り線 */}
        <div className="flex items-center justify-center space-x-2 opacity-30">
          <div className="h-px w-12 bg-primary-blue"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
          <div className="h-px w-12 bg-primary-blue"></div>
        </div>
      </div>
    </div>
  );
}