interface FAQItemProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  isVisible: boolean;
  delay: number;
  onToggle: (id: number) => void;
}

export default function FAQItem({
  id,
  question,
  answer,
  isOpen,
  isVisible,
  delay,
  onToggle,
}: FAQItemProps) {
  return (
    <div
      className={`border border-[var(--accent-beige)] overflow-hidden transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{
        borderRadius: '16px',
        transitionDelay: `${delay}ms`,
        borderStyle: 'dashed',
      }}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full p-6 text-left hover:bg-[var(--bg-light)] transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <span 
              className="inline-flex items-center justify-center w-8 h-8 bg-primary-lighter text-primary-blue font-bold text-sm"
              style={{
                borderRadius: '50%',
              }}
            >
              Q
            </span>
            <span className="flex-1 text-primary font-medium pr-4">
              {question}
            </span>
          </div>
          <span 
            className={`text-2xl text-primary-blue transition-transform duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            +
          </span>
        </div>
      </button>

      {/* アンサー部分 */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="flex items-start gap-4">
            <span 
              className="inline-flex items-center justify-center w-8 h-8 bg-[var(--accent-beige)] text-[var(--text-gray)] font-bold text-sm"
              style={{
                borderRadius: '50%',
              }}
            >
              A
            </span>
            <p className="flex-1 text-body">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}