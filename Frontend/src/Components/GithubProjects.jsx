import { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DeviceShowcase from './DeviceShowcase';
import {
  section,
  projectNames,
  projectCategories,
  PROJECT_METADATA_OVERRIDES,
  GITHUB_USERNAME,
  FALLBACK_IMAGE,
  getProjectImage,
  classifyRepo,
} from '../data/projects/projectData';
import './GithubProjects.css';

// Bundled README copies act as an offline fallback if the live GitHub fetch
// for a README ever fails (rate limits, no connection, ...).
const readmeFiles = import.meta.glob('../data/projects/readmes/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const getProjectTitle = (project) =>
  project.title || project.name.replace(/-/g, ' ');

const getLocalReadme = (repoName) => {
  const key = Object.keys(readmeFiles).find(path => path.includes(`/${repoName}.md`));
  return key ? readmeFiles[key] : null;
};

// Pretty-print GitHub topic slugs ("spring-boot-3" -> "Spring Boot 3").
const ACRONYMS = new Set(['ai', 'api', 'css', 'html', 'js', 'jwt', 'sql', 'ui', 'ux', 'oauth']);
const SPECIAL_TECH = {
  reactjs: 'React', reactapi: 'React API', vuejs: 'Vue', nodejs: 'Node.js',
  nextjs: 'Next.js', javascript: 'JavaScript', typescript: 'TypeScript',
  mongodb: 'MongoDB', postgresql: 'PostgreSQL', mysql: 'MySQL', springboot: 'Spring Boot',
};

const prettyTopic = (topic) =>
  topic
    .split(/[-_]+/)
    .map((word) => {
      const lower = word.toLowerCase();
      if (SPECIAL_TECH[lower]) return SPECIAL_TECH[lower];
      if (ACRONYMS.has(lower)) return lower.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

function GithubProjects({ onOpenLearnings }) {
  // Fetch + filter state
  const [loadState, setLoadState] = useState('loading'); // loading | ready | error
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  // Drawer state
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [readmeState, setReadmeState] = useState({
    status: 'idle', // idle | loading | ready | error
    content: '',
  });

  const categoryFilters = ['All', ...projectCategories];

  // Fetch the latest repo data from GitHub and keep only the listed names.
  const loadProjects = useCallback(async () => {
    setLoadState('loading');
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&type=owner`
      );
      if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
      const repos = await res.json();

      const repoByName = new Map(repos.map((repo) => [repo.name, repo]));
      const fetched = projectNames
        .map((name) => {
          const repo = repoByName.get(name);
          const override = PROJECT_METADATA_OVERRIDES[name] || {};
          if (!repo && !override.title) return null;

          const desc = (repo && repo.description) || override.description || '';
          const home = (repo && repo.homepage) || override.homepage || '';
          const ghUrl = override.github || (repo && repo.html_url) || `https://github.com/${GITHUB_USERNAME}/${name}`;
          const topics =
            repo && repo.topics && repo.topics.length > 0 ? repo.topics : override.topics || [];
          const cats = override.categories || (repo ? classifyRepo(repo) : ['Others']);

          return {
            name: (repo && repo.name) || name,
            title: override.title || ((repo && repo.name) || name).replace(/-/g, ' '),
            description: desc,
            homepage: home,
            github: ghUrl,
            topics,
            categories: cats,
          };
        })
        .filter(Boolean);

      setProjects(fetched);
      setLoadState('ready');
    } catch (err) {
      console.warn('Failed to fetch GitHub projects live, using fallback metadata:', err);
      const fallbackList = projectNames.map((name) => {
        const override = PROJECT_METADATA_OVERRIDES[name] || {};
        return {
          name,
          title: override.title || name.replace(/-/g, ' '),
          description: override.description || '',
          homepage: override.homepage || '',
          github: override.github || `https://github.com/${GITHUB_USERNAME}/${name}`,
          topics: override.topics || [],
          categories: override.categories || ['Web Projects'],
        };
      });
      setProjects(fallbackList);
      setLoadState('ready');
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  // Fetch a repo's README live from GitHub (fall back to the bundled copy).
  const loadReadme = useCallback(async (repoName) => {
    setReadmeState({ status: 'loading', content: '' });
    try {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${encodeURIComponent(repoName)}/readme`,
        { headers: { Accept: 'application/vnd.github.raw+json' } }
      );
      if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
      const text = await res.text();
      setReadmeState({ status: 'ready', content: text });
    } catch (err) {
      const local = getLocalReadme(repoName);
      if (local) {
        setReadmeState({ status: 'ready', content: local });
      } else {
        console.error('Failed to fetch README:', err);
        setReadmeState({ status: 'error', content: '' });
      }
    }
  }, []);

  const openDrawer = (repo) => {
    setSelectedRepo(repo);
    document.body.style.overflow = 'hidden';
    loadReadme(repo.name);
  };

  const closeDrawer = () => {
    setSelectedRepo(null);
    setReadmeState({ status: 'idle', content: '' });
    document.body.style.overflow = 'auto';
  };

  // Close the drawer with the Escape key.
  useEffect(() => {
    if (!selectedRepo) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeDrawer();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedRepo]);

  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => (project.categories || []).includes(activeCategory));

  return (
    <section className="gh-projects-section" id="projects">
      <div className="gh-projects-container">
        <div className="work-header reveal">
          <div>
            <h2 className="work-title">{section.title}</h2>
            <p className="work-subtitle">{section.subtitle}</p>
          </div>
          <button
            className="work-archive-link"
            onClick={() => window.open(section.archiveUrl, '_blank')}
          >
            {section.archiveLabel}
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
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
          </button>
        </div>

        <DeviceShowcase />

        {loadState === 'loading' && (
          <div className="gh-projects-grid" aria-live="polite">
            {Array.from({ length: 3 }, (_, i) => (
              <div className="gh-card gh-skeleton-card" key={i}>
                <div className="gh-skeleton-img" />
                <div className="gh-skeleton-body">
                  <div className="gh-skeleton-line title" />
                  <div className="gh-skeleton-line" />
                  <div className="gh-skeleton-line short" />
                </div>
              </div>
            ))}
            <p className="gh-fetch-note">Fetching latest projects from GitHub…</p>
          </div>
        )}

        {loadState === 'error' && (
          <div className="gh-fetch-state" role="alert">
            <span className="material-symbols-outlined">cloud_off</span>
            <p>Couldn&apos;t fetch projects from GitHub right now.</p>
            <button className="gh-retry-btn" onClick={loadProjects}>
              Try again
            </button>
          </div>
        )}

        {loadState === 'ready' && projects.length === 0 && (
          <div className="gh-empty-state">
            No repos matched the names in <code>src/data/projects/projectData.js</code> — make
            sure <code>projectNames</code> lists exact GitHub repository names.
          </div>
        )}

        {loadState === 'ready' && projects.length > 0 && (
          <>
            <div className="gh-filter-bar" role="group" aria-label="Filter projects by category">
              {categoryFilters.map((category) => (
                <button
                  key={category}
                  className={`gh-filter-chip${activeCategory === category ? ' active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="gh-projects-grid" id="gh-projects-grid">
              {visibleProjects.length === 0 && (
                <div className="gh-empty-state">
                  No projects in “{activeCategory}” yet — add a matching repo to{' '}
                  <code>src/data/projects/projectData.js</code>.
                </div>
              )}
              {visibleProjects.map((project, i) => (
                <div
                  key={project.name}
                  className="gh-card reveal"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onClick={() => openDrawer(project)}
                >
                  <div className="gh-card-img-wrap">
                    <img
                      src={getProjectImage(project)}
                      alt={getProjectTitle(project)}
                      className="gh-card-img"
                      onError={(e) => {
                        if (e.target.src !== FALLBACK_IMAGE) {
                          e.target.onerror = null;
                          e.target.src = FALLBACK_IMAGE;
                        }
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="gh-card-content">
                    <h3 className="gh-card-title">{getProjectTitle(project)}</h3>
                    <p className="gh-card-desc">{project.description || 'No description provided.'}</p>

                    {project.topics.length > 0 && (
                      <div className="gh-card-topics">
                        {project.topics.slice(0, 3).map((topic) => (
                          <span key={topic} className="gh-topic-tag">{prettyTopic(topic)}</span>
                        ))}
                        {project.topics.length > 3 && (
                          <span className="gh-topic-tag">+{project.topics.length - 3}</span>
                        )}
                      </div>
                    )}

                    <div className="gh-card-links">
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gh-card-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
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
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gh-card-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
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
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Slide-in details drawer (right side of the screen) */}
      {selectedRepo && (
        <div className="gh-drawer-overlay" onClick={closeDrawer}>
          <aside
            className="gh-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={`${getProjectTitle(selectedRepo)} details`}
            onClick={e => e.stopPropagation()}
          >
            <button className="gh-drawer-close" onClick={closeDrawer} aria-label="Close project details">
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="gh-drawer-image">
              <img
                src={getProjectImage(selectedRepo)}
                alt={getProjectTitle(selectedRepo)}
                onError={(e) => {
                  if (e.target.src !== FALLBACK_IMAGE) {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMAGE;
                  }
                }}
                decoding="async"
              />
            </div>

            <div className="gh-drawer-content">
              <h2 className="gh-drawer-title">{getProjectTitle(selectedRepo)}</h2>
              <p className="gh-drawer-desc">{selectedRepo.description}</p>

              <div className="gh-drawer-actions">
                <button
                  className="gh-drawer-btn gh-drawer-btn-learnings"
                  onClick={() => {
                    closeDrawer();
                    onOpenLearnings(selectedRepo);
                  }}
                >
                  <span className="material-symbols-outlined">school</span>
                  What I Learned
                </button>
                {selectedRepo.homepage && (
                  <a
                    href={selectedRepo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-drawer-btn gh-drawer-btn-primary"
                  >
                    <span className="material-symbols-outlined">launch</span>
                    Live Demo
                  </a>
                )}
                <a
                  href={selectedRepo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-drawer-btn gh-drawer-btn-secondary"
                >
                  <span className="material-symbols-outlined">code</span>
                  GitHub
                </a>
              </div>

              <h3 className="gh-drawer-readme-title">README.md</h3>
              <div className="gh-drawer-readme">
                {readmeState.status === 'loading' && (
                  <div className="gh-readme-status">
                    <span className="gh-readme-spinner" aria-hidden="true" />
                    Fetching README from GitHub…
                  </div>
                )}
                {readmeState.status === 'error' && (
                  <div className="gh-drawer-error">
                    No README.md found for this repository.
                  </div>
                )}
                {readmeState.status === 'ready' && (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {readmeState.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

export default GithubProjects;
