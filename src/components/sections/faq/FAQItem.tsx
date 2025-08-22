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
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-800 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full p-6 text-left hover:bg-light transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <span 
              className="inline-flex items-center justify-center w-8 h-8 bg-primary-lighter text-primary-blue text-sm rounded-full"
            >
              Q
            </span>
            <span className="flex-1 text-primary pr-4">
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

      
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="flex items-start gap-4">
            <span 
              className="inline-flex items-center justify-center w-8 h-8 bg-accent-beige text-gray text-sm rounded-full"
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