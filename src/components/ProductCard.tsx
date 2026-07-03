'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/data/types';
import { useStore } from '@/hooks/useStore';
import { cn } from '@/utils/cn';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white border border-stone-100 rounded-lg overflow-hidden hover:shadow-md"
    >
      <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-stone-100">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
        </motion.div>
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


        <p className="text-stone-600 text-sm line-clamp-2 h-10">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}
