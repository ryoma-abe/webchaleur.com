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
      className={`bg-[var(--bg-light)] p-6 transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        borderRadius: '20px',
        transitionDelay: `${delay}ms`,
        border: '1px solid rgba(91, 143, 185, 0.1)',
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
      <p className="text-xs text-[var(--text-gray)] font-medium">
        — {author}
      </p>
    </div>
  );
}