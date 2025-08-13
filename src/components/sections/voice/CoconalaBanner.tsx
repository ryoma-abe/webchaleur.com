interface CoconalaBannerProps {
  isVisible: boolean;
}

export default function CoconalaBanner({ isVisible }: CoconalaBannerProps) {
  return (
    <div
      className={`bg-gradient-to-r from-lighter-blue to-light p-8 mb-12 text-center rounded-3xl border-2 border-primary-light transition-all duration-800 delay-200 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div>
          {/* 星評価 */}
          <div className="text-3xl text-yellow-400 mb-2">★★★★★</div>
          <div className="text-body font-medium">100件以上の制作実績</div>
        </div>

        <div className="flex-1 max-w-md">
          <p className="text-primary mb-4">
            ココナラでも多くのお客様から高評価をいただいております
          </p>
          <a
            href="https://coconala.com/users/2932979/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coconala inline-flex items-center gap-3"
          >
            <span>ココナラで詳しく見る</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
