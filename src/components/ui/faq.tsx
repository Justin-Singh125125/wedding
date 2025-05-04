"use client";
import { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  link?: FAQItemProps["link"];
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Will children be allowed?",
    answer:
      "Yes, we would love to invite your children to our wedding. If your invite doesn't have the option to include your loved ones, please let us know.",
  },
  {
    id: 2,
    question: "Will it be an indoor or outdoor wedding?",
    answer: "We will be outside for the whole event.",
  },
  {
    id: 3,
    question: "Will there be different locations?",
    answer: "There is only one location, 9440 Bar Du Ln Sacramento, CA 95829.",
  },
  {
    id: 4,
    question: "Will I have to pay for parking?",
    answer:
      "We will have parking on site for free and it will be on the property close by.",
  },
  {
    id: 5,
    question: "What is the dress code?",
    answer:
      "Please join us in your best formal attire. As we'll be celebrating in September, kindly keep the outdoor warmth in mind when choosing your outfit. We also ask that you avoid wearing white or red.",
  },
  {
    id: 11,
    question: "What type of shoes should I wear?",
    answer:
      "Please wear comfortable shoes, as you’ll be walking across a mix of asphalt, gravel, wood, and stone surfaces. \nIf you’re shopping for new shoes, enjoy 25% off at Pashion Footwear with the discount code: JENNAD",
    link: {
      url: "https://pashionfootwear.com/pages/ambassador-storefront?lc_ambassador_id=Y3VzdG9tZXI6NjM2MzM3MA",
      text: "Shop Pashion Footwear (25% off with code JENNAD)",
    },
  },
  {
    id: 6,
    question: "Can I take photos?",
    answer:
      "Our ceremony will be an unplugged ceremony, but after please take as many photos as you'd like. We will also have a QR code for you to share your photos with us.",
  },
  {
    id: 7,
    question: "Will there be bathrooms?",
    answer: "Yes, the bathrooms will be inside along side the bar.",
  },
  {
    id: 8,
    question: "Will there be alcohol?",
    answer:
      "Alcohol will be available, although no hard alcohol will be allowed. If hard alcohol is caught on the property, the individual(s) will be requested to leave.",
  },
  {
    id: 9,
    question: "Will it be an open bar?",
    answer: "Guests will have to pay for their own alcohol.",
  },
  {
    id: 10,
    question: "What will the food be like?",
    answer:
      "We will be catered by Adoboink, a modern/traditional Filipino restaurant. It will be served buffet style and each table will be released to take a photo with the newlyweds before grabbing a plate.",
  },
];

type FAQItemProps = {
  question: string;
  answer: string;
  link?: { url: string; text: string };
};

const FAQItem = ({ question, answer, link }: FAQItemProps) => {
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
      {isOpen && (
        <div className="mt-4 space-y-3">
          <div className="whitespace-pre-line text-gray-600">{answer}</div>
          {link && (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-500 mt-2 inline-block rounded-md bg-primary-400 px-4 py-2 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
            >
              {link.text}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          link={faq.link}
        />
      ))}
    </div>
  );
};
