import Link from "next/link";

export default function HeroCTA() {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 lg:mb-16 min-h-[120px] sm:min-h-[60px]"
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