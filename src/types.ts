export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  startingPrice: number;
  image: string;
  rating: number;
  prepTime: string;
  tags: string[];
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  role: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CustomCakeRequest {
  flavor: string;
  size: string;
  shape: string;
  theme: string;
  frosting: string;
  colors: string[];
  message: string;
  inspirationImage?: string | null;
  name: string;
  email: string;
  phone: string;
  date: string;
  deliveryMethod: 'pickup' | 'delivery';
  notes: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}
