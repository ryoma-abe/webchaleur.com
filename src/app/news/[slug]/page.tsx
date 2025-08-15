import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';
import ArticleLayout from '@/components/layouts/ArticleLayout';
import ArticleMeta from '@/components/ui/ArticleMeta';
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
    <ArticleLayout
      header={
        <>
          <h1 className="article-title">{news.frontMatter.title}</h1>
          <ArticleMeta
            date={news.frontMatter.date}
            category={news.frontMatter.category}
          />
        </>
      }
      backLink={{
        href: "/news",
        text: "お知らせ一覧に戻る",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </ArticleLayout>
  );
}