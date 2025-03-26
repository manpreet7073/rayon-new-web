import fs from 'fs';
import path from 'path';

// Define the file paths
const robotsFilePath = path.resolve('public/robots.txt');
const sitemapUrl = process.env.NODE_ENV === 'production' 
  ? 'https://rayonweb.com/sitemap.xml'  // Change to your production URL
  : 'http://localhost/sitemap.xml';     // For local development

// Content of the robots.txt file
const robotsContent = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

// Write the robots.txt file to the public folder
fs.writeFileSync(robotsFilePath, robotsContent);

console.log('robots.txt has been generated successfully.');
