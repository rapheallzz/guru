'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '@/hooks/useStore';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-300">
          <Heart className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Your wishlist is empty</h1>
        <p className="text-stone-600 mb-8">Save items you love here for later. No account needed!</p>
        <Link
          href="/shop"
          className="px-8 py-3 bg-stone-900 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
        >
          Explore Crafts
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-bold text-stone-900 uppercase tracking-tight">Your Wishlist</h1>
            <p className="text-stone-600">Saved items from our collection.</p>
          </div>
          <p className="text-sm text-stone-400">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map(product => (
            <div key={product.id} className="relative group">
              <ProductCard product={product} />
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-2 right-2 p-2 bg-white/80 rounded-full text-red-500 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 shadow-sm"
                title="Remove from wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
