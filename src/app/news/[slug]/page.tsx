import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';

export async function generateStaticParams() {
  const news = await getAllContent('news');
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = await getContentBySlug('news', slug);
  
  if (!news) {
    return {};
  }

  return {
    title: `${news.frontMatter.title} | WebChaleur`,
    description: news.frontMatter.description,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = await getContentBySlug('news', slug);

  if (!news) {
    notFound();
  }

  const htmlContent = await markdownToHtml(news.content);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <article className="container mx-auto px-4 max-w-3xl">
        {/* ヘッダー部分 */}
        <header className="mb-16 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] leading-relaxed mb-8">
            {news.frontMatter.title}
          </h1>
          
          {/* メタ情報 */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray">
            {news.frontMatter.date && (
              <time dateTime={news.frontMatter.date} className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(news.frontMatter.date).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            {news.frontMatter.category && (
              <>
                <span className="text-gray-300">•</span>
                <span className="px-3 py-1 bg-primary-lighter text-primary-blue rounded-full text-xs font-medium">
                  {news.frontMatter.category}
                </span>
              </>
            )}
          </div>
        </header>

        {/* 本文 */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-[var(--font-handwritten)] prose-headings:text-[var(--text-dark)] prose-headings:font-bold
            prose-h2:text-xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-200
            prose-h3:text-lg prose-h3:mt-12 prose-h3:mb-6
            prose-p:text-[var(--text-gray)] prose-p:leading-[2.0] prose-p:mb-8 prose-p:text-base
            prose-a:text-primary-blue prose-a:underline prose-a:underline-offset-2 hover:prose-a:opacity-80
            prose-blockquote:border-l-4 prose-blockquote:border-primary-light prose-blockquote:bg-primary-lighter/30
            prose-blockquote:pl-6 prose-blockquote:py-6 prose-blockquote:my-10 prose-blockquote:italic
            prose-ul:list-disc prose-ul:pl-6 prose-ul:my-8 prose-ul:space-y-3
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-8 prose-ol:space-y-3
            prose-li:text-[var(--text-gray)] prose-li:leading-relaxed
            prose-strong:text-[var(--text-dark)] prose-strong:font-bold
            prose-img:rounded-xl prose-img:my-10
            prose-hr:border-gray-200 prose-hr:my-16"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* 戻るボタン */}
        <div className="text-center mt-16">
          <a href="/news" className="btn-secondary">
            ← お知らせ一覧に戻る
          </a>
        </div>
      </article>
    </main>
  );
}