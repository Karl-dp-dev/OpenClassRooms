import { NavLink, PortfolioPhoto, ServiceItem, SocialLink } from '../models/site.models';

export const NAV_LINKS: NavLink[] = [
  { label: 'Portfolio', path: '/' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Prestations', path: '/prestations' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/karldp.photo/',
    icon: 'assets/images/icones/instagram.png',
    alt: 'Instagram de Karl Dupuy',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/karl-dupuy-dev/',
    icon: 'assets/images/icones/linkedin.png',
    alt: 'LinkedIn de Karl Dupuy',
  },
];

export const PROFILE = {
  name: 'Karl DUPUY',
  tagline: 'Photographe, vidéaste. Rennes',
  photo: 'assets/images/profil/karl-dupuy-minia.jpg',
  logo: 'assets/images/profil/logo_14-PFP.png',
};

export const PORTFOLIO_PHOTOS: PortfolioPhoto[] = [
  { src: 'assets/images/immo-style/A7_05457.jpg', alt: 'Photographie immobilière 1' },
  { src: 'assets/images/immo-style/A7_05458.jpg', alt: 'Photographie immobilière 2' },
  { src: 'assets/images/immo-style/A7_05463.jpg', alt: 'Photographie immobilière 3' },
  { src: 'assets/images/immo-style/A7_05454.jpg', alt: 'Photographie immobilière 4' },
  { src: 'assets/images/immo-style/A7_05469.jpg', alt: 'Photographie immobilière 5' },
  { src: 'assets/images/immo-style/A7_07624.jpg', alt: 'Photographie immobilière 6' },
  { src: 'assets/images/immo-style/A7_09331.jpg', alt: 'Photographie immobilière 7' },
  { src: 'assets/images/immo-style/A7_09334.jpg', alt: 'Photographie immobilière 8' },
  { src: 'assets/images/immo-style/A7_09323.jpg', alt: 'Photographie immobilière 9' },
];

export const SERVICES_LIST: string[] = [
  'Photographie de portrait',
  "Vidéo d'événements",
  'Création de contenus pour les réseaux sociaux',
  'Photographie immobilière',
  'Photographie animalière',
  'Accompagnement personnalisé pour la gestion de votre image',
];

export const PRICING_TABLE: ServiceItem[] = [
  {
    name: 'Photographie de portrait',
    description: 'Séance photo en intérieur ou en extérieur',
    price: 'À partir de 200€',
  },
  {
    name: 'Photographie immobilière',
    description: 'Shooting photo pour biens immobiliers',
    price: 'À partir de 200€',
  },
  {
    name: "Vidéo d'événements",
    description: "Couverture vidéo d'événements privés ou professionnels",
    price: 'À partir de 500€',
  },
];
