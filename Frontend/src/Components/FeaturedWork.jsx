import './FeaturedWork.css';
import portfolioImg from '../assets/Projects/Portfolio.PNG';
import tunezImg from '../assets/Projects/Tunez.PNG';

function FeaturedWork() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="work-section" id="projects">
      <div className="work-container">
        <div className="work-header reveal">
          <div>
            <h2 className="work-title">Featured Work</h2>
            <p className="work-subtitle">Selected projects that demonstrate my technical breadth and problem-solving skills.</p>
          </div>
          <button 
            className="work-archive-link"
            onClick={() => openLink('https://github.com/muthukumaranarc')}
          >
            View Github Archive
          </button>
        </div>

        <div className="work-grid">
          {/* Main Featured Project: Tunez */}
          <div className="work-main-card reveal" onClick={() => openLink('https://tunez-online.web.app/')}>
            <div className="work-main-inner glass-card">
              <div className="work-main-img-wrap">
                <img src={tunezImg} alt="Tunez Project" className="work-main-img" />
              </div>
              <div className="work-main-content">
                <div className="work-tags">
                  <span className="work-tag brand-primary">React js</span>
                  <span className="work-tag brand-primary">Spring Boot</span>
                  <span className="work-tag brand-primary">MongoDB</span>
                </div>
                <h3 className="work-card-title">Tunez</h3>
                <p className="work-card-desc">
                  Tunez is a dynamic music streaming platform with smooth playback, secure authentication, 
                  personalized playlists, and intuitive navigation. Designed for scalability and efficiency, 
                  it ensures responsive design, reliable performance, and engaging user experience.
                </p>
                <div className="work-actions">
                  <button className="work-action-primary">
                    <span className="material-symbols-outlined">launch</span>
                  </button>
                  <button className="work-action-secondary" onClick={(e) => { e.stopPropagation(); openLink('https://github.com/muthukumaranarc'); }}>
                    <span className="material-symbols-outlined">terminal</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Featured Project: Portfolio */}
          <div className="work-sub-card reveal work-card-hover-tertiary" onClick={() => openLink('https://muthukumaran-portfolio.web.app/')}>
            <div className="work-sub-img-wrap">
              <img src={portfolioImg} alt="Portfolio Project" className="work-sub-img" />
            </div>
            <div className="work-sub-content">
              <h4 className="work-sub-title">Portfolio v1</h4>
              <p className="work-sub-desc">
                An engaging portfolio reflecting a journey of growth in web development, 
                blending strong fundamentals in Spring Boot and React.
              </p>
              <div className="work-sub-tags">
                <span className="work-sub-tag brand-tertiary">#ReactJS</span>
                <span className="work-sub-tag brand-indigo">#SpringBoot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
