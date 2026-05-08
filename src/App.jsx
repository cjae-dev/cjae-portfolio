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
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = (href) => {
    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = 86;
    const startTop = window.pageYOffset;
    const targetTop = Math.max(0, target.getBoundingClientRect().top + startTop - headerOffset);
    const distance = targetTop - startTop;

    if (Math.abs(distance) < 8) {
      return;
    }

    document.body.classList.add('is-navigating');

    const duration = Math.min(950, Math.max(520, Math.abs(distance) * 0.45));
    const startedAt = performance.now();
    const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startedAt;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, startTop + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
        return;
      }

      window.scrollTo(0, targetTop);
      window.setTimeout(() => {
        document.body.classList.remove('is-navigating');
      }, 120);
    };

    requestAnimationFrame(animateScroll);
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
