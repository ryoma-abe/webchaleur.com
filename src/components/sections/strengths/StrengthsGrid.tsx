import { IconType } from "react-icons";
import {
  FaGlobe,
  FaRobot,
  FaMobileAlt,
  FaLaptopCode,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import StrengthCard from "./StrengthCard";

interface Strength {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: IconType;
}

interface StrengthsGridProps {
  isVisible: boolean;
}

export default function StrengthsGrid({ isVisible }: StrengthsGridProps) {
  const strengths: Strength[] = [
    {
      id: 1,
      number: "01",
      title: "最新技術でスピード開発",
      description: "Next.js、TypeScriptで\n効率的かつ高品質な開発を実現",
      icon: FaGlobe,
    },
    {
      id: 2,
      number: "02",
      title: "AIツールで業務効率化",
      description: "最新のAIツールを活用し\n開発スピードとクオリティを両立",
      icon: FaRobot,
    },
    {
      id: 3,
      number: "03",
      title: "パフォーマンス重視の設計",
      description: "Core Web Vitals対応で\nSEOに強い高速サイトを構築",
      icon: FaMobileAlt,
    },
    {
      id: 4,
      number: "04",
      title: "モダンな技術スタック",
      description: "React、Vue.js、Astroなど\n最適な技術を選定・実装",
      icon: FaLaptopCode,
    },
    {
      id: 5,
      number: "05",
      title: "継続的な改善・進化",
      description: "定期的なアップデートで\n常に最新・最適な状態を維持",
      icon: FaHandshake,
    },
    {
      id: 6,
      number: "06",
      title: "データドリブンな運用",
      description: "分析ツールを活用し\n成果につながる改善を実現",
      icon: FaChartLine,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      {strengths.map((strength, index) => (
        <StrengthCard
          key={strength.id}
          {...strength}
          isVisible={isVisible}
          delay={index * 100}
        />
      ))}
    </div>
  );
}
