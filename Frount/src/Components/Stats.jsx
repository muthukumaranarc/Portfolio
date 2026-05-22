import './Stats.css';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CountUp from './CountUp';
import HTML from '../assets/HTML.png';
import JavaScript from '../assets/JavaScript.png';
import CSS from '../assets/CSS.png';
import ReactJS from '../assets/ReactJS.png';
import Java from '../assets/Java.png';
import NodeJS from '../assets/NodeJS.png';
import SpringBoot from '../assets/Spring.png';
import MongoDB from '../assets/MongoDB.png';
import MySQL from '../assets/MySQL.png';
import Figma from '../assets/Figma.png';
import Maven from '../assets/Maven.png';
import Git from '../assets/Git.png';
import GitHub from '../assets/GitHub.png';

function Stats() {
  const [leetStats, setLeetStats] = useState(null);

  useEffect(() => {
    fetch("https://muthu-portfolio-gfq8.onrender.com/leetcode")
      .then((res) => res.json())
      .then((data) => setLeetStats(data))
      .catch(() => {});
  }, []);

  const statCards = [
    { value: 15, suffix: '+', label: 'Projects Built', color: 'var(--on-surface)' },
    { value: 12, suffix: '+', label: 'Technologies', color: 'var(--primary)' },
    { value: leetStats ? leetStats.totalSolved : 500, suffix: '+', label: 'LeetCode Solved', color: 'var(--tertiary)' },
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

        {/* LeetCode Stats */}
        {leetStats && (
          <div className="leetcode-section reveal">
            <div className="leetcode-card">
              <div className="leetcode-progress">
                <CircularProgressbar
                  value={leetStats.totalSolved}
                  maxValue={leetStats.totalQuestions}
                  text={`${leetStats.totalSolved}`}
                  styles={buildStyles({
                    textColor: 'white',
                    pathColor: 'var(--primary)',
                    trailColor: 'rgba(255,255,255,0.1)',
                    textSize: '1.5rem',
                  })}
                />
              </div>
              <div className="leetcode-breakdown">
                <div className="lc-item easy">
                  <span className="lc-label">Easy</span>
                  <span className="lc-count">{leetStats.easySolved}<span className="lc-total">/{leetStats.totalEasy}</span></span>
                </div>
                <div className="lc-item medium">
                  <span className="lc-label">Medium</span>
                  <span className="lc-count">{leetStats.mediumSolved}<span className="lc-total">/{leetStats.totalMedium}</span></span>
                </div>
                <div className="lc-item hard">
                  <span className="lc-label">Hard</span>
                  <span className="lc-count">{leetStats.hardSolved}<span className="lc-total">/{leetStats.totalHard}</span></span>
                </div>
              </div>
            </div>
            <div className="leetcode-info">
              <p>Solved <strong>{leetStats.totalSolved}</strong> problems on LeetCode using Java and JavaScript to strengthen DSA and core concepts.</p>
              <a
                href="https://leetcode.com/u/Jq4H1BglTL/"
                target="_blank"
                rel="noreferrer"
                className="leetcode-link magnetic-btn"
              >
                Check Profile
                <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>arrow_outward</span>
              </a>
            </div>
          </div>
        )}

        {/* Skills Grid */}
        <div className="skills-grid reveal">
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
