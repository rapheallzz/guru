import React from 'react';
import { products } from '@/data/mockData';
import { ProductCard } from '../ProductCard';
import Link from 'next/link';

export function FeaturedProducts() {
  const featured = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-2">Featured Products</h2>
            <p className="text-stone-600">Discover our most popular handcrafted items and lighting.</p>
          </div>
          <Link href="/shop" className="text-emerald-700 font-semibold hover:underline">
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
