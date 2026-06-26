# Portfolio Karl Dupuy — Angular + SCSS

Refonte du portfolio photographe en **Angular 19**, **TypeScript** et **SCSS**, avec interface responsive (mobile & desktop) et déploiement compatible **GitHub Pages**.

## Prérequis

- [Node.js](https://nodejs.org/) 20+ et npm

## Installation

```bash
cd "Cours HTML CSS"
npm install
```

> **PowerShell (Windows)** : si vous voyez une erreur `PSSecurityException` sur `npm.ps1`, utilisez l'une de ces solutions :
> - `npm.cmd install` au lieu de `npm install`
> - ou lancer les commandes depuis **cmd** / **Git Bash**
> - ou autoriser les scripts : `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

## Développement local

```bash
npm start
```

Ouvrir [http://localhost:4200](http://localhost:4200).

## Build pour GitHub Pages

Le `baseHref` est configuré pour l’URL :
`https://milous98.github.io/OpenClassRooms/Cours%20HTML%20CSS/`

```bash
npm run deploy
```

Cette commande :

1. Compile l’application en mode production
2. Génère un `404.html` (routage SPA sur GitHub Pages)
3. Copie les fichiers compilés à la racine du dossier (à côté de `src/`)

Ensuite, commitez et poussez les fichiers générés (`index.html`, `*.js`, `*.css`, etc.).

## Structure

```
Cours HTML CSS/
├── src/
│   ├── app/
│   │   ├── core/          # Modèles et données
│   │   ├── layout/        # Navbar, header, footer
│   │   └── pages/         # Portfolio, À propos, Prestations, Contact
│   ├── assets/images/     # Images du portfolio
│   └── styles/            # SCSS (variables, base, composants)
├── angular.json
└── package.json
```

## Technologies

- Angular 19 (standalone components, lazy routes)
- TypeScript
- SCSS modulaire
- Formulaire réactif (page Contact)
- Menu mobile avec overlay

## Notes

- Le formulaire de contact ouvre le client mail (`mailto:`) — adapté à un hébergement statique.
- Remplacez `contact@example.com` dans `contact.component.ts` par votre adresse réelle.
