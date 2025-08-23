import { notFound } from "next/navigation";
import Link from "next/link";
import { getContentBySlug, getAllContent, markdownToHtml } from "@/lib/mdx";
import ArticleMeta from "@/components/ui/ArticleMeta";
import { generatePageMetadata } from "@/lib/seo";
import TableOfContents from "@/components/blog/TableOfContents";
import ProgressIndicator from "@/components/blog/ProgressIndicator";
import ScrollToTop from "@/components/blog/ScrollToTop";

export async function generateStaticParams() {
  const blogs = await getAllContent("blog");
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getContentBySlug("blog", slug);

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

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getContentBySlug("blog", slug);

  if (!blog) {
    notFound();
  }

  let htmlContent = await markdownToHtml(blog.content);

  htmlContent = htmlContent.replace(
    /<(h[23])>(.*?)<\/h[23]>/gi,
    (match, tag, text) => {
      const id = text
        .toLowerCase()
        .replace(/<[^>]*>/g, "") // HTMLタグを削除
        .replace(/[^\w\s\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/g, "")
        .replace(/\s+/g, "-");
      return `<${tag} id="${id}">${text}</${tag}>`;
    }
  );

  const wordsPerMinute = 400;
  const wordCount = blog.content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {blog.frontMatter.title}
            </h1>
            <ArticleMeta
              date={blog.frontMatter.date}
              category={blog.frontMatter.category}
              readingTime={readingTime}
              tags={blog.frontMatter.tags}
              showTags={true}
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-5xl article-container mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          href="/blog"
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
          ブログ一覧に戻る
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <TableOfContents />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>

      {/* Progress Indicator */}
      <ProgressIndicator />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
