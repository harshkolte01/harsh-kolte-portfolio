import React from 'react';
import ReactDOM from 'react-dom/client';
import ResumeApp from './ResumeApp';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const app = (
  <React.StrictMode>
    <ResumeApp />
  </React.StrictMode>
);

// Production builds ship prerendered markup (scripts/prerender.mjs), so attach to it instead of re-rendering.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
