// src/components/FilterSection.jsx
import React from 'react';

const FilterSection = ({ sortOption, setSortOption }) => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
      <div className="flex items-center">
        <span className="mr-2 font-medium">Filter:</span>
        <div className="flex items-center space-x-2">
          <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">
            Ready & Ship
          </button>
          <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">
            Size
          </button>
          <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">
            Price
          </button>
          <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">
            Discount
          </button>
        </div>
      </div>
      
      <div className="flex items-center">
        <span className="mr-2 font-medium">Sort By:</span>
        <select 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest Arrivals</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="discount">Discount</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;