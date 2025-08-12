import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  date: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
  isVisible: boolean;
  delay: number;
}

export default function BlogCard({
  slug,
  date,
  title,
  description,
  category,
  tags,
  link,
  isVisible,
  delay,
}: BlogCardProps) {
  // 日付フォーマット
  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    
    return {
      full: `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`,
      day: String(day),
      month: `${month}月`
    };
  };

  // 読み時間を計算（簡易的に文字数から推定）
  const getReadTime = (desc: string) => {
    const wordsPerMinute = 300; // 日本語の平均読書速度
    const minutes = Math.ceil(desc.length / wordsPerMinute);
    return `${minutes}分で読める`;
  };

  const dateInfo = formatDate(date);

  return (
    <article
      className={`bg-white transition-all duration-500 group shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:translate-y-[-3px] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        borderRadius: '20px',
        transitionDelay: `${delay}ms`,
      }}
    >
      <Link href={link} className="block p-6">
        {/* 日付とカテゴリー */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--main-blue)]">
                {dateInfo.day}
              </div>
              <div className="text-xs text-[var(--text-gray)]">
                {dateInfo.month}
              </div>
            </div>
          </div>
          <span 
            className="px-3 py-1 bg-[var(--lighter-blue)] text-[var(--main-blue)] text-xs font-medium"
            style={{
              borderRadius: '12px',
            }}
          >
            {category}
          </span>
        </div>

        {/* タイトル */}
        <h3 className="heading-card mb-3 line-clamp-2">
          {title}
        </h3>

        {/* 説明文 */}
        <p className="text-body text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* メタ情報 */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-gray)]">
            {getReadTime(description)}
          </span>
          <span className="text-[var(--main-blue)] text-sm font-medium">
            読む →
          </span>
        </div>
      </Link>
    </article>
  );
}