import './TechStack.css';

function TechStack() {
  const stack = [
    { icon: 'javascript', name: 'Java', color: 'hover:text-amber-500' },
    { icon: 'bolt', name: 'Spring Boot', color: 'hover:text-tertiary' },
    { icon: 'deployed_code', name: 'React', color: 'hover:text-primary' },
    { icon: 'api', name: 'REST API', color: 'hover:text-indigo-400' },
    { icon: 'dock', name: 'Docker', color: 'hover:text-blue-400' },
    { icon: 'hub', name: 'Git', color: 'hover:text-tertiary' },
  ];

  return (
    <section className="tech-section" id="stack">
      <div className="tech-container">
        <h2 className="tech-title reveal">Engineered with <span className="tech-accent">Precision</span></h2>
        <div className="tech-grid reveal">
          {stack.map((item, i) => (
            <div 
              key={i} 
              className={`tech-card group tech-glow ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            >
              <span className={`material-symbols-outlined tech-icon group-hover:text-${item.color.split('-')[2]}`}>
                {item.icon}
              </span>
              <span className="tech-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
