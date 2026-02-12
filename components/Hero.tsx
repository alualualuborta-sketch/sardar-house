
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/luxury/1920/1080" 
          alt="Luxury Fashion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white animate-fade-in">
        <div className="max-w-xl">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">
            New Collection 2024
          </span>
          <h1 className="text-6xl md:text-8xl font-luxury font-black leading-tight mb-8">
            Premium Fashion Collection
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 text-neutral-200 tracking-wide">
            Timeless style for the modern generation. Hand-crafted pieces designed to make a statement.
          </p>
          <Link 
            to="/category/Women"
            className="inline-block bg-white text-black px-12 py-5 text-sm uppercase font-bold tracking-[0.2em] hover:bg-neutral-100 transition shadow-xl"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        <div className="w-12 h-[2px] bg-white" />
        <div className="w-12 h-[2px] bg-white/30" />
        <div className="w-12 h-[2px] bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
