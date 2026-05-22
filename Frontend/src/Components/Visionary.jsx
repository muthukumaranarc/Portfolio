import './Visionary.css';
import map from '../assets/map.png';
import useScrollReveal from "./useScrollReveal";

function Visionary() {
    const [refA, isVisibleA] = useScrollReveal();
    const [refB, isVisibleB] = useScrollReveal();
    const [refC, isVisibleC] = useScrollReveal();
    return(
        <>
        <div className='adVis'><section id='visonary'></section></div>
        <div className='Visi'>
            <h2>Visionary</h2>
            <p>Turning Challenges into Opportunities.</p>
            <img className='map' src={map}></img>
            <div ref={refA} className={`VisBlock A reveal1 ${isVisibleA ? "active" : ""}`}>
                <h2>Active Grow</h2>
                <p>I’ve been deeply committed to enhancing my technical skills and expanding my knowledge in various domains. I’ve gained experience in Java, Spring, React, and other technologies, actively working on projects that challenge me to apply these skills effectively. </p>
            </div>
            <div ref={refB} className={`VisBlock B reveal1 ${isVisibleB ? "active" : ""}`}>
                <h2>Strong  skill</h2>
                <p>I'm someone who combines structured learning with hands-on practice, which has helped me develop strong problem-solving abilities. Whether it's exploring AI concepts, mastering new frameworks, or improving my debugging skills, I'm always focused on growth and improvement.</p>
            </div>
            <div ref={refC} className={`VisBlock C reveal1 ${isVisibleC ? "active" : ""}`}>
                <h2>Why need to hire me</h2>
                <p>I'm passionate about learning and growing as a developer. Over time, I've built strong technical skills and a mindset focused on problem-solving. I believe my dedication, adaptability, and willingness to take on challenges will allow me to contribute positively to your team and deliver meaningful results.</p>
            </div>
        </div>
        </>
    );
}

export default Visionary;