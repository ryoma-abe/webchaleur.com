"use client";

export default function SectionHeader({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`text-center mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="heading-section">私について</h2>
      <span className="text-caption inline-block">About Us</span>
    </div>
  );
}
