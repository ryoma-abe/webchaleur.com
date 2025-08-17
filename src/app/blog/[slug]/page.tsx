import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';
import ArticleLayout from '@/components/layouts/ArticleLayout';
import ArticleMeta from '@/components/ui/ArticleMeta';
import { generatePageMetadata } from '@/lib/seo';
import TableOfContents from '@/components/blog/TableOfContents';
import ProgressIndicator from '@/components/blog/ProgressIndicator';
import ScrollToTop from '@/components/blog/ScrollToTop';

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

  return generatePageMetadata({
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
    keywords: blog.frontMatter.tags,
    image: blog.frontMatter.thumbnail,
    article: {
      publishedTime: blog.frontMatter.date,
      tags: blog.frontMatter.tags,
    },
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getContentBySlug('blog', slug);

  if (!blog) {
    notFound();
  }

  // 見出しにIDを追加してHTMLコンテンツを生成
  const processedContent = blog.content.replace(
    /^(#{2,3})\s+(.+)$/gm,
    (match, hashes, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^\w\s\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/g, '')
        .replace(/\s+/g, '-');
      return `${hashes} <span id="${id}">${text}</span>`;
    }
  );

  const htmlContent = await markdownToHtml(processedContent);

  const wordsPerMinute = 400;
  const wordCount = blog.content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <>
      <ArticleLayout
        header={
          <>
            <h1 className="article-title">{blog.frontMatter.title}</h1>
            <ArticleMeta
              date={blog.frontMatter.date}
              category={blog.frontMatter.category}
              readingTime={readingTime}
              tags={blog.frontMatter.tags}
              showTags={true}
            />
          </>
        }
        backLink={{
          href: "/blog",
          text: "ブログ一覧に戻る",
        }}
      >
        {/* 目次 */}
        <TableOfContents />
        
        {/* 本文 */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
      </ArticleLayout>

      {/* 進捗表示 */}
      <ProgressIndicator />
      
      {/* トップへ戻るボタン */}
      <ScrollToTop />
    </>
  );
}