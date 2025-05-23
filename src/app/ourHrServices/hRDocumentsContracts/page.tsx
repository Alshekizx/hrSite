'use client';


import HrServicesGrid from "@/app/components/homepage/tailoredHiringSolutions";

import HrSection2 from "@/app/components/ourHrServiceComponent/hrSolution2";
import HeroSection from "@/app/components/ourHrServiceComponent/heroSection";
import ContactForm2 from "@/app/components/ourHrServiceComponent/contactUs2";
import AnotherHrSection from "@/app/components/ourHrServiceComponent/anotherHrSolution";
import AnotherHrSectionInverse from "@/app/components/ourHrServiceComponent/anotherInverseHrSolution";

const serviceData = {
  headline: 'HR Contracts & Handbooks',
  subtext:
    'Every employee needs a legally compliant contract and clear workplace guidelines. Our HR specialists create and maintain all essential documents, ensuring your business operates smoothly and remains compliant with Irish employment laws.',
  services: [
    {
      title: 'Employment Contracts',
      description:
        'Customized contracts tailored to your company’s requirements and legal obligations.',
      link: '/services/hr-advice',
    },
    {
      title: 'HR Policies & Handbooks',
      description:
        ' Comprehensive handbooks with clear policies that support a positive and legally sound work environment.',
      link: '/services/employment-law',
    },
    {
      title: 'HR Paperwork Reviews',
      description:
        'Ongoing assessments to ensure all contracts, policies, and handbooks remain legally sound.',
      link: '/services/industrial-relations',
    },
    {
      title: 'CIPD-Certified Consultants',
      description:
        'Work with HR experts who would draft your HR policies, letters, forms & contracts all from the scratch.',
      link: '/services/cipd-consultants',
    },
  ],
};

const hrData = {
  title: 'New Starter Employment Documents',
  description:
    'Starting a new hire on the right foot requires clear, legally sound documentation. Our expertly crafted HR documents ensure compliance, protect your business, and provide clarity for both employers and employees. From contracts to policies, we streamline the process, saving you time and reducing legal risks.',
 
  image: '/images/wmremove-transformed5.png', // ensure it's in /public
};

const hrData2 = {
  title: 'Ongoing Document Updates',
  description:
    'Employment laws and workplace policies evolve, and staying compliant is crucial. Our HR experts proactively review and update your documentation, ensuring continued compliance and protecting your business from legal pitfalls.',
  features: [
    {
      title: 'Legislation Compliance ',
      description: 'Keeping your HR documents up to date with Irish employment law changes.',
    },
    {
      title: 'Workplace Policies',
      description: 'Regularly reviewed policies covering disciplinary procedures, redundancy, grievance handling, and more.',
    },
    {
      title: 'HR Paperwork Reviews ',
      description: 'Ongoing assessments to ensure all contracts, policies, and handbooks remain legally sound.',
    },
  ],
  image: '/images/wmremove-transformed6.png', // ensure it's in /public
};

const hrData4 = {
  title: "What Makes Us Unique?",
  description:
    "At Mployus HR, we do more than provide templates—we deliver expert-driven, fully compliant HR documentation tailored to your business.",
  features: [
    {
      title: 'Expertise & Accuracy',
      description: 'Created and reviewed by employment law specialists to ensure compliance and legal protection.',
    },
    {
      title: 'Tailored Solutions',
      description: 'Customised documents that align with your industry, company size, and workforce needs.',
    },
    {
      title: 'Comprehensive Coverage',
      description: 'Everything from contracts and company policies to disciplinary procedures and formal HR communications.',
    },
    
  ],
  image: '/images/wmremove-transformed3.png', // ensure it's in /public
};

const hrData5 = {
  title: null,
  description:
    null,
  features: [
    {
      title: 'Custom Solution',
      description: 'Bespoke HR documentation that aligns with your business’s specific needs.',
    },
    {
      title: 'Risk Mitigation ',
      description: 'Prevent costly legal disputes by ensuring compliance with employment regulations.',
    },
    {
      title: 'Time Savings',
      description: 'Free up your resources and focus on business growth rather than paperwork.',
    },
    {
      title: 'Proactive Support',
      description: 'Continuous advice and updates to help you stay ahead of legal changes.',
    },
    {
      title: 'Technology Integration',
      description: 'Advanced HR tools that make managing and accessing documents seamless.',
    },
  ],
  image: '/images/wmremove-transformed7.png', // ensure it's in /public
};

export default function OurHrServices2() {
 


  return (
    <div className="pt-10 flex flex-col w-full gap-20 ">
    <HeroSection
      title="HR Documents & Contracts"
      description="Insights, trends, and practical tips on recruitment and shift-based workforce management for HR teams, locum workers, and business leaders."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Our HR Services' },
        { label: 'HR Documents & Contracts' },
      ]}
    />

     

      <HrServicesGrid {...serviceData} />
      <div className="bg-[var(--primary-100)] py-10">
      <AnotherHrSection {...hrData}/>
      </div>
      <AnotherHrSectionInverse {...hrData2}/>
      <HrSection2 {...hrData4} />
      <div  className="flex flex-col items-center gap-6  ">
         <div className="text-center w-full max-w-[800px] ">
          <h3 className="text-[var(--primary-color)] text-2xl font-bold">How Our Service Benefits You</h3>
          <p className="text-base">
            Outsourcing your HR documentation to Mployus HR provides real advantages that save time, reduce risks, and improve efficiency.
          </p>
      </div>
        <AnotherHrSectionInverse {...hrData5}/>
      </div>
      <ContactForm2/>

      {""}
    
    </div>
  );
}
