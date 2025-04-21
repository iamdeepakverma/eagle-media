const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://adsmini.com' }); // Replace with your domain

  routes.forEach((route) => sitemapStream.write(route));
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);
  fs.writeFileSync('./sitemap.xml', sitemap.toString());
}

generateSitemap()
  .then(() => console.log('Sitemap generated successfully!'))
  .catch((err) => console.error(err));