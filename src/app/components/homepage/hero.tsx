import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col w-full py-50  items-center bg-[#04469F0A]">
      <div className="max-w-[1400px] flex flex-col lg:flex-row items-center  gap-6 ">
      <div className=" flex flex-col gap-6 w-full pl-[2rem] lg:pl-[5rem] pr-[2rem]" >
        <h2 className="text-[var(--primary-color)] font-[600]">
          Your 
          {" "}  
          <span className="text-[var(--accent-color)]" style={{color:""}}>Trusted Partner</span>
           {" "}for Reliable HR Support
         
        </h2>
        <p style={{fontSize:'27px'}} className="text-[var(--text-dark)]">
          From compliance to employee relations, 
          we provide expert HR services designed to keep Irish businesses protected.
        </p>

        <div className="flex items-start gap-3">
  {/* Google G icon */}
 <div className="w-16 h-16 flex items-center justify-center ">
    <Image
      src="/images/google-g.png"
      alt="Google G"
      width={100}
      height={100}
      className="object-contain"
    />
  </div>

  {/* Rating Info */}
        <div className="flex flex-col">
          <span className="font-semibold text-[var(--text-dark)]">Google Rating</span>
          <div className="flex items-center gap-1 text-yellow-400">
            <span className=" text-yellow-300 font-medium">4.7</span>
            {/* 4 full stars + 1 half star (for 4.7) */}
            {[1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="w-5 h-5 fill-current" />
            ))}
            <StarIcon className="w-5 h-5 fill-current text-yellow-300" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            
          </div>
          <span className="text-sm text-[var(--text-muted)]">Based on 1,000 Reviews</span>
        </div>
      </div>

        <div className="flex gap-4">
          <Link className="button" href='/views/contactUs'>Speak to an expert</Link>
          <Link href='/views/prices' className="inverseButton">View Services and Pricing</Link>
        </div>
      </div>

      {/* Fixed height to allow Image fill to work correctly */}
    <div className="w-full h-full lg:static md:relative ">
      <Image
        src="/images/hrPc.png"
        alt="Team Hero Pic"
        width={676} 
        height={670} 
        className="lg:absolute right-0 top-[5%] w-full lg:w-[50%]   object-contain h-full "
        priority
      />
  </div>
    </div>
    </div>
  );
}