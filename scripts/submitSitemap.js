const https = require('https');

const DOMAIN = 'https://www.fortissecured.co.uk';
const SITEMAP_URL = `${DOMAIN}/sitemap.xml`;

// List of search engine submission URLs
const searchEngines = [
  {
    name: 'Google',
    url: `https://www.google.com/ping?sitemap=${SITEMAP_URL}`,
  },
  {
    name: 'Bing',
    url: `https://www.bing.com/ping?sitemap=${SITEMAP_URL}`,
  },
];

async function submitSitemap() {
  for (const engine of searchEngines) {
    try {
      await new Promise((resolve, reject) => {
        https
          .get(engine.url, (res) => {
            if (res.statusCode === 200) {
              console.log(`Successfully submitted sitemap to ${engine.name}`);
              resolve();
            } else {
              reject(
                new Error(
                  `Failed to submit sitemap to ${engine.name}. Status code: ${res.statusCode}`
                )
              );
            }
          })
          .on('error', (error) => {
            reject(
              new Error(`Error submitting sitemap to ${engine.name}: ${error.message}`)
            );
          });
      });
    } catch (error) {
      console.error(error.message);
    }
  }
}

// Submit sitemap on script run
submitSitemap(); 