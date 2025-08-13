import BlogCard from './BlogCard';

interface BlogItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
}

interface BlogGridProps {
  items: BlogItem[];
  isVisible: boolean;
}

export default function BlogGrid({ items, isVisible }: BlogGridProps) {
  if (items.length === 0) {
    return (
      <div className="col-span-3 text-center py-12 text-gray">
        <p>現在準備中です</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <BlogCard
          key={item.slug}
          {...item}
          isVisible={isVisible}
          delay={index * 100}
        />
      ))}
    </div>
  );
}