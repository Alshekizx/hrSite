import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-0 gap-10 bg-[var(--primary-100)]">
      <div className="flex flex-col gap-12 w-full pl-[2rem] pr-[2rem] lg:pr-0" >
        <h2 className="text-[var(--primary-color)]">
          Your 
          {" "}  
          <span className="text-[var(--accent-color)]" style={{color:""}}>Trusted Partner</span>
           {" "}for Reliable HR Support
         
        </h2>
        <p className="text-[var(--text-muted)]">
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
            {/* 4 full stars + 1 half star (for 4.7) */}
            {[1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="w-5 h-5 fill-current" />
            ))}
            <StarIcon className="w-5 h-5 fill-current text-yellow-300" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            <span className="ml-2 text-[var(--text-dark)] font-medium">4.7</span>
          </div>
          <span className="text-sm text-[var(--text-muted)]">Based on 1,000 Reviews</span>
        </div>
      </div>

        <div className="flex gap-4">
          <button className="button">Speak to an expert</button>
          <button className="inverseButton">View Services and Pricing</button>
        </div>
      </div>

      {/* Fixed height to allow Image fill to work correctly */}
    <div className="w-full ">
      <Image
        src="/images/hrPc.png"
        alt="Team Hero Pic"
        width={676} 
        height={670} 
        className="w-full h-auto "
        priority
      />
  </div>
    </div>
  );
}