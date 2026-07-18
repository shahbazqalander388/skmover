const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '../public');

const iconSvg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradPin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <linearGradient id="gradCab" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A" />
      <stop offset="100%" stop-color="#22C55E" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#1E40AF" flood-opacity="0.3" />
    </filter>
  </defs>
  
  <path d="M256 48 C 158.8 48 80 126.8 80 224 C 80 352 256 464 256 464 C 256 464 432 352 432 224 C 432 126.8 353.2 48 256 48 Z" fill="url(#gradPin)" filter="url(#shadow)"/>
        
  <g transform="translate(185, 175)">
    <rect x="0" y="0" width="110" height="70" rx="8" fill="#FFFFFF" />
    <path d="M 115 20 L 145 20 C 158 20 162 30 165 45 L 170 70 L 115 70 Z" fill="url(#gradCab)" />
    <path d="M 125 28 L 142 28 C 148 28 150 34 152 42 L 154 48 L 125 48 Z" fill="#FFFFFF" opacity="0.9" />
    
    <circle cx="35" cy="70" r="16" fill="#0F172A" />
    <circle cx="35" cy="70" r="6" fill="#FFFFFF" />
    <circle cx="135" cy="70" r="16" fill="#0F172A" />
    <circle cx="135" cy="70" r="6" fill="#FFFFFF" />
    
    <line x1="-30" y1="20" x2="-10" y2="20" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
    <line x1="-45" y1="40" x2="-10" y2="40" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.6"/>
    <line x1="-25" y1="60" x2="-10" y2="60" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
  </g>
</svg>`;

const logoDarkSvg = `<svg width="1200" height="400" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradPin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <linearGradient id="gradCab" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A" />
      <stop offset="100%" stop-color="#22C55E" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#1E40AF" flood-opacity="0.3" />
    </filter>
  </defs>

  <g transform="translate(60, 40) scale(0.625)">
    <path d="M256 48 C 158.8 48 80 126.8 80 224 C 80 352 256 464 256 464 C 256 464 432 352 432 224 C 432 126.8 353.2 48 256 48 Z" fill="url(#gradPin)" filter="url(#shadow)"/>
          
    <g transform="translate(185, 175)">
      <rect x="0" y="0" width="110" height="70" rx="8" fill="#FFFFFF" />
      <path d="M 115 20 L 145 20 C 158 20 162 30 165 45 L 170 70 L 115 70 Z" fill="url(#gradCab)" />
      <path d="M 125 28 L 142 28 C 148 28 150 34 152 42 L 154 48 L 125 48 Z" fill="#FFFFFF" opacity="0.9" />
      
      <circle cx="35" cy="70" r="16" fill="#0F172A" />
      <circle cx="35" cy="70" r="6" fill="#FFFFFF" />
      <circle cx="135" cy="70" r="16" fill="#0F172A" />
      <circle cx="135" cy="70" r="6" fill="#FFFFFF" />
      
      <line x1="-30" y1="20" x2="-10" y2="20" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
      <line x1="-45" y1="40" x2="-10" y2="40" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.6"/>
      <line x1="-25" y1="60" x2="-10" y2="60" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
    </g>
  </g>

  <text x="430" y="240" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="140" fill="#0F172A" letter-spacing="-2">SK</text>
  <text x="630" y="240" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="140" fill="#22C55E" letter-spacing="-1">Movers</text>
  <text x="440" y="300" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="36" fill="#64748B" letter-spacing="4">WE MOVE WITH YOU</text>
</svg>`;

const logoLightSvg = logoDarkSvg
  .replace('fill="#0F172A"', 'fill="#FFFFFF"')
  .replace('fill="#64748B"', 'fill="#94A3B8"');

fs.writeFileSync(path.join(publicDir, 'logo-icon.svg'), iconSvg);
fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), logoDarkSvg);
fs.writeFileSync(path.join(publicDir, 'logo-light.svg'), logoLightSvg);
// Also generate a default logo.svg
fs.writeFileSync(path.join(publicDir, 'logo.svg'), logoDarkSvg);

console.log('SVGs generated successfully.');

async function generatePngs() {
  const iconBuffer = Buffer.from(iconSvg);
  const darkBuffer = Buffer.from(logoDarkSvg);
  const lightBuffer = Buffer.from(logoLightSvg);

  // Favicons
  const sizes = [16, 32, 48, 180, 192, 512, 1024];
  for (const size of sizes) {
    let name = `favicon-${size}x${size}.png`;
    if (size === 180) name = 'apple-touch-icon.png';
    if (size === 192) name = 'android-chrome-192x192.png';
    if (size === 512) name = 'android-chrome-512x512.png';
    if (size === 1024) name = 'logo-icon.png';
    
    await sharp(iconBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`Generated ${name}`);
  }

  // Full Logos (PNG versions)
  await sharp(darkBuffer)
    .resize(1200, 400)
    .png()
    .toFile(path.join(publicDir, 'logo-dark.png'));
  console.log('Generated logo-dark.png');

  await sharp(lightBuffer)
    .resize(1200, 400)
    .png()
    .toFile(path.join(publicDir, 'logo-light.png'));
  console.log('Generated logo-light.png');
  
  // Default logo.png for OG Image
  await sharp(darkBuffer)
    .resize(1200, 400)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Generated logo.png');
}

generatePngs().catch(console.error);
