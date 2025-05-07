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
        <div className="menu  OnlyDesktop">
            <a href="#feedback">Feedback</a>
            <a href="mailto:muthukumaranarc00@gmail.com">Email</a>
            <a href="https://drive.google.com/file/d/1VNBXIq6xn_nQNVrzGxMdemkttKdXZBUb/view?usp=sharing">Resume</a>
        </div>
        )}

        {open && (
        <div className="menu  OnlyMobile">
            <a href="#home" >Home</a>
            <a href="#skills" >Skills</a>
            <a href="#journey" >Journey</a>
            <a href="#visonary" >Visionary</a>
            <a href="#projects" >Projects</a>
            <a href="#contact" >Contact</a>
            <a href="#contact">Share</a>
            <a href="#contact">Email</a>
            <a href="#contact">Resume</a>
        </div>
        )}
        </>
    )
}

export default Head;