import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Award, ShoppingBag, MessageSquare } from 'lucide-react';

export function InfoSections() {
  return (
    <>
      {/* Our Story */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-xl mb-12 lg:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                alt="Artisan at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 uppercase tracking-tight">Our Story</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Founded in a small workshop in 2019, Kraft Minds by Guru began with a simple belief: that the objects we surround ourselves with should have a soul. What started as a passion for traditional pottery has grown into a curated sanctuary for all things handmade.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                We bridge the gap between ancient techniques and modern aesthetics, bringing together masters of wood, clay, textile, and light. Every piece in our shop tells a story of patience, skill, and natural beauty.
              </p>
              <Link href="/our-story" className="inline-block px-6 py-3 border-2 border-stone-900 text-stone-900 font-bold rounded-md hover:bg-stone-900 hover:text-white transition-all">
                Discover Our Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 uppercase tracking-tight">Why Choose Kraft Minds by Guru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-100 text-zinc-700 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Handmade Quality</h3>
              <p className="text-stone-600">Every item is crafted by hand with meticulous attention to detail and quality.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-stone-100 text-stone-700 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Eco-Friendly</h3>
              <p className="text-stone-600">We use natural, sustainable materials and eco-conscious packaging for all orders.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-100 text-zinc-700 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Guest Shopping</h3>
              <p className="text-stone-600">No account needed. We value your time and privacy – simply shop and go.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-stone-100 text-stone-700 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Custom Requests</h3>
              <p className="text-stone-600">Looking for something specific? Our artisans are ready to bring your vision to life.</p>
            </div>
          </div>
          <div className="mt-16">
            <Link href="/custom-requests" className="inline-block px-10 py-4 bg-zinc-700 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-700/20">
              Request a Custom Creation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
