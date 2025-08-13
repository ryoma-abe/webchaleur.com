interface ReviewCardProps {
  content: string;
  author: string;
  rating: number;
  isVisible: boolean;
  delay: number;
}

export default function ReviewCard({
  content,
  author,
  rating,
  isVisible,
  delay,
}: ReviewCardProps) {
  return (
    <div
      className={`bg-white p-6 transition-all duration-800 group shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        borderRadius: '20px',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* 星評価 */}
      <div className="text-yellow-400 mb-3">
        {'★'.repeat(rating)}
      </div>

      {/* レビュー内容 */}
      <p className="text-body text-sm mb-4 leading-relaxed min-h-[80px]">
        "{content}"
      </p>

      {/* 投稿者 */}
      <p className="text-xs text-gray">
        — {author}
      </p>
    </div>
  );
}