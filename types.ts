export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  category?: string;
  role?: string;
  year?: string;
  impact?: string;
  tone?: 'blue' | 'teal' | 'orange';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  cgpa: string;
}
