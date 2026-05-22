import './DeviceShowcase.css';

const desktopImages = import.meta.glob('../assets/ProjectScreens/desktop/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const mobileImages = import.meta.glob('../assets/ProjectScreens/mobile/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default'
});

function readableName(path) {
  const file = path.split('/').pop()?.replace(/\.[^.]+$/, '') || 'Project';
  return file
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizeName(path) {
  return path
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') || '';
}

function buildSlides() {
  const desktopEntries = Object.entries(desktopImages);
  const mobileEntries = Object.entries(mobileImages);
  const mobileByName = new Map(mobileEntries.map(([path, src]) => [normalizeName(path), src]));
  const usedMobile = new Set();

  const paired = desktopEntries.map(([path, desktop]) => {
    const key = normalizeName(path);
    const mobile = mobileByName.get(key);
    if (mobile) usedMobile.add(key);

    return {
      name: readableName(path),
      desktop,
      mobile
    };
  });

  const mobileOnly = mobileEntries
    .filter(([path]) => !usedMobile.has(normalizeName(path)))
    .map(([path, mobile]) => ({
      name: readableName(path),
      desktop: null,
      mobile
    }));

  return [...paired, ...mobileOnly];
}

function DeviceShowcase() {
  const slides = buildSlides();
  const hasScreens = slides.length > 0;
  const activeSlides = hasScreens
    ? Array.from({ length: 3 }, (_, index) => slides[index % slides.length])
    : [{ name: 'Project Screens', desktop: null, mobile: null }];

  return (
    <div className="device-showcase reveal" aria-label="Project screen showcase">
      <div className="device-copy">
        <span className="device-kicker">Project preview</span>
        <h3>See every project across desktop and Android.</h3>
        <p>
          Add matching screenshots into the desktop and mobile folders. They will appear here automatically.
        </p>
      </div>

      <div className="device-stage">
        <div className="laptop-device" aria-hidden={!hasScreens}>
          <div className="laptop-lid">
            <div className="laptop-camera"></div>
            <div className="laptop-screen">
              <div className={`screen-track ${!hasScreens ? 'is-empty' : ''}`}>
                {activeSlides.map((slide, index) => (
                  <div className="screen-slide" key={`${slide.name}-desktop-${index}`}>
                    {slide.desktop ? (
                      <img src={slide.desktop} alt={`${slide.name} desktop screenshot`} />
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
                    <img src={slide.mobile} alt={`${slide.name} mobile screenshot`} />
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
      </div>
    </div>
  );
}

export default DeviceShowcase;
