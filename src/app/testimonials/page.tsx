"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  location: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      image: "/images/Testimonials-images/person.svg"
    },
    {
      id: 2,
      text: "Amazing experience! The service exceeded my expectations and the team was incredibly professional throughout the entire process.",
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/images/Testimonials-images/person.svg"
    },
    {
      id: 3,
      text: "Outstanding quality and attention to detail. I would highly recommend this service to anyone looking for excellence and reliability.",
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      image: "/images/Testimonials-images/person.svg"
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const getNextIndex = () => (currentIndex + 1) % testimonials.length;
  const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length;

  return (
    <section className="py-16 px-10 bg-gradient-to-br from-gray-50 to-white ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Header */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                TESTIMONIALS
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                What People Say<br />
                About Us.
              </h2>
            </div>

            {/* Dots Navigation */}
            <div className="flex space-x-3 justify-center lg:justify-start">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-yellow-500 transform scale-125 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-2 justify-center lg:justify-start">
              <button
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="p-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 shadow-sm"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="p-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 shadow-sm"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Stacked Testimonial Cards */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0" style={{ height: '250px' }}>
            
            {/* Third Card (Bottom Layer) */}
            <div 
              className="absolute inset-0 top-12 bg-gray-200 rounded-xl p-4 transform scale-90"
              style={{ zIndex: 1 }}
            >
              <div className="flex items-start space-x-3 opacity-40">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Second Card (Middle Layer) */}
            <div 
              className="absolute inset-0 top-6 bg-gray-100 rounded-xl p-5 transform scale-95"
              style={{ zIndex: 2 }}
            >
              <div className="flex items-start space-x-4 opacity-60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[getNextIndex()].image}
                    alt={testimonials[getNextIndex()].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    &quot;{testimonials[getNextIndex()].text.substring(0, 60)}...&quot;
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">
                      {testimonials[getNextIndex()].name}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Active Card (Top Layer) */}
            <div 
              className={`absolute inset-0 bg-white rounded-xl shadow-2xl p-6 transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 ${
                isAnimating ? 'opacity-90 scale-[0.98]' : 'opacity-100 scale-100'
              }`}
              style={{ zIndex: 10 }}
            >
              <div className="flex items-start space-x-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-3 ring-blue-100 transform transition-transform duration-200 hover:scale-105">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  {/* Quote */}
                  <blockquote className="text-gray-700 text-base leading-relaxed">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 w-full max-w-md mx-auto lg:mx-0">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-yellow-500 h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;