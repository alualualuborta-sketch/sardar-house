
import { Product } from './types';

export const WHATSAPP_NUMBER = "8801877278210"; 
export const CURRENCY = "৳";
export const DELIVERY_FEES = {
  INSIDE_DHAKA: 60,
  OUTSIDE_DHAKA: 120
};

export const INITIAL_PRODUCTS: Product[] ={
  id: '6',
  name: 'Cotton Long Sleeve Sweet Shirt',
  price: 500,
  description: `Fabrics: Cotton
GSM: 200
(এগুলো ২০০ GMS এর মোটা টিশার্ট, কেউ সুয়েটার মনে করবেন না,) 

Size: M, L, XL
M: (chest -38 , length-28 )
L : ( chest-40 , length-29 )
XL: ( chest -42 , length-30)`,
  category: 'Men',
  images: ['https://i.postimg.cc/0yJ7Xgjc/1729793872-L-4.jpg'],
  sizes: ['M', 'L', 'XL'],
  colors: ['Default'],
  isNewArrival: true
}
 [
  {
    id: '1',
    name: 'Royal Silk Panjabi - Midnight Black',
    price: 4500,
    description: 'Crafted from premium royal silk, this Panjabi features intricate hand-embroidery on the neck and cuffs. Perfect for grand celebrations and formal events.',
    category: 'Men',
    images: ['https://picsum.photos/seed/p1/800/1000', 'https://picsum.photos/seed/p1b/800/1000'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    isBestSeller: true,
    isNewArrival: true
  },
  {
    id: '2',
    name: 'Embroidered Muslin Saree - Beige Gold',
    price: 12500,
    description: 'A timeless masterpiece. This traditional muslin saree is hand-woven with gold thread motifs and finished with a rich border.',
    category: 'Women',
    images: ['https://picsum.photos/seed/p2/800/1000', 'https://picsum.photos/seed/p2b/800/1000'],
    sizes: ['Free Size'],
    colors: ['Beige Gold', 'Ivory'],
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Modern Cut Linen Blazer',
    price: 8900,
    description: 'A lightweight linen blazer designed for the modern generation. Tailored fit with premium internal lining.',
    category: 'Men',
    images: ['https://picsum.photos/seed/p3/800/1000'],
    sizes: ['38', '40', '42', '44'],
    colors: ['Sand', 'Stone'],
    isNewArrival: true
  },
  {
    id: '4',
    name: 'Contemporary Fusion Kurti',
    price: 3200,
    description: 'A blend of traditional patterns and modern silhouettes. Comfortable cotton blend for everyday luxury.',
    category: 'Women',
    images: ['https://picsum.photos/seed/p4/800/1000'],
    sizes: ['S', 'M', 'L'],
    colors: ['Emerald', 'Ruby'],
    isNewArrival: true
  },
  {
    id: '5',
    name: 'Young Nomad Street Jacket',
    price: 5500,
    description: 'Oversized luxury street wear for the young adults. Waterproof fabric with high-quality zippers.',
    category: 'Young Adults',
    images: ['https://picsum.photos/seed/p5/800/1000'],
    sizes: ['M', 'L', 'XL'],
    colors: ['Olive', 'Slate'],
    isBestSeller: true
  }
];
