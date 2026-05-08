import React from 'react';
import { useEffect, useState } from 'react';
import { ExternalLink, Code2, UserRound, Mail } from 'lucide-react';

const words = ['Problem Solver', 'Full Stack Developer', 'UI Builder', 'WordPress Developer'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [mode, setMode] = useState('typing');

  useEffect(() => {
    const current = words[wordIndex];
    let timeout = 70;

    if (mode === 'typing') {
      if (text.length < current.length) {
        timeout = 58;
      } else {
        timeout = 1200;
      }
    }

    if (mode === 'deleting') {
      timeout = 34;
    }

    const timer = setTimeout(() => {
      if (mode === 'typing') {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setMode('pause');
        }
        return;
      }

      if (mode === 'pause') {
        setMode('deleting');
        return;
      }

      if (text.length > 0) {
        setText(current.slice(0, text.length - 1));
      } else {
        setMode('typing');
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, mode, wordIndex]);

  return (
    <section className="hero-section" id="top">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-grid">
        <div className="hero-copy" data-reveal="left">
          <span className="owner-name reveal-child">Cjae Limos</span>
          <h2 className="reveal-child">Full Stack<br /><span>Developer</span></h2>
          <div className="type-line reveal-child"><span>{text}</span><i></i></div>

          <p className="hero-description reveal-child">
            A creative and multidisciplinary digital professional with a passion for transforming ideas into exceptional visual and functional experiences. I specialize in designing, building, and deploying intuitive, fast, and future-ready web applications.
          </p>

          <div className="hero-tags reveal-child">
            <span>React</span>
            <span>JavaScript</span>
            <span>Laravel</span>
            <span>WordPress</span>
          </div>

          <div className="hero-actions reveal-child">
            <a className="btn btn-primary" href="#portfolio">Projects <ExternalLink size={16} /></a>
            <a className="btn btn-dark" href="#contact">Contact <Mail size={16} /></a>
          </div>

          <div className="social-row reveal-child">
            <a href="https://github.com/cjae-dev" target="_blank" rel="noreferrer"><Code2 size={18} /></a>
            <a href="https://www.linkedin.com/in/cjae-limos" target="_blank" rel="noreferrer"><UserRound size={18} /></a>
            <a href="mailto:cjaelimos04@gmail.com"><Mail size={18} /></a>
          </div>
        </div>

        <div className="hero-device" data-reveal="right">
          <div className="device-head"><span><i></i> System Online</span><span>Portfolio UI</span></div>
          <div className="device-screen">
            <div className="screen-code">&gt; npm run dev</div>
            <div className="screen-card">
              <span>Creative UI</span>
              <strong>Modern Portfolio</strong>
              <small>React powered showcase</small>
            </div>
            <div className="screen-bars"><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
