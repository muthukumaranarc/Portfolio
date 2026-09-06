import './About.css';

const highlights = [
  {
    icon: 'code',
    title: 'Full-Stack Engineering',
    badge: 'Core Focus',
    description:
      'Designing performant frontends in React paired with robust, scalable Spring Boot backends, clean RESTful architectures, and efficient database designs.',
    tags: ['React', 'Spring Boot', 'MongoDB', 'REST APIs', 'Java']
  },
  {
    icon: 'emoji_events',
    title: 'Hackathon Driven',
    badge: '4+ Events',
    description:
      'Thriving in high-tempo hackathons like Smart India Hackathon and GDG Hackathon — rapidly translating complex problem statements into functional MVPs.',
    tags: ['SIH 2026', 'GDG × KSRCE', 'SNS 8-Hr', 'MSME 6.0']
  },
  {
    icon: 'smart_toy',
    title: 'AI & Machine Learning',
    badge: 'Applied AI',
    description:
      'Exploring modern AI pipelines, multimodal troubleshooting, and training intelligent agents through the IBM SkillsBuild Applied AI internship.',
    tags: ['IBM watsonx', 'Agentic AI', 'ML Models', 'GenAI']
  },
  {
    icon: 'lightbulb',
    title: 'Philosophy: Build & Learn',
    badge: 'Mindset',
    description:
      'Belief in deep experiential learning. Every challenge, refactor, and competition is an opportunity to write cleaner, more impactful software.',
    tags: ['Problem Solving', 'Clean Code', 'Agile', 'Teamwork']
  }
];

const stats = [
  {
    icon: 'emoji_events',
    value: '4+',
    label: 'Hackathons & Challenges',
    caption: 'SIH, GDG, SNS, MSME'
  },
  {
    icon: 'terminal',
    value: '6+',
    label: 'Production-Ready Builds',
    caption: 'Full-Stack Web Apps'
  },
  {
    icon: 'verified',
    value: '3+',
    label: 'IBM Certifications',
    caption: 'AI, GenAI & Agents'
  },
  {
    icon: 'work_history',
    value: '1',
    label: 'AI / ML Internship',
    caption: 'IBM SkillsBuild'
  }
];

function About() {
  return (
    <section className="about-section" id="about">
      {/* Decorative ambient background glows */}
      <div className="about-ambient-glow glow-1" aria-hidden="true"></div>
      <div className="about-ambient-glow glow-2" aria-hidden="true"></div>

      <div className="about-handwritten" aria-hidden="true">
        <span>Build</span>
        <span>Learn</span>
        <span>Grow</span>
      </div>

      <div className="about-container">
        {/* Left Column: Interactive Bento Grid Cards */}
        <div className="about-cards-column">
          <div className="about-bento-grid">
            {highlights.map((item, index) => (
              <article
                className={`about-bento-card ${index === 0 ? 'card-featured' : ''}`}
                key={item.title}
              >
                <div className="about-card-top">
                  <div className="about-icon-pill">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="about-card-badge">{item.badge}</span>
                </div>

                <div className="about-card-content">
                  <h3 className="about-card-heading">{item.title}</h3>
                  <p className="about-card-desc">{item.description}</p>
                </div>

                <div className="about-card-tags">
                  {item.tags.map((tag) => (
                    <span className="about-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Bio Narrative & Stats */}
        <div className="about-info-column">
          <div className="about-eyebrow">
            <span className="about-eyebrow-dot" aria-hidden="true"></span>
            <span className="about-eyebrow-text">About Me</span>
          </div>

          <h2 className="about-main-title">
            Building ideas into
            <span className="about-title-highlight"> scalable realities.</span>
          </h2>

          <div className="about-bio">
            <p className="about-bio-lead">
              I&apos;m a Computer Science undergraduate and Full-Stack Developer passionate about
              architecting clean, reliable web applications that bridge intuitive design with
              robust engineering.
            </p>
            <p className="about-bio-body">
              My engineering stack centers around <strong>React</strong> on the frontend and{' '}
              <strong>Spring Boot</strong> on the backend. Whether I&apos;m crafting responsive
              user interfaces, building secure RESTful APIs, or wiring MongoDB databases, I focus
              on creating software that is maintainable, performant, and purposeful.
            </p>
            <p className="about-bio-body">
              I thrive in high-tempo environments like <strong>hackathons and technical sprints</strong>,
              where turning abstract problem statements into functional MVPs demands rapid thinking
              and collaborative problem solving. Currently expanding into <strong>Machine Learning and Applied AI</strong>{' '}
              through IBM SkillsBuild, I am always seeking the next challenge to build, learn, and grow.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="about-stats-grid">
            {stats.map((stat) => (
              <div className="about-stat-card" key={stat.label}>
                <div className="about-stat-icon-wrap">
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-number">{stat.value}</div>
                  <div className="about-stat-title">{stat.label}</div>
                  <div className="about-stat-caption">{stat.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-dots-pattern" aria-hidden="true"></div>
    </section>
  );
}

export default About;