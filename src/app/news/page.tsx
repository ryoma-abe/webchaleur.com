import { getAllContent } from "@/lib/mdx";
import FadeIn from "@/components/animations/FadeIn";
import ListItemCard from "@/components/ui/ListItemCard";
import Pagination from "@/components/ui/Pagination";
import PageHeader from "@/components/ui/PageHeader";
import { generatePageMetadata } from "@/lib/seo";
import { paginate, ITEMS_PER_PAGE } from "@/lib/pagination";

export const metadata = generatePageMetadata({ path: "/news" });

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const allNews = await getAllContent("news");

  const sortedNews = allNews.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );

  const { paginatedItems: news, totalPages } = paginate(
    sortedNews,
    currentPage,
    ITEMS_PER_PAGE.news
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <PageHeader
        englishTitle="Information"
        japaneseTitle="お知らせ"
        description="WebChaleurからのお知らせ、キャンペーン情報などをご案内しています。"
      />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <FadeIn>
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
              <p className="text-gray">お知らせはまだありません</p>
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/news"
          />
        </FadeIn>
      </div>
    </div>
  );
}
