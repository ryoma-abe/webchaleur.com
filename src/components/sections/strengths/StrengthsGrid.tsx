import { IconType } from "react-icons";
import {
  FaGlobe,
  FaRobot,
  FaHandshake,
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
      title: "スピード × クオリティ",
      description: "最新のAIツールとフレームワークで\n高品質なサイトを素早く構築",
      icon: FaRobot,
    },
    {
      id: 2,
      number: "02",
      title: "地元密着 × 全国対応",
      description: "十勝は対面で、全国はオンラインで\nお客様に合わせた柔軟な対応",
      icon: FaGlobe,
    },
    {
      id: 3,
      number: "03",
      title: "制作 × 継続サポート",
      description: "作って終わりではなく\n長期的なパートナーとしてサポート",
      icon: FaHandshake,
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
      {strengths.map((strength, index) => (
        <StrengthCard
          key={strength.id}
          {...strength}
          isVisible={isVisible}
          delay={index * 150}
        />
      ))}
    </div>
  );
}
