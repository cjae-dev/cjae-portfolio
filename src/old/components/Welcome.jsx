import React from 'react';
import { Code2, Globe, UserRound } from 'lucide-react';

export default function Welcome({ isLoadingScreen = false }) {
  return (
    <section className={isLoadingScreen ? "welcome-section loading-screen" : "welcome-section"}>
      <div className="container">
        <div className="welcome-panel" data-reveal>
          <div className="welcome-bg-text">WELCOME</div>
          <div className="welcome-copy">
            <div className="mini-tags">
              <span><i></i> System Ready</span>
              <span>Portfolio 2026</span>
              <span>UI Loading</span>
            </div>

            <h1>Welcome to<br />my Portfolio<br />Website</h1>
            <p>Building modern, reliable, and fast digital experiences with a focus on clean UI and solid engineering.</p>

            <div className="live-status">
              <span>Live Status</span>
              <div><i></i></div>
            </div>

            <div className="welcome-pills">
              <span><Code2 size={16} /> Code</span>
              <span><UserRound size={16} /> Profile</span>
              <span><Code2 size={16} /> Source</span>
            </div>

            <a className="domain-pill" href="#portfolio">
              <Globe size={17} /> www.cjae.dev
            </a>
          </div>

          <div className="core-card">
            <div className="core-top"><span>Core UI</span><span>Online</span></div>
            <div className="orbit-wrap">
              <div className="orbit-ring"></div>
              <div className="orbit-center">Welcome</div>
              <span className="orbit-icon icon-one">⌘</span>
              <span className="orbit-icon icon-two">⚡</span>
              <span className="orbit-icon icon-three">↗</span>
              <span className="orbit-icon icon-four">{} </span>
            </div>
            <div className="core-metrics">
              <div><span>Modules</span><b>06</b><small>Loaded</small></div>
              <div><span>Latency</span><b>12ms</b><small>Stable</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
