// src/data/products.js
export const featuredProducts = [
  {
    id: 'ZCE23-1A',
    name: 'Classic Kurta',
    description: 'Printed | Cambric',
    price: '9,030',
    originalPrice: '11,000',
    discount: 40,
    image: '/images/1.jpeg',
    sku: 'ICA230601',
    details: 'Top Fabric: Digital Printed Embroidered Cambric | 3m, Bottom Fabric: Digital Printed Cambric | 2.5m, Technique: Printed Embroidered, Fabric Contents: 100% Cotton'
  },
  {
    id: 'ZCE23-6B',
    name: 'Drop Shoulder',
    description: 'Yarn Dyed Embroidered | Raw Silk',
    price: '9,030',
    originalPrice: '12,000',
    discount: 30,
    image: '/images/2.jpeg',
    sku: 'ICA230602',
    details: 'Fabric: Raw Silk, Technique: Hand Embroidered, Fabric Contents: 100% Silk'
  },
  {
    id: 'Z23-6B',
    name: 'Classic Kurta',
    description: 'Printed | Cambric',
    price: '8,820',
    originalPrice: '10,500',
    discount: 20,
    image: '/images/3.jpeg',
    sku: 'ICA230603',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'AL01',
    name: 'Ladies Suit',
    description: 'Stitched 2pcs',
    price: '1,800',
    discount: 0,
    image: '/images/5.jpeg',
    sku: 'AL230601',
    details: 'Ready to wear stitched suit, Fabric: Cotton, Sizes available: XS, S, M, L, XL'
  },
  {
    id: 'KC01',
    name: 'Classic Kameez',
    description: 'Printed | Cambric',
    price: '2,690',
    discount: 0,
    image: '/images/5.jpeg',
    sku: 'KC230601',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'DS01',
    name: 'Drop Shoulder',
    description: 'Yarn Dyed Embroidered',
    price: '5,490',
    discount: 15,
    image: '/images/6.jpeg',
    sku: 'DS230601',
    details: 'Fabric: Raw Silk, Technique: Hand Embroidered, Fabric Contents: 100% Silk'
  },
  {
    id: 'CK02',
    name: 'Classic Kurta',
    description: 'Printed | Cambric',
    price: '2,190',
    discount: 0,
    image: '/images/7.jpeg',
    sku: 'CK230602',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'DS02',
    name: 'Drop Shoulder',
    description: 'Dyed Embroidered | Waffle Jacquard',
    price: '4,490',
    discount: 25,
    image: '/images/8.jpeg',
    sku: 'DS230602',
    details: 'Fabric: Waffle Jacquard, Technique: Dyed Embroidered, Fabric Contents: 100% Cotton'
  }
];

export const womenProducts = [
  ...featuredProducts,
  {
    id: 'CK03',
    name: 'Classic Kurta',
    description: 'Printed | Cambric',
    price: '2,190',
    discount: 0,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'CK230603',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'CK04',
    name: 'Classic Kurta',
    description: 'Printed | Cambric',
    price: '2,190',
    discount: 0,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'CK230604',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'CK05',
    name: 'Classic Kameez',
    description: 'Printed | Cambric',
    price: '2,690',
    discount: 0,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'CK230605',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'DS03',
    name: 'Drop Shoulder',
    description: 'Yarn Dyed Embroidered',
    price: '5,490',
    discount: 15,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'DS230603',
    details: 'Fabric: Raw Silk, Technique: Hand Embroidered, Fabric Contents: 100% Silk'
  }
];

export const topSalesProducts = [
  ...featuredProducts.filter(p => p.discount > 0),
  {
    id: 'AL02',
    name: 'Ladies Suit',
    description: 'Stitched 3pcs',
    price: '2,500',
    discount: 30,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'AL230602',
    details: 'Ready to wear stitched suit, Fabric: Cotton, Sizes available: XS, S, M, L, XL'
  },
  {
    id: 'CK06',
    name: 'Classic Kameez',
    description: 'Printed | Cambric',
    price: '2,690',
    discount: 40,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'CK230606',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  }
];
export const allProducts = [
  {
    id: 1,
    img: '/images/25.jpeg',
    title: 'Ladies suit AL 01',
    price: 1900,
    category: 'stitched',
    type: '1Pcs',
    design: 'Printed | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230601'
  },
  {
    id: 2,
    img: '/images/24.jpeg',
    title: 'Ladies suit AL 02',
    price: 2000,
    category: 'stitched',
    type: '1Pcs',
    design: 'Embroid | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230602'
  },
  {
    id:3,
    img: '/images/23.jpeg',
    title: 'Ladies suit AL 03',
    price: 2100,
    category: 'stitched', 
    type: '1Pcs',
    design: 'Printed | Lawn',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230603'
  },
  {
    id:4,
    img: '/images/22.jpeg',
    title: 'Ladies suit AL 04',
    price: 2200,
    category: 'stitched',
    type: '2Pcs',
    design: 'Printed | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230604'

  },
  {
    id: 5,
    img: '/images/21.jpeg',
    title: 'Ladies suit BL 01',
    price: 2650,
    category: 'stitched',
    type: '2Pcs',
    design: 'Printed | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230605'
  },
  {
    id: 6,
    img: '/images/17.jpeg',
    title: 'Ladies suit BL 02',
    price: 2800,
    category: 'stitched',
    type: '2Pcs',
    design: 'Embroid | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230606'
  },
  {
    id:7,
    img: '/images/19.jpeg',
    title: 'Ladies suit BL 03',
    price: 2950,
    category: 'stitched',
    type: '3Pcs',
    design: 'Printed | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230607'
  },
  {
    id:8,
    img: '/images/18.jpeg',
    title: 'Ladies suit BL 04', 
    price: 3100,
    category: 'stitched',
    type: '3Pcs',
    design: 'Printed | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230608'

  },
  {
    id: 9,
    img: '/images/17.jpeg',
    title: 'Ladies suit CL 01',
    price: 3400,
    category: 'stitched',
    type: '3Pcs',
    design: 'Printed | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230609'
  },
  {
    id: 10,
    img: '/images/16.jpeg',
    title: 'Ladies suit CL 02',
    price: 3600,
    category: 'stitched',
    type: '3Pcs',
    design: 'Embroid | Cambric',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230610'
  },
  { id: 11, 
    img: '/images/15.jpeg', 
    title: 'Ladies suit CL 03', 
    price: 3800,
    category: 'unstitched',
    design: 'Printed | Lawn',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230612'
   },

  { id: 12, 
    img: '/images/14.jpeg', 
    title: 'Ladies suit CL 04', 
    price: 4000,
    category: 'unstitched',
    design: 'Printed | Lawn',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230613'
   },
  {
    id: 13,
    img: '/images/unstitched1.jpeg',
    title: 'Unstitched UL 01',
    price: 1500,
    category: 'unstitched',
    design: 'Printed | Lawn',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230614'
  },
  {
    id: 17,
    img: '/images/topsale1.jpeg',
    title: 'Top Sale TS 01',
    price: 2500,
    category: 'topsale',
    design: 'Printed | Cotton',
    description: 'Essentials Printed Embroidered Top Bottoms',
    topFabric: 'Digital Printed Embroidered Cambric | 3m',
    bottomFabric: 'Digital Printed Cambric | 2.5m',
    technique: 'Printed Embroidered',
    content: '100% Cotton',
    sku: 'ICA230615'
  }
];

export const products = [...featuredProducts, ...womenProducts, ...topSalesProducts];
export const stitchedProducts = allProducts.filter(p => p.category === 'stitched');
export const unstitchedProducts = allProducts.filter(p => p.category === 'unstitched');
export const topsaleProducts = allProducts.filter(p => p.category === 'topsale');
// export const featuredProducts = allProducts.slice(0, 4);