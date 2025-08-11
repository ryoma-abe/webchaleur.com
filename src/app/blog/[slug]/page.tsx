import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';
import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';

export async function generateStaticParams() {
  const blogs = await getAllContent('blog');
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getContentBySlug('blog', slug);
  
  if (!blog) {
    return {};
  }

  return {
    title: `${blog.frontMatter.title} | WebChaleur Blog`,
    description: blog.frontMatter.description,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getContentBySlug('blog', slug);

  if (!blog) {
    notFound();
  }

  const htmlContent = await markdownToHtml(blog.content);

  const wordsPerMinute = 400;
  const wordCount = blog.content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <article className="container mx-auto px-4 max-w-3xl">
        {/* ヘッダー部分 */}
        <header className="mb-16 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] leading-relaxed mb-8">
            {blog.frontMatter.title}
          </h1>
          
          {/* メタ情報 */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray">
            {blog.frontMatter.date && (
              <time dateTime={blog.frontMatter.date} className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(blog.frontMatter.date).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime}分で読める
            </span>
          </div>
        </header>

        {/* カテゴリー・タグ */}
        <div className="mb-12 text-center">
          {blog.frontMatter.category && (
            <span className="inline-block px-4 py-2 bg-primary-lighter text-primary-blue rounded-full text-sm font-medium mr-3 mb-2">
              {blog.frontMatter.category}
            </span>
          )}
          {blog.frontMatter.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-light text-gray rounded-full text-xs mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>

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
            prose-code:bg-accent-beige prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-[var(--text-dark)] prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-10
            prose-ul:list-disc prose-ul:pl-6 prose-ul:my-8 prose-ul:space-y-3
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-8 prose-ol:space-y-3
            prose-li:text-[var(--text-gray)] prose-li:leading-relaxed
            prose-img:rounded-xl prose-img:my-10
            prose-hr:border-gray-200 prose-hr:my-16"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* シェアボタン */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <p className="text-gray mb-6">この記事が役に立ったら、シェアしてください</p>
            <div className="flex gap-3 justify-center">
              <button className="btn-outline btn-small">
                X でシェア
              </button>
              <button className="btn-outline btn-small">
                Facebook でシェア
              </button>
            </div>
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="text-center mt-12">
          <a href="/blog" className="btn-secondary">
            ← ブログ一覧に戻る
          </a>
        </div>
      </article>
    </main>
  );
}