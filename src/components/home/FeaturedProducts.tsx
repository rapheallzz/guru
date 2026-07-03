import React from 'react';
import { products } from '@/data/mockData';
import { ProductCard } from '../ProductCard';
import Link from 'next/link';

export function FeaturedProducts() {
  const featured = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="relative z-20 -mt-20 pb-32">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
