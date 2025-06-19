"use client";

import { JSX, useState } from "react";
import HeroSection from "../components/ourHrServiceComponent/heroSection";
import { pricingPlans, PricingPlan, featureDetails } from "./priceData";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const getIcon = (enabled: boolean) => {
  return enabled ? (
    <CheckCircleIcon className="h-5 w-5 text-[var(--secondary-color)] mx-auto" />
  ) : (
    <XCircleIcon className="hidden h-5 w-5 text-red-400 mx-auto" />
  );
};

const highlightKeywords = (text: string) => {
  const keywords = ["Core", "Essential"];

  // Replace each keyword with bold version using a case-insensitive regex
  keywords.forEach((word) => {
    const pattern = new RegExp(`(${word})`, 'gi');
    text = text.replace(pattern, '<strong>$1</strong>');
  });

  return text;
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

const getBaseFeatures = (): Set<string> => {
  const basePlans = pricingPlans.filter(plan => plan.name !== 'ADVANCED');
  const features = new Set<string>();

  basePlans.forEach(plan => {
    Object.values(plan.features).forEach(section => {
      Object.entries(section).forEach(([feature, enabled]) => {
        if (enabled) {
          features.add(feature);
        }
      });
    });
  });

  return features;
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
    <section className="flex flex-col items-center">
      <HeroSection
        title="Flexible Pricing for Smarter Workforce Management"
        description="All-in-one workforce management tailored to fit. Get powerful tools, expert support, and a custom quote that suits your business."
        
      />

      <div className="containerDiv mt-10">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
          {pricingPlans.map((plan, index) => {
            const isExpanded = expandedPlans[index] || false;
            const baseFeatures = getBaseFeatures();

            const featureList: JSX.Element[] = [];
            Object.entries(plan.features).forEach(([sectionKey, sectionValue]) => {
              if (!sectionValue) return;
              Object.entries(sectionValue).forEach(([featureKey, enabled]) => {
                // Exclude if enabled in base plans and current plan is ADVANCED
                const isDuplicate = plan.name === 'ADVANCED' && baseFeatures.has(featureKey);
                if (enabled && !isDuplicate) {
                  featureList.push(
                    <li key={`${sectionKey}-${featureKey}`} className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-1 text-[var(--primary-color)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{fontSize:'20px'}} dangerouslySetInnerHTML={{ __html: highlightKeywords(featureKey) }} />
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
                <div className="flex flex-col items-start">
                <div className="flex flex-col items-start gap-6 h-30">
                  <span className="font-bold text-[var(--text-dark)] mb-1 uppercase" style={{fontSize:'20px'}}>{plan.name}</span>
                  <span className="text-sm font-normal text-[var(--primary--color)] ">{plan.description}</span>
                </div>
                  <div className="flex flex-col items-start mt-10">
                  
                      <span style={{fontSize:'14px'}}>From</span>
                     
                    <div className="flex flex-row items-center">
                        <h1 className="text-[var(--primary-color)]" style={{fontSize:'60px'}}>
                          {plan.price}
                        </h1>
                        <div className="flex flex-col">
                          <span style={{fontSize:'14px'}}>{plan.billing}</span>
                          <span style={{fontSize:'14px'}}>(excl. VAT)</span>
                      </div>
                    </div>
                    
                  </div>

                  <div className="mt-4 mb-4 space-y-2">
                    <label className="flex items-center space-x-2 text-sm text-[var(--text-dark)]">
                      <input type="checkbox" className="accent-[var(--primary--color)]" />
                      <span>Finance Software</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-[var(--text-dark)]">
                      <input type="checkbox" className="accent-[var(--primary--color)]" defaultChecked />
                      <span>Recruitment Software</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-[var(--text-dark)]">
                      <input type="checkbox" className="accent-[var(--primary--color)]" />
                      <span>Business Software</span>
                    </label>
                  </div>

                  <hr/>
                  

                  <p className="text-[var(--primary-color)] text-center text-sm font-semibold mt-4 mb-2">{plan.category}</p>
                  <p className="my-2">Features Include:</p>

                  <ul className="space-y-2 text-sm mt-2 text-[var(--text-dark)] mb-4">
                    {isExpanded ? featureList : featureList.slice(0, 7)}
                  </ul>

                  {featureList.length > 7 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-[var(--primary-500)]  text-sm font-semibold flex items-end"
                    >
                      <p>{isExpanded ? "Show Less" : "More"}</p>
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
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
                  <button className="button">
                    {plan.actions.quoteButton}
                  </button>
                  <button className="inverseButton">
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
  className="text-[var(--primary-600)] font-semibold border border-[var(--primary-100)] rounded-sm px-5 py-4 "
>
  <p className="flex flex-row items-center gap-2">{showFeatureComparison ? "Hide Feature Comparison" : "Complete Features Comparison"}
  {showFeatureComparison ? (
    <ChevronUpIcon className="h-8 w-8 text-[var(--primary-500)]" />
  ) : (
    <ChevronDownIcon className="h-8 w-8 text-[var(--primary-500)]" />
  )}</p>
</button>
  </div>

          
    {showFeatureComparison && (
      
  <div className="overflow-x-auto">
    <div className="flex flex-row items-center justify-between w-full px-10 my-10">

      <div className="flex flex-col opacity-0 items-center px-3 w-1/4 min-w-50">
        <span style={{fontSize:'20px'}}>noll</span>
      </div>
      <div className="flex flex-col opacity-0 items-center  min-w-20">
        <span style={{fontSize:'20px'}}>noll</span>
      </div>

      <div className="flex flex-col font-bold gap-2 items-center w-1/4 px-3 min-w-50">
        <span style={{fontSize:'20px'}}>CORE</span>
        <button className="inverseButton">Request Demo</button>
      </div>
      <div className="flex flex-col font-bold gap-2 items-center w-1/4 px-3 min-w-50">
        <span style={{fontSize:'20px'}}>ESSENTIALS</span>
        <button className="inverseButton">Request Demo</button>
      </div>
      <div className="flex flex-col font-bold gap-2 items-center w-1/4 px-3 min-w-50">
        <span style={{fontSize:'20px'}}>ADVANCED</span>
        <button className="inverseButton">Request Demo</button>
      </div>
    </div>
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
        <th className="p-3 w-1/4 min-w-50 text-left">{sectionTitle}</th>
        <th className="p-3 min-w-20"></th>
        <th className="p-3 min-w-50 w-1/4"></th>
        <th className="p-3 min-w-50 w-1/4"></th>
        <th className="p-3 min-w-50 w-1/4"></th>
      </tr>
    </thead>
    <tbody className="text-center text-gray-700">
      {features.map((feature, idx) => (
  <React.Fragment key={idx}>
    <tr className="border-t border-gray-200 relative">
      <td className="text-left p-3">{feature}</td>
      <td className="relative">
        <button
          onClick={() =>
            setOpenDropdownFeature(prev =>
              prev === feature ? null : feature
            )
          }
          className="relative"
        >
          <InformationCircleIcon className="h-5 w-5 text-[var(--secondary-color)]" />
        </button>

        {/* Small popup under the icon */}
        {openDropdownFeature === feature && (
          <div className="absolute z-10 left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white text-left text-sm text-gray-700 p-3 border border-gray-200 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[var(--primary-color)]">{feature}</span>
              <button
                onClick={() => setOpenDropdownFeature(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <span>
              {featureDetails[sectionKey]?.[feature] || "No details available."}
            </span>
          </div>
        )}
      </td>
      <td>{getIcon(getFeatureStatus("CORE", sectionKey, feature))}</td>
      <td>{getIcon(getFeatureStatus("ESSENTIALS", sectionKey, feature))}</td>
      <td>{getIcon(getFeatureStatus("ADVANCED", sectionKey, feature))}</td>
    </tr>
  </React.Fragment>
))}

    </tbody>
  </table>
);



