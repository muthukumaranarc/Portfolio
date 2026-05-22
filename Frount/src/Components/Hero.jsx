import './Hero.css';
import TextType from './TextType';
import muthu from '../assets/MuthuHero.png';

function Hero() {


  return (
    <section className="hero-section hero-gradient" id="hero">
      <div className="hero-grid-overlay"></div>
      <div className="hero-content">
        {/* Left Side */}
        <div className="hero-left reveal active">
          <div className="hero-status-badge">
            <span className="status-dot-wrapper">
              <span className="status-dot-ping"></span>
              <span className="status-dot"></span>
            </span>
            Open for opportunities
          </div>

          <h1 className="hero-title">
            Muthu<br />
            <span className="hero-title-accent text-glow">kumaran</span>
          </h1>

          <div className="hero-subtitle">
            <TextType
              text={[
                "Full Stack Web Developer",
                "Frontend Web Developer",
                "Backend Web Developer",
                "Figma Designer",
                "React Developer",
                "Spring Boot Developer"
              ]}
              typingSpeed={75}
              pauseDuration={2500}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>

          <p className="hero-description">
            I'm a computer science student with 9.8 CGPA. I have solid knowledge of DSA. 
            I actively engage in tech competitions and focus on building innovative solutions 
            that solve real-world problems effectively.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn-primary magnetic-btn">
              View Projects
            </a>
            <a href="#contact" className="hero-btn-secondary magnetic-btn">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image + Code Block */}
        <div className="hero-right">
          <div className="hero-profile-wrapper animate-float">
            <img src={muthu} alt="Muthukumaran M" className="hero-profile-img" />
          </div>
          {/* <div className="hero-code-card animate-float">
            <div className="glass-card hero-code-inner">
              <div className="code-block">
                <div className="code-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <p className="code-line"><span className="c-keyword">class</span> <span className="c-class">Developer</span> {'{'}</p>
                <p className="code-line indent1"><span className="c-comment">constructor</span>() {'{'}</p>
                <p className="code-line indent2">this.<span className="c-prop">name</span> = <span className="c-string">"Muthukumaran"</span>;</p>
                <p className="code-line indent2">this.<span className="c-prop">role</span> = <span className="c-string">"Full Stack Architect"</span>;</p>
                <p className="code-line indent2">this.<span className="c-prop">tech</span> = [<span className="c-string">"Spring"</span>, <span className="c-string">"React"</span>, <span className="c-string">"Docker"</span>];</p>
                <p className="code-line indent1">{'}'}</p>
                <p className="code-line indent1">async <span className="c-class">buildSystems</span>() {'{'}</p>
                <p className="code-line indent2"><span className="c-dim">// scalability & efficiency</span></p>
                <p className="code-line indent2">return <span className="c-keyword">await</span> deploy_to_cloud();</p>
                <p className="code-line indent1">{'}'}</p>
                <p className="code-line"><span className="c-keyword">{'}'}</span></p>
              </div>
            </div> */}
            {/* Abstract Glows */}
            {/* <div className="hero-glow-primary animate-pulse-soft"></div>
            <div className="hero-glow-tertiary animate-pulse-soft"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
