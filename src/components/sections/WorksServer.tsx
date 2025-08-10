import { getAllContent } from '@/lib/mdx';
import WorksClient from './WorksClient';

export default async function Works() {
  // MDXから制作実績を取得
  const workItems = await getAllContent('works');

  // 制作実績をフォーマット
  const formattedItems = workItems.map(item => ({
    slug: item.slug,
    date: item.frontMatter.date,
    title: item.frontMatter.title,
    client: item.frontMatter.client || '',
    description: item.frontMatter.description || '',
    category: item.frontMatter.category || 'Web制作',
    tags: item.frontMatter.tags || [],
    thumbnail: item.frontMatter.thumbnail || '/images/works/default.jpg',
    link: `/works/${item.slug}`,
  }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6); // 最新6件を表示

  return <WorksClient items={formattedItems} />;
}