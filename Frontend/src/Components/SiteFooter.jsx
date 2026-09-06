import { smoothScrollTo } from '../utils/scrollUtils';
import './SiteFooter.css';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' }
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/muthukumaranarc',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muthukumaranarc00',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:muthukumaran.freelance@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/8610760407',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    )
  }
];

function SiteFooter() {
  const scrollToTop = () => {
    smoothScrollTo('hero');
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <footer className="site-footer" id="footer">
      {/* Subtle ambient lighting & pattern */}
      <div className="footer-glow" aria-hidden="true"></div>
      <div className="footer-pattern" aria-hidden="true"></div>

      <div className="footer-container">
        {/* Main Content Card */}
        <div className="footer-main-card">
          <div className="footer-grid">
            {/* Column 1: Brand & Bio */}
            <div className="footer-brand-col">
              <div className="footer-logo-wrap">
                <div className="footer-avatar-badge">MK</div>
                <div className="footer-brand-text">
                  <h3 className="footer-brand-name">Muthukumaran M</h3>
                  <p className="footer-brand-tagline">
                    Full-Stack Developer &bull; AI Enthusiast
                  </p>
                </div>
              </div>

              <p className="footer-bio-summary">
                Passionate about turning bold ideas into scalable, high-performance web
                applications. Driven by continuous learning, clean architecture, and real-world problem solving.
              </p>

              {/* Kutty Companion nod */}
              <div className="footer-kutty-pill" title="Kutty the Owl, your portfolio companion!">
                <span className="footer-kutty-icon">🦉</span>
                <span className="footer-kutty-text">Explored with <strong>Kutty</strong></span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-nav-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-nav-list">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="footer-nav-link"
                      onClick={(e) => handleNavClick(e, link.id)}
                    >
                      <span className="footer-link-dot">&rsaquo;</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social & Get in Touch */}
            <div className="footer-connect-col">
              <h4 className="footer-col-title">Connect &amp; Social</h4>
              <p className="footer-connect-desc">
                Have a question, opportunity, or collaboration in mind? Let&apos;s build something great together.
              </p>

              <div className="footer-social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="footer-top-btn"
                onClick={scrollToTop}
                aria-label="Back to top"
              >
                <span className="material-symbols-outlined">arrow_upward</span>
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Credits */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Muthukumaran M. All rights reserved.
            </p>
            <p className="footer-made-with">
              Built with <span className="footer-heart">&hearts;</span> using React 19 &bull; Spring Boot &bull; Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
