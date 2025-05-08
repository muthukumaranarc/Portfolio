import { useState } from 'react';
import './FeedBack.css';

function Feedback() {
    const [formData, setFormData] = useState({
        name: '',
        experience: '',
        roleInIT: '',
        email: '',
        feedback: '',
        link: ''
    });
    const [rating, setRating] = useState(0);
    const [subBut, setSubBut] = useState("Submit");
    const [isDisabled, setIsDisabled] = useState(false);

    const handleChange = (e) => {
        if (isDisabled) return;
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDisabled(true);
        setSubBut("Processing...");

        // Include the rating
        const dataToSend = {
            ...formData,
            rating: rating
        };

        console.log("Data Sent to Server:", dataToSend);

        fetch("https://muthu-portfolio-4qfn.onrender.com/mail/send", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then(() => {
            console.log(formData.rate);
            setSubBut("Submitted");
            setFormData({
                name: '',
                experience: '',
                roleInIT: '',
                email: '',
                feedback: '',
                link: ''
            });
            setRating(0);
        })
        .catch(error => {
            alert("Error submitting feedback!");
            setSubBut("Submit");
            console.error(error);
        })
        .finally(() => {
            setIsDisabled(false);
        });
    };

    return (
        <>
        <div className='adFeed'><section id='feedback'></section></div>
        <div className='feed'>
            <h2>Feedback Corner</h2>
            <p>Leave your Feedback</p>
            <form onSubmit={handleSubmit}>
                <div className='inputBox'>
                    <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" disabled={isDisabled} required />
                    <input name="experience" type="number" value={formData.experience} onChange={handleChange} placeholder="Experience" className='left' disabled={isDisabled} />
                    <input name="roleInIT" type="text" value={formData.roleInIT} onChange={handleChange} placeholder="Role in IT" disabled={isDisabled} />
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className='left' disabled={isDisabled} required />
                    <input name="feedback" type="text" value={formData.feedback} onChange={handleChange} placeholder="How is my Portfolio?" disabled={isDisabled} required />
                    <input name="link" type="text" value={formData.link} onChange={handleChange} placeholder="Your Portfolio Link" className='left' disabled={isDisabled}/>
                </div>

                {[1, 2, 3, 4, 5].map((n) => (
                    <button
                        key={n}
                        type="button"
                        onClick={() => setRating(n)}
                        value={formData.rate}
                        className={ `${rating >= n ? 'clicked' : 'notClicked'}`}
                        disabled={isDisabled}
                    >
                        ★
                    </button>
                ))}

                <button type="submit" className='submit' disabled={isDisabled}>{subBut}</button>
            </form>
        </div>
        </>
    );
}

export default Feedback;
