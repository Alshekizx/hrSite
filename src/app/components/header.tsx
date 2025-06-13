'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  Bars3Icon,
  HomeIcon,
  ChevronRightIcon,
  ArrowDownRightIcon,
  ScaleIcon,
  DocumentTextIcon
} from '@heroicons/react/20/solid';

       

import { useAuth } from '../context/authContext';

import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [isHrDropdownOpen, setIsHrDropdownOpen] = useState(false);
  const hrDropdownRef = useRef<HTMLDivElement | null>(null);

 const { isLoggedIn, logout } = useAuth();


  // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
          ) {
            setIsDropdownOpen(false);
          }

          if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target as Node)
          ) {
            setIsMobileMenuOpen(false);
          }

          if (
            hrDropdownRef.current &&
            !hrDropdownRef.current.contains(event.target as Node)
          ) {
            setIsHrDropdownOpen(false);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

  const UserIcon = () =>
    isLoggedIn ? (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="rounded-full bg-[var(--primary-color)] overflow-hidden w-10 h-10 flex items-center justify-center"
        >
          <Image
            src="/images/default.jpg"
            alt="User Icon"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-[var(--header-color)] border rounded shadow-lg z-50 text-sm">
            <Link
              href="/myApplications"
              className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]"
            >
              My Applications
            </Link>
            <Link
              href="/myProfile"
              className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]"
            >
              My Profile
            </Link>

          <button onClick={logout} className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]">
            Logout
          </button>

          </div>
        )}
      </div>
    ) : (
      <Link href="/auth/login" className=" inverseButton" style={{borderRadius:"0", borderWidth:' 2px',  padding: "5px 15px"}}>
        Login
      </Link>
    );

const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `  transition pb-2 ${isActive(path) ? 'text-[var(--primary-color)]  border-b-2 border-[var(--primary-color)] ' : ''}`;

  return (
    <>
      <Link href="/" className={linkClass('/')} onClick={closeMenu}>
        Home
      </Link>

      <div className="relative" ref={hrDropdownRef}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsHrDropdownOpen((prev) => !prev);
          }}
          className=" transition flex items-center space-x-1"
        >
          <span>Our HR Services</span>
          <ArrowDownRightIcon className="h-4 w-4 " />
        </button>


{isHrDropdownOpen && (
  <div className="relative">
    {/* Triangle Arrow */}
    <div className="absolute top-[26px] left-1/2 transform -translate-x-1/2 w-3 h-3 
                    border-l-40 border-r-40 border-b-40 border-transparent 
                    border-b-white z-50" />

    {/* Dropdown Panel */}
    <div className="md:absolute md:left-[-110px] flex flex-col p-4 w-full md:min-w-[370px] h-fit gap-2 bg-white mt-2 md:mt-16 z-50 shadow-lg">
      <p className="text-[var(--primary-color)] font-semibold">Our HR Services</p>

      {/* HR and Employment Law Advisory */}
      <Link
        href="/ourHrServices"
        className="flex items-start gap-3 p-3 rounded-md bg-[var(--primary-100)] hover:bg-[var(--primary-200)] transition"
        onClick={closeMenu}
      >
        <div>
          <span className="flex gap-2 font-bold text-md text-[var(--text-dark)]">
            <ScaleIcon className="h-6 w-6 text-[var(--primary-color)]" />
            HR and Employment Law Advisory
          </span>
          <span className="text-gray-500 text-sm leading-none">
            Manage staff documents, shifts, and attendance
          </span>
        </div>
      </Link>

      {/* HR Documents & Contracts */}
      <Link
        href="/ourHrServices/hRDocumentsContracts"
        className="flex items-start gap-3 p-3 rounded-md bg-[var(--primary-100)] hover:bg-[var(--primary-200)] transition"
        onClick={closeMenu}
      >
        <div>
          <span className="flex gap-2 font-bold text-md text-[var(--text-dark)]">
            <DocumentTextIcon className="h-6 w-6 text-[var(--primary-color)] ml-1" />
            HR Documents & Contracts
          </span>
          <span className="text-gray-500 text-sm leading-none">
            Manage staff documents, contracts electronically
          </span>
        </div>
      </Link>
    </div>
  </div>
)}      </div>

      <Link
        href="/ourHrExperties"
        className={linkClass('/ourHrExperties')}
        onClick={closeMenu}
      >
        Our HR Expertise
      </Link>
      <Link
        href="/prices"
        className={linkClass('/prices')}
        onClick={closeMenu}
      >
        Pricing
      </Link>
      <Link
        href="/blog"
        className={linkClass('/blog')}
        onClick={closeMenu}
      >
        Blog
      </Link>
    </>
  );
};


  return (
    <header className="bg-[var(--header-color)] text-[var(--text-dark)] border-b border-[var(--border-color)] fixed top-0 w-full z-50">
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Logo and Icons */}
        <div className="flex items-center space-x-1">
          <HomeIcon className="h-8 w-8 text-[var(--primary-color)]" />
          <ChevronRightIcon className="h-6 w-6 mr-4 text-[var(--text-muted)]" />
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/MployusHRLogo.png"
              alt="Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>
        </div>

        {/* User Icon & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <div className="lg:hidden md:hidden sm:flex text-[var(--text-muted)] text-lg">
            <UserIcon />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--text-muted)]"
            aria-label="Toggle Menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-[var(--text-muted)] text-base">
          <NavLinks />
        </nav>

        {/* Desktop User Icon */}
        <div className="hidden md:flex items-center text-[var(--text-muted)] text-lg">
          <UserIcon />
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden flex flex-col bg-[var(--header-color)] px-4 pb-4 space-y-2 text-[var(--text-muted)]"
        >
          <NavLinks closeMenu={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
   
  );
}