import React from 'react';
import ResumePage from './components/ResumePage';
import SiteShell from './components/SiteShell';

const ResumeApp: React.FC = () => {
  return (
    <SiteShell currentPage="resume">
      <ResumePage />
    </SiteShell>
  );
};

export default ResumeApp;
