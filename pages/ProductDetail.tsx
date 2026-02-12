
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product, CartItem } from '../types';
import { CURRENCY, DELIVERY_FEES, WHATSAPP_NUMBER } from '../constants';

interface ProductDetailProps {
  products: Product[];
  onAddToCart: (item: CartItem) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products, onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || '');
    }
  }, [product]);

  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const handleWhatsAppOrder = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }
    const message = encodeURIComponent(
      `Hello SARDAR HOUSE,\nI want to order:\n\n*Product:* ${product.name}\n*Size:* ${selectedSize}\n*Color:* ${selectedColor}\n*Price:* ${CURRENCY}${product.price}\n\nPlease confirm availability and payment details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleAddAndCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity
    });
    alert("Added to bag!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(img)}
                className={`flex-shrink-0 w-20 h-24 border ${mainImage === img ? 'border-black' : 'border-neutral-200'}`}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-grow aspect-[3/4] bg-neutral-100 overflow-hidden">
            <img src={mainImage} alt={product.name} className="w-full h-full object-cover animate-fade-in" />
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <nav className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4 flex space-x-2">
            <button onClick={() => navigate('/')} className="hover:text-black">Home</button>
            <span>/</span>
            <button onClick={() => navigate(`/category/${product.category}`)} className="hover:text-black">{product.category}</button>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </nav>

          <h1 className="text-4xl font-luxury font-bold uppercase mb-2 leading-tight">{product.name}</h1>
          <p className="text-2xl font-bold mb-8 text-neutral-800">{CURRENCY}{product.price.toLocaleString()}</p>
          
          <div className="space-y-8 mb-10">
            {/* Sizes */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest mb-4">Size</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[50px] h-10 px-4 flex items-center justify-center border text-xs tracking-widest uppercase transition ${selectedSize === size ? 'bg-black text-white border-black' : 'border-neutral-200 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest mb-4">Color</h4>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 flex items-center justify-center border text-xs tracking-widest uppercase transition ${selectedColor === color ? 'bg-black text-white border-black' : 'border-neutral-200 hover:border-black'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest mb-4">Quantity</h4>
              <div className="flex items-center space-x-4 border border-neutral-200 w-fit">
                <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="w-10 h-10 flex items-center justify-center hover:bg-neutral-50">-</button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(q => q+1)} className="w-10 h-10 flex items-center justify-center hover:bg-neutral-50">+</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button 
              onClick={handleWhatsAppOrder}
              className="bg-black text-white py-5 text-sm uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp এ অর্ডার করুন</span>
            </button>
            <button 
              onClick={handleAddAndCart}
              className="border border-black text-black py-5 text-sm uppercase tracking-[0.2em] font-bold hover:bg-neutral-50 transition"
            >
              Add to Bag
            </button>
          </div>

          <div className="border-t border-neutral-100 pt-8 space-y-6">
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest mb-3">Description</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">{product.description}</p>
            </div>
            <div className="bg-neutral-50 p-6 space-y-3">
              <h4 className="text-[10px] uppercase font-bold tracking-[0.2em]">Delivery Info</h4>
              <div className="flex justify-between text-xs">
                <span>Inside Dhaka</span>
                <span className="font-bold">{CURRENCY}{DELIVERY_FEES.INSIDE_DHAKA}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Outside Dhaka</span>
                <span className="font-bold">{CURRENCY}{DELIVERY_FEES.OUTSIDE_DHAKA}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
