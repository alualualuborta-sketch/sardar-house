
import React from 'react';

const TrustSection: React.FC = () => {
  const items = [
    { emoji: '🚚', title: 'সারাদেশে হোম ডেলিভারি', desc: 'Fast shipping across BD' },
    { emoji: '💵', title: 'ক্যাশ অন ডেলিভারি সুবিধা', desc: 'Secure cash on delivery' },
    { emoji: '🔄', title: '৭ দিনের রিটার্ন', desc: 'Easy 7-day returns' },
    { emoji: '🔒', title: 'নিরাপদ কেনাকাটা', desc: '100% genuine products' }
  ];

  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300 block mb-2">{item.emoji}</span>
            <h4 className="text-sm uppercase tracking-widest font-bold">{item.title}</h4>
            <p className="text-xs text-neutral-400 uppercase tracking-tighter">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
