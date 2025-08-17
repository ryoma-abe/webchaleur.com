import WorksSection from './works/WorksSection';
import worksData from '@/data/works.json';

export default async function Works() {
  // JSONから制作実績を取得
  const workItems = worksData.works;

  // 制作実績をフォーマット
  const formattedItems = workItems.map(item => ({
    slug: item.id,
    date: item.date,
    title: item.title,
    client: item.title,
    description: item.description || '',
    category: item.category || 'Web制作',
    tags: item.tags || [],
    thumbnail: item.thumbnail || '/images/works/default.jpg',
    link: `/works/${item.id}`,
  }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6); // 最新6件を表示

  return <WorksSection items={formattedItems} />;
}