"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WorksGrid from "./WorksGrid";
import SectionHeader from "../common/SectionHeader";
import useInView from "@/hooks/useInView";

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

interface WorksSectionProps {
  items: WorkItem[];
}

export default function WorksSection({ items }: WorksSectionProps) {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <section
      id="works"
      className="section-padding bg-light"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <SectionHeader
          isVisible={isVisible}
          title="制作実績"
          subTitle="Works"
        />

        {/* 実績グリッド */}
        <WorksGrid items={items} isVisible={isVisible} />

        {/* もっと見るボタン */}
        {items.length > 0 && (
          <div
            className={`text-center mt-12 transition-all duration-800 delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href="/works" className="btn-primary">
              すべての制作実績を見る
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
