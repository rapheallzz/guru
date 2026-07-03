'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Package, RefreshCw, Mail, Search, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SubscriptionsPage() {
  const [email, setEmail] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    // Simulate API delay
    setTimeout(() => {
      const allOrders = JSON.parse(localStorage.getItem('craft-haven-orders') || '[]');
      const filtered = allOrders.filter((o: any) => o.email.toLowerCase() === email.toLowerCase());
      setOrders(filtered);
      setIsSearching(false);
      setHasSearched(true);
    }, 800);
  };

  const subscriptionOrders = orders.filter(order =>
    order.items.some((item: any) => item.subscriptionFrequency)
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-stone-50 border-b border-stone-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-6 uppercase tracking-tight">Manage Subscriptions</h1>
          <p className="text-lg text-stone-600">
            View and manage your recurring craft deliveries. No account needed—just enter the email used for your order.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!hasSearched ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
            <form onSubmit={handleSearch} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Order Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full bg-stone-900 text-white font-bold py-4 rounded-md hover:bg-zinc-700 transition-all flex items-center justify-center space-x-2"
              >
                {isSearching ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>Find My Orders</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-stone-100 pb-6">
              <div>
                <h2 className="text-2xl font-bold text-stone-900">Results for {email}</h2>
                <p className="text-stone-500">Found {subscriptionOrders.length} active subscription plans.</p>
              </div>
              <button
                onClick={() => setHasSearched(false)}
                className="text-sm font-bold text-zinc-700 hover:underline"
              >
                Change Email
              </button>
            </div>

            {subscriptionOrders.length > 0 ? (
              <div className="grid gap-8">
                {subscriptionOrders.map((order) => (
                  <div key={order.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-stone-50 px-6 py-4 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-zinc-100 text-zinc-700 p-2 rounded-lg">
                          <RefreshCw className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Subscription ID</p>
                          <p className="font-mono text-sm font-bold">#{order.id.toUpperCase()}</p>
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <div>
                          <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Next Delivery</p>
                          <p className="text-sm font-bold">In approx. 4 weeks</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Status</p>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-100 text-zinc-800">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="space-y-6">
                        {order.items.filter((item: any) => item.subscriptionFrequency).map((item: any, idx: number) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-bold text-stone-900">{item.name}</h3>
                              <p className="text-sm text-stone-500 mb-2">Quantity: {item.quantity}</p>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-zinc-50 text-zinc-700 text-[10px] font-black uppercase rounded border border-zinc-100">
                                  Every {item.subscriptionFrequency}
                                </span>
                                {item.selectedVariants && Object.entries(item.selectedVariants).map(([k, v]: [string, any]) => (
                                  <span key={k} className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase rounded">
                                    {k}: {v}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-8 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
                        <button className="flex-grow bg-stone-900 text-white font-bold py-3 rounded-md hover:bg-stone-800 transition-colors">
                          Update Frequency
                        </button>
                        <button className="flex-grow border border-stone-200 text-stone-600 font-bold py-3 rounded-md hover:bg-stone-50 transition-colors">
                          Skip Next Delivery
                        </button>
                        <button className="px-6 text-red-500 font-bold text-sm hover:underline">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                <Package className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-stone-900 mb-2">No active subscriptions found</h3>
                <p className="text-stone-500 mb-8 max-w-sm mx-auto">We couldn't find any recurring orders associated with this email address.</p>
                <Link href="/shop" className="inline-flex items-center gap-2 bg-zinc-700 text-white font-bold px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Subscription Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Priority Crafting</h4>
              <p className="text-stone-400 text-sm">Subscription items are prioritized by our artisans for faster dispatch.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Fully Flexible</h4>
              <p className="text-stone-400 text-sm">Skip, pause, or cancel anytime. No commitments, no hidden fees.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Set & Forget</h4>
              <p className="text-stone-400 text-sm">Your favorite crafts delivered on your schedule, so you never run out.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
