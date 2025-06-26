// This script helps Vercel build the project correctly
const { execSync } = require('child_process');

console.log('Installing dependencies...');
execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

console.log('Running build...');
execSync('npm run build', { stdio: 'inherit' });
