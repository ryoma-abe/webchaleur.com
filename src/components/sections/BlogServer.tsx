import { getAllContent } from '@/lib/mdx';
import BlogSection from './blog/BlogSection';
import { Suspense } from 'react';

async function BlogServerInner() {
  const blogItems = await getAllContent('blog');

  const formattedItems = blogItems.map(item => ({
    slug: item.slug,
    date: item.frontMatter.date,
    title: item.frontMatter.title,
    description: item.frontMatter.description || '',
    category: item.frontMatter.category || '技術',
    tags: item.frontMatter.tags || [],
    link: `/blog/${item.slug}`,
  }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3); // 最新3件を表示

  return <BlogSection items={formattedItems} />;
}

export default function Blog() {
  return (
    <Suspense fallback={<div className="section-padding bg-light">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>}>
      <BlogServerInner />
    </Suspense>
  );
}