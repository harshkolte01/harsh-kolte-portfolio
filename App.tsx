import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePage from './components/ResumePage';

const PortfolioContent = () => (
  <main className="max-w-7xl mx-auto w-full">
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
  </main>
);

function App() {
  return (
    <>
      <div className="ambient-bg">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
      </div>
      <div className="relative z-10 min-h-screen text-slate-400 font-sans selection:bg-accent-cyan/30 selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<PortfolioContent />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;