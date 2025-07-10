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
              className="flex items-center p-6 rounded-lg"
              style={{ backgroundColor: cat.bgColor, height: '400px', maxWidth: '550px' }}
            >
              {/* Image on the left */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-80 h-90 rounded-2xl  mr-6"
              />

              {/* Text on the right */}
              <div className="flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                {cat.items.map((item, i) => (
                  <p key={i} className="text-gray-700 text-base leading-relaxed">
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Product Card 1 */}
    <div className="flex flex-col">
      <img
        src="/images/1.jpeg"
        alt="Classic Kameez"
        className="w-full h-[450px] object-cover"

      />
      <div className="text-left mt-2 pl-2">
        <p className="font-medium text-sm text-gray-800">Classic Kameez</p>
        <p className="text-gray-600 text-sm">Printed | Cambric</p>
        <p className="text-black font-semibold text-sm">Rs. 2,690</p>
      </div>
    </div>

    {/* Product Card 2 */}
    <div className="flex flex-col">
      <img
        src="/images/22.jpeg"
        alt="Drop Shoulder"
        className="w-full h-[450px] object-cover"

      />
      <div className="text-left mt-2 pl-2">
        <p className="font-medium text-sm text-gray-800">Drop Shoulder</p>
        <p className="text-gray-600 text-sm">Yarn Dyed Embroidered | Raw Silk</p>
        <p className="text-black font-semibold text-sm">Rs. 5,490</p>
      </div>
    </div>

    {/* Product Card 3 */}
    <div className="flex flex-col">
      <img
        src="/images/21.jpeg"
        alt="Classic Kurta"
        className="w-full h-[450px] object-cover"
      />
      <div className="text-left mt-2 pl-2">
        <p className="font-medium text-sm text-gray-800">Classic Kurta</p>
        <p className="text-gray-600 text-sm">Printed | Cambric</p>
        <p className="text-black font-semibold text-sm">Rs. 2,190</p>
      </div>
    </div>

    {/* Product Card 4 */}
    <div className="flex flex-col">
      <img
        src="/images/20.jpeg"
        alt="Summer Kurti"
        className="w-full h-[450px] object-cover"
      />
      <div className="text-left mt-2 pl-2">
        <p className="font-medium text-sm text-gray-800">Summer Kurti</p>
        <p className="text-gray-600 text-sm">Printed | Lawn</p>
        <p className="text-black font-semibold text-sm">Rs. 2,990</p>
      </div>
    </div>

    {/* Product Card 5 */}
    <div className="flex flex-col">
      <img
        src="/images/25.jpeg"
        alt="Elegant Frock"
        className="w-full h-[450px] object-cover"
      />
      <div className="text-left mt-2 pl-2">
        <p className="font-medium text-sm text-gray-800">Elegant Frock</p>
        <p className="text-gray-600 text-sm">Embroidered | Cotton Net</p>
        <p className="text-black font-semibold text-sm">Rs. 4,850</p>
      </div>
    </div>

    {/* Product Card 6 */}
    <div className="flex flex-col">
      <img
        src="/images/18.jpeg"
        alt="Minimalist Shirt"
        className="w-full h-[450px] object-cover"
      />
      <div className="text-left mt-2 pl-2">
        <p className="font-medium text-sm text-gray-800">Minimalist Shirt</p>
        <p className="text-gray-600 text-sm">Solid | Lawn</p>
        <p className="text-black font-semibold text-sm">Rs. 1,950</p>
      </div>
    </div>
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
    {/* Large Left Card */}
    <div className="col-span-1 lg:col-span-1  p-4">
      <img
        src="/images/11.jpeg"
        alt="New Arrival 1"
        className="w-full h-[540px] object-cover"
      />
    </div>

    {/* 4 Small Cards on Right in 2 Rows */}
    <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className=" p-2">
        <img
          src="/images/13.jpeg"
          alt="New Arrival 2"
          className="w-full h-[250px] object-cover"
        />
      </div>
      <div className=" p-2">
        <img
          src="/images/14.jpeg"
          alt="New Arrival 3"
          className="w-full h-[250px] object-cover"
        />
      </div>
      <div className=" p-2">
        <img
          src="/images/9.jpeg"
          alt="New Arrival 4"
          className="w-full h-[250px] object-cover"
        />
      </div>
      <div className=" p-2">
        <img
          src="/images/6.jpeg"
          alt="New Arrival 5"
          className="w-full h-[250px] object-cover"
        />
      </div>
    </div>
  </div>
</div>


    </div>

    

  );
};

export default Women;
