import './Skills.css';

import htmlIcon from '../assets/HTML.webp';
import cssIcon from '../assets/CSS.webp';
import jsIcon from '../assets/JavaScript.webp';
import reactIcon from '../assets/ReactJS.webp';
import javaIcon from '../assets/Java.webp';
import nodeIcon from '../assets/NodeJS.webp';
import springIcon from '../assets/Spring.webp';
import mongoIcon from '../assets/mongoDB.webp';
import mysqlIcon from '../assets/MySQL.webp';
import figmaIcon from '../assets/Figma.webp';
import mavenIcon from '../assets/Maven.webp';
import gitIcon from '../assets/Git.webp';
import githubIcon from '../assets/GitHub.webp';

const topSkills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Spring Boot', icon: springIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'MySQL', icon: mysqlIcon }
];

const bottomSkills = [
  { name: 'Figma', icon: figmaIcon },
  { name: 'Maven', icon: mavenIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        <div className="skills-grid">
          <div className="skills-row">
            {topSkills.map((skill) => (
              <div className="skills-card" key={skill.name}>
                <img src={skill.icon} alt={`${skill.name} icon`} className="skills-card-icon" loading="lazy" decoding="async" />
                <span className="skills-card-label">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="skills-row skills-row-bottom">
            {bottomSkills.map((skill) => (
              <div className="skills-card" key={skill.name}>
                <img src={skill.icon} alt={`${skill.name} icon`} className="skills-card-icon" loading="lazy" decoding="async" />
                <span className="skills-card-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;