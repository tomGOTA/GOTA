import React, { useState } from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "What does membership include?",
    answer: "Full access to the private GOTA community on Circle — where seven- to nine-figure Amazon operators share strategy, benchmarks, and solutions in real time. Members also get live roundtables, deep dives, and exclusive playbooks from leaders who have scaled successfully."
  },
  {
    question: "Who is GOTA for?",
    answer: "Founders, operators, and marketplace leaders who are already running significant Amazon businesses and want to grow faster, smarter, and with better insight. If you’re scaling a brand, leading a team, or managing high-volume operations, you will fit right in."
  },
  {
    question: "How much does it cost to join?",
    answer: "Membership is $100/month for approved operators. It’s designed to deliver outsized ROI through peer insight, faster decision-making, and access to proven frameworks. Applications are reviewed weekly to maintain quality."
  },
  {
    question: "What kind of events and sessions do you host?",
    answer: "Member-led roundtables, expert AMAs, and focused sessions on topics like PPC, ops, compliance, and omni-channel growth. Everything is recorded and stored in The Vault, so you can learn on your schedule."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. GOTA is built for operators, not subscriptions. There are no contracts or lock-ins. You can pause or cancel your membership at any time."
  },
  {
    question: "How do I apply?",
    answer: "Click Apply for Access and complete the short form. If accepted, you’ll receive a private Circle invite link with next steps and onboarding details."
  }
];

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-1"
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <svg
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <p className="text-gray-300 pb-5 px-1">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;