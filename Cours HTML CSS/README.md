# Portfolio Karl Dupuy - Angular + SCSS

Refonte du portfolio photographe en **Angular 22**, **TypeScript** et **SCSS**, avec interface responsive (mobile & desktop) et déploiement sur **GitHub Pages** via la branche `gh-pages`.

## Prérequis

- [Node.js](https://nodejs.org/) 22+ et npm

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

## Déploiement GitHub Pages

Le site est publié sur :
`https://karl-dp-dev.github.io/OpenClassRooms/MyPortfolio`

Le déploiement est géré par le workflow GitHub Actions [`.github/workflows/deploy-github-pages.yml`](../.github/workflows/deploy-github-pages.yml) : le code source reste sur `main`, les builds sont poussés sur la branche `gh-pages` dans le sous-dossier `MyPortfolio/` (sans écraser les autres projets du dépôt, ex. `AzerType/`).

En local, compilez uniquement :

```bash
npm run build
```

Le workflow CI se déclenche automatiquement à chaque push sur `main` modifiant `Cours HTML CSS/` ou `Cours JavaScript/`.

### Configuration GitHub Pages

Dans **Settings → Pages** du dépôt :

- **Source** : branche `gh-pages`
- **Dossier** : `/ (root)`

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

- Angular 22 (standalone components, lazy routes)
- TypeScript 6
- SCSS modulaire
- Formulaire réactif (page Contact)
- Menu mobile avec overlay

## Notes

- Le formulaire de contact ouvre le client mail (`mailto:`) — adapté à un hébergement statique.
- Remplacez `contact@example.com` dans `contact.component.ts` par votre adresse réelle.
- Les fichiers compilés (`chunk-*.js`, `index.html`, etc.) ne sont **pas** versionnés sur `main` : ils vivent uniquement sur `gh-pages`.
