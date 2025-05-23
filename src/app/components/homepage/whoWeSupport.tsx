import Image from "next/image";

export default function WhoWeSupport() {
  return (
    <div className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-10 px-4 py-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/3">
        <Image
          src="/images/whoWeSupport.png"
          alt="Who We Support"
          width={400}
          height={300}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3">
        <h3 className="text-[var(--primary-color)] text-2xl font-semibold mb-4">
          Who We Support
        </h3>
        <p className="text-[var(--text-muted)] leading-relaxed text-base">
          We specialize in providing{" "}
          <span className="text-[var(--primary-color)]">
            cost-effective HR software
          </span>{" "}
          and{" "}
          <span className="text-[var(--primary-color)]">
            advisory services
          </span>{" "}
          tailored specifically for small businesses. Our intuitive workforce
          management solutions simplify HR processes, ensuring compliance and
          operational efficiency.
        </p>
        <p className="text-[var(--text-muted)] leading-relaxed mt-4 text-base">
          For small Irish businesses with 1 to 50 employees, our expert
          consultants offer hands-on support to address HR challenges and stay
          legally compliant. We are committed to empowering small businesses
          with customised HR solutions that foster growth and sustainability.
        </p>
      </div>
    </div>
  );
}