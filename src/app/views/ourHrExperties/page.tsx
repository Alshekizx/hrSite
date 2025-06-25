'use client';
import HeroSection from "../../components/ourHrServiceComponent/heroSection";
import AnotherHrSection2 from "../../components/ourHrServiceComponent/anotherHrSolution2";
import ContactForm2 from "../../components/ourHrServiceComponent/contactUs2";
export default function OurHrExperties() {
 
const hrData = {
    title: 'Auto-Enrolment Pension Scheme',
    description: `Ireland’s My Future Fund auto-enrolment scheme begins on 30 September 2025, enrolling private sector workers not already in a pension. Contributions come from both employers and employees, with an opt-out allowed after six months.
    \nMployus offers expert support to help businesses set up and manage the scheme, ensuring compliance and clear communication with staff.`,
    image: '/images/eded1.png',
    reverse: true,
  };

  const hrData2 = {
    title: 'Disciplinary and Grievance Procedures',
    description: `Disciplinary and grievance procedures are essential for addressing workplace issues fairly and consistently. These are governed by the Unfair Dismissals Acts 1977–2015 and the Workplace Relations Commission (WRC) Code of Practice on Grievance and Disciplinary Procedures.
        \nWe help businesses develop and implement these procedures, ensuring compliance with legal standards while minimizing the risk of claims related to unfair dismissal or disputes.`,
    image: '/images/eded2.png',
    reverse: false,
  };

  const hrData3 = {
    title: 'Terms and Conditions of Employment',
    description: `Terms and conditions of employment are crucial for defining the relationship between employers and employees. Governed by the Terms of Employment (Information) Acts 1994–2014, employers are required to provide written terms to employees within two months of employment.
        \nWe assist businesses in creating clear, compliant employment contracts that outline employee rights, responsibilities, and benefits, ensuring full legal adherence.`,
    image: '/images/eded3.png',
    reverse: true,
  };

  const hrData4 = {
    title: 'Employee Policies and Procedures',
    description: `Employee policies and procedures guide workplace behaviour and expectations. They must comply with Irish employment laws such as the Employment Equality Acts 1998-2015.
            \n We specialise in creating tailored policies that cover workplace conduct, anti-discrimination practices, and grievance procedures, ensuring legal compliance and a harmonious workplace environment.`,
    image: '/images/eded4.png',
    reverse: false,
  };

  const hrData5 = {
    title: 'Redundancy',
    description: `Redundancy arises when positions are no longer required, and in Ireland, it is governed by the Redundancy Payments Acts 1967–2014. Mployus provides businesses with guidance on the redundancy process, including fair selection, employee communication, and compliance with statutory redundancy payments.
               \nWe ensure that the process is handled fairly, minimising legal risks and maintaining employee relations.`,
    image: '/images/eded5.png',
    reverse: true,
  };

  const hrData6 = {
    title: 'Performance Management',
    description: `Effective performance management systems are vital for aligning employee performance with business goals. While no specific Irish legislation governs performance management, Mployus ensures compliance with broader employment laws such as the Employment Equality Acts when implementing performance evaluation systems.
    \nWe help businesses create tailored performance management frameworks that foster continuous improvement and employee accountability.`,
    image: '/images/eded6.png',
    reverse: false,
  };

  const hrData7 = {
    title: 'HR Investigation',
    description: `HR investigations are essential for addressing allegations of misconduct and ensuring fair treatment. These investigations are guided by the Employment Equality Acts and the Workplace Relations Act.
    \nWe support businesses by conducting impartial investigations, ensuring that procedures are compliant with Irish employment law and that the findings are properly documented.`,
    image: '/images/eded7.png',
    reverse: true,
  };

  const hrData8 = {
    title: 'Employee Statutory Rights',
    description: `Employee statutory rights cover a range of protections, including minimum wage, sick leave, and holiday entitlements, all governed by Irish law, particularly the National Minimum Wage Act 2000 and the Organisation of Working Time Act 1997.
    \nWe help businesses ensure they comply with these legal obligations, offering guidance on employee entitlements and supporting businesses in maintaining a fair and legally compliant work environment.`,
    image: '/images/eded8.png',
    reverse: false,
  };

  const hrData9 = {
    title: 'TUPE',
    description: `The Transfer of Undertakings (Protection of Employment) Regulations (TUPE) protects employees' rights during business transfers. Mployus provides expert guidance on TUPE, ensuring compliance with legal obligations during mergers, acquisitions, or outsourcing.
    \nOur team helps businesses manage the transfer of employees' terms and conditions, safeguarding continuity of employment and minimizing legal risks`,
    image: '/images/eded9.png',
    reverse: true,
  };

  const hrData10 = {
    title: 'Working Arrangements',
    description: `Working arrangements cover aspects like working hours and flexible schedules, governed by the Organisation of Working Time Act 1997. Mployus assists businesses in implementing effective working arrangements, ensuring compliance with Irish laws and promoting work-life balance.
    \nWe offer advice on setting up policies that align with legal requirements while boosting productivity and employee satisfaction.`,
    image: '/images/eded10.png',
    reverse: false,
  };

  const hrData11 = {
    title: 'Reducing Absenteeism',
    description: `Reducing absenteeism is crucial for maintaining a productive workforce. Irish legislation, including the Workplace Relations Commission (WRC) guidelines, provides frameworks for managing absenteeism.
    \nWe help businesses reduce absenteeism through comprehensive absence management strategies, ensuring compliance with statutory rights while promoting employee health and reducing workplace disruption.`,
    image: '/images/eded11.png',
    reverse: true,
  };

  return (
    <div>
      <div className="pt-10 flex flex-col items-center w-full gap-10 ">
    <HeroSection
      title="Our HR Expertise"
      description="At MployUs, we deliver practical, compliant HR solutions tailored to Irish employment law. From auto-enrolment pensions to TUPE transfers, we support businesses through every stage of the employee lifecycle."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Our HR Expertise' },
        { label: '' },
      ]}
    />

    
    <AnotherHrSection2 {...hrData} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData2} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData3} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData4} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData5} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData6} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData7} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData8} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData9} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData10} />
    <hr  className="border border-[var(--secondary-100)] w-full max-w-[90%]"/>
    <AnotherHrSection2 {...hrData11} />

    </div>
    <div className="pt-10"> <ContactForm2/></div>
   
    </div>
  );
}
