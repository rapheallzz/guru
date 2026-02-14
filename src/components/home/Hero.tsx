import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=2000"
        alt="Handmade pottery and craft materials on a wooden table"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-stone-900/30" />

      <div className="relative max-w-4xl mx-auto px-4 text-center text-white z-10">
        <h2 className="text-sm lg:text-base font-bold tracking-[0.4em] uppercase mb-6 opacity-90">
          Handcrafted with passion. Illuminated with care.
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8 leading-[1.1]">
          Discover the Unique Artistry of Guru Network
        </h1>
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 text-stone-100 leading-relaxed">
          Our all natural, handcrafted creations are made from the finest sustainable materials.
          Bringing soul and light to your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="px-10 py-4 bg-white text-stone-900 font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-stone-100 transition-all shadow-xl"
          >
            Shop All
          </Link>
          <Link
            href="/custom-requests"
            className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white hover:text-stone-900 transition-all"
          >
            Custom Requests
          </Link>
        </div>
      </div>
    </div>
  );
}
