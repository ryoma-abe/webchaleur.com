import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';
import { generatePageMetadata } from '@/lib/seo';

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

  return generatePageMetadata({
    title: news.frontMatter.title,
    description: news.frontMatter.description,
    article: {
      publishedTime: news.frontMatter.date,
    },
  });
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
          <h1 className="article-title">{news.frontMatter.title}</h1>
          
          {/* メタ情報 */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-base text-gray">
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
                <span className="px-3 py-1 bg-primary-lighter text-primary-blue rounded-full text-sm font-medium">
                  {news.frontMatter.category}
                </span>
              </>
            )}
          </div>
        </header>

        {/* 本文 */}
        <div className="article-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />

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