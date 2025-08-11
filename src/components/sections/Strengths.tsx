"use client";

import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { 
  FaGlobe, 
  FaRobot, 
  FaMobileAlt, 
  FaLaptopCode, 
  FaHandshake, 
  FaChartLine,
  FaRocket 
} from "react-icons/fa";

interface Strength {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: IconType;
}

export default function Strengths() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("strengths");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

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
    <section id="strengths" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-section">私の強み</h2>
          <span className="text-caption inline-block">Our Strengths</span>
          <p className="text-body mt-4 max-w-3xl mx-auto">
            100件以上の制作実績を活かし、十勝・帯広から全国へ。
            <br />
            <span className="text-primary-blue font-medium">AI活用</span>や
            <span className="text-primary-blue font-medium">SNS運用</span>まで、
            最新のデジタルマーケティングをサポート
          </p>
        </div>

        {/* 強みカードグリッド - 6つに増やしたので3列2行に */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {strengths.map((strength, index) => (
            <div
              key={strength.id}
              className={`relative transition-all duration-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className="bg-light p-6 lg:p-8 h-full hover:shadow-lg transition-all hover:translate-y-[-4px] relative overflow-hidden"
                style={{
                  borderRadius: "20px",
                }}
              >
                {/* 番号バッジ */}
                <div
                  className="inline-block mb-4"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "white",
                    border: "3px solid #5b8fb9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="text-primary-blue font-bold text-lg font-[var(--font-handwritten)]">
                    {strength.number}
                  </span>
                </div>

                {/* アイコン */}
                <div className="text-3xl mb-3 text-primary-blue">
                  <strength.icon />
                </div>

                {/* タイトル */}
                <h3 className="heading-card mb-3 text-lg">{strength.title}</h3>

                {/* 説明文 */}
                <p className="text-body whitespace-pre-line text-sm">
                  {strength.description}
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
          ))}
        </div>

        {/* 特別なアピールセクション */}
        <div
          className={`bg-gradient-to-r from-lighter-blue to-light p-8 mt-12 text-center transition-all duration-800 delay-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            borderRadius: "24px",
            border: "2px dashed #8fb5d1",
          }}
        >
          <h3 className="heading-card mb-4 text-primary-blue flex items-center justify-center gap-2">
            <FaRocket className="inline-block" />
            <span>これからの時代に必要なWeb制作</span>
          </h3>
          <p className="text-body max-w-3xl mx-auto mb-6">
            ただホームページを作るだけではなく、
            <span className="font-medium">AI技術の活用</span>
            で業務効率化を実現し、
            <span className="font-medium">SNS運用</span>で集客力を高め、
            <span className="font-medium">データ分析</span>で改善を続ける。
            <br />
            <br />
            これから十勝の企業様が
            <span className="text-primary-blue font-bold">
              デジタル時代で成長する
            </span>
            ための、総合的なパートナーを目指します。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span
              className="bg-white px-4 py-2 text-sm font-medium text-gray"
              style={{ borderRadius: "16px" }}
            >
              #AI導入支援
            </span>
            <span
              className="bg-white px-4 py-2 text-sm font-medium text-gray"
              style={{ borderRadius: "16px" }}
            >
              #SNSマーケティング
            </span>
            <span
              className="bg-white px-4 py-2 text-sm font-medium text-gray"
              style={{ borderRadius: "16px" }}
            >
              #データドリブン
            </span>
            <span
              className="bg-white px-4 py-2 text-sm font-medium text-gray"
              style={{ borderRadius: "16px" }}
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
            <span className="text-primary-blue font-medium mx-1">
              最新技術と真心
            </span>
            で解決します
          </p>
        </div>
      </div>
    </section>
  );
}
