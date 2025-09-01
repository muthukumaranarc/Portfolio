import './Journey.css';
import jour from '../assets/Journey.png';
import jourMob from '../assets/JourneyMob.png';

function Journey() {
    return(
        <>
        <div className='adJour'><section id='journey'></section></div>
        <div className='Jour'>
        <h2 className='jour_tit'>My Journey</h2>
        <p>Here is my wonderful journey of learning</p>
        <img className='JourImage' src={jour}></img>
        <img className='JourImageMob' src={jourMob}></img>
        </div>
        </>
    );
}

export default Journey;