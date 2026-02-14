'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, Menu, X, ChevronDown } from 'lucide-react';
import { useStore } from '@/hooks/useStore';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';

const mainNavigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Shop All',
    href: '/shop',
    subItems: [
      { name: 'All Products', href: '/shop' },
      { name: 'Craft Works', href: '/shop?category=Craft+Works' },
      { name: 'LED Lights', href: '/shop?category=LED+Lights' },
    ]
  },
  { name: 'Custom Requests', href: '/custom-requests' },
  { name: 'Blog', href: '/blog' },
];

const supportNavigation = [
  { name: 'FAQs', href: '/faqs' },
  { name: 'Delivery', href: '/delivery' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { totalItems, wishlist } = useStore();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      {/* Secondary Top Bar */}
      <div className="bg-stone-800 text-white py-2 text-[10px] sm:text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>FREE DELIVERY ON ORDERS OVER £50</div>
          <div className="hidden md:flex space-x-4">
            {supportNavigation.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-emerald-400 transition-colors uppercase tracking-wider">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-stone-900">
              GURU<span className="text-emerald-700">NETWORK</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className="text-xs font-bold uppercase tracking-wider text-stone-600 group-hover:text-emerald-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <ChevronDown className="ml-1 w-3 h-3 text-stone-400 group-hover:text-emerald-700 transition-colors" />

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white border border-gray-100 shadow-xl rounded-md py-2 overflow-hidden">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-600 hover:bg-stone-50 hover:text-emerald-700"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-emerald-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xs mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-100 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-emerald-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-emerald-700">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 text-stone-600 hover:text-emerald-700" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/wishlist" className="p-2 text-stone-600 hover:text-emerald-700 relative" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-emerald-600 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link href="/cart" className="p-2 text-stone-600 hover:text-emerald-700 relative" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-emerald-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden p-2 text-stone-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-4 h-20 border-b border-gray-100">
            <Link href="/" className="text-2xl font-bold tracking-tight text-stone-900" onClick={() => setIsMenuOpen(false)}>
              GURU<span className="text-emerald-700">NETWORK</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-stone-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-4">
            {mainNavigation.map((item) => (
              <div key={item.name} className="space-y-2">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full text-lg font-medium text-stone-900 border-b border-stone-100 pb-2"
                    >
                      {item.name}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", openSubmenu === item.name && "rotate-180")} />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="pl-4 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-stone-600 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-stone-900 border-b border-stone-100 pb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-gray-100">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Support</p>
              {supportNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-stone-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
