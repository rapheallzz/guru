import React from 'react';
import Image from 'next/image';
import { Truck, Package, Clock, Shield } from 'lucide-react';

export default function DeliveryPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-stone-50 border-b border-stone-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 uppercase tracking-tight">Delivery & Shipping</h1>
          <p className="text-lg text-stone-600">
            We handle every handcrafted piece with extreme care, ensuring it reaches your home safely and sustainably.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-zinc-100 text-zinc-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Shipping Rates</h3>
                <p className="text-stone-600 mb-2"><strong>Standard UK Delivery:</strong> Calculated at checkout</p>
                <p className="text-stone-600"><strong>Large Orders:</strong> FREE shipping available</p>
                <p className="text-sm text-stone-400 mt-2">Currently, we only ship within the United Kingdom. International shipping options coming soon.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-stone-100 text-stone-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Dispatch Timelines</h3>
                <ul className="text-stone-600 space-y-2">
                  <li>• <strong>In-stock items:</strong> 2-3 business days</li>
                  <li>• <strong>Made to Order:</strong> 7-14 business days</li>
                  <li>• <strong>Custom Requests:</strong> As per agreed quote</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-stone-100 text-stone-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Eco-Friendly Packaging</h3>
                <p className="text-stone-600">
                  We use 100% plastic-free, recyclable, and biodegradable packaging materials. For fragile items like pottery, we use honeycomb paper and starch-based packing peanuts to ensure safe transit without harming the planet.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-zinc-100 text-zinc-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Careful Handling</h3>
                <p className="text-stone-600">
                  Every order is hand-packed by our team. We understand the fragility of crafts and the sensitivity of LED electronics, so we double-box where necessary and label all packages appropriately for the most careful transit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 relative rounded-3xl overflow-hidden h-96">
          <Image
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=2000"
            className="object-cover"
            alt="Careful packaging"
            fill
          />
          <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center text-center p-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Our Promise</h2>
              <p className="text-xl text-stone-100 italic">
                "If your item arrives damaged, we will replace it or refund you immediately. Your peace of mind is as important to us as the craft itself."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
