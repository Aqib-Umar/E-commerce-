// src/pages/TopSales.jsx
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
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">TOP SALES</h1>
        <p className="text-gray-600 mb-8">
          Elisha offers a vast selection of women's clothing to shop. Each season finds a careful assortment of clothing 
          no matter the season, trend-driven and classic pieces are available. Elisha is committed to helping shoppers 
          be their most stylish selves.
        </p>
        
        <FilterSection 
          sortOption={sortOption} 
          setSortOption={setSortOption} 
        />
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 border'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">TOP SELLING PRODUCTS</h2>
          <ProductGrid products={topSalesProducts} />
        </div>
      </div>
    </div>
  );
};

export default TopSales;