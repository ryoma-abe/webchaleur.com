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
      className={`bg-white overflow-hidden hover:shadow-xl transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{
        borderRadius: "20px",
        transitionDelay: `${delay}ms`,
      }}
    >
      <Link href={link} className="block">
        {/* サムネイル */}
        <div className="relative h-48 bg-gradient-to-br from-[var(--lighter-blue)] to-[var(--light-blue)] overflow-hidden">
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
            className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[var(--main-blue)]"
            style={{
              borderRadius: "8px 10px 9px 11px",
            }}
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
                  className="text-xs px-3 py-1 bg-[var(--accent-beige)] text-[var(--text-gray)]"
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 詳細を見るリンク */}
          <span className="inline-flex items-center gap-2 text-[var(--main-blue)] font-medium hover:opacity-80 transition-opacity">
            詳しく見る
            <span>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}