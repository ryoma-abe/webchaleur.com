import { getAllContent } from "@/lib/mdx";
import WobblyHeading from "@/components/ui/WobblyHeading";
import FadeIn from "@/components/animations/FadeIn";
import ListItemCard from "@/components/ui/ListItemCard";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({ path: "/blog" });

export default async function BlogPage() {
  const blogs = await getAllContent("blog");

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 400;
    const wordCount = content.split(/\s+/g).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* ヒーローセクション */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <WobblyHeading level={1} underline english="Blog">
            技術ブログ
          </WobblyHeading>
          <p className="text-center text-gray mt-6 max-w-2xl mx-auto">
            Web制作の技術情報や、十勝でのビジネスに役立つ情報を発信しています。
            地元企業様のデジタル化を応援します！
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
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
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
