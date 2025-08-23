import { getAllContent } from "@/lib/mdx";
import FadeIn from "@/components/animations/FadeIn";
import ListItemCard from "@/components/ui/ListItemCard";
import Pagination from "@/components/ui/Pagination";
import PageHeader from "@/components/ui/PageHeader";
import { generatePageMetadata } from "@/lib/seo";
import { paginate, ITEMS_PER_PAGE } from "@/lib/pagination";

export const metadata = generatePageMetadata({ path: "/blog" });

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const allBlogs = await getAllContent("blog");

  const sortedBlogs = allBlogs.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );

  const { paginatedItems: blogs, totalPages } = paginate(
    sortedBlogs,
    currentPage,
    ITEMS_PER_PAGE.blog
  );

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 400;
    const wordCount = content.split(/\s+/g).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <PageHeader
        englishTitle="Blog"
        japaneseTitle="ブログ"
        description="Web制作の技術情報や、十勝でのビジネスに役立つ情報を発信しています。地元企業様のデジタル化を応援します！"
      />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <FadeIn>
          <div className="space-y-4">
            {blogs.map((blog) => (
              <ListItemCard
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                date={blog.frontMatter.date}
                category={blog.frontMatter.category}
                title={blog.frontMatter.title}
                description={blog.frontMatter.description}
                tags={blog.frontMatter.tags}
                linkText="記事を読む"
                extra={
                  <span className="text-xs text-gray">
                    {calculateReadingTime(blog.content)}分で読める
                  </span>
                }
              />
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl">
              <p className="text-gray">ブログ記事を準備中です</p>
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/blog"
          />
        </FadeIn>
      </div>
    </div>
  );
}
