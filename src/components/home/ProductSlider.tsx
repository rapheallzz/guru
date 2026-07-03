'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/data/types';
import { ProductCard } from '../ProductCard';

interface ProductSliderProps {
  products: Product[];
}

export function ProductSlider({ products }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  // Get visible products for infinite loop feel
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(products[(currentIndex + i) % products.length]);
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="relative group">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 border border-stone-200 shadow-sm hover:bg-white hover:shadow-md transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
        aria-label="Previous products"
      >
        <ChevronLeft className="w-6 h-6 text-stone-900" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 border border-stone-200 shadow-sm hover:bg-white hover:shadow-md transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
        aria-label="Next products"
      >
        <ChevronRight className="w-6 h-6 text-stone-900" />
      </button>

      {/* Mobile Arrows (always visible or more accessible) */}
      <div className="flex justify-between mt-4 sm:hidden px-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white border border-stone-200"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-6 h-6 text-stone-900" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white border border-stone-200"
          aria-label="Next products"
        >
          <ChevronRight className="w-6 h-6 text-stone-900" />
        </button>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden px-2 py-4">
        <motion.div
          className="flex gap-6"
          initial={false}
          animate={{ x: 0 }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visibleProducts.map((product, index) => (
              <motion.div
                key={`${product.id}-${currentIndex + index}`}
                layout
                initial={{ opacity: 0, scale: 0.9, x: direction * 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -direction * 50 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 24 / itemsToShow}px)` }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
