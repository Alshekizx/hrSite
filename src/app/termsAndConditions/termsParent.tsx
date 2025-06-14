'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Terms Of Service", href: "/termsAndConditions" },
  { name: "Privacy Policy", href: "/termsAndConditions/privacyPolicy" },
  { name: "Data Protection", href: "/termsAndConditions/dataProtection" },
  { name: "Data Processing Statement", href: "/termsAndConditions/dataProcessingStatement" },
];

export default function TermParent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[var(--primary-color)] relative w-full flex flex-col items-center justify-center h-80 text-white mb-10 card-texture-bg">
        <div className="absolute top-16 left-6 flex items-center gap-1 text-sm">
          <Link href="/" className="underline hover:text-gray-300">Home</Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span>Terms and Privacy</span>
        </div>
        <h4 className="text-3xl font-bold text-center">Terms and Privacy</h4>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 mb-10">
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
      <div>
        {children}
      </div>
    </div>
  );
}
