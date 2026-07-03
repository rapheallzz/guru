import { Product, BlogPost } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hand-Thrown Speckled Vase',
    description: 'A beautiful, unique hand-thrown stoneware vase with a natural speckled glaze. Perfect for showcasing seasonal blooms.',
    price: 45.00,
    category: 'Craft Works',
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 12,
    rating: 4.8,
    reviews: [
      { id: 'r1', author: 'Jane D.', rating: 5, comment: 'Absolutely stunning! The texture is amazing.', date: '2025-01-15' }
    ],
    featured: true,
    allowSubscription: true,
    variants: [
      { name: 'Color', options: ['Speckled White', 'Sage Green', 'Deep Blue'] }
    ],
    details: {
      materials: 'Stoneware clay, non-toxic glaze',
      dimensions: 'H: 20cm, W: 12cm',
      care: 'Hand wash recommended.'
    }
  },
  {
    id: '2',
    name: 'Warm Glow LED String Lights',
    description: 'Delicate copper wire string lights that create a cozy atmosphere in any room. Perfect for craft projects or home decor.',
    price: 18.00,
    category: 'LED Lights',
    images: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 50,
    rating: 4.5,
    reviews: [],
    featured: true,
    allowSubscription: true,
    variants: [
      { name: 'Length', options: ['5m', '10m', '20m'] },
      { name: 'Power', options: ['Battery', 'USB'] }
    ],
    details: {
      materials: 'Copper wire, LED bulbs',
      dimensions: 'Length: 5m, 50 LEDs',
      care: 'Indoor use only.'
    }
  },
  {
    id: '3',
    name: 'Custom Engraved Wooden Plaque',
    description: 'Personalized wooden plaques crafted from sustainable oak. Perfect for gifts, housewarmings, or memorial pieces.',
    price: 35.00,
    category: 'Craft Works',
    images: [
      'https://images.unsplash.com/photo-1563452675059-ca1e27094200?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 0, // Made to order
    rating: 5.0,
    reviews: [],
    featured: true,
    details: {
      materials: 'Solid Oak',
      dimensions: '25cm x 15cm x 2cm',
      care: 'Wipe with a damp cloth.'
    }
  },
  {
    id: '4',
    name: 'Illuminated Glass Terrarium',
    description: 'A handcrafted glass terrarium featuring an integrated LED base that highlights your favorite succulents.',
    price: 65.00,
    category: 'LED Lights',
    images: [
      'https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 5,
    rating: 4.9,
    reviews: [],
    featured: true,
    details: {
      materials: 'Glass, Wood base, LED module',
      dimensions: 'H: 25cm, Diameter: 18cm',
      care: 'Wipe glass with soft cloth.'
    }
  },
  {
    id: '5',
    name: 'Handwoven Linen Tote',
    description: 'Durable and stylish tote bag made from 100% natural linen. Eco-friendly and perfect for daily use.',
    price: 24.00,
    category: 'Merch',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 25,
    rating: 4.7,
    reviews: [],
    featured: true,
    details: {
      materials: '100% Organic Linen',
      dimensions: '40cm x 35cm',
      care: 'Machine washable at 30°C.'
    }
  },
  {
    id: '10',
    name: 'Artisan Waxed Canvas Apron',
    description: 'Heavy-duty waxed canvas apron designed for pottery, woodcraft, or gardening. Features multiple pockets for your tools.',
    price: 48.00,
    category: 'Merch',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 15,
    rating: 5.0,
    reviews: [],
    featured: true,
    details: {
      materials: 'Waxed Cotton Canvas, Leather straps',
      dimensions: 'One size fits all',
      care: 'Spot clean only. Do not wash.'
    }
  },
  {
    id: '11',
    name: 'Kraft Minds by Guru Enamel Pin Set',
    description: 'A set of three high-quality enamel pins featuring our signature pottery, LED bulb, and tools icons.',
    price: 15.00,
    category: 'Merch',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 100,
    rating: 4.8,
    reviews: [],
    featured: true,
    details: {
      materials: 'Zinc Alloy, Hard Enamel',
      dimensions: '2.5cm each',
      care: 'Keep dry.'
    }
  },
  {
    id: '6',
    name: 'Woven Wall Hanging',
    description: 'Intricate macramé wall art handcrafted using recycled cotton cord. Adds texture and warmth to any wall.',
    price: 55.00,
    category: 'Craft Works',
    images: [
      'https://images.unsplash.com/photo-1528659203373-ca9813264663?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 8,
    rating: 4.6,
    reviews: [],
    featured: true,
    details: {
      materials: 'Recycled cotton cord, Driftwood',
      dimensions: 'W: 50cm, L: 80cm',
      care: 'Dust lightly with a soft brush.'
    }
  },
  {
    id: '7',
    name: 'LED Craft Magnifier',
    description: 'High-quality magnifying glass with built-in daylight LEDs. Essential for detailed craft work and hobbyists.',
    price: 29.99,
    category: 'LED Lights',
    images: [
      'https://images.unsplash.com/photo-1589114402662-79354784a0d9?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 15,
    rating: 4.4,
    reviews: [],
    featured: true,
    details: {
      materials: 'Plastic frame, Glass lens, LED ring',
      dimensions: 'Lens diameter: 10cm',
      care: 'Clean lens with microfiber cloth.'
    }
  },
  {
    id: '8',
    name: 'Mixed Craft Starter Kit',
    description: 'Build your own starter kit! Choose your favorite vase and tool set. Perfect for those beginning their pottery journey.',
    price: 75.00,
    category: 'Craft Works',
    images: [
      'https://images.unsplash.com/photo-1565193998772-ef60f187d8af?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 10,
    rating: 5.0,
    reviews: [],
    featured: true,
    variants: [
      { name: 'Vase Choice', options: ['Speckled White', 'Sage Green', 'Deep Blue'] },
      { name: 'Tool Set', options: ['Beginner Essentials', 'Detailing Pro'] }
    ],
    details: {
      materials: 'Various',
      dimensions: 'N/A',
      care: 'See individual items.'
    }
  },
  {
    id: '9',
    name: 'LED Decor Pack (Fixed Bundle)',
    description: 'A pre-curated set of our best-selling LED items: includes 2x Warm Glow String Lights and 1x Glass Terrarium.',
    price: 85.00,
    category: 'LED Lights',
    images: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000'
    ],
    inventory: 20,
    rating: 4.9,
    reviews: [],
    featured: true,
    details: {
      materials: 'Various',
      dimensions: 'N/A',
      care: 'See individual items.'
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What is Crafting? Exploring the Art of the Handmade',
    excerpt: 'In a world of mass production, crafting offers a way to reconnect with materials and create something truly unique.',
    content: 'Long form content about crafting...',
    author: 'Elena Smith',
    date: '2025-02-05',
    image: 'https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?auto=format&fit=crop&q=80&w=1000',
    category: 'Education'
  },
  {
    id: '2',
    title: 'How We Make Our Handmade Pottery',
    excerpt: 'Take a behind-the-scenes look at our process, from raw clay to the finished, glazed piece.',
    content: 'Details about the pottery process...',
    author: 'Elena Smith',
    date: '2025-01-30',
    image: 'https://images.unsplash.com/photo-1565193998772-ef60f187d8af?auto=format&fit=crop&q=80&w=1000',
    category: 'Behind the Scenes'
  },
  {
    id: '3',
    title: 'Top 5 LED Project Ideas for Your Home',
    excerpt: 'Discover creative ways to use LED lights to enhance your living space and craft projects.',
    content: 'LED project ideas...',
    author: 'Marcus Lee',
    date: '2025-01-20',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1000',
    category: 'Ideas'
  }
];
