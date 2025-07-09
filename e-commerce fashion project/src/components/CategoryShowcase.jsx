// src/components/CategoryShowcase.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  const categories = [
    { name: 'SILK', image: 'https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'COTTON NET', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'ORGANZA', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'LAWN', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered title on thick line */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute border-b-[5px] border-[#8B4513] w-3/4 top-1/2 transform -translate-y-1/2 z-0 rounded"></div>
          <div className="relative z-10 bg-[#8B4513] px-6 py-2 rounded">
            <h2 className="text-white text-2xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              SHOP BY TYPE
            </h2>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-center">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circle with stronger border and light pink background */}
              <div className="w-48 h-48 bg-pink-50 border-[10px] border-gray-500 rounded-full flex items-center justify-center relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-24 h-24 object-cover rounded-full border-2 border-white"
                />
              </div>

              {/* Title below circle */}
              <h3 className="mt-4 text-lg">{category.name}</h3>

              {/* Shop Now button */}
              <Link
                to={`/women?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="mt-2 inline-block bg-pink-100 text-black px-6 py-2 rounded-full font-medium hover:bg-pink-200 transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
