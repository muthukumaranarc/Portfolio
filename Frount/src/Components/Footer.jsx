import gmailIcon from "../assets/Gmail.png";
import linkedIcon from "../assets/LinkedIn.png";
import instaIcon from "../assets/Instagram.png";
import whatsIcon from "../assets/WhhatsApp.png";
import callIcon from "../assets/Call.png";
import gitIcon from "../assets/contGit.png";
import './Footer.css';
function Footer() {
    return (
        <>
            <div className='adFoot'><section id='contact'></section></div>
            <div className='foot'>
                <div className='footNav'>
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#visonary">Visionary</a>
                    <a href='#journey'>Journey</a>
                    <a href="#projects">Projects</a>
                </div>
                <div className="contact">
                    <div>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=muthukumaranarc00@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={gmailIcon} alt="Mail" className="icon" />
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.linkedin.com/in/muthukumaranarc00"
                            target="_blank"
                        >
                            <img src={linkedIcon} alt="LinkedIn" className="icon" />
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.instagram.com/m.muthukumaran_55/"
                            target="_blank"
                        >
                            <img src={instaIcon} alt="Instagram" className="icon" />
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://api.whatsapp.com/send?phone=8610760407&text=Hi%20Muthukumaran%2C%20I%20saw%20your%20portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={whatsIcon} alt="WhatsApp" className="icon" />
                        </a>
                    </div>

                    <div>
                        <a href="tel:8610760407" target="_blank">
                            <img src={callIcon} alt="Call" className="icon" />
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/muthukumaranarc" target="_blank">
                            <img src={gitIcon} alt="GitHub" className="icon" />
                        </a>
                    </div>
                </div>
                <div className='thank'>Thank you for spending your valuable time for me,
                    I hope you may like my effort. </div>
            </div>
        </>
    );
}

export default Footer;