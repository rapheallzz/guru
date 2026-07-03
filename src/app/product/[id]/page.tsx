'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/mockData';
import { useStore } from '@/hooks/useStore';
import { Star, ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { cn } from '@/utils/cn';
import { ProductCard } from '@/components/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description');

  // Initialize variants with first options if available
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product?.variants?.forEach(v => {
      initial[v.name] = v.options[0];
    });
    return initial;
  });

  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscription'>('one-time');
  const [subscriptionFrequency, setSubscriptionFrequency] = useState<'4 weeks' | '6 weeks' | '8 weeks'>('4 weeks');

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    const finalPrice = purchaseType === 'subscription' ? product.price * 0.9 : product.price;
    addToCart({
      ...product,
      price: finalPrice,
      selectedVariants,
      subscriptionFrequency: purchaseType === 'subscription' ? subscriptionFrequency : undefined
    }, quantity);
  };

  return (
    <div className="bg-white min-h-screen pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : product.images.length - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => (prev < product.images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="flex space-x-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all relative",
                    selectedImage === idx ? "border-zinc-700 opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-4xl font-bold text-stone-900 mb-2">{product.name}</h1>
            <p className="text-3xl font-black text-zinc-700 mb-6">₦{product.price.toFixed(2)}</p>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-stone-600 leading-relaxed mb-8">{product.description}</p>
            </div>
            <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
              <Link href="/contact" className="px-8 py-4 bg-stone-900 text-white font-bold rounded-md hover:bg-zinc-700 transition-all uppercase tracking-widest text-sm">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
