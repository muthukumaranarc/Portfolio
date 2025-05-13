import ProjectBlock from './ProjectBlock';
import './Projects.css'
import portfolio from '../assets/Projects/Portfolio.PNG';

function Projects() {
    return(
        <>
        <div className='adProj'><section id='projects'></section></div>
        <div className='Proj'>
            <h2>Projects</h2>
            <p>Turning ideas into impact</p>
            <div className='ProjBox'>
            <ProjectBlock img={portfolio} title={'Portfolio'} year={"8 May 2025"} frount={['React js']} back={'Spring Boot'} link={"https://muthukumaran-portfolio.web.app/"} def={'An engaging portfolio reflecting a journey of growth in web development, blending strong fundamentals in Java, Spring Boot, and React with creative UI design. It features real-world projects, clean architecture, and practical problem-solving. Designed to inspire confidence, it represents a committed developer passionate about building meaningful digital solutions.'}/>
            </div>
        </div>
        </>
    );
}

export default Projects;