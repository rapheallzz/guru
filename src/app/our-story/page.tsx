import React from 'react';
import Image from 'next/image';
import { InfoSections } from '@/components/home/InfoSections';

export default function OurStoryPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-stone-50 border-b border-stone-100 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-6 uppercase tracking-tight">Our Story</h1>
          <p className="text-xl text-stone-600">
            From a humble workshop to a community of artisans.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone lg:prose-xl max-w-none text-stone-600">
            <p className="mb-8">
              Guru Network was born from a desire to celebrate the beauty of the handmade. In an age of mass production and digital noise, we believe there is something profoundly grounding about an object that has been shaped by human hands.
            </p>
            <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552033349-2df701f17379?auto=format&fit=crop&q=80&w=2000"
                alt="Pottery workshop"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Our Philosophy</h2>
            <p className="mb-8">
              We work exclusively with natural materials—clay, wood, linen, and metal. Each material is selected for its quality, sustainability, and the way it ages. We don't just sell products; we sell pieces that are designed to be lived with and loved for generations.
            </p>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Illuminating the Craft</h2>
            <p className="mb-12">
              The addition of LED lighting to our collection was a natural evolution. We saw an opportunity to use modern technology to highlight the textures and forms of traditional crafts. Our LED creations are designed to create warmth and atmosphere, turning functional objects into focal points of light.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
