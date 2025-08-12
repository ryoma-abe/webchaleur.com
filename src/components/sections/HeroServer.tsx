import HeroSection from './hero/HeroSection';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface NewsItem {
  title: string;
  date: string;
  category: string;
  slug: string;
}

async function getLatestNews(): Promise<NewsItem[]> {
  const newsDirectory = path.join(process.cwd(), 'src/content/news');
  
  // ディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(newsDirectory);
  
  const allNews = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || 'お知らせ',
      };
    });
  
  // 日付でソートして最新3件を取得
  return allNews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}

export default async function HeroServer() {
  const latestNews = await getLatestNews();
  
  return <HeroSection latestNews={latestNews} />;
}