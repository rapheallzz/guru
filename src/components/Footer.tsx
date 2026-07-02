import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="block">
              <div className="relative w-32 h-32 -ml-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="KRAFT MINDS BY GURU"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-stone-400 text-sm">
              Handcrafted with passion, illuminated with care. We bring you the finest handmade crafts and unique LED creations from local artisans.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/shop" className="text-sm hover:text-white transition-colors">Shop All</Link></li>
                  <li><Link href="/shop?category=Craft+Works" className="text-sm hover:text-white transition-colors">Craft Works</Link></li>
                  <li><Link href="/shop?category=LED+Lights" className="text-sm hover:text-white transition-colors">LED Lights</Link></li>
                  <li><Link href="/custom-requests" className="text-sm hover:text-white transition-colors">Custom Requests</Link></li>
                  <li><Link href="/merch" className="text-sm hover:text-white transition-colors">Merch</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/faqs" className="text-sm hover:text-white transition-colors">FAQs</Link></li>
                  <li><Link href="/delivery" className="text-sm hover:text-white transition-colors">Delivery Info</Link></li>
                  <li><Link href="/subscriptions" className="text-sm hover:text-white transition-colors">Manage Subscriptions</Link></li>
                  <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center text-sm"><MapPin className="w-4 h-4 mr-2" /> 123 Artisan Way, Kraft City</li>
                  <li className="flex items-center text-sm"><Phone className="w-4 h-4 mr-2" /> 0333 123 4567</li>
                  <li className="flex items-center text-sm"><Mail className="w-4 h-4 mr-2" /> hello@kraftminds.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Kraft Minds by Guru. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-xs hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-xs hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
