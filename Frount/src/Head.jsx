import './Head.css'
import menu from './assets/Menu_icon.png'
import { useState } from 'react';

function Head(){
    const [open, setOpen] = useState(false);
    return (
        <>
        <section id='home'></section>
        <div className='main'>
            <div className='logo'></div>
            <h1>Portfolio</h1>
        </div>
        <div className="nav" id="nav">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#journey">Journey</a>
            <a href="#visonary">Visionary</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <button className='Menu_But' onClick={() => setOpen(!open)}>
            <img src={menu} className='menuImg'/>
        </button>

        {open && (
        <div className="menu">
            <a href="#home" className='OnlyMobile'>Home</a>
            <a href="#skills" className='OnlyMobile'>Skills</a>
            <a href="#journey" className='OnlyMobile'>Journey</a>
            <a href="#visonary" className='OnlyMobile'>Visionary</a>
            <a href="#projects" className='OnlyMobile'>Projects</a>
            <a href="#contact" className='OnlyMobile'>Contact</a>
            <a href="#feedback">Feedback</a>
            <a href="mailto:muthukumaranarc00@gmail.com" className='OnlyDesktop'>Email</a>
            <a href="https://drive.google.com/file/d/1tACXRrB4JwklHmVZYsvVZM4NDj_GbXG2/view?usp=sharing" className='OnlyDesktop'>Resume</a>
        </div>
        )}
        </>
    )
}

export default Head;