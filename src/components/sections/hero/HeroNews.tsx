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
      className={`w-full bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 lg:p-10 transition-all duration-1000 delay-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center mb-8">
        <h3 className="text-lg lg:text-xl font-bold text-gray-800">
          最新のお知らせ
        </h3>
        <span className="text-sm text-gray-500 mt-1 block">Latest News</span>
      </div>

      <div className="max-w-4xl mx-auto">
        {latestNews.map((news, index) => (
          <div key={news.slug}>
            {/* 上部の区切り線（最初の項目のみ） */}
            {index === 0 && (
              <div className="border-t border-gray-100" />
            )}
            
            <Link
              href={`/news/${news.slug}`}
              className="block group py-5 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-transparent px-2 -mx-2 rounded-lg transition-all duration-200"
            >
              <div className="flex items-center gap-4 md:gap-6">
                {/* 日付部分 */}
                <div className="flex-shrink-0">
                  <span className="block text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {formatDate(news.date).split('.')[1]}.{formatDate(news.date).split('.')[2]}
                  </span>
                  <span className="block text-xs text-gray-400">
                    {formatDate(news.date).split('.')[0]}
                  </span>
                </div>
                
                {/* 縦線 */}
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                
                {/* タイトル部分 */}
                <div className="flex-1 min-w-0">
                  <span className="text-base text-gray-700 group-hover:text-primary-blue transition-colors duration-200 font-medium line-clamp-1">
                    {news.title}
                  </span>
                </div>
                
                {/* バッジ */}
                {index === 0 && (
                  <span className="flex-shrink-0 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full font-bold shadow-sm">
                    NEW
                  </span>
                )}
                
                {/* 矢印 */}
                <span className="flex-shrink-0 text-gray-400 group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </div>
            </Link>
            
            {/* 下部の区切り線 */}
            {index < latestNews.length - 1 && (
              <div className="border-b border-gray-100" />
            )}
          </div>
        ))}
      </div>

      {/* フッター部分 */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <Link
          href="/news"
          className="group flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary-blue font-medium transition-all duration-200"
        >
          <span>すべてのお知らせを見る</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </div>
  );
}
