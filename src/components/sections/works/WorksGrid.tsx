import WorkCard from "./WorkCard";

interface WorkItem {
  slug: string;
  date: string;
  title: string;
  client: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  link: string;
}

interface WorksGridProps {
  items: WorkItem[];
  isVisible: boolean;
}

export default function WorksGrid({ items, isVisible }: WorksGridProps) {
  if (items.length === 0) {
    return (
      <div className="col-span-2 text-center py-12 text-[var(--text-gray)]">
        <p>現在準備中です</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((work, index) => (
        <WorkCard
          key={work.slug}
          {...work}
          isVisible={isVisible}
          delay={index * 100}
        />
      ))}
    </div>
  );
}