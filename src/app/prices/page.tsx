"use client";

import { JSX, useState } from "react";
import HeroSection from "../components/ourHrServiceComponent/heroSection";
import { pricingPlans, PricingPlan, featureDetails } from "./priceData";
import { CheckCircleIcon, XCircleIcon,InformationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const getIcon = (enabled: boolean) => {
  return enabled ? (
    <CheckCircleIcon className="h-5 w-5 text-[var(--secondary-color)] mx-auto" />
  ) : (
    <XCircleIcon className="hidden h-5 w-5 text-red-400 mx-auto" />
  );
};


const getFeatureStatus = (
  planName: string,
  section: keyof PricingPlan["features"],
  feature: string
): boolean => {
  const plan = pricingPlans.find(p => p.name.toUpperCase() === planName.toUpperCase());
  const featureGroup = plan?.features?.[section];

  return featureGroup?.[feature as keyof typeof featureGroup] ?? false;
};


const PricesPage = () => {
  const [expandedPlans, setExpandedPlans] = useState<Record<number, boolean>>({});
  const [openDropdownFeature, setOpenDropdownFeature] = useState<string | null>(null);
  const [showFeatureComparison, setShowFeatureComparison] = useState(false);
  
   const toggleExpand = (index: number) => {
    setExpandedPlans((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="pt-10 flex flex-col items-center">
      <HeroSection
        title="Our Prices"
        description="tips on recruitment and shift-based workforce management for HR teams, locum workers, and business leaders."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Prices' },
        ]}
      />

      <div className="containerDiv">
        <div className="text-center mb-14">
          <p className="text-[var(--primary-color)] text-sm mb-4">
            Let us know the number of your employees to get an estimates cost
          </p>

          <div className="flex justify-center">
            <div className="flex overflow-hidden rounded-full border border-[var(--secondary-300)]">
              <input
                type="number"
                placeholder="Enter number of employee"
                className="px-4 py-2 text-sm outline-none w-60 placeholder:text-gray-400"
              />
              <button className="button">
                View Price
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => {
            const isExpanded = expandedPlans[index] || false;

            const featureList: JSX.Element[] = [];
            Object.entries(plan.features).forEach(([sectionKey, sectionValue]) => {
              if (!sectionValue) return;
              Object.entries(sectionValue).forEach(([featureKey, enabled]) => {
                if (enabled) {
                  featureList.push(
                    <li key={`${sectionKey}-${featureKey}`} className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-1 text-[var(--primary--color)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {featureKey}
                    </li>
                  );
                }
              });
            });

            return (
              <div
                key={index}
                className="rounded-xl border border-blue-500 p-6 flex flex-col justify-between bg-white shadow-sm"
              >
                <div>
                  <p className="font-bold text-[var(--text-dark)] mb-1 uppercase">{plan.name}</p>
                  <span className="text-sm font-normal text-[var(--primary--color)] ">{plan.description}</span>

                  <div className="flex flex-row justify-start items-end gap-2 mt-2">
                    <div>
                      <span>from</span>
                      <h3 className="text-3xl font-bold text-[var(--primary-color)] mb-1">
                        {plan.price}
                      </h3>
                    </div>
                    <div className="flex flex-col">
                      <span>{plan.billing}</span>
                      <span>(excl. VAT)</span>
                    </div>
                  </div>

                  <div className="mt-4 mb-4 space-y-2">
                    <label className="flex items-center space-x-2 text-sm text-[var(--primary-color)]">
                      <input type="checkbox" className="accent-[var(--primary--color)]" />
                      <span>Finance Software</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-[var(--primary-color)]">
                      <input type="checkbox" className="accent-[var(--primary--color)]" defaultChecked />
                      <span>Recruitment Software</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-[var(--primary-color)]">
                      <input type="checkbox" className="accent-[var(--primary--color)]" />
                      <span>Business Software</span>
                    </label>
                  </div>

                  <hr/>

                  <p className="text-[var(--primary-color)] text-center text-sm font-semibold mt-4 mb-2">{plan.category}</p>
                  <span className="my-2">Features Include:</span>

                  <ul className="space-y-2 text-sm text-[var(--primary-color)] mb-4">
                    {isExpanded ? featureList : featureList.slice(0, 7)}
                  </ul>

                  {featureList.length > 7 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-[var(--primary--color)] text-sm font-semibold flex items-center"
                    >
                      {isExpanded ? "Show Less" : "More"}
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.354a.75.75 0 111.02 1.1l-4.25 3.84a.75.75 0 01-1.02 0l-4.25-3.84a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <button className="w-full py-2 text-center rounded-md font-semibold bg-[var(--primary-color)] text-white">
                    {plan.actions.quoteButton}
                  </button>
                  <button className="w-full py-2 text-center rounded-md font-semibold border border-[var(--primary-color)] text-[var(--primary-color)]">
                    {plan.actions.demoButton}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
 

  <div className="mt-16">
  <div className=" flex flex-col items-center text-center mb-6">
    <button
  onClick={() => setShowFeatureComparison((prev) => !prev)}
  className="text-[var(--primary-color)] font-semibold border border-[var(--primary-color)] rounded-full px-4 py-1 flex items-center gap-2"
>
  {showFeatureComparison ? "Hide Feature Comparison" : "Complete Features Comparison"}
  {showFeatureComparison ? (
    <ChevronUpIcon className="h-4 w-4 text-[var(--primary-color)]" />
  ) : (
    <ChevronDownIcon className="h-4 w-4 text-[var(--primary-color)]" />
  )}
</button>
  </div>

          
          {showFeatureComparison && (
  <div className="overflow-x-auto">
    <FeatureTable
      sectionTitle="HR Software"
      features={[
        "Document Storage",
        "Employee Management",
        "Geo-Fence Clock-In",
        "Employee SelfService",
        "HR Mobile App",
        "Overtime Tracking Tool",
        "Performance Management",
        "Goal Tracking",
        "Digital Rotas",
        "Shift Scheduling",
        "Leave Management",
        "Attendance Management",
        "Holiday Scheduling"
      ]}
      sectionKey="hrSoftware"
      openDropdownFeature={openDropdownFeature}
      setOpenDropdownFeature={setOpenDropdownFeature}
    />

    <FeatureTable
      sectionTitle="HR Support"
      features={[
        "HR Support Tickets",
        "Employment LawAdvice",
        "Digital Hr Documents",
        "HR Audits",
        "HR Documentation Support",
        "HR Policy Development",
        "Unlimited Digital Contracts",
        "Periodic Documentation Review",
        "Document Storage",
        "Updating Docs On Law Changes",
        "E-Signatures"
      ]}
      sectionKey="hrSupport"
      openDropdownFeature={openDropdownFeature}
      setOpenDropdownFeature={setOpenDropdownFeature}
    />

    <FeatureTable
      sectionTitle="HR Software & HR Support"
      features={[
        "Employee Relations Support",
        "Labour Inspections Support",
        "Job Analysis Description",
        "Final Stage Interviewing",
        "Hiring Manager Training",
        "Offer Management",
        "Onboarding Coordination",
        "All CoreFeatures",
        "All Essential Features"
      ]}
      sectionKey="hrSoftwareSupport"
      openDropdownFeature={openDropdownFeature}
      setOpenDropdownFeature={setOpenDropdownFeature}
    />
  </div>
)}
</div>

      </div>
    </section>
  );
};

export default PricesPage;

interface FeatureTableProps {
  sectionTitle: string;
  features: string[];
  sectionKey: keyof PricingPlan["features"];
  openDropdownFeature: string | null;
  setOpenDropdownFeature: React.Dispatch<React.SetStateAction<string | null>>;
}

const FeatureTable: React.FC<FeatureTableProps> = ({
  sectionTitle,
  features,
  sectionKey,
  openDropdownFeature,
  setOpenDropdownFeature,
}) => (
  <table className="min-w-full border-collapse border border-gray-200 text-sm">
    <thead>
      <tr className="bg-gray-100 text-[var(--primary-color)] text-center">
        <th className="p-3 w-1/4 text-left">{sectionTitle}</th>
        <th></th>
        <th className="p-3 w-1/4">CORE</th>
        <th className="p-3 w-1/4">ESSENTIALS</th>
        <th className="p-3 w-1/4">ADVANCED</th>
      </tr>
    </thead>
    <tbody className="text-center text-gray-700">
      {features.map((feature, idx) => (
        <React.Fragment key={idx}>
          <tr className="border-t border-gray-200">
            <td className="text-left p-3">{feature}</td>
            <td>
              <button
                onClick={() =>
                  setOpenDropdownFeature(prev =>
                    prev === feature ? null : feature
                  )
                }
              >
                <InformationCircleIcon className="h-5 w-5 text-[var(--secondary-color)]" />
              </button>
            </td>
            <td>{getIcon(getFeatureStatus("CORE", sectionKey, feature))}</td>
            <td>{getIcon(getFeatureStatus("ESSENTIALS", sectionKey, feature))}</td>
            <td>{getIcon(getFeatureStatus("ADVANCED", sectionKey, feature))}</td>
          </tr>
          {openDropdownFeature === feature && (
            <tr>
              <td
                colSpan={5}
                className="bg-gray-50 p-3 text-left text-sm text-gray-700 border-t border-b border-gray-200"
              >
                <span className="block">
                 {featureDetails[sectionKey]?.[feature] || "No details available."}
                </span>
              </td>
            </tr>
          )}
        </React.Fragment>
      ))}
    </tbody>
  </table>
);



