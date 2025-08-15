import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getContentBySlug, getAllContent, markdownToHtml } from '@/lib/mdx';
import ArticleLayout from '@/components/layouts/ArticleLayout';
import ArticleMeta from '@/components/ui/ArticleMeta';
import { generatePageMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  const works = await getAllContent('works');
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getContentBySlug('works', slug);
  
  if (!work) {
    return {};
  }

  return generatePageMetadata({
    title: work.frontMatter.title,
    description: work.frontMatter.description,
    keywords: work.frontMatter.tags,
    image: work.frontMatter.thumbnail,
  });
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getContentBySlug('works', slug);

  if (!work) {
    notFound();
  }

  const htmlContent = await markdownToHtml(work.content);

  return (
    <ArticleLayout
      header={
        <>
          <h1 className="article-title">{work.frontMatter.title}</h1>
          <ArticleMeta
            date={work.frontMatter.date}
            category={work.frontMatter.category}
            tags={work.frontMatter.tags}
            showTags={true}
          />
        </>
      }
      thumbnail={
        work.frontMatter.thumbnail && (
          <>
            {/* メインビジュアル */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={work.frontMatter.thumbnail}
                alt={work.frontMatter.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              />
            </div>
            
            {/* プロジェクト概要 */}
            <div className="mt-8 p-6 bg-light rounded-xl">
              <h2 className="text-lg font-semibold text-primary mb-3">プロジェクト概要</h2>
              <p className="text-gray leading-relaxed mb-4">
                {work.frontMatter.description}
              </p>
              
              {/* 使用技術 */}
              {work.frontMatter.technologies && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-primary mb-2">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    {work.frontMatter.technologies.map((tech: string) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-white rounded-full text-gray">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* URL */}
              {work.frontMatter.url && (
                <div>
                  <a 
                    href={work.frontMatter.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-blue hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    サイトを見る
                  </a>
                </div>
              )}
            </div>
          </>
        )
      }
      backLink={{
        href: "/works",
        text: "実績一覧に戻る",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </ArticleLayout>
  );
}