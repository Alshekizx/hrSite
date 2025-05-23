'use client';

import HrSection from "../components/ourHrServiceComponent/hrSolution1";
import HrServicesGrid from "../components/homepage/tailoredHiringSolutions";
import HrSectionInverse from "../components/ourHrServiceComponent/hrSolutionInvrese";
import HrSection2 from "../components/ourHrServiceComponent/hrSolution2";
import HeroSection from "../components/ourHrServiceComponent/heroSection";
import ContactForm2 from "../components/ourHrServiceComponent/contactUs2";

const serviceData = {
  headline: 'Comprehensive HR Support for Your Business',
  subtext:
    'We work closely with you to provide tailored HR solutions that align with your business needs, ensuring compliance and smooth workforce management.',
  services: [
    {
      title: 'Unlimited HR Advice',
      description:
        'Get expert answers to all your HR questions, from employment contracts to dismissals.',
      link: '/services/hr-advice',
    },
    {
      title: 'Employment Law & Compliance',
      description:
        'Stay compliant with current legislation on leave, working hours, and employee conduct.',
      link: '/services/employment-law',
    },
    {
      title: 'Industrial Relations Support',
      description:
        'Assistance in managing employee relations, grievances, and workplace disputes.',
      link: '/services/industrial-relations',
    },
    {
      title: 'CIPD-Certified Consultants',
      description:
        'Work with HR experts who know the ins and outs of Irish employment law.',
      link: '/services/cipd-consultants',
    },
  ],
};

const hrData = {
  title: 'Cost-Effective HR Solutions',
  description:
    'Hiring a full-time senior HR professional can cost over €45,000 per year. With our HR services, you receive top-tier support at a fraction of the cost.',
  features: [
    {
      title: 'Save Time & Reduce Risk',
      description: 'We help you make the right staff decisions while ensuring compliance.',
    },
    {
      title: 'Lower Costs',
      description: 'Avoid the expense of a full-time HR manager while getting expert guidance.',
    },
    {
      title: 'Proactive Support',
      description: 'Identify and prevent potential HR challenges before they escalate.',
    },
  ],
  image: '/images/wmremove-transformed1.png', // ensure it's in /public
};

const hrData2 = {
  title: 'Expert Employment Law Support for Small Businesses',
  description:
    'Stay Compliant with Ease navigating Irish employment law can be challenging, especially for small businesses without dedicated HR teams. Mployus HR provides expert guidance to ensure compliance and protect your business.',
  features: [
    {
      title: 'Employment Law Updates',
      description: 'Stay informed on the latest legal changes and their impact.',
    },
    {
      title: 'WRC Audit Preparation',
      description: 'Get expert support to prepare for Workplace Relations Commission (WRC) audits.',
    },
    {
      title: 'Unlimited Expertise Advice',
      description: 'Receive tailored guidance on contracts, dismissals, and compliance.',
    },
  ],
  image: '/images/wmremove-transformed2.png', // ensure it's in /public
};

const hrData4 = {
  title: null,
  description:
    null,
  features: [
    {
      title: 'Client-Centric Approach  ',
      description: 'Custom solutions for your business needs.',
    },
    {
      title: 'Industry Expertise',
      description: 'HR support tailored to various sectors.',
    },
    {
      title: 'Proactive & Innovative',
      description: 'Identifying issues early and using modern HR tools.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible services that grow with your business.',
    },
    {
      title: 'Conflict Resolution ',
      description: 'Professional mediation for workplace disputes.',
    },
  ],
  image: '/images/wmremove-transformed3.png', // ensure it's in /public
};

const hrData3 = {
  title: 'Specialised Employment Law Assistance',
  description:
    'Our dedicated helpline ensures you have access to qualified professionals whenever you need support.',
  features: [
    {
      title: 'Immediate Expert Support ',
      description: 'Speak with employment law specialists anytime.',
    },
    {
      title: 'Risk Protection',
      description: 'Avoid costly employee claims and legal disputes.',
    },
    {
      title: 'Clear, Actionable Advice',
      description: 'Practical solutions tailored to your business needs.',
    },
  ],
  image: '/images/wmremove-transformed4.png', // ensure it's in /public
};


export default function OurHrServices1() {
 


  return (
    <div className="pt-10 flex flex-col w-full gap-20 ">
    <HeroSection
      title="HR and Employment Law Advisory"
      description="Insights, trends, and practical tips on recruitment and shift-based workforce management for HR teams, locum workers, and business leaders."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Our HR Services' },
        { label: 'HR and Employment Law Advisory' },
      ]}
    />

     

      <HrServicesGrid {...serviceData} />
      <HrSection {...hrData} />
      <HrSectionInverse {...hrData2} />

      <div className="flex flex-col items-center gap-6  ">
         <div className="text-center w-full max-w-[800px] ">
          <h3 className="text-[var(--primary-color)] text-2xl font-bold">Why Choose Mployus HR?</h3>
          <p className="text-base">
            We provide proactive, tailored HR solutions to keep your business compliant and efficient. Our team stays ahead of Irish employment law changes, offering continuous support to navigate complex HR challenges.
          </p>
      </div>
      <HrSection2 {...hrData4} />
      </div>
      <HrSectionInverse {...hrData3} />

      <ContactForm2/>
    
    </div>
  );
}
