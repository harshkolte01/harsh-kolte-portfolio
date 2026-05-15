import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import SiteShell from './components/SiteShell';

function App() {
  return (
    <SiteShell currentPage="home">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Education />
      <Contact />
    </SiteShell>
  );
}

export default App;
