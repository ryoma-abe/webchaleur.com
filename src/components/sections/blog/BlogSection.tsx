"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BlogGrid from "./BlogGrid";
import SectionHeader from "../common/SectionHeader";
import useInView from "@/hooks/useInView";

interface BlogItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
}

interface BlogSectionProps {
  items: BlogItem[];
}

export default function BlogSection({ items }: BlogSectionProps) {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <section id="blog" className="section-padding bg-light" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeader isVisible={isVisible} title="ブログ" subTitle="Blog" />

        <BlogGrid items={items} isVisible={isVisible} />

        {items.length > 0 && (
          <div
            className={`text-center mt-12 transition-all duration-800 delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href="/blog" className="btn btn-primary">
              すべての記事を見る
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
