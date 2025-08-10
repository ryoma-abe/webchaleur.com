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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await getContentBySlug('blog', params.slug);
  
  if (!blog) {
    return {};
  }

  return {
    title: `${blog.frontMatter.title} | WebChaleur Blog`,
    description: blog.frontMatter.description,
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = await getContentBySlug('blog', params.slug);

  if (!blog) {
    notFound();
  }

  const htmlContent = await markdownToHtml(blog.content);

  const wordsPerMinute = 400;
  const wordCount = blog.content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <main className="min-h-screen bg-bg-cream py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <WobblyHeading level={1} underline>
            {blog.frontMatter.title}
          </WobblyHeading>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6 text-text-gray font-zenmaru text-sm">
            {blog.frontMatter.date && (
              <time dateTime={blog.frontMatter.date}>
                {new Date(blog.frontMatter.date).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            <span>•</span>
            <span>{readingTime}分で読める</span>
          </div>
        </div>

        <div className="mb-8 text-center">
          {blog.frontMatter.category && (
            <span className="inline-block px-4 py-2 bg-light-blue/20 text-main-blue rounded-[12px_14px_13px_15px] font-zenmaru text-sm mr-3">
              {blog.frontMatter.category}
            </span>
          )}
          {blog.frontMatter.tags?.map((tag, index) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-accent-beige text-text-gray rounded-[10px_12px_11px_13px] font-zenmaru text-sm mr-2 mb-2"
              style={{ transform: `rotate(${index % 2 ? 0.3 : -0.2}deg)` }}
            >
              #{tag}
            </span>
          ))}
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
              prose-code:bg-accent-beige prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-text-dark prose-pre:text-white prose-pre:rounded-[12px_14px_13px_15px]
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-text-gray prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </SketchyCard>

        <div className="mb-12 text-center">
          <p className="text-text-gray font-zenmaru mb-4">この記事が役に立ったら、シェアしてください！</p>
          <div className="flex gap-4 justify-center">
            <HandDrawnButton variant="outline" size="small">
              X でシェア
            </HandDrawnButton>
            <HandDrawnButton variant="outline" size="small">
              Facebook でシェア
            </HandDrawnButton>
          </div>
        </div>

        <div className="text-center">
          <HandDrawnButton href="/blog" variant="primary">
            ← ブログ一覧に戻る
          </HandDrawnButton>
        </div>
      </div>
    </main>
  );
}