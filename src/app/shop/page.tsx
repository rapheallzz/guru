'use client';

import React, { useState, useMemo, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/mockData';
import { ProductCard } from '@/components/ProductCard';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  const initialSearch = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);

  useEffect(() => {
    if (initialSearch) {
      setSearchQuery(initialSearch);
    }
  }, [initialSearch]);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [sortBy, setSortBy] = useState('Featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'All',
    'Wall & Art Decor',
    '3D Textured Artwork',
    'Interior Design Pieces',
    'Commercial & Residential',
    'Custom Commissions',
    'Merch'
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'Popularity') return b.rating - a.rating;
      return 0; // Featured or default
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-stone-50 border-b border-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 uppercase tracking-tight">Our Services</h1>
          <p className="text-stone-600 max-w-2xl">
            Explore our specialized art and design services. From custom commissions to large-scale residential and commercial projects, we bring unique vision to every piece.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "block w-full text-left py-1 text-sm transition-colors",
                      selectedCategory === cat ? "text-zinc-700 font-bold" : "text-stone-600 hover:text-stone-900"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search our work..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all"
                />
              </div>

              <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2 text-stone-600 font-medium border border-stone-200 px-4 py-2 rounded-md"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span>Filters</span>
                </button>

                <div className="relative group">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-stone-200 px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 text-sm font-medium cursor-pointer"
                  >
                    <option>Featured</option>
                    <option>Popularity</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden bg-stone-50 p-6 rounded-lg mb-8 space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                          selectedCategory === cat ? "bg-zinc-700 text-white" : "bg-white text-stone-600 border border-stone-200"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-stone-500">No projects found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 text-zinc-700 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
