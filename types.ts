
// Fix: Added React import to resolve missing 'React' namespace for ReactNode type.
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  rating: number;
  logo: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  imageUrl: string;
}