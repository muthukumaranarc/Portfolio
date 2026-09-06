import { smoothScrollTo } from '../utils/scrollUtils';
import './Hero.css';
import muthu from '../assets/MuthuHero.webp';
import figmaIcon from '../assets/Figma.webp';
import mongodbIcon from '../assets/mongoDB.webp';
import reactIcon from '../assets/ReactJS.webp';
import githubIcon from '../assets/GitHub.webp';
import linkedinIcon from '../assets/LinkedIn.webp';
import mailIcon from '../assets/Mail.webp';

function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        {/* Left Side */}
        <div className="hero-left">
          <h1 className="hero-title">
            Muthu
            <br />
            <span className="hero-title-accent">kumaran</span>
          </h1>

          <p className="hero-subtitle">Full stack web development &amp; Freelancer</p>

          <p className="hero-description">
            I'm&apos;a Computer Science student and Full-Stack Developer who enjoys building practical web applications with React and Spring Boot. I actively participate in hackathons and technical competitions, explore new technologies through hands-on projects, and love solving real-world problems with code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hero-btn-primary">
              View Projects
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hero-btn-secondary">
              Contact Me
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          <div className="hero-footer">
            <div className="hero-socials">
              <a
                href="https://github.com/muthukumaranarc"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="GitHub"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" decoding="async" />
              </a>
              <a
                href="https://www.linkedin.com/in/muthukumaranarc00"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" decoding="async" />
              </a>
              <a
                href="https://x.com/muthukumaranarc"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="X (Twitter)"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href="mailto:muthukumaran.freelance@gmail.com"
                className="hero-social-icon"
                title="Email"
                aria-label="Email"
              >
                <img src={mailIcon} alt="Email" decoding="async" />
              </a>
            </div>

          </div>
        </div>

        {/* Right Side - Portrait + Floating Badges */}
        <div className="hero-right">
          <div className="hero-blob" aria-hidden="true"></div>

          <div className="hero-profile-wrapper">
            <div className="hero-script" aria-hidden="true">
              <span>Build</span>
              <span>Learn</span>
              <span className="hero-script-grow">
                Grow
                <svg className="grow-swoosh" viewBox="0 0 140 18" fill="none" preserveAspectRatio="none">
                  <path
                    d="M5 12C30 3 65 2 90 8c15 4 30 4 45 1"
                    stroke="#166534"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            <img src={muthu} alt="Muthukumaran M" className="hero-profile-img" width="1122" height="1402" fetchPriority="high" decoding="async" />

            <div className="floating-badge badge-figma" title="Figma">
              <img src={figmaIcon} alt="Figma" decoding="async" />
            </div>

            <div className="floating-badge badge-leaf" title="MongoDB">
              <img src={mongodbIcon} alt="MongoDB" decoding="async" />
            </div>

            <div className="floating-badge badge-react" title="React">
              <img src={reactIcon} alt="React" decoding="async" />
            </div>

            <div className="floating-badge badge-leaf-2" title="Node.js">
              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="none"
                stroke="#16a34a"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>

            <div className="status-pill">
              <span className="status-pill-dot" aria-hidden="true"></span>
              <span className="status-pill-text">
                Open to
                <br />
                Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;