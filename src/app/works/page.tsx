import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import Pagination from "@/components/ui/Pagination";
import { generatePageMetadata } from "@/lib/seo";
import { paginate, ITEMS_PER_PAGE } from "@/lib/pagination";
import worksData from "@/data/works.json";

export const metadata = generatePageMetadata({ path: "/works" });

export default async function WorksPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const allWorks = worksData.works;
  


  const { paginatedItems: works, totalPages } = paginate(
    allWorks,
    currentPage,
    ITEMS_PER_PAGE.works
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-sm text-gray mb-2 tracking-wider uppercase">Works</div>
            <h1 className="mb-4">制作実績</h1>
            <div className="w-20 h-1 bg-primary-blue mx-auto rounded"></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {works.map((work) => (
              <article
                key={work.id}
                className="bg-white rounded-[20px] overflow-hidden transition-all duration-500 group shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:translate-y-[-4px]"
              >
                <Link href={`/works/${work.id}`} className="block">
                  
                  <div className="relative h-64 md:h-72 bg-gradient-to-br from-lighter-blue to-primary-light overflow-hidden">
                    {work.thumbnail &&
                    work.thumbnail !==
                      "/images/works/default.jpg" ? (
                      <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-30">🖼️</span>
                      </div>
                    )}

                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs text-primary-blue rounded-[8px_10px_9px_11px]">
                      {work.category || "Web制作"}
                    </div>
                  </div>

                  
                  <div className="p-6">
                    <h3 className="heading-card mb-2">
                      {work.title}
                    </h3>

                    <p className="text-body mb-4 text-sm">
                      {work.description || ""}
                    </p>

                    
                    {work.tags &&
                      work.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {work.tags
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
          
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/works"
          />
        </FadeIn>
      </div>
    </div>
  );
}
