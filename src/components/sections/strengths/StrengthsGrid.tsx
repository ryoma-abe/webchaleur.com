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
      title: "十勝から全国へ展開",
      description: "地域密着を目指しつつ、\n全国どこでもオンライン対応",
      icon: FaGlobe,
    },
    {
      id: 2,
      number: "02",
      title: "AIを活用した最新のWeb制作",
      description: "ChatGPTやClaudeなどの\nAI導入支援もお任せください",
      icon: FaRobot,
    },
    {
      id: 3,
      number: "03",
      title: "SNS運用もトータルサポート",
      description: "Instagram・X(Twitter)の\n運用アドバイスも提供",
      icon: FaMobileAlt,
    },
    {
      id: 4,
      number: "04",
      title: "最新技術も、お任せください",
      description: "Next.jsやShopifyなど\n新しい技術もしっかり対応",
      icon: FaLaptopCode,
    },
    {
      id: 5,
      number: "05",
      title: "制作後も、継続的にサポート",
      description: "更新や修正のご相談も\nいつでもお気軽に",
      icon: FaHandshake,
    },
    {
      id: 6,
      number: "06",
      title: "データ分析で成果を可視化",
      description: "Google Analyticsの設定から\n改善提案まで対応",
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