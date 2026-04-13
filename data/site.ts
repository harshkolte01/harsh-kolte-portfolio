import { Project } from '../types';

export const siteConfig = {
  name: 'Harsh Kolte',
  initials: 'HK',
  jobTitle: 'Full Stack Developer',
  heroEyebrow: 'Available For Full-Time Roles And Select Freelance Builds',
  heroHeadline: 'Full stack developer designing sharp interfaces and shipping AI-enabled products.',
  siteTitle: 'Harsh Kolte | Full Stack Developer & AI Web App Builder',
  siteDescription:
    'Portfolio of Harsh Kolte, a full stack developer in Ahmedabad, India building React, Node.js, and AI-powered web applications with strong frontend polish and backend depth.',
  resumeTitle: 'Harsh Kolte Resume | Full Stack Developer',
  resumeDescription:
    'Resume of Harsh Kolte covering full stack development experience, AI integration work, featured projects, skills, and education.',
  shortBio:
    'React, Node.js, TypeScript, AI integration, dashboards, and modern product-focused web application development.',
  email: 'harshkolte01@gmail.com',
  location: 'Ahmedabad, Gujarat, India',
  githubUrl: 'https://github.com/harshkolte01',
  linkedinUrl: 'https://www.linkedin.com/in/harsh-kolte-458978277/',
  instagramUrl: 'https://www.instagram.com/harshkolte01/',
  faviconPath: './favicon.svg',
  ogImagePath: './og-image.png',
  homeResumeHref: 'resume/',
  resumeHomeHref: '../',
  homeResumePdfHref: 'resume_harshkolte.pdf',
  resumePdfHref: '../resume_harshkolte.pdf',
  hdfViewerUrl: 'https://hdf-viewer.vercel.app',
  primaryFocus: [
    'Modern React interfaces',
    'Node.js backends',
    'Claude and OpenAI integrations',
    'Analytics dashboards',
  ],
  heroProof: [
    'Shipped full stack SaaS products',
    'Built browser-side data tooling at ISRO',
    'Comfortable across UI, APIs, and product thinking',
  ],
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'REST APIs',
    'AI integration',
    'Claude Code',
    'Codex',
    'Claude model integrations',
    'OpenAI model integrations',
    'Full stack web development',
  ],
} as const;

export const featuredProjects: Project[] = [
  {
    title: 'Linksht',
    category: 'SaaS Product',
    role: 'Product design, frontend, backend, and auth flows',
    year: '2025',
    impact: 'Built for link management, analytics visibility, and secure subscriber workflows.',
    description:
      'A subscription-based link shortener and analytics platform that helps users create short links, track click performance, and manage authentication securely.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Nodemailer'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://linksht.me',
    tone: 'blue',
    features: [
      'Link analytics dashboard',
      'OTP email authentication',
      'Subscription billing flow',
    ],
  },
  {
    title: 'Tournament Management System',
    category: 'Realtime Platform',
    role: 'Full stack development and admin-user workflow design',
    year: '2025',
    impact: 'Designed to handle organizer control, player participation, and live event updates.',
    description:
      'A full stack esports event platform for organizers and players with role-based workflows, real-time updates, and streamlined event participation.',
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase Auth', 'Firebase Realtime DB'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://infamousesports.vercel.app',
    tone: 'teal',
    features: [
      'Google OAuth integration',
      'Real-time event tracking',
      'Role-based access control',
    ],
  },
  {
    title: 'Todo Web Application',
    category: 'Productivity App',
    role: 'MERN implementation with auth and profile workflows',
    year: '2024',
    impact: 'Focused on everyday usability, secure login, and clean information management.',
    description:
      'A task management application with secure authentication, advanced filtering, pagination, and user profile management for daily productivity workflows.',
    techStack: ['MERN Stack', 'JWT', 'Cloudinary', 'REST API'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://todo-app-main-gules-nine.vercel.app',
    tone: 'orange',
    features: [
      'Advanced search and filters',
      'Secure JWT authentication',
      'Profile image upload',
    ],
  },
];
