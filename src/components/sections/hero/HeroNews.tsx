import Link from "next/link";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  slug: string;
}

interface HeroNewsProps {
  latestNews: NewsItem[];
  isVisible: boolean;
}

export default function HeroNews({ latestNews, isVisible }: HeroNewsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  if (latestNews.length === 0) return null;

  return (
    <div
      className={`w-full bg-white/95 backdrop-blur-sm rounded-[24px] shadow-[0_20px_60px_rgba(91,143,185,0.1)] p-8 lg:p-10 transition-all duration-1000 delay-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-6 text-center">
        最新のお知らせ
      </h3>

      <div className="space-y-3 max-w-4xl mx-auto">
        {latestNews.map((news, index) => (
          <Link
            key={news.slug}
            href={`/news/${news.slug}`}
            className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200"
          >
            <div className="flex items-start gap-4">
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {formatDate(news.date)}
              </span>
              <div className="flex-1">
                <span className="text-base text-gray-800 group-hover:text-primary-blue transition-colors duration-200">
                  {news.title}
                </span>
                {index === 0 && (
                  <span className="inline-block ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                    NEW
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 font-medium transition-colors duration-200"
        >
          すべてのお知らせを見る
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}