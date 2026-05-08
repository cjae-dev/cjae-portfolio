import React from 'react';
export default function Projects({ projects, activeProject, setActiveProject }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Portfolio Work</span>
          <h2>Featured case studies and product-style projects.</h2>
          <p>
            Each card is built to feel like a product showcase, with stack badges, feature highlights,
            image previews, and smooth hover transitions.
          </p>
        </div>

        <div className="project-showcase">
          <div className="featured-project" data-reveal>
            <div className="featured-image">
              <img src={activeProject.image} alt={activeProject.title} />
            </div>
            <div className="featured-content">
              <span>{activeProject.category}</span>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
              <div className="chip-row">
                {activeProject.stack.map((item) => <em key={item}>{item}</em>)}
              </div>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <button
                className={activeProject.title === project.title ? 'project-item is-active' : 'project-item'}
                key={project.title}
                type="button"
                onClick={() => setActiveProject(project)}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="project-number">0{index + 1}</span>
                <span className="project-text">
                  <b>{project.title}</b>
                  <small>{project.category}</small>
                </span>
                <span className="project-arrow">↗</span>
              </button>
            ))}
          </div>
        </div>

        <div className="cards-grid">
          {projects.slice(0, 3).map((project, index) => (
            <article className="glass-card" key={project.title} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
              <img src={project.image} alt={project.title} />
              <div className="glass-card-body">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
