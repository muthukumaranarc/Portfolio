import ProjectBlock from './ProjectBlock';
import './Projects.css'

function Projects() {
    return(
        <div className='Proj'>
            <h2>Projects</h2>
            <p>Turning ideas into impact</p>
            <div className='ProjBox'>
            <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/>
            <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/>
            <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/>
            <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/>
            <ProjectBlock title={'BuyTracker'} year={2025} frount={['HTML, CSS, JavaScript']} back={'Java, SpringBoot, MySQL'} def={'BuyTrack is a web based mobile application designed to simplify money management. Built with Spring Boot and React, it allows users to manage items, track expenses, and view purchase history. With its user-friendly interface and organized structure, BuyTrack helps users stay on top of their grocery planning and spending efficiently.'}/>
            </div>
        </div>
    );
}

export default Projects;