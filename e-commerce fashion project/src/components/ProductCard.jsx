// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        
        <div className="mt-3 flex justify-between items-center">
          <div>
            {product.discount > 0 ? (
              <>
                <span className="text-gray-500 line-through mr-2">Rs. {product.originalPrice}</span>
                <span className="font-bold text-gray-800">Rs. {product.price}</span>
              </>
            ) : (
              <span className="font-bold text-gray-800">Rs. {product.price}</span>
            )}
          </div>
          
          <Link 
            to={`/product/${product.id}`} 
            className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;