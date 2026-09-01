const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir('public/images/projects/zerotrace');
ensureDir('public/images/projects/rf-jammer');
ensureDir('public/images/projects/techtantra');
ensureDir('public/images/certificates');
ensureDir('src/assets/images');

const srcDir = 'personalportfolio-images';
const files = fs.readdirSync(srcDir);

files.forEach(file => {
  const fullSrc = path.join(srcDir, file);
  if (file === 'profile.jpg') {
    fs.copyFileSync(fullSrc, 'public/images/profile.jpg');
    fs.copyFileSync(fullSrc, 'src/assets/images/profile.jpg');
    console.log('Copied profile.jpg');
  } else if (file.startsWith('zerotrace-')) {
    fs.copyFileSync(fullSrc, path.join('public/images/projects/zerotrace', file));
    console.log(`Copied ${file} to zerotrace`);
  } else if (file.startsWith('rf-jammer-')) {
    fs.copyFileSync(fullSrc, path.join('public/images/projects/rf-jammer', file));
    console.log(`Copied ${file} to rf-jammer`);
  } else if (file.startsWith('TECHTANTRA_')) {
    fs.copyFileSync(fullSrc, path.join('public/images/projects/techtantra', file));
    console.log(`Copied ${file} to techtantra`);
  } else if (file.startsWith('cert-')) {
    fs.copyFileSync(fullSrc, path.join('public/images/certificates', file));
    console.log(`Copied ${file} to certificates`);
  }
});

console.log('All media assets organized successfully.');
