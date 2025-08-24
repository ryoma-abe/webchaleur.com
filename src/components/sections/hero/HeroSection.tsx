"use client";
import Link from "next/link";
import { ReactTyped } from "react-typed";
export type NewsItemForHero = {
  slug: string;
  title: string;
  category: string;
  year: string;
  month: string;
  day: string;
};

interface HeroSectionProps {
  latestNews: NewsItemForHero[];
}

export default function HeroSection({ latestNews }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden bg-white py-20">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-tight mb-8 lg:mb-10 min-h-[150px] md:min-h-[200px] lg:min-h-[250px] whitespace-pre-line">
            <ReactTyped
              strings={[
                "十勝の企業様の\nWebサイトのこと\nお手伝いします。",
                "100件以上の\n制作実績で培った\n技術力でサポートします。",
                "Next.js・Astroなど\n最新技術も\nしっかり対応。",
                "制作後の運用も\nずっと一緒に\nフォローします。",
              ]}
              typeSpeed={60}
              backSpeed={50}
              backDelay={3000}
              loop
            />
          </h1>

          <p className="max-w-3xl mx-auto mb-10 lg:mb-12">
            帯広・音更・十勝を中心にホームページやネットショップを作っています。
            <br />
            最新の技術を使いながら、お客様に寄り添ったものづくりを。
            <br />
            ※オンラインでの打ち合わせも対応しています
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 lg:mb-16">
            <Link href="/contact" className="btn btn-primary" prefetch={false}>
              まずは気軽に相談
            </Link>
            <Link href="/works" className="btn btn-primary" prefetch={false}>
              制作事例を見る
            </Link>
          </div>

          {latestNews.length > 0 && (
            <div className="w-full bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 lg:p-10 transition-shadow duration-300">
              <div className="text-center mb-8">
                <h2 className="text-lg lg:text-xl">最新のお知らせ</h2>
                <span className="text-caption mt-1 block">Latest News</span>
              </div>

              <div className="max-w-4xl mx-auto">
                {latestNews.map((news, index) => (
                  <Link
                    key={news.slug}
                    href={`/news/${news.slug}`}
                    className="block group py-5 border-gray-200 border-t last:border-b hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-transparent px-2 -mx-2 transition-all duration-200"
                    prefetch={false}
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <span className="block text-xs text-gray uppercase tracking-wider">
                          {news.month}.{news.day}
                        </span>
                        <span className="block text-xs text-gray">
                          {news.year}
                        </span>
                      </div>
                      <div className="w-px h-10 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                      <div className="flex-1 min-w-0">
                        <span className="text-base text-primary group-hover:text-primary-blue transition-colors duration-200 line-clamp-1">
                          {news.title}
                        </span>
                      </div>
                      {index === 0 && (
                        <span className="flex-shrink-0 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full font-bold shadow-sm">
                          NEW
                        </span>
                      )}
                      <span className="flex-shrink-0 text-gray group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-200">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6">
                <Link
                  href="/news"
                  className="group flex items-center justify-center gap-2 text-sm text-gray hover:text-primary-blue transition-all duration-200"
                  prefetch={false}
                >
                  <span>すべてのお知らせを見る</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
