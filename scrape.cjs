const https = require('https');

const fetchUnsplash = (query) => {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/s/photos/${query}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g;
        const matches = [...new Set(data.match(regex))];
        resolve(matches);
      });
    }).on('error', reject);
  });
};

async function main() {
  try {
    const keywords = ['moving-boxes', 'relocation', 'furniture-moving', 'packing-boxes', 'logistics', 'warehouse', 'moving-truck', 'family-moving'];
    let allImages = [];
    for (const kw of keywords) {
      const urls = await fetchUnsplash(kw);
      allImages = [...allImages, ...urls];
    }
    const uniqueImages = [...new Set(allImages)].filter(u => !u.includes('premium'));
    console.log(JSON.stringify(uniqueImages.slice(0, 64)));
  } catch (e) {
    console.error(e);
  }
}
main();
