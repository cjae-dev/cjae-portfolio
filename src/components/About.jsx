import React from 'react';
import { Code2, FileText, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-copy" data-reveal="left">
          <span className="section-kicker">About Me</span>
          <h2>Building modern, scalable, and user-focused web experiences.</h2>
          <p>
            Full-stack developer focused on building fast, reliable, and user-friendly web solutions. Specializing in PHP, FastAPI, Next.js, and WordPress, I develop scalable applications, custom CMS solutions, and modern web platforms that deliver seamless user experiences. I have experience working across both frontend and backend, designing efficient system architectures, integrating APIs, and optimizing performance for real-world use cases. Passionate about clean code and continuous improvement, I aim to create solutions that are not only functional but also maintainable, scalable, and aligned with business needs.
          </p>
          <div className="quote-box">“Building real projects, solving real problems, and improving through every line of code.”</div>
          <div className="about-actions">
            <a className="btn btn-primary" href="/files/Limos_Cjae_Resume.pdf" download><FileText size={17} /> Download CV</a>
            <a className="btn btn-ghost" href="#portfolio"><Code2 size={17} /> View Projects</a>
          </div>
        </div>

        <div className="about-image" data-reveal="right">
          <div className="profile-orb">
            <img src={`${import.meta.env.BASE_URL}images/cjae-pic-edited.png`} alt="Cjae profile" />
          </div>
        </div>

        <div className="stat-strip">
          <div className="stat-box" data-reveal="left">
            <Code2 size={26} />
            <span>Total Projects</span>
            <p>Web, design, and plugin work delivered</p>
            <strong>4</strong>
            <small>• live</small>
          </div>
          <div className="stat-box" data-reveal="up">
            <FileText size={26} />
            <span>Certificates</span>
            <p>Professional skills validated</p>
            <strong>1</strong>
            <small>• On Going</small>
          </div>
          <div className="stat-box" data-reveal="right">
            <Globe2 size={26} />
            <span>Years of Experience</span>
            <p>Continuous learning journey</p>
            <strong>4</strong>
            <small>• live</small>
          </div>
        </div>
      </div>
    </section>
  );
}
