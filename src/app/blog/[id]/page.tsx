'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/data/mockData';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Post not found.</div>;
  }

  return (
    <article className="bg-white min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center text-zinc-700 font-bold mb-8 hover:underline">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-sm text-stone-400">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
          </div>
        </header>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-stone lg:prose-xl max-w-none text-stone-600 leading-relaxed">
          <p className="text-xl font-medium text-stone-900 mb-8">{post.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />

          <div className="mt-12 p-8 bg-stone-50 rounded-2xl border border-stone-100">
            <h3 className="text-xl font-bold text-stone-900 mb-4">About the Author</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex-shrink-0" />
              <div>
                <p className="font-bold text-stone-900">{post.author}</p>
                <p className="text-sm text-stone-500 italic">Lead artisan and curator at Kraft Minds by Guru. Passionate about sustainable materials and traditional techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
