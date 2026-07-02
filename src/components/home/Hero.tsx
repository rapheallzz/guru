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

      <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
        <h2 className="text-xs lg:text-sm font-bold tracking-[0.5em] uppercase mb-8 opacity-90">
          Handcrafted with passion. Naturally inspired.
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-10 leading-[1.05]">
          EXPERIENCE THE UNIQUE ARTISTRY OF KRAFT MINDS BY GURU
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto mb-14 text-stone-100 leading-relaxed opacity-90">
          Our all natural, handcrafted creations are made from the finest sustainable materials.
          Bringing soul and light to your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
        </div>
      </div>
    </div>
  );
}
