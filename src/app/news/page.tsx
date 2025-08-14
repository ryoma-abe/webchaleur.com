import { getAllContent } from '@/lib/mdx';
import WobblyHeading from '@/components/ui/WobblyHeading';
import FadeIn from '@/components/animations/FadeIn';
import ListItemCard from '@/components/ui/ListItemCard';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/news' });

export default async function NewsPage() {
  const news = await getAllContent('news');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* ヒーローセクション */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <WobblyHeading level={1} underline english="Information">
            お知らせ
          </WobblyHeading>
          <p className="text-center text-gray mt-6 max-w-2xl mx-auto">
            WebChaleurからのお知らせ、キャンペーン情報などをご案内しています。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {news.map((item) => (
                <ListItemCard
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  date={item.frontMatter.date}
                  category={item.frontMatter.category}
                  title={item.frontMatter.title}
                  description={item.frontMatter.description}
                />
              ))}
            </div>

            {news.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl">
                <p className="text-gray">
                  お知らせはまだありません
                </p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}