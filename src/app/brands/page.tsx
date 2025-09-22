"use client";
import React from 'react';
import Image from 'next/image';

const Brand: React.FC = () => {
  const brands = [
    {
      id: 1,
      name: "Brand 1",
      image: "/images/brand-images/img1.svg",
      alt: "Brand Partner 1"
    },
    {
      id: 2,
      name: "Brand 2", 
      image: "/images/brand-images/img2.svg",
      alt: "Brand Partner 2"
    },
    {
      id: 3,
      name: "Brand 3",
      image: "/images/brand-images/img3.svg", 
      alt: "Brand Partner 3"
    },
    {
      id: 4,
      name: "Brand 4",
      image: "/images/brand-images/img4.svg",
      alt: "Brand Partner 4"
    },
    {
      id: 5,
      name: "Brand 5",
      image: "/images/brand-images/img5.svg",
      alt: "Brand Partner 5"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&#39;re proud to work with industry leaders who trust us with their most important projects
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="group relative w-full max-w-[180px] h-20 md:h-24 lg:h-28 flex items-center justify-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Brand Image */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 180px"
                  priority={false}
                />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
              
              {/* Pulse Animation */}
              <div className="absolute inset-0 rounded-xl bg-blue-400 opacity-0 group-hover:opacity-10 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm text-gray-500">
            and many more trusted partners worldwide
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20 -z-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-20 -z-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .grid > div:nth-child(1) { animation-delay: 0.1s; }
        .grid > div:nth-child(2) { animation-delay: 0.2s; }
        .grid > div:nth-child(3) { animation-delay: 0.3s; }
        .grid > div:nth-child(4) { animation-delay: 0.4s; }
        .grid > div:nth-child(5) { animation-delay: 0.5s; }
        
        @media (max-width: 768px) {
          .grid > div:nth-child(n+3) {
            animation-delay: 0.1s;
          }
        }
      `}</style>
    </section>
  );
};

export default Brand;