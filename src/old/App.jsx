import React from 'react';
import { useEffect, useState } from 'react';
import { projects, skills, certificates } from './data/projects';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioShowcase from './components/PortfolioShowcase';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = (href) => {
    const target = document.querySelector(href);
    if (!target) return;

    setIsTransitioning(true);

    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 280);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 980);
  };

  useEffect(() => {
    const loader = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(loader);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.16 });

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <Welcome isLoadingScreen />;
  }

  return (
    <>
      <div className={isTransitioning ? 'page-transition active' : 'page-transition'}>
        <span></span>
        <b>Sliding Section</b>
      </div>

      <Navbar onNavigate={handleNavigate} />
      <main>
        <Hero />
        <About />
        <PortfolioShowcase projects={projects} certificates={certificates} skills={skills} />
        <Skills skills={skills} />
        <Contact />
      </main>
    </>
  );
}
