"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white overflow-hidden ">
      {/* Background shape */}
<div className="absolute -top-0 -right-5 w-[550px] h-[350px] hidden lg:block -z-10 overflow-hidden">
  <svg
    viewBox="0 0 767 873"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full object-cover"
    preserveAspectRatio="xMidYMid slice"
  >
    <path
      d="M22.3069 371C-18.0931 302.2 5.4736 162.333 22.3069 101L701.807 0L766.307 271.5L727.807 872.5C649.14 873.5 473.707 866 401.307 828C310.807 780.5 351.807 704 276.807 664C201.807 624 244.807 518.5 218.807 478.5C192.807 438.5 72.8069 457 22.3069 371Z"
      fill="#FFF1DA"
    />
  </svg>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">
            
          {/* Logo */}
<div className="flex-shrink-0">
  <Link href="/" className="flex items-center">
    <h1 className="text-5xl font-extrabold tracking-[-0.1em] text-gray-900 flex items-center">
      Jad
      <span className="relative inline-block text-gray-900">
        o
        <span className="absolute inset-0 flex items-center justify-center text-yellow-400 text-3xl top-[4px]">
          ●
        </span>
      </span>
      <span className="relative inline-block text-gray-900">
        o
        <span className="absolute inset-0 flex items-center justify-center text-yellow-400 text-3xl top-[4px]">
          ●
        </span>
      </span>
    </h1>
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/hero"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200"
            >
              Destinations
            </Link>
            <Link
              href="/destinations"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200"
            >
              Hotels
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200"
            >
              Flights
            </Link>
            <Link
              href="/steps"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200"
            >
              Bookings
            </Link>
            <Link
              href="/Forms/login"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/Forms/signin"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm lg:text-base font-medium"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/hero"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
              >
                Destinations
              </Link>
              <Link
                href="/destinations"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
              >
                Hotels
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
              >
                Flights
              </Link>
              <Link
                href="/steps"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
              >
                Bookings
              </Link>
              <Link
                href="/Forms/login"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
              >
                Login
              </Link>
              <div className="flex items-center space-x-3 px-3 py-2">
                <Link
                  href="/Forms/signin"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-center font-medium"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
