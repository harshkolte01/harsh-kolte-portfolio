import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, 'public');

const envFiles = ['.env.local', '.env'];

const readEnvValue = (key) => {
  if (process.env[key]) {
    return process.env[key];
  }

  for (const envFile of envFiles) {
    const envPath = path.join(projectRoot, envFile);
    if (!fs.existsSync(envPath)) {
      continue;
    }

    const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      if (!line || line.trim().startsWith('#')) {
        continue;
      }

      const separatorIndex = line.indexOf('=');
      if (separatorIndex === -1) {
        continue;
      }

      const currentKey = line.slice(0, separatorIndex).trim();
      if (currentKey !== key) {
        continue;
      }

      return line.slice(separatorIndex + 1).trim();
    }
  }

  return '';
};

const siteUrl = readEnvValue('VITE_SITE_URL').replace(/\/+$/, '');

if (!siteUrl) {
  throw new Error('VITE_SITE_URL is required to generate robots.txt and sitemap.xml.');
}

const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/resume/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
