import { getAllContent } from '@/lib/mdx';
import Image from 'next/image';
import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/works' });

export default async function WorksPage() {
  const works = await getAllContent('works');

  return (
    <main className="min-h-screen bg-bg-cream py-20">
      <div className="container mx-auto px-4">
        <WobblyHeading level={1} underline english="Works">
          制作実績
        </WobblyHeading>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {works.map((work, index) => (
            <SketchyCard
              key={work.slug}
              className="hover:shadow-[6px_6px_0_rgba(91,143,185,0.2)] overflow-hidden"
            >
              <article>
                {work.frontMatter.thumbnail && (
                  <div className="relative w-full h-48 -m-6 mb-4">
                    <Image
                      src={work.frontMatter.thumbnail}
                      alt={work.frontMatter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {work.frontMatter.category && (
                  <span className="inline-block px-3 py-1 bg-light-blue/20 text-main-blue rounded-[10px_12px_11px_13px] font-zenmaru text-sm mb-3">
                    {work.frontMatter.category}
                  </span>
                )}
                
                <h2 className="text-xl font-klee font-bold text-text-dark mb-2">
                  {work.frontMatter.title}
                </h2>
                
                {work.frontMatter.client && (
                  <p className="text-sm text-text-gray font-zenmaru mb-3">
                    {work.frontMatter.client}
                  </p>
                )}
                
                {work.frontMatter.description && (
                  <p className="text-text-gray font-zenmaru mb-4 line-clamp-3">
                    {work.frontMatter.description}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.frontMatter.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-accent-beige text-text-gray rounded-[8px_10px_9px_11px] font-zenmaru"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <HandDrawnButton
                  href={`/works/${work.slug}`}
                  size="small"
                  variant="primary"
                  className="w-full text-center"
                >
                  詳しく見る →
                </HandDrawnButton>
              </article>
            </SketchyCard>
          ))}
        </div>

        {works.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-gray font-zenmaru">
              実績コンテンツを準備中です
            </p>
          </div>
        )}
      </div>
    </main>
  );
}