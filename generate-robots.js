import fs from 'fs';
import path from 'path';

// Define the file paths
const robotsFilePath = path.resolve('public/robots.txt');
const sitemapFilePath = path.resolve('public/sitemap.xml');

// Dynamically set the URL for production and local environments
const sitemapUrl = 'https://rayonweb.com/sitemap.xml';  // Change to your production URL
const host = 'https://rayonweb.com';

// Content of the robots.txt file
const robotsContent = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

// Write the robots.txt file to the public folder
fs.writeFileSync(robotsFilePath, robotsContent);
console.log('robots.txt has been generated successfully.');

// Generate sitemap.xml dynamically
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${host}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${host}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${host}/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${host}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${host}/training</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;

// Write the sitemap.xml file to the public folder
fs.writeFileSync(sitemapFilePath, sitemapContent);
console.log('sitemap.xml has been generated successfully.');
