import { section, internships } from '../data/internships';
import './Internships.css';

// Icon background colors — each internship card cycles through these.
const ICON_COLORS = ['#2563eb', '#0ea5e9', '#7c3aed', '#059669'];

const logoModules = import.meta.glob('../data/internships/images/*', {
  eager: true,
  import: 'default',
});

const logoByKey = Object.fromEntries(
  Object.entries(logoModules).map(([path, src]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    src,
  ])
);

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

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

function Internships() {
  return (
    <div className="internships-section" id="internships">
      <div className="internships-container">
        <div className="internships-header">
          <h2 className="internships-title">{section.title}</h2>
          <p className="internships-subtitle">{section.subtitle}</p>
        </div>

        <div className="internships-list">
          {internships.map((item, index) => (
            <article className="internship-card" key={item.company}>
              <div className="internship-card-head">
                <div
                  className="internship-icon"
                  style={{ background: item.logo && logoByKey[item.logo] ? 'transparent' : ICON_COLORS[index % ICON_COLORS.length] }}
                  aria-hidden="true"
                >
                  {item.logo && logoByKey[item.logo] ? (
                    <img src={logoByKey[item.logo]} alt={`${item.company} logo`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} />
                  ) : (
                    item.company.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="internship-meta">
                  <h3 className="internship-role">{item.role}</h3>
                  <p className="internship-company">{item.company}</p>
                </div>
                <div className="internship-when">
                  <span className="internship-period">{item.period}</span>
                  <span className="internship-location">{item.location}</span>
                </div>
              </div>

              <div className="internship-card-body">
                {item.description.map((paragraph) => (
                  <p className="internship-desc" key={paragraph}>
                    {paragraph}
                  </p>
                ))}

                <h4 className="internship-contrib-heading">Key Contributions</h4>
                <ul className="internship-contributions">
                  {item.contributions.map((contribution) => (
                    <li key={contribution}>
                      <span className="internship-check">
                        <CheckIcon />
                      </span>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="internship-card-foot">
                <div className="internship-tech">
                  {item.tech.map((tech) => (
                    <span className="internship-tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="internship-cert-btn"
                  >
                    View Certificate
                    <ArrowIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Internships;
