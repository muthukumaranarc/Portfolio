import { PROJECT_LEARNINGS } from '../data/projects/learnings';
import { getProjectImage, FALLBACK_IMAGE } from '../data/projects/projectData';
import './ProjectLearnings.css';

const getProjectTitle = (project) =>
  project.title || project.name.replace(/-/g, ' ');

function LearningsSection({ icon, title, items, accent }) {
  if (!items || items.length === 0) return null;
  return (
    <section className={`pl-section${accent ? ` pl-section-${accent}` : ''}`}>
      <h3 className="pl-section-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <ul className="pl-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function ProjectLearnings({ project, onBack }) {
  const data = PROJECT_LEARNINGS[project.name] || {};
  const struggles = data.struggles || [];
  const learnings = data.learnings || [];
  const other = data.other || [];
  const hasContent =
    struggles.length > 0 || learnings.length > 0 || other.length > 0;

  return (
    <main className="pl-page">
      <button className="pl-back" onClick={onBack} aria-label="Back to projects">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Projects
      </button>

      <div className="pl-header">
        <img
          src={getProjectImage(project)}
          alt={getProjectTitle(project)}
          className="pl-header-img"
          onError={(e) => {
            if (e.target.src !== FALLBACK_IMAGE) {
              e.target.onerror = null;
              e.target.src = FALLBACK_IMAGE;
            }
          }}
          decoding="async"
        />
        <div className="pl-header-text">
          <p className="pl-kicker">What I learned</p>
          <h1 className="pl-title">{getProjectTitle(project)}</h1>
          <p className="pl-desc">{project.description}</p>
        </div>
      </div>

      {hasContent ? (
        <div className="pl-body">
          <LearningsSection
            icon="bolt"
            title="Struggles & Challenges"
            items={struggles}
            accent="struggles"
          />
          <LearningsSection
            icon="school"
            title="What I Learned"
            items={learnings}
            accent="learnings"
          />
          <LearningsSection
            icon="star"
            title="Beyond the Code"
            items={other}
            accent="other"
          />
        </div>
      ) : (
        <div className="pl-empty">
          <span className="material-symbols-outlined">edit_note</span>
          <p>No learnings documented for this project yet.</p>
          <p className="pl-empty-hint">
            Add entries for <code>{project.name}</code> in{' '}
            <code>src/data/projects/learnings.js</code>.
          </p>
        </div>
      )}
    </main>
  );
}

export default ProjectLearnings;