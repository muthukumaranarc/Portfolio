import './Navbar.css';

function Navbar({ activeSection }) {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1QpRFOcs7frip40HNPWy85CJSyjbtwW9t/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <nav className="site-nav" id="home">
      <a href="#hero" className="nav-logo">
        <span className="nav-logo-accent">Freelancer</span>
      </a>
      <div className="nav-links">
        <a href="#stack" className={activeSection === 'stack' ? 'active-link' : ''}>Tech Stack</a>
        <a href="#about" className={activeSection === 'about' ? 'active-link' : ''}>About</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active-link' : ''}>Projects</a>
        <a href="#journey" className={activeSection === 'journey' ? 'active-link' : ''}>Journey</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''}>Contact</a>
      </div>
      <button className="nav-resume-btn" onClick={handleResume}>
        Resume
      </button>
    </nav>
  );
}

export default Navbar;
