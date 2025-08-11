import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';

export async function generateStaticParams() {
  const works = await getAllContent('works');
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getContentBySlug('works', slug);
  
  if (!work) {
    return {};
  }

  return {
    title: `${work.frontMatter.title} | WebChaleur`,
    description: work.frontMatter.description,
  };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getContentBySlug('works', slug);

  if (!work) {
    notFound();
  }

  const htmlContent = await markdownToHtml(work.content);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <article className="container mx-auto px-4 max-w-5xl">
        {/* ヘッダー部分 */}
        <header className="mb-16 text-center">
          <h1 className="article-title">{work.frontMatter.title}</h1>
          
          {/* メタ情報 */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray">
            {work.frontMatter.client && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                クライアント: {work.frontMatter.client}
              </span>
            )}
            {work.frontMatter.date && (
              <>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  制作日: {new Date(work.frontMatter.date).toLocaleDateString('ja-JP')}
                </span>
              </>
            )}
          </div>
        </header>

        {/* メインビジュアル */}
        {work.frontMatter.thumbnail && (
          <div className="mb-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={work.frontMatter.thumbnail}
                alt={work.frontMatter.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* カテゴリー・タグ */}
        <div className="mb-12 text-center">
          {work.frontMatter.category && (
            <span className="inline-block px-4 py-2 bg-primary-lighter text-primary-blue rounded-full text-sm font-medium mr-3 mb-2">
              {work.frontMatter.category}
            </span>
          )}
          {work.frontMatter.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-light text-gray rounded-full text-xs mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* プロジェクト詳細 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* サイドバー情報 */}
          <div className="lg:col-span-1">
            <div className="bg-light rounded-xl p-6 space-y-6 sticky top-24">
              <div>
                <h3 className="text-sm font-bold text-[var(--text-dark)] mb-3">プロジェクト概要</h3>
                <p className="text-sm text-gray leading-relaxed">
                  {work.frontMatter.description || 'プロジェクトの詳細情報'}
                </p>
              </div>
              
              {work.frontMatter.technologies && (
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-dark)] mb-3">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    {work.frontMatter.technologies.map((tech: string) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-white rounded-full text-gray">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {work.frontMatter.url && (
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-dark)] mb-3">サイトURL</h3>
                  <a 
                    href={work.frontMatter.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-blue underline hover:opacity-80"
                  >
                    サイトを見る →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="lg:col-span-2">
            <div className="article-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="text-center mt-12">
          <a href="/works" className="btn-secondary">
            ← 実績一覧に戻る
          </a>
        </div>
      </article>
    </main>
  );
}