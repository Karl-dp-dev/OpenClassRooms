import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
    title: 'Portfolio — Karl Dupuy',
  },
  {
    path: 'a-propos',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'À propos — Karl Dupuy',
  },
  {
    path: 'prestations',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Prestations — Karl Dupuy',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Karl Dupuy',
  },
  { path: '**', redirectTo: '' },
];
