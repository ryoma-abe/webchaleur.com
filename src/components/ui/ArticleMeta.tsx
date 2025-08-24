interface ArticleMetaProps {
  date?: string;
  category?: string;
  readingTime?: number;
  tags?: string[];
  showTags?: boolean;
}

export default function ArticleMeta({
  date,
  category,
  readingTime,
  tags,
  showTags = false,
}: ArticleMetaProps) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3 text-base text-gray">
        {date && (
          <time dateTime={date} className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Intl.DateTimeFormat("ja-JP", {
              timeZone: "Asia/Tokyo",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(date))}
          </time>
        )}

        {category && (
          <>
            {date && <span className="text-gray-300">•</span>}
            <span className="px-3 py-1 bg-primary-lighter text-primary-blue rounded-full text-sm">
              {category}
            </span>
          </>
        )}

        {readingTime && (
          <>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {readingTime}分で読める
            </span>
          </>
        )}
      </div>

      {showTags && tags && tags.length > 0 && (
        <div className="mt-8 text-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-light text-gray rounded-full text-sm mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
