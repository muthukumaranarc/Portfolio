import { section, hackathons } from '../data/hackathons';
import './Hackathons.css';

// Optional poster images — drop a file at
// src/data/hackathons/images/<name>.webp and set `image` on a hackathon to its
// file name (without extension). Otherwise a generated poster is shown.
const posterModules = import.meta.glob('../data/hackathons/images/*', {
  eager: true,
  import: 'default',
});

const posterByKey = Object.fromEntries(
  Object.entries(posterModules).map(([path, src]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    src,
  ])
);

const LINK_BUTTONS = [
  { key: 'live', label: 'View Project' },
  { key: 'github', label: 'GitHub' },
  { key: 'certificate', label: 'Certificate' },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Hackathons() {
  return (
    <div className="hackathons-section" id="hackathons">
      <div className="hackathons-container">
        <div className="hackathons-header">
          <h2 className="hackathons-title">{section.title}</h2>
          <p className="hackathons-subtitle">{section.subtitle}</p>
        </div>

        <div className="hackathons-list">
          {hackathons.map((item) => (
            <article className="hackathon-card" key={item.name}>
              <div className="hackathon-poster" aria-hidden="true">
                {posterByKey[item.image] ? (
                  <img
                    className="hackathon-poster-img"
                    src={posterByKey[item.image]}
                    alt={`${item.name} poster`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <>
                    <div className="hackathon-poster-bulb-wrap">
                      <span className="material-symbols-outlined hackathon-poster-bulb">
                        lightbulb
                      </span>
                    </div>
                    <div className="hackathon-poster-text">
                      {item.posterLines.map((line) => (
                        <span className="hackathon-poster-line" key={line}>
                          {line}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="hackathon-content">
                <div className="hackathon-head">
                  <div className="hackathon-title-area">
                    <h3 className="hackathon-name">{item.name}</h3>
                    {item.badge && (
                      <span className="hackathon-badge">{item.badge}</span>
                    )}
                  </div>
                  <div className="hackathon-meta">
                    <span className="hackathon-date">{item.date}</span>
                    <span className="hackathon-team">
                      Team Size: {item.teamSize}
                    </span>
                  </div>
                </div>

                <p className="hackathon-desc">{item.description}</p>

                <div className="hackathon-facts">
                  <div className="hackathon-fact">
                    <h4 className="hackathon-fact-heading">My Role</h4>
                    <p className="hackathon-fact-value">{item.role}</p>
                  </div>

                  <div className="hackathon-fact">
                    <h4 className="hackathon-fact-heading">Technologies</h4>
                    <div className="hackathon-tech">
                      {item.tech.map((tech) => (
                        <span className="hackathon-tech-tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hackathon-links">
                  {LINK_BUTTONS.filter(({ key }) => item.links[key]).map(
                    ({ key, label }) => (
                      <a
                        key={key}
                        href={item.links[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hackathon-link"
                      >
                        {label}
                        <ArrowIcon />
                      </a>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hackathons;
