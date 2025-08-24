import HeroSection from "./HeroSection";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { NewsItemForHero } from "./HeroSection";

export const runtime = "nodejs";
export const revalidate = 60;

type NewsItemRaw = {
  title: string;
  date: string;
  category?: string;
  slug: string;
};

function getJSTYMD(iso: string) {
  if (!iso) return { year: "", month: "", day: "" };
  const d = new Date(iso);
  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(d);
  const byType: Record<string, string> = {};
  for (const p of parts) byType[p.type] = p.value;
  return {
    year: byType.year ?? "",
    month: byType.month ?? "",
    day: byType.day ?? "",
  };
}

async function getLatestNews(): Promise<NewsItemRaw[]> {
  const newsDirectory = path.join(process.cwd(), "src/content/news");
  if (!fs.existsSync(newsDirectory)) return [];

  const fileNames = fs.readdirSync(newsDirectory);
  const allNews: NewsItemRaw[] = fileNames
    .filter((f) => f.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        category: data.category ?? "お知らせ",
      };
    });

  return allNews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}

export default async function HeroServer() {
  const latest = await getLatestNews();

  const latestNews = latest.map<NewsItemForHero>((n) => {
    const { year, month, day } = getJSTYMD(n.date);
    return {
      slug: n.slug,
      title: n.title,
      category: n.category ?? "お知らせ",
      year,
      month,
      day,
    };
  });

  return <HeroSection latestNews={latestNews} />;
}