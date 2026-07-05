'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useStore } from '@/hooks/useStore';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/shop',
    subItems: [
      { name: 'Wall & Art Decor', href: '/shop?category=Wall+%26+Art+Decor' },
      { name: '3D Textured Artwork', href: '/shop?category=3D+Textured+Artwork' },
      { name: 'Interior Design Pieces', href: '/shop?category=Interior+Design+Pieces' },
      { name: 'Commercial & Residential', href: '/shop?category=Commercial+%26+Residential' },
      { name: 'Custom Commissions', href: '/custom-requests' },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "bg-black transition-all duration-300 sticky top-0 z-50",
        isScrolled ? "shadow-lg shadow-black/50" : "border-b border-zinc-900"
      )}>
        <nav>
          {/* Main Header Section */}
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center h-24 lg:h-32">
              {/* Left: Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center justify-center">
                  <div className="relative w-20 h-20 lg:w-28 lg:h-28">
                    <Image
                      src="/images/logo.jpeg"
                      alt="KRAFT MINDS BY GURU"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>

              {/* Right: Desktop Navigation Links & Mobile Menu Button */}
              <div className="flex flex-1 items-center justify-end">
                <div className="hidden lg:flex items-center space-x-10">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative group">
                      {item.subItems ? (
                        <div className="flex items-center cursor-pointer py-2">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                          <ChevronDown className="ml-1 w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />

                          {/* Mega-ish Dropdown */}
                          <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="bg-black border border-zinc-800 shadow-2xl py-4 min-w-[200px]">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
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
                          className="py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  className="lg:hidden p-2 text-white"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
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
            "fixed inset-y-0 left-0 w-full max-w-sm bg-black shadow-xl transition-transform duration-300 ease-in-out transform",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-zinc-900">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo.jpeg"
                  alt="KRAFT MINDS BY GURU"
                  fill
                  className="object-contain"
                />
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white">
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
                        className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-[0.2em] text-zinc-400"
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
                              className="block text-zinc-500 text-xs font-bold uppercase tracking-widest"
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
                      className="block text-sm font-bold uppercase tracking-[0.2em] text-zinc-400"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
