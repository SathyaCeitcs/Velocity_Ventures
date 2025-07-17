import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-left">
          <h2 className="footer-title">VELOCITY VENTURES LLC</h2>
          <h3 className="footer-heading">LOCATION</h3>
          <p className="footerp">1371 Bobwhite Court,</p>
          <p className="footerp">Greenwood, IN 46143, USA</p>
        </div>

        {/* Quick Links */}
        <div className="footer-middle">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="footer-list">
            <li><a href="/home" className="footer-link">➤ Home</a></li>
            <li><a href="/about" className="footer-link">➤ About</a></li>
            <li><a href="/services" className="footer-link">➤ Services</a></li>
            <li><a href="/contact" className="footer-link">➤ Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3 className="footer-heading">OUR SERVICES</h3>
          <ul className="footer-list">
            <li><Link to="/services?service=0" className="footer-link">➤ Digital Transformation</Link></li>
            <li><Link to="/services?service=2" className="footer-link">➤ Cloud Solutions</Link></li>
            <li><Link to="/services?service=2" className="footer-link">➤ DevOps</Link></li>
            <li><Link to="/services?service=3" className="footer-link">➤ Artificial Intelligence</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-right">
          <h3 className="footer-heading">CONTACT DETAILS</h3>
          <p className="footerp"><i className="fas fa-envelope"></i> sample@gmail.com</p>
          <p className="footerp"><i className="fas fa-clock"></i> Mon–Fri: 9 AM – 5 PM</p>
          <p className="footerp"><i className="fas fa-times-circle"></i> Sat & Sun: Closed</p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p className="footer-rights">© 2025 VELOCITY VENTURES LLC. All rights reserved.</p>
        <div className="social-icons">
          <div className="social-btn" title="Facebook">
            <i className="footer-icon fab fa-facebook-f"></i>
          </div>
          <div className="social-btn" title="Twitter">
            <i className="footer-icon fab fa-twitter"></i>
          </div>
          <div className="social-btn" title="YouTube">
            <i className="footer-icon fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;