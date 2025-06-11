"use client";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  "Small businesses or startups taking on employees for the first time",
  "Growing teams scaling from 2 to 50+ staff",
  "Non-HR professionals or employees needing expert advice",
  "Franchises and multi-site employers who need consistent HR advice",
];

export default function WhoWeSupport() {
  return (
    <div className="containerDiv flex flex-col lg:flex-row items-stretch justify-between gap-10">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/3 rounded-lg bg-black overflow-hidden">
        <div className="relative flex justify-center items-center w-full h-70 lg:h-full">
          <Image
            src="/images/whoWeSupport.png"
            alt="Who We Support"
            fill
            className="object-cover h-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-[var(--primary-color)] text-2xl font-semibold mb-4">
            Who We Support
          </h3>
          <p className="text-[var(--text-muted)] leading-relaxed text-base mb-6">
            We specialise in supporting small businesses and growing teams that need 
            expert HR guidance without the cost or complexity of an in-house HR department.
            Whether you&apos;re a startup navigating your first hires or an established SME 
            looking to stay compliant and build a great workplace culture, we&apos;re here to help.
          </p>

          <p className="mb-4">We support:</p>

          <ul className="space-y-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-[var(--primary-color)]" />
                <span className="text-[var(--primary-color)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[var(--text-muted)] leading-relaxed mt-6 text-base">
          We act as your trusted HR partner, offering support tailored to your needs. 
          From contracts and handbooks to employee relations, absence management, 
          performance issues, and compliance, we ensure you&apos;re protected and proactive.
        </p>
      </div>
    </div>
  );
}