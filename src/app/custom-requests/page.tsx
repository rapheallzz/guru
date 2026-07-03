'use client';

import React, { useState } from 'react';
import { Send, Upload, Info, CheckCircle2 } from 'lucide-react';

export default function CustomRequestsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('--- CUSTOM REQUEST SUBMITTED ---');
    console.log('To: artisan@gurunetwork.com');
    console.log('From:', formData.email);
    console.log('Payload:', formData);
    console.log('--------------------------------');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-20 h-20 bg-zinc-100 text-zinc-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-stone-900 mb-4">Request Sent!</h1>
        <div className="text-stone-600 mb-8 text-center max-w-md">
          <p className="mb-4">Thank you, <strong>{formData.name}</strong>! We've received your request for:</p>
          <div className="bg-stone-50 p-4 rounded-lg text-sm italic mb-4">
            "{formData.description.substring(0, 100)}{formData.description.length > 100 ? '...' : ''}"
          </div>
          <p>Our lead artisan will review your vision and get back to you at <strong>{formData.email}</strong> within 2-3 business days.</p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', description: '', budget: '' });
          }}
          className="px-8 py-3 bg-stone-900 text-white font-bold rounded-md hover:bg-zinc-700 transition-colors"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-stone-50 border-b border-stone-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-6 uppercase tracking-tight">Custom Requests</h1>
          <p className="text-lg text-stone-600">
            Have a unique idea in mind? Our artisans love a challenge. From personalized engravings to bespoke pottery and custom lighting setups, we're here to bring your creativity to life.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Name *</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Describe Your Idea *</label>
              <textarea
                required
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="Tell us about the project, materials, colors, and any specific requirements..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Budget Range (₦)</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  placeholder="e.g. ₦50 - ₦100"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Upload Reference Image</label>
                <div className="relative border-2 border-dashed border-stone-200 rounded-md p-3 flex items-center justify-center hover:bg-stone-50 transition-colors cursor-pointer">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <Upload className="w-5 h-5 text-stone-400 mr-2" />
                  <span className="text-sm text-stone-500">Choose a file...</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg flex items-start gap-3">
              <Info className="w-5 h-5 text-zinc-700 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-stone-600">
                Custom requests are subject to artisan availability. We will provide a quote and estimated timeline after reviewing your description.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-stone-900 text-white font-bold py-4 rounded-md hover:bg-zinc-700 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Submit Custom Request</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
