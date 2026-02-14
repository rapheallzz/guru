'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/data/types';

export interface CartItem extends Product {
  quantity: number;
  cartItemId: string; // Unique ID for cart item (product id + variants + subscription)
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('gurunetwork-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('gurunetwork-cart', JSON.stringify(newCart));
  };

  const generateCartItemId = (product: Product) => {
    return `${product.id}-${JSON.stringify(product.selectedVariants || {})}-${product.subscriptionFrequency || 'once'}`;
  };

  const addToCart = (product: Product, quantity = 1) => {
    const cartItemId = generateCartItemId(product);
    const existingItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
      saveCart(cart.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      saveCart([...cart, { ...product, quantity, cartItemId }]);
    }
  };

  const removeFromCart = (cartItemId: string) => {
    saveCart(cart.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
    } else {
      saveCart(cart.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      ));
    }
  };

  const clearCart = () => {
    saveCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice };
}

export function useWishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('gurunetwork-wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const saveWishlist = (newWishlist: Product[]) => {
    setWishlist(newWishlist);
    localStorage.setItem('gurunetwork-wishlist', JSON.stringify(newWishlist));
  };

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
      saveWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      saveWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  return { wishlist, toggleWishlist, isInWishlist };
}
