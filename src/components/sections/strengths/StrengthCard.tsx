interface StrengthCardProps {
  number: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any; // 動的インポートのため一時的にany型を使用
  isVisible: boolean;
  delay: number;
}

export default function StrengthCard({
  number,
  title,
  description,
  icon: Icon,
  isVisible,
  delay,
}: StrengthCardProps) {
  return (
    <div
      className={`relative transition-all duration-800 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="bg-white rounded-[20px] p-6 lg:p-8 h-full transition-all hover:translate-y-[-3px] relative overflow-hidden group shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_28px_rgba(91,143,185,0.12)]">
        {/* 番号バッジ */}
        <div className="inline-flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gradient-to-br from-primary-blue to-primary-light mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm">
          <span className="text-primary-blue text-lg">{number}</span>
        </div>

        {/* アイコン */}
        <div className="text-3xl mb-3 text-primary-blue">
          <Icon />
        </div>

        {/* タイトル */}
        <h3 className="heading-card mb-3 text-lg">{title}</h3>

        {/* 説明文 */}
        <p className="text-body whitespace-pre-line text-sm">{description}</p>

        {/* 装飾的な下線 */}
        <div className="mt-4 h-0.5 bg-primary opacity-20 rounded-sm w-[60%]" />
      </div>
    </div>
  );
}
