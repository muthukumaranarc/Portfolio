import './Head.css'

function Head() {
    return (
        <div className='head' >
            <div style={{position:'relative', bottom:"20px"}}><section id='home'></section></div>
            <div className='main'>
                <div className='logo'></div>
                <h1>Hi, there</h1>
            </div>
            <div className="nav" id="nav">
                <a href="#skills">Skills</a>
                <a href="#journey">Journey</a>
                <a href="#visonary">Visionary</a>
                <a href="#projects">Projects</a>
                <a href="#feedback">Feedback</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Head;