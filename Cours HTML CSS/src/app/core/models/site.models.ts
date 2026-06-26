export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  alt: string;
}

export interface PortfolioPhoto {
  src: string;
  alt: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  price: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
