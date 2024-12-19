import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time. Your new plan benefits will be available immediately, and we'll prorate any remaining balance from your current plan.",
  },
  {
    id: 3,
    question:
      "What's the difference between the Professional and Business Plans?",
    answer:
      "The Professional Plan is designed for growing teams with advanced customization needs, while the Business Plan offers enterprise-grade features, dedicated support, and higher usage limits. Business Plans also include priority support and custom integrations.",
  },
  {
    id: 4,
    question: "Does the Enterprise Plan offer custom solutions?",
    answer:
      "Yes, the Enterprise Plan includes custom solution development, dedicated account management, and bespoke integrations tailored to your specific business needs.",
  },
  {
    id: 5,
    question: "Are there additional costs for extra agents or integrations?",
    answer:
      "Each plan comes with a set number of agents and integrations. Additional agents and integrations can be purchased as add-ons, with pricing varying based on your current plan level.",
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
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 flex items-center justify-between text-left transition-colors duration-200 hover:text-gray-300"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <div className="transition-transform duration-200">
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-white" />
          )}
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-gray-300">{answer}</p>
        </div>
      </div>
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
    <div className="~px-0/56">
      <Header />
      <div className="py-28 flex items-center justify-center p-4 border-t border-dotted border-gray-900 h-[85vh]">
        <div className="max-w-5xl w-full mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h1>
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
      <Footer />
    </div>
  );
};

export default Faq;
