import React from 'react';
import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';
import { featuredExperience, previousExperience } from '../data/experience';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-head center showcase-heading experience-heading" data-reveal="up">
          <h2 className="red-title">Work Experience</h2>
          <p>
            From CMS development to full-stack CRM engineering, each role has strengthened how I build,
            support, and modernize production-ready web applications.
          </p>
        </div>

        <article className="featured-experience" data-reveal="up">
          <div className="experience-company">
            <div className="experience-company-icon" aria-hidden="true">
              <BriefcaseBusiness size={25} />
            </div>
            <div>
              <span className="experience-status"><i /> Current role</span>
              <h3>{featuredExperience.company}</h3>
              <p>{featuredExperience.role}</p>
            </div>
            <div className="experience-meta">
              <span><CalendarDays size={16} /> {featuredExperience.period}</span>
              <span><MapPin size={16} /> {featuredExperience.location}</span>
            </div>
          </div>

          <div className="experience-phases">
            {featuredExperience.phases.map((phase, index) => (
              <div className="experience-phase" key={phase.title}>
                <div className="phase-rail" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <div className="phase-content">
                  <span className="phase-label">{phase.label}</span>
                  <h4>{phase.title}</h4>
                  <p>{phase.description}</p>
                  <ul>
                    {phase.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="phase-technologies">
                    {phase.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="previous-experience" aria-label="Previous work experience">
          {previousExperience.map((experience, index) => (
            <article
              className="previous-experience-card"
              key={`${experience.company}-${experience.role}`}
              data-reveal="up"
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <div className="previous-experience-marker" aria-hidden="true" />
              <div className="previous-experience-copy">
                <span>{experience.company} | {experience.location}</span>
                <h3>{experience.role}</h3>
                <p>{experience.summary}</p>
              </div>
              <time>{experience.period}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
