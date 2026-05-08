import React from 'react';
export default function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Tech Stack</span>
          <h2>Tools I use to build frontend, backend, plugins, and dashboards.</h2>
        </div>

        <div className="marquee" data-reveal>
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill} data-reveal style={{ transitionDelay: `${index * 35}ms` }}>
              <span>{skill.charAt(0)}</span>
              <b>{skill}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
