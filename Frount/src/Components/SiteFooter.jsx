import './SiteFooter.css';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo">DigitalArchitect</div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Digital Architect. Built with precision.
        </div>
        <div className="footer-links">
          <a href="https://github.com/muthukumaranarc" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/muthukumaranarc00" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:muthukumaranarc00@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
