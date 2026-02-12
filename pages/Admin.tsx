
import React, { useState } from 'react';
import { Product } from '../types';
import { CURRENCY } from '../constants';

interface AdminProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Admin: React.FC<AdminProps> = ({ products, setProducts }) => {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: 0,
    description: '',
    category: 'Men',
    sizes: [],
    colors: [],
    images: ['']
  });

  const resetForm = () => {
    setFormData({
      name: '',
      price: 0,
      description: '',
      category: 'Men',
      sizes: [],
      colors: [],
      images: ['']
    });
    setIsEditing(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    if (isEditing) {
      setProducts(prev => prev.map(p => p.id === isEditing ? { ...p, ...formData as Product } : p));
    } else {
      const newProduct: Product = {
        ...formData as Product,
        id: Date.now().toString(),
      };
      setProducts(prev => [...prev, newProduct]);
    }
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleEdit = (product: Product) => {
    setFormData(product);
    setIsEditing(product.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-luxury font-bold">Admin Dashboard</h1>
        <button 
          onClick={() => window.location.href = '#/'}
          className="text-xs uppercase tracking-widest font-bold underline"
        >
          View Store
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-1">
          <div className="bg-neutral-50 p-8 border border-neutral-100">
            <h2 className="text-xl font-luxury font-bold mb-6">
              {isEditing ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block">Product Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full border p-3 text-sm focus:outline-none focus:border-black" 
                  required
                />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block">Price (BDT)</label>
                <input 
                  type="number" 
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                  className="w-full border p-3 text-sm focus:outline-none focus:border-black" 
                  required
                />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block">Category</label>
                <select 
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value as any})}
                  className="w-full border p-3 text-sm focus:outline-none focus:border-black"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Young Adults">Young Adults</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block">Description</label>
                <textarea 
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full border p-3 text-sm focus:outline-none focus:border-black h-24"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block">Image URL</label>
                <input 
                  type="text" 
                  value={formData.images?.[0]}
                  onChange={e => setFormData({...formData, images: [e.target.value]})}
                  placeholder="https://picsum.photos/..."
                  className="w-full border p-3 text-sm focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <button type="submit" className="flex-grow bg-black text-white py-4 text-xs font-bold uppercase tracking-widest">
                  {isEditing ? 'Update Product' : 'Add Product'}
                </button>
                {isEditing && (
                  <button type="button" onClick={resetForm} className="px-6 border border-neutral-300 text-xs font-bold uppercase">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* List */}
        <div className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-4 text-[10px] uppercase tracking-widest font-bold">Product</th>
                  <th className="py-4 text-[10px] uppercase tracking-widest font-bold">Category</th>
                  <th className="py-4 text-[10px] uppercase tracking-widest font-bold">Price</th>
                  <th className="py-4 text-[10px] uppercase tracking-widest font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {products.map(p => (
                  <tr key={p.id} className="hover:bg-neutral-50 transition">
                    <td className="py-4">
                      <div className="flex items-center space-x-4">
                        <img src={p.images[0]} className="w-12 h-16 object-cover bg-neutral-100" />
                        <span className="text-sm font-medium">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-neutral-500">{p.category}</td>
                    <td className="py-4 text-sm font-bold">{CURRENCY}{p.price.toLocaleString()}</td>
                    <td className="py-4">
                      <div className="flex space-x-3">
                        <button onClick={() => handleEdit(p)} className="text-[10px] uppercase font-bold text-amber-700 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(p.id)} className="text-[10px] uppercase font-bold text-red-600 hover:underline">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
