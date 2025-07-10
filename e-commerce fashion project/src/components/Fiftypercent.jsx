// src/components/CategoryShowcase.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // You can use icons or text arrows

const Fiftypercent = () => {
  const categories = [
    { name: 'UNIVERSITY WEAR', image: '/images/1d.png' },
    { name: 'SHADDI BAYA WEAR ', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'ABAYAS', image: '/images/2d.png' },
    { name: 'DESI WEAR', image: '/images/3d.png' },
  ];

  return (
    <div className="py-12 bg-white relative">
      <div className="container mx-auto px-4">

        {/* Title with bold background and reduced line */}
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute border-b-[4px] border-[#8B4513] w-[40%] top-1/2 transform -translate-y-1/2 z-0 rounded"></div>
          <div className="relative z-10 bg-[#8B4513] px-10 py-4 rounded-lg shadow-md">
            <h2 className="text-white text-3xl font-semibold tracking-wide" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              50% OFF 
            </h2>
          </div>
        </div>

        {/* Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-200 transition">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-200 transition">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circle image container */}
                <div className="w-48 h-48 bg-pink-50 border-[10px] border-gray-500 rounded-full flex items-center justify-center relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-42 h-42 object-cover rounded-full border-2 border-white"
                  />
                </div>

                {/* Category Title */}
                <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiftypercent;
