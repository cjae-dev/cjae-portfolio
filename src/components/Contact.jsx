import React from 'react';
import { Github, Linkedin, Mail, MapPin, Send, UserRound } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info-card" data-reveal="left">
          <span className="section-kicker">Contact</span>
          <h2>Let’s build something clean and functional.</h2>
          <p>
            Send me a quick message for portfolio websites, WordPress plugins,
            CRM dashboards, landing pages, or custom web systems.
          </p>

          <div className="contact-info-list">
            <a href="mailto:cjaelimos04@gmail.com"><Mail size={18} /> cjaelimos04@gmail.com</a>
            <span><MapPin size={18} /> Philippines, Remote Available</span>
            <a href="https://github.com/cjae-dev" target="_blank" rel="noreferrer"><Github size={18} /> github.com/cjae-dev</a>
            <a href="https://www.linkedin.com/in/cjae-limos" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn Profile</a>
          </div>
        </div>

        <form className="contact-form-card" data-reveal="right" action="mailto:cjaelimos04@gmail.com" method="post" encType="text/plain">
          <div className="form-row">
            <label>Name <strong>*</strong></label>
            <div className="input-wrap">
              <UserRound size={18} />
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>
          </div>

          <div className="form-row">
            <label>Email <strong>*</strong></label>
            <div className="input-wrap">
              <Mail size={18} />
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="form-row">
            <label>Message <strong>*</strong></label>
            <textarea name="message" placeholder="Write your message here..." required></textarea>
          </div>

          <button className="btn btn-primary send-btn" type="submit">
            Send Message <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
