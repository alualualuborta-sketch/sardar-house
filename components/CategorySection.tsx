
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Men', image: 'https://picsum.photos/seed/menfashion/600/800', link: '/category/Men' },
  { name: 'Women', image: 'https://picsum.photos/seed/womenfashion/600/800', link: '/category/Women' },
  { name: 'Young Adults', image: 'https://picsum.photos/seed/youth/600/800', link: '/category/Young%20Adults' }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-luxury font-bold uppercase tracking-tight">Our Universe</h2>
          <p className="text-neutral-500 mt-2">Explore the craftsmanship across all collections</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to={cat.link}
            className="group relative h-[600px] overflow-hidden bg-neutral-100"
          >
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-12 left-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-luxury font-bold mb-4">{cat.name}</h3>
              <span className="inline-block border border-white/40 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition">
                Shop Collection
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
