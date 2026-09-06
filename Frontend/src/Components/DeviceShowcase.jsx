import './DeviceShowcase.css';

const desktopImages = import.meta.glob('../data/projects/images/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const mobileImages = import.meta.glob('../data/projects/images/Mobile/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default'
});

function normalizeName(path) {
  return path
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') || '';
}

const showcaseProjectNames = ['EduPlus', 'Freelance-Website', 'Portfolio'];

function buildSlides() {
  const desktopEntries = Object.entries(desktopImages);
  const mobileEntries = Object.entries(mobileImages);
  const mobileByName = new Map(mobileEntries.map(([path, src]) => [normalizeName(path), src]));

  const paired = showcaseProjectNames.map((projectName) => {
    const key = normalizeName(projectName);
    const desktop = desktopEntries.find(([path]) => normalizeName(path) === key)?.[1];
    const mobile = mobileByName.get(key);

    return {
      name: projectName,
      desktop,
      mobile
    };
  });

  return paired;
}

function DeviceShowcase() {
  const slides = buildSlides();
  const hasScreens = slides.length > 0;
  const activeSlides = hasScreens
    ? Array.from({ length: 3 }, (_, index) => slides[index % slides.length])
    : [{ name: 'Project Screens', desktop: null, mobile: null }];

  const handleExplore = () => {
    const grid = document.getElementById('gh-projects-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="device-showcase reveal" aria-label="Project screen showcase">
      <div className="device-copy">
        <span className="device-kicker">Project Preview</span>
        <h3>See every project across desktop and Android.</h3>
        <p>
          Add matching screenshots into the desktop and mobile folders. They will appear
          here automatically from your GitHub repository.
        </p>

        <div className="device-actions">
          <button
            className="device-btn-primary"
            onClick={() => window.open('https://github.com/muthukumaranarc', '_blank')}
          >
            View on GitHub
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
          <button className="device-btn-secondary" onClick={handleExplore}>
            Explore Projects
          </button>
        </div>
      </div>

      <div className="device-stage">
        <span className="device-cursive" aria-hidden="true">Ideas into Reality</span>
        <div className="device-dots" aria-hidden="true"></div>

        <div className="device-annotation annotation-desktop">
          <div className="annotation-badge">
            <span className="material-symbols-outlined">laptop_mac</span>
            <span>Desktop View</span>
          </div>
          <svg className="annotation-arrow arrow-desktop" viewBox="0 0 40 56" fill="none" aria-hidden="true">
            <path d="M20 2 C 33 15, 33 33, 20 48" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 48 L 28 36 M20 48 L 12 36" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="laptop-device" aria-hidden={!hasScreens}>
          <div className="laptop-lid">
            <div className="laptop-camera"></div>
            <div className="laptop-screen">
              <div className={`screen-track ${!hasScreens ? 'is-empty' : ''}`}>
                {activeSlides.map((slide, index) => (
                  <div className="screen-slide" key={`${slide.name}-desktop-${index}`}>
                    {slide.desktop ? (
                      <img src={slide.desktop} alt={`${slide.name} desktop screenshot`} loading="lazy" decoding="async" />
                    ) : (
                      <div className="screen-placeholder">
                        <span className="material-symbols-outlined">desktop_windows</span>
                        <strong>Desktop Screenshot</strong>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="laptop-base"></div>
        </div>

        <div className="android-phone" aria-hidden={!hasScreens}>
          <div className="android-speaker"></div>
          <div className="android-screen">
            <div className={`phone-track ${!hasScreens ? 'is-empty' : ''}`}>
              {activeSlides.map((slide, index) => (
                <div className="phone-slide" key={`${slide.name}-mobile-${index}`}>
                  {slide.mobile ? (
                    <img src={slide.mobile} alt={`${slide.name} mobile screenshot`} loading="lazy" decoding="async" />
                  ) : (
                    <div className="screen-placeholder phone-placeholder">
                      <span className="material-symbols-outlined">smartphone</span>
                      <strong>Mobile Screenshot</strong>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="android-nav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="device-annotation annotation-mobile">
          <svg className="annotation-arrow arrow-mobile" viewBox="0 0 56 40" fill="none" aria-hidden="true">
            <path d="M54 20 C 42 32, 24 32, 12 20" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 20 L 24 12 M12 20 L 24 28" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="annotation-badge">
            <span className="material-symbols-outlined">smartphone</span>
            <span>Mobile View</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceShowcase;
