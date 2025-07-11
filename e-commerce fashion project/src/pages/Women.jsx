// src/pages/Women.jsx
import React from 'react';
import Fiftypercent from '../components/Fiftypercent';

const Women = () => {
  const categoryDetails = [
    {
      title: 'UNIVERSITY WEAR',
      items: ['Short shirts', 'Long shirts', 'Frocks', 'Gowns'],
      image: '/images/1.jpeg',
      bgColor: '#ffe6f0', // very light pink
    },
    {
      title: 'SHADDI BAYA WEAR',
      items: ['Embroidered', 'Traditional', 'Luxury Pret', 'Maxi'],
      image: '/images/2.jpeg',
      bgColor: '#fddde6', // light pink
    },
    {
      title: 'DESI WEAR',
      items: ['Kameez Shalwar', 'Dupattas', 'Churidars', 'Angarkha'],
      image: '/images/22.jpeg',
      bgColor: '#f0f0f0', // light silver
    },
    {
      title: 'ABAYAS',
      items: ['Plain Abayas', 'Embellished', 'Front open', 'Layered'],
      image: '/images/25.jpeg',
      bgColor: '#ffe5b4', // light peach
    },
  ];

  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb-style heading */}
        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Home / Women</h2>

        {/* Main title */}
        <h1 className="text-3xl font-bold mb-4">Womens</h1>

        {/* Intro paragraph */}
        <p className="text-gray-600 mb-10">
          Elisha offers a vast selection of women’s clothing to shop. Each season<br/>
          finds a  careful assortment of clothing no matter the season, trend-driven <br/>
          and classic  pieces  are available. Elisha is committed to helping shoppers <br/> 
          be their most stylish selves.
        </p>

        {/* Categories Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">Categories</h2>

        {/* Cards in 2 rows of 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  {categoryDetails.map((cat, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row items-center p-4 sm:p-6 rounded-lg"
      style={{ backgroundColor: cat.bgColor, maxWidth: '100%' }}
    >
      {/* Image */}
      <img
        src={cat.image}
        alt={cat.title}
        className="w-full sm:w-84 h-92 sm:h-106 object-cover rounded-2xl mb-4 sm:mb-0 sm:mr-6"
      />

      {/* Text */}
      <div className="text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{cat.title}</h3>
        {cat.items.map((item, i) => (
          <p key={i} className="text-gray-700 text-sm sm:text-base">
            {item}
          </p>
        ))}
      </div>
    </div>
  ))}
</div>

      </div>

      <Fiftypercent/>

      {/* All Products Section */}
{/* All Products Section */}
<div className="container mx-auto px-4 mt-16">
  {/* Heading with bold horizontal lines on both sides */}
  <div className="flex items-center justify-center mb-12">
    <div className="border-b-4 border-gray-700 w-20 mr-4"></div>
    <h2 className="text-3xl font-bold text-gray-800">ALL PRODUCTS</h2>
    <div className="border-b-4 border-gray-700 w-20 ml-4"></div>
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { img: '/images/1.jpeg', title: 'Classic Kameez', desc: 'Printed | Cambric', price: '2,690' },
    { img: '/images/22.jpeg', title: 'Drop Shoulder', desc: 'Yarn Dyed Embroidered | Raw Silk', price: '5,490' },
    { img: '/images/21.jpeg', title: 'Classic Kurta', desc: 'Printed | Cambric', price: '2,190' },
    { img: '/images/17.jpeg', title: 'Summer Kurti', desc: 'Printed | Lawn', price: '2,990' },
    { img: '/images/25.jpeg', title: 'Elegant Frock', desc: 'Embroidered | Cotton Net', price: '4,850' },
    { img: '/images/18.jpeg', title: 'Minimalist Shirt', desc: 'Solid | Lawn', price: '1,950' },
  ].map((p, idx) => (
    <div key={idx} className="flex flex-col">
      <img
        src={p.img}
        alt={p.title}
        className="w-full h-108 sm:h-126 object-cover rounded-md"
      />
      <div className="text-left mt-2 pl-2">
        <p className="font-medium text-sm sm:text-base text-gray-800">{p.title}</p>
        <p className="text-gray-600 text-sm">{p.desc}</p>
        <p className="text-black font-semibold text-sm">Rs. {p.price}</p>
      </div>
    </div>
  ))}
</div>

</div>

{/* New Arrival Section */}
<div className="container mx-auto px-4 mt-20">
  {/* Heading with short bold horizontal lines */}
  <div className="flex items-center justify-center mb-12">
    <div className="border-b-4 border-gray-700 w-20 mr-4"></div>
    <h2 className="text-3xl font-bold text-gray-800">NEW ARRIVAL</h2>
    <div className="border-b-4 border-gray-700 w-20 ml-4"></div>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Left large card */}
  <div className="p-2">
    <img
      src="/images/11.jpeg"
      alt="New Arrival 1"
      className="w-full h-80 sm:h-[640px] object-cover rounded-md"
    />
  </div>

  {/* Right 4 cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2">
    {['13', '14', '9', '6'].map((num) => (
      <div key={num} className="p-2">
        <img
          src={`/images/${num}.jpeg`}
          alt={`New Arrival ${num}`}
          className="w-full h-62 sm:h-[300px] object-cover rounded-md"
        />
      </div>
    ))}
  </div>
</div>

</div>


    </div>

    

  );
};

export default Women;
