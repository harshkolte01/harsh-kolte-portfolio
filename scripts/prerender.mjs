// Runs after the client and SSR builds. Renders each page to static HTML, injects
// structured data generated from data/site.ts, and writes llms.txt for AI assistants.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, siteConfig, featuredProjects, archiveProjects, services, faqs, stackGroups, timeline } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const siteUrl = (process.env.VITE_SITE_URL || siteConfig.siteUrl).replace(/\/+$/, '');
const today = new Date().toISOString().slice(0, 10);
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

const person = {
  '@type': 'Person',
  '@id': personId,
  name: siteConfig.name,
  givenName: siteConfig.firstName,
  familyName: siteConfig.lastName,
  url: `${siteUrl}/`,
  image: `${siteUrl}/og-image.png`,
  email: `mailto:${siteConfig.email}`,
  jobTitle: 'Full-Stack Developer',
  description:
    'Freelance full-stack developer in Ahmedabad, India, building AI agents, cross-platform desktop apps and web products with TypeScript, Next.js, Python and Electron.',
  address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
  homeLocation: { '@type': 'Place', name: 'Ahmedabad, Gujarat, India' },
  knowsLanguage: ['en', 'hi', 'gu', 'mr'],
  knowsAbout: [
    ...new Set([
      'Full-stack web development',
      'AI agents',
      'Large language model integration',
      'Model Context Protocol',
      'Desktop application development',
      ...stackGroups.flatMap((group) => group.items),
    ]),
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'SAL Institute of Technology and Engineering Research',
    address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressCountry: 'IN' },
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full-Stack Developer',
    occupationLocation: { '@type': 'Country', name: 'India' },
    skills: stackGroups.flatMap((group) => group.items).join(', '),
  },
  makesOffer: services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.copy,
      serviceType: service.title,
      areaServed: 'Worldwide',
      provider: { '@id': personId },
    },
  })),
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl, siteConfig.instagramUrl],
};

const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${siteUrl}/`,
  name: `${siteConfig.name} — Portfolio`,
  alternateName: ['Harsh Kolte Portfolio', 'harshkolte01'],
  inLanguage: 'en',
  publisher: { '@id': personId },
};

const projectList = {
  '@type': 'ItemList',
  '@id': `${siteUrl}/#work`,
  name: `Selected projects by ${siteConfig.name}`,
  itemListElement: featuredProjects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: project.title,
      applicationCategory: /desktop/i.test(project.kind) ? 'DesktopEnhancementApplication' : 'WebApplication',
      ...(project.slug === 'capturepro' ? { operatingSystem: 'Windows, macOS' } : {}),
      ...(/desktop/i.test(project.kind) && project.slug !== 'capturepro' ? { operatingSystem: 'Windows' } : {}),
      description: project.description,
      url: project.liveUrl || project.repoUrl,
      sameAs: project.repoUrl,
      keywords: project.stack.join(', '),
      dateCreated: project.year,
      author: { '@id': personId },
    },
  })),
};

const faqPage = {
  '@type': 'FAQPage',
  '@id': `${siteUrl}/#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const pages = {
  home: {
    file: path.join(distDir, 'index.html'),
    graph: [
      person,
      website,
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile-page`,
        url: `${siteUrl}/`,
        name: `${siteConfig.name} — Freelance Full-Stack & AI Developer`,
        inLanguage: 'en',
        dateModified: today,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        mainEntity: { '@id': personId },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${siteUrl}/og-image.png`, width: 1200, height: 630 },
        hasPart: [{ '@id': `${siteUrl}/#work` }, { '@id': `${siteUrl}/#faq` }],
      },
      projectList,
      faqPage,
    ],
  },
  resume: {
    file: path.join(distDir, 'resume', 'index.html'),
    graph: [
      person,
      website,
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/resume/#resume-page`,
        url: `${siteUrl}/resume/`,
        name: `${siteConfig.name} — Résumé`,
        inLanguage: 'en',
        dateModified: today,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        breadcrumb: { '@id': `${siteUrl}/resume/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/resume/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Résumé', item: `${siteUrl}/resume/` },
        ],
      },
    ],
  },
};

// `<` is escaped so no string in the data can close the script tag early.
const jsonLd = (graph) =>
  `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;

for (const [page, { file, graph }] of Object.entries(pages)) {
  let html = fs.readFileSync(file, 'utf8');
  const markup = render(page);
  if (!html.includes('<div id="root"></div>')) throw new Error(`No empty #root in ${file}`);
  html = html
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace(/\s*<noscript>[\s\S]*?<\/noscript>/, '')
    .replace('</head>', `    ${jsonLd(graph)}\n  </head>`);
  fs.writeFileSync(file, html, 'utf8');
  console.log(`prerendered ${path.relative(root, file)} (${(markup.length / 1024).toFixed(1)} kB of markup)`);
}

// llms.txt — a plain summary for AI assistants and answer engines (https://llmstxt.org).
const llms = `# ${siteConfig.name}

> Freelance full-stack developer in ${siteConfig.location} building AI agents, cross-platform desktop apps and web products. ${siteConfig.availability}.

- Website: ${siteUrl}/
- Résumé: ${siteUrl}/resume/
- Email: ${siteConfig.email}
- GitHub: ${siteConfig.githubUrl}
- LinkedIn: ${siteConfig.linkedinUrl}

## Services

${services.map((service) => `- **${service.title}**: ${service.copy}`).join('\n')}

## Selected work

${featuredProjects
  .map(
    (project) =>
      `- [${project.title}](${project.liveUrl || project.repoUrl}) (${project.kind}, ${project.year}): ${project.description} Stack: ${project.stack.join(', ')}.${
        project.repoUrl ? ` Source: ${project.repoUrl}` : ''
      }`
  )
  .join('\n')}

## Experience and education

${timeline.map((entry) => `- ${entry.period} — ${entry.title}, ${entry.org}. ${entry.copy}`).join('\n')}

## Other projects

${archiveProjects.map((project) => `- [${project.title}](${project.liveUrl || project.repoUrl}) (${project.year}): ${project.kind} — ${project.stack}`).join('\n')}

## Skills

${stackGroups.map((group) => `- ${group.label}: ${group.items.join(', ')}`).join('\n')}

## FAQ

${faqs.map((faq) => `### ${faq.q}\n\n${faq.a}`).join('\n\n')}
`;
fs.writeFileSync(path.join(distDir, 'llms.txt'), llms, 'utf8');
console.log('wrote dist/llms.txt');

fs.rmSync(ssrDir, { recursive: true, force: true });
