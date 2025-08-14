import { getAllContent } from '@/lib/mdx';
import Link from 'next/link';
import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';
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
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <WobblyHeading level={1} underline english="Blog">
          技術ブログ
        </WobblyHeading>

        <p className="text-center text-gray mb-12 max-w-2xl mx-auto">
          Web制作の技術情報や、十勝でのビジネスに役立つ情報を発信しています。
          地元企業様のデジタル化を応援します！
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug} className="block group">
              <SketchyCard
                className="hover:shadow-[6px_6px_0_rgba(91,143,185,0.2)] transition-all group-hover:transform group-hover:-translate-y-1"
                rotate={index % 4 !== 0}
              >
                <article>
                {blog.frontMatter.date && (
                  <div className="mb-4">
                    <div className="inline-block bg-primary-lighter rounded-[10px_12px_11px_13px] px-4 py-2">
                      <time 
                        dateTime={blog.frontMatter.date}
                        className="text-primary-blue"
                      >
                        {new Date(blog.frontMatter.date).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                )}

                {blog.frontMatter.category && (
                  <span className="inline-block px-3 py-1 bg-primary-lighter text-primary-blue rounded-[8px_10px_9px_11px] text-xs mb-3">
                    {blog.frontMatter.category}
                  </span>
                )}
                
                <h2 className="text-base md:text-lg text-primary mb-3 line-clamp-2 group-hover:text-primary-blue transition-colors">
                  {blog.frontMatter.title}
                </h2>
                
                {blog.frontMatter.description && (
                  <p className="text-gray text-xs md:text-sm mb-4 line-clamp-3">
                    {blog.frontMatter.description}
                  </p>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray">
                    {calculateReadingTime(blog.content)}分で読める
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {blog.frontMatter.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 text-gray"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-right">
                  <span className="text-primary-blue text-sm group-hover:underline">
                    記事を読む →
                  </span>
                </div>
              </article>
            </SketchyCard>
            </Link>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray">
              ブログ記事を準備中です
            </p>
          </div>
        )}
      </div>
    </div>
  );
}