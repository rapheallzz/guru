'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/data/types';
import { useStore } from '@/hooks/useStore';
import { cn } from '@/utils/cn';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative bg-white border border-stone-100 rounded-lg overflow-hidden transition-all hover:shadow-md">
      <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-stone-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.inventory === 0 && (
          <div className="absolute top-2 left-2 bg-stone-900/80 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
            Made to Order
          </div>
        )}
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs text-zinc-700 font-semibold uppercase tracking-wider">{product.category}</p>
          <button
            onClick={() => toggleWishlist(product)}
            className={cn(
              "p-1 transition-colors",
              inWishlist ? "text-red-500" : "text-stone-300 hover:text-red-500"
            )}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={cn("w-5 h-5", inWishlist && "fill-current")} />
          </button>
        </div>

        <Link href={`/product/${product.id}`}>
          <h3 className="text-stone-900 font-medium mb-1 group-hover:text-zinc-700 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-stone-600 text-sm mb-4 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-stone-900">£{product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center space-x-1 px-3 py-1.5 bg-stone-900 text-white text-sm font-medium rounded hover:bg-zinc-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
