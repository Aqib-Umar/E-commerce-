// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Background Image */}
      <div 
        className="h-150 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('9.jpeg')" 
        }}
      >
        {/* Text Content - Bottom Left */}
        <div className="relative z-20 h-full flex items-end justify-start px-6 pb-10 text-left">
          <div className="text-white">
            <p className="text-xl mb-1" style={{ fontFamily: 'Arial' }}>
              SUMMER LAWN 2'3
            </p>
            <h1 className="text-5xl font-bold mb-1" style={{ fontFamily: 'Times New Roman' }}>
              New Arrivals
            </h1>
            <p className="text-lg mb-4">
              10,000 + DESIGNS ADDED
            </p>
            <Link 
              to="/women" 
              className="inline-block bg-white text-black px-12 py-3 font-bold hover:bg-gray-100 transition-colors"
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
