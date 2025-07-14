// src/pages/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import { allProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-10 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex">
          <div className="flex flex-col gap-3 mr-3">
            {[...Array(3)].map((_, index) => (
              <img 
                key={index} 
                src={product.img} 
                alt="thumb" 
                className="w-20 h-24 object-cover rounded shadow" 
              />
            ))}
          </div>
          <img
            src={product.img}
            alt="Main"
            className="w-[500px] h-[600px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="bg-pink-100 text-[#6B4226] p-6 rounded-xl flex-grow max-w-md ml-auto">
          <h2 className="text-xl font-bold mb-2">Fabrics 2 Piece</h2>
          <p className="text-md mb-1">{product.title}</p>
          <p className="text-lg font-semibold mb-1">PKR {product.price}</p>
          <p className="mb-1">Availability: In stock</p>
          <p className="mb-3">SKU: {product.sku}</p>

          <div className="mb-4">
            <h3 className="font-semibold">Filters color:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {['White', 'Red', 'Cyan', 'Navy', 'Vermillion', 'Orange', 'Black', 'Yellow', 'Green', 'Magenta', 'Red', 'Brown', 'Grey', 'Blue', 'Beige', 'Purple', 'Pink', 'Dark'].map((color, i) => (
                <span key={i} className="bg-white text-black px-3 py-1 rounded-full text-xs border border-gray-300">{color}</span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Sizes:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size, i) => (
                <button key={i} className="bg-white text-black px-3 py-1 rounded-full text-xs border border-gray-300 hover:bg-pink-100">{size}</button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Quantity:</h3>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-20 px-2 py-1 rounded border border-gray-300 text-black"
              />
              <button 
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded"
                onClick={() => addToCart({ ...product, quantity })}
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Details</h3>
            <p className="mb-2">Top Fabric: {product.topFabric}</p>
            <p className="mb-2">Bottom Fabric: {product.bottomFabric}</p>
            <p className="mb-2">Technique: {product.technique}</p>
            <p className="mb-2">Fabric Content: {product.content}</p>
            <p className="mb-4">Description: {product.description}</p>

            <h3 className="text-xl font-semibold mb-2">REVIEWS</h3>
            <p className="mb-4">Your Reviewing: {product.title}</p>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}