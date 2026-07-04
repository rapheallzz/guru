'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/hooks/useStore';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, RefreshCw } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-stone-400" />
        </div>
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Your cart is empty</h1>
        <p className="text-stone-600 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link
          href="/shop"
          className="px-8 py-3 bg-stone-900 text-white font-bold rounded-md hover:bg-zinc-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-10 uppercase tracking-tight">Your Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
              <ul className="divide-y divide-stone-100">
                {cart.map((item) => (
                  <li key={item.cartItemId} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-24 h-24 flex-shrink-0 bg-stone-50 rounded-lg overflow-hidden relative">
                      <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex-grow text-center sm:text-left">
                      <Link href={`/product/${item.id}`} className="text-lg font-bold text-stone-900 hover:text-zinc-700 transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-sm text-stone-500 mb-2">{item.category}</p>

                      {item.selectedVariants && Object.keys(item.selectedVariants).length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2 justify-center sm:justify-start">
                          {Object.entries(item.selectedVariants).map(([key, value]) => (
                            <span key={key} className="inline-block px-2 py-1 bg-stone-100 text-[10px] font-bold uppercase text-stone-600 rounded">
                              {key}: {value}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.subscriptionFrequency && (
                        <div className="flex items-center gap-1.5 mb-4 justify-center sm:justify-start text-zinc-700">
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span className="text-xs font-bold uppercase tracking-wider">
                            Subscribed: every {item.subscriptionFrequency}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center justify-center sm:justify-start space-x-4">
                        <div className="flex items-center border border-stone-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 hover:text-zinc-700 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 hover:text-zinc-700 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-stone-400 hover:text-red-500 transition-colors flex items-center text-xs"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 sticky top-32">
              <h2 className="text-lg font-bold text-stone-900 mb-6 uppercase tracking-wider">Order Summary</h2>


              <Link
                href="/checkout"
                className="w-full bg-zinc-700 text-white font-bold py-4 rounded-md hover:bg-zinc-800 transition-all flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="mt-6">
                <p className="text-xs text-stone-400 text-center">
                  Secure checkout for guests. No account required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
