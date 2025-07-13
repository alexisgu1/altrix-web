import './Footer.css';
import logo from '../logo.png';
import linkedinIcon from '../linkedinicon.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="altrix logo" className="footer-logo" />
          <div className="footer-tagline">Your Nurse Units, with Superpowers</div>
          <a href="https://www.linkedin.com/company/altrix-ai/" target="_blank" rel="noopener noreferrer" className="footer-linkedin" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-linkedin-img" />
          </a>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <div className="footer-col-title">PRODUCT</div>
            <a href="#">Altrix Flow™</a>
            <a href="#">Altrix Synapse™</a>
            <a href="#">Altrix Cascade™</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">ABOUT</div>
            <a href="#">Security</a>
            <a href="#">Company</a>
            <a href="#">Enterprise</a>
            <a href="#">Research</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">POLICIES</div>
            <a href="#">Legal</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-copyright">© 2025 Altrix. All rights reserved.</div>
        <button className="footer-demo-btn">Request a demo</button>
      </div>
    </footer>
  );
} 