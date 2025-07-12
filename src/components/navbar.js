import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/quoteForm.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleForm = () => setShowForm(!showForm);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [showForm]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <div className="navbar-left">
            <div className="logo-text">Velocity Ventures</div>
          </div>

          <nav className={`navbar-center nav-links ${menuOpen ? "open" : ""}`}>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </nav>

          <div className="navbar-right">
            <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            <button className="quote-btn" onClick={toggleForm}>Get Quote</button>
          </div>
        </div>
      </header>

      {/* Quote Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={toggleForm}>
          <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleForm}>×</button>
            <h2>Get Quote</h2>
            <p>Tell us about your project and we'll provide a custom quote.</p>
            <form className="quote-form" onSubmit={(e) => { e.preventDefault(); alert("Quote Submitted!"); }}>
              <label>Name *</label>
              <input type="text" placeholder="Your full name" required />
              <label>Email *</label>
              <input type="email" placeholder="your@email.com" required />
              <label>Company</label>
              <input type="text" placeholder="Your company name" />
              <label>Project Type</label>
              <input type="text" placeholder="Web app, AI integration, etc." />
              <label>Project Details *</label>
              <textarea placeholder="Tell us about your project requirements..." required></textarea>
              <div className="form-actions">
                <button type="submit" className="submit-btn">Send Quote Request</button>
                <button type="button" className="cancel-btn" onClick={toggleForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
