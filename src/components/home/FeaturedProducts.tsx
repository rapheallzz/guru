'use client';

import React from 'react';
import { products } from '@/data/mockData';
import { ProductSlider } from './ProductSlider';

export function FeaturedProducts() {
  const featured = products.filter(p => p.featured);

  return (
    <section className="relative z-20 -mt-24 pb-32">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductSlider products={featured} />
      </div>
    </section>
  );
}
