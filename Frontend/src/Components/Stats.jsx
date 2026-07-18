import './Stats.css';
import CountUp from './CountUp';
import HTML from '../assets/HTML.png';
import JavaScript from '../assets/JavaScript.png';
import CSS from '../assets/CSS.png';
import ReactJS from '../assets/ReactJS.png';
import Java from '../assets/Java.png';
import NodeJS from '../assets/NodeJS.png';
import SpringBoot from '../assets/Spring.png';
import MongoDB from '../assets/mongoDB.png';
import MySQL from '../assets/MySQL.png';
import Figma from '../assets/Figma.png';
import Maven from '../assets/Maven.png';
import Git from '../assets/Git.png';
import GitHub from '../assets/GitHub.png';

function Stats() {

  const statCards = [
    { value: 15, suffix: '+', label: 'Projects Built', color: 'var(--on-surface)' },
    { value: 12, suffix: '+', label: 'Technologies', color: 'var(--primary)' },
    { value: 70, suffix: '+', label: 'LeetCode Solved', color: 'var(--tertiary)' },
    { value: 9.8, suffix: '', label: 'Academic CGPA', color: 'var(--on-surface)' },
  ];

  const skills = [
    { name: 'HTML', img: HTML },
    { name: 'CSS', img: CSS },
    { name: 'JavaScript', img: JavaScript },
    { name: 'React', img: ReactJS },
    { name: 'Java', img: Java },
    { name: 'Node.js', img: NodeJS },
    { name: 'Spring Boot', img: SpringBoot },
    { name: 'MongoDB', img: MongoDB },
    { name: 'MySQL', img: MySQL },
    { name: 'Figma', img: Figma },
    { name: 'Maven', img: Maven },
    { name: 'Git', img: Git },
    { name: 'GitHub', img: GitHub },
  ];

  return (
    <section className="stats-section" id="stats">
      <div className="stats-container">
        {/* Stat Cards */}
        <div className="stat-cards-grid reveal">
          {statCards.map((stat, i) => (
            <div className="stat-card" key={i}>
              <h3 className="stat-value" style={{ color: stat.color }}>
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  duration={1.6}
                  delay={i * 0.1}
                  className="count-up-text"
                />
                {stat.suffix}
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>



        {/* Skills Grid */}
        <div className="skills-grid reveal" id="stack">
          <h3 className="skills-title">My <span style={{ color: 'var(--tertiary)' }}>Skills</span></h3>
          <div className="skills-icons-grid">
            {skills.map((skill, i) => (
              <div className="skill-icon-card tech-glow" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={skill.img} alt={skill.name} className="skill-img" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Stats;
