'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {

    const articleContent = document.querySelector('.prose');
    if (!articleContent) return;
    
    const elements = articleContent.querySelectorAll('h2, h3');
    const items: TOCItem[] = Array.from(elements)
      .filter((element) => element.textContent && element.textContent.trim() !== '')
      .map((element, index) => {

        if (!element.id) {
          const id = `heading-${index}`;
          element.id = id;
        }
        return {
          id: element.id,
          text: element.textContent || '',
          level: parseInt(element.tagName.charAt(1)),
        };
      });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -70% 0%' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="mb-8 bg-light rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg"
      >
        <span className="font-semibold text-primary">目次</span>
        <span
          className={`text-gray transition-transform inline-block ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>
      
      {isOpen && (
        <nav className="px-4 pb-4 space-y-2">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block py-2 px-3 text-sm transition-colors hover:text-primary-blue hover:bg-gray-50 rounded ${
                heading.level === 3 ? 'ml-4' : ''
              } ${
                activeId === heading.id ? 'text-primary-blue font-semibold bg-gray-50' : 'text-gray'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}