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
  <div className="container mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProducts.slice(0, 3).map((product) => (
        <div key={product.id} className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-106 sm:h-116 md:h-[500px] object-cover rounded"
          />
          <div className="w-full flex justify-between mt-2 px-1 text-sm text-gray-800 font-medium">
            <span>{product.id}</span>
            <span>Rs. {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      <CategoryShowcase />

      {/* Featured Designer Brand */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 tracking-wide"
            style={{ textShadow: '1px 1px 2px #aaa' }}
          >
            FEATURED DESIGNER BRAND
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: 'Khaadi', logo: '/images/1d.png' },
              { name: 'Gul Ahmed', logo: '/images/2d.png' },
              { name: 'Sana Safinaz', logo: '/images/3d.png' },
              { name: 'Maria B', logo: '/images/4d.png' },
              { name: 'Alkaram', logo: '/images/5d.png' },
              { name: 'Limelight', logo: '/images/6d.png' },
              { name: 'Bonanza Satrangi', logo: '/images/7d.png' },
              { name: 'Beechtree', logo: '/images/8d.jpeg' },
              { name: 'Nishat Linen', logo: '/images/2d.png' },
              { name: 'Ego', logo: '/images/3d.png' },
              { name: 'Outfitters', logo: '/images/6d.png' },
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
            <div className="absolute border-b-[5px] border-[#8B4513] w-4/5 top-1/2 transform -translate-y-1/2 z-0 rounded"></div>
            <div className="relative z-10 bg-[#8B4513] px-4 py-2 rounded">
              <h2 className="text-white text-xl sm:text-2xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                Deals By Categories
              </h2>
            </div>
          </div>

          {/* Category Images with Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
            <div className="text-center">
              <img
                src="/images/18.jpeg"
                alt="Serika"
                className="w-full h-116 sm:h-[500px] object-cover rounded"
              />
              <p className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
                Serika Premium up to 60% off
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/19.jpeg"
                alt="Al-Harir"
                className="w-full h-116  sm:h-[500px] object-cover rounded"
              />
              <p className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
                Al-Harir Apparel up to 40% off
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/24.jpeg"
                alt="Inayat"
                className="w-full h-116  sm:h-[500px] object-cover rounded"
              />
              <p className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
                Inayat up to 30% off
              </p>
            </div>
          </div>

          {/* Full Width Banner Image */}
<div className="w-full mx-auto mt-8 px-4">
  <img
    src="/images/1528.jpg"
    alt="Promotional Banner"
    className="w-full h-auto max-h-[500px] object-contain sm:object-cover rounded-md"
  />
</div>

        </div>
      </div>

      <PretStyles />
    </div>
  );
};

export default Home;
