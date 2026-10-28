import { ArchiveProject, Project, Service, TimelineEntry } from '../types';

const gh = (repo: string) => `https://github.com/harshkolte01/${repo}`;

export const siteConfig = {
  name: 'Harsh Kolte',
  firstName: 'Harsh',
  lastName: 'Kolte',
  initials: 'HK',
  role: 'Full-stack engineer',
  siteUrl: 'https://harsh-kolte-portfolio.vercel.app',
  email: 'harshkolte01@gmail.com',
  location: 'Ahmedabad, India',
  timeZone: 'Asia/Kolkata',
  githubUser: 'harshkolte01',
  githubUrl: 'https://github.com/harshkolte01',
  linkedinUrl: 'https://www.linkedin.com/in/harsh-kolte-458978277/',
  instagramUrl: 'https://www.instagram.com/harshkolte01/',
  homeResumeHref: 'resume/',
  resumeHomeHref: '../',
  homeResumePdfHref: 'resume_harshkolte.pdf',
  resumePdfHref: '../resume_harshkolte.pdf',
  availability: 'Open for freelance & contract work',
  currently: 'Building AgentForge',
} as const;

export const featuredProjects: Project[] = [
  {
    slug: 'agentforge',
    title: 'AgentForge',
    kind: 'AI coding agent',
    year: '2026',
    summary: 'A coding agent you can actually leave alone — and still keep the final say.',
    description:
      'A conversational workspace where one agent researches the web, writes and runs code in an isolated sandbox, and prepares pull requests. Every change that touches something real stops at an Approve / Decline card first.',
    highlights: [
      'Single honest agent loop with tool calls, no hidden planner rewriting output',
      'Per-conversation E2B sandbox; GitHub writes happen server-side with the user’s token',
      'MCP plugins, skills, parallel child runs, and a full event + usage ledger',
    ],
    stack: ['Next.js 16', 'FastAPI', 'PostgreSQL', 'E2B', 'MCP', 'TypeScript', 'Python'],
    visual: 'agent',
    repoUrl: gh('AgentForge'),
    liveUrl: 'https://agentforge.vexelityai.com',
    liveLabel: 'agentforge.vexelityai.com',
  },
  {
    slug: 'capturepro',
    title: 'CapturePro',
    kind: 'Desktop app',
    year: '2026',
    summary: 'Local-first screen capture for Windows and macOS. No account, nothing leaves the machine.',
    description:
      'Screenshots, scrolling capture, screen recording, annotation, on-device OCR and a small video editor, shipped as installers for Windows x64, ARM64, Apple Silicon and Intel.',
    highlights: [
      'Region, window, scrolling capture and MP4 recording with pause / resume',
      'Annotation editor, non-destructive crop, GIF export, pinned screenshots',
      'On-device OCR and color picker, global shortcuts on both platforms',
    ],
    stack: ['Windows', 'macOS', 'OCR', 'Video', 'Auto-update'],
    visual: 'capture',
    repoUrl: gh('capturepro'),
    liveUrl: 'https://www.capturepro.dev',
    liveLabel: 'capturepro.dev',
  },
  {
    slug: 'hdf-viewer',
    title: 'HDF Viewer — ISRO SAC',
    kind: 'Scientific data tool',
    year: '2026',
    summary: 'Browse and plot satellite payload HDF5 files straight from the browser.',
    description:
      'Built during my traineeship at Space Applications Centre, ISRO and integrated into the SAC web portal. A Flask API streams slices of HDF5 datasets from S3 / MinIO storage into a dependency-free Canvas & SVG frontend.',
    highlights: [
      'Lazy tree navigation of groups, datasets and attributes',
      'Line, image and heatmap views over large numeric arrays',
      'S3-compatible storage via boto3 / s3fs, numeric work in h5py + NumPy',
    ],
    stack: ['Flask', 'h5py', 'NumPy', 'MinIO / S3', 'Vanilla JS', 'Canvas'],
    visual: 'hdf',
    repoUrl: gh('HDF-Viewer'),
    liveUrl: 'https://hdf-viewer.vercel.app',
    liveLabel: 'hdf-viewer.vercel.app',
  },
  {
    slug: 'watabs',
    title: 'WATabs',
    kind: 'Open-source desktop app',
    year: '2026',
    summary: 'Several WhatsApp Web accounts in one window, each in its own sealed session.',
    description:
      'An Electron workspace where Personal, Business and Support accounts each run in a persistent, isolated WebContentsView — separate cookies, storage, cache and service workers — with tray and notification support.',
    highlights: [
      'True session isolation per account, not browser-profile juggling',
      'Add, disable, clear or remove accounts from a fast sidebar',
      'CI-built releases published through GitHub Releases',
    ],
    stack: ['Electron', 'TypeScript', 'WebContentsView', 'GitHub Actions'],
    visual: 'tabs',
    repoUrl: gh('WATabs'),
    liveUrl: 'https://watabs.vercel.app',
    liveLabel: 'watabs.vercel.app',
  },
  {
    slug: 'amazon-scraper',
    title: 'Amazon Product Scraper',
    kind: 'Client desktop tool',
    year: '2026',
    summary: 'Paste URLs or ASINs, get a bulk-upload-ready CSV. No Python, no terminal.',
    description:
      'A Windows app that drives bundled Chromium through product pages and writes consistent, timestamped CSV runs — with resumable checkpoints so a crash never costs the batch.',
    highlights: [
      'Direct, encrypted proxy, or Scrape.do connection modes',
      'Credentials sealed with Electron safeStorage, never written to output',
      'Installer with auto-updates from GitHub Releases, plus a portable build',
    ],
    stack: ['Electron', 'TypeScript', 'Chromium', 'safeStorage'],
    visual: 'scraper',
    repoUrl: gh('amazon-scraper-desktop'),
  },
  {
    slug: 'linksht',
    title: 'Linksht',
    kind: 'SaaS',
    year: '2025',
    summary: 'Link shortener with click analytics and paid plans, live on its own domain.',
    description:
      'Custom aliases, click / device / referrer analytics, OTP email sign-up and Free, Pro and Enterprise tiers — built end to end and running in production at linksht.me.',
    highlights: [
      'OTP email verification with Nodemailer',
      'Analytics dashboard for clicks, devices and referrers',
      'Subscription tiers gating features',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    visual: 'links',
    repoUrl: gh('LinkShortner'),
    liveUrl: 'https://linksht.me',
    liveLabel: 'linksht.me',
  },
];

export const archiveProjects: ArchiveProject[] = [
  { title: 'Voice Assistant', year: '2026', kind: 'Realtime voice AI', stack: 'React Native · WebSocket · Whisper · VAD', note: 'In progress', repoUrl: gh('voice_assistance') },
  { title: 'Private model server', year: '2026', kind: 'Self-hosted AI API', stack: 'Python · Whisper / Parakeet · Kokoro TTS · BGE', repoUrl: gh('local-ai-models') },
  { title: 'SecretChat', year: '2026', kind: 'Private messenger', stack: 'Next.js · Electron · Prisma · Socket.IO', repoUrl: gh('chat-app'), liveUrl: 'https://sec-chat-application.vercel.app/' },
  { title: 'GlobeTrotter', year: '2026', kind: 'Travel planner', stack: 'Turborepo · Next.js 15 · Express 5 · Prisma', repoUrl: gh('Globetrotter-odoo') },
  { title: 'EcoFlow', year: '2026', kind: 'Engineering change control', stack: 'Next.js · Express · Prisma · PostgreSQL', repoUrl: gh('Eco-Flow-Odoo'), liveUrl: 'https://eco-flow-odoo.vercel.app' },
  { title: 'Infamous Esports', year: '2026', kind: 'Tournament platform', stack: 'Next.js 16 · Firebase · Gemini', repoUrl: gh('infamousesports'), liveUrl: 'https://infamousesports.vercel.app' },
  { title: 'Analytics Dashboard', year: '2026', kind: 'BI with text-to-SQL', stack: 'Next.js · Express · Vanna AI · Groq', repoUrl: gh('Analytic-Dashboard'), liveUrl: 'https://analytics-dashboard-frontend-mu.vercel.app' },
  { title: 'E-commerce', year: '2026', kind: 'Store + admin', stack: 'TypeScript · PostgreSQL + MongoDB', repoUrl: gh('ecommerce-web'), liveUrl: 'https://harsh-kolte-220670107027.vercel.app' },
  { title: 'GearGuard', year: '2025', kind: 'Maintenance system', stack: 'Next.js · TypeScript', note: 'Team lead', repoUrl: gh('gearguard-odoo'), liveUrl: 'https://gearguard-odoo-5g1n.vercel.app/login' },
  { title: 'AI Website Builder', year: '2025', kind: 'Prompt-to-site', stack: 'Next.js · E2B · diff-based updates', repoUrl: gh('ai-web-builder') },
  { title: 'Comet Assistant', year: '2025', kind: 'Chrome extension', stack: 'Next.js · OpenAI · Extension APIs', repoUrl: gh('Browser-Assistant') },
  { title: 'Olympus', year: '2026', kind: 'Discord bot', stack: 'Python · Discord API', repoUrl: gh('olympus-bot-2.0.1') },
  { title: 'Demand Forecasting', year: '2025', kind: 'ML dashboard', stack: 'Python · Streamlit · M5 dataset', repoUrl: gh('DAIRY-ANALYTICS-PLATFORM'), liveUrl: 'https://dairy-analytics-platform-gbwpopebur4xv5rankjfez.streamlit.app' },
  { title: 'Todo', year: '2025', kind: 'MERN app', stack: 'React · Express · MongoDB · Cloudinary', repoUrl: gh('todo-app-main'), liveUrl: 'https://todo-app-main-gules-nine.vercel.app' },
];

export const services: Service[] = [
  {
    title: 'AI agents & LLM features',
    copy: 'Agent loops with real tools, approval flows, MCP integrations, retrieval and voice — built so a person stays in control of what runs.',
    deliverables: ['Tool-using agents', 'MCP servers & clients', 'RAG / search', 'Speech & TTS pipelines'],
  },
  {
    title: 'Web apps & SaaS MVPs',
    copy: 'From the first schema to a deployed product: auth, billing tiers, dashboards, admin panels and the API underneath.',
    deliverables: ['Next.js / React', 'Node / FastAPI APIs', 'Postgres & Prisma', 'Auth & payments'],
  },
  {
    title: 'Desktop software',
    copy: 'Cross-platform apps people install and keep — real installers, auto-updates, tray behaviour and secure local storage.',
    deliverables: ['Electron apps', 'Windows & macOS builds', 'Auto-update pipelines', 'Browser automation'],
  },
  {
    title: 'Dashboards & data tools',
    copy: 'Dense data turned into screens people can read: charts, filtering, text-to-SQL, and tools for scientific and business data.',
    deliverables: ['Analytics UIs', 'Charting & Canvas', 'Natural-language queries', 'Data import / export'],
  },
];

export const engagementModels = [
  { label: 'Fixed-scope project', copy: 'A clear brief, a quote, and a delivery date. Best for MVPs and well-defined features.' },
  { label: 'Monthly contract', copy: 'A reserved block of my week on your roadmap. Best for ongoing product work.' },
  { label: 'Short sprint', copy: 'One to two weeks on a single hard problem — a prototype, an audit, or an integration.' },
];

export const processSteps = [
  { step: '01', title: 'Call', copy: 'A 20-minute conversation about the product, the users and what “done” means.' },
  { step: '02', title: 'Scope', copy: 'A written plan with milestones, stack choices and a fixed quote or rate.' },
  { step: '03', title: 'Build', copy: 'Working software every week — a preview link, not a status report.' },
  { step: '04', title: 'Handover', copy: 'Deployed, documented, and the repository is yours.' },
];

export const timeline: TimelineEntry[] = [
  {
    period: '2026 — Now',
    title: 'Independent engineer',
    org: 'Freelance & own products',
    copy: 'Shipping AgentForge, CapturePro, WATabs and client tooling such as a desktop product scraper. Taking on contract work alongside.',
  },
  {
    period: 'Jan — Mar 2026',
    title: 'Trainee',
    org: 'Space Applications Centre, ISRO',
    copy: 'Payload Checkout Software and Vision Control Department. Built the HDF Viewer for HDF5 payload data, integrated into the SAC web portal.',
    href: 'https://hdf-viewer.vercel.app',
  },
  {
    period: '2025',
    title: 'Team lead',
    org: 'GearGuard',
    copy: 'Led a four-person team building an equipment maintenance system with Kanban boards, technician assignment and KPI dashboards.',
    href: 'https://gearguard-odoo-5g1n.vercel.app/login',
  },
  {
    period: '2022 — 2026',
    title: 'B.E. Computer Engineering',
    org: 'SAL Institute of Technology & Engineering Research, GTU',
    copy: 'Graduated with a CGPA of 8.09.',
  },
];

export const stackGroups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'React Native'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Flask', 'Socket.IO'] },
  { label: 'Data', items: ['PostgreSQL', 'Prisma', 'MongoDB', 'Firebase', 'S3 / MinIO'] },
  { label: 'AI', items: ['OpenAI & Claude APIs', 'MCP', 'E2B sandboxes', 'Whisper', 'Vanna'] },
  { label: 'Desktop & ops', items: ['Electron', 'GitHub Actions', 'Vercel', 'VPS', 'Cloudflare'] },
];

export const faqs = [
  {
    q: 'Are you available for freelance or contract work?',
    a: 'Yes. I take on fixed-scope projects, monthly contracts and short one-to-two-week sprints, and keep the number of parallel projects small so each one gets real attention.',
  },
  {
    q: 'What kind of projects do you build?',
    a: 'AI agents and LLM features, full-stack web apps and SaaS MVPs, cross-platform desktop apps with Electron, and dashboards or data tools. Recent examples include AgentForge, CapturePro, WATabs and the HDF Viewer built at ISRO SAC.',
  },
  {
    q: 'Which technologies do you work with?',
    a: 'Mostly TypeScript, React and Next.js on the front end; Node.js, Express, FastAPI and Flask on the back end; PostgreSQL with Prisma, MongoDB and Firebase for data; Electron for desktop; and OpenAI and Claude APIs, MCP and E2B sandboxes for AI work.',
  },
  {
    q: 'Where are you based, and do you work remotely?',
    a: 'I’m based in Ahmedabad, India (IST, UTC+5:30) and work with clients remotely, with regular written updates and a working preview link every week.',
  },
  {
    q: 'How do we get started?',
    a: 'Send a short brief through the contact form or by email: what you’re building, who it’s for and when you need it. I’ll reply with questions, then a written scope with milestones and a quote.',
  },
];
