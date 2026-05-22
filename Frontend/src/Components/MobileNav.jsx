import './MobileNav.css';

function MobileNav({ activeSection }) {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-inner glass-card">
        <a href="#stack" className={`mobile-nav-link ${activeSection === 'stack' ? 'active-link' : ''}`}>
          <span className="material-symbols-outlined">layers</span>
          <span className="mobile-nav-text">Stack</span>
        </a>
        <a href="#about" className={`mobile-nav-link ${activeSection === 'about' ? 'active-link' : ''}`}>
          <span className="material-symbols-outlined">person</span>
          <span className="mobile-nav-text">About</span>
        </a>
        <a href="#projects" className={`mobile-nav-link ${activeSection === 'projects' ? 'active-link' : ''}`}>
          <span className="material-symbols-outlined">terminal</span>
          <span className="mobile-nav-text">Work</span>
        </a>
        <a href="#journey" className={`mobile-nav-link ${activeSection === 'journey' ? 'active-link' : ''}`}>
          <span className="material-symbols-outlined">history_edu</span>
          <span className="mobile-nav-text">Story</span>
        </a>
        <a href="#contact" className={`mobile-nav-link ${activeSection === 'contact' ? 'active-link' : ''}`}>
          <span className="material-symbols-outlined">alternate_email</span>
          <span className="mobile-nav-text">Mail</span>
        </a>
      </div>
    </nav>
  );
}

export default MobileNav;
