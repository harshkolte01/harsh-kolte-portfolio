import { Project } from '../types';

export const siteConfig = {
  name: 'Harsh Kolte',
  initials: 'HK',
  jobTitle: 'Full Stack Developer',
  heroEyebrow: 'Full Stack Developer in Ahmedabad, India',
  heroHeadline: 'Full Stack Developer building AI-driven web applications.',
  siteTitle: 'Harsh Kolte | Full Stack Developer & AI Web App Builder',
  siteDescription:
    'Portfolio of Harsh Kolte, a full stack developer in Ahmedabad, India building React, Node.js, and AI-powered web applications with strong frontend polish and backend depth.',
  resumeTitle: 'Harsh Kolte Resume | Full Stack Developer',
  resumeDescription:
    'Resume of Harsh Kolte covering full stack development experience, AI integration work, featured projects, skills, and education.',
  shortBio:
    'React, Node.js, TypeScript, AI integration, and product-focused web application development.',
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
    'Full stack web development',
  ],
} as const;

export const featuredProjects: Project[] = [
  {
    title: 'Linksht (Link Shortener)',
    description:
      'A subscription-based link shortener and analytics platform that helps users create short links, track click performance, and manage authentication securely.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Nodemailer'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://linksht.me',
    features: [
      'Link analytics dashboard',
      'OTP email authentication',
      'Subscription billing flow',
    ],
  },
  {
    title: 'Tournament Management System',
    description:
      'A full stack esports event platform for organizers and players with role-based workflows, real-time updates, and streamlined event participation.',
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase Auth', 'Firebase Realtime DB'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://infamousesports.vercel.app',
    features: [
      'Google OAuth integration',
      'Real-time event tracking',
      'Role-based access control',
    ],
  },
  {
    title: 'Todo Web Application',
    description:
      'A task management application with secure authentication, advanced filtering, pagination, and user profile management for daily productivity workflows.',
    techStack: ['MERN Stack', 'JWT', 'Cloudinary', 'REST API'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://todo-app-main-gules-nine.vercel.app',
    features: [
      'Advanced search and filters',
      'Secure JWT authentication',
      'Profile image upload',
    ],
  },
];
