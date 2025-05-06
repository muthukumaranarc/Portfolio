import './Footer.css';
// import background from './assets/footBackgrount.png';
function Footer() {
    return (
        <div className='foot'>
            <div className='footNav'>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#visonary">Visionary</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            </div>
            <div className='contact'>
                <button className='mail'></button>
                <button className='linked'></button>
                <button className='insta'></button>
                <button className='whats'></button>
                <button className='call'></button>
                <button className='Git'></button>
            </div>
            <div className='thaink'>Thank you for spending your valuable time for me,
            I hope you may like my effort. </div>
        </div>
    );
}

export default Footer;