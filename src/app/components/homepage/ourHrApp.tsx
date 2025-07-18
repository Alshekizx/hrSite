import Image from "next/image";
import Link from "next/link";

export default function OuHrApps() {
  return (
    <div className="containerDiv flex flex-col items-center justify-center relative" style={{ minHeight: '100vh' }}>
      <div className="flex flex-col lg:flex-row bg-[var(--primary-color)] w-full px-10 rounded-lg  text-white card-texture-bg ">

  {/* Text Section */}
  <div className="w-full md:w-2/3 flex flex-col gap-6 justify-center py-6 sm:py-10">
    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Our HR App</h3>
    <p className="text-sm sm:text-base lg:text-lg text-white" style={{fontSize:'22px'}}>
     Our all-in-one HR app simplifies workforce management with tools for scheduling, time tracking, leave, expenses, and recruitment—built to support both full-time and locum teams while staying compliant with Irish employment laws.
    </p>
    <div className="flex space-x-4">
  <Link href="#" className="">
    <div className="relative w-full ">
      <Image
        src="/images/GooglePlay.png"
        alt="Google Play"
        width={231}
        height={66}
        className="w-full h-auto"
      />
    </div>
  </Link>
  <Link href="#" className="">
    <div className="relative w-full">
      <Image
        src="/images/Apple.png"
        alt="Apple Store"
        width={231}
        height={66}
        className="w-full h-auto"
      />
    </div>
  </Link>
</div>
    </div>

  {/* Image Section */}
  <div className="absolute hidden md:flex flex-col justify-center items-center w-1/3 h-[100%]   right-16 top-0 ">
    <Image
      src="/images/iPhone16Pro.png"
      alt="Other Recruitment Solutions"
      height={700}
      width={550}
      className="object-cover w-full h-auto"
      priority
    />
  </div>

</div>
    </div>
  );
}