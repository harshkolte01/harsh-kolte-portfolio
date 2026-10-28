import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Archive from './components/Archive';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import SiteShell from './components/SiteShell';

function App() {
  return (
    <SiteShell currentPage="home">
      <Hero />
      <Marquee />
      <Projects />
      <Archive />
      <Services />
      <About />
      <Contact />
    </SiteShell>
  );
}

export default App;
