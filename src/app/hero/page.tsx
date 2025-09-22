"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br relative overflow-hidden">
      {/* small decorative blurred circles (top-right) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br opacity-30 blur-3xl" />
        <div className="absolute top-40 right-32 w-64 h-64 rounded-full bg-gradient-to-br opacity-40 blur-2xl" />
      </div>

      {/* Decorative Right Shape */}
      <div className="absolute -top-20 -right-10 h-[95vh] w-[575px] pointer-events-none overflow-hidden z-0">
        <svg
          viewBox="0 0 767 873"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M22.3069 371C-18.0931 302.2 5.4736 162.333 22.3069 101L701.807 0L766.307 271.5L727.807 872.5C649.14 873.5 473.707 866 401.307 828C310.807 780.5 351.807 704 276.807 664C201.807 624 244.807 518.5 218.807 478.5C192.807 438.5 72.8069 457 22.3069 371Z"
            fill="#FFF1DA"
          />
        </svg>
      </div>

      {/* Hero content (above the SVG) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* Left (text) */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <p className="text-[#DF6951] font-bold text-sm sm:text-base lg:text-lg tracking-wider uppercase">
              BEST DESTINATIONS AROUND THE WORLD
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold text-gray-900 leading-tight font-serif">
              Travel,{" "}
              <span className="relative inline-block">
                enjoy
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-orange-300 opacity-60 rounded-full transform -rotate-1" />
              </span>
              <br />
              and live a new
              <br />
              and full life
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Find out more
              </button>

              <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors duration-300  ">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DF6951] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 sm:w-5 sm:h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5z" />
                  </svg>
                </div>
                <span className="font-medium text-sm sm:text-base">Play Demo</span>
              </button>
            </div>
          </div>

          {/* Right (image) */}
          <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl order-1 lg:order-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/images/hero-images/girl-img-removebg-preview.png"
                alt="Travel Girl"
                width={500}
                height={500}
                className="mx-auto relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
