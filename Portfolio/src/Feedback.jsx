import { useState } from 'react';
import './FeedBack.css'

function Feedback() {
    const [num, setnum] = useState(false);

    return (
        <div className='feed'>
            <h2>FeedBack Corner</h2>
            <p>Leave your Feedback</p>
            <div className='inputBox'>
                <input type='text' name='name' placeholder='Name'></input>
                <input type='text' name='name' placeholder='Experience' className='left'></input>
                <input type='text' name='name' placeholder='Role in TI'></input>
                <input type='text' name='name' placeholder='Email' className='left'></input>
                <input type='text' name='name' placeholder='How is my Portfolio'></input>
                <input type='text' name='name' placeholder='Your Portfolio Link' className='left'></input>
            </div>
            <button onClick={() => setnum(1)} className={`${num >= 1 ? 'clicked' : 'notClicked'}`}>★</button>
            <button onClick={() => setnum(2)} className={`${num >= 2 ? 'clicked' : 'notClicked'}`}>★</button>
            <button onClick={() => setnum(3)} className={`${num >= 3 ? 'clicked' : 'notClicked'}`}>★</button>
            <button onClick={() => setnum(4)} className={`${num >= 4 ? 'clicked' : 'notClicked'}`}>★</button>
            <button onClick={() => setnum(5)} className={`${num >= 5 ? 'clicked' : 'notClicked'}`}>★</button>
            <button className='submit'>Submit</button>
        </div>
    );
}

export default Feedback;