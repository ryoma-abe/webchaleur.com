import Link from "next/link";

interface ListItemCardProps {
  href: string;
  date?: string;
  category?: string;
  title: string;
  description?: string;
  tags?: string[];
  linkText?: string;
  extra?: React.ReactNode;
}

export default function ListItemCard({
  href,
  date,
  category,
  title,
  description,
  tags,
  linkText = "詳しく見る",
  extra,
}: ListItemCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group-hover:transform group-hover:-translate-y-0.5 p-6">
        <article className="flex flex-col md:flex-row md:items-center gap-4">
          {date && (
            <div className="flex-shrink-0">
              <time
                dateTime={date}
                className="block text-center bg-primary-blue/5 rounded-xl px-4 py-3"
              >
                <span className="block text-2xl text-primary-blue font-bold">
                  {new Date(date).getDate()}
                </span>
                <span className="block text-xs text-primary-blue">
                  {new Date(date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </time>
            </div>
          )}

          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              {category && (
                <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-lg text-xs font-medium">
                  {category}
                </span>
              )}
              {extra}
            </div>

            <h2 className="mb-2 group-hover:text-primary-blue transition-colors text-xl">
              {title}
            </h2>

            {description && (
              <p className="text-gray text-xs md:text-sm mb-3">{description}</p>
            )}

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-accent-beige text-gray rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex-shrink-0">
            <span className="text-primary-blue text-sm group-hover:underline">
              {linkText} →
            </span>
          </div>
        </article>
      </div>
    </Link>
  );
}
