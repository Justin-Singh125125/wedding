import React from "react";
import { FAQ } from "./ui/faq";

export const FAQSection = () => {
  return (
    <section id="faq" className="mx-auto max-w-2xl p-4">
      <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
      <FAQ />
    </section>
  );
};
