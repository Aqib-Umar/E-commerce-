import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();

  const product = {
    id,
    mainImage: 'https://via.placeholder.com/400x500',
    images: [
      'https://via.placeholder.com/100x120',
      'https://via.placeholder.com/100x120',
      'https://via.placeholder.com/100x120',
    ],
    title: 'Printed Embroidered Cambric | Top Bottoms',
    price: 3590,
    sku: 'ICA230601',
    availability: 'In stock',
    colors: ['White', 'Red', 'Cyan', 'Navy', 'Vermillion', 'Orange', 'Black', 'Yellow', 'Green', 'Magenta', 'Red', 'Brown', 'Grey', 'Blue', 'Beige', 'Purple', 'Pink', 'Dark'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: {
      topFabric: 'Digital Printed Embroidered Cambric | 3m',
      bottomFabric: 'Digital Printed Cambric | 2.5m',
      technique: 'Printed Embroidered',
      content: '100% Cotton',
      description: 'Essentials Printed Embroidered Top Bottoms',
    },
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left: Thumbnails + Main Image */}
        <div className="flex">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3 mr-3">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt="thumb" className="w-20 h-24 object-cover rounded shadow" />
            ))}
          </div>

          {/* Main image with fixed height */}
          <div className="flex-shrink-0">
            <img
              src={product.mainImage}
              alt="Main"
              className="w-[500px] h-[600px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right: Product details */}
        <div className="bg-pink-100 text-[#6B4226] p-6 rounded-xl flex-grow max-w-md ml-auto">
  <h2 className="text-xl font-bold mb-2">Fabrics 2 Piece</h2>
  <p className="text-md mb-1">{product.title}</p>
  <p className="text-lg font-semibold mb-1">PKR {product.price}</p>
  <p className="mb-1">Availability: {product.availability}</p>
  <p className="mb-3">SKU: {product.sku}</p>

  <div className="mb-4">
    <h3 className="font-semibold">Filters color:</h3>
    <div className="flex flex-wrap gap-2 mt-2">
      {product.colors.map((color, i) => (
        <span key={i} className="bg-white text-black px-3 py-1 rounded-full text-xs border border-gray-300">{color}</span>
      ))}
    </div>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold">Sizes:</h3>
    <div className="flex flex-wrap gap-2 mt-2">
      {product.sizes.map((size, i) => (
        <button key={i} className="bg-white text-black px-3 py-1 rounded-full text-xs border border-gray-300 hover:bg-pink-100">{size}</button>
      ))}
    </div>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold mb-1">Price Range:</h3>
    <p>PKR 2000 - 10000</p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold mb-1">Quantity:</h3>
    <div className="flex items-center gap-3">
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-20 px-2 py-1 rounded border border-gray-300 text-black"
      />
      <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded">Add to Cart</button>
    </div>
  </div>

  {/* Merged Details and Reviews */}
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4">Details</h3>
    <p className="mb-2">Top Fabric: {product.details.topFabric}</p>
    <p className="mb-2">Bottom Fabric: {product.details.bottomFabric}</p>
    <p className="mb-2">Technique: {product.details.technique}</p>
    <p className="mb-2">Fabric Content: {product.details.content}</p>
    <p className="mb-4">Description: {product.details.description}</p>

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
