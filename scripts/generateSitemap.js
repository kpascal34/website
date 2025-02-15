const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const DOMAIN = 'https://www.fortissecured.co.uk';

// Define your site's routes and their metadata
const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services/door-supervision', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/manned-security', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/event-security', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/risk-assessment', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 },
  { url: '/cookies', changefreq: 'yearly', priority: 0.3 },
];

// Generate sitemap XML
async function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ url, changefreq, priority }) => {
          const lastmod = new Date().toISOString().split('T')[0];
          return `
            <url>
              <loc>${DOMAIN}${url}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  try {
    // Format the XML
    const formattedSitemap = await prettier.format(sitemap, {
      parser: 'html',
      printWidth: 120,
    });

    // Write to public directory
    fs.writeFileSync(
      path.join(__dirname, '../client/public/sitemap.xml'),
      formattedSitemap
    );

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Generate sitemap on script run
generateSitemap(); 