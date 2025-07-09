// src/data/products.js
export const featuredProducts = [
  {
    id: 'ZCE23-1A',
    name: 'Classic Kurta',
    description: 'Printed | Cambric',
    price: '9,030',
    originalPrice: '11,000',
    discount: 40,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'ICA230603',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'AL01',
    name: 'Ladies Suit',
    description: 'Stitched 2pcs',
    price: '1,800',
    discount: 0,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'AL230601',
    details: 'Ready to wear stitched suit, Fabric: Cotton, Sizes available: XS, S, M, L, XL'
  },
  {
    id: 'KC01',
    name: 'Classic Kameez',
    description: 'Printed | Cambric',
    price: '2,690',
    discount: 0,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'KC230601',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'DS01',
    name: 'Drop Shoulder',
    description: 'Yarn Dyed Embroidered',
    price: '5,490',
    discount: 15,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'DS230601',
    details: 'Fabric: Raw Silk, Technique: Hand Embroidered, Fabric Contents: 100% Silk'
  },
  {
    id: 'CK02',
    name: 'Classic Kurta',
    description: 'Printed | Cambric',
    price: '2,190',
    discount: 0,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sku: 'CK230602',
    details: 'Fabric: Premium Cambric, Technique: Printed, Fabric Contents: 100% Cotton'
  },
  {
    id: 'DS02',
    name: 'Drop Shoulder',
    description: 'Dyed Embroidered | Waffle Jacquard',
    price: '4,490',
    discount: 25,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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

export const products = [...featuredProducts, ...womenProducts, ...topSalesProducts];