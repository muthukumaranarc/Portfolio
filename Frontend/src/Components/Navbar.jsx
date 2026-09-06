import { useEffect, useRef, useState } from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
];

function Navbar({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleResume = () => {
    setIsMenuOpen(false);
    window.open(
      "https://drive.google.com/file/d/1nMpzZRgApRiR1i4nf_-J6m6Q6KY6z7DS/view?usp=sharing",
      "_blank"
    );
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    smoothScrollTo(targetId);
  };

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav className="site-nav">
      <div className="nav-brand-group" ref={menuRef}>
        <a
          href="#hero"
          className="nav-logo"
          aria-label="Home"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          <img
            src="/portfolio-logo.webp"
            alt="Muthukumaran logo"
            width="40"
            height="40"
            decoding="async"
          />
        </a>

        {/* 3-line hamburger menu button placed near the logo in mobile */}
        <button
          className={`nav-mobile-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>

        {/* Mobile menu dropdown positioned near the hamburger button */}
        {isMenuOpen && (
          <div className="nav-mobile-dropdown">
            <div className="nav-mobile-links">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-mobile-link ${activeSection === item.id ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <span className="nav-link-indicator"></span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop navigation links */}
      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active-link' : ''}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>

      <button className="nav-resume-btn" onClick={handleResume}>
        Resume
      </button>
    </nav>
  );
}

export default Navbar;
