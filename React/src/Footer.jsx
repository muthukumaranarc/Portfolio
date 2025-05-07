import './Footer.css';
// import background from './assets/footBackgrount.png';
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
            <a href="#contact">Contact</a>
            </div>
            <div className='contact'>
                <a
                    href='mailto:muthukumaranarc00@gmail.com'
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='mail'></a>
                <a
                    href='https://www.linkedin.com/in/muthukumaranarc00'
                    target='_blank'
                    className='linked'></a>
                <a
                    href='https://www.instagram.com/m.muthukumaran_55/'
                    target='_blank'
                    className='insta'></a>
                <a
                    href='https://api.whatsapp.com/send?phone=8610760407&text=Hi%20Muthukumaran%2C%20I%20saw%20your%20portfolio'
                    target='_blank'
                    rel="noopener noreferrer"
                    className='whats'></a>
                <a
                    href='tel:8610760407'
                    target='_blank'
                    className='call'></a>
                <a
                    href='https://github.com/muthukumaranarc'
                    target='_blank'
                    className='Git'></a>
            </div>
            <div className='thaink'>Thank you for spending your valuable time for me,
            I hope you may like my effort. </div>
        </div>
        </>
    );
}

export default Footer;