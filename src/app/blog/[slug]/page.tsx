import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';
import ArticleLayout from '@/components/layouts/ArticleLayout';
import ArticleMeta from '@/components/ui/ArticleMeta';
import { generatePageMetadata } from '@/lib/seo';

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

  const htmlContent = await markdownToHtml(blog.content);

  const wordsPerMinute = 400;
  const wordCount = blog.content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
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
      extraContent={
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <p className="text-gray mb-6">
              この記事が役に立ったら、シェアしてください
            </p>
            <div className="flex gap-3 justify-center">
              <button className="btn-outline btn-small">X でシェア</button>
              <button className="btn-outline btn-small">
                Facebook でシェア
              </button>
            </div>
          </div>
        </div>
      }
    >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </ArticleLayout>
  );
}