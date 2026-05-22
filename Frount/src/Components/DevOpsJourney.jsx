import './DevOpsJourney.css';
import journeyImage from '../assets/JourneyFull.png';

function DevOpsJourney() {
  return (
    <section className="journey-section" id="journey">
      <div className="journey-container">
        <div className="journey-heading">
          <span className="journey-kicker">Growth path</span>
          <h2 className="journey-title">My Journey</h2>
          <p className="journey-subtitle">
            A visual story of learning, building, solving problems, and turning ideas into real products.
          </p>
        </div>

        <div className="journey-flow" aria-label="My journey timeline">
          <img className="journey-image" src={journeyImage} alt="My journey timeline" />
        </div>
      </div>
    </section>
  );
}

export default DevOpsJourney;
