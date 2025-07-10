// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import ProductGrid from '../components/ProductGrid';
import { featuredProducts } from '../data/products';
import PretStyles from '../components/PretStyles';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Featured Products */}
      <div className="py-10 bg-gray-50">
  <div className="container mx-auto px-9">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {featuredProducts.slice(0, 3).map((product) => (
        <div key={product.id} className="flex flex-col items-center">
          {/* Image Only */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-130 object-cover"
          />

          {/* ID and Price below the card */}
          <div className="w-full flex justify-between mt-2 px-1 text-sm text-gray-800 font-medium">
            <span> {product.id}</span>
            <span>Rs. {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      
      <CategoryShowcase />
      
      {/* New Arrivals */}
     <div className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <h2
      className="text-3xl font-bold text-center mb-10 tracking-wide"
      style={{ textShadow: '1px 1px 2px #aaa' }}
    >
      FEATURED DESIGNER BRAND
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {[
        { name: 'Khaadi', logo: '1d.png' },
        { name: 'Gul Ahmed', logo: '2d.png' },
        { name: 'Sana Safinaz', logo: '3d.png' },
        { name: 'Maria B', logo: '4d.png' },
        { name: 'Alkaram', logo: '5d.png' },
        { name: 'Limelight', logo: '6d.png' },
        { name: 'Bonanza Satrangi', logo: '7d.png' },
        { name: 'Beechtree', logo: '8d.jpeg' },
        { name: 'Nishat Linen', logo: '2d.png' },
        { name: 'Ego', logo: '3d.png' },
        { name: 'Outfitters', logo: '6d.png' },
      ].map((brand, index) => (
        <div key={index} className="w-full h-[60px] flex items-center justify-center">
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Explore More Button */}
      <div className="w-full h-[60px] flex items-center justify-center cursor-pointer">
        <div className="flex flex-col items-center">
          <span className="text-pink-600 font-semibold text-sm mb-1">Explore More</span>
          <span className="text-pink-600 text-2xl font-bold">→</span>
        </div>
      </div>
    </div>
  </div>
</div>




      
      {/* Categories Section */}
      <div className="py-12 bg-gray-100">
  <div className="container mx-auto px-4">
    {/* Title Card */}
    <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute border-b-[5px] border-[#8B4513] w-3/4 top-1/2 transform -translate-y-1/2 z-0 rounded"></div>
          <div className="relative z-10 bg-[#8B4513] px-6 py-2 rounded">
            <h2 className="text-white text-2xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Deals By Categories
            </h2>
          </div>
        </div>

    {/* Category Images with Text */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
      <div className="text-center">
        <img
          src="18.jpeg"
          alt="Serika"
          className="w-full h-[500px]object-cover"
        />
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Serika Premium up to 60% off
        </p>
      </div>

      <div className="text-center">
        <img
          src="19.jpeg"
          alt="Al-Harir"
          className="w-full h-[500px] object-cover"
        />
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Al-Harir Apparel up to 40% off
        </p>
      </div>

      <div className="text-center">
        <img
          src="24.jpeg"
          alt="Inayat"
          className="w-full h-[500px] object-cover"
        />
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Inayat up to 30% off
        </p>
      </div>
    </div>

    {/* Full Width Banner Image */}
    <div className="max-w-7xl mx-auto">
      <img
        src="1528.jpg"
        alt="Promotional Banner"
        className="w-full h-[500px] object-cover rounded-md"
      />
    </div>
  </div>
</div>

<PretStyles />


    </div>
  );
};

export default Home;