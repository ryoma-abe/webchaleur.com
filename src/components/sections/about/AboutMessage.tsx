interface AboutMessageProps {
  isVisible: boolean;
}

export default function AboutMessage({ isVisible }: AboutMessageProps) {
  return (
    <div
      className={`max-w-5xl mx-auto mb-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-center space-y-8">
        <h3>
          Webサイト制作・ECサイト構築
          <br />
          システム開発・保守運用
        </h3>

        <div className="max-w-3xl mx-auto">
          <p className="text-base text-gray leading-relaxed">
            WebChaleurは、十勝・帯広を拠点に全国のお客様をサポートしています。
            <br />
            企業サイトやECサイトの新規制作はもちろん、既存サイトのリニューアル、
            <br />
            業務効率化のためのシステム開発、サイトの保守運用まで幅広く対応。
            <br />
            地元企業様は直接お伺いし、遠方のお客様はオンラインで密に連携しながら、
            <br />
            それぞれのビジネスに最適なWeb戦略をご提案します。
          </p>
        </div>
      </div>
    </div>
  );
}
