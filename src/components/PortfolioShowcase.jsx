import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Award, Code2, Layers3, Github, ChevronDown, ChevronUp } from 'lucide-react';

const tabs = ['Project', 'Landing Page', 'Editing'];

const fallbackCertificates = [
  {
    title: 'Frontend Development',
    issuer: 'Temporary Certificate',
    description: 'Responsive layouts, reusable components, animations, and clean interface structure.'
  },
  {
    title: 'WordPress Plugin Development',
    issuer: 'Project Based',
    description: 'Custom plugin admin settings, frontend scripts, shortcode output, and user-friendly controls.'
  },
  {
    title: 'Full Stack Web Systems',
    issuer: 'Case Study',
    description: 'Dashboard logic, database-driven CRUD modules, workflows, and portfolio-ready business systems.'
  }
];

const fallbackSkills = [
  {
    name: 'React',
    image: '/images/skills/react.png'
  },
  {
    name: 'Next.js',
    image: '/images/skills/nextjs.png'
  },
  {
    name: 'JavaScript',
    image: '/images/skills/javascript.png'
  },
  {
    name: 'TypeScript',
    image: '/images/skills/typescript.png'
  },
  {
    name: 'PHP',
    image: '/images/skills/php.png'
  },
  {
    name: 'Laravel',
    image: '/images/skills/laravel.png'
  },
  {
    name: 'FastAPI',
    image: '/images/skills/fastapi.png'
  },
  {
    name: 'MySQL',
    image: '/images/skills/mysql.png'
  },
  {
    name: 'WordPress',
    image: '/images/skills/wordpress.png'
  },
  {
    name: 'jQuery',
    image: '/images/skills/jquery.png'
  },
  {
    name: 'Bootstrap',
    image: '/images/skills/bootstrap.png'
  },
  {
    name: 'Docker',
    image: '/images/skills/docker.png'
  }
];

export default function PortfolioShowcase({ projects = [], certificates = [], skills = [], onProjectNavigate }) {
  const [activeMain, setActiveMain] = useState('Projects');
  const [activeTab, setActiveTab] = useState('Project');
  const [showAll, setShowAll] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const techSliderRef = useRef(null);
  const [activeTechSlide, setActiveTechSlide] = useState(0);

  const certificateItems = certificates.length ? certificates : fallbackCertificates;
  const skillItems = skills.length ? skills : fallbackSkills;

  const skillsPerSlide = 2;

  const techSlides = useMemo(() => {
    const slides = [];

    for (let i = 0; i < skillItems.length; i += skillsPerSlide) {
      slides.push(skillItems.slice(i, i + skillsPerSlide));
    }

    return slides;
  }, [skillItems]);

  const goToTechSlide = (index) => {
    const slider = techSliderRef.current;

    if (!slider) {
      return;
    }

    const nextIndex = (index + techSlides.length) % techSlides.length;
    setActiveTechSlide(nextIndex);

    slider.scrollTo({
      left: (nextIndex + 1) * slider.offsetWidth,
      behavior: 'smooth'
    });
  };

  const loopTechSlides = useMemo(() => {
    if (!techSlides.length) {
      return [];
    }

    return [
      techSlides[techSlides.length - 1],
      ...techSlides,
      techSlides[0]
    ];
  }, [techSlides]);

  useEffect(() => {
    const slider = techSliderRef.current;

    if (!slider || activeMain !== 'Tech Stack') {
      return;
    }

    slider.scrollLeft = slider.offsetWidth;
  }, [activeMain]);


  const handleTechScroll = () => {
    const slider = techSliderRef.current;

    if (!slider) {
      return;
    }

    const slideWidth = slider.offsetWidth;
    const index = Math.round(slider.scrollLeft / slideWidth);

    if (index === 0) {
      setTimeout(() => {
        slider.scrollTo({
          left: techSlides.length * slideWidth,
          behavior: 'auto'
        });
      }, 80);

      setActiveTechSlide(techSlides.length - 1);
      return;
    }

    if (index === loopTechSlides.length - 1) {
      setTimeout(() => {
        slider.scrollTo({
          left: slideWidth,
          behavior: 'auto'
        });
      }, 80);

      setActiveTechSlide(0);
      return;
    }

    setActiveTechSlide(index - 1);
  };

  

  const filteredProjects = useMemo(() => {
    const items = projects.filter((project) => project.group === activeTab);
    return items.length ? items : projects;
  }, [projects, activeTab]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleMainTab = (tab) => {
    setActiveMain(tab);
    setShowAll(false);
    setAnimationKey((prev) => prev + 1);
  };

  const handleCategoryTab = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-head center showcase-heading" data-reveal="up">
          <h2 className="red-title">Portfolio Showcase</h2>
          <p>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
        </div>

        <div className="showcase-tabs stable-tabs" data-reveal="up">
          {[
            { label: 'Projects', icon: <Code2 size={20} /> },
            { label: 'Certificates', icon: <Award size={20} /> },
            { label: 'Tech Stack', icon: <Layers3 size={20} /> }
          ].map((item) => (
            <button key={item.label} className={activeMain === item.label ? 'active' : ''} onClick={() => handleMainTab(item.label)} type="button">
              {item.icon}<span>{item.label}</span>
            </button>
          ))}
        </div>

        {activeMain === 'Projects' && (
          <div className="showcase-content-panel" key={`projects-${animationKey}`}>
            <div className="category-tabs compact-category-tabs" data-reveal="up">
              {tabs.map((tab) => (
                <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => handleCategoryTab(tab)} type="button">{tab}</button>
              ))}
            </div>

            {visibleProjects.length > 0 ? (
              <div className="portfolio-grid showcase-grid fixed-showcase-grid">
                {visibleProjects.map((project, index) => {
                  const direction = index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right';
                  return (
                  <article className="portfolio-card cinematic-card fixed-project-card" data-reveal={direction} style={{ '--reveal-delay': `${index * 120}ms` }} key={`${animationKey}-${activeTab}-${project.title}-${index}`}>
                    <div className={project.group === 'Landing Page' ? 'portfolio-img landing-preview' : 'portfolio-img'} >
                      <img src={project.image} alt={project.title} />
                      <div className="portfolio-overlay">
                        <span>{project.category}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="overlay-actions">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer">
                              <Github size={16} /> GitHub
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="project-link-btn"
                            >
                              Visit →
                            </a>
                          )}
                          {project.slug && (
                            <a href={`#/project/${project.slug}`} className="project-btn">
                              Details →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state-card">
                <Code2 size={28} />
                <h3>No projects yet</h3>
                <p>Temporary placeholder content will appear here once project data is added.</p>
              </div>
            )}

            {filteredProjects.length > 3 && (
              <div className="see-more-wrap">
                <button className="see-more-btn" type="button" onClick={() => setShowAll(!showAll)}>
                  {showAll ? <>Show Less <ChevronUp size={16} /></> : <>See More <ChevronDown size={16} /></>}
                </button>
              </div>
            )}
          </div>
        )}

        {activeMain === 'Certificates' && (
          <div className="showcase-content-panel">
            <div className="certificate-grid visible-grid" key={`certificates-${animationKey}`}>
              {certificateItems.map((item, index) => (
                <article className="certificate-card" data-reveal={index === 0 ? 'left' : index === 1 ? 'up' : 'right'} style={{ '--reveal-delay': `${index * 120}ms` }} key={`${animationKey}-${item.title}`}>
                  <Award size={24} />
                  <span>{item.issuer}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        
      </div>

      {activeMain === 'Tech Stack' && (
        <div className="showcase-tech-wrapper">
          <div className="showcase-tech-desktop-grid">
            {skillItems.map((item, index) => (
              <div
                className="skill-card tech-reveal-card"
                style={{ animationDelay: `${index * 45}ms` }}
                key={item.name}
              >
                <img src={item.image} alt={item.name} className="skill-icon" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div
            ref={techSliderRef}
            onScroll={handleTechScroll}
            className="showcase-tech-slider"
          >
            {loopTechSlides.map((slide, slideIndex) => (
              <div className="tech-slide" key={`tech-slide-${slideIndex}`}>
                {slide.map((item, index) => (
                  <div
                    className="skill-card tech-reveal-card"
                    style={{ animationDelay: `${index * 45}ms` }}
                    key={`${item.name}-${slideIndex}`}
                  >
                    <img src={item.image} alt={item.name} className="skill-icon" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="tech-slider-dots">
            {techSlides.map((_, index) => (
              <span
                key={index}
                className={activeTechSlide === index ? 'active' : ''}
                onClick={() => goToTechSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
