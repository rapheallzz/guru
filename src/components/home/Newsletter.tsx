'use client';

import React, { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-md">
            <h2 className="text-3xl font-bold mb-4">Join the Kraft Minds by Guru Club</h2>
            <p className="text-zinc-100">
              Sign up for craft tips, exclusive deals, and early access to our new collections. Plus, get 10% off your first order!
            </p>
          </div>

          <div className="w-full lg:max-w-lg">
            {submitted ? (
              <div className="bg-zinc-800/50 p-6 rounded-lg text-center">
                <p className="text-xl font-bold mb-2">Thank you for subscribing!</p>
                <p>Check your inbox for your welcome discount.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-6 py-4 rounded-md text-stone-900 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-zinc-900 font-bold rounded-md hover:bg-stone-100 transition-colors"
                >
                  Sign Up
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-zinc-200">
              By subscribing, you agree to receive marketing emails. No account required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
