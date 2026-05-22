import './About.css';
import aboutImage from '../assets/AboutPortrait.png';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-visual reveal">
          <img className="about-image" src={aboutImage} alt="Muthukumaran" />
        </div>

        <div className="about-content reveal">
          <p className="about-kicker">About</p>
          <h2>Beyond the Code</h2>
          <div className="about-copy">
            <p>
              I'm Muthukumaran, a passionate Full-Stack Developer focused on building impactful digital experiences with Spring Boot, React, and modern technologies.
            </p>
            <p>
              My journey started with curiosity and grew into a mission to create solutions that solve real-world problems. From designing intuitive interfaces to building scalable backend systems, I enjoy turning ideas into functional products.
            </p>
            <p>
              Beyond development, I'm deeply interested in AI, product building, freelancing, and continuous self-growth. I believe technology is not just about writing code - it's about creating meaningful experiences that make life better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
