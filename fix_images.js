const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const data = JSON.parse(fs.readFileSync('/Users/facundovalencia/Desktop/hola/data/data.json', 'utf8'));

// Clear existing products images
execSync('rm -rf public/products/*');

const productsTsPath = 'data/products.ts';
let productsTs = fs.readFileSync(productsTsPath, 'utf8');

data.products.forEach(p => {
  // Get original path
  const originalPath = path.join('/Users/facundovalencia/Desktop/hola', p.image.replace('./', ''));
  const filename = path.basename(originalPath);
  
  // Copy file
  execSync(`cp "${originalPath}" public/products/`);
  
  // Update data/products.ts to use the correct extension
  // Previously we forced .jpg, now we use the actual filename
  // The slug is the same, so we can replace the image path based on the product name or slug
});

