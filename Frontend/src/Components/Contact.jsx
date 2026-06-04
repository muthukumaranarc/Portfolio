import { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    roleInIT: '',
    email: '',
    feedback: '',
    link: ''
  });
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("Send Message");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    if (isDisabled) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setStatus("Processing...");

    const dataToSend = {
      ...formData,
      rating: rating
    };

    fetch("https://muthu-portfolio-gfq8.onrender.com/send", {
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
      setStatus("Submitted");
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
      setStatus("Send Message");
      console.error(error);
    })
    .finally(() => {
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    if (status === "Submitted") {
      const timer = setTimeout(() => {
        setStatus("Send Message");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow"></div>
      
      <div className="contact-container">
        <div className="contact-header reveal">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">Have a project in mind or want to talk DevOps? Leave your feedback.</p>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input 
                name="name" 
                type="text" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Doe" 
                disabled={isDisabled} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="john@example.com" 
                disabled={isDisabled} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Role in IT</label>
              <input 
                name="roleInIT" 
                type="text" 
                value={formData.roleInIT} 
                onChange={handleChange} 
                placeholder="e.g. Frontend Developer" 
                disabled={isDisabled} 
              />
            </div>
            
            <div className="form-group">
              <label>Experience</label>
              <input 
                name="experience" 
                type="text" 
                value={formData.experience} 
                onChange={handleChange} 
                placeholder="e.g. 2 years" 
                disabled={isDisabled} 
              />
            </div>

            <div className="form-group">
              <label>Your Portfolio Link</label>
              <input 
                name="link" 
                type="url" 
                value={formData.link} 
                onChange={handleChange} 
                placeholder="https://..." 
                disabled={isDisabled} 
              />
            </div>
            
            <div className="form-group rating-group">
              <label style={{display: 'block', textAlign: 'center'}}>Rating</label>
              <div className="star-rating px-4 py-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button 
                    key={n} 
                    type="button" 
                    onClick={() => setRating(n)} 
                    className={`star-btn ${rating >= n ? 'active-star' : ''}`} 
                    disabled={isDisabled}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Feedback Message</label>
            <textarea 
              name="feedback" 
              value={formData.feedback} 
              onChange={handleChange} 
              placeholder="How is my Portfolio? Tell me about your project..." 
              rows="4"
              disabled={isDisabled}
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isDisabled}
          >
            {status}
          </button>
        </form>

        <div className="social-links reveal">
          <a href="mailto:muthukumaranarc00@gmail.com" className="social-link group" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined group-hover-scale">alternate_email</span>
            Email
          </a>
          <a href="https://github.com/muthukumaranarc" className="social-link group" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined group-hover-scale">terminal</span>
            Github
          </a>
          <a href="https://www.linkedin.com/in/muthukumaranarc00" className="social-link group" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined group-hover-scale">share</span>
            LinkedIn
          </a>
          <a href="https://api.whatsapp.com/send?phone=8610760407&text=Hi%20Muthukumaran%2C%20I%20saw%20your%20portfolio" className="social-link group" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined group-hover-scale">chat</span>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
