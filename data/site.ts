import { Project } from '../types';

export const siteConfig = {
  name: 'Harsh Kolte',
  initials: 'HK',
  jobTitle: 'Full Stack Developer',
  heroEyebrow: 'Full Stack Developer | AI Product Builder',
  heroHeadline: 'I build AI-ready web products with sharp interfaces, reliable APIs, and practical product thinking.',
  siteTitle: 'Harsh Kolte | Full Stack Developer & AI Product Builder',
  siteDescription:
    'Portfolio of Harsh Kolte, a full stack developer in Ahmedabad, India building polished React, Node.js, and AI-powered product experiences.',
  resumeTitle: 'Harsh Kolte Resume | Full Stack Developer',
  resumeDescription:
    'Resume of Harsh Kolte covering full stack development experience, AI integration work, featured projects, skills, and education.',
  shortBio:
    'React, Node.js, TypeScript, AI integration, analytics dashboards, and product-focused web application development.',
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
    'React product interfaces',
    'Node.js API systems',
    'AI-assisted workflows',
    'Analytics dashboards',
  ],
  heroProof: [
    'Built browser-side data tooling at ISRO SAC',
    'Shipped SaaS, realtime, and productivity products',
    'Comfortable across UX, frontend, APIs, and data flows',
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
    category: 'Analytics SaaS',
    role: 'Product design, frontend, backend, and auth flows',
    year: '2025',
    impact: 'Gives creators and teams a cleaner way to publish, monitor, and manage shortened links.',
    description:
      'A subscription-based link shortener and analytics platform with secure authentication, link management, subscriber workflows, and click-performance visibility.',
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
    category: 'Realtime Esports Ops',
    role: 'Full stack development and admin-user workflow design',
    year: '2025',
    impact: 'Turns esports event operations into a structured admin-player workflow with live updates.',
    description:
      'A full stack esports event platform for organizers and players with Google OAuth, role-based workflows, real-time event tracking, and streamlined participation.',
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
    category: 'Authenticated Productivity',
    role: 'MERN implementation with auth and profile workflows',
    year: '2024',
    impact: 'Keeps daily task management clear with authentication, filtering, pagination, and profile flows.',
    description:
      'A task management application with secure authentication, advanced filtering, pagination, media upload, and user profile management for daily productivity workflows.',
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
