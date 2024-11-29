import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What's included in the Starter Plan?",
    answer:
      "The Starter Plan offers access to up to 2 AI agents, multi-platform integration on basic channels (like Web and Social), core templates, basic analytics, and community support. It's perfect for small businesses or startups exploring AI chatbots.",
  },
  {
    id: 2,
    question: 'Can I upgrade my plan later?',
    answer:
      "Yes, you can upgrade your plan at any time. Your new plan benefits will be available immediately, and we'll prorate any remaining balance from your current plan.",
  },
  {
    id: 3,
    question: "What's the difference between the Professional and Business Plans?",
    answer:
      'The Professional Plan is designed for growing teams with advanced customization needs, while the Business Plan offers enterprise-grade features, dedicated support, and higher usage limits. Business Plans also include priority support and custom integrations.',
  },
  {
    id: 4,
    question: 'Does the Enterprise Plan offer custom solutions?',
    answer:
      'Yes, the Enterprise Plan includes custom solution development, dedicated account management, and bespoke integrations tailored to your specific business needs.',
  },
  {
    id: 5,
    question: 'Are there additional costs for extra agents or integrations?',
    answer:
      'Each plan comes with a set number of agents and integrations. Additional agents and integrations can be purchased as add-ons, with pricing varying based on your current plan level.',
  },
];

// FAQ Item Component
const FaqItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Plus className="w-5 h-5 text-white" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Section Component
const Faq: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="py-28 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">FAQ</h1>
        <div className="space-y-2">
          {faqData.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItemId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
