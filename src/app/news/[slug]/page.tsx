import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';
import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';

export async function generateStaticParams() {
  const news = await getAllContent('news');
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const news = await getContentBySlug('news', params.slug);
  
  if (!news) {
    return {};
  }

  return {
    title: `${news.frontMatter.title} | WebChaleur`,
    description: news.frontMatter.description,
  };
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = await getContentBySlug('news', params.slug);

  if (!news) {
    notFound();
  }

  const htmlContent = await markdownToHtml(news.content);

  return (
    <main className="min-h-screen bg-bg-cream py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <WobblyHeading level={1} underline>
            {news.frontMatter.title}
          </WobblyHeading>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {news.frontMatter.date && (
              <time 
                dateTime={news.frontMatter.date}
                className="text-text-gray font-zenmaru"
              >
                {new Date(news.frontMatter.date).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            {news.frontMatter.category && (
              <>
                <span className="text-text-gray">•</span>
                <span className="inline-block px-3 py-1 bg-accent-beige text-text-gray rounded-[8px_10px_9px_11px] font-zenmaru text-sm">
                  {news.frontMatter.category}
                </span>
              </>
            )}
          </div>
        </div>

        <SketchyCard className="mb-12">
          <article
            className="prose prose-lg max-w-none font-zenmaru
              prose-headings:font-klee prose-headings:text-text-dark
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b-2 prose-h2:border-dashed prose-h2:border-accent-beige prose-h2:pb-2
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-text-gray prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-main-blue prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-main-blue/30
              prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-text-gray
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-text-gray prose-li:mb-2
              prose-strong:text-text-dark prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </SketchyCard>

        <div className="text-center">
          <HandDrawnButton href="/news" variant="primary">
            ← お知らせ一覧に戻る
          </HandDrawnButton>
        </div>
      </div>
    </main>
  );
}