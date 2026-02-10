import React from 'react';
import { blogPosts } from '@/data/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-stone-50 border-b border-stone-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 uppercase tracking-tight">The Craft Corner</h1>
          <p className="text-lg text-stone-600">
            Insights, tutorials, and behind-the-scenes stories from our studio and the wider world of handmade crafts and lighting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map(post => (
            <article key={post.id} className="group flex flex-col bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs text-stone-400 mb-4">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                </div>

                <h2 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-stone-600 mb-8 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="flex items-center space-x-2 text-stone-900 font-bold hover:text-emerald-700 transition-colors uppercase tracking-widest text-xs"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
