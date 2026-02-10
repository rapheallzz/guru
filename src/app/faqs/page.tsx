'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/utils/cn';

const faqs = [
  {
    question: "How do I request a custom craft?",
    answer: "You can use our 'Custom Requests' page to describe your idea. Provide as much detail as possible, including materials, dimensions, and any reference images. Our artisans will review your request and get back to you with a quote."
  },
  {
    question: "What materials do you use?",
    answer: "We prioritize natural and sustainable materials. This includes stoneware clay, FSC-certified wood, organic linen, recycled cotton, and high-quality LED components. Specific material information is listed on each product page."
  },
  {
    question: "Do I need to sign in to buy?",
    answer: "No, we offer a guest-only shopping experience. You don't need to create an account or remember any passwords. Simply add items to your cart and proceed to checkout with your shipping and email details."
  },
  {
    question: "What are your shipping times?",
    answer: "In-stock items are typically dispatched within 2-3 business days. Custom requests and 'Made to Order' items have varying timelines, which will be communicated to you during the request process. Standard UK delivery usually takes 3-5 business days after dispatch."
  },
  {
    question: "Can I return a handmade item?",
    answer: "We want you to love your purchase. If you're not satisfied, you can return standard items within 30 days of receipt. Please note that custom-made or personalized items are generally non-returnable unless they arrive damaged."
  }
];

export default function FAQsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-stone-50 border-b border-stone-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 uppercase tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-stone-600">
            Find quick answers to common questions about our products, custom requests, and shopping experience.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-stone-200 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-bold text-stone-900">{faq.question}</span>
                {openIdx === idx ? <ChevronUp className="w-5 h-5 text-emerald-700" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-emerald-50 rounded-2xl text-center">
          <h2 className="text-xl font-bold text-stone-900 mb-2">Still have questions?</h2>
          <p className="text-stone-600 mb-6">We're happy to help you with anything else you need.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-emerald-700 text-white font-bold rounded-md hover:bg-emerald-800 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
}
