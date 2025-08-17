interface TrustIndicatorsProps {
  isVisible: boolean;
}

export default function TrustIndicators({ isVisible }: TrustIndicatorsProps) {
  return (
    <div
      className={`text-center transition-all duration-800 delay-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="inline-flex items-center gap-8 flex-wrap justify-center">
        <div className="text-center">
          <div className="text-3xl text-primary-blue">100件+</div>
          <div className="text-caption">制作実績</div>
        </div>
        <div className="text-center">
          <div className="text-3xl text-primary-blue">98%</div>
          <div className="text-caption">満足度</div>
        </div>
      </div>
    </div>
  );
}
