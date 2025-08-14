import { getAllContent } from '@/lib/mdx';
import Link from 'next/link';
import WobblyHeading from '@/components/ui/WobblyHeading';
import FadeIn from '@/components/animations/FadeIn';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/blog' });

export default async function BlogPage() {
  const blogs = await getAllContent('blog');

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
              {blogs.map((blog, index) => (
              <Link href={`/blog/${blog.slug}`} key={blog.slug} className="block group">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group-hover:transform group-hover:-translate-y-0.5 p-6">
                  <article className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      {blog.frontMatter.date && (
                        <time
                          dateTime={blog.frontMatter.date}
                          className="block text-center bg-primary-blue/5 rounded-xl px-4 py-3"
                        >
                          <span className="block text-2xl text-primary-blue font-bold">
                            {new Date(blog.frontMatter.date).getDate()}
                          </span>
                          <span className="block text-xs text-primary-blue">
                            {new Date(blog.frontMatter.date).toLocaleDateString('ja-JP', {
                              year: 'numeric',
                              month: 'short',
                            })}
                          </span>
                        </time>
                      )}
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        {blog.frontMatter.category && (
                          <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-lg text-xs font-medium">
                            {blog.frontMatter.category}
                          </span>
                        )}
                        <span className="text-xs text-gray">
                          {calculateReadingTime(blog.content)}分で読める
                        </span>
                      </div>

                      <h2 className="heading-list mb-2 group-hover:text-primary-blue transition-colors">
                        {blog.frontMatter.title}
                      </h2>

                      {blog.frontMatter.description && (
                        <p className="text-gray text-xs md:text-sm mb-3">
                          {blog.frontMatter.description}
                        </p>
                      )}

                      {blog.frontMatter.tags && blog.frontMatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {blog.frontMatter.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-accent-beige text-gray rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex-shrink-0">
                      <span className="text-primary-blue text-sm group-hover:underline">
                        記事を読む →
                      </span>
                    </div>
                  </article>
                </div>
              </Link>
            ))}
            </div>

            {blogs.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl">
                <p className="text-gray">
                  ブログ記事を準備中です
                </p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}