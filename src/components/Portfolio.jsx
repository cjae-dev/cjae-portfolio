import React from "react";

const projects = [
  {
    title: "CRM Lite",
    desc: "Modern CRM dashboard with leads and analytics"
  },
  {
    title: "Smart CTA Banner",
    desc: "Marketing plugin for WordPress websites"
  },
  {
    title: "Smart Popup Builder",
    desc: "Popup builder plugin for conversions"
  }
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      <div className="section-title">
        <span>PORTFOLIO</span>
        <h2>Portfolio Showcase</h2>
      </div>

      <div className="project-grid">

        {projects.map((item, index) => (
          <div className="project-card" key={index}>

            <div className="project-overlay">

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="project-actions">
                <button>GitHub</button>
                <button>Details</button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}