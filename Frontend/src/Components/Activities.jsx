import Internships from './Internships';
import Hackathons from './Hackathons';
import Certifications from './Certifications';
import './Activities.css';

// ---- Edit these two lines to change the Activities heading -----------------
const ACTIVITIES_TITLE = 'Activities';
const ACTIVITIES_SUBTITLE =
  'Internships, hackathons, and certifications that shaped my journey.';
// ---------------------------------------------------------------------------

function Activities() {
  return (
    <section className="activities-section" id="activities">
      <div className="activities-container">
        <div className="activities-header">
          <h2 className="activities-title">{ACTIVITIES_TITLE}</h2>
          <p className="activities-subtitle">{ACTIVITIES_SUBTITLE}</p>
        </div>

        <Internships />
        <Hackathons />
        <Certifications />
      </div>
    </section>
  );
}

export default Activities;
