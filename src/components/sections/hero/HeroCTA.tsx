import Link from "next/link";

interface HeroCTAProps {
  isVisible: boolean;
}

export default function HeroCTA({ isVisible }: HeroCTAProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 lg:mb-16 transition-all duration-1000 delay-400 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <Link
        href="/contact"
        className="btn-primary text-center text-lg px-8 py-4"
      >
        まずは気軽に相談
      </Link>

      <Link
        href="/works"
        className="btn-secondary text-center text-lg px-8 py-4"
      >
        制作事例を見る
      </Link>
    </div>
  );
}