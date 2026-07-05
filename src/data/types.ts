export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Wall & Art Decor' | '3D Textured Artwork' | 'Interior Design Pieces' | 'Commercial & Residential' | 'Custom Commissions' | 'Merch';
  images: string[];
  variants?: {
    name: string;
    options: string[];
  }[];
  selectedVariants?: Record<string, string>;
  allowSubscription?: boolean;
  subscriptionFrequency?: '4 weeks' | '6 weeks' | '8 weeks';
  inventory: number;
  rating: number;
  reviews: Review[];
  featured?: boolean;
  details: {
    materials?: string;
    dimensions?: string;
    care?: string;
  };
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}
