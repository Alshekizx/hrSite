"use client";
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/authContext'; 

export default function SignupPage() {
  const [agreed, setAgreed] = useState(false);

  const { login } = useAuth();
const router = useRouter();

const handleSignup = (e: React.FormEvent) => {
  e.preventDefault();
  // Simulate successful signup
  login();
  router.push('/');
};

  

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left side */}
      <div className="hidden  relative  lg:flex items-center justify-center p-6 bg-vertical-waves"
      >
        <Link href="/" className="absolute top-6 left-6">
          <HomeIcon className="h-10 w-10 text-white" />
        </Link>
        <Image
          src="/logos/WhiteMployusRecruitmentLogo2.png"
          alt="Mployus Logo"
          width={220}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-sm">
          <h3 className="text-2xl font-semibold text-center text-[var(--primary-color)] mb-8">Sign Up</h3>

          <form onSubmit={handleSignup} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>

            {/* Terms & Agreement */}
            <div className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="accent-[var(--primary-color)] w-4 h-4"
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the <Link href="/termsAndConditions" className="text-[var(--primary-color)] underline">Terms & Conditions</Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!agreed}
              className={`w-full text-white font-medium py-2.5 rounded-md transition ${
                agreed ? 'bg-[var(--primary-color)] hover:bg-[var(--primary-400)]' : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Create Account
            </button>
          </form>

          {/* Login redirect */}
          <p className="text-sm text-center text-gray-700 mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[var(--primary-color)] font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}