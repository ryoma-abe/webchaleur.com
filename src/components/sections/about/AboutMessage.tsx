import SketchyCard from "@/components/ui/SketchyCard";

interface AboutMessageProps {
  isVisible: boolean;
}

export default function AboutMessage({ isVisible }: AboutMessageProps) {
  return (
    <div
      className={`max-w-3xl mx-auto mb-16 transition-all duration-800 delay-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <SketchyCard variant="elevated">
        <div className="text-center p-4">
          <p className="text-lg text-gray leading-relaxed mb-4">
            WebChaleurは、十勝・帯広エリアを拠点に
          </p>
          <p className="text-xl text-primary mb-4">
            「地域企業様のデジタル化を支援する」
          </p>
          <p className="text-lg text-gray leading-relaxed">
            Web制作パートナーです。
          </p>
        </div>
      </SketchyCard>
    </div>
  );
}