import { useState } from 'react';
import './FeedBack.css'

function Feedback() {
    const [num, setnum] = useState(false);

    function handleSubmit(){
        let data = {
            name: document.getElementById('name').value,
            experience: document.getElementById('exp').value,
            roleInIT: document.getElementById('role').value,
            email: document.getElementById('email').value,
            feedback: document.getElementById('feed').value,
            link: document.getElementById('link').value
        }
    
        fetch('https://appsail-50026275712.development.catalystappsail.in/mail/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
          })
          .then(result => {
            console.log('Success:', result);
            alert('Feedback submitted successfully!');
            document.getElementById('name').value = "";
            document.getElementById('exp').value = "";
            document.getElementById('role').value = "";
            document.getElementById('email').value = "";
            document.getElementById('feed').value = "";
            document.getElementById('link').value = "";
          })
          .catch(error => {
            console.error('Error:', error);
            alert('Submission failed!');
          });
    }
      

    return (
        <div className='feed'>
            <h2>FeedBack Corner</h2>
            <p>Leave your Feedback</p>
            <div className='inputBox'>
                <input type='text' name='name' placeholder='Name'  id='name'></input>
                <input type='text' name='name' placeholder='Experience' className='left' id='exp'></input>
                <input type='text' name='name' placeholder='Role in TI' id='role'></input>
                <input type='text' name='name' placeholder='Email' className='left' id='email'></input>
                <input type='text' name='name' placeholder='How is my Portfolio' id='feed'></input>
                <input type='text' name='name' placeholder='Your Portfolio Link' className='left' id='link'></input>
            </div>
            <button onClick={() => setnum(1)} className={`${num >= 1 ? 'clicked' : 'notClicked'}`}>★</button>
            <button onClick={() => setnum(2)} className={`${num >= 2 ? 'clicked' : 'notClicked'}`}>★</button>
            <button onClick={() => setnum(3)} className={`${num >= 3 ? 'clicked' : 'notClicked'}`}>★</button>
            <button onClick={() => setnum(4)} className={`${num >= 4 ? 'clicked' : 'notClicked'}`}>★</button>
            <button onClick={() => setnum(5)} className={`${num >= 5 ? 'clicked' : 'notClicked'}`}>★</button>
            <button className='submit' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Feedback;