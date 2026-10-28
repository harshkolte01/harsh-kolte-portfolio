import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import ResumeApp from './ResumeApp';

// Build-time only: renders each page to static HTML so crawlers and link previews see real content.
export const render = (page: 'home' | 'resume') =>
  renderToString(<React.StrictMode>{page === 'home' ? <App /> : <ResumeApp />}</React.StrictMode>);

export { archiveProjects, faqs, featuredProjects, services, siteConfig, stackGroups, timeline } from './data/site';
