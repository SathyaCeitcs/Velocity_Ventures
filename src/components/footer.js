import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-title">VENTURES VELOCITY</h2>
          <h3 className="footer-heading">CALL US</h3>
          <p className="footerp">📞 IN +91 9790835693</p>
          <p className="footerp">📞 IN +91 9791424421</p>
          <p className="footerp">📞 AE +971 545313855</p>

          <h3 className="footer-heading">OUR LOCATION</h3>
          <p className="footerp"><strong>F3 Plot Number 36</strong></p>
          <p className="footerp">Ranganathan Nagar Second Street,</p>
          <p className="footerp">Selaiyur, Tambaram, Chennai - 600073</p>
        </div>

        <div className="footer-middle">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="footer-list">
            <li className="footer-item"><a className="footer-link" href="/home">➤ Home</a></li>
            <li className="footer-item"><a className="footer-link" href="/about">➤ About Us</a></li>
            <li className="footer-item"><a className="footer-link" href="/tls">➤ Leadership Summit</a></li>
            <li className="footer-item"><a className="footer-link" href="/features">➤ Features</a></li>
            <li className="footer-item"><a className="footer-link" href="/services">➤ Services</a></li>
            <li className="footer-item"><a className="footer-link" href="/projects">➤ Projects</a></li>
            <li className="footer-item"><a className="footer-link" href="/blog">➤ Blog</a></li>
            <li className="footer-item"><a className="footer-link" href="/contact">➤ Contact Us</a></li>
            <li className="footer-item"><a className="footer-link" href="/experts">➤ Experts</a></li>
            <li className="footer-item"><a className="footer-link" href="/careers">➤ Careers</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h3 className="footer-heading">SERVICES</h3>
          <ul className="footer-list">
            <li className="footer-item">➤ Digital Transformation</li>
            <li className="footer-item">➤ Business Intelligence</li>
            <li className="footer-item">➤ Analytics and Data Science</li>
            <li className="footer-item">➤ Cybersecurity</li>
            <li className="footer-item">➤ AI & Emerging Technology</li>
            <li className="footer-item">➤ Customer Analytics</li>
            <li className="footer-item">➤ Data Management & Mining</li>
            <li className="footer-item">➤ Innovation & Data Architects</li>
            <li className="footer-item">➤ IT Compliance & Governance</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-heading">FEATURES</h3>
          <ul className="footer-list">
            <li className="footer-item">➤ AI and Cybersecurity</li>
            <li className="footer-item">➤ AI and Healthcare</li>
            <li className="footer-item">➤ SAP MM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footerp">© 2025 VENTURES VELOCITY. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook">
            <i className="footer-icon fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Twitter">
            <i className="footer-icon fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="YouTube">
            <i className="footer-icon fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
