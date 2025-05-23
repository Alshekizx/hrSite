"use client";
import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What services does Mployus HR Consulting offer?",
    answer:
      "Mployus HR Consulting provides a wide range of services including employee relations, performance management, compliance with Irish employment laws, organisational development, and HR policy development.",
  },
  {
    question: "How can Mployus HR Consulting help improve my company’s HR processes?",
    answer:
      "Yes, Mployyus enables full shift scheduling, availability tracking, and on-demand management of locum or temporary staff via a central dashboard.",
  },
  {
    question: "Can Mployus HR Consulting assist with compliance and regulatory issues?",
    answer:
      "Absolutely. Mployyus is designed to be scalable and budget-friendly, making it a great fit for startups and small businesses that need agile HR solutions.",
  },
  {
    question: "How do you handle employee relations issues?",
    answer:
      "Our platform focuses on real-time responsiveness, AI-driven automation, and a seamless user experience tailored for healthcare and fast-paced workforces.",
  },
  {
    question: "Can you assist with creating an employee handbook?",
    answer:
      "Our platform focuses on real-time responsiveness, AI-driven automation, and a seamless user experience tailored for healthcare and fast-paced workforces.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="containerDiv">
      <div>
        <h3 className="text-start text-[var(--primary-color)] text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-start text-[var(--text-muted)] mb-10 text-sm">
          Got questions? Our FAQ section provides answers to common inquiries on hiring, workforce
          management, locum staffing, and HR software, helping you navigate our solutions with ease.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-lg p-6 border border-[var(--border-color)] transition-all duration-300 ${
                  isOpen
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-[var(--card-bg)] text-[var(--text-dark)]"
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="font-semibold text-base">
                    {faq.question}
                  </h3>
                  <div
                    className="rounded-lg p-2"
                    style={{
                      backgroundColor: "var(--primary-100)",
                    }}
                  >
                    {isOpen ? (
                      <XMarkIcon className="w-5 h-5 text-[var(--primary-color)]" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-[var(--primary-color)]" />
                    )}
                  </div>
                </div>
              {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="mt-4 border-t border-white/30 pt-4 text-sm text-white"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;