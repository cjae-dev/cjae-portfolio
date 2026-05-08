import React from 'react';
const rows = [
  ['CRM Lite', 'Project', 'Published'],
  ['Smart CTA Banner', 'Plugin', 'Published'],
  ['Smart Popup Builder', 'Plugin', 'Published'],
  ['Testimonial Slider', 'Plugin', 'Draft']
];

export default function AdminShowcase() {
  return (
    <section className="section admin-section" id="cms">
      <div className="container">
        <div className="section-head center" data-reveal>
          <span className="section-kicker">Admin CMS Flow</span>
          <h2>Show the portfolio and the system behind it.</h2>
          <p>
            This section gives the same strong impression as the TikTok reference: public portfolio first,
            then login and dashboard management to prove it is a complete full-stack project.
          </p>
        </div>

        <div className="admin-layout">
          <div className="login-card" data-reveal>
            <div className="login-icon">⌘</div>
            <h3>Admin Login</h3>
            <p>Secure content management for projects, skills, plugin details, and case study sections.</p>

            <label>Email</label>
            <input value="admin@cjae.dev" readOnly />

            <label>Password</label>
            <input value="portfolio-cms" type="password" readOnly />

            <button className="btn btn-primary" type="button">Enter Dashboard</button>
          </div>

          <div className="dashboard-card" data-reveal>
            <div className="dashboard-sidebar">
              <span className="mini-logo">C</span>
              <a className="active">Overview</a>
              <a>Projects</a>
              <a>Plugins</a>
              <a>Skills</a>
              <a>Settings</a>
            </div>

            <div className="dashboard-main">
              <div className="dashboard-header">
                <div>
                  <small>Welcome back, Cjae</small>
                  <h3>Portfolio CMS</h3>
                </div>
                <span className="status-pill">Live</span>
              </div>

              <div className="dashboard-metrics">
                <div><strong>12</strong><span>Projects</span></div>
                <div><strong>3</strong><span>Plugins</span></div>
                <div><strong>24</strong><span>Skills</span></div>
              </div>

              <div className="dashboard-table">
                <div className="table-head"><span>Content</span><span>Type</span><span>Status</span></div>
                {rows.map((row) => (
                  <div className="table-row" key={row[0]}>
                    <span>{row[0]}</span>
                    <span>{row[1]}</span>
                    <span>{row[2]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
