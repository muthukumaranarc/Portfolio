import { section, certifications } from '../data/certifications';
import './Certifications.css';

// Official logos can be dropped in src/data/certifications/images/<name>.webp and
// are auto-detected via `logo: "<name>"` on a certification entry.
const logoModules = import.meta.glob('../data/certifications/images/*', {
  eager: true,
  import: 'default',
});

const logoByKey = Object.fromEntries(
  Object.entries(logoModules).map(([path, src]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    src,
  ])
);

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

function Certifications() {
  return (
    <div className="certifications-section" id="certifications">
      <div className="certifications-container">
        <div className="certifications-header">
          <h2 className="certifications-title">{section.title}</h2>
          <p className="certifications-subtitle">{section.subtitle}</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((item) => (
            <article className="certification-card" key={item.title}>
              <div className="certification-logo-wrap">
                {logoByKey[item.logo] ? (
                  <img
                    className="certification-logo-img"
                    src={logoByKey[item.logo]}
                    alt={`${item.title} logo`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="certification-logo"
                    style={{ backgroundColor: item.brand.color }}
                    aria-hidden="true"
                  >
                    {item.brand.text}
                  </div>
                )}
              </div>

              <h3 className="certification-title">{item.title}</h3>
              <p className="certification-issuer">{item.issuer}</p>
              <p className="certification-date">Issued: {item.date}</p>

              {item.credential && (
                <a
                  href={item.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  View Credential
                  <ArrowIcon />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
