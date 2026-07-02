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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs (Simple) */}
        <nav className="mb-8 flex items-center text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-stone-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-900 font-medium">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
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
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold text-zinc-700 uppercase tracking-widest mb-2">{product.category}</p>
                <h1 className="text-3xl font-bold text-stone-900 mb-4">{product.name}</h1>
              </div>
              <button
                onClick={() => toggleWishlist(product)}
                className={cn(
                  "p-3 rounded-full border transition-all",
                  inWishlist ? "bg-red-50 border-red-100 text-red-500" : "bg-stone-50 border-stone-100 text-stone-400 hover:text-red-500"
                )}
              >
                <Heart className={cn("w-6 h-6", inWishlist && "fill-current")} />
              </button>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-5 h-5", i < Math.floor(product.rating) ? "fill-current" : "text-stone-300")} />
                ))}
              </div>
              <span className="ml-2 text-stone-500 text-sm">({product.reviews.length} reviews)</span>
              <span className="mx-4 text-stone-200">|</span>
              <span className={cn(
                "text-xs font-bold uppercase tracking-widest",
                product.inventory > 0 ? "text-zinc-600" : "text-amber-600"
              )}>
                {product.inventory > 0 ? `In Stock (${product.inventory})` : 'Made to Order'}
              </span>
            </div>

            <div className="mb-8">
              {product.allowSubscription ? (
                <div className="space-y-4">
                  <button
                    onClick={() => setPurchaseType('one-time')}
                    className={cn(
                      "w-full p-4 text-left border rounded-lg transition-all flex justify-between items-center",
                      purchaseType === 'one-time' ? "border-zinc-700 bg-zinc-50" : "border-stone-200"
                    )}
                  >
                    <div>
                      <p className="font-bold text-stone-900">One-time purchase</p>
                    </div>
                    <p className="font-bold text-stone-900">£{product.price.toFixed(2)}</p>
                  </button>

                  <button
                    onClick={() => setPurchaseType('subscription')}
                    className={cn(
                      "w-full p-4 text-left border rounded-lg transition-all",
                      purchaseType === 'subscription' ? "border-zinc-700 bg-zinc-50" : "border-stone-200"
                    )}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-bold text-stone-900">Subscribe & Save (10%)</p>
                        <p className="text-sm text-stone-500">Regular delivery to your door</p>
                      </div>
                      <p className="font-bold text-stone-900">£{(product.price * 0.9).toFixed(2)}</p>
                    </div>

                    {purchaseType === 'subscription' && (
                      <div className="pt-4 border-t border-zinc-200">
                        <p className="text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Delivery every:</p>
                        <div className="flex gap-2">
                          {['4 weeks', '6 weeks', '8 weeks'].map((freq) => (
                            <button
                              key={freq}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSubscriptionFrequency(freq as any);
                              }}
                              className={cn(
                                "px-3 py-1 text-xs font-bold rounded-full border transition-all",
                                subscriptionFrequency === freq
                                  ? "bg-zinc-700 border-zinc-700 text-white"
                                  : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                              )}
                            >
                              {freq}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              ) : (
                <p className="text-3xl font-bold text-stone-900">£{product.price.toFixed(2)}</p>
              )}
            </div>

            <div className="mb-8">
              <p className="text-stone-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Variant Selectors */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-6 mb-8">
                {product.variants.map((variant) => (
                  <div key={variant.name}>
                    <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3">
                      Select {variant.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {variant.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => setSelectedVariants(prev => ({ ...prev, [variant.name]: option }))}
                          className={cn(
                            "px-4 py-2 text-sm font-medium rounded-md border transition-all",
                            selectedVariants[variant.name] === option
                              ? "bg-stone-900 border-stone-900 text-white shadow-md"
                              : "bg-white border-stone-200 text-stone-600 hover:border-stone-400"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity Selector & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-stone-200 rounded-md">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:text-zinc-700 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:text-zinc-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-stone-900 text-white font-bold py-4 rounded-md hover:bg-zinc-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-stone-900/10"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{product.inventory === 0 ? 'Order (Made to Order)' : 'Add to Cart'}</span>
              </button>
            </div>

            {/* Features/Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-t border-stone-100">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-zinc-700" />
                <span className="text-xs font-medium text-stone-600">Fast UK Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-5 h-5 text-zinc-700" />
                <span className="text-xs font-medium text-stone-600">30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-zinc-700" />
                <span className="text-xs font-medium text-stone-600">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20">
          <div className="border-b border-stone-200">
            <div className="flex space-x-8">
              {(['description', 'details', 'reviews'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "pb-4 text-sm font-bold uppercase tracking-wider transition-all relative",
                    activeTab === tab ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
                  )}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-700" />}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none text-stone-600">
                <p>{product.description}</p>
                <p className="mt-4">Our artisans spend hours on each piece, ensuring that no two items are exactly alike. This adds to the character and unique story of your purchase.</p>
              </div>
            )}
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-stone-900">Materials</h4>
                    <p className="text-stone-600">{product.details.materials || 'N/A'}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Dimensions</h4>
                    <p className="text-stone-600">{product.details.dimensions || 'N/A'}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Care Instructions</h4>
                  <p className="text-stone-600">{product.details.care || 'Wipe with a soft, dry cloth.'}</p>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {product.reviews.length > 0 ? (
                  product.reviews.map(review => (
                    <div key={review.id} className="border-b border-stone-100 pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={cn("w-4 h-4", i < review.rating ? "fill-current" : "text-stone-300")} />
                          ))}
                        </div>
                        <span className="font-bold text-stone-900">{review.author}</span>
                        <span className="ml-auto text-xs text-stone-400">{review.date}</span>
                      </div>
                      <p className="text-stone-600">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-stone-500 italic">No reviews yet. Be the first to share your experience!</p>
                )}

                <div className="bg-stone-50 p-6 rounded-lg">
                  <h4 className="font-bold text-stone-900 mb-4">Write a Review</h4>
                  <p className="text-sm text-stone-600 mb-4">Your email address will not be published. Required fields are marked *</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-stone-300 hover:text-yellow-400 cursor-pointer" />
                      ))}
                    </div>
                    <textarea
                      placeholder="Your Review *"
                      className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 h-32"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Name *" className="px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500" />
                      <input type="email" placeholder="Email *" className="px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500" />
                    </div>
                    <button className="px-8 py-3 bg-stone-900 text-white font-bold rounded-md hover:bg-zinc-700 transition-colors">
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-stone-900 mb-10 uppercase tracking-tight">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Mobile Add to Cart */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-4 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">{product.name}</p>
            <p className="text-sm font-black text-stone-900">£{(purchaseType === 'subscription' ? product.price * 0.9 : product.price).toFixed(2)}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-stone-900 text-white font-bold px-6 py-3 rounded-md hover:bg-zinc-700 transition-all flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
