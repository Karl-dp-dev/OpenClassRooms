const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist', 'karl-portfolio', 'browser');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

if (!fs.existsSync(indexPath)) {
  console.error('Build introuvable. Lancez "npm run build:gh-pages" d\'abord.');
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log('404.html créé pour le routage GitHub Pages.');
