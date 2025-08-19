import { FaRocket } from "@/components/icons/AppealIcons";

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
          <FaRocket />
          <span>新しい時代のWeb制作パートナー</span>
        </h3>
        <p className="text-body mb-6">
          <span className="text-primary-blue font-semibold">
            常に最新技術をキャッチアップ
          </span>
          し、 お客様に最適なソリューションをご提案。
          <br />
          Next.js、TypeScript、AIツールなど、
          <span className="text-primary-blue">モダンな技術スタック</span>で
          高速かつ保守性の高いサイトを構築します。
          <br />
          <br />
          「作った後も進化し続ける」サイトで、
          <span className="text-primary-blue">ビジネスの成長を加速</span>
          させます。
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <span className="bg-white px-4 py-2 text-sm text-gray rounded-2xl">
            #最新技術導入
          </span>
          <span className="bg-white px-4 py-2 text-sm text-gray rounded-2xl">
            #高速パフォーマンス
          </span>
          <span className="bg-white px-4 py-2 text-sm text-gray rounded-2xl">
            #継続的改善
          </span>
          <span className="bg-white px-4 py-2 text-sm text-gray rounded-2xl">
            #アジャイル開発
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
          十勝の企業様と共に
          <span className="text-primary-blue mx-1">未来を創る</span>
          パートナーとして
        </p>
      </div>
    </>
  );
}
