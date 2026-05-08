import React from 'react';
export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-card" data-reveal>
          <span className="section-kicker">Let us build</span>
          <h2>Need a clean portfolio, plugin, CRM, or admin dashboard?</h2>
          <p>
            I can build responsive websites, custom WordPress plugins, CRM-style dashboards,
            and full-stack systems with clean UI and practical business logic.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:cjaelimos04@gmail.com">Email Me</a>
            <a className="btn btn-ghost" href="https://github.com/cjae-dev" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/cjae-limos" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
