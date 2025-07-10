import React from "react";
import "../styles/home.css";
import video from "../assets/images/home.mp4";

const HeroSection = () => {
  return (
    <section className="corporate-hero-section">
      <video className="corporate-hero-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="corporate-hero-text-content">
        <h1 className="corporate-hero-heading">
          Welcome to Velocity Ventures LLC
        </h1>
        <p className="corporate-hero-description">
          Your Partner for Digital Solutions and Agile Transformation! <br /><br />
          At Velocity Ventures LLC, we’re not just agile coaches or digital consultants –<br />
          we’re your strategic partner for building digital solutions that work and last.
        </p>
        <div className="corporate-hero-buttons">
          <a href="/services" className="corporate-hero-button">
            Our Services
          </a>
          <a href="/contact" className="corporate-hero-button outline">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
