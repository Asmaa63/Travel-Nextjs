"use client";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 shadow-lg ">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Jadoo Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <div className="flex-shrink-0">
  <h1 className="text-5xl  font-extrabold tracking-[-0.1em] text-gray-900 flex items-center">
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
</div>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  Affilates
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              More
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  Airlinefees
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  Airline
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & App Downloads Section */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-4">
            
            {/* Social Media Icons */}
            <div className="flex lg:flex-row gap-2 items-center lg:items-start space-x-2 lg:space-x-0 lg:space-y-2">
              
              {/* Facebook */}
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>

            {/* Discover our app Section */}
            <div className=" space-y-3">
              <p className="text-gray-700 text-sm font-medium">
                Discover our app
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col space-y-2">
                {/* Google Play */}
                <a href="#" className="inline-block">
                  <div className="bg-black rounded-md px-3 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200 max-w-fit">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-white text-xs leading-tight">GET IT ON</div>
                      <div className="text-white text-sm font-semibold leading-tight">Google Play</div>
                    </div>
                  </div>
                </a>

                {/* App Store */}
                <a href="#" className="inline-block">
                  <div className="bg-black rounded-md px-3 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200 max-w-fit">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-white text-xs leading-tight">Download on the</div>
                      <div className="text-white text-sm font-semibold leading-tight">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;