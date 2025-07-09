// src/pages/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedSize, setSelectedSize] = useState('M');
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="mt-4">The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  const colors = ['white', 'black', 'grey', 'red', 'yellow', 'blue', 'cyan', 'green', 'beige', 'navy', 'magenta', 'purple'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mb-4" />
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-24" />
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-bold text-gray-800 mb-4">PKR {product.price}</p>
            <p className="text-gray-600 mb-4">Availability: In stock</p>
            <p className="text-gray-600 mb-6">SKU: {product.sku}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Color:</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color ? 'ring-2 ring-black ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size:</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size ? 'bg-black text-white' : 'bg-white'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Quantity:</h3>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 px-4 py-2 rounded-l"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="bg-gray-100 px-6 py-2">{quantity}</span>
                <button 
                  className="bg-gray-200 px-4 py-2 rounded-r"
                  onClick={increaseQuantity}
                >
                  +
                </button>
                <button className="ml-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
                  ADD TO BAG
                </button>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-2">Details:</h3>
              <p className="text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">REVIEWS</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Your Review: {product.name}</h3>
            
            <div className="mb-4">
              <p className="mb-2">Your Rating:</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <button key={star} className="text-yellow-400 text-2xl">★</button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1">Nickname</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter your nickname"
                />
              </div>
              <div>
                <label className="block mb-1">Summary</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter summary"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block mb-1">Review</label>
              <textarea 
                className="w-full border rounded px-3 py-2 h-32"
                placeholder="Write your review here"
              />
            </div>
            
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
              SUBMIT REVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;