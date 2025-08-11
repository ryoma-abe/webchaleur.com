import { getAllContent } from '@/lib/mdx';
import Link from 'next/link';

export default async function Information() {
  // 全てのコンテンツを取得
  const [news, blogs, works] = await Promise.all([
    getAllContent('news'),
    getAllContent('blog'),
    getAllContent('works'),
  ]);

  // すべてを統合してソート
  const allItems = [
    ...news.map(item => ({
      slug: item.slug,
      date: item.frontMatter.date,
      category: item.frontMatter.category || 'お知らせ',
      title: item.frontMatter.title,
      link: `/news/${item.slug}`,
      type: 'news' as const,
    })),
    ...blogs.map(item => ({
      slug: item.slug,
      date: item.frontMatter.date,
      category: 'ブログ',
      title: item.frontMatter.title,
      link: `/blog/${item.slug}`,
      type: 'blog' as const,
    })),
    ...works.map(item => ({
      slug: item.slug,
      date: item.frontMatter.date,
      category: '制作実績',
      title: item.frontMatter.title,
      link: `/works/${item.slug}`,
      type: 'works' as const,
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5); // 最新5件を表示

  return (
    <section id="information" className="section-padding bg-[var(--bg-light)]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="heading-section">お知らせ</h2>
          <span className="text-caption inline-block">Information</span>
        </div>

        {/* ニュースリスト */}
        <div className="space-y-4">
          {allItems.map((item, index) => (
            <Link
              key={`${item.type}-${item.slug}`}
              href={item.link}
              className="block group"
            >
              <article
                className="bg-white p-6 hover:shadow-md transition-all duration-300 group-hover:transform group-hover:-translate-y-0.5"
                style={{
                  borderRadius: "16px",
                  border: "1px solid rgba(91, 143, 185, 0.08)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* 日付 */}
                  <time
                    className="text-primary-blue font-[var(--font-handwritten)] font-semibold text-base md:text-lg"
                    style={{ minWidth: "120px" }}
                  >
                    {new Date(item.date).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    }).replace(/\//g, '.')}
                  </time>

                  {/* カテゴリー */}
                  <span
                    className="inline-block px-3 py-1 text-xs font-medium text-white bg-primary-light rounded-full"
                    style={{
                      borderRadius: "10px 12px 11px 13px",
                      width: "fit-content",
                    }}
                  >
                    {item.category}
                  </span>

                  {/* タイトル */}
                  <h3 className="flex-1 text-primary font-medium group-hover:text-primary-blue transition-colors text-sm md:text-base">
                    {item.title}
                  </h3>

                  {/* 矢印 */}
                  <span className="text-body text-xl hidden md:block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {allItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-text-gray font-zenmaru">
              お知らせはまだありません
            </p>
          </div>
        )}

        {/* もっと見るボタン */}
        <div className="text-center mt-10">
          <Link
            href="/news"
            className="btn-text inline-flex items-center gap-2"
          >
            すべてのお知らせを見る
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}