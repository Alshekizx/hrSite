

export type Sector = {
  title: string;
  slug: string;
  bgImage: string;
  details:string;
  sections: {
    heading: string;
    description: string;
  }[];
};

export const services: Sector[] = [
  {
    title: "Hospitality",
    slug: "hospitality",
    bgImage: "/images/hospitality.png",
    details:
        "We help professional service businesses with HR strategy, recruitment, and legal compliance.",
    sections: [
      {
        heading: "Helping Retail Businesses Stay Staff-Ready and Compliant",
        description:
          "In the fast-paced world of retail, high staff turnover, seasonal demand, and diverse shift patterns are part of everyday operations. We support a wide range of retail businesses—including fashion and footwear stores, grocery and convenience shops, pharmacies, cafés, restaurants, and franchise chains—with practical HR advice that keeps you agile, compliant, and team-ready. Whether you're hiring seasonal staff, managing last-minute rosters, or updating leave entitlements, we ensure your HR practices are both legally sound and operationally flexible.",
      },
      {
        heading: "Boosting Morale and Reliability",
        description:
          "We also assist with key people processes like onboarding, performance management, disciplinary procedures, and managing absence or lateness issues. Our goal is to take the HR load off your shoulders so you can focus on delivering excellent service to your customers—without unnecessary staffing stress or legal risk.",
      },
    ],
  },
  {
    title: "Professional Services",
    slug: "professionalServices",
    details:
        "We help professional service businesses with HR strategy, recruitment, and legal compliance.",
      bgImage: "/images/professionalServices.jpg",
    sections: [
      {
        heading: "Tailored HR for Skilled Professionals",
        description:
          "From legal and accounting firms to consulting agencies, we support professional services with HR solutions that match their standards and structure. We help with policy creation, recruitment, appraisals, and compliance frameworks that ensure trust and credibility.",
      },
      {
        heading: "Enhancing Team Dynamics",
        description:
          "We assist with performance evaluations, team alignment, and conflict resolution, helping you build a culture that reflects your values and delivers high-value outcomes to your clients.",
      },
    ],
  },
  {
    title: "Tech Startups & SMEs",
    slug: "techStartupsSMEs",
    details:
        "We support tech startups with agile HR practices and recruitment tailored for fast growth.",
      bgImage: "/images/techStartupsSMEs.jpg",
    sections: [
      {
        heading: "Agile HR for Fast-Moving Companies",
        description:
          "Startups and small businesses require scalable HR solutions. We offer support for recruitment, onboarding, remote team management, and legal compliance—freeing founders to grow their businesses confidently.",
      },
      {
        heading: "Culture and Retention Strategy",
        description:
          "We assist with defining culture, setting values, handling benefits, and improving staff engagement to keep your growing team productive and loyal.",
      },
    ],
  },
  {
    title: "Retail",
    slug: "retail",
    details:
        "We help retail businesses with compliant contracts, shift scheduling, and employee concerns.",
      bgImage: "/images/retail.jpg",
      sections: [
      {
        heading: "Keeping Your Storefront Compliant and Staffed",
        description:
          "We help retailers with rota planning, performance tracking, and legal HR practices. Whether it’s a chain of stores or a local boutique, we tailor solutions to handle shift work, turnover, and employment law challenges.",
      },
      {
        heading: "Enabling Great Customer Service",
        description:
          "We manage employee handbooks, disciplinary steps, and absence tracking to reduce interruptions and help you maintain excellent front-line service.",
      },
    ],
  },
  {
    title: "Construction",
    slug: "construction",
     details:
        "We support construction firms with skilled staffing, contract compliance, and shift planning.",
      bgImage: "/images/construction.jpg",
    sections: [
      {
        heading: "HR Compliance on and off Site",
        description:
          "We support construction businesses with contracts, site safety training, grievance procedures, and workforce onboarding to ensure smooth operations and legal compliance.",
      },
      {
        heading: "Supporting Flexibility and Scalability",
        description:
          "From subcontractor management to shift scheduling, we provide tools and guidance to help your teams work efficiently and safely across multiple projects.",
      },
    ],
  },
  {
    title: "Logistics & Transport",
    slug: "logisticsTransport",
   details:
        "We optimize logistics and transport businesses with efficient workforce management.",
      bgImage: "/images/logistics.jpg",
    sections: [
      {
        heading: "Keeping the Wheels Turning Legally",
        description:
          "We help transport and logistics firms with shift management, driver policies, compliance documents, and staff wellbeing to keep everything running smoothly.",
      },
      {
        heading: "Reducing Risk in a Mobile Workforce",
        description:
          "From absence tracking to dispute handling, we support your team’s needs while helping your business remain compliant with employment and health and safety regulations.",
      },
    ],
  },
  {
    title: "Nonprofits & NGOs",
    slug: "nonprofitsNGOs",
    details:
        "We help nonprofit organizations & NGOs with compliant contracts, shift scheduling, and HR support.",
      bgImage: "/images/nonprofitsNGOs.jpg",
    sections: [
      {
        heading: "Mission-Driven HR Support",
        description:
          "We understand the HR challenges of charities and nonprofits, including funding cycles, volunteer coordination, and hybrid teams. We help align your HR policies with your mission.",
      },
      {
        heading: "Enabling Purposeful Teams",
        description:
          "We assist with recruitment, contracts, and safeguarding policies so you can focus on delivering impact while ensuring HR compliance.",
      },
    ],
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    details:
        "We help healthcare businesses with compliant contracts, shift scheduling, and employee concerns.",
      bgImage: "/images/healthcare.jpg",
    
      sections: [
      {
        heading: "Reliable HR for Health Professionals",
        description:
          "From care homes to clinics, we support healthcare organizations with recruitment, compliance, training policies, and 24/7 rota support to meet operational and legal demands.",
      },
      {
        heading: "Protecting Your Workforce and Patients",
        description:
          "We help implement disciplinary, absence, and incident reporting procedures that protect both your team and those under their care.",
      },
    ],
  },


  
];






