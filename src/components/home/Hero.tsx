'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=2000"
          alt="Handmade pottery and craft materials on a wooden table"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-stone-900/30" />

      <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs lg:text-sm font-bold tracking-[0.5em] uppercase mb-8"
        >
          Handcrafted with passion. Naturally inspired.
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-10 leading-[1.05]"
        >
          EXPERIENCE THE UNIQUE ARTISTRY OF KRAFT MINDS BY GURU
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto mb-14 text-stone-100 leading-relaxed"
        >
          Our all natural, handcrafted creations are made from the finest sustainable materials.
          Bringing soul and light to your home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/shop"
            className="px-12 py-5 bg-white text-stone-900 font-bold uppercase tracking-[0.25em] text-[11px] rounded-full hover:bg-zinc-50 transition-all shadow-2xl"
          >
            Shop All
          </Link>
          <Link
            href="/custom-requests"
            className="px-12 py-5 border-2 border-white text-white font-bold uppercase tracking-[0.25em] text-[11px] rounded-full hover:bg-white hover:text-stone-900 transition-all"
          >
            Custom Requests
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
