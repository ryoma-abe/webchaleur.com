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
          <h1 className="article-title">{blog.frontMatter.title}</h1>
          
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
        <div className="article-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />

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