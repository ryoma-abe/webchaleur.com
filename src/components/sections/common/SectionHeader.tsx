"use client";

type SectionHeaderProps = {
  isVisible: boolean;
  title: string;
  subTitle: string;
};

export default function SectionHeader({
  isVisible,
  title,
  subTitle,
}: SectionHeaderProps) {
  return (
    <div
      className={`text-center mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="heading-section">{title}</h2>
      <span className="text-caption inline-block color-primary">
        {subTitle}
      </span>
    </div>
  );
}
