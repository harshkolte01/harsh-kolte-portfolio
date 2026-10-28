export type ProjectVisual = 'agent' | 'capture' | 'tabs' | 'hdf' | 'scraper' | 'links';

export interface Project {
  slug: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  visual: ProjectVisual;
  repoUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
}

export interface ArchiveProject {
  title: string;
  year: string;
  kind: string;
  stack: string;
  note?: string;
  repoUrl: string;
  liveUrl?: string;
}

export interface Service {
  title: string;
  copy: string;
  deliverables: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  copy: string;
  href?: string;
}
