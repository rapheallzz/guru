'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-20 h-20 bg-zinc-100 text-zinc-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-stone-900 mb-4">Message Sent!</h1>
        <p className="text-stone-600 mb-8 text-center max-w-md">
          Thank you for reaching out. We've received your message and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-3 bg-stone-900 text-white font-bold rounded-md hover:bg-zinc-700 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-stone-50 border-b border-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 uppercase tracking-tight">Contact Us</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Have a question about an order or want to learn more about our crafts? We're here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-tight">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Email Us</h3>
                  <p className="text-stone-600">hello@gurunetwork.com</p>
                  <p className="text-sm text-stone-400">Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Call Us</h3>
                  <p className="text-stone-600">0333 123 4567</p>
                  <p className="text-sm text-stone-400">Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Visit Our Studio</h3>
                  <p className="text-stone-600">123 Artisan Way, Craft Town<br />Herefordshire, HR1 2AB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Your Name *</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-white rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email Address *</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 bg-white rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-white rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Exchanges</option>
                  <option>Wholesale</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 text-white font-bold py-4 rounded-md hover:bg-zinc-700 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
