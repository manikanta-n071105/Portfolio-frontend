import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>NOOKALA MANIKANTA</h3>
            <p>MERN Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Nookala Manikanta. Made with <Heart size={16} fill="currentColor" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
