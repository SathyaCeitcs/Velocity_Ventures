import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/home.css";

import video from "../assets/images/home.mp4";
import digitalIcon from "../assets/images/digital.png";
import cloudIcon from "../assets/images/cloud.png";
import aiIcon from "../assets/images/home.png";
import devopsIcon from "../assets/images/devops.png";
import missionImage from "../assets/images/ai.png";

// Images for tabbed section
import digitalImg from "../assets/images/digital.webp";
import devopsImg from "../assets/images/devops.png";
import cloudImg from "../assets/images/cloud.jpg";
import aiImg from "../assets/images/ai.webp";

import ChatbotPopup from "../components/ChatbotPopup";

// Services Data
const services = [
  { title: "Digital Transformation", icon: digitalIcon },
  { title: "Cloud", icon: cloudIcon },
  { title: "Artificial Intelligence", icon: aiIcon },
  { title: "DevOps", icon: devopsIcon },
];

// Tech Support Tabs Data
const tabData = [
  {
    title: "Digital Transformation",
    image: digitalImg,
    description: `
Digital Transformation at Velocity Ventures LLC means helping businesses rethink how they work using modern technology. 

It’s not just about tools — it’s about creating smarter ways to deliver value, automate tasks, and improve how teams, systems, and customers connect. We focus on building long-term, flexible systems that can grow with your business.`,
  },
  {
    title: "DevOps",
    image: devopsImg,
    description: `
DevOps helps teams deliver faster, work better together, and fix issues early. 

At Velocity Ventures LLC, we bring a DevOps mindset that breaks down silos between development and operations. This means quicker releases, better software quality, and more confidence with every update.`,
  },
  {
    title: "Cloud Solutions",
    image: cloudImg,
    description: `
Cloud technology allows businesses to scale easily, save costs, and stay secure.

We help teams move to the cloud in a way that fits their goals — whether it's speeding up development, enabling remote work, or supporting global growth. Our approach makes cloud simple, strategic, and reliable.`,
  },
  {
    title: "Artificial Intelligence",
    image: aiImg,
    description: `
AI helps turn data into smart actions. From better decisions to faster responses, it changes how businesses operate.

At Velocity Ventures LLC, we use AI to improve how teams work, automate manual tasks, and create intelligent systems that adapt and learn. The focus is always on value, not just technology.`,
  },
];



const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* === Hero Section === */}
      <section className="corporate-hero-section">
        <div className="video-overlay" />
        <video className="corporate-hero-video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="corporate-hero-text-content">
          <h1 className="corporate-hero-heading animate-fade-in">
            Welcome to <span className="highlight">Velocity Ventures LLC</span>
          </h1>
          <p className="corporate-hero-description animate-fade-in-delay">
            Your Partner for Digital Solutions and Agile Transformation!
            <br /><br />
            At Velocity Ventures LLC, we’re not just agile coaches or digital consultants –<br />
            we’re your strategic partner for building digital solutions that work and last.
          </p>
          <div className="corporate-hero-buttons">
            <a href="/services" className="corporate-hero-button primary">Our Services</a>
            <a href="/contact" className="corporate-hero-button secondary">Contact Us</a>
          </div>
        </div>
      </section>

      {/* === Services Section === */}
      <section className="services-wrapper">
        <h2 className="services-title">Our Core Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="service-text">{service.title}</div>
              <div className="service-icon-circle">
                <img src={service.icon} alt={service.title} className="service-icon" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Mission Section === */}
      <section className="mission-wrapper">
        <div className="glow-circle" />
        <motion.div
          className="mission-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <img src={missionImage} alt="Mission" className="animated-image" />
          </div>
        </motion.div>

        <motion.div
          className="mission-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-desc">
            We help organizations like yours navigate the complexities of the digital age by delivering
            <span className="highlighted-text"> innovative digital solutions</span> powered by agile practices.
            From custom platforms to scalable cloud solutions, we combine
            <span className="highlighted-text"> deep tech expertise</span> with agile coaching to deliver real results.
          </p>
          <a href="/about">
            <motion.button whileHover={{ scale: 1.05 }} className="mission-explore-btn">
              Explore More
            </motion.button>
          </a>

        </motion.div>
      </section>

      {/* === Tech Support Tab Section === */}
      <section className="tab-section">
        <h2 className="tab-section-heading">Explore Our Tech Expertise</h2>

        <div className="tab-buttons">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tab-content-wrapper">
          <img src={tabData[activeTab].image} alt={tabData[activeTab].title} className="tab-image" />

          <div className="tab-description-box">
            <span className="tab-label">Our Services</span>
            <p className="tab-description">{tabData[activeTab].description}</p>
            <a href="/services" className="tab-learn-more">Learn More</a>
          </div>
        </div>
      </section>

      {/* === What We Offer Section (Professional Upgraded Cards) === */}
      <section className="what-we-offer-section">
        <motion.div
          className="offer-container"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">What We Offer</h2>
          <div className="offer-card-grid">
            {[
              {
                title: "Digital Solutions Design & Development",
                desc: "We build and implement scalable digital products, platforms, and systems tailored to your business goals.",
              },
              {
                title: "Agile Coaching & Transformation",
                desc: "We embed agility into your teams, processes, and leadership, ensuring your digital initiatives are sustainable and adaptable.",
              },
              {
                title: "End-to-End Delivery",
                desc: "We don’t just hand over a product—we ensure your teams are equipped to support, enhance, and evolve with it.",
              },
            ].map((item, index) => (
              <motion.div
                className="offer-card upgraded"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="why-choose-section">
        <motion.div
          className="choose-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Why Choose Velocity Ventures LLC?</h2>
          <div className="choose-line" />
          <p className="choose-description">
            Because digital solutions are only as strong as the people and processes behind them.
            We bring a unique blend of <strong>technology expertise</strong> and an <strong>agile mindset</strong>,
            ensuring your digital transformation journey is both <strong>innovative</strong> and <strong>sustainable</strong>.
          </p>
        </motion.div>
      </section>

      {/* === Call to Action Section === */}
      <section className="cta-section">
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-heading">Ready to Build the Future of Your Business?</h2>
          <p className="cta-subtext">
            Let’s co-create a <strong>digital and agile solution</strong> tailored to your needs.
          </p>
          <a href="/contact" className="cta-button">Let’s Get Started</a>
        </motion.div>
      </section>

      <ChatbotPopup />

    </>
  );


};

export default HeroSection;
