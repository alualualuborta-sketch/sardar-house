
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface CategoryPageProps {
  products: Product[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ products }) => {
  const { cat } = useParams<{ cat: string }>();
  const filtered = products.filter(p => p.category === decodeURIComponent(cat || ''));

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-fade-in">
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-luxury font-bold uppercase mb-4">{decodeURIComponent(cat || 'Collection')}</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto italic">
          Discover our curated selection of luxury {decodeURIComponent(cat || 'fashion').toLowerCase()} essentials.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center text-neutral-400 italic">
          No products found in this category yet.
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
