import './Profile.css';
import muthu from '../assets/Muthu.png';
// import confetti from "canvas-confetti";
import hi from '../assets/hi.png';
import { useState } from 'react';
// import useScrollReveal from "./useScrollReveal";

function Profile() {

    let [hiState, setHiState] = useState(false);
    // const [ref, isVisible] = useScrollReveal();

    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/1J0wPt2SgQACbBWXEMnLJc7gH15yr4HgX/view?usp=sharing",
            "_blank"
        );
    };

    const muthuClick = () => {
        setHiState(true);
        setTimeout(() => {
            setHiState(false);
        }, 1500)
    }


    return (
        <div className='pro'>

            <div className="Name">I'm<br />Muthukumaran M</div>
            <p className='im'>I'm a </p>
            <div className='glow'>Full Stack Web Developer</div>
            <div className='quickAbout'>I’m a computer science student with 9.9CGPA. I have solid knowledge of DSA. I actively engage in tech competitions and focus on building innovation solutions that solve real-world problems effectively. </div>
            <button
                className='CheckResume box'
                onClick={handleClick}
            ><p>Check Resume</p></button>
            <img src={muthu} alt="profile" className='muthu' onClick={muthuClick} />
            <img
                src={hi}
                alt="hi"
                className={`hi ${hiState ? "active" : ""}`}
            />

        </div>
    )
}

export default Profile;