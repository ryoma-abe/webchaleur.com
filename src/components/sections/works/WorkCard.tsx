import Link from "next/link";
import Image from "next/image";

interface WorkCardProps {
  slug: string;
  date: string;
  title: string;
  client: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  link: string;
  isVisible: boolean;
  delay: number;
}

export default function WorkCard({
  slug,
  title,
  client,
  description,
  category,
  tags,
  thumbnail,
  link,
  isVisible,
  delay,
}: WorkCardProps) {
  return (
    <article
      className={`bg-white rounded-[20px] overflow-hidden transition-all duration-500 group shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:translate-y-[-4px] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <Link href={link} className="block">
        {/* サムネイル */}
        <div className="relative h-48 bg-gradient-to-br from-lighter-blue to-primary-light overflow-hidden">
          {thumbnail && thumbnail !== '/images/works/default.jpg' ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-30">🖼️</span>
            </div>
          )}

          {/* カテゴリーバッジ */}
          <div
            className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs text-primary-blue rounded-[8px_10px_9px_11px]"
          >
            {category}
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-6">
          <h3 className="heading-card mb-2">
            {client || title}
          </h3>

          <p className="text-body mb-4 text-sm">
            {description}
          </p>

          {/* タグ */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 4).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-3 py-1 bg-accent-beige text-gray rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 詳細を見るリンク */}
          <span className="inline-flex items-center gap-2 text-primary-blue hover:opacity-80 transition-opacity">
            詳しく見る
            <span>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}