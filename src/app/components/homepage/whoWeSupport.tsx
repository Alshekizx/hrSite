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
    <div className="">
      <div className="containerDiv flex flex-col lg:flex-row items-stretch justify-between gap-10">
      
      {/* Image Section */}
      <div className="w-full lg:w-4/10">
        <div className=" rounded-lg  justify-center items-center w-full h-70 lg:h-full overflow-hidden">
          <Image
            src="/images/whoWeSupport.png"
            alt="Who We Support"
            width={474}
            height={487}
            className=" h-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-6/10 flex flex-col">
        <div style={{lineHeight:'1'}}>
          <h3 className="text-[var(--primary-color)]  font-bold mb-4">
            Who We Support
          </h3>
          <p className="text-[var(--text-dark)] leading-relaxed text-base mb-3">
            We specialise in supporting small businesses and growing teams that need 
            expert HR guidance without the cost or complexity of an in-house HR department.
          </p>
          <p className="text-[var(--text-dark)] leading-relaxed text-base mb-3">
            Whether you&apos;re a startup navigating your first hires or an established SME
            looking to stay compliant and build a great workplace culture, we&apos;re here to help.
          </p>

          <p className="mb-3">We support:</p>

          <ul className="space-y-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-[var(--primary-600)]" />
                <span style={{fontSize:'19px'}} className="text-[var(--primary-color)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[var(--text-muted)] leading-relaxed mt-3 text-base">
          We act as your trusted HR partner, offering support tailored to your needs. 
          From contracts and handbooks to employee relations, absence management, 
          performance issues, and compliance, we ensure you&apos;re protected and proactive.
        </p>
      </div>
    </div>
    </div>
  );
}