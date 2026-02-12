
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 pt-20 pb-10 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-luxury font-black uppercase tracking-widest mb-6">Sardar House</h3>
          <p className="text-sm text-neutral-500 leading-relaxed mb-6">
            Timeless fashion for the modern generation. Combining Bangladesh's rich textile heritage with global aesthetics.
          </p>
          <div className="flex space-x-4">
            {['fb', 'ig', 'tw'].map(soc => (
              <a key={soc} href="#" className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-xs uppercase hover:bg-black hover:text-white transition">
                {soc}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-neutral-600">
            <li><Link to="/category/Men" className="hover:text-black transition">Men's Collection</Link></li>
            <li><Link to="/category/Women" className="hover:text-black transition">Women's Collection</Link></li>
            <li><Link to="/category/Young%20Adults" className="hover:text-black transition">Young Adults</Link></li>
            <li><Link to="/" className="hover:text-black transition">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Info</h4>
          <ul className="space-y-4 text-sm text-neutral-600">
            <li><a href="#" className="hover:text-black transition">Our Story</a></li>
            <li><a href="#" className="hover:text-black transition">Size Guide</a></li>
            <li><a href="#" className="hover:text-black transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-black transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-neutral-500 mb-6">Join for exclusive early access and luxury updates.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-b border-neutral-300 flex-grow py-2 text-sm focus:outline-none focus:border-black"
            />
            <button className="py-2 px-4 text-xs uppercase font-bold tracking-widest">Join</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400">
        <p>&copy; 2024 SARDAR HOUSE. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
