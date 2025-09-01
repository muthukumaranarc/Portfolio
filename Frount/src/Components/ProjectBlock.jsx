import './ProjectBlock.css'

function ProjectBlock({ img, title, year, lan, def, link }) {

    return (
        <div className='ProjBlock' onClick={() => { window.open(link, "_blank") }}>
            <h2>{title}</h2>
            <p className='year'>{year}</p>
            <img className='image' src={img} />
            <div className='lan'>
                {
                    lan.map((item, index) => (
                        <LanBlock key={index} data = {item}/>
                    ))
                }
            </div>
            <p className='def'>{def}</p>
        </div>
    );
}

function LanBlock({data}) {
    return (
        <div className='lanBlock'>
            <p>{data}</p>
        </div>
    )
}

export default ProjectBlock;