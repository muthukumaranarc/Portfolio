import './Expertise.css';

function Expertise() {
  const expertiseCards = [
    {
      icon: 'layers',
      title: 'Full Stack',
      desc: 'Specializing in Java & Spring Boot microservices for robust backend logic.',
      iconBg: 'rgba(99, 102, 241, 0.1)',
      iconColor: '#818cf8',
    },
    {
      icon: 'brush',
      title: 'Frontend',
      desc: 'Crafting responsive, high-performance interfaces using React and modern CSS.',
      iconBg: 'rgba(192, 193, 255, 0.1)',
      iconColor: 'var(--primary)',
    },
    {
      icon: 'database',
      title: 'Database',
      desc: 'Proficient in MongoDB and MySQL for structured and unstructured data.',
      iconBg: 'rgba(245, 158, 11, 0.1)',
      iconColor: '#fbbf24',
    },
    {
      icon: 'settings_ethernet',
      title: 'DevOps',
      desc: 'Automating workflows with Docker, Jenkins, and Kubernetes orchestration.',
      iconBg: 'rgba(74, 225, 118, 0.1)',
      iconColor: 'var(--tertiary)',
    },
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-grid reveal">
          {expertiseCards.map((card, i) => (
            <div className="glass-card expertise-card" key={i}>
              <div className="expertise-icon" style={{ background: card.iconBg, color: card.iconColor }}>
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <h4 className="expertise-title">{card.title}</h4>
              <p className="expertise-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
