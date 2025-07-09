// src/pages/Unstitched.jsx
import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterSection from '../components/FilterSection';
import { products } from '../data/products';

const Unstitched = () => {
  const [sortOption, setSortOption] = useState('featured');
  
  // Filter unstitched products
  const unstitchedProducts = products.filter(product => 
    product.name.toLowerCase().includes('fabric') || 
    product.description.toLowerCase().includes('unstitched')
  );

  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">UNSTITCHED FABRICS</h1>
        <p className="text-gray-600 mb-8">
          Explore our premium collection of unstitched fabrics perfect for creating custom outfits. 
          Each piece is crafted with high-quality materials to bring your designs to life.
        </p>
        
        <FilterSection 
          sortOption={sortOption} 
          setSortOption={setSortOption} 
        />
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Unstitched Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {['Premium Lawn', 'Linen', 'Cotton', 'Silk', 'Organza', 'Chiffon'].map((type, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold">{type}</h3>
                <p className="text-sm text-gray-600 mt-1">Browse our {type.toLowerCase()} collection</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Unstitched Fabrics</h2>
          <ProductGrid products={unstitchedProducts} />
        </div>
      </div>
    </div>
  );
};

export default Unstitched;