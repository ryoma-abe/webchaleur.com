import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ArticleMeta from '@/components/ui/ArticleMeta';
import { generatePageMetadata } from '@/lib/seo';
import worksData from '@/data/works.json';

export async function generateStaticParams() {
  return worksData.works.map((work) => ({
    slug: work.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = worksData.works.find(w => w.id === slug);
  
  if (!work) {
    return {};
  }

  return generatePageMetadata({
    title: work.title,
    description: work.description,
    keywords: work.tags,
    image: work.thumbnail,
  });
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = worksData.works.find(w => w.id === slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{work.title}</h1>
            <ArticleMeta
              date={work.date}
              category={work.category}
              tags={work.tags}
              showTags={true}
            />
          </div>
        </div>
      </section>

      {/* Thumbnail */}
      {work.thumbnail && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/works"
            className="inline-flex items-center gap-2 text-primary-blue hover:opacity-80 transition-opacity mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            実績一覧に戻る
          </Link>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
            {/* Project Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">プロジェクト概要</h2>
              <p className="text-gray leading-relaxed mb-6">{work.overview}</p>
            </section>

            {/* Technologies */}
            {work.tags && work.tags.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">使用技術</h2>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-accent-beige/30 rounded-full text-gray text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Features */}
            {work.features && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">主な機能</h2>
                <p className="text-gray leading-relaxed">{work.features}</p>
              </section>
            )}

            {/* Website Link */}
            {work.url && (
              <section className="mb-12">
                <a 
                  href={work.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-blue hover:opacity-80 transition-opacity text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  サイトを見る
                </a>
              </section>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}