const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist', 'karl-portfolio', 'browser');

const preserve = new Set([
  'src',
  'node_modules',
  'dist',
  'scripts',
  'public',
  '.git',
  '.gitignore',
  'angular.json',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'README.md',
]);

if (!fs.existsSync(distDir)) {
  console.error('Build introuvable. Lancez "npm run build:gh-pages" d\'abord.');
  process.exit(1);
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.copyFileSync(src, dest);
}

for (const entry of fs.readdirSync(distDir)) {
  const srcPath = path.join(distDir, entry);
  const destPath = path.join(projectRoot, entry);

  if (preserve.has(entry)) continue;

  if (fs.existsSync(destPath)) {
    fs.rmSync(destPath, { recursive: true, force: true });
  }

  copyRecursive(srcPath, destPath);
}

const indexPath = path.join(projectRoot, 'index.html');
const notFoundPath = path.join(projectRoot, '404.html');
fs.copyFileSync(indexPath, notFoundPath);

console.log('Build copié à la racine du projet (prêt pour GitHub Pages).');
