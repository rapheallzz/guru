import React from 'react';
import { products } from '@/data/mockData';
import { ProductCard } from '../ProductCard';
import Link from 'next/link';

export function FeaturedProducts() {
  const featured = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="relative z-20 -mt-24 lg:-mt-48 pb-32">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 lg:p-20 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] rounded-[2.5rem] lg:rounded-[4rem]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-stone-400 mb-2">Our Curation</h2>
              <h3 className="text-3xl lg:text-4xl font-black uppercase text-stone-900">Featured Products</h3>
            </div>
            <Link href="/shop" className="text-xs font-bold uppercase tracking-widest text-emerald-800 border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
              View all products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
