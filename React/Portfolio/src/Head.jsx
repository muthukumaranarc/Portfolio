import './Head.css'
import menu from './assets/Menu_icon.png'

function Head(){
    return (
        <>
        <div className='main'>
            <div className='logo'></div>
            <h1>Portfolio</h1>
        </div>
        <div className="nav" id="nav">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#visonary">Visionary</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <button className='Menu_But'>
            <img src={menu} className='menu'/>
        </button>
        </>
    )
}

export default Head;