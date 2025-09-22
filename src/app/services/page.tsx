import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: (
        // Satellite icon for Calculated Weather
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all duration-300">
          <svg className="w-10 h-10 text-orange-500 group-hover:text-orange-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M14.5,9L13.91,10.09C13.66,10.59 13.41,11.08 13.16,11.58L12,14L10.84,11.58C10.59,11.08 10.34,10.59 10.09,10.09L9.5,9L10.84,8.34L12,7.68L13.16,8.34L14.5,9M7,2L8.5,7.5L14,9L8.5,10.5L7,16L5.5,10.5L0,9L5.5,7.5L7,2Z"/>
          </svg>
        </div>
      ),
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
      color: "orange"
    },
    {
      id: 2,
      icon: (
        // Airplane icon for Best Flights
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all duration-300">
          <svg className="w-10 h-10 text-blue-500 group-hover:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"/>
          </svg>
        </div>
      ),
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
      color: "blue"
    },
    {
      id: 3,
      icon: (
        // Microphone icon for Local Events
        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all duration-300">
          <svg className="w-10 h-10 text-yellow-500 group-hover:text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.9 2 10 2.9 10 4V12C10 13.1 10.9 14 12 14S14 13.1 14 12V4C14 2.9 13.1 2 12 2M19 12V10H17V12C17 15.3 14.3 18 11 18S5 15.3 5 12V10H3V12C3 16.1 6.1 19.1 10 19.9V22H14V19.9C17.9 19.1 21 16.1 21 12H19Z"/>
          </svg>
        </div>
      ),
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      color: "yellow"
    },
    {
      id: 4,
      icon: (
        // Settings/Gear icon for Customization
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all duration-300">
          <svg className="w-10 h-10 text-gray-500 group-hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
          </svg>
        </div>
      ),
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers",
      color: "gray"
    }
  ];

  return (
    <section className="py-16  bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-6 h-6 text-orange-300 opacity-60 z-[100px]">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="absolute top-32 right-8 w-4 h-4 text-orange-200 opacity-40">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-32 w-3 h-3 text-orange-400 opacity-50">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 font-semibold text-sm sm:text-base lg:text-lg tracking-wider uppercase mb-4">
            CATEGORY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6  ">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 text-center transition-all duration-500 ease-in-out cursor-pointer hover:bg-white hover:rounded-4xl hover:shadow-2xl hover:transform hover:scale-105 hover:-translate-y-2"
            >
              <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-50 transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                service.color === 'orange' ? 'bg-orange-500' :
                service.color === 'blue' ? 'bg-blue-500' :
                service.color === 'yellow' ? 'bg-yellow-500' :
                'bg-gray-500'
              }`} />
              
              {/* Icon */}
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;