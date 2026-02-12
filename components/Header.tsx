
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import { CURRENCY, WHATSAPP_NUMBER } from '../constants';

interface HeaderProps {
  cartCount: number;
  cartItems: CartItem[];
  onRemove: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, cartItems, onRemove }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const itemsText = cartItems.map(item => `- ${item.name} (${item.selectedSize}, ${item.selectedColor}) x${item.quantity}`).join('\n');
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const message = encodeURIComponent(`Hello SARDAR HOUSE, I would like to order:\n\n${itemsText}\n\nTotal Price: ${CURRENCY}${total}\n\nPlease confirm my order.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
          <Link to="/" className="text-2xl lg:text-3xl font-luxury font-black tracking-widest uppercase text-black">
            Sardar House
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link to="/category/Men" className="text-sm uppercase tracking-widest font-medium hover:text-amber-700 transition">Men</Link>
          <Link to="/category/Women" className="text-sm uppercase tracking-widest font-medium hover:text-amber-700 transition">Women</Link>
          <Link to="/category/Young%20Adults" className="text-sm uppercase tracking-widest font-medium hover:text-amber-700 transition">Young Adults</Link>
          <Link to="/admin" className="text-sm uppercase tracking-widest font-medium text-neutral-400 hover:text-black">Admin</Link>
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hidden md:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            className="p-2 relative flex items-center"
            onClick={() => setIsCartOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[60]" onClick={() => setIsCartOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl flex flex-col slide-in">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-luxury font-bold">Your Bag ({cartCount})</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-neutral-500 italic">Your bag is empty</p>
                  <button 
                    onClick={() => { setIsCartOpen(false); navigate('/'); }}
                    className="mt-4 underline text-sm uppercase tracking-widest"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="flex space-x-4 border-b border-neutral-100 pb-4">
                    <img src={item.images[0]} alt={item.name} className="w-20 h-24 object-cover" />
                    <div className="flex-grow">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-neutral-500 mt-1">{item.selectedSize} / {item.selectedColor}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-semibold">{CURRENCY}{item.price * item.quantity}</span>
                        <button onClick={() => onRemove(idx)} className="text-xs text-red-500 underline">Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-neutral-50">
                <div className="flex justify-between mb-4">
                  <span className="text-neutral-500">Subtotal</span>
                  <span className="font-bold text-lg">{CURRENCY}{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-neutral-800 transition flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-8 lg:hidden animate-fade-in">
           <div className="flex justify-between items-center mb-12">
            <span className="font-luxury font-black text-2xl uppercase">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
           </div>
           <nav className="flex flex-col space-y-6 text-2xl font-luxury">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/category/Men">Men</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/category/Women">Women</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/category/Young%20Adults">Young Adults</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/admin" className="text-neutral-400">Admin</Link>
           </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
