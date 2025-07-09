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
            className="w-full h-96 object-cover"
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
      <div className="py-8 bg-white">
  <div className="container mx-auto px-2">
    {/* Section Title */}
    <h2
      className="text-4xl text-center mb-6 tracking-wide"
      style={{ fontWeight: 'normal', textShadow: '1px 1px 2px #aaa' }}
    >
      NEW ARRIVALS
    </h2>

    {/* Main Wrapper Card */}
    <div
      className="bg-[#b9b2b2] p-8 shadow-md max-w-7xl mx-auto"
      style={{ minHeight: '370px', borderRadius: '1rem' }} // Outer card rounded
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.slice(4, 8).map((product, index) => (
          <div
            key={index}
            className="p-2"
            // style={{
            //   borderRadius: '0px', // No border-radius on card
            //   boxShadow: '0 4px 20px rgba(105, 105, 105, 0.5)', // Shadow with soft edges
            //   overflow: 'hidden',
            //   clipPath: 'inset(0 round 1rem)' // Rounds only the shadow's edge
            // }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
              style={{ borderRadius: '0px' }} // No rounded image
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/*Explore Designers brands section */} 

<div className="py-12 bg-white">
  <div className="container mx-auto px-4">
    {/* Section Title - Bold with Shadow */}
    <h2
      className="text-3xl font-bold text-center mb-10 tracking-wide"
      style={{ textShadow: '1px 1px 2px #aaa' }}
    >
      FEATURED DESIGNER BRAND
    </h2>

    {/* First Row of Designer Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-8">
      {[
        'Designer A',
        'Designer B',
        'Designer C',
        'Designer D',
        'Designer E',
        'Designer F',
      ].map((name, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-[#f3f3f3] p-4 rounded-md shadow-md hover:shadow-lg transition"
        >
          <img
            src={`https://via.placeholder.com/100x60?text=${encodeURIComponent(
              name
            )}`}
            alt={name}
            className="h-12 object-contain"
          />
        </div>
      ))}
    </div>

    {/* Second Row of Designer Cards + Explore Button */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {[
        'Designer G',
        'Designer H',
        'Designer I',
        'Designer J',
        'Designer K',
      ].map((name, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-[#f3f3f3] p-4 rounded-md shadow-md hover:shadow-lg transition"
        >
          <img
            src={`https://via.placeholder.com/100x60?text=${encodeURIComponent(
              name
            )}`}
            alt={name}
            className="h-12 object-contain"
          />
        </div>
      ))}

      {/* Explore More Button */}
      <div className="flex items-center justify-center bg-[#f3f3f3] p-4 rounded-md shadow-md hover:shadow-lg transition cursor-pointer">
        <button className="text-sm font-bold text-gray-800 flex items-center gap-1">
          Explore More <span className="text-xl font-bold">→</span>
        </button>
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
          src="https://via.placeholder.com/400x250?text=Serika"
          alt="Serika"
          className="w-full object-cover"
        />
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Serika Premium up to 60% off
        </p>
      </div>

      <div className="text-center">
        <img
          src="https://via.placeholder.com/400x250?text=Al-Harir"
          alt="Al-Harir"
          className="w-full object-cover"
        />
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Al-Harir Apparel up to 40% off
        </p>
      </div>

      <div className="text-center">
        <img
          src="https://via.placeholder.com/400x250?text=Inayat"
          alt="Inayat"
          className="w-full object-cover"
        />
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Inayat up to 30% off
        </p>
      </div>
    </div>

    {/* Full Width Banner Image */}
    <div className="max-w-7xl mx-auto">
      <img
        src="https://via.placeholder.com/1400x400?text=Big+Promo+Banner"
        alt="Promotional Banner"
        className="w-full h-[300px] object-cover rounded-md"
      />
    </div>
  </div>
</div>

<PretStyles />


    </div>
  );
};

export default Home;