import { getAllContent } from '@/lib/mdx';
import Link from 'next/link';
import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/news' });

export default async function NewsPage() {
  const news = await getAllContent('news');

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <WobblyHeading level={1} underline english="Information">
          お知らせ
        </WobblyHeading>

        <p className="text-center text-gray mb-12 max-w-2xl mx-auto">
          WebChaleurからのお知らせ、キャンペーン情報などをご案内しています。
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {news.map((item, index) => (
              <Link href={`/news/${item.slug}`} key={item.slug} className="block group">
                <SketchyCard
                  className="hover:shadow-[4px_4px_0_rgba(91,143,185,0.15)] transition-all group-hover:transform group-hover:-translate-y-0.5"
                  rotate={false}
                >
                  <article className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    {item.frontMatter.date && (
                      <time
                        dateTime={item.frontMatter.date}
                        className="block text-center bg-primary-lighter rounded-[10px_12px_11px_13px] px-4 py-3"
                      >
                        <span className="block text-2xl text-primary-blue">
                          {new Date(item.frontMatter.date).getDate()}
                        </span>
                        <span className="block text-xs text-primary-blue">
                          {new Date(item.frontMatter.date).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </span>
                      </time>
                    )}
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      {item.frontMatter.category && (
                        <span 
                          className="inline-block px-3 py-1 bg-accent-beige text-gray rounded-[8px_10px_9px_11px] text-xs"
                          style={{ transform: `rotate(${index % 2 ? 0.2 : -0.2}deg)` }}
                        >
                          {item.frontMatter.category}
                        </span>
                      )}
                    </div>

                    <h2 className="text-base md:text-lg text-primary mb-2 group-hover:text-primary-blue transition-colors">
                      {item.frontMatter.title}
                    </h2>

                    {item.frontMatter.description && (
                      <p className="text-gray text-xs md:text-sm mb-3">
                        {item.frontMatter.description}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0">
                    <span className="text-primary-blue text-sm group-hover:underline">
                      詳しく見る →
                    </span>
                  </div>
                </article>
              </SketchyCard>
              </Link>
            ))}
          </div>

          {news.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray">
                お知らせはまだありません
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}