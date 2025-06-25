'use client';
import { useState } from "react";
import LegalDocument , {LegalSection} from "../agreement";
import TermParent from "../termsParent";

const legalSections: LegalSection[] = [
  {
    title: "Privacy Policy",
    content: [
      {
        type: "paragraph",
        value: "This Privacy Policy explains how Mployus (also known as “Mployus HR,” “Mployus Software,” or “Mployus Personnel Services”) collects, uses, stores, and shares your personal data. How your data is handled depends on whether you are:"
      },
      {
        type: "bullet",
        value: [
              ["A User (an individual or organisation authorised to use Mployus products or services),"],
              ["An Employee of a User, or"],
            ],
      },
      {
        type: "paragraph",
        value: "A Visitor to our website."
      },
    ],
      
    subsections: [
      {
        number: "1",
        subtitle: "Privacy Notice for Website Visitors",
        content: [
          {
            type: "paragraph",
            value:
              "This section details how we collect and process personal data when you visit our websites, request services (e.g., quotes), or use features like online contact forms. \n\n Data Controller Details:",
          },
          {
            type: "bullet",
            value: [
              ["Ireland: Mployus, 7 Station Hill, Clongriffin, Dublin. Tel: 0818 900 300. Email: privacy@mployus.ie"],
              ["United Kingdom:,Mployus,82 Gorton Road, Reddish, Stockport. Email: privacy@mployus.co.uk"],
            ],
          },
        ],
      },
      {
        number: "2",
        subtitle: " What Personal Data We Collect",
        content: [
          {
            type: "paragraph",
            value:
              "The personal data collected depends on your interactions with our website and services. You may:",
          },
          {
            type: "bullet",
            value: [
              ["Browse our website"],
              ["Subscribe to marketing emails or newsletters"],
              ["Submit a quote or service request"],
              ["Apply for a job with Mployus"],
              ["Attend Mployus-hosted events or webinars"],
              ["Provide information through business interactions"],
            ],
          },
          {
            type: "paragraph",
            value:
              "We collect relevant personal data based on these activities to provide and improve our services.",
          },
          {
        type: "table",
        value: [
          ["Type of Data", "Explanation"],
          ["Name, email, postal address, job title, phone number, location, IP address", "Collected through forms or cookies for marketing, contact, support or analytical purposes"],
          ["Special Category Data (e.g., health data for accessibility accommodations)", "Such data will only be collected with your explicit consent, in accordance with Article 9(2)(a) of the UK GDPR and the EU GDPR (as applicable)"],
        ]
      }
        ],
      },
      {
        number: "3",
        subtitle: "Purpose and Legal Basis for Processing Your Data",
        content: [
            {
        type: "table",
        value: [
          ["Purpose", "Legal Basis (GDPR Article)"],
          ["Processing data from contact forms or quote requests", "Processing is necessary for taking steps at the request of the data subject prior to entering into a contract, in accordance with Article 6(1)(b) of the UK GDPR and EU GDPR (as applicable)"],
          ["Providing access to Mployus platforms or services", "Processing is necessary for the performance of a contract with the data subject, in accordance with Article 6(1)(b) of the UK GDPR and the EU GDPR (as applicable)"],
          ["Contacting you for service-related queries", "Processing under Article 6(1)(f) UK & EU GDPR (as applicable)"],
          ["Retaining data post-contract", "Article 6(1)(f)of the UK GDPR and the EU GDPR (as applicable): Legitimate interests (e.g., compliance, dispute resolution)"],
          ["Making reasonable adjustments for interviews/meetings", "Article 9(2)(a)of the UK GDPR and the EU GDPR (as applicable): Explicit consent for processing special category data"],
        ]
      }
        ],
      },
    ],
  },
  {
    title: "Software Use and User Rights",
    subsections: [
      {
        number: "4",
        subtitle: "How We Use Your Data",
        content: [
    {
      type: "paragraph",
      value:
        "We use your personal data to:",
    },
    {
      type: "bullet",
      value: [
        ["Respond to enquiries"],
        ["Provide services or quotes"],
        ["Send newsletters and event invitations"],
        ["Process job applications"],
        ["Improve our website and services"],
        ["Compile anonymous statistics"],
        ["Ensure legal compliance and manage risks"],
      ],
    },
    {
      type: "paragraph",
      value:
        "We do not sell your personal data to third parties.\n\nIf you wish to stop receiving marketing or service updates, you can withdraw consent by emailing:",
    },
    {
      type: "bullet",
      value: [
        ["Ireland: privacy@mployus.ie "],
        ["UK: privacy@mployus.co.uk"],
        
      ],
    },
  ],
      },
      {
        number: "5",
        subtitle: "Disclosure of Your Personal Data",
        content: [
    {
      type: "paragraph",
      value:
        "We may share your data:",
    },
    {
      type: "bullet",
      value: [
        ["With trusted third-party providers for business purposes (e.g., finance, legal, IT)"],
        ["With legal or regulatory authorities when required by law"],
        ["Within Mployus group companies or affiliates in the UK and Ireland, where applicable"],
        
      ],
    },
    {
      type: "paragraph",
      value:
        "All third parties must comply with GDPR standards through binding contracts to protect your data.",
    },
        ],
      },
      {
        number: "6",
        subtitle: "Data Retention",
        content: [
          {
      type: "paragraph",
      value:
        "We keep personal data in line with our Data Retention Policy:",
    },
    {
      type: "bullet",
      value: [
        ["Typically retained for 7 years (6 years statutory plus the current year)"],
        ["Data no longer needed is securely deleted"],
        ["Some exceptions apply for financial or health-related data"],
        
      ],
    },
    {
      type: "paragraph",
      value:
        "You can request a copy of our Data Retention Policy at any time.",
    },
        ],
      },
      {
        number: "7",
        subtitle: "Your Rights Under GDPR",
        content: [
          {
            type: "paragraph",
            value:
              "You have the following rights under the GDPR and the Data Protection Act 2018",
          },
            {
        type: "table",
        value: [
          ["Your Right", "Explanation"],
          ["Right to be informed", "Know how we use your data (via this notice)"],
          ["Right of access", "Obtain a copy of your personal data"],
           
          ["Right to rectification", "Request correction of inaccurate data"],
          ["Right to erasure", "Request deletion of your data"],
          ["Right to restrict processing", "Limit how we use your data"],
          ["Right to data portability", "Receive your data in a portable format"],
          ["Right to object", "Object to processing based on our legitimate interests"],
          ["Rights in relation to automated decision-making", "Mployus does not engage in automated decision-making or profiling"],
         
        ]
      }
        ],
      },
    ],
  },
  {
  title: "Legal Terms",
  subsections: [
    {
      number: "8",
      subtitle: "Your Data Rights & Complaints",
      content: [
          {
            type: "paragraph",
            value:
              "Learn more about your rights at the ICO website: https://ico.org.uk/for-the-public. To exercise your rights or make a data request, contact the Data Protection Officer",
          },
          {
            type: "bullet",
            value: [
              ["Ireland: Mployus 7 Station Hill, Clongriffin, Dublin Tel: 0818 900 300 Email: privacy@mployus.ie"],
              ["UK: Mployus 82 Gorton Road, Reddish, Stockport Email: privacy@mployus.co.uk"],
            ],
          },
          
          {
            type: "paragraph",
            value:
              "Proof of identity is required for requests.If unsatisfied with our response, you may escalate your complaint to the relevant authority:",
          },
          {
            type: "bullet",
            value: [
              ["UK: Information Commissioner’s Office (ICO) — https://ico.org.uk/concerns/"],
              ["Ireland: Data Protection Commission (DPC) — https://www.dataprotection.ie/en/contact/how-contact-us"],
            ],
          },
        ],
    },

    {
      number: "9",
      subtitle: "Cookies",
      content: [
        {
          type: "paragraph",
          value:
            "Our website uses cookies, including Google Analytics, to improve your experience by collecting visitor data. Google Analytics data may be stored in the US under approved transfer mechanisms like the EU-US Privacy Shield. You can manage or disable cookies via your browser settings; see www.aboutcookies.org. Disabling cookies may affect some website features.",
        },
      ],
    },
    {
      number: "10",
      subtitle: " Third-Party Links",
      content: [
        {
          type: "paragraph",
          value:
            "Our website may contain links to third-party sites not covered by this policy. Please review their privacy policies separately.",
        },
      ],
    },

    {
      number: "11",
      subtitle: "Contact Us",
      content: [
        {
          type: "paragraph",
          value:
            "Our websThis policy is updated periodically—please check our website for the latest version.\n\nFor questions or data enquiries, contact the Data Protection Officers:",
        },
      ],
    },

    {
      number: "12",
      subtitle: "Privacy Notice for Customers",
      content: [
        {
          type: "paragraph",
          value:
            "This Privacy Notice follows UK GDPR, the UK Data Protection Act 2018, and the Irish Data Protection Act 2018 (implementing the EU GDPR). It explains how Mployus processes personal data received from current and former clients, including data types, purposes, retention, sharing, and your rights under UK and Irish law. Mployus acts as a Data Processor for personal data you provide under your service agreement.Individuals you authorize as Delegated Users are not parties to your agreement but are granted access solely to use the platform lawfully and legitimately. Mployus may revoke access if use deviates from intended purposes.",
        },
      ],
    },
    
  ],
}

];

const softwareUseandUserRights: LegalSection[] = [
  {
    title: "User Agreement Overview",
    subsections: [
      {
        number: "1",
        subtitle: "Purpose of the Agreement",
        content: [
          {
            type: "paragraph",
            value:
              "This Agreement outlines the terms and conditions for users accessing and utilizing the digital solutions provided by Mployes Group UK Ltd.",
          },
          {
            type: "bullet",
            value: [
              ["Employee management tools"],
              ["Performance tracking features"],
              ["Payroll and compliance services"],
            ],
          },
        ],
      },
      {
        number: "2",
        subtitle: "Parties Involved",
        content: [
          {
            type: "paragraph",
            value:
              "This Agreement is legally binding between the individual or entity using the software (referred to as 'User') and Mployes Group UK Ltd.",
          },
        ],
      },
    ],
  },
  {
    title: "Terms of Software Usage",
    subsections: [
      {
        number: "3",
        subtitle: "Authorized User Rights and Restrictions",
        content: [
          {
            type: "paragraph",
            value:
              "Subject to acceptance of this Agreement and completion of necessary payments, Users are granted limited rights to access and use the software services.",
          },
          {
            type: "numbered",
            value: [
              ["Users may review official product documentation and tutorials"],
              ["Software cannot be distributed, sold, or sublicensed"],
              ["Users are obligated to maintain confidentiality of proprietary information"],
            ],
          },
        ],
      },
    ],
  },
];

const legalTerms: LegalSection[] = [
  {
    title: "General Terms of Agreement",
    subsections: [
      {
        number: "1",
        subtitle: "Purpose of the Agreement",
        content: [
          {
            type: "paragraph",
            value:
              "This Agreement governs the conditions under which the User is permitted to access and utilize the Mployes digital platforms and services.",
          },
          {
            type: "bullet",
            value: [
              ["Talent acquisition and recruitment modules"],
              ["Human resources management dashboards"],
              ["Business intelligence and financial tools"],
            ],
          },
        ],
      },
      {
        number: "2",
        subtitle: "Contracting Parties",
        content: [
          {
            type: "paragraph",
            value:
              "This Agreement is entered into between the end-user (referred to as 'User') and Mployes Group UK Ltd, a company registered in the United Kingdom.",
          },
        ],
      },
    ],
  },
  {
    title: "User Rights and Software Access",
    subsections: [
      {
        number: "3",
        subtitle: "User Permissions and Limitations",
        content: [
          {
            type: "paragraph",
            value:
              "Following acceptance of the Agreement and successful payment, Users are granted a non-transferable, non-exclusive right to access the software services provided by Mployes.",
          },
          {
            type: "numbered",
            value: [
              ["Users are allowed to view and utilize official help resources and documentation."],
              ["Users are strictly prohibited from reselling, distributing, or sublicensing the software."],
              ["Users must adhere to all confidentiality clauses regarding proprietary software content and data."],
            ],
          },
        ],
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState("Agreement");
    const tabs = [
      { name: "Privacy Policy", section: legalSections },
      { name: "Software Use and User Rights", section: softwareUseandUserRights },
      { name: "Legal Terms", section: legalTerms },
    ];

  return (
   <div className="pt-10 ">
     <TermParent >
      <div className="containerDiv">
        <div className="flex flex-row justify-start items-center border-b border-[var(--secondary-200)]">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`p-4 border-b-2 transition-colors duration-200 ${
              activeTab === tab.name
                ? "border-[var(--primary-color)] text-[var(--primary-color)]"
                : "border-transparent hover:border-[var(--primary-color)]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <LegalDocument key={tab.name} header={tab.name} sections={tab.section} />
            )
        )}
      </div>
      </div>
    </TermParent>
   </div>
  );
}