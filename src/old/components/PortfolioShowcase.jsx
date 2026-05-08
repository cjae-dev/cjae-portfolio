import React, { useMemo, useState } from 'react';
import { Award, Code2, Layers3, Github, ExternalLink, ArrowLeft, ChevronDown, ChevronUp, X } from 'lucide-react';

const tabs = ['Project', 'Design', 'Editing'];

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
  'React', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'WordPress',
  'jQuery', 'Bootstrap', 'HTML', 'CSS', 'FastAPI', 'Next.js'
];

export default function PortfolioShowcase({ projects = [], certificates = [], skills = [] }) {
  const [activeMain, setActiveMain] = useState('Projects');
  const [activeTab, setActiveTab] = useState('Project');
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);

  const certificateItems = certificates.length ? certificates : fallbackCertificates;
  const skillItems = skills.length ? skills : fallbackSkills;

  const filteredProjects = useMemo(() => {
    const items = projects.filter((project) => project.group === activeTab);
    return items.length ? items : projects;
  }, [projects, activeTab]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleMainTab = (tab) => {
    setActiveMain(tab);
    setShowAll(false);
    setSelected(null);
  };

  const handleCategoryTab = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-head center showcase-heading">
          <h2 className="red-title">Portfolio Showcase</h2>
          <p>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
        </div>

        <div className="showcase-tabs stable-tabs">
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
          <div className="showcase-content-panel">
            <div className="category-tabs compact-category-tabs">
              {tabs.map((tab) => (
                <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => handleCategoryTab(tab)} type="button">{tab}</button>
              ))}
            </div>

            {visibleProjects.length > 0 ? (
              <div className="portfolio-grid showcase-grid fixed-showcase-grid">
                {visibleProjects.map((project) => (
                  <article className="portfolio-card cinematic-card fixed-project-card" key={`${activeTab}-${project.title}`}>
                    <div className="portfolio-img">
                      <img src={project.image} alt={project.title} />
                      <div className="portfolio-overlay">
                        <span>{project.category}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="overlay-actions">
                          <a href={project.github || 'https://github.com/cjae-dev'} target="_blank" rel="noreferrer">
                            <Github size={16} /> GitHub
                          </a>
                          <button type="button" onClick={() => setSelected(project)}>Details →</button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
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
            <div className="certificate-grid visible-grid">
              {certificateItems.map((item) => (
                <article className="certificate-card" key={item.title}>
                  <Award size={24} />
                  <span>{item.issuer}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeMain === 'Tech Stack' && (
          <div className="showcase-content-panel">
            <div className="showcase-tech-grid visible-grid">
              {skillItems.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        )}
      </div>

      {selected && (
        <div className="project-detail-overlay" role="dialog" aria-modal="true">
          <button className="detail-close" type="button" onClick={() => setSelected(null)} aria-label="Close project detail">
            <X size={22} />
          </button>

          <div className="detail-page-card">
            <div className="detail-toolbar">
              <button className="detail-back" type="button" onClick={() => setSelected(null)}>
                <ArrowLeft size={18} /> Back
              </button>

              <div className="detail-breadcrumb">
                <span>Projects</span><b>›</b><strong>{selected.title}</strong>
              </div>
            </div>

            <div className="detail-layout modal-detail-layout">
              <div className="detail-copy">
                <span>{selected.category}</span>
                <h2>{selected.title}</h2>
                <i></i>
                <p>{selected.longDescription || selected.description}</p>

                <div className="detail-stack">
                  {(selected.stack || []).map((item) => <em key={item}>{item}</em>)}
                </div>

                <ul className="detail-list">
                  {(selected.metrics || []).map((item) => <li key={item}>{item}</li>)}
                </ul>

                <div className="detail-actions">
                  <a href={selected.github || 'https://github.com/cjae-dev'} target="_blank" rel="noreferrer" className="btn btn-dark">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={selected.live || '#portfolio'} className="btn btn-primary">
                    <ExternalLink size={16} /> View App
                  </a>
                </div>
              </div>

              <div className="detail-preview modal-detail-preview">
                <img src={selected.image} alt={selected.title} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
