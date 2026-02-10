import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=2000"
        alt="Handmade pottery and craft materials on a wooden table"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
          Welcome to CraftHaven – Handmade Crafts, LED Lights, and Custom Creations
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-2xl">
          Emphasizing natural materials and unique custom options for your home and lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/shop"
            className="px-8 py-3 bg-emerald-700 text-white font-semibold rounded-md hover:bg-emerald-800 transition-colors"
          >
            Shop All
          </Link>
          <Link
            href="/custom-requests"
            className="px-8 py-3 bg-white text-stone-900 font-semibold rounded-md hover:bg-stone-100 transition-colors"
          >
            Custom Requests
          </Link>
        </div>
      </div>
    </div>
  );
}
