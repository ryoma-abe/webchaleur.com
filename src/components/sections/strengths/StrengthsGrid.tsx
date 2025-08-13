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
      title: "地元も全国もお任せください",
      description: "帯広・音更は直接お伺い\n全国オンラインでも対応",
      icon: FaGlobe,
    },
    {
      id: 2,
      number: "02",
      title: "最新技術でスピード開発",
      description: "AIツールやNext.jsなど\n最新技術で効率的に開発",
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
      title: "作ったあとも、ずっと一緒",
      description: "更新や修正のご相談も\nいつでもお気軽に",
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
