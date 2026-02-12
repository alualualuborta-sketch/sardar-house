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
    name: 'Stylist Casual Polo Shirt For Men',
    price: 500,
    description: `Stylist Casual Polo Shirt For Men

Fabric: PK Cotton
GSM: 210 (±10)
Export Quality

Size: M, L, XL

M Size:
Length - 27, Chest - 38/39

L Size:
Length - 28, Chest - 40/41

XL Size:
Length - 29, Chest - 42/43`,
    category: 'Men',
    images: ['https://i.postimg.cc/pVcZ0MRk/1770287132-L-1.jpg'],
    sizes: ['M', 'L', 'XL'],
    colors: ['Default'],
    isBestSeller: false,
    isNewArrival: true
  },

  {
    id: '2',
    name: 'Jorjet Digital Print Three Piece',
    price: 1050,
    description: `Fabric Details:

Body: Jorjet fabric with digital print and mirror work
Salwar: Jorjet fabric with digital print
Orna: Silk fabric with digital print

Size: 38 - 4
