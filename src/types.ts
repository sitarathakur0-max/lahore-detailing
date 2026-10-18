export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'paint-guide'
  | 'gallery'
  | 'faqs'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  purpose: string;
  scopePoints: string[];
  image: string;
  altText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'coating' | 'interior' | 'reflection';
  categoryLabel: string;
  description: string;
  image: string;
  altText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  contactMethod: string;
  vehicle: string;
  category: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  contactMethod?: string;
  category?: string;
  message?: string;
}
