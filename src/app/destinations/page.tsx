import React from 'react';
import Image from 'next/image';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      image: '/images/Destinations-images/img1-o.svg',
      location: 'Rome, Italy',
      price: '$5,42k',
      duration: '10 Days Trip',
      icon: '✈️'
    },
    {
      id: 2,
      image: '/images/Destinations-images/img2-o.svg',
      location: 'London, UK',
      price: '$4.2k',
      duration: '12 Days Trip',
      icon: '✈️'
    },
    {
      id: 3,
      image: '/images/Destinations-images/img3-o.svg',
      location: 'Full Europe',
      price: '$15k',
      duration: '28 Days Trip',
      icon: '✈️'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 font-semibold text-sm sm:text-base lg:text-lg tracking-wider uppercase mb-4">
            Top Selling
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Top Destinations
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-3 hover:scale-105 overflow-hidden relative w-full max-w-sm"
            >
              {/* Background decoration for all cards - responsive positioning */}
              <div className="absolute top-1/2 -right-8 sm:-right-10 lg:-right-12 w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 pointer-events-none z-0 transform -translate-y-1/2">
                <Image
                  src="/images/Destinations-images/bg.svg"
                  alt="Background decoration"
                  width={160}
                  height={160}
                  className="opacity-15 sm:opacity-20 transform rotate-12"
                />
              </div>

              {/* Image Container - Better responsive heights */}
              <div className="relative overflow-hidden rounded-t-3xl h-48 sm:h-56 md:h-64 lg:h-72">
                <div className="relative w-full h-full">
                  <Image
                    src={destination.image}
                    alt={destination.location}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-center scale-110 sm:scale-105 lg:scale-100 transition-transform duration-700 group-hover:scale-125 sm:group-hover:scale-115 lg:group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 relative z-10">
                {/* Location and Price */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {destination.location}
                  </h3>
                  <span className="text-lg font-bold text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                    {destination.price}
                  </span>
                </div>

                {/* Duration with icon */}
                <div className="flex items-center space-x-2 text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{destination.duration}</span>
                </div>
              </div>

              {/* Hover effect - Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-200 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-yellow-300 rounded-full opacity-70 animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
};

export default DestinationsSection;