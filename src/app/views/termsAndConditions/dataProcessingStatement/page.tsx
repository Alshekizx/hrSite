'use client';
import LegalDocument , {LegalSection} from "../agreement";
import TermParent from "../termsParent";

const legalSections: LegalSection[] = [
  {
    title: "Data Protection Statement",
      
    subsections: [
  {
    number: "",
    subtitle: "Issued by Mployus Personnel Services Ltd",
    content: [
      {
        type: "paragraph",
        value:
          "Mployus is dedicated to safeguarding the personal data entrusted to us. We process all personal data in compliance with applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 (UK), the Irish General Data Protection Regulation (EU GDPR as retained in Irish law), the Data Protection Act 2018 (Ireland), and all relevant supporting legislation."
      }
    ]
  },
  {
    number: "",
    subtitle: "Use of Personal Data",
    content: [
      {
        type: "paragraph",
        value:
          "Mployus uses personal data exclusively for the purposes for which it was provided. Processing is always lawful, fair, and transparent, adhering strictly to relevant data protection legislation."
      }
    ]
  },
  {
    number: "",
    subtitle: "Data Security and Access Controls",
    content: [
      {
        type: "paragraph",
        value:
          "Mployus applies appropriate technical and organisational measures to ensure the confidentiality, integrity, and availability of personal data, protecting it against unauthorised access, loss, destruction, or disclosure."
      },
      {
        type: "paragraph",
        value:
          "Access to Mployus software products is limited to authorised users through secure individual login credentials, consisting of a unique username and password."
      },
      {
        type: "paragraph",
        value:
          "Each user’s credentials grant access only to their own personal data unless explicitly authorised to view additional information necessary for their role or other legitimate purposes."
      },
      {
        type: "paragraph",
        value:
          "Personnel with elevated access rights receive data protection training and formally agree to comply with this Data Protection Statement."
      },
      {
        type: "paragraph",
        value:
          "All users are responsible for safeguarding their login credentials. Any actual or suspected unauthorised access must be reported immediately. In the event of any security breach involving personal data loss, corruption, or theft, affected clients will be notified without undue delay."
      }
    ]
  },
  {
    number: "",
    subtitle: "Data Storage and Encryption",
    content: [
      {
        type: "paragraph",
        value:
          "Mployus stores and processes all software data using cloud-based infrastructure that complies with the highest standards of information security. Our systems are certified under the following standards:"
      },
      {
        type: "bullet",
        value: [
          ["ISO/IEC 27001:2013 – Information Security Management"],
          ["ISO/IEC 27017:2015 – Cloud Security"],
          ["ISO/IEC 27018:2019 – Protection of Personal Data in the Cloud"]
        ]
      }
    ]
  }
]
  },

  {
    title: "Data Protection Statement",
      
    subsections: [
  {
    number: "1",
    subtitle: "Obligations During Processing",
    content: [
      {
        type: "paragraph",
        value:
          "Throughout the processing of personal data, Mployus will:"
      },
      {
        type: "bullet",
        value: [
          ["Comply fully with all relevant data protection laws, including the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 (UK), the EU General Data Protection Regulation (EU GDPR) as retained in Irish law, and the Irish Data Protection Act 2018;"],
          ["Process personal data only as necessary to fulfil the contractual obligations under the Agreement and according to the User’s documented instructions, except where required otherwise by law—in which case Mployus will notify the User in advance, unless prohibited by law;"],
          ["Immediately inform the User if any instruction appears to violate applicable data protection legislation;"],
          ["Not disclose personal data to any third party except:\n  - Upon explicit written instruction from the User,\n  - With the User’s express written consent; or\n  - Where legally required to do so;"],
          ["Implement and maintain appropriate technical and organisational security measures suitable to the level of risk, including but not limited to those specified in Article 32(1)(a)–(d) of the UK GDPR and the EU GDPR, considering the nature, scope, context, and purposes of processing."]
        ]
      }
    ]
  },
  {
    number: "",
    subtitle: "Personnel",
    content: [
      {
        type: "paragraph",
        value:
          "All personnel engaged in personal data processing shall:"
      },
      {
        type: "bullet",
        value: [
          ["Be bound by confidentiality obligations;"],
          ["Process data strictly in accordance with this agreement;"],
          ["Receive appropriate training on data protection compliance."]
        ]
      }
    ]
  },
  {
    number: "",
    subtitle: "Assistance and Cooperation",
    content: [
      {
        type: "paragraph",
        value:
          "Mployus shall:"
      },
      {
        type: "bullet",
        value: [
          ["Assist the User in responding to data subject rights requests as per Article 28(3)(e) of the UK GDPR, EU GDPR, and applicable national laws;"],
          ["Notify the User without undue delay of any actual or suspected personal data breach, in line with GDPR requirements;"],
          ["Immediately inform the User of any complaints, requests, or correspondence relating to data processing (from data subjects, regulators, or third parties), and refrain from responding directly unless legally required or expressly authorised by the User (except to acknowledge receipt)."]
        ]
      }
    ]
  },
  {
    number: "",
    subtitle: "Transfers and Sub-processing",
    content: [
      {
        type: "bullet",
        value: [
          ["Personal data shall not be transferred outside the UK or European Economic Area (EEA) without the User’s prior written authorisation, unless appropriate safeguards under the UK GDPR and/or EU GDPR are in place (e.g., adequacy decisions, standard contractual clauses);"],
          ["Mployus will not engage sub-processors without the User’s prior written consent;"],
          ["Where authorised, Mployus will ensure sub-processors enter into written agreements imposing data protection obligations at least as protective as those in this agreement and compliant with UK and EU GDPR requirements;"],
          ["Mployus remains fully liable for acts or omissions of all approved sub-processors;"],
          ["The User will be notified in advance of any proposed changes to sub-processors, allowing reasonable time to raise objections."]
        ]
      }
    ]
  },
  {
    number: "",
    subtitle: "End of Contract",
    content: [
      {
        type: "paragraph",
        value:
          "Upon termination, expiry of the agreement, User request, or when personal data is no longer needed:"
      },
      {
        type: "bullet",
        value: [
          ["Mployus shall securely delete or return all personal data and copies held."]
        ]
      }
    ]
  },
  {
    number: "",
    subtitle: "Audit and Verification",
    content: [
      {
        type: "bullet",
        value: [
          ["Mployus will provide all information reasonably required to demonstrate compliance;"],
          ["Upon request, Mployus will confirm that all systems, premises, and processes used for data processing comply with GDPR and cooperate with audits reasonably required by the User."]
        ]
      }
    ]
  },
   {
    number: "2",
    subtitle: "Data Processing Details",
    content: [
      {
        type: "paragraph",
        value: "(a) Subject Matter, Nature, and Purpose of Processing"
      },
      {
        type: "bullet",
        value: [
          ["**Subject Matter:** Provision of cloud-based human resource and workplace management software and related services."],
          ["**Nature of Processing:** Data collection, storage, retrieval, analysis, and transfer."],
          ["**Purpose of Processing:**"],
          [
            "- Facilitate authorised user access to the Mployus platform",
            "- Support the User’s employment obligations",
            "- Manage contractual services"
          ]
        ]
      },
      {
        type: "paragraph",
        value: "(b) Duration of Processing"
      },
      {
        type: "paragraph",
        value:
          "Personal data will be processed for the duration of the agreement between Mployus and the User."
      },
      {
        type: "paragraph",
        value: "(c) Categories of Personal Data"
      },
      {
        type: "bullet",
        value: [
          ["Full name"],
          ["Home address"],
          ["Date of birth"],
          ["Job title or position"],
          ["Contact details, including emergency or next of kin information"],
          ["Immigration status and supporting documents (e.g., passport or visa details) in line with UK Home Office or Irish Immigration Service requirements"],
          ["National Insurance Number (UK) / Personal Public Service (PPS) Number (Ireland)"],
          ["Employment records (e.g., absences, leave entitlements, performance and development data)"],
          ["Health and safety data (e.g., workplace accidents, roles involving health/safety risks, and vaccination status — where relevant and lawfully collected under UK GDPR, EU GDPR, and applicable health authority guidance)"]
        ]
      }
    ]
  }
  
]
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