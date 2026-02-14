'use client';

import React, { useState } from 'react';
import { useStore } from '@/hooks/useStore';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/cn';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useStore();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postcode: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');

  const shipping = totalPrice >= 50 ? 0 : 4.95;
  const total = totalPrice + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save order to local storage for "Manage Subscriptions" later
    const orders = JSON.parse(localStorage.getItem('craft-haven-orders') || '[]');
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      items: cart,
      total: total,
      email: formData.email,
      status: paymentMethod === 'card' ? 'Paid' : 'Pending Payment'
    };
    localStorage.setItem('craft-haven-orders', JSON.stringify([...orders, newOrder]));

    setIsCompleted(true);
    clearCart();
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-stone-50">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-stone-100">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">Order Confirmed!</h1>

          {paymentMethod === 'card' ? (
            <div className="mb-8">
              <p className="text-stone-600 mb-4">Your payment was successful and your order is being processed.</p>
              <div className="bg-stone-50 p-4 rounded-lg text-sm text-stone-500">
                A confirmation email has been sent to <span className="font-bold">{formData.email}</span>.
              </div>
            </div>
          ) : (
            <>
              <p className="text-stone-600 mb-8">Thank you for your order. To complete your purchase, please transfer the total amount to the following account:</p>
              <div className="bg-stone-50 p-6 rounded-lg text-left mb-8 border border-stone-200">
                <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 text-center">Payment Details</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Bank:</span>
                    <span className="font-bold">Artisan Bank UK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Account Name:</span>
                    <span className="font-bold">Guru Network Ltd</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Account Number:</span>
                    <span className="font-bold">12345678</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Sort Code:</span>
                    <span className="font-bold">00-11-22</span>
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t border-stone-200">
                    <span className="text-stone-900 font-bold">Total Amount:</span>
                    <span className="text-xl font-black text-emerald-700">£{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-stone-500 mb-8 flex items-start gap-2 text-left">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-700" />
                <span>Please use your email address as the payment reference. Your order will be shipped once the payment is confirmed.</span>
              </p>
            </>
          )}

          <Link
            href="/"
            className="block w-full bg-stone-900 text-white font-bold py-4 rounded-md hover:bg-emerald-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/shop" className="text-emerald-700 font-bold">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
              <form onSubmit={handleSubmit} className="space-y-10">
                <section>
                  <h2 className="text-xl font-bold text-stone-900 mb-6 uppercase tracking-tight border-b border-stone-100 pb-2">Shipping Information</h2>
                  <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">First Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Last Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Address *</label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">City *</label>
                    <input
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Postcode *</label>
                    <input
                      required
                      type="text"
                      value={formData.postcode}
                      onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                      className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-stone-900 mb-6 uppercase tracking-tight border-b border-stone-100 pb-2">Payment Method</h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={cn(
                        "p-4 border rounded-lg flex flex-col items-center gap-2 transition-all",
                        paymentMethod === 'card' ? "border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500" : "border-stone-200 text-stone-500"
                      )}
                    >
                      <ShieldCheck className="w-6 h-6" />
                      <span className="text-sm font-bold">Credit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={cn(
                        "p-4 border rounded-lg flex flex-col items-center gap-2 transition-all",
                        paymentMethod === 'bank' ? "border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500" : "border-stone-200 text-stone-500"
                      )}
                    >
                      <Info className="w-6 h-6" />
                      <span className="text-sm font-bold">Bank Transfer</span>
                    </button>
                  </div>

                  {paymentMethod === 'card' ? (
                    <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 space-y-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Secure Card Payment (Mock)</span>
                        <div className="flex gap-1">
                          <div className="w-8 h-5 bg-stone-300 rounded" />
                          <div className="w-8 h-5 bg-stone-300 rounded" />
                          <div className="w-8 h-5 bg-stone-300 rounded" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-500 mb-1 uppercase">Card Number</label>
                        <input
                          required={paymentMethod === 'card'}
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                          placeholder="0000 0000 0000 0000"
                          className="w-full px-4 py-3 rounded border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-500 mb-1 uppercase">Expiry Date</label>
                          <input
                            required={paymentMethod === 'card'}
                            type="text"
                            value={formData.expiry}
                            onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                            placeholder="MM / YY"
                            className="w-full px-4 py-3 rounded border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-stone-500 mb-1 uppercase">CVC</label>
                          <input
                            required={paymentMethod === 'card'}
                            type="text"
                            value={formData.cvc}
                            onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                            placeholder="123"
                            className="w-full px-4 py-3 rounded border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
                      <p className="text-sm text-emerald-800">
                        You will be provided with our bank details on the next page to complete your manual transfer.
                      </p>
                    </div>
                  )}
                </section>

                <div className="pt-6 border-t border-stone-100">
                  <div className="flex items-center space-x-3 mb-6 p-4 bg-stone-100 rounded-lg text-stone-600">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <p className="text-xs">Guest checkout secured with 256-bit SSL encryption. Your data is protected.</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-stone-900 text-white font-bold py-4 rounded-md hover:bg-emerald-700 transition-all shadow-lg shadow-stone-900/10"
                  >
                    {paymentMethod === 'card' ? `Pay £${total.toFixed(2)}` : 'Place Order'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <h2 className="text-lg font-bold text-stone-900 mb-6 uppercase tracking-wider">Your Order</h2>
              <ul className="divide-y divide-stone-100 mb-6">
                {cart.map((item) => (
                  <li key={item.cartItemId} className="py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 bg-stone-50 rounded overflow-hidden">
                        <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-stone-900 text-white text-[10px] flex items-center justify-center rounded-full font-bold z-10">
                          {item.quantity}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-stone-700 line-clamp-1">{item.name}</span>
                        {(item.selectedVariants || item.subscriptionFrequency) && (
                          <div className="flex flex-wrap gap-1 mt-0.5">
                            {item.selectedVariants && Object.values(item.selectedVariants).map((v, i) => (
                              <span key={i} className="text-[9px] text-stone-400 uppercase font-bold">{v}</span>
                            ))}
                            {item.subscriptionFrequency && (
                              <span className="text-[9px] text-emerald-600 uppercase font-bold">Every {item.subscriptionFrequency}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-bold text-stone-900">£{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 pt-6 border-t border-stone-100">
                <div className="mb-6">
                  <label htmlFor="promo" className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="promo"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 text-sm rounded border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    <button type="button" className="px-4 py-2 bg-stone-100 text-stone-600 rounded text-xs font-bold uppercase hover:bg-stone-200 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-stone-500">
                  <span>Subtotal</span>
                  <span>£{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-stone-900 pt-3">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
