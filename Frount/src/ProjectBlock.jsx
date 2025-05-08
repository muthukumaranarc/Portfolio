import './ProjectBlock.css'

function ProjectBlock({img, title, year, frount, back, def, link}) {
    return(
        <div className='ProjBlock'>
            <h2>{title}</h2>
            <p className='year'>{year}</p>
            <img className='image' src={img} />
            <p className='frountLan'>Frountend: {frount}</p>
            <p className='backLan'>Backend: {back}</p>
            <p className='def'>{def}</p>
            <a
                href={link}
                target='_blank'
            >View</a>
        </div>
    );
}

export default ProjectBlock;