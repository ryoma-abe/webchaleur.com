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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] leading-relaxed mb-8">
            {work.frontMatter.title}
          </h1>
          
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
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-[var(--font-handwritten)] prose-headings:text-[var(--text-dark)] prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-200
                prose-h3:text-lg prose-h3:mt-12 prose-h3:mb-6
                prose-p:text-[var(--text-gray)] prose-p:leading-[2.0] prose-p:mb-8 prose-p:text-base
                prose-a:text-primary-blue prose-a:underline prose-a:underline-offset-2 hover:prose-a:opacity-80
                prose-blockquote:border-l-4 prose-blockquote:border-primary-light prose-blockquote:bg-primary-lighter/30
                prose-blockquote:pl-6 prose-blockquote:py-6 prose-blockquote:my-10 prose-blockquote:italic
                prose-code:bg-accent-beige prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-[var(--text-dark)] prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-10
                prose-ul:list-disc prose-ul:pl-6 prose-ul:my-8 prose-ul:space-y-3
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-8 prose-ol:space-y-3
                prose-li:text-[var(--text-gray)] prose-li:leading-relaxed
                prose-img:rounded-xl prose-img:my-10
                prose-hr:border-gray-200 prose-hr:my-16"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
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