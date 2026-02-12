
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Admin from './pages/Admin';
import CategoryPage from './pages/CategoryPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Product, CartItem } from './types';
import { INITIAL_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('sardar_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('sardar_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('sardar_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('sardar_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.selectedSize === item.selectedSize && i.selectedColor === item.selectedColor);
      if (existing) {
        return prev.map(i => i === existing ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} cartItems={cart} onRemove={removeFromCart} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} onAddToCart={addToCart} />} />
            <Route path="/category/:cat" element={<CategoryPage products={products} />} />
            <Route path="/admin" element={<Admin products={products} setProducts={setProducts} />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
