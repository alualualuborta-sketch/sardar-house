
import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import TrustSection from '../components/TrustSection';
import { Product } from '../types';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter(p => p.isNewArrival).slice(0, 4);

  return (
    <div className="animate-fade-in">
      <Hero />
      <CategorySection />

      {/* Best Sellers */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-luxury font-bold uppercase">Best Sellers</h2>
              <p className="text-neutral-500 mt-2">The most coveted pieces this season</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {bestSellers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/offer/1920/800" 
          alt="Limited Offer" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-luxury font-bold uppercase mb-6 tracking-wider">Eid Special Collection</h2>
          <p className="text-xl mb-10 text-neutral-200 uppercase tracking-[0.2em]">Limited Edition Pieces Available</p>
          <button className="bg-white text-black px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-100 transition">Explore Offer</button>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-luxury font-bold uppercase">New Arrivals</h2>
              <p className="text-neutral-500 mt-2">Freshly landed styles from our studio</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <TrustSection />
    </div>
  );
};

export default Home;
