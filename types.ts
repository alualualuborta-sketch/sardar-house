
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Men' | 'Women' | 'Young Adults';
  images: string[];
  sizes: string[];
  colors: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
