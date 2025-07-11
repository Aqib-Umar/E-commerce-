import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Background Image Container */}
      <div
        className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/9.jpeg')"
        }}
      >
        {/* Text Content - Bottom Left */}
        <div className="relative z-20 h-full flex items-end justify-start px-3 sm:px-6 md:px-12 pb-6 sm:pb-10">
          <div className="text-white max-w-full sm:max-w-lg">
            <p
              className="text-sm sm:text-base md:text-lg mb-1 font-light leading-tight"
              style={{ fontFamily: 'Arial' }}
            >
              SUMMER LAWN 2'3
            </p>
            <h1
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 leading-snug"
              style={{ fontFamily: 'Times New Roman' }}
            >
              New Arrivals
            </h1>
            <p className="text-xs sm:text-base md:text-lg mb-4 leading-snug">
              10,000 + DESIGNS ADDED
            </p>
            <Link
              to="/women"
              className="inline-block bg-white text-black px-4 sm:px-8 py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors rounded"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
