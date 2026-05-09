import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default function ProjectDetailPage({ project, onBack }) {
  return (
    <main className="project-detail-section page-detail-section">
      <div className="container">
        <a className="btn detail-back page-back-btn" href="#portfolio" onClick={onBack} data-reveal="left">
          <ArrowLeft size={18} /> Back to Portfolio
        </a>

        <div className="detail-breadcrumb page-breadcrumb" data-reveal="up">
          <span>Portfolio</span><b>›</b><strong>{project.title}</strong>
        </div>

        <div className="detail-layout page-detail-layout">
          <div className="detail-copy" data-reveal="left">
            <span>{project.category}</span>
            <h2>{project.title}</h2>
            <i></i>
            <p>{project.longDescription || project.description}</p>

            <div className="detail-stack">
              {(project.stack || []).map((item) => <em key={item}>{item}</em>)}
            </div>

            <ul className="detail-list">
              {(project.metrics || []).map((item) => <li key={item}>{item}</li>)}
            </ul>

           {(project.github || project.live) && (
              <div className="detail-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-dark">
                    <Github size={16} /> GitHub
                  </a>
                )}

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} /> View App
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="detail-preview page-detail-preview" data-reveal="right">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </div>
    </main>
  );
}
