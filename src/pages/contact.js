import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/contact.css'; // External stylesheet

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {showToast && (
        <div className="custom-toast">
          Thank you for contacting <strong>VELOCITY VENTURES</strong>. We will get back to you soon.
        </div>
      )}

      <section className="contact-hero-simple">
        <h1 className="contact-main-heading">
          <span className="highlight">Contact</span> Us
        </h1>
        <p className="contact-subtext">Your Strategic Partner for Digital Solutions and Agile Transformation</p>
        <div className="underline" />
      </section>

      <section className="contact-content">
        <div className="contact-left" data-aos="fade-right">
          <p>Drop us a line! We'd love to hear from you.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />

            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>

        <div className="contact-right" data-aos="fade-left">
          <h2>Our Location - USA</h2>
          <iframe
            title="USA Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.8013898328353!2d-86.1267373!3d39.5965789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b55c9fc26f4fd%3A0x26e3c25849ed8bce!2s1371%20Bobwhite%20Ct%2C%20Greenwood%2C%20IN%2046143%2C%20USA!5e0!3m2!1sen!2sin!4v1717490951225!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="fast"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
