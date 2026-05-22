import './Accolades.css';

function Accolades() {
  const accolades = [
    {
      icon: 'school',
      title: 'Symposiums',
      desc: 'Active participant and technical presenter at regional college symposiums.',
      color: 'text-tertiary'
    },
    {
      icon: 'groups',
      title: 'Leadership',
      desc: 'Student coordinator for department tech events and hackathons.',
      color: 'text-primary'
    },
    {
      icon: 'verified',
      title: 'Certifications',
      desc: 'Java Professional & AWS Cloud Practitioner learner.',
      color: 'text-indigo-400'
    },
    {
      icon: 'code_blocks',
      title: 'Hackathons',
      desc: 'Top 10 finalist in 48-hour rapid prototyping challenges.',
      color: 'text-amber-400'
    }
  ];

  return (
    <section className="accolades-section">
      <div className="accolades-container">
        <div className="accolades-grid">
          {accolades.map((item, i) => (
            <div key={i} className="accolade-card glass-card reveal">
              <span className={`material-symbols-outlined accolade-icon ${item.color}`}>
                {item.icon}
              </span>
              <h4 className="accolade-title">{item.title}</h4>
              <p className="accolade-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accolades;
