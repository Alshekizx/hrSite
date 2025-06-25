// Type for featureDetails
type FeatureDetails = {
  hrSoftware: { [feature: string]: string };
  hrSupport: { [feature: string]: string };
  hrSoftwareSupport: { [feature: string]: string };
};

// Feature Descriptions
export const featureDetails: FeatureDetails = {
  hrSoftware: {
    "Document Storage": "Securely store and manage employee-related documents in a centralized location.",
    "Employee Management": "Handle employee profiles, roles, departments, and lifecycle tracking.",
    "Geo-Fence Clock-In": "Enable employees to clock in and out only within specified geographic zones.",
    "Employee SelfService": "Allow employees to update personal details, view payslips, and request leave.",
    "HR Mobile App": "Access HR features conveniently through a dedicated mobile application.",
    "Overtime Tracking Tool": "Track, approve, and manage overtime hours efficiently.",
    "Performance Management": "Set KPIs, conduct reviews, and manage employee performance.",
    "Goal Tracking": "Create and monitor goals at employee and departmental levels.",
    "Digital Rotas": "Plan and share shift patterns and work schedules digitally.",
    "Shift Scheduling": "Easily assign and adjust employee shifts with real-time updates.",
    "Leave Management": "Automate the leave request, approval, and tracking process.",
    "Attendance Management": "Monitor employee attendance and working hours accurately.",
    "Holiday Scheduling": "Organize and communicate holiday schedules across teams.",
    "Expense Tracker": "Submit, review, and approve employee reimbursement claims.",
    "Permission Groups": "Control user access by assigning role-based permissions.",
  },
  hrSupport: {
    "HR Support Tickets": "Submit and track HR support issues or queries through a ticketing system.",
    "Employment LawAdvice": "Access expert advice on labour law and compliance matters.",
    "Digital Hr Documents": "Utilize ready-to-use digital HR templates and documents.",
    "HR Audits": "Conduct reviews of HR processes and compliance with employment standards.",
    "HR Documentation Support": "Get help creating or updating HR policies and procedures.",
    "HR Policy Development": "Develop company-specific HR policies aligned with legal standards.",
    "Unlimited Digital Contracts": "Generate and use unlimited digital contracts and agreements.",
    "Periodic Documentation Review": "Schedule regular reviews of your HR documentation.",
    "Document Storage": "Store official HR documents securely for compliance and easy access.",
    "Updating Docs On Law Changes": "Automatically update documents based on changes in employment law.",
    "E-Signatures": "Legally sign HR documents and contracts electronically.",
  },
  hrSoftwareSupport: {
    "Employee Relations Support": "Receive expert guidance on managing employee relations and conflict.",
    "Labour Inspections Support": "Support during statutory and labour inspections or audits.",
    "Job Analysis Description": "Create structured job descriptions and role responsibilities.",
    "Final Stage Interviewing": "Assist with assessments and interviews for final-stage candidates.",
    "Hiring Manager Training": "Train hiring managers on best practices for recruitment.",
    "Offer Management": "Help with preparing, sending, and negotiating job offers.",
    "Onboarding Coordination": "Coordinate new hire onboarding with structured workflows.",
    "All Core Features": "Access all features included in the CORE plan.",
    "All Essential Features": "Access all features included in the ESSENTIALS plan.",
  }
};

// Interfaces
export type PlanCategory = 'HR Software' | 'HR Support' | 'HR Software & HR Support';

export interface PricingPlan {
  name: string;
  price: string;
  billing: string;
  description: string;
  softwareIncluded: string[];
  category: PlanCategory;
  actions: {
    quoteButton: string;
    demoButton: string;
  };
  features: {
    hrSoftware?: Partial<Record<keyof typeof featureDetails.hrSoftware, boolean>>;
    hrSupport?: Partial<Record<keyof typeof featureDetails.hrSupport, boolean>>;
    hrSoftwareSupport?: Partial<Record<keyof typeof featureDetails.hrSoftwareSupport, boolean>>;
  };
}
export const pricingPlans: PricingPlan[] = [
  {
    name: 'CORE',
    price: '€5.99',
    billing: 'per employee per month ',
    description: 'Providing vital tools necessary for efficient workforce management.',
    softwareIncluded: ['Finance Software', 'Recruitment Software', 'Business Software'],
    category: 'HR Software',
    actions: {
      quoteButton: 'Get Quote',
      demoButton: 'Request Demo',
    },
    features: {
      hrSoftware: {
        "Document Storage": true,
        "Employee Management": true,
        "Geo-Fence Clock-In": true,
        "Employee SelfService": true,
        "HR Mobile App": true,
        "Overtime Tracking Tool": true,
        "Performance Management": true,
        "Goal Tracking": true,
        "Digital Rotas": true,
        "Shift Scheduling": true,
        "Leave Management": true,
        "Attendance Management": true,
        "Holiday Scheduling": true,
        "Expense Tracker": true,
        "Permission Groups": true,
      },
      hrSupport: {
        "HR Support Tickets": false,
        "Employment LawAdvice": false,
        "Digital Hr Documents": false,
        "HR Audits": false,
        "HR Documentation Support": false,
        "HR Policy Development": false,
        "Unlimited Digital Contracts": false,
        "Periodic Documentation Review": false,
        "Document Storage": false,
        "Updating Docs On Law Changes": false,
        "E-Signatures": false,
      },
      hrSoftwareSupport: {
        "Employee Relations Support": false,
        "Labour Inspections Support": false,
        "Job Analysis Description": false,
        "Final Stage Interviewing": false,
        "Hiring Manager Training": false,
        "Offer Management": false,
        "Onboarding Coordination": false,
        "All Core Features": false,
        "All Essential Features": false,
      }
    }
  },
  {
    name: 'ESSENTIALS',
    price: '€5.99',
    billing: 'per employee per month ',
    description: 'We boost productivity and enhance the overall work experience for all team members.',
    softwareIncluded: ['Finance Software', 'Recruitment Software', 'Business Software'],
    category: 'HR Support',
    actions: {
      quoteButton: 'Get Quote',
      demoButton: 'Request Demo',
    },
    features: {
      hrSoftware: {
        "Document Storage": false,
        "Employee Management": false,
        "Geo-Fence Clock-In": false,
        "Employee SelfService": false,
        "HR Mobile App": false,
        "Overtime Tracking Tool": false,
        "Performance Management": false,
        "Goal Tracking": false,
        "Digital Rotas": false,
        "Shift Scheduling": false,
        "Leave Management": false,
        "Attendance Management": false,
        "Holiday Scheduling": false,
        "Expense Tracker": false,
        "Permission Groups": false,
      },
      hrSupport: {
        "HR Support Tickets": true,
        "Employment LawAdvice": true,
        "Digital Hr Documents": true,
        "HR Audits": true,
        "HR Documentation Support": true,
        "HR Policy Development": true,
        "Unlimited Digital Contracts": true,
        "Periodic Documentation Review": true,
        "Document Storage": true,
        "Updating Docs On Law Changes": true,
        "E-Signatures": true,
      },
      hrSoftwareSupport: {
        "Employee Relations Support": true,
        "Labour Inspections Support": true,
        "Job Analysis Description": false,
        "Final Stage Interviewing": false,
        "Hiring Manager Training": false,
        "Offer Management": false,
        "Onboarding Coordination": false,
        "All Core Features": false,
        "All Essential Features": false,
      }
    }
  },
  {
    name: 'ADVANCED',
    price: '€15.99',
    billing: 'per employee per month ',
    description: 'Providing advanced HR tools and expert support tailored for your business.',
    softwareIncluded: ['Finance Software', 'Recruitment Software', 'Business Software'],
    category: 'HR Software & HR Support',
    actions: {
      quoteButton: 'Get Quote',
      demoButton: 'Request Demo',
    },
    features: {
      hrSoftwareSupport: {
        "All Essential Features": true,
        "All Core Features": true,
        "Onboarding Coordination": true,
        "Offer Management": true,
        "Employee Relations Support": true,
        "Labour Inspections Support": true,
        "Job Analysis Description": true,
        "Final Stage Interviewing": true,
        "Hiring Manager Training": true,
        
      },
      hrSoftware: {
        "Document Storage": true,
        "Employee Management": true,
        "Geo-Fence Clock-In": true,
        "Employee SelfService": true,
        "HR Mobile App": true,
        "Overtime Tracking Tool": true,
        "Performance Management": true,
        "Goal Tracking": true,
        "Digital Rotas": true,
        "Shift Scheduling": true,
        "Leave Management": true,
        "Attendance Management": true,
        "Holiday Scheduling": true,
        "Expense Tracker": true,
        "Permission Groups": true,
      },
      hrSupport: {
        "HR Support Tickets": true,
        "Employment LawAdvice": true,
        "Digital Hr Documents": true,
        "HR Audits": true,
        "HR Documentation Support": true,
        "HR Policy Development": true,
        "Unlimited Digital Contracts": true,
        "Periodic Documentation Review": true,
        "Document Storage": true,
        "Updating Docs On Law Changes": true,
        "E-Signatures": true,
      },
      
    }
  }
];
