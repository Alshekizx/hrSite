'use client';
import { useState } from "react";
import LegalDocument , {LegalSection} from "./agreement";
import TermParent from "./termsParent";

const legalSections: LegalSection[] = [
  {
    title: "Agreement",
    subsections: [
      {
        number: "1",
        subtitle: "Subject Matter of This Agreement",
        content: [
          {
            type: "paragraph",
            value:
              "This Agreement sets the terms for the User’s access to and use of Mployus software solutions. These solutions include Mployus’s online platforms for recruitment, locum management, HR, finance, business management, and related services (collectively, the Services).\n\nThe Services cover use of the Provider’s websites, software applications, digital systems, and related features, as detailed and updated on www.mployus.co.uk or www.mployus.ie.\n\nAccess is conditional upon the User holding a valid licence and having paid all applicable fees. Without both, no right to use the Services exists.\n\nDelegated Users may be granted access at the User’s discretion but are not parties to this Agreement. Their access is strictly for supporting lawful use of the Services. Mployus may revoke this access if it no longer aligns with the Agreement’s purpose.\n\nThe Provider may update this Agreement and its Privacy Policy at any time, with reasonable notice via platform or email. However, Users are responsible for reviewing the latest version. Continued use of the Services implies acceptance of all changes.",
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
              "This Agreement is entered into by and between:",
          },
          {
            type: "bullet",
            value: [
              ["The User: Any individual or organisation that has been authorised to access and use Mployus software solutions."],
              ["The Provider: Mployus Group UK & Ireland, which may operate under Mployus Personnel Services, with a registered office located in the United Kingdom or Ireland, as applicable."],
            ],
          },
          {
            type: "paragraph",
            value:
              "By agreeing to these terms, both the User and the Provider acknowledge their consent to be legally bound by the provisions herein.",
          },
        ],
      },
      {
        number: "3",
        subtitle: "Acceptance and Commencement of Agreement",
        content: [
          {
            type: "paragraph",
            value:
              "The User confirms acceptance of this Agreement upon logging into the Mployus platform for the first time. This Agreement shall remain in force until terminated pursuant to Clause 18 of this document. If the User declines to accept these terms and conditions, they must notify the Provider immediately and must not access or utilise Mployus software solutions or any associated Services.",
          },
        ],
      },
    ],
  },
  {
    title: "Software Use and User Rights",
    subsections: [
      {
        number: "4",
        subtitle: "Scope of User Rights, Obligations, and Cooling-Off Period",
        content: [
          {
            type: "paragraph",
            value:
              "Upon acceptance of this Agreement and full payment of applicable fees, the Provider grants the User a non-transferable, limited right to access and use its software solutions (“the Software”) in accordance with this Agreement, service documentation, and supporting materials.\n\nThe Software is intended for internal operational use such as HR, compliance, and shift coordination. Users may upload relevant personnel data and authorise employees or Delegated Users to manage their own information, subject to all terms herein. All intellectual property in submitted data remains with the User, and access is conditional upon compliance with this Agreement and timely fee payment. The Provider implements reasonable technical safeguards to protect such data.\n\nRights granted are personal and may not be transferred, assigned, or sublicensed without the Provider’s prior written approval.\n\nThe User agrees to comply with all applicable laws and must not upload unlawful, infringing, or harmful content. Uploading copyrighted material without ownership or legal rights is strictly prohibited.\n\nWhile the Provider may offer professional HR or compliance services as part of a broader group, the Software is not a substitute for legal or regulatory advice. The User assumes full responsibility for any decisions made based on data processed via the Software.\n\nUsers may choose to integrate third-party tools or services (“Additional Services”) at their discretion and agree to any separate terms imposed by those providers. In cases of conflict, the third-party terms apply to those services. The Provider accepts no liability for third-party integrations and may suspend or discontinue such features at its discretion.\n\nIf the User qualifies as a consumer under UK or Irish law—such as under the Consumer Credit Act 2006 (UK) or Consumer Protection Act 2007 and EU (Consumer Information, Cancellation and Other Rights) Regulations 2013 (Ireland)—they may cancel their use of the Software within five (5) working days of acceptance. Cancellation must be submitted in writing. Where the services have been used during this period, the Provider may charge a reasonable fee, subject to mutual agreement and the relevant legal framework.",
          },
        ],
      },
      {
        number: "5",
        subtitle: "Account Creation and Access",
        content: [
          {
            type: "paragraph",
            value:
              "(a) Account Setup under a Fixed-Term Contract\n\nUpon acceptance of these terms and successful registration, the Provider will issue secure login credentials (“Sign-In Information”) to the User for access to the Software.\n\nAccess will remain valid for the term of the fixed contract, unless terminated earlier in accordance with Clause 18 of this Agreement. Should the Provider issue an invoice containing an erroneous fee, it reserves the right to amend the charge and recover the correct payment from the User, who agrees to remit such payment promptly.",
          },
          {
            type: "paragraph",
            value:
              "(b) Account Setup under a Free or Lite Product Version\n\nThe Provider shall supply the Sign-In Information to the User upon successful registration and acceptance of these terms for a no-cost version of the Software. All terms herein still apply, subject to the specific limitations of the Lite Product license.",
          },
        ],
      },
      {
        number: "6",
        subtitle: "Use of the Software",
        content: [
          {
            type: "paragraph",
            value:
              "The User is responsible for maintaining internet access and internal network performance. Any related connectivity or performance issues are the User’s responsibility.\n\nThe Provider will make reasonable efforts to keep the Software free from malicious code but cannot guarantee this. Users should maintain appropriate antivirus and security measures. The Provider is not liable for any damage from malware or security issues.\n\nSoftware compatibility with the User’s systems and uninterrupted access is not guaranteed. The Provider disclaims responsibility for outages due to factors beyond its control.\n\nUsers must keep their login credentials secure and not share them. Passwords should be updated regularly.\n\nThe Provider may suspend Software access for maintenance or updates and will aim to provide notice and perform such tasks outside business hours when possible.",
          },
        ],
      },
      {
        number: "7",
        subtitle: "Adding Services to the Account",
        content: [
          {
            type: "paragraph",
            value:
              "To activate Additional Services, the User must pay the applicable fees. Services can be added through the online account portal.\n\nIf technical issues arise, the User should stop the process and contact the Provider immediately. Charges will be updated to reflect the added services.\n\nFor help with Additional Services, Users may contact the Provider via email, phone, or web chat support.",
          },
        ],
      },
    ],
  },
  {
  title: "Legal Terms",
  subsections: [
    {
      number: "8",
      subtitle: "Fees and Payment Terms (Fixed Term Contracts)",
      content: [
        {
          type: "paragraph",
          value:
            "If you’ve signed a contract for a fixed term, the fees for using Mployus software are set out in that contract.",
        },
      ],
    },
    {
      number: "9",
      subtitle: "What Happens If You Breach This Agreement (Default)",
      content: [
        {
          type: "paragraph",
          value:
            "If the User breaches this Agreement or fails to pay fees, Mployus may suspend or restrict access to the Software and related services (including employee self-service). A grace period may be offered to resolve payment issues, but access can be suspended if not resolved. Suspension continues until the issue is fixed or payment is made in full. Continued non-compliance may result in termination (see Clause 16). Notice of suspension or termination will be provided via email.",
        },
        {
          type: "paragraph",
          value:
            "The User agrees to indemnify Mployus against any claims or losses arising from:",
        },
        {
            type: "bullet",
            value: [
              ["Breach of this Agreement"],
              ["Infringement of third-party rights"],
              ["Harm caused by content or data submitted by the User"]
            ],
          },
        {
          type: "paragraph",
          value:
            "Claims” include legal demands; “Losses” include financial damages and legal costs.",
        },
      ],
    },
    {
      number: "10",
      subtitle: "Restrictions on Use",
      content: [
        {
          type: "paragraph",
          value:
            "The User must not:",
        },
        {
          type: "bullet",
          value: [
            ["Upload malware or harmful code"],
            ["Access paid services without payment (Mployus may charge at standard rates or suspend access)"],
            ["Disrupt other users’ access or platform functionality"],
            ["Share login access outside the organisation without approval"],
            ["Use the Software to replicate, build, or enhance other products"],
            ["Damage Mployus’s reputation or systems"],
            ["Allow misuse of the platform by authorised users—Users remain responsible for their actions, unless access is given directly to an Mployus employee"],
          ],
        },
      ],
    },
    {
      number: "11",
      subtitle: "Support Services",
      content: [
         {
          type: "paragraph",
          value:
            "Mployus provides:",
        },
        {
          type: "bullet",
          value: [
            ["24/7 self-help support"],
            ["Live support (via phone or email) Monday–Friday, 9am–5pm GMT"],
          ]
        },
        {
          type: "paragraph",
          value:
            "You agree to grant access to your system when required for support. Mployus may update support methods or introduce fees, with notice via the platform or email. It is not responsible for issues with your hardware or third-party software.",
        },
      ],
    },
    {
      number: "12",
      subtitle: "Intellectual Property",
      content: [
        {
          type: "paragraph",
          value:
            "All intellectual property rights in the Mployus software belong to Mployus or its licensors. You’re granted a right to use the software only as outlined in this Agreement.\n\nYou may not use Mployus branding, names, or logos in marketing without written consent.",
        },
      ],
    },
    {
      number: "13",
      subtitle: "Provider Responsibilities",
      content: [
        
        {
          type: "bullet",
          value: [
            ["Mployus aims to ensure uninterrupted software access but isn’t liable for issues beyond its control. Advance notice of outages will be given where possible."],
            ["No guarantees are made regarding:"],
            ["Suitability for your needs"],
            ["Specific outcomes"],
            ["The quality of results, or"],
            ["Resolution of support queries."],
            ["You may not rely on pre-contractual statements unless expressly included in this Agreement."]
          ]
        },
        {
          type: "paragraph",
          value:
            "Mployus commits to using reasonable care and skill in delivering services.",
        },
      ],
    },
    {
      number: "14",
      subtitle: "Mployus’s Liability",
      content: [
        {
          type: "paragraph",
          value:
            "Mployus’s total liability is capped at the amount you paid during the month the issue occurred. It is not liable for:",
        },
        {
        type: "bullet",
        value: [
          ["Lost profits, business, or goodwill"],
          ["Business interruption or data loss"],
          ["Unforeseeable losses at the time of agreement."],
        ]
      },
      {
          type: "paragraph",
          value:
            "However, Mployus remains fully liable for:",
        },
        {
        type: "bullet",
        value: [
          ["Fraud"],
          ["Personal injury or death due to negligence"],
          ["GDPR violations"],
          ["Any liability that cannot legally be excluded"],
        ]
      },
      ],
    },
    {
      number: "15",
      subtitle: "Force Majeure (Events Beyond Control)",
      content: [
        {
          type: "paragraph",
          value:
            "Neither you nor Mployus is liable for delays or failures caused by events beyond reasonable control—such as natural disasters, war, strikes, or other unforeseen disruptions.",
        },
      ],
    },
    {
      number: "16",
      subtitle: "Ending the Agreement",
      content: [
        {
          type: "paragraph",
          value:
            "(a) Termination for Breach or Insolvency",
        },
        {
          type: "bullet",
          value: [
            ["If either party breaches this Agreement, the other may issue written notice and allow 30 days to resolve the issue."],
            ["If not resolved, the Agreement may be terminated immediately."],
            ["If a party becomes insolvent or enters liquidation, the other may terminate with written notice."],
          ]
        },
        {
          type: "paragraph",
          value:
            "Post-Termination:",
        },
        {
          type: "bullet",
          value: [
            ["You retain ownership of your data"],
            ["You may access your data before the termination date."],
            ["Mployus will retain your data for 6 years post-termination for legal and regulatory purposes."],
          ]
        },
        {
          type: "paragraph",
          value:
            "(b) Automatic Renewal\n\n This Agreement renews automatically for the same term unless either party provides 90 days' written notice before the current term ends.",
        },
        
        {
          type: "paragraph",
          value:
            "(c) Fee Increases \n\n Mployus may raise fees by up to 7% at the start of each renewal term.",
        },
        
      ],
    },
    {
      number: "17",
      subtitle: "Other Legal Terms (Miscellaneous)",
      content: [

         {
          type: "bullet",
          value: [
            ["If a clause is found invalid or unenforceable, it will be removed, but the rest of the Agreement will still apply."],
            ["A delay in enforcing rights doesn’t waive those rights."],
            ["This Agreement (including fixed-term contracts and related documents) represents the entire agreement between you and Mployus."],
                        
            ["You may not transfer or assign this Agreement without Mployus’s written consent. Mployus may do so without needing yours."],
            ["Only Mployus and the User have rights under this Agreement no third parties may enforce it."],
          ]
        },

        {
          type: "paragraph",
          value:
            "Notices sent via email will be deemed received on the next business day.",
        },
      ],
    },
    {
      number: "18",
      subtitle: "Governing Law & Jurisdiction",
      content: [
        
        {
          type: "bullet",
          value: [
            ["If you use Mployus in the United Kingdom, this Agreement is governed by the laws of England and Wales, with exclusive jurisdiction granted to their courts."],
            ["If used in Ireland, it is governed by the laws of Ireland, with Irish courts having exclusive jurisdiction."],
          ]
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

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("Agreement");
    const tabs = [
      { name: "Agreement", section: legalSections },
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