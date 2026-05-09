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
import ProjectDetailPage from './components/ProjectDetailPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isRouteLeaving, setIsRouteLeaving] = useState(false);

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


  const goToProject = (slug) => {
    setIsRouteLeaving(true);

    window.setTimeout(() => {
      window.location.hash = `/project/${slug}`;
      window.scrollTo(0, 0);
      setIsRouteLeaving(false);
    }, 240);
  };

  const goBackToPortfolio = (event) => {
    if (event) {
      event.preventDefault();
    }

    setIsRouteLeaving(true);

    window.setTimeout(() => {
      window.location.hash = 'portfolio';
      setIsRouteLeaving(false);

      window.setTimeout(() => {
        handleNavigate('#portfolio');
      }, 80);
    }, 240);
  };

  useEffect(() => {
    const loader = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(loader);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
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
  }, [isLoading, currentHash]);

  useEffect(() => {
    if (isLoading || currentHash.startsWith('#/project/')) {
      return;
    }

    if (currentHash === '#portfolio' || currentHash === '#about' || currentHash === '#skills' || currentHash === '#contact') {
      window.setTimeout(() => {
        handleNavigate(currentHash);
      }, 120);
    }
  }, [currentHash, isLoading]);

  if (isLoading) {
    return <Welcome isLoadingScreen />;
  }

  const projectSlug = currentHash.replace('#/project/', '');
  const selectedProject = currentHash.startsWith('#/project/')
    ? projects.find((project) => project.slug === projectSlug)
    : null;

  if (selectedProject) {
    return (
      <>
        <Navbar onNavigate={handleNavigate} />
        <div className={`route-shell ${isRouteLeaving ? 'route-leaving' : ''}`}>
          <ProjectDetailPage project={selectedProject} onBack={goBackToPortfolio} />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <main className={`route-shell ${isRouteLeaving ? 'route-leaving' : ''}`}>
        <Hero />
        <About />
        <PortfolioShowcase projects={projects} certificates={certificates} skills={skills} onProjectNavigate={goToProject} />
        {/* <Skills skills={skills} /> */}
        <Contact />
      </main>
    </>
  );
}
