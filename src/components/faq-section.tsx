import React from "react";
import { FAQ } from "./ui/faq";
import { SectionHeader } from "./ui/section-header";

export const FAQSection = () => {
  return (
    <section id="faq" className="mx-auto max-w-2xl space-y-10 p-4">
      <SectionHeader>Frequently Asked Questions</SectionHeader>
      <FAQ />
    </section>
  );
};
