'use client';

import React from 'react';
import Image from 'next/image';

const StepsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-gray-500 font-medium text-lg mb-4">Easy and Fast</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Book Your Next Trip<br />In 3 Easy Steps
              </h2>
            </div>

            {/* Step 1 - Choose Destination */}
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">Choose Destination</h3>
                <p className="text-gray-500 text-base group-hover:text-gray-600 transition-colors">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>

            {/* Step 2 - Make Payment */}
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">Make Payment</h3>
                <p className="text-gray-500 text-base group-hover:text-gray-600 transition-colors">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>

            {/* Step 3 - Reach Airport */}
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">Reach Airport on Selected Date</h3>
                <p className="text-gray-500 text-base group-hover:text-gray-600 transition-colors">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Trip Cards */}
          <div className="relative flex justify-center lg:justify-end ">
            <div className="relative">
              {/* Main Trip Card - Trip To Greece */}
              <div className="bg-white rounded-3xl shadow-2xl p-7 w-96 max-w-md z-10 relative group hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 -ml-16 lg:-ml-20">
                {/* Card Image */}
                <div className="relative h-52 rounded-2xl overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/steps-images/girl.svg"
                    alt="Trip destination"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Trip Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Trip To Greece</h3>

                {/* Date and Author */}
                <div className="flex items-center space-x-3 text-base text-gray-500 mb-5 group-hover:text-gray-600 transition-colors duration-300">
                  <span>14-29 June</span>
                  <span>|</span>
                  <span>by Robbin joseph</span>
                  
                </div>

                {/* Action Icons */}
                <div className="flex items-center space-x-5 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 17l-2-2 2-2 2 2-2 2zm1.5-6.5h-3v-7h3v7z"/>
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7v2H3V4h2V2h2v2h8V2h2v2h2z"/>
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <svg className="w-6 h-6 text-gray-500 hover:text-yellow-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                </div>

                {/* People Going and Like */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V18h2v-4h3v4h2V8.5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2V18H4z"/>
                    </svg>
                    <span className="text-base">24 people going</span>
                  </div>
                  <svg className="w-6 h-6 text-gray-300 hover:text-red-400 transition-all duration-300 cursor-pointer hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
              </div>

              {/* Small Ongoing Trip Card - Positioned to the right */}
              <div className="absolute top-70 -right-16 lg:-right-20 bg-white rounded-2xl shadow-xl p-4 w-64 z-20 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/steps-images/room.svg"
                      alt="Room"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase group-hover:text-gray-500 transition-colors">Ongoing</p>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Trip to rome</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs group-hover:text-sm transition-all duration-300">
                    <span className="text-purple-600 font-semibold">40%</span> 
                    <span className="text-gray-500"> completed</span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-1.5 rounded-full w-2/5 transition-all duration-1000 group-hover:w-1/2"></div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
              </div>

              {/* Animated Decorative Elements */}
              <div className="absolute top-10 -right-4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute top-20 -right-12 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute bottom-32 right-12 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-50"></div>
              <div className="absolute top-1/3 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-300 opacity-60"></div>
              <div className="absolute bottom-40 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse delay-500 opacity-70"></div>
              <div className="absolute top-16 -left-12 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;