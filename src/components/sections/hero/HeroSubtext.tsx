interface HeroSubtextProps {
  isVisible: boolean;
}

export default function HeroSubtext({ isVisible }: HeroSubtextProps) {
  return (
    <p
      className={`text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-10 lg:mb-12 transition-all duration-1000 delay-200 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      帯広・音更・十勝を中心に
      <br className="sm:hidden" />
      ホームページやネットショップを作っています。
      <br />
      <span className="block sm:inline">最新の技術を使いながら、</span>
      <span className="block sm:inline">
        お客様に寄り添ったものづくりを。
      </span>
      <br />
      <span className="text-base text-gray-500 mt-2 block">
        ※オンラインでの打ち合わせも対応しています
      </span>
    </p>
  );
}