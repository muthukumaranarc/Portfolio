import { useState } from 'react';
import './ContactSection.css';

const contactData = {
  instagramUrl: 'https://www.instagram.com/m.muthukumaran_55',
  linkedinUrl: 'https://www.linkedin.com/in/muthukumaranarc00',
  emailAddress: 'muthukumaran.freelance@gmail.com',
  whatsappUrl: 'https://wa.me/8610760407'
};

const socials = [
  {
    name: 'Email',
    subtitle: contactData.emailAddress,
    url: `mailto:${contactData.emailAddress}`,
    icon: 'mail'
  },
  {
    name: 'LinkedIn',
    subtitle: 'Connect with me',
    url: contactData.linkedinUrl,
    icon: 'linkedin'
  },
  {
    name: 'Instagram',
    subtitle: 'Follow my journey',
    url: contactData.instagramUrl,
    icon: 'photo_camera'
  },
  {
    name: 'WhatsApp',
    subtitle: "Let's chat",
    url: contactData.whatsappUrl,
    icon: 'call'
  }
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState('idle');

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

    alert('🌟 This feature connects to my backend server, which is currently offline as it\'s under active development. Please check back in about a week — I\'ll have it ready for you!');
    setSubmitState('idle');
  };

  return (
    <section id="contact" className="contact-section">
      {/* Decorative background elements */}
      <div className="contact-blob contact-blob-top" aria-hidden="true"></div>
      <div className="contact-blob contact-blob-bottom" aria-hidden="true"></div>
      <div className="contact-dots" aria-hidden="true"></div>
      <div className="contact-handwritten" aria-hidden="true">Let&apos;s Connect</div>

      <div className="contact-container">
        {/* Left Column - Contact Info */}
        <div className="contact-left">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-line" aria-hidden="true"></span>
            Contact Section
          </span>

          <h2 className="contact-title">
            Let&apos;s Build
            <br />
            <span className="contact-title-accent">Something Great.</span>
          </h2>

          <p className="contact-desc">
            Have a project in mind, a question, or just want to say hello?
            Feel free to reach out. I&apos;m always open to new opportunities
            and interesting conversations.
          </p>

          <div className="social-links-grid">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon-wrapper">
                  {social.icon === 'linkedin' ? (
                    <LinkedInIcon />
                  ) : (
                    <span className="material-symbols-outlined social-icon-symbol">{social.icon}</span>
                  )}
                </div>
                <div className="social-text">
                  <span className="social-name">{social.name}</span>
                  <span className="social-subtitle">{social.subtitle}</span>
                </div>
                <span className="material-symbols-outlined social-arrow" aria-hidden="true">arrow_forward</span>
              </a>
            ))}
          </div>

          <div className="contact-quote">
            <span className="contact-quote-line" aria-hidden="true"></span>
            <p className="contact-quote-text">&quot;Good ideas start with a conversation.&quot;</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <div className="form-header-icon">
                <span className="material-symbols-outlined" aria-hidden="true">send</span>
              </div>
              <div className="form-header-text">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-subtitle">I&apos;ll get back to you as soon as possible.</p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <span className="material-symbols-outlined input-icon" aria-hidden="true">person</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <span className="material-symbols-outlined input-icon" aria-hidden="true">mail</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <div className="input-wrapper input-wrapper-textarea">
                <span className="material-symbols-outlined input-icon" aria-hidden="true">chat_bubble</span>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  maxLength={500}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, question, or just say hi..."
                ></textarea>
                <span className="char-counter">{formData.message.length}/500</span>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={submitState === 'sending'}>
              {submitState === 'sending' ? 'Sending...' : 'Send Message'}
              {submitState !== 'sending' && (
                <span className="material-symbols-outlined submit-btn-icon" aria-hidden="true">send</span>
              )}
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