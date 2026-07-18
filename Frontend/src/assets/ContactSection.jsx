import { useState } from 'react';
import './ContactSection.css';

import instagram from '../assets/Instagram.png';
import linkedin from '../assets/LinkedIn.png';
import mail from '../assets/Mail.png';
import whatsapp from '../assets/WhatsApp.png';

const contactData = {
  instagramUrl: 'https://www.instagram.com/m.muthukumaran_55',
  linkedinUrl: 'https://www.linkedin.com/in/muthukumaranarc00',
  emailAddress: 'muthukumaran.freelance@gmail.com',
  whatsappUrl: 'https://wa.me/8610760407'
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contactData.emailAddress);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = contactData.emailAddress;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState('sending');

    // Simulate a short delay so the user sees the 'Sending...' state
    await new Promise(resolve => setTimeout(resolve, 800));
    
    alert('🌟 This feature connects to my backend server, which is currently offline as it\'s under active development. Please check back in about a week — I\'ll have it ready for you! 🙏');
    setSubmitState('idle');
  };

  const socials = [
    { name: 'Instagram', icon: instagram, url: contactData.instagramUrl },
    { name: 'LinkedIn', icon: linkedin, url: contactData.linkedinUrl },
    { name: 'Email', icon: mail, url: `mailto:${contactData.emailAddress}` },
    { name: 'WhatsApp', icon: whatsapp, url: contactData.whatsappUrl }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-badge">Contact</span>
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-desc">
            Have a project in mind, or just want to chat? Fill out the form or reach out directly via social networks.
          </p>

          <div className="social-links-grid">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon-wrapper">
                  <img src={social.icon} alt={social.name} className="social-icon-img" />
                </div>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>

          <div
            className="copy-mail-note"
            onClick={handleCopyEmail}
            title="Click to copy"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(); }}
          >
            {copied ? 'Copied to clipboard!' : 'Click to copy: '}
            <span className="copy-mail-address">{contactData.emailAddress}</span>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Description / Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project details..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={submitState === 'sending'}>
              {submitState === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {submitState === 'sent' && (
              <div className="success-toast">
                Message sent successfully.
              </div>
            )}
            {submitState === 'error' && (
              <div className="success-toast">
                Message could not be sent. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
