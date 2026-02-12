
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CURRENCY } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        {product.isNewArrival && (
          <span className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
            New
          </span>
        )}
        {product.isBestSeller && (
          <span className="absolute top-4 right-4 bg-amber-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
            Bestseller
          </span>
        )}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
      </div>
      <h3 className="text-sm font-medium tracking-wide uppercase group-hover:underline underline-offset-4">{product.name}</h3>
      <p className="mt-1 text-sm font-bold text-neutral-600">{CURRENCY}{product.price.toLocaleString()}</p>
    </Link>
  );
};

export default ProductCard;
