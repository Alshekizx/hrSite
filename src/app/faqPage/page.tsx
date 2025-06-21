'use client';
import React from 'react';
import HeroSection from '../components/ourHrServiceComponent/heroSection';
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
      "We conduct thorough assessments of your current HR practices and implement tailored solutions suitable to your business to enhance efficiency, ensure compliance, and improve overall employee satisfaction.",
  },
  {
    question: "Can Mployus HR Consulting assist with compliance and regulatory issues?",
    answer:
      "Absolutely. We help ensure that your company complies with all relevant employment laws and regulations, thereby reducing the risk of legal issues and penalties.",
  },
  {
    question: "How do you handle employee relations issues?",
    answer:
      "Our team provides expert guidance on handling employee relations issues, including conflict resolution, disciplinary actions, and fostering a positive workplace culture.",
  },
  {
    question: "Can you assist with creating an employee handbook?",
    answer:
      "Yes, we can help create a comprehensive employee handbook that outlines your company’s policies, procedures, and expectations.",
  },
  {
    question: "What other types of HR documents does Mployus provide?",
    answer:
      "We offer a full suite of HR documents including employment contracts, offer letters, employee handbooks, disciplinary procedures, non-disclosure agreements, performance review templates, termination letters, and more — all tailored to your specific business needs.",
  },
  {
    question: "Does Mployus offer one-time HR consultation services?",
    answer:
      "Yes, Mployus offers flexible, one-time HR consultation sessions for anyone in need of expert and urgent guidance on specific HR issues—this includes businesses of all sizes, managers, HR professionals, and employees with workplace concerns. Our consultations are ideal for those who need immediate support without committing to a long-term plan.",
  },
  {
    question: "What kind of issues can Mployus one-off consultation cover?",
    answer:
      "Our one-off consultations can help with urgent HR matters such as creating HR contracts, handbooks, and offer letters; handling employee disputes; reviewing a contract; drafting a policy; navigating disciplinary procedures; or understanding employment law obligations.",
  },
  {
    question: "How do you ensure the confidentiality of our HR data?",
    answer:
      "We take data security seriously and employ stringent measures to ensure the confidentiality and security of all client information.",
  },
  {
    question: "How can I get started with Mployus HR Consulting?",
    answer:
      "To get started, simply contact us to schedule a consultation. We’ll discuss your needs and develop a plan tailored to your organisation.",
  },
];


const BlogIndexPage = () => {

const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };


  return (
    <div className="w-full min-h-screen flex flex-col items-center py-10">
      <HeroSection
        title="Frequently Asked Questions"
        description=""
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />
      <div className='containerDiv'>
        
             <div className='flex flex-col items-start'>
              <div className= 'button my-10'>
                <p >UK & NI FAQs</p> 
              </div>
                    <h4 className="text-start text-[var(--primary-color)] text-3xl font-bold mb-4" style={{fontSize:'44px'}}>
                      Frequently Asked Questions
                    </h4>
                    <p className="text-start text-[var(--text-muted)] mb-10 text-sm" style={{fontSize:'18px'}}>
                      Got questions? Our FAQ section provides answers to common inquiries on hiring, workforce
                      management, locum staffing, and HR software, helping you navigate our solutions with ease.
                    </p>
            
                    <div className="space-y-4">
                      {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                          <div
                            key={index}
                            className={`rounded-lg p-6  transition-all duration-300 ${
                              isOpen
                                ? "bg-[var(--primary-color)] text-white"
                                : "bg-[var(--primary-100)] text-[var(--text-dark)]"
                            }`}
                          >
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() => toggle(index)}
                            >
                              <p className="" style={{fontSize:'24px'}}>
                                {faq.question}
                              </p>
                              <div
                                className="rounded-lg p-2"
                                style={{
                                  backgroundColor: "var(--primary-200)",
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
                                <p style={{fontSize:'22px'}}>{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                  </div>

      </div>
    </div>
  );
};

export default BlogIndexPage;