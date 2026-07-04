'use client';

import React from 'react';
import Image from 'next/image';
import { products } from '@/data/mockData';

const ProductMarquee = () => {
  // Triple the products to ensure a seamless infinite scroll
  const marqueeProducts = [...products, ...products, ...products];

  return (
    <section className="py-0 bg-black overflow-hidden border-y border-zinc-800">
      <div className="relative group">
        {/*
          Using CSS Animation for the marquee because it handles "pause on hover"
          much more smoothly than Framer Motion for infinite loops without jumps.
        */}
        <div
          className="flex marquee-track hover:[animation-play-state:paused] cursor-pointer"
          style={{ width: 'fit-content' }}
        >
          {marqueeProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="relative flex-shrink-0 w-[300px] md:w-[450px] h-[400px] md:h-[550px] group/item overflow-hidden"
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover/item:scale-110"
              />

              {/* Product Name Overlay - Visible on Hover to match "elegant" aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                  <p className="text-zinc-400 text-sm mb-2 uppercase tracking-widest">Handcrafted</p>
                  <h3 className="text-white text-2xl md:text-3xl font-light tracking-tight mb-4">
                    {product.name}
                  </h3>
                  <div className="w-12 h-[1px] bg-white transition-all duration-500 group-hover/item:w-24" />
                </div>
              </div>

              {/* Always visible minimal name for mobile or if preferred */}
              <div className="absolute bottom-4 left-4 md:hidden">
                <span className="text-white/70 text-xs tracking-widest uppercase bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMarquee;
