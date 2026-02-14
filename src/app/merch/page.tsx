import React from 'react';
import { products } from '@/data/mockData';
import { ProductCard } from '@/components/ProductCard';

export default function MerchPage() {
  const merchItems = products.filter(p => p.category === 'Merch');

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-stone-50 border-b border-stone-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 uppercase tracking-tight">Guru Network Merch</h1>
          <p className="text-lg text-stone-600">
            Show your love for handmade crafts with our branded accessories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {merchItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-stone-500">More merch coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
