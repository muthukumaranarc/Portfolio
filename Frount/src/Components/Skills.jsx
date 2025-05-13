import './Skills.css'
import HTML from '../assets/HTML.png'
import JavaScript from '../assets/JavaScript.png'
import CSS from '../assets/CSS.png'
import ReactJS from '../assets/ReactJS.png'
import Java from '../assets/Java.png'
import NodeJS from '../assets/NodeJS.png'
import SpringBoot from '../assets/Spring.png'
import MongoDB from '../assets/MongoDB.png'
import MySQL from '../assets/MySQL.png'
import Figma from '../assets/Figma.png'
import Maven from '../assets/Maven.png'
import Git from '../assets/Git.png'
import GitHub from '../assets/GitHub.png'

function Skills() {
    return(
        <>
        <div className='adSkill'><section id='skills'></section></div>
        <div className="skill_block">
            <div className='skill_tit'>SKILLS</div>
            <div className='skill_sub'>I can able to work with frontend and backend</div>
            <div className='Frountend'>
                <h1>Frountend</h1>
                <div className='html'><img src={HTML}/><p>HTML</p></div>
                <div className='javaScript'><img src={JavaScript}/><p>JavaScript</p></div>
                <div className='css'><img src={CSS}/><p>css</p></div>
                <div className='reactJS'><img src={ReactJS}/><p>React js</p></div>
            </div>
            <div className='Backend'>
            <h1>Backend</h1>
                <div className='java'><img src={Java}/><p>Java</p></div>
                <div className='nodeJS'><img src={NodeJS}/><p>Node js</p></div>
                <div className='springBoot'><img src={SpringBoot}/><p>Spring Boot</p></div>
            </div>
            <div className='Other'>
            <h1>Other</h1>
                <div className='mongoDB'><img src={MongoDB}/><p>MongoDB</p></div>
                <div className='mySQL'><img src={MySQL}/><p>MySQL</p></div>
                <div className='figma'><img src={Figma}/><p>Figma</p></div>
                <div className='maven'><img src={Maven}/><p>Maven</p></div>
                <div className='git'><img src={Git}/><p>Git</p></div>
                <div className='gitHub'><img src={GitHub}/><p>GitHub</p></div>
            </div>
        </div>
        </>
    )
}

export default Skills;