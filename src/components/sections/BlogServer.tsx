import { getAllContent } from '@/lib/mdx';
import BlogSection from './blog/BlogSection';
import { Suspense } from 'react';

async function BlogServerInner() {
  const blogItems = await getAllContent('blog');

  const formattedItems = blogItems
    .map((item) => {
      const raw = String(item.frontMatter?.date ?? "");
      const date = /^\d{4}-\d{2}-\d{2}$/.test(raw)
        ? raw
        : new Date(raw).toISOString().slice(0, 10); // "YYYY-MM-DD" に固定

      return {
        slug: item.slug,
        date, // 以後クライアントではそのまま表示するだけ
        title: item.frontMatter.title ?? "",
        description: item.frontMatter.description ?? "",
        category: item.frontMatter.category ?? "技術",
        tags: item.frontMatter.tags ?? [],
        link: `/blog/${item.slug}`,
        _dateNum: Number(date.replace(/-/g, "")),
      };
    })
    .sort((a, b) => b._dateNum - a._dateNum)
    .slice(0, 3) // 最新3件を表示
    .map(({ _dateNum, ...rest }) => rest);

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