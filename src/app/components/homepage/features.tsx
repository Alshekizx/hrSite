'use client';
import { useState } from 'react';
import {
  ClockIcon,
  MapPinIcon,
  AdjustmentsHorizontalIcon,
  DocumentTextIcon,
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
        icon: DocumentTextIcon,
        title: 'Detailed Attendance Reports',
        desc: 'Generate insights on employee punctuality, overtime, and attendance trends.',
      },
    ],
  },
  'Employee Expense Tracker': {
    title: 'Employee Expense Tracker',
    description:
      'Track and manage employee expenses with real-time monitoring and approval workflows.',
    features: [
      {
        icon: DocumentTextIcon,
        title: 'Receipt Uploads',
        desc: 'Employees can upload receipts directly from their phones.',
      },
      {
        icon: ClockIcon,
        title: 'Real-Time Reimbursement',
        desc: 'Automated expense approvals and instant reimbursements.',
      },
    ],
  },
  'Rotas & Leave Management': {
    title: 'Rotas & Leave Management',
    description:
      'Plan shifts and manage leave requests with smart scheduling tools and visibility.',
    features: [
      {
        icon: AdjustmentsHorizontalIcon,
        title: 'Leave Calendar',
        desc: 'See who is on leave and plan shifts accordingly.',
      },
      {
        icon: DocumentTextIcon,
        title: 'Auto Approvals',
        desc: 'Configure rules for automatic leave approvals.',
      },
    ],
  },
  'Manage Cashflow': {
    title: 'Cashflow Management',
    description:
      'Visualize income and expenses to optimize budgeting and payroll.',
    features: [
      {
        icon: ClockIcon,
        title: 'Real-Time Insights',
        desc: 'Track cash inflows and outflows across departments.',
      },
      {
        icon: MapPinIcon,
        title: 'Custom Reports',
        desc: 'Generate detailed reports on financial performance.',
      },
    ],
  },
  'Manage Job Vacancies': {
    title: 'Job Vacancy Management',
    description:
      'Post and track job vacancies with integrated recruitment tools.',
    features: [
      {
        icon: DocumentTextIcon,
        title: 'Custom Job Boards',
        desc: 'Create and manage your own branded job listings.',
      },
    ],
  },
  'Manage Job Candidates': {
    title: 'Candidate Management',
    description:
      'Track candidate applications, schedule interviews, and manage hiring pipelines.',
    features: [
      {
        icon: MapPinIcon,
        title: 'Pipeline Tracking',
        desc: 'Visualize and move candidates through your recruitment process.',
      },
    ],
  },
}as const;
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
            <h4 className="text-xl font-semibold text-[var(--text-dark)] mb-2">
            {currentData.title}
            </h4>
            <p className="text-[var(--text-muted)] text-sm mb-6">{currentData.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentData.features.map((feat, index) => (
                <div key={index} className="flex items-start space-x-3">
                <feat.icon className="w-6 h-6 text-[var(--primary-color)]" />
                <div>
                    <p className="font-medium text-[var(--text-dark)]">{feat.title}</p>
                    <p className="text-sm text-[var(--text-muted)]">{feat.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}