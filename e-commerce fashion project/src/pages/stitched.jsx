import React, { useState } from 'react';
import { featuredProducts } from '../data/products';
import { Link } from 'react-router-dom';
import {
  SlidersHorizontal,
  Truck,
  Ruler,
  BadgePercent,
  DollarSign,
  Filter,
  ChevronDown,
} from 'lucide-react';
const stitched1Pcs = [
  { id: 1, img: '/images/25.jpeg', title: 'Ladies suit AL 01', price: 1900 },
  { id: 2, img: '/images/24.jpeg', title: 'Ladies suit AL 02', price: 2000 },
  { id: 3, img: '/images/23.jpeg', title: 'Ladies suit AL 03', price: 2100 },
  { id: 4, img: '/images/22.jpeg', title: 'Ladies suit AL 04', price: 2200 },
];

const stitched2Pcs = [
  { id: 5, img: '/images/21.jpeg', title: 'Ladies suit BL 01', price: 2650 },
  { id: 6, img: '/images/17.jpeg', title: 'Ladies suit BL 02', price: 2800 },
  { id: 7, img: '/images/19.jpeg', title: 'Ladies suit BL 03', price: 2950 },
  { id: 8, img: '/images/18.jpeg', title: 'Ladies suit BL 04', price: 3100 },
];

const stitched3Pcs = [
  { id: 9, img: '/images/17.jpeg', title: 'Ladies suit CL 01', price: 3400 },
  { id: 10, img: '/images/16.jpeg', title: 'Ladies suit CL 02', price: 3600 },
  { id: 11, img: '/images/15.jpeg', title: 'Ladies suit CL 03', price: 3800 },
  { id: 12, img: '/images/14.jpeg', title: 'Ladies suit CL 04', price: 4000 },
];



export default function Stitched() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const filters = [
    { label: 'Filter', icon: <Filter className="w-5 h-5 mr-2" />, options: ['All', 'Popular', 'New'] },
    { label: 'Ready & Ship', icon: <Truck className="w-5 h-5 mr-2" />, options: ['Yes', 'No'] },
    { label: 'Size', icon: <Ruler className="w-5 h-5 mr-2" />, options: ['Small', 'Medium', 'Large'] },
    { label: 'Price', icon: <DollarSign className="w-5 h-5 mr-2" />, options: ['Low to High', 'High to Low'] },
    { label: 'Discount', icon: <BadgePercent className="w-5 h-5 mr-2" />, options: ['10%', '20%', '30%'] },
    { label: 'Sort By', icon: <SlidersHorizontal className="w-5 h-5 mr-2" />, options: ['Newest', 'Oldest'] },
  ];

  return (
    <div className="py-10 bg-gray-50 px-4">
      {/* Top Headings */}
      <div className="text-center mb-6 px-4">
  <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">WOMEN'S</h1>
  <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">Stitched Suit</h2>
  <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
   Elisha offers a vast selection of women’s clothing to shop. Each season <br />
          finds a careful assortment of clothing no matter the season, trend-driven <br />
          and classic pieces are available. Elisha is committed to helping shoppers <br />
          be their most stylish selves.
  </p>
</div>


      {/* Filters with Dropdowns */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-10 px-2 sm:px-4">
  {filters.map((filter, index) => (
    <div key={index} className="relative w-full sm:w-auto">
      <button
        onClick={() => toggleDropdown(index)}
        className="bg-pink-100 text-gray-700 w-full sm:w-52 px-4 py-2 rounded-full shadow-sm flex items-center justify-center hover:bg-pink-200 transition"
      >
        {filter.icon}
        <span className="text-sm font-medium">{filter.label}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {/* Dropdown stays responsive */}
      {activeDropdown === index && (
        <div className="absolute mt-2 left-0 w-full bg-pink-50 rounded-lg shadow-lg border border-pink-200 z-20">
          <ul className="text-sm text-gray-700 py-2">
            {filter.options.map((option, i) => (
              <li
                key={i}
                className="px-4 py-2 hover:bg-pink-100 cursor-pointer"
                onClick={() => setActiveDropdown(null)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
</div>


      {/* Categories Heading with Shorter Bold Line */}
      <div className="relative flex justify-center items-center mb-10">
        <div className="absolute border-b-4 border-gray-700 w-[250px] z-0 top-1/2 transform -translate-y-1/2 rounded"></div>
        <div className="relative z-10 bg-[#5C4033] px-8 py-3 rounded shadow-md">
          <h2 className="text-white text-2xl font-semibold tracking-wide">Categories</h2>
        </div>
      </div>

     
{/* Circular Designs Section */}
<div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-4 px-4">
  {[
    { src: '/images/1.jpeg', alt: 'PSC 1', label: '1PSC' },
    { src: '/images/2.jpeg', alt: 'PSC 2', label: '2PSC' },
    { src: '/images/3.jpeg', alt: 'PSC 3', label: '3PSC' },
  ].map((image, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-[6px] sm:border-[8px] border-[#5C4033] bg-pink-100 flex items-center justify-center">
        <img
          src={image.src}
          alt={image.alt}
          className="w-20 h-20 sm:w-26 sm:h-26 rounded-full object-cover"
        />
      </div>
      <p className="text-base sm:text-lg font-semibold text-gray-700 mt-2">{image.label}</p>
    </div>
  ))}
</div>

{/* All Products Heading */}
<div className="flex items-center justify-center mb-10">
  <div className="w-24 h-[6px] bg-[#5C4033] mr-4 rounded"></div>
  <h2 className="text-4xl font-bold text-gray-800">All Products</h2>
  <div className="w-24 h-[6px] bg-[#5C4033] ml-4 rounded"></div>
</div>
<div className="max-w-7xl mx-auto px-4">
  {/* === 1Pcs Products Section === */}
  {/* === Stitched 1Pcs Heading === */}
<div className="flex items-center justify-center mb-10">
  <div className="w-20 h-[6px] bg-[#5C4033] mr-4 rounded"></div>
  <h2 className="text-2xl font-bold text-gray-800">Stitched 1Pcs</h2>
  <div className="w-20 h-[6px] bg-[#5C4033] ml-4 rounded"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
  {stitched1Pcs.map((item) => (
    <div key={item.id} className="flex flex-col">
      <Link to={`/product/${item.id}`}>
        <img
  src={item.img}
  alt={item.title}
  className="w-full h-96 sm:h-88 object-cover"
/>

      </Link>
      <div className="mt-2 text-left text-sm font-medium text-gray-700">
        {item.title} <br />
        PKR: {item.price}
      </div>
    </div>
  ))}
</div>


  {/* === Stitched 2Pcs Heading === */}
  {/* === Stitched 1Pcs Heading === */}
<div className="flex items-center justify-center mb-10">
  <div className="w-20 h-[6px] bg-[#5C4033] mr-4 rounded"></div>
  <h2 className="text-2xl font-bold text-gray-800">Stitched 2Pcs</h2>
  <div className="w-20 h-[6px] bg-[#5C4033] ml-4 rounded"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
  {stitched2Pcs.map((item) => (
    <div key={item.id} className="flex flex-col">
      <Link to={`/product/${item.id}`}>
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-102 sm:h-102 object-cover"
        />
      </Link>
      <div className="mt-2 text-left text-sm font-medium text-gray-700">
        {item.title} <br />
        PKR: {item.price}
      </div>
    </div>
  ))}
</div>


  {/* === Stitched 3Pcs Heading === */}
  {/* === Stitched 1Pcs Heading === */}
<div className="flex items-center justify-center mb-10">
  <div className="w-20 h-[6px] bg-[#5C4033] mr-4 rounded"></div>
  <h2 className="text-2xl font-bold text-gray-800">Stitched 3Pcs</h2>
  <div className="w-20 h-[6px] bg-[#5C4033] ml-4 rounded"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
  {stitched3Pcs.map((item) => (
    <div key={item.id} className="flex flex-col">
      <Link to={`/product/${item.id}`}>
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-106 sm:h-102 object-cover"
        />
      </Link>
      <div className="mt-2 text-left text-sm font-medium text-gray-700">
        {item.title} <br />
        PKR: {item.price}
      </div>
    </div>
  ))}
</div>

</div>

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
  className="bg-[#b9b2b2] p-4 sm:p-6 md:p-8 shadow-md max-w-7xl mx-auto rounded-xl"
  style={{ minHeight: '370px' }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
    {featuredProducts.slice(4, 8).map((product, index) => (
      <div
        key={index}
        className="p-2  overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 sm:h-66 md:h-78 object-cover"
        />
      </div>
    ))}
  </div>
</div>

  </div>
</div>

    </div>

  );
  
}

