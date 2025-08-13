import { FaRocket } from "react-icons/fa";

interface StrengthsAppealProps {
  isVisible: boolean;
}

export default function StrengthsAppeal({ isVisible }: StrengthsAppealProps) {
  return (
    <>
      {/* 特別なアピールセクション */}
      <div
        className={`bg-gradient-to-r from-lighter-blue to-light rounded-3xl border-2 border-dashed border-primary-light p-8 mt-12 text-center transition-all duration-800 delay-800 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="heading-card mb-4 text-primary-blue flex items-center justify-center gap-2">
          <FaRocket className="inline-block" />
          <span>これからの時代に必要なWeb制作</span>
        </h3>
        <p className="text-body max-w-3xl mx-auto mb-6">
          ただホームページを作るだけではなく、
          <span>AI技術の活用</span>
          で業務効率化を実現し、
          <span>SNS運用</span>で集客力を高め、
          <span>データ分析</span>で改善を続ける。
          <br />
          <br />
          これから十勝の企業様が
          <span className="text-primary-blue">
            デジタル時代で成長する
          </span>
          ための、総合的なパートナーを目指します。
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <span
            className="bg-white px-4 py-2 text-sm text-gray rounded-2xl"
          >
            #AI導入支援
          </span>
          <span
            className="bg-white px-4 py-2 text-sm text-gray rounded-2xl"
          >
            #SNSマーケティング
          </span>
          <span
            className="bg-white px-4 py-2 text-sm text-gray rounded-2xl"
          >
            #データドリブン
          </span>
          <span
            className="bg-white px-4 py-2 text-sm text-gray rounded-2xl"
          >
            #地域密着
          </span>
        </div>
      </div>

      {/* 補足メッセージ */}
      <div
        className={`text-center mt-12 transition-all duration-800 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-body text-lg">
          十勝の企業様の「困った」を
          <span className="text-primary-blue mx-1">
            最新技術と真心
          </span>
          で解決します
        </p>
      </div>
    </>
  );
}