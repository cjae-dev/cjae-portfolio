import React from 'react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleClick = (event, href) => {
    event.preventDefault();
    setOpen(false);
    onNavigate(href);
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#top" onClick={(event) => handleClick(event, '#top')} aria-label="Cjae portfolio home">
          <span className="brand-mark">C</span>
          <span className="brand-text">Cjae Limos</span>
        </a>

        <nav className={open ? 'nav-links is-open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => handleClick(event, item.href)}>{item.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="btn btn-ghost"
            href={`${import.meta.env.BASE_URL}files/Limos_Cjae_Resume.pdf`}
            download="Limos_Cjae_Resume.pdf"
          >
            Download CV
          </a>
          <button className="menu-btn" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
