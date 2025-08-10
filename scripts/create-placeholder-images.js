const fs = require('fs');
const path = require('path');

// Simple placeholder image generator - creates a minimal SVG
function createPlaceholderSVG(width, height, color, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${color}"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="white">${text}</text>
  </svg>`;
}

const placeholders = [
  { filename: 'yamada-construction.jpg', text: 'Yamada Construction', color: '#5b8fb9' },
  { filename: 'tokachi-farm.jpg', text: 'Tokachi Farm', color: '#8fb5d1' },
  { filename: 'otofuke-cafe.jpg', text: 'Otofuke Cafe', color: '#b8d4e8' }
];

const outputDir = path.join(__dirname, '../public/images/works');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create placeholder SVG files (with .svg extension since we can't create real JPGs without a library)
placeholders.forEach(({ filename, text, color }) => {
  const svgContent = createPlaceholderSVG(800, 600, color, text);
  const svgFilename = filename.replace('.jpg', '.svg');
  fs.writeFileSync(path.join(outputDir, svgFilename), svgContent);
  console.log(`Created placeholder: ${svgFilename}`);
});

console.log('Placeholder images created successfully!');