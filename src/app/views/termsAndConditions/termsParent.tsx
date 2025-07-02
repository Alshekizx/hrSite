'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

import HeroSection from "../../components/ourHrServiceComponent/heroSection";

const navLinks = [
  { name: "Terms Of Service", href: "/views/termsAndConditions" },
  { name: "Privacy Policy", href: "/views/termsAndConditions/privacyPolicy" },
  { name: "Data Protection", href: "/views/termsAndConditions/dataProtection" },
  { name: "Data Processing Statement", href: "/views/termsAndConditions/dataProcessingStatement" },
];

export default function TermParent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-10">
      <HeroSection
              title="Terms and Privacy"
              description=""
              breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Terms and Privacy' },
              ]}
            />

      {/* Navigation Links */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 ">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href ? "button" : "inverseButton"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Page Content */}
      <div className="">
        {children}
      </div>
    </div>
  );
}
