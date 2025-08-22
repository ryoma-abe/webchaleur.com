import WorksSection from './works/WorksSection';
import worksData from '@/data/works.json';

export default async function Works() {

  const workItems = worksData.works;


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
    .slice(0, 6); // 最初の6件を表示（JSONの順番通り）

  return <WorksSection items={formattedItems} />;
}