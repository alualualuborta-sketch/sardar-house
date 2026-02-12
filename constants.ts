import { Product } from './types';

export const WHATSAPP_NUMBER = "8801877278210"; 
export const CURRENCY = "৳";
export const DELIVERY_FEES = {
  INSIDE_DHAKA: 60,
  OUTSIDE_DHAKA: 120
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cotton Long Sleeve Sweet Shirt',
    price: 500,
    description: `Fabrics: Cotton
GSM: 200
(এগুলো ২০০ GMS এর মোটা টিশার্ট, কেউ সুয়েটার মনে করবেন না, ভিডিও দেখে নিন)

Size: M, L, XL
M: (chest -38 , length-28 )
L : ( chest-40 , length-29 )
XL: ( chest -42 , length-30)`,
    category: 'Men',
    images: ['https://i.postimg.cc/0yJ7Xgjc/1729793872-L-4.jpg'],
    sizes: ['M', 'L', 'XL'],
    colors: ['Default'],
    isBestSeller: true,
    isNewArrival: true
  }
];
