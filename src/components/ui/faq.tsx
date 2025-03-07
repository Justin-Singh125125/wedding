"use client";
import { useState } from "react";

type FAQItem = { id: number; question: string; answer: string };

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Are children allowed?",
    answer: "Yes, we would love to invite your children to our wedding.",
  },
  {
    id: 2,
    question: "Indoor or Outdoor?",
    answer: "We will be outside for the whole event.",
  },
  {
    id: 3,
    question: "What is the dress code?",
    answer:
      "Please come in your best formal attire. We will be in our September weather so please keep in mind the outdoor heat.",
  },
  {
    id: 4,
    question: "Will there be gifts for guests?",
    answer: "Yes.",
  },
  {
    id: 5,
    question: "Will there be bathrooms?",
    answer: "Yes, the bathrooms will be inside along side the bar.",
  },
  {
    id: 6,
    question: "Will there be alcohol?",
    answer:
      "Alcohol will be available, although no hard alcohol will be allowed. If hard alcohol is caught on the property, the individual(s) will be requested to leave.",
  },
  {
    id: 7,
    question: "Will it be an open bar?",
    answer: "Guests will have to pay for their own alcohol.",
  },
  {
    id: 8,
    question: "What will the food be like?",
    answer:
      "We will be catered by Adoboink, a modern/traditional Filipino restaurant.",
  },
];

type FAQItemProps = { question: string; answer: string };

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md border-b border-gray-200 bg-white p-4 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
      >
        <span className="flex-1 rounded-md bg-quatinary-400 p-2 font-medium text-gray-800 shadow-lg">
          {question}
        </span>
        <svg
          className={`h-8 w-8 transform rounded-md bg-primary-400 stroke-white shadow-md transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
