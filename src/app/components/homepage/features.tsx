'use client';
import { useState } from 'react';
import { 
  ClockIcon,
  MapPinIcon,
  AdjustmentsHorizontalIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  BriefcaseIcon,
  InboxIcon,
  UserCircleIcon,
  PencilSquareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const featureData = {
  'Attendance Management': {
    title: 'Smart Attendance Management',
    description:
      'Easily track attendance with our Smart Attendance Management system—ensuring accuracy, preventing time theft, and streamlining workforce monitoring in real time.',
    features: [
      {
        icon: ClockIcon,
        title: 'Mobile Clock-In & Clock-Out',
        desc: 'Employees can check in and out using the mobile app with real-time tracking.',
      },
      {
        icon: AdjustmentsHorizontalIcon,
        title: 'Shift-Based Tracking',
        desc: 'Manage attendance for different shifts and flexible work schedules.',
      },
      {
        icon: MapPinIcon,
        title: 'GPS & Geofencing',
        desc: 'Restrict clock-ins to designated locations to prevent unauthorized remote check-ins.',
      },
      {
        icon: ChartBarIcon,
        title: 'Detailed Attendance Reports',
        desc: 'Generate insights on employee punctuality, overtime, and attendance trends.',
      },
    ],
  },

  'Employee Expense Tracker': {
    title: 'Employee Expense Tracker',
    description:
      'Simplify expense reporting and reimbursement with our Employee Expense Tracker—designed to improve accuracy, transparency, and financial control for HR and finance teams.',
    features: [
      {
        icon: InboxIcon,
        title: 'Easy Submission',
        desc: 'Employees can submit expenses directly through the app with receipts attached.',
      },
      {
        icon: CheckCircleIcon,
        title: 'Approval Workflow',
        desc: 'Built-in approval flow to streamline and monitor reimbursements.',
      },
      {
        icon: AdjustmentsHorizontalIcon,
        title: 'Category-Based Tracking',
        desc: 'Track expenses by type (e.g., travel, meals, supplies) for better reporting.',
      },
      {
        icon: ChartBarIcon,
        title: 'Real-Time Oversight',
        desc: 'Gain visibility into spending trends, limits, and policy compliance.',
      },
    ],
  },

  'Rotas & Leave Management': {
    title: 'Rotas & Leave Management',
    description:
      'Plan smarter and keep your team informed with our dynamic Rotas & Leave Management system designed to reduce scheduling conflicts, simplify time-off tracking, and keep operations running smoothly.',
    features: [
      {
        icon: CalendarDaysIcon,
        title: 'Smart Shift Scheduling',
        desc: 'Create, assign, and update employee shifts with ease—daily, weekly, or monthly.',
      },
      {
        icon: UserGroupIcon,
        title: 'Real-Time Availability',
        desc: 'See who’s available or off helping managers make better staffing decisions.',
      },
      {
        icon: CheckCircleIcon,
        title: 'Leave Requests & Approvals',
        desc: 'Employees can request time off (sick, annual, TOIL, etc.) with built-in approval workflows.',
      },
      {
        icon: CalendarDaysIcon,
        title: 'Integrated Calendar View',
        desc: 'Visualize shifts and leave in one clear calendar for improved planning.',
      },
    ],
  },

  'Manage Cashflow': {
    title: 'Cashflow Management',
    description:
      'Gain full visibility and control over your workforce expenses with our streamlined Cashflow Management tools helping you track, plan, and optimize spending with ease.',
    features: [
      {
        icon: CurrencyDollarIcon,
        title: 'Expense Tracking',
        desc: 'Employees can submit work-related expenses directly through the app for faster approvals and reimbursements.',
      },
      {
        icon: ChartBarIcon,
        title: 'Automated Reports',
        desc: 'View real-time summaries of spending trends and department costs.',
      },
      {
        icon: AdjustmentsHorizontalIcon,
        title: 'Budget Monitoring',
        desc: 'Set limits and monitor team budgets to prevent overspending and support financial planning.',
      },
      {
        icon: DocumentTextIcon,
        title: 'Exportable Data',
        desc: 'Easily download reports for accounting, audits, or payroll integration.',
      },
    ],
  },

  'Manage Job Vacancies': {
    title: 'Job Vacancy Management',
    description:
      'Simplify recruitment with our centralized Job Vacancy Management system helping you post roles, track applications, and streamline the entire hiring process from one platform.',
    features: [
      {
        icon: BriefcaseIcon,
        title: 'Multi-Channel Job Posting',
        desc: 'Publish vacancies directly to your career page and connected job boards in one click.',
      },
      {
        icon: AdjustmentsHorizontalIcon,
        title: 'Role-Based Filtering',
        desc: 'Easily organize applications by department, job type, or location.',
      },
      {
        icon: InboxIcon,
        title: 'Application Tracking',
        desc: 'Monitor candidate progress from application to interview and final decision.',
      },
      {
        icon: UserCircleIcon,
        title: 'Candidate Database',
        desc: 'Build and manage a searchable talent pool for current and future openings.',
      },
    ],
  },

  'Manage Job Candidates': {
    title: 'Candidate Management',
    description:
      'Simplify recruitment with a centralized system to track, organize, and manage job applicants—making hiring faster, smarter, and more efficient.',
    features: [
      {
        icon: UserCircleIcon,
        title: 'Candidate Profiles',
        desc: 'Keep all applicant information, resumes, and communication organized in one centralized view.',
      },
      {
        icon: CalendarDaysIcon,
        title: 'Interview Scheduling',
        desc: 'Schedule and manage interviews with automated reminders.',
      },
      {
        icon: CheckCircleIcon,
        title: 'Application Tracking',
        desc: 'Monitor each candidate’s progress through custom recruitment stages.',
      },
      {
        icon: PencilSquareIcon,
        title: 'Rating & Feedback',
        desc: 'Collaborate with your team by rating applicants and leaving internal notes.',
      },
    ],
  },
} as const;
type FeatureKey = keyof typeof featureData;

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey>('Attendance Management');
const currentData = featureData[selectedFeature];
  return (
    <div className="containerDiv flex flex-col items-center px-4 md:px-8">
      {/* Header */}
      <div className="text-center w-full max-w-[800px] mb-12">
        <h3 className="text-[var(--primary-color)] text-2xl font-bold">Features</h3>
        <p className="text-base text-[var(--text-muted)]">
          From shift scheduling to time tracking and leave management, our features help HR teams and employees stay organized, efficient, and compliant.
        </p>
      </div>

      {/* Feature Section */}
      <div className="w-full relative flex flex-col md:flex-row md:space-x-6">
        {/* Mobile Dropdown */}
        <div className="md:hidden w-full mb-4">
          <select
            className="w-full p-2 border rounded-md text-sm text-[var(--primary-color)] font-semibold"
            value={selectedFeature}
           onChange={(e) => setSelectedFeature(e.target.value as FeatureKey)}
          >
            {Object.keys(featureData).map((feature) => (
              <option key={feature} value={feature}>
                {feature}
              </option>
            ))}
          </select>
        </div>

        {/* Sidebar */}
        <div className="hidden md:block absolute top-0 left-0 w-full md:w-[90%] h-ful min-h-[350px] l z-0">
            <div className="bg-[var(--primary-color)] text-white px-6 py-10 space-y-4 text-sm font-medium rounded-[20px] h-full">
            <div className='w-[25%] flex flex-col items-start gap-4'>
            {Object.keys(featureData).map((feature) => (
          <button
            key={feature}
            onClick={() => setSelectedFeature(feature as FeatureKey)}
            className={`flex text-start items-start space-x-2 ${
              selectedFeature === feature ? 'font-bold' : ''
            }`}
          >
            {selectedFeature === feature && <span>➜</span>}
            <p>{feature}</p>
          </button>
        ))}
            </div>
            </div>
        </div>

        {/* Content Area */}
        <div className="relative top-10 z-10 bg-[var(--header-color)] p-6 md:p-10 w-full md:ml-[25%] md:w-[75%] rounded-[20px] min-h-[350px]">
          <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
            {currentData.title}
          </h3>
          <p className="text-[var(--text-muted)] text-sm mb-6">
            {currentData.description}
          </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentData.features.map((feat, index) => (
                <div key={index} className="flex items-start space-x-1">
                  <div className="w-10 h-10 flex items-start justify-center shrink-0">
                    <feat.icon className="w-6 h-6 text-[var(--primary-color)]" />
                  </div>
                  <div>
                    <p className="text-[var(--text-dark)]">
                      <strong className="font-medium text-[var(--primary-color)]">
                        {feat.title}
                      </strong>{" "}
                      - {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

      </div>
    </div>
  );
}