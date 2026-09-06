const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const input = path.join(publicDir, 'Shubham.webp');

  if (!fs.existsSync(input)) {
    throw new Error(`Input image not found at ${input}`);
  }

  // 1. Create shubham-jayswal.webp (High quality, SEO-friendly filename)
  await sharp(input)
    .webp({ quality: 95 })
    .toFile(path.join(publicDir, 'shubham-jayswal.webp'));
  console.log('Created shubham-jayswal.webp');

  // 2. Create shubham-jayswal.jpg (High quality JPEG with white background for SEO & Social crawlers)
  await sharp(input)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'shubham-jayswal.jpg'));
  console.log('Created shubham-jayswal.jpg');

  // 3. Fallback Shubham.jpg
  await sharp(input)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'Shubham.jpg'));
  console.log('Created Shubham.jpg');

  // 4. Create an Open Graph banner 1200x630 (og-image.jpg)
  const portrait = await sharp(input)
    .resize(430, 430, { fit: 'cover' })
    .toBuffer();

  const svgCard = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#090d16" />
          <stop offset="50%" stop-color="#141829" />
          <stop offset="100%" stop-color="#241538" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#818cf8" />
          <stop offset="50%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
      </defs>
      
      <rect width="1200" height="630" fill="url(#bg)" />
      
      <circle cx="120" cy="120" r="220" fill="#6366f1" opacity="0.16" />
      <circle cx="1100" cy="500" r="260" fill="#ec4899" opacity="0.12" />
      
      <text x="80" y="185" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#818cf8" letter-spacing="3">PORTFOLIO</text>
      <text x="80" y="265" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" fill="#ffffff">Shubham Jayswal</text>
      <text x="80" y="325" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="url(#textGrad)">Full Stack Software Developer</text>
      <text x="80" y="390" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">React.js • Next.js • Node.js • Express • MongoDB • Redis</text>
      
      <rect x="80" y="440" width="310" height="50" rx="25" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="115" y="472" font-family="monospace" font-size="17" font-weight="600" fill="#38bdf8">shubham-masai.github.io</text>
    </svg>
  `);

  const circleMask = Buffer.from(
    '<svg width="430" height="430"><circle cx="215" cy="215" r="212" fill="white"/></svg>'
  );

  const roundedPortrait = await sharp(portrait)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const borderRing = Buffer.from(
    '<svg width="450" height="450"><circle cx="225" cy="225" r="220" fill="none" stroke="#818cf8" stroke-width="5"/></svg>'
  );

  await sharp(svgCard)
    .composite([
      { input: borderRing, top: 90, left: 695 },
      { input: roundedPortrait, top: 100, left: 705 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(publicDir, 'og-image.jpg'));

  console.log('Updated og-image.jpg');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
