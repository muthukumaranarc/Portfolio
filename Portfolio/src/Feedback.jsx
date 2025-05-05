import { useState } from 'react';
import './FeedBack.css'

function Feedback() {
    const [num, setnum] = useState(false);

    function handleSubmit() {
        // Collect data from the form inputs
        const data = {
            name: document.getElementById("name").value,
            experience: document.getElementById("exp").value,
            roleInIT: document.getElementById("role").value,
            email: document.getElementById("email").value,
            feedback: document.getElementById("feed").value,
            link: document.getElementById("link").value
        };
    
        // Send the data to the API using fetch
        fetch("https://appsail-50026275712.development.catalystappsail.in/mail/send", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)  // Convert the data object to JSON
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();  // Parse the response body to JSON
        })
        .then(result => {
            console.log("Success:", result);  // Handle the success response
            alert("Feedback submitted successfully!");
    
            // Clear the form inputs after successful submission
            document.getElementById("name").value = "";
            document.getElementById("exp").value = "";
            document.getElementById("role").value = "";
            document.getElementById("email").value = "";
            document.getElementById("feed").value = "";
            document.getElementById("link").value = "";
        })
        .catch(error => {
            console.error("Error:", error);  // Handle any errors
            alert("Error submitting feedback!");
        });
    }
    

    return (
        <div className='feed'>
            <h2>FeedBack Corner</h2>
            <p>Leave your Feedback</p>
            <div className='inputBox'>
                <input id="name" type='text' name='name' placeholder='Name'></input>
                <input id="exp" type='text' name='name' placeholder='Experience' className='left'></input>
                <input id="role" type='text' name='name' placeholder='Role in TI'></input>
                <input id="email" type='text' name='name' placeholder='Email' className='left'></input>
                <input id="feed" type='text' name='name' placeholder='How is my Portfolio'></input>
                <input id="link" type='text' name='name' placeholder='Your Portfolio Link' className='left'></input>
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