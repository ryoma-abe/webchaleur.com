interface PageHeaderProps {
  englishTitle: string;
  japaneseTitle: string;
  description?: string;
}

export default function PageHeader({ englishTitle, japaneseTitle, description }: PageHeaderProps) {
  // 。で改行を追加する関数
  const addLineBreaks = (text: string) => {
    return text.replace(/。/g, '。\n');
  };

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1>
            <span className="block text-sm text-gray uppercase tracking-wide mb-2">
              {englishTitle}
            </span>
            <span className="whitespace-pre-line">{addLineBreaks(japaneseTitle)}</span>
          </h1>
          <div className="w-20 h-1 bg-primary-blue mx-auto rounded mt-4"></div>
        </div>
        {description && (
          <p className="text-center text-gray mt-6 max-w-2xl mx-auto whitespace-pre-line">
            {addLineBreaks(description)}
          </p>
        )}
      </div>
    </section>
  );
}