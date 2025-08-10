import { getAllContent } from '@/lib/mdx';
import InformationClient from './InformationClient';

export default async function Information() {
  // MDXからニュース記事のみを取得
  const newsItems = await getAllContent('news');

  // ニュース記事をフォーマット
  const formattedItems = newsItems.map(item => ({
    slug: item.slug,
    date: item.frontMatter.date,
    category: item.frontMatter.category || 'お知らせ',
    title: item.frontMatter.title,
    link: `/news/${item.slug}`,
    type: 'news' as const
  }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5); // 最新5件を表示

  return <InformationClient items={formattedItems} />;
}