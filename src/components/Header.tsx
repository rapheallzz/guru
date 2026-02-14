'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useStore } from '@/hooks/useStore';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Shop All',
    href: '/shop',
    subItems: [
      { name: 'Craft Works', href: '/shop?category=Craft+Works' },
      { name: 'LED Lights', href: '/shop?category=LED+Lights' },
    ]
  },
  {
    name: 'Discover',
    href: '/our-story',
    subItems: [
      { name: 'Our Story', href: '/our-story' },
      { name: 'Custom Requests', href: '/custom-requests' },
      { name: 'Blog', href: '/blog' },
    ]
  },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useStore();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-emerald-900 text-white py-3 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-center px-4">
        Free delivery over £50
      </div>

      <header className={cn(
        "bg-white transition-all duration-300 sticky top-0 z-50",
        isScrolled ? "shadow-md" : "border-b border-stone-100"
      )}>
        <nav>
          {/* Main Header Section */}
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center h-24 lg:h-32">
              {/* Left: Search (Desktop) / Menu (Mobile) */}
              <div className="flex-1 flex items-center">
                <div className="hidden lg:block">
                  {isSearchOpen ? (
                    <form onSubmit={handleSearch} className="flex items-center">
                      <input
                        autoFocus
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="SEARCH YOUR ITEMS..."
                        className="w-64 bg-transparent border-b border-stone-900 py-2 text-[11px] font-bold uppercase tracking-widest focus:outline-none"
                      />
                      <button type="button" onClick={() => setIsSearchOpen(false)} className="ml-4">
                        <X className="w-5 h-5 text-stone-400" />
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="flex items-center text-stone-800 hover:text-emerald-800 transition-colors group"
                    >
                      <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="ml-3 text-[11px] font-bold uppercase tracking-[0.2em]">Search</span>
                    </button>
                  )}
                </div>
                <button
                  className="lg:hidden p-2 text-stone-900"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>

              {/* Center: Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-center group">
                  <div className="text-3xl lg:text-4xl font-black tracking-[0.4em] text-stone-900">
                    GURU NETWORK
                  </div>
                </Link>
              </div>

              {/* Right: Account & Cart */}
              <div className="flex-1 flex items-center justify-end space-x-4 lg:space-x-8">
                <Link href="/login" className="hidden lg:flex items-center text-stone-600 hover:text-stone-900 transition-colors">
                  <span className="mr-2 text-xs font-bold uppercase tracking-widest">Log in</span>
                  <User className="w-5 h-5" />
                </Link>
                <Link href="/cart" className="flex items-center text-stone-600 hover:text-stone-900 transition-colors relative">
                  <span className="hidden lg:block mr-2 text-xs font-bold uppercase tracking-widest">Cart</span>
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5 text-stone-900" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-emerald-700 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        {totalItems}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>

            {/* Bottom: Desktop Navigation Links */}
            <div className="hidden lg:flex justify-center items-center pb-8 space-x-12">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <div className="flex items-center cursor-pointer py-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-600 group-hover:text-stone-900 transition-colors">
                        {item.name}
                      </span>
                      <ChevronDown className="ml-1 w-3 h-3 text-stone-400 group-hover:text-stone-900 transition-colors" />

                      {/* Mega-ish Dropdown */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-white border border-stone-100 shadow-2xl py-4 min-w-[200px]">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition-colors"
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
                      className="py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Side Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out transform",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-stone-100">
              <div className="text-xl font-black tracking-widest text-stone-900">GURU NETWORK</div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-stone-900">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-4">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-[0.2em] text-stone-900"
                      >
                        {item.name}
                        <ChevronDown className={cn("w-5 h-5 transition-transform", openSubmenu === item.name && "rotate-180")} />
                      </button>
                      {openSubmenu === item.name && (
                        <div className="pl-4 space-y-4 pt-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-stone-500 text-xs font-bold uppercase tracking-widest"
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
                      className="block text-sm font-bold uppercase tracking-[0.2em] text-stone-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="p-8 border-t border-stone-100 bg-stone-50 space-y-4">
              <Link href="/login" className="flex items-center text-stone-900 font-bold uppercase tracking-widest text-xs" onClick={() => setIsMenuOpen(false)}>
                <User className="w-5 h-5 mr-3" />
                Account
              </Link>
              <form onSubmit={handleSearch} className="relative">
                 <button type="submit">
                   <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                 </button>
                 <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH YOUR ITEMS..."
                  className="w-full bg-transparent border-b border-stone-200 py-2 pl-8 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-stone-900"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
