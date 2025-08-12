import { IconType } from "react-icons";

interface StrengthCardProps {
  number: string;
  title: string;
  description: string;
  icon: IconType;
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
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="bg-white p-6 lg:p-8 h-full transition-all hover:translate-y-[-3px] relative overflow-hidden group shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_28px_rgba(91,143,185,0.12)]"
        style={{
          borderRadius: "20px",
        }}
      >
        {/* 番号バッジ */}
        <div
          className="inline-block mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #5b8fb9 0%, #8fb5d1 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="text-white font-bold text-lg">
            {number}
          </span>
        </div>

        {/* アイコン */}
        <div className="text-3xl mb-3 text-primary-blue">
          <Icon />
        </div>

        {/* タイトル */}
        <h3 className="heading-card mb-3 text-lg">{title}</h3>

        {/* 説明文 */}
        <p className="text-body whitespace-pre-line text-sm">
          {description}
        </p>

        {/* 装飾的な下線 */}
        <div
          className="mt-4 h-0.5 bg-primary opacity-20"
          style={{
            borderRadius: "2px",
            width: "60%",
          }}
        />
      </div>
    </div>
  );
}