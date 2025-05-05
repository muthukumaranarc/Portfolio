import './ProjectBlock.css'

function ProjectBlock({title, year, frount, back, def}) {
    return(
        <div className='ProjBlock'>
            <h2>{title}</h2>
            <p className='year'>{year}</p>
            <div className='image'></div>
            <p className='frountLan'>Frountend: {frount}</p>
            <p className='backLan'>Backend: {back}</p>
            <p className='def'>{def}</p>
        </div>
    );
}

export default ProjectBlock;