import React from 'react';
import { Code2, FileText, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-copy" data-reveal>
          <span className="section-kicker">About Me</span>
          <h2>Passion for front-end development fuels my drive to build intuitive and high-performance web interfaces.</h2>
          <p>
            I focus on creating clean layouts, reusable components, smooth user interactions, and functional systems. My work includes portfolio websites, CRM dashboards, WordPress plugins, and landing page experiences.
          </p>
          <div className="quote-box">“Leveraging AI as a professional tool, not a replacement.”</div>
          <div className="about-actions">
            <a className="btn btn-primary" href="/files/Limos_Cjae_Resume.pdf" download><FileText size={17} /> Download CV</a>
            <a className="btn btn-ghost" href="#portfolio"><Code2 size={17} /> View Projects</a>
          </div>
        </div>

        <div className="about-image" data-reveal>
          <div className="profile-orb">
            <img src="/images/cjae-pic-edited.png" alt="Cjae profile" />
          </div>
        </div>

        <div className="stat-strip" data-reveal>
          <div className="stat-box">
            <Code2 size={26} />
            <span>Total Projects</span>
            <p>Web, design, and plugin work delivered</p>
            <strong>13</strong>
            <small>• live</small>
          </div>
          <div className="stat-box">
            <FileText size={26} />
            <span>Certificates</span>
            <p>Professional skills validated</p>
            <strong>2</strong>
            <small>• live</small>
          </div>
          <div className="stat-box">
            <Globe2 size={26} />
            <span>Years of Experience</span>
            <p>Continuous learning journey</p>
            <strong>2</strong>
            <small>• live</small>
          </div>
        </div>
      </div>
    </section>
  );
}
