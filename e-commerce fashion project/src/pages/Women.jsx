// src/pages/Women.jsx
import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterSection from '../components/FilterSection';
import { womenProducts } from '../data/products';

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  
  const categories = [
    { id: 'all', name: 'ALL PRODUCTS' },
    { id: 'university', name: 'UNIVERSITY WEAR' },
    { id: 'shaddi', name: 'SHADDI BAYA WEAR' },
    { id: 'desi', name: 'DESI WEAR' },
    { id: 'abayas', name: 'ABAYAS' },
  ];
  
  const suitTypes = [
    { id: '1pcs', name: '1 PSC' },
    { id: '2pcs', name: '2 PCS' },
    { id: '3pcs', name: '3 PCS' },
  ];
  
  const [selectedSuitType, setSelectedSuitType] = useState('all');

  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">WOMEN'S STITCHED SUIT</h1>
        <p className="text-gray-600 mb-8">
          Elisha offers a vast selection of women's clothing to shop. Each season finds a careful assortment of clothing 
          no matter the season, trend-driven and classic pieces are available. Elisha is committed to helping shoppers 
          be their most stylish selves.
        </p>
        
        <FilterSection 
          sortOption={sortOption} 
          setSortOption={setSortOption} 
        />
        
        <div className="flex flex-wrap gap-2 mb-6">
          {suitTypes.map((type) => (
            <button
              key={type.id}
              className={`px-4 py-2 rounded-full ${
                selectedSuitType === type.id 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 border'
              }`}
              onClick={() => setSelectedSuitType(type.id)}
            >
              {type.name}
            </button>
          ))}
        </div>
        
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
          <h2 className="text-xl font-bold mb-4">ALL PRODUCTS</h2>
          <ProductGrid products={womenProducts} />
        </div>
      </div>
    </div>
  );
};

export default Women;