'use client';

import React from 'react';
import { products } from '@/data/mockData';
import { ProductSlider } from './ProductSlider';
import { motion } from 'framer-motion';

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function FeaturedProducts() {
  const featured = products.filter(p => p.featured);

  return (
    <section className="relative z-20 -mt-12 pb-32">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-stone-900 mb-2">Featured Creations</h2>
          <p className="text-stone-600">Hand-picked favorites from our latest collections</p>
        </motion.div>

        <ProductSlider products={featured} />
      </div>
    </section>
  );
}
