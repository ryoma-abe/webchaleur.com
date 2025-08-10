import { getAllContent } from '@/lib/mdx';
import BlogClient from './BlogClient';

export default async function Blog() {
  // MDXからブログ記事を取得
  const blogItems = await getAllContent('blog');

  // ブログ記事をフォーマット
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

  return <BlogClient items={formattedItems} />;
}