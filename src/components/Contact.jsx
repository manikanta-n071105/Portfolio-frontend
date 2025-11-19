import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const apiBase = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div ref={headerRef} className={`section-header scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Get In Touch - Let's Connect</h2>
          <p className="section-subtitle">Have a project in mind? Let's discuss how we can work together</p>
        </div>
        
        <div className="contact-content">
          <div ref={infoRef} className={`contact-info scroll-animate-left ${infoVisible ? 'visible' : ''}`}>
            <div className="contact-intro">
              <h3>Let's work together!</h3>
              <p>
                I'm always excited to connect with fellow developers, potential clients, and
                anyone interested in technology. Feel free to reach out for collaborations
                or just a friendly chat!
              </p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-info">
                  <h4>Email</h4>
                  <a href="mailto:nmanikanta792143@gmail.com">nmanikanta792143@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <MapPin size={24} />
                </div>
                <div className="method-info">
                  <h4>Location</h4>
                  <p>Nandyal, India</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <Linkedin size={24} />
                </div>
                <div className="method-info">
                  <h4>Availability</h4>
                  <p>Open for opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-icons">
                <a href="https://github.com/manikanta-n071105" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/nmanikanta051105" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:nmanikanta792143@gmail.com" className="social-icon">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="location-badge">
              <span>📍</span>
              <span>Currently at Nandyal, India</span>
            </div>
          </div>
          
          <div ref={formRef} className={`contact-form-container scroll-animate-right ${formVisible ? 'visible' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What's your good name?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="What's your email address?"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
