import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DeviceShowcase from './DeviceShowcase';
import './GithubProjects.css';

function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Modal state
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [readmeLoading, setReadmeLoading] = useState(false);
  const [readmeError, setReadmeError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/muthukumaranarc/repos?sort=updated&per_page=100')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch repositories');
        return res.json();
      })
      .then(data => {
        const filtered = data.filter(repo => 
          !repo.fork && 
          repo.visibility === 'public' &&
          repo.size > 0
        );
        setRepos(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = (repo) => {
    setSelectedRepo(repo);
    setReadmeLoading(true);
    setReadmeError(false);
    setReadmeContent('');
    document.body.style.overflow = 'hidden';

    // Fetch README
    const branch = repo.default_branch;
    const readmeUrl = `https://raw.githubusercontent.com/muthukumaranarc/${repo.name}/${branch}/README.md`;
    
    fetch(readmeUrl)
      .then(res => {
        if (!res.ok) throw new Error('README not found');
        return res.text();
      })
      .then(text => {
        setReadmeContent(text);
        setReadmeLoading(false);
      })
      .catch(err => {
        console.error(err);
        setReadmeError(true);
        setReadmeLoading(false);
      });
  };

  const closeModal = () => {
    setSelectedRepo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gh-projects-section" id="projects">
      <div className="gh-projects-container">
        <div className="work-header reveal">
          <div>
            <h2 className="work-title">Featured Work</h2>
            <p className="work-subtitle">Dynamic portfolio synced with my latest public GitHub repositories.</p>
          </div>
          <button 
            className="work-archive-link"
            onClick={() => window.open('https://github.com/muthukumaranarc', '_blank')}
          >
            View Github Archive
          </button>
        </div>

        <DeviceShowcase />

        {loading ? (
          <div className="gh-loading-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="gh-skeleton-card">
                <div className="gh-skeleton-img"></div>
                <div className="gh-skeleton-content">
                  <div className="gh-skeleton-line title"></div>
                  <div className="gh-skeleton-line"></div>
                  <div className="gh-skeleton-line short"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="gh-error">
            <span className="material-symbols-outlined">error</span>
            <p>Error loading projects: {error}</p>
          </div>
        ) : (
          <div className="gh-projects-grid">
            {repos.map((repo, i) => (
              <div 
                key={repo.id} 
                className={`gh-card reveal`} 
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => openModal(repo)}
              >
                <div className="gh-card-img-wrap">
                  <img 
                    src={`https://raw.githubusercontent.com/muthukumaranarc/${repo.name}/${repo.default_branch}/project-image.png`} 
                    alt={repo.name} 
                    className="gh-card-img"
                    onError={(e) => {
                      if (e.target.src.endsWith('.png')) {
                        e.target.src = `https://raw.githubusercontent.com/muthukumaranarc/${repo.name}/${repo.default_branch}/project-image.PNG`;
                      } else {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';
                      }
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="gh-card-content">
                  <h3 className="gh-card-title">{repo.name.replace(/-/g, ' ')}</h3>
                  <p className="gh-card-desc">{repo.description || 'No description provided.'}</p>
                  
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="gh-card-topics">
                      {repo.topics.slice(0, 3).map(topic => (
                        <span key={topic} className="gh-topic-tag">{topic}</span>
                      ))}
                      {repo.topics.length > 3 && <span className="gh-topic-tag">+{repo.topics.length - 3}</span>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {selectedRepo && (
        <div className="gh-modal-overlay" onClick={closeModal}>
          <div className="gh-modal-content glass-card" onClick={e => e.stopPropagation()}>
            <button className="gh-modal-close" onClick={closeModal}>
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="gh-modal-header">
              <img 
                src={`https://raw.githubusercontent.com/muthukumaranarc/${selectedRepo.name}/${selectedRepo.default_branch}/project-image.png`} 
                alt={selectedRepo.name}
                className="gh-modal-img"
                onError={(e) => {
                  if (e.target.src.endsWith('.png')) {
                    e.target.src = `https://raw.githubusercontent.com/muthukumaranarc/${selectedRepo.name}/${selectedRepo.default_branch}/project-image.PNG`;
                  } else {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';
                  }
                }}
              />
              <div className="gh-modal-title-area">
                <h2 className="gh-modal-title">{selectedRepo.name.replace(/-/g, ' ')}</h2>
                <p className="gh-modal-desc">{selectedRepo.description}</p>
                <div className="gh-modal-actions">
                  {selectedRepo.homepage && selectedRepo.homepage !== "" && (
                    <a href={selectedRepo.homepage} target="_blank" rel="noopener noreferrer" className="gh-btn-primary">
                      <span className="material-symbols-outlined">launch</span>
                      View Live Site
                    </a>
                  )}
                  <a href={selectedRepo.html_url} target="_blank" rel="noopener noreferrer" className="gh-btn-secondary">
                    <span className="material-symbols-outlined">code</span>
                    View Code
                  </a>
                </div>
              </div>
            </div>
            
            <div className="gh-modal-body">
              <h3 className="gh-readme-title">README.md</h3>
              <div className="gh-readme-content">
                {readmeLoading ? (
                  <div className="gh-readme-loader">Loading README...</div>
                ) : readmeError ? (
                  <div className="gh-readme-error">No README.md found for this repository.</div>
                ) : (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {readmeContent}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GithubProjects;
