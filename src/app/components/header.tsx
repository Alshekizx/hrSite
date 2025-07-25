'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  Bars3Icon,
  ChevronRightIcon,
  ArrowDownRightIcon,
  ScaleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

       

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
              href="/views/myApplications"
              className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]"
              style={{fontSize:'18px'}}
            >
              My Applications
            </Link>
            <Link
              href="/views/myProfile"
              style={{fontSize:'18px'}}
              className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]"
            >
              My Profile
            </Link>

          <button onClick={logout} className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]"
          style={{fontSize:'18px'}}>
            Logout
          </button>

          </div>
        )}
      </div>
    ) : (
      <Link href="/auth/login" className=" inverseButton" style={{borderRadius:"0", borderWidth:' 2px',  padding: "5px 15px", fontSize:'18px', backgroundColor:'white'}}>
        Login
      </Link>
    );

const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `  transition pb-1 ${isActive(path) ? 'text-[var(--primary-color)]  border-b-2 border-[var(--primary-600)] ' : ''}`;

  return (
    <>
      <Link href="/views/" style={{fontSize:'18px'}} className={linkClass('/views')} onClick={closeMenu}>
        Home
      </Link>

      <div className="relative" ref={hrDropdownRef}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsHrDropdownOpen((prev) => !prev);

          }}
          style={{fontSize:'18px'}} className=" transition flex items-center space-x-1"
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
        href="/views/ourHrServices"
        className="flex items-start gap-3 p-3 rounded-md bg-[var(--primary-100)] hover:bg-[var(--primary-200)] transition "
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
        href="/views/ourHrServices/hRDocumentsContracts"
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

  
)}      


</div>

      <Link
        href="/views/ourHrExperties"
        style={{fontSize:'18px'}}
        className={linkClass('/views/ourHrExperties')}
        onClick={closeMenu}
      >
        Our HR Expertise
      </Link>
      <Link
        href="/views/prices"
        style={{fontSize:'18px'}}
        className={linkClass('/views/prices')}
        onClick={closeMenu}
      >
        Pricing
      </Link>
      <Link
        href="/views/blog"
        style={{fontSize:'18px'}}
        className={linkClass('/views/blog')}
        onClick={closeMenu}
      >
        Blog
      </Link>
      <div className="lg:hidden md:hidden sm:flex text-[var(--text-muted)] text-lg">
    <UserIcon />
  </div>
    </>
  );
};


  return (
    <header className="bg-[var(--header-color)] flex flex-col items-center text-[var(--text-dark)] shadow-sm fixed top-0 w-full z-50 py-2">
      <div className=' max-w-[1400px] w-full  '>
      <div className="py-4 px-[2rem] lg:px-[5rem] flex justify-between items-center">
        {/* Logo and Icons */}
        <div className="flex items-center space-x-2">
          <div className='hidden md:flex flex-row gap-2 items-center'>
          <Image
              src="/images/home1.png"
              alt="Logo"
              width={31}
              height={34}
              className="h-full"
            />
          <ChevronRightIcon className="h-10 w-10  text-[var(--text-muted)]" />
         </div>
           <Link href="/views/" className="flex items-center ">
            <Image
              src="/logos/MployusHRLogo.png"
              alt="Logo"
              width={186}
              height={56}
              className="h-[56px]"
            />
          </Link>
        </div>

        {/* User Icon & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          
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
      </div>
    </header>
   
  );
}