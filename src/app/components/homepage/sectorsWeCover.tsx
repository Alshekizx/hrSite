"use client";
import { useRef, useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import { services } from "@/app/views/industries/sectorData";

export default function SectorsWeCover() {
  const cardWidth = 350;
  const scrollRef = useRef<HTMLDivElement>(null);
  

  const [selectedIndex, setSelectedIndex] = useState(0);

const scroll = (direction: "left" | "right") => {
  const container = scrollRef.current;
  if (!container) return;

  let newIndex = selectedIndex;

  if (direction === "left") {
    newIndex = newIndex === 0 ? services.length - 1 : newIndex - 1;
  } else {
    newIndex++;
  }

  // If we've moved into the clones, snap back to beginning
  if (newIndex >= services.length) {
    // Scroll to clone first (smooth)
    setSelectedIndex(newIndex);
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });

    // Then jump back to original first card (instant)
    setTimeout(() => {
      container.scrollTo({ left: 0, behavior: "instant" });
      setSelectedIndex(0);
    }, 300); // match scroll animation duration
  } else {
    setSelectedIndex(newIndex);
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  }
};




  const extendedServices = [...services, ...services.slice(0, 3)];

  return (
    <div className="relative flex flex-col items-center justify-center gap-16  text-white ">
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
        <div className="flex top-4/10 left-0 right-0 absolute z-20 justify-between items-center mb-6 px-4">
          <button
            onClick={() => scroll("left")}
            
          >
            <ArrowLeftIcon className="h-10 w-10 text-white/50 hover:text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            
          >
            <ArrowRightIcon className="h-10 w-10 text-white/50 hover:text-white" />
          </button>
        </div>

        <div
          className="relative overflow-hidden "
          style={{
            backgroundImage: `url(${extendedServices[selectedIndex]?.bgImage || ''})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <h1  className="absolute top-10 left-10 z-30  " style={{color:"#ffffffbb", fontWeight:'bold', fontSize:'94px' }}>Industries</h1>
          <div
            ref={scrollRef}
            className="relative scrollbar-hide  flex w-full z-10 "
            style={{
              overflowX: "auto",
              scrollBehavior: "smooth",
            }}
          >
            {extendedServices.map((service, index) => {
  const isCloned = index >= services.length;
  return (
    <div
      key={index}
      className={`min-w-[350px] h-[110vh] py-6 px-6 lg:px-10 border transition-all duration-300 ease-in-out ${
        index === selectedIndex
          ? "bg-black/70 border-white/20"
          : "bg-transparent border-white/20"
      } ${isCloned ? " cursor-pointer" : "cursor-pointer"}`}
     onClick={() => {
      const isClone = index >= services.length;
      const actualIndex = isClone ? index - services.length : index;

      setSelectedIndex(actualIndex);
      scrollRef.current?.scrollTo({
        left: actualIndex * cardWidth,
        behavior: "smooth",
      });
    }}
    >
      <div className="flex flex-col h-full justify-end  gap-6 items-start text-start pb-10">
                  <h2 className=" font-bold mb-1" style={{color:'white'}}>
                    {service.title}
                  </h2>
                  {index === selectedIndex && (
                    <>
                      <p className="text-sm max-w-[300px]">
                        {service.details}
                      </p>
                      <Link
                        href={`/views/industries/${service.slug}`}
                        className="mt-1 flex items-center gap-2 text-[var(--primary-300)] hover:underline"
                      >
                        <h3>Learn more</h3>
                        <ArrowRightIcon className="h-7 w-7" />
                      </Link>
                    </>
                  )}
                </div>
    </div>
  );
})}

          </div>
        </div>
      </div>
    </div>
  );
}