import { getAllContent } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import WobblyHeading from "@/components/ui/WobblyHeading";
import FadeIn from "@/components/animations/FadeIn";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({ path: "/works" });

export default async function WorksPage() {
  const works = await getAllContent("works");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* ヒーローセクション */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <WobblyHeading level={1} underline english="Works">
            制作実績
          </WobblyHeading>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {works.map((work, index) => (
              <article
                key={work.slug}
                className="bg-white rounded-[20px] overflow-hidden transition-all duration-500 group shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:translate-y-[-4px]"
              >
                <Link href={`/works/${work.slug}`} className="block">
                  {/* サムネイル */}
                  <div className="relative h-48 bg-gradient-to-br from-lighter-blue to-primary-light overflow-hidden">
                    {work.frontMatter.thumbnail &&
                    work.frontMatter.thumbnail !==
                      "/images/works/default.jpg" ? (
                      <Image
                        src={work.frontMatter.thumbnail}
                        alt={work.frontMatter.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-30">🖼️</span>
                      </div>
                    )}

                    {/* カテゴリーバッジ */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs text-primary-blue rounded-[8px_10px_9px_11px]">
                      {work.frontMatter.category || "Web制作"}
                    </div>
                  </div>

                  {/* コンテンツ */}
                  <div className="p-6">
                    <h3 className="heading-card mb-2">
                      {work.frontMatter.client || work.frontMatter.title}
                    </h3>

                    <p className="text-body mb-4 text-sm">
                      {work.frontMatter.description || ""}
                    </p>

                    {/* タグ */}
                    {work.frontMatter.tags &&
                      work.frontMatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {work.frontMatter.tags
                            .slice(0, 4)
                            .map((tag: string, tagIndex: number) => (
                              <span
                                key={tagIndex}
                                className="text-xs px-3 py-1 bg-accent-beige text-gray rounded-lg"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      )}

                    {/* 詳細を見るリンク */}
                    <span className="inline-flex items-center gap-2 text-primary-blue hover:opacity-80 transition-opacity">
                      詳しく見る
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {works.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl mt-12">
              <p className="text-gray">実績コンテンツを準備中です</p>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
