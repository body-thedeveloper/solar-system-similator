/**
 * Helper script to download planet textures from Solar System Scope
 * 
 * Note: This script is for convenience only. You should check the licensing
 * terms of any textures you download and make sure you have permission to use them.
 * 
 * Solar System Scope provides free textures for personal and non-commercial use.
 * https://www.solarsystemscope.com/textures/
 */

// List of texture URLs and their destination filenames
const textures = [
  {
    url: 'https://www.solarsystemscope.com/textures/download/2k_mercury.jpg',
    filename: 'Mercury.jpg'
  },
  {
    url: 'https://www.solarsystemscope.com/textures/download/2k_venus_atmosphere.jpg',
    filename: 'Venus.jpg'
  },
  {
    url: 'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg',
    filename: 'Earth.jpg'
  },
  {
    url: 'https://www.solarsystemscope.com/textures/download/2k_mars.jpg',
    filename: 'Mars.jpg'
  },
  {
    url: 'https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg',
    filename: 'Jupiter.jpg'
  },
  {
    url: 'https://www.solarsystemscope.com/textures/download/2k_saturn.jpg',
    filename: 'Saturn.jpg'
  },
  {
    url: 'https://www.solarsystemscope.com/textures/download/2k_uranus.jpg',
    filename: 'Uranus.jpg'
  },
  {
    url: 'https://www.solarsystemscope.com/textures/download/2k_neptune.jpg',
    filename: 'Neptune.jpg'
  }
];

console.log('This script will help you download planet textures for the Solar System app.');
console.log('Please follow these steps:');
console.log('');
console.log('1. Create a directory: src/assets/textures');
console.log('2. Download each texture from the URLs below:');
console.log('');

textures.forEach(texture => {
  console.log(`- Download ${texture.filename}:`);
  console.log(`  ${texture.url}`);
  console.log(`  Save as: src/assets/textures/${texture.filename}`);
  console.log('');
});

console.log('Once downloaded, place the files in the src/assets/textures directory to make the app work correctly.');