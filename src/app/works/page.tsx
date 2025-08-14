import { getAllContent } from '@/lib/mdx';
import Image from 'next/image';
import Link from 'next/link';
import WobblyHeading from '@/components/ui/WobblyHeading';
import FadeIn from '@/components/animations/FadeIn';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/works' });

export default async function WorksPage() {
  const works = await getAllContent('works');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* ヒーローセクション */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <WobblyHeading level={1} underline english="Works">
            制作実績
          </WobblyHeading>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {works.map((work, index) => (
              <Link href={`/works/${work.slug}`} key={work.slug} className="block group">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all group-hover:transform group-hover:-translate-y-1">
                  <article>
                    {work.frontMatter.thumbnail && (
                      <div className="relative w-full h-48">
                        <Image
                          src={work.frontMatter.thumbnail}
                          alt={work.frontMatter.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {work.frontMatter.category && (
                        <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-lg text-sm font-medium mb-3">
                          {work.frontMatter.category}
                        </span>
                      )}
                      
                      <h2 className="text-base md:text-lg text-primary mb-2 group-hover:text-primary-blue transition-colors">
                        {work.frontMatter.title}
                      </h2>
                      
                      {work.frontMatter.client && (
                        <p className="text-xs md:text-sm text-gray mb-3">
                          {work.frontMatter.client}
                        </p>
                      )}
                      
                      {work.frontMatter.description && (
                        <p className="text-xs md:text-sm text-gray mb-4 line-clamp-3">
                          {work.frontMatter.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.frontMatter.tags?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-right">
                        <span className="text-primary-blue text-sm group-hover:underline">
                          詳しく見る →
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </Link>
            ))}
          </div>

          {works.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl mt-12">
              <p className="text-gray">
                実績コンテンツを準備中です
              </p>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
}