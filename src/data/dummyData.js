import makeupImg from '../assets/images/cat_makeup_1777650324705.png';
import skincareImg from '../assets/images/cat_skincare_1777650347108.png';
import haircareImg from '../assets/images/cat_haircare_1777650363251.png';
import perfumeImg from '../assets/images/cat_perfume_1777650379669.png';
import bridalImg from '../assets/images/cat_bridal_1777650395932.png';

export const categories = [
  { id: 1, name: 'Makeup', image: makeupImg },
  { id: 2, name: 'Skincare', image: skincareImg },
  { id: 3, name: 'Haircare', image: haircareImg },
  { id: 4, name: 'Perfumes', image: perfumeImg },
  { id: 5, name: 'Bridal', image: bridalImg },
];

export const products = [
  {
    id: 1,
    name: 'Velvet Matte Lipstick - Crimson Red',
    brand: 'Huda Beauty',
    price: 1850,
    oldPrice: 2200,
    image: makeupImg,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    discount: true,
    category: 'Makeup',
    description: 'A highly pigmented, long-lasting matte lipstick that provides a flawless velvet finish without drying out your lips.'
  },
  {
    id: 2,
    name: 'Flawless Liquid Foundation',
    brand: 'MAC Cosmetics',
    price: 3200,
    image: makeupImg,
    rating: 4.9,
    reviews: 312,
    isNew: false,
    category: 'Makeup',
    description: 'A lightweight, medium-to-full coverage foundation that lasts up to 24 hours while keeping your skin hydrated.'
  },
  {
    id: 3,
    name: 'Vitamin C Face Serum 30ml',
    brand: 'Mamaearth',
    price: 599,
    oldPrice: 699,
    image: skincareImg,
    rating: 4.6,
    reviews: 89,
    isNew: false,
    discount: true,
    category: 'Skincare',
    description: 'Brighten your skin and reduce dark spots with our powerful Vitamin C serum enriched with Turmeric.'
  },
  {
    id: 4,
    name: 'Midnight Rose Eau De Parfum',
    brand: 'Nykaa Beauty',
    price: 1499,
    image: perfumeImg,
    rating: 4.7,
    reviews: 210,
    isNew: true,
    category: 'Perfumes',
    description: 'An alluring blend of deep rose, vanilla, and warm musk that leaves a lasting impression.'
  },
  {
    id: 5,
    name: 'Pro Eyeshadow Palette - 18 Colors',
    brand: 'Sugar Cosmetics',
    price: 1199,
    image: makeupImg,
    rating: 4.5,
    reviews: 67,
    isNew: false,
    category: 'Makeup',
    description: 'Create stunning eye looks with 18 highly pigmented, easily blendable matte and shimmer shades.'
  },
  {
    id: 6,
    name: 'Hydrating Night Cream with Hyaluronic',
    brand: 'L\'Oreal Paris',
    price: 850,
    oldPrice: 999,
    image: skincareImg,
    rating: 4.8,
    reviews: 156,
    discount: true,
    category: 'Skincare',
    description: 'Wake up to plump, glowing skin with our intensely hydrating overnight treatment.'
  },
  {
    id: 7,
    name: 'Moroccan Argan Oil Hair Serum',
    brand: 'Moroccanoil',
    price: 3800,
    image: haircareImg,
    rating: 4.9,
    reviews: 420,
    isNew: false,
    category: 'Haircare',
    description: 'Instantly smooth frizz and boost shine with this lightweight argan oil-infused treatment.'
  },
  {
    id: 8,
    name: 'Bridal Glow Kit - 10 Essentials',
    brand: 'Magnet Exclusives',
    price: 5499,
    oldPrice: 6500,
    image: bridalImg,
    rating: 5.0,
    reviews: 45,
    isNew: true,
    discount: true,
    category: 'Bridal',
    description: 'Everything you need for your special day. A curated collection of premium long-wear cosmetics.'
  },
  {
    id: 9,
    name: 'Waterproof Volumizing Mascara',
    brand: 'Maybelline',
    price: 450,
    image: makeupImg,
    rating: 4.6,
    reviews: 512,
    isNew: false,
    category: 'Makeup',
    description: 'Get extreme volume and length that lasts all day without flaking or smudging.'
  },
  {
    id: 10,
    name: 'Rose Water Facial Toner',
    brand: 'Kama Ayurveda',
    price: 1350,
    image: skincareImg,
    rating: 4.8,
    reviews: 320,
    isNew: false,
    category: 'Skincare',
    description: 'Pure, distilled rose water to hydrate, balance, and refresh your skin.'
  },
  {
    id: 11,
    name: 'Keratin Smooth Shampoo 400ml',
    brand: 'Tresemme',
    price: 520,
    oldPrice: 650,
    image: haircareImg,
    rating: 4.4,
    reviews: 890,
    discount: true,
    category: 'Haircare',
    description: 'Formulated with Keratin and Marula oil to give you 72 hours of frizz control.'
  },
  {
    id: 12,
    name: 'Matte Liquid Eyeliner',
    brand: 'Lakme',
    price: 300,
    image: makeupImg,
    rating: 4.5,
    reviews: 1250,
    isNew: false,
    category: 'Makeup',
    description: 'Deep black, water-resistant formula with an ultra-fine brush for perfect precision.'
  },
  {
    id: 13,
    name: 'Niacinamide 10% Zinc 1%',
    brand: 'The Ordinary',
    price: 600,
    image: skincareImg,
    rating: 4.7,
    reviews: 2100,
    isNew: true,
    category: 'Skincare',
    description: 'A high-strength vitamin and mineral blemish formula to reduce congestion.'
  },
  {
    id: 14,
    name: 'Intense Oud Eau De Parfum',
    brand: 'Gucci',
    price: 9500,
    image: perfumeImg,
    rating: 4.9,
    reviews: 112,
    isNew: false,
    category: 'Perfumes',
    description: 'A rich and exotic scent featuring notes of pear, raspberry, saffron, and orange flower.'
  },
  {
    id: 15,
    name: 'Ultimate Makeup Brush Set (12 pcs)',
    brand: 'Real Techniques',
    price: 1800,
    oldPrice: 2400,
    image: makeupImg,
    rating: 4.8,
    reviews: 430,
    discount: true,
    category: 'Accessories',
    description: 'Professional quality, cruelty-free synthetic brushes for a flawless full-face application.'
  }
];


