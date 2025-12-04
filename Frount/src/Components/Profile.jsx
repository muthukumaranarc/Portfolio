import './Profile.css';
import muthu from '../assets/Muthu.png';
import hi from '../assets/hi.png';
import TextType from './TextType';

function Profile() {

    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/1QpRFOcs7frip40HNPWy85CJSyjbtwW9t/view?usp=sharing",
            "_blank"
        );
    };

    return (
        <div className='pro'>
            <div className='cont'>
                <div className="Name">I'm<br />Muthukumaran M</div>
                <TextType  className='glow'
                    text={
                        [
                            "Full Stack Web Developer", 
                            "Frontend Web Developer", 
                            "Backend Web Developer", 
                            "Figma Designer", 
                            "React Developer", 
                            "Spring Boot Developer"
                        ]}
                    typingSpeed={75}
                    pauseDuration={2500}
                    showCursor={true}
                    cursorCharacter="_"
                />
                <div className='quickAbout'>I’m a computer science student with 9.8 CGPA. I have solid knowledge of DSA. I actively engage in tech competitions and focus on building innovation solutions that solve real-world problems effectively. </div>
                <button
                    className='CheckResume box'
                    onClick={handleClick}
                ><p>Check Resume</p></button>
            </div>
            <div className='my-image'>
                <img src={muthu} alt="profile" className='muthu' />
                <img
                    src={hi}
                    alt="hi"
                    className={`hi active `}
                />
            </div>
        </div>
    )
}

export default Profile;