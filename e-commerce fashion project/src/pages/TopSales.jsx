import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterSection from '../components/FilterSection';
import { topSalesProducts } from '../data/products';

const TopSales = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');

  const categories = [
    { id: 'all', name: 'ALL PRODUCTS' },
    { id: 'university', name: 'UNIVERSITY WEAR' },
    { id: 'desi', name: 'DESI WEAR' },
    { id: 'shaddi', name: 'SHADDI BAYA WEAR' },
    { id: 'abayas', name: 'ABAYAS' },
  ];

  return (
    <div className="py-6 sm:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">TOP SALES</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          Elisha offers a vast selection of women's clothing to shop. Each season finds a careful assortment of clothing 
          — trend-driven and classic pieces — to help you be your most stylish self.
        </p>

        {/* Filter Dropdowns */}
        <FilterSection 
          sortOption={sortOption} 
          setSortOption={setSortOption} 
        />

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 py-2 text-sm sm:text-base rounded-full transition ${
                selectedCategory === category.id 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">TOP SELLING PRODUCTS</h2>
          <ProductGrid products={topSalesProducts} />
        </div>
      </div>
    </div>
  );
};

export default TopSales;
