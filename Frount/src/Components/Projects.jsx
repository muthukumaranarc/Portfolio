import ProjectBlock from './ProjectBlock';
import './Projects.css'
import portfolio from '../assets/Projects/Portfolio.PNG';
import tunez from '../assets/Projects/Tunez.PNG';

function Projects() {
    return(
        <div className='project'>
        <div className='adProj'><section id='projects'></section></div>
        <div className='Proj'>
            <h2>Projects</h2>
            <p>Turning ideas into impact</p>
            <div className='ProjBox'>
            <ProjectBlock 
                img={portfolio} 
                title={'Portfolio'} 
                year={"8 May 2025"} 
                lan={['React js', 'Spring Boot']} 
                link={"https://muthukumaran-portfolio.web.app/"} 
                def={'An engaging portfolio reflecting a journey of growth in web development, blending strong fundamentals in Java, Spring Boot, and React with creative UI design. It features real-world projects, clean architecture, and practical problem-solving. Designed to inspire confidence, it represents a committed developer passionate about building meaningful digital solutions.'}/>
            
            <ProjectBlock img={tunez} 
                title={'Tunez'} 
                year={"22 Aug 2025"} 
                lan={['React js', 'Spring Boot', 'MongoDB']} 
                link={"https://tunez-online.web.app/"} 
                def={"Tunez is a dynamic music streaming platform with smooth playback, secure authentication, personalized playlists, and intuitive navigation. Designed for scalability and efficiency, it ensures responsive design, reliable performance, and engaging user experience while reflecting creativity, problem-solving, and development expertise."}
            />
            {/* <ProjectBlock img={tunez} 
                title={'Tunez'} 
                year={"22 Aug 2025"} 
                lan={['React js', 'Spring Boot', 'MongoDB']} 
                link={"https://tunez-online.web.app/"} 
                def={"Tunez is a dynamic music streaming platform with smooth playback, secure authentication, personalized playlists, and intuitive navigation. Designed for scalability and efficiency, it ensures responsive design, reliable performance, and engaging user experience while reflecting creativity, problem-solving, and development expertise."}
            /> */}
            </div>
        </div>
        </div>
    );
}

export default Projects;