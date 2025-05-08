import ProjectBlock from './ProjectBlock';
import './Projects.css'
import portfolio from './assets/Projects/Portfolio.PNG';

function Projects() {
    return(
        <>
        <div className='adProj'><section id='projects'></section></div>
        <div className='Proj'>
            <h2>Projects</h2>
            <p>Turning ideas into impact</p>
            <div className='ProjBox'>
            <ProjectBlock img={portfolio} title={'Portfolio'} year={"8 May 2025"} frount={['React js']} back={'Spring Boot'} link={"https://muthukumaran-portfolio.web.app/"} def={'An engaging portfolio reflecting a journey of growth in web development, blending strong fundamentals in Java, Spring Boot, and React with creative UI design. It features real-world projects, clean architecture, and practical problem-solving. Designed to inspire confidence, it represents a committed developer passionate about building meaningful digital solutions.'}/>
            {/* <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} link={"https://www.youtube.com/watch?v=jBDTsf8jsEs&t=23s"} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/>
            <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} link={"https://www.youtube.com/watch?v=jBDTsf8jsEs&t=23s"} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/>
            <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} link={"https://www.youtube.com/watch?v=jBDTsf8jsEs&t=23s"} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/>
            <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} link={"https://www.youtube.com/watch?v=jBDTsf8jsEs&t=23s"} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/> */}
            </div>
        </div>
        </>
    );
}

export default Projects;