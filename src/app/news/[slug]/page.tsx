import { notFound } from "next/navigation";
import Link from "next/link";
import { getContentBySlug, getAllContent, markdownToHtml } from "@/lib/mdx";
import ArticleMeta from "@/components/ui/ArticleMeta";
import { generatePageMetadata } from "@/lib/seo";
import "../../article.css";
export async function generateStaticParams() {
  const news = await getAllContent("news");
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getContentBySlug("news", slug);

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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getContentBySlug("news", slug);

  if (!news) {
    notFound();
  }

  const htmlContent = await markdownToHtml(news.content);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-xl text-center md:text-2xl lg:text-3xl font-bold mb-6">
            {news.frontMatter.title}
          </h1>
          <ArticleMeta
            date={news.frontMatter.date}
            category={news.frontMatter.category}
          />
        </div>
      </section>

      {/* Content */}
      <article className="max-w-5xl article-container mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary-blue hover:opacity-80 transition-opacity mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          お知らせ一覧に戻る
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </article>
    </div>
  );
}
