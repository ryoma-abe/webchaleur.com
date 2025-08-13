import { IconType } from "react-icons";
import { FaHome, FaLightbulb, FaHandshake } from "react-icons/fa";
import SketchyCard from "@/components/ui/SketchyCard";

interface Value {
  icon: IconType;
  title: string;
  description: string;
}

interface AboutValuesProps {
  isVisible: boolean;
}

export default function AboutValues({ isVisible }: AboutValuesProps) {
  const values: Value[] = [
    {
      icon: FaHome,
      title: "地元密着",
      description:
        "帯広・音更なら30分以内にお伺い。\n対面でのお打ち合わせを大切にしています。",
    },
    {
      icon: FaLightbulb,
      title: "最新技術",
      description:
        "Next.jsやShopifyなど、最新の技術で高速・安全なサイトを構築します。",
    },
    {
      icon: FaHandshake,
      title: "継続サポート",
      description:
        "作った後も安心。更新や修正のご相談もいつでもお気軽にどうぞ。",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {values.map((value, index) => (
        <div
          key={index}
          className={`transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${400 + index * 100}ms` }}
        >
          <SketchyCard className="h-full">
            <div className="text-center">
              <div className="text-4xl mb-4 text-primary-blue">
                <value.icon className="mx-auto" />
              </div>
              <h3 className="text-lg mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-gray">
                {value.description}
              </p>
            </div>
          </SketchyCard>
        </div>
      ))}
    </div>
  );
}
