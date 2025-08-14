import { getAllContent } from '@/lib/mdx';
import Link from 'next/link';
import WobblyHeading from '@/components/ui/WobblyHeading';
import FadeIn from '@/components/animations/FadeIn';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/news' });

export default async function NewsPage() {
  const news = await getAllContent('news');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* ヒーローセクション */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <WobblyHeading level={1} underline english="Information">
            お知らせ
          </WobblyHeading>
          <p className="text-center text-gray mt-6 max-w-2xl mx-auto">
            WebChaleurからのお知らせ、キャンペーン情報などをご案内しています。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {news.map((item, index) => (
                <Link href={`/news/${item.slug}`} key={item.slug} className="block group">
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group-hover:transform group-hover:-translate-y-0.5 p-6">
                    <article className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    {item.frontMatter.date && (
                      <time
                        dateTime={item.frontMatter.date}
                        className="block text-center bg-primary-blue/5 rounded-xl px-4 py-3"
                      >
                        <span className="block text-2xl text-primary-blue font-bold">
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
                        <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-lg text-xs font-medium">
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
                  </div>
                </Link>
              ))}
            </div>

            {news.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl">
                <p className="text-gray">
                  お知らせはまだありません
                </p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}