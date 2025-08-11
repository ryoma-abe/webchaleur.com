import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface FrontMatter {
  title: string;
  date: string;
  description?: string;
  category?: string;
  tags?: string[];
  thumbnail?: string;
  client?: string;
  technologies?: string[];
  url?: string;
}

export interface ContentData {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
}

export async function getContentBySlug(
  type: 'works' | 'blog' | 'news',
  slug: string
): Promise<ContentData | null> {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontMatter: data as FrontMatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllContent(
  type: 'works' | 'blog' | 'news'
): Promise<ContentData[]> {
  const directory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);
  const contents = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(directory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontMatter: data as FrontMatter,
        content,
      };
    })
    .sort((a, b) => {
      if (a.frontMatter.date && b.frontMatter.date) {
        return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
      }
      return 0;
    });

  return contents;
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}