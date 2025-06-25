'use client';
import LegalDocument , {LegalSection} from "../agreement";
import TermParent from "../termsParent";

const legalSections: LegalSection[] = [
  {
    title: "",
      
    subsections: [
       {
          number: "1",
          subtitle: "Data Protection Principles",
          content: [
            {
              type: "paragraph",
              value: "Mployus commits to UK and EU GDPR principles by ensuring that:"
            },
            {
              type: "paragraph",
              value: "Data Controller Details:"
            },
            {
              type: "bullet",
              value: [
                ["Data processing is fair, lawful, and transparent"],
                ["Data is collected for specific, legitimate purposes only"],
                ["Only necessary data is collected and kept accurate"],
                ["Data is retained only as long as needed"],
                ["Technical and organizational safeguards protect data"],
                ["Any international data transfers comply with legal procedures"]
              ]
            }
          ]
        },
       {
          number: "2",
          subtitle: "Categories of Personal Data Collected",
          content: [
            {
              type: "paragraph",
              value: "To provide services, Mployus processes:"
            },
            {
              type: "bullet",
              value: [
                ["Contact details (names, addresses, phone numbers, job titles, emails for primary contacts and authorized personnel)"],
                ["Usage data related to platform access and case management tools"]
              ]
            }
          ]
        },
      {
          number: "3",
          subtitle: "How We Collect Personal Data",
          content: [
            {
              type: "paragraph",
              value: "Personal data is collected:"
            },
            {
              type: "bullet",
              value: [
                ["Directly from you at contract signing"],
                ["During onboarding"],
                ["Throughout the service term and after termination"],
                ["Via authorized Delegated Users"]
              ]
            },
            {
              type: "paragraph",
              value: "All data is stored securely within Mployus’ IT systems."
            }
          ]
        },

        {
          number: "4",
          subtitle: "Legal Basis for Processing",
          content: [
            {
              type: "paragraph",
              value: "We process personal data only where permitted by data protection legislation. The primary legal bases for processing your data are:"
            },
            {
              type: "table",
              value: [
                ["Purpose of Processing", "Legal Basis"],
                ["Account setup", "Performance of the contract"],
                ["Service delivery", "Performance of the contract"],
                ["Payment processing", "Performance of the contract"],
                ["Corporate status checks", "Legal obligation"],
                ["Tax and regulatory compliance (e.g. VAT, IPT)", "Legal obligation"],
                ["Contract-related financial decisions", "Legitimate interest"],
                ["Selection of service delivery methods", "Legitimate interest"],
                ["Contractual service administration", "Legitimate interest"],
                ["Monitoring service quality and entitlements", "Legitimate interest"],
                ["Maintaining accurate contact records", "Legitimate interest"],
                ["Handling legal claims", "Legitimate interest"],
                ["Fraud prevention", "Legitimate interest"],
                ["Securing IT and administrative systems", "Legitimate interest"]
              ]
            }
          ]
        },
        {
          number: "5",
          subtitle: "Consequences of Withholding Data",
          content: [
            {
              type: "paragraph",
              value: "If you withhold requested personal data, Mployus may be unable to enter or perform the contract, which could lead to denial or disruption of services."
            }
          ]
        },
        {
          number: "6",
          subtitle: "Data Sharing and Transfers",
          content: [
            {
              type: "paragraph",
              value: `Mployus staff handling your data are trained in data protection laws. 
Third-party providers (e.g., IT services) are bound by formal data processing agreements ensuring GDPR compliance with safeguards and technical protections. 
Data may be transferred outside the European Economic Area (EEA) only when necessary to provide services, with equivalent protections in place, including secure systems within the Mployus group.`
            }
          ]
        },
        {
          number: "7",
          subtitle: "Data Security and Safeguards",
          content: [
            {
              type: "paragraph",
              value: "Mployus is committed to protecting personal data from loss, misuse, unauthorized access, disclosure, alteration, or destruction. Appropriate technical and organizational measures are implemented to ensure security proportional to the risks, following applicable laws."
            }
          ]
        },

        {
            number: "8",
            subtitle: "Data Retention Periods",
            content: [
                {
                type: "paragraph",
                value:
                    "Personal data is retained only as long as necessary to fulfill its purpose, including legal, regulatory, tax, or reporting needs. Typically, data is kept for the duration of the contract plus at least seven (7) years after termination, unless longer retention is legally required or justified."
                },
                {
                type: "table",
                value: [
                    ["Record Type", "Retention Period"],
                    ["Health & Safety Assessments and Consultation Records", "Permanently"],
                    ["HMRC Approvals", "Permanently"],
                    ["Money Purchase Scheme Details", "6 years after transfer or value taken"],
                    ["Occupational Health Data", "30–50 years (depending on legal requirement)"],
                    ["Litigation-related Data", "7 years following conclusion of legal proceedings"],
                    ["All Other Client Data", "7 years from service termination date"]
                ]
                }
            ]
            },

            {
                number: "9",
                subtitle: "Automated Decision-Making",
                content: [
                    {
                    type: "paragraph",
                    value:
                        "Mployus does not make decisions about individuals solely by automated means without human involvement when such decisions have legal effects or significantly impact you. If this changes, you will be informed, and your rights under Article 22 of the UK GDPR will be respected."
                    }
                ]
                },
                {
                number: "10",
                subtitle: "Your Legal Rights",
                content: [
                    {
                    type: "paragraph",
                    value: "You have the following rights regarding your personal data processed by Mployus:"
                    },
                    {
                    type: "bullet",
                    value: [
                        ["Right to be informed: Clear information on how your data is used;"],
                        ["Right of access: Request access to your personal data and processing details;"],
                        ["Right to rectification: Correct inaccurate or incomplete data;"],
                        ["Right to erasure: Request deletion of your data in certain cases (“right to be forgotten”);"],
                        ["Right to restrict processing: Limit how your data is used under specific conditions;"],
                        ["Right to data portability: Obtain and reuse your data across different services;"],
                        ["Right to object: Object to certain data processing, including direct marketing;"]
                    ]
                    },
                    {
                    type: "paragraph",
                    value: "Rights related to automated decision-making: Object to decisions made without human involvement."
                    }
                ]
                },
                {
                number: "11",
                subtitle: "Withdrawing Consent",
                content: [
                    {
                    type: "paragraph",
                    value:
                        "If we process your data based on consent, you may withdraw it at any time. This does not affect processing done before withdrawal. After withdrawal, we will stop processing your data unless there is another lawful basis."
                    }
                ]
                },
                {
                number: "12",
                subtitle: "Complaints",
                content: [
                    {
                    type: "paragraph",
                    value:
                        "If you believe Mployus has violated your data protection rights, you can file a complaint with the relevant supervisory authority:"
                    },
                    {
                    type: "paragraph",
                    value:
                        "United Kingdom\nInformation Commissioner’s Office (ICO)\nWycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF\nPhone: 0303 123 1113 or 01625 545 745\nWebsite: https://www.ico.org.uk"
                    },
                    {
                    type: "paragraph",
                    value:
                        "Ireland\nData Protection Commission (DPC)\n21 Fitzwilliam Square South, Dublin 2, D02 RD28\nPhone: +353 (0)761 104 800 or +353 (0)57 868 4800\nWebsite: https://www.dataprotection.ie"
                    }
                ]
                },
                {
                number: "13",
                subtitle: "Data Protection Contact",
                content: [
                    {
                    type: "paragraph",
                    value:
                        "Mployus has appointed a Data Protection Officer responsible for policy compliance. You can contact the DPO at:\nDaniel Chapman\nEmail: privacy@mployus.co.uk"
                    }
                ]
                },
    ],
  },
  {
    title: "Privacy Notice for Users' Employees",
    content: [
      {
        type: "paragraph",
        value: "This notice is provided in line with the UK GDPR and applies to employees of Mployus clients using our software services. Mployus acts solely as a Data Processor, while your employer remains the Data Controller. We process your personal data only as instructed by your employer or as required by law."
      },
      
    ],
    subsections: [
     {
    number: "1",
    subtitle: "Data Protection Contacts",
    content: [
      {
        type: "paragraph",
        value:
          "For any data protection queries, you may contact:"
      },
      {
        type: "paragraph",
        value:
          "Mployus UK – Data Protection Officer\nAddress: 82 Gorton Road, Stockport, Manchester\nEmail: privacy@mployus.co.uk"
      },
      {
        type: "paragraph",
        value:
          "Mployus Ireland – Data Protection Officer\nAddress: 7 Station Hill, Clongriffin, Dublin\nEmail: privacy@mployus.ie"
      }
    ]
  },
  {
    number: "2",
    subtitle: "Data Processing Principles",
    content: [
      {
        type: "paragraph",
        value:
          "We handle personal data following the UK GDPR and EU GDPR (as applicable), ensuring that data is:"
      },
      {
        type: "bullet",
        value: [
          ["Processed lawfully, fairly, and transparently;"],
          ["Collected only for specific, explicit, and legitimate purposes;"],
          ["Adequate, relevant, and limited to what is necessary;"],
          ["Accurate and kept up to date where needed;"],
          ["Retained only as long as necessary;"],
          ["Processed securely with appropriate safeguards;"]
        ]
      },
      {
        type: "paragraph",
        value: "Transferred internationally only with proper protections."
      }
    ]
  },
  {
    number: "3",
    subtitle: "Categories of Data Processed",
    content: [
      {
        type: "paragraph",
        value:
          "We may process:"
      },
      {
        type: "bullet",
        value: [
          ["Name, contact details, address, and date of birth;"],
          ["Job title and employment records (e.g., leave, absences, shifts);"],
          ["Immigration status (e.g., passport/visa information);"],
          ["National Insurance number;"],
          ["Emergency contact details;"],
          ["Health and safety data (if applicable);"],
          ["Other documents or data uploaded by your employer."]
        ]
      },
      {
        type: "paragraph",
        value: "All data is securely stored within Mployus systems."
      }
    ]
  },
  {
    number: "4",
    subtitle: "Legal Basis for Processing",
    content: [
      {
        type: "paragraph",
        value: "We process your data on the lawful basis of legitimate interest to:"
      },
      {
        type: "bullet",
        value: [
          ["Provide access to our software;"],
          ["Help your employer meet employment, health, and safety obligations;"],
          ["Support contractual operations and legal defence if needed."]
        ]
      }
    ]
  },
  {
    number: "5",
    subtitle: "Data Sharing",
    content: [
      {
        type: "paragraph",
        value:
          "Only Mployus staff with technical support duties access your data as necessary. All are trained in GDPR compliance. Data may also be shared with authorised third parties only under your employer’s instruction or legal requirement. Third-party providers are contractually bound to safeguard your data. We do not transfer personal data outside the European Economic Area."
      }
    ]
  },
  {
    number: "6",
    subtitle: "Data Security",
    content: [
      {
        type: "paragraph",
        value:
          "We use physical, technical, and procedural safeguards to prevent unauthorised access, loss, or misuse of your data."
      }
    ]
  },
  {
    number: "7",
    subtitle: "Data Retention",
    content: [
      {
        type: "paragraph",
        value:
          "Your personal data is retained for the duration of your employer’s contract with Mployus, and may be kept longer if required by law or your employer’s instructions."
      }
    ]
  },
  {
    number: "8",
    subtitle: "Automated Decision-Making",
    content: [
      {
        type: "paragraph",
        value:
          "Mployus does not use automated decision-making processes that significantly affect individuals without human involvement."
      }
    ]
  },
  {
    number: "9",
    subtitle: "Your Rights as a Data Subject",
    content: [
      {
        type: "paragraph",
        value:
          "Under UK and Irish data protection laws, you have rights including:"
      },
      {
        type: "bullet",
        value: [
          ["To be informed about how your data is used;"],
          ["To access your personal data;"],
          ["To request corrections;"],
          ["To request deletion in certain cases;"],
          ["To restrict processing;"],
          ["To data portability;"],
          ["To object to certain processing, including direct marketing;"],
          ["To request human intervention for automated decisions."]
        ]
      },
      {
        type: "paragraph",
        value:
          "Since your employer is the Data Controller, you should direct any such requests to them. If we receive a request, we will forward it to your employer promptly."
      }
    ]
  },
  {
    number: "10",
    subtitle: "Withdrawal of Consent",
    content: [
      {
        type: "paragraph",
        value:
          "If consent was the basis for any processing, you may withdraw it anytime. Processing will stop unless another lawful basis applies."
      }
    ]
  },
  {
    number: "11",
    subtitle: "Lodging a Complaint",
    content: [
      {
        type: "paragraph",
        value:
          "If you believe your data protection rights have been violated, you can complain to the relevant authority:"
      },
      {
        type: "paragraph",
        value:
          "United Kingdom\nInformation Commissioner’s Office (ICO)\nWycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF\nPhone: 0303 123 1113 or 01625 545 745\nWebsite: www.ico.org.uk"
      },
      {
        type: "paragraph",
        value:
          "Ireland\nData Protection Commission (DPC)\n21 Fitzwilliam Square South, Dublin 2, D02 RD28\nPhone: +353 (0)761 104 800 or +353 (0)57 868 4800\nWebsite: www.dataprotection.ie"
      }
    ]
  }
    ],
  },


];




export default function DataProtection() {
  

  return (
   <div className="pt-10 ">
     <TermParent >
      <div className="containerDiv">
       <LegalDocument header="Data Protection" sections={legalSections} />
      </div>
    </TermParent>
   </div>
  );
}