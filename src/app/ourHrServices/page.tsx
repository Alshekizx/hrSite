'use client';

import HrSection from "../components/ourHrServiceComponent/hrSolution1";
import HrServicesGrid from "../components/homepage/tailoredHiringSolutions";
import HrSectionInverse from "../components/ourHrServiceComponent/hrSolutionInvrese";
import HrSection2 from "../components/ourHrServiceComponent/hrSolution2";
import HeroSection from "../components/ourHrServiceComponent/heroSection";
import Image from "next/image";



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
      title: 'Save Time, Cost & Reduce Risk ',
      description: ' We help you make the right staff decisions while ensuring compliance.and managing costs',
    },
    {
      title: 'Immediate Expert Support',
      description: 'Avoid the expense of a full-time HR manager while getting expert guidance. Speak with employment law specialists anytime.',
    },
    {
      title: 'Proactive Support',
      description: ' Avoid costly employee claims and legal disputes.',
    },
  ],
  image: '/images/wmremove-transformed1.png', // ensure it's in /public
};

const hrData2 = {
  title: 'Industrial Relations & Employment Law Support for Small Businesses',
  description:
    'We provide expert guidance to help small businesses manage workplace issues confidently and compliantly. From conflict resolution to disciplinary procedures, we act as your HR partner—ensuring smooth employee relations while protecting your business.',
  features: [
    {
      title: 'Grievance & Disciplinary Guidance',
      description: 'Clear, practical advice on handling employee complaints, misconduct, and disciplinary issues.',
    },
    {
      title: 'Policy & Process Support ',
      description: 'Assistance with drafting and implementing fair, legally compliant procedures.',
    },
    {
      title: 'Compliance & Risk Reduction',
      description: 'Expert support to help you avoid legal pitfalls and ensure fair treatment for all employees.',
    },
  ],
  image: '/images/wmremove-transformed21.png', // ensure it's in /public
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
  title: 'WRC & Workplace Compliance Support',
  description:
    'Get expert help to stay compliant with Irish labour laws—right from your phone. We support small businesses with WRC inspections, complex workplace matters, and real-time advice.',
  features: [
    {
      title: 'Contract Breach Support ',
      description: ' Unsure about a possible contract breach? We provide clear, confidential advice.',
    },
    {
      title: 'Inspection Ready ',
      description: ' Full support to prepare for WRC audits, including mock checks and documentation.',
    },
    {
      title: 'Contract & HR Clarity',
      description: 'Clear advice on HR compliance, contract issues, and employment rights.',
    },
  ],
  image: '/images/wmremove-transformed41.png', // ensure it's in /public
};


export default function OurHrServices1() {
 


  return (
    <div className="pt-10 flex flex-col w-full gap-20 items-center ">
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
      
      <HrSectionInverse {...hrData} />
      <HrSection {...hrData2} />

      <HrSectionInverse {...hrData3} />

      <div className="flex flex-col items-center gap-6  ">
         <div className="text-center w-full max-w-[800px] ">
          <h3 className="text-[var(--primary-color)] text-2xl font-bold">Why Choose Mployus HR?</h3>
          <p className="text-[var(--text-muted)]"  style={{fontSize:'24px'}}>
            We provide proactive, tailored HR solutions to keep your business compliant and efficient. Our team stays ahead of Irish employment law changes, offering continuous support to navigate complex HR challenges.
          </p>
      </div>
      <HrSection2 {...hrData4} />
      </div>
      

     <div className="relative px-10 py-16 text-center flex flex-col gap-4 justify-center items-center w-full bg-[var(--header-color)] ">
             <Image
                   src='/images/bgtrans.png'
                   alt='bg'
                   width={200}
                   height={200}
                   className="absolute top-0 left-0 w-1/2 h-full"/>
             
               <h3 className="text-[var(--primary-color)] text-2xl font-bold">Ready to Get Started?</h3>
               <p className="text-[var(--primary-color)] font-bold max-w-[800px]">
                Select the plan that best fits your team’s needs and take the next step by requesting a free demo to experience how it works in real time.
               </p>
               <button className="button2" style={{borderRadius:'5px'}}>View Plans & Request Demo</button>
           </div>
    
    </div>
  );
}
