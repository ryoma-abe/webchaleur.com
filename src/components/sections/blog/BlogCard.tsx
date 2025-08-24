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
  date,
  title,
  description,
  category,
  link,
  isVisible,
  delay,
}: BlogCardProps) {

  const formatDate = (dateString: string) => {
    // dateString は "YYYY-MM-DD" 形式で固定されている
    const [year, month, day] = dateString.split('-');
    
    return {
      full: `${year}.${month}.${day}`,
      day: String(parseInt(day, 10)),
      month: `${parseInt(month, 10)}月`
    };
  };


  const getReadTime = (desc: string) => {
    const wordsPerMinute = 300; // 日本語の平均読書速度
    const minutes = Math.ceil(desc.length / wordsPerMinute);
    return `${minutes}分で読める`;
  };

  const dateInfo = formatDate(date);

  return (
    <article
      className={`bg-white rounded-[20px] transition-all duration-500 group shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:translate-y-[-3px] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <Link href={link} className="block p-6">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-blue">
                {dateInfo.day}
              </div>
              <div className="text-xs text-gray">
                {dateInfo.month}
              </div>
            </div>
          </div>
          <span 
            className="px-3 py-1 bg-lighter-blue text-primary-blue text-xs rounded-xl"
          >
            {category}
          </span>
        </div>

        
        <h3 className="heading-card mb-3 line-clamp-2">
          {title}
        </h3>

        
        <p className="text-body mb-4 line-clamp-3">
          {description}
        </p>

        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray">
            {getReadTime(description)}
          </span>
          <span className="text-primary-blue text-sm">
            読む →
          </span>
        </div>
      </Link>
    </article>
  );
}