import './SiteFooter.css';

function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-pattern"></div>
      <div className="footer-container">
        <div className="footer-content-wrapper">
          <div className="footer-brand">
            <span className="footer-initials">MK</span>
            <div className="footer-name-group">
              <span className="footer-name">Muthukumaran</span>
              <span className="footer-tagline">Full-Stack Developer & DevOps Enthusiast</span>
            </div>
          </div>

          <button className="footer-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <span className="material-symbols-outlined">arrow_upward</span>
            <span className="footer-top-label">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
