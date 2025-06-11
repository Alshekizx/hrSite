"use client";
import { useRef, useState } from "react";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SectorsWeCover() {
  const cardWidth = 350;
  const scrollRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      title: "Retail",
      details:
        "We help retail businesses with compliant contracts, shift scheduling, and employee concerns.",
      bgImage: "/images/retail.jpg",
      link: "/sectors/retail",
    },
    {
      title: "Professional Services",
      details:
        "We help professional service businesses with HR strategy, recruitment, and legal compliance.",
      bgImage: "/images/hospitality.jpg",
      link: "/sectors/professional-services",
    },
    {
      title: "Tech Startups & SMEs",
      details:
        "We support tech startups with agile HR practices and recruitment tailored for fast growth.",
      bgImage: "/images/healthcare.jpg",
      link: "/sectors/tech-startups",
    },
    {
      title: "Education",
      details:
        "We provide comprehensive HR services for the education sector, including recruitment and staff development.",
      bgImage: "/images/education.jpg",
      link: "/sectors/education",
    },
    {
      title: "Construction",
      details:
        "We support construction firms with skilled staffing, contract compliance, and shift planning.",
      bgImage: "/images/construction.jpg",
      link: "/sectors/construction",
    },
    {
      title: "Healthcare",
      details:
        "We help healthcare businesses with compliant contracts, shift scheduling, and employee concerns.",
      bgImage: "/images/tech.jpg",
      link: "/sectors/healthcare",
    },
    {
      title: "Logistics & Transport",
      details:
        "We optimize logistics and transport businesses with efficient workforce management.",
      bgImage: "/images/logistics.jpg",
      link: "/sectors/logistics",
    },
    {
      title: "Nonprofits & NGOs",
      details:
        "We help nonprofit organizations & NGOs with compliant contracts, shift scheduling, and HR support.",
      bgImage: "/images/finance.jpg",
      link: "/sectors/nonprofits",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    let newIndex = selectedIndex;
    if (direction === "left") {
      newIndex = (selectedIndex - 1 + services.length) % services.length;
    } else if (direction === "right") {
      newIndex = (selectedIndex + 1) % services.length;
    }

    setSelectedIndex(newIndex);

    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-16 py-20 text-white">
      <div className="relative z-10 text-center w-full max-w-[800px]">
        <h3 className="text-[var(--primary-color)] text-2xl font-bold">
          Sectors We Cover
        </h3>
        <p className="text-[var(--text-dark)] mt-2">
          We provide expert HR services to a wide range of sectors. Our tailored
          solutions meet the unique needs of each industry, ensuring compliance
          and smooth operations.
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex top-1/2 left-0 right-0 absolute z-20 justify-between items-center mb-6 px-4">
          <button
            onClick={() => scroll("left")}
            className="bg-white/20 p-2 rounded-full hover:bg-white/30"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white/20 p-2 rounded-full hover:bg-white/30"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: `url(${services[selectedIndex].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <h1 className="absolute top-10 left-10 " style={{color:"#ffffff99" }}>Industries</h1>
          <div
            ref={scrollRef}
            className="relative flex w-full z-10"
            style={{
              overflowX: "hidden",
              scrollBehavior: "smooth",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ease-in-out min-w-[350px] h-[90vh] p-6 border ${
                  index === selectedIndex
                    ? "border-[var(--primary-color)]"
                    : "border-white/20"
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                  scrollRef.current?.scrollTo({
                    left: index * cardWidth,
                    behavior: "smooth",
                  });
                }}
              >
                <div className="flex flex-col h-full justify-end items-start text-start">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  {index === selectedIndex && (
                    <>
                      <p className="text-sm max-w-[300px]">
                        {service.details}
                      </p>
                      <Link
                        href={service.link}
                        className="mt-2 flex items-center gap-2 text-[var(--primary-400)] hover:underline"
                      >
                        <h3 >
                          Learn more
                        </h3>
                        <ArrowRightIcon className="h-7 w-7" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}