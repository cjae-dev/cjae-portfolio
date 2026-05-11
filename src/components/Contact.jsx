import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send, UserRound } from 'lucide-react';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('https://formspree.io/f/xwvyakaw', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setIsSent(true);
      e.target.reset();
    }
  };

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

        {isSent ? (
          <div className="thank-you-card">
            <div className="thank-you-icon">✓</div>
            <span className="section-kicker">Message Sent</span>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. I’ll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form-card" data-reveal="right" onSubmit={handleSubmit}>
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
        )}
      </div>
    </section>
  );
}