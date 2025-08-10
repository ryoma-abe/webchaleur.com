import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';
import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';

export async function generateStaticParams() {
  const works = await getAllContent('works');
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = await getContentBySlug('works', params.slug);
  
  if (!work) {
    return {};
  }

  return {
    title: `${work.frontMatter.title} | WebChaleur`,
    description: work.frontMatter.description,
  };
}

export default async function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = await getContentBySlug('works', params.slug);

  if (!work) {
    notFound();
  }

  const htmlContent = await markdownToHtml(work.content);

  return (
    <main className="min-h-screen bg-bg-cream py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <WobblyHeading level={1} underline>
            {work.frontMatter.title}
          </WobblyHeading>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {work.frontMatter.client && (
              <span className="text-text-gray font-zenmaru">
                クライアント: {work.frontMatter.client}
              </span>
            )}
            {work.frontMatter.date && (
              <span className="text-text-gray font-zenmaru">
                制作日: {new Date(work.frontMatter.date).toLocaleDateString('ja-JP')}
              </span>
            )}
          </div>
        </div>

        {work.frontMatter.thumbnail && (
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={work.frontMatter.thumbnail}
                alt={work.frontMatter.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="mb-8 text-center">
          {work.frontMatter.category && (
            <span className="inline-block px-4 py-2 bg-light-blue/20 text-main-blue rounded-[12px_14px_13px_15px] font-zenmaru text-sm mr-3">
              {work.frontMatter.category}
            </span>
          )}
          {work.frontMatter.tags?.map((tag, index) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-accent-beige text-text-gray rounded-[10px_12px_11px_13px] font-zenmaru text-sm mr-2 mb-2"
              style={{ transform: `rotate(${index % 2 ? 0.3 : -0.2}deg)` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <SketchyCard className="mb-12">
          <div
            className="prose prose-lg max-w-none font-zenmaru
              prose-headings:font-klee prose-headings:text-text-dark
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-text-gray prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-main-blue prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-main-blue/30
              prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-text-gray
              prose-code:bg-accent-beige prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-text-dark prose-pre:text-white"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </SketchyCard>

        <div className="text-center">
          <HandDrawnButton href="/works" variant="outline">
            ← 実績一覧に戻る
          </HandDrawnButton>
        </div>
      </div>
    </main>
  );
}