import './Navbar.css';

function Navbar() {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1QpRFOcs7frip40HNPWy85CJSyjbtwW9t/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <nav className="site-nav" id="home">
      <div className="nav-logo">
        <span className="nav-logo-accent">Freelancer</span>
      </div>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#stack">Tech Stack</a>
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="nav-resume-btn" onClick={handleResume}>
        Resume
      </button>
    </nav>
  );
}

export default Navbar;
