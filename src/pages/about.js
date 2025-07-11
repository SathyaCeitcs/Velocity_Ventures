import React, { useEffect } from "react";
import "../styles/about.css";

const About = () => {
  useEffect(() => {
    // Scroll Animation Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Special handling for progress bars
          if (entry.target.classList.contains('mission-card')) {
            setTimeout(() => {
              const progressFills = entry.target.querySelectorAll('.progress-fill');
              progressFills.forEach(fill => {
                fill.style.transform = 'scaleX(1)';
              });
            }, 500);
          }
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
    animateElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="stars-container">
          {/* Regular twinkling stars */}
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          {/* Large blinking stars */}
          <div className="star star-large"></div>
          <div className="star star-large"></div>
          <div className="star star-large"></div>
          <div className="star star-large"></div>
          <div className="star star-large"></div>
          {/* Moving stars */}
          <div className="star moving-star"></div>
          <div className="star moving-star"></div>
          <div className="star moving-star"></div>
          <div className="star moving-star"></div>
          <div className="star moving-star"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Velocity Ventures LLC</h1>
          <p className="about-hero-subtitle">
            Your Strategic Partner for Digital Solutions and Agile Transformation
          </p>
          <div className="about-hero-decoration"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission animate-on-scroll">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text animate-on-scroll-left">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-description">
                We help organizations like yours navigate the complexities of the digital age by 
                delivering innovative digital solutions powered by agile practices. From custom 
                software and platforms to scalable cloud solutions, we combine technology expertise 
                with agile coaching to drive real business results.
              </p>
              <div className="mission-highlights">
                <div className="highlight-item animate-on-scroll-left">
                  <div className="highlight-icon">🚀</div>
                  <div className="highlight-text">
                    <h3>Innovation-Driven</h3>
                    <p>Cutting-edge solutions that propel your business forward</p>
                  </div>
                </div>
                <div className="highlight-item animate-on-scroll-left">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-text">
                    <h3>Agile-First</h3>
                    <p>Flexible methodologies that adapt to your changing needs</p>
                  </div>
                </div>
                <div className="highlight-item animate-on-scroll-left">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-text">
                    <h3>Results-Focused</h3>
                    <p>Measurable outcomes that drive real business value</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-visual animate-on-scroll-right">
              <div className="mission-card animate-on-scroll-scale">
                <div className="mission-card-header">
                  <h3>Digital Excellence</h3>
                </div>
                <div className="mission-card-body">
                  <div className="progress-item">
                    <span>Cloud Solutions</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <span>AI Integration</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <span>DevOps</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <span>Digital Transformation</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '93%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values animate-on-scroll">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Why Choose Velocity Ventures LLC?</h2>
          <p className="values-subtitle animate-on-scroll">
            Because digital solutions are only as strong as the people and processes behind them.
          </p>
          <div className="values-grid">
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Technology Expertise</h3>
              <p>
                Deep technical knowledge across modern technologies including cloud platforms, 
                AI/ML, DevOps, and emerging digital solutions.
              </p>
            </div>
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Agile Mindset</h3>
              <p>
                We embed agility into teams, processes, and leadership, ensuring your digital 
                initiatives are sustainable and adaptable.
              </p>
            </div>
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Partnership Approach</h3>
              <p>
                We don't just deliver solutions – we ensure your teams are equipped to support, 
                enhance, and evolve with them.
              </p>
            </div>
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Proven Results</h3>
              <p>
                Track record of successful digital transformations that drive measurable 
                business outcomes and competitive advantages.
              </p>
            </div>
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud-First Strategy</h3>
              <p>
                Expertise in cloud architecture and migration, enabling scalable, secure, 
                and cost-effective digital infrastructure solutions.
              </p>
            </div>
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>AI & Innovation</h3>
              <p>
                Cutting-edge AI integration and intelligent automation to drive operational 
                efficiency and create competitive advantages.
              </p>
            </div>
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>DevOps Excellence</h3>
              <p>
                Streamlined development and deployment processes that accelerate time-to-market 
                while maintaining quality and reliability.
              </p>
            </div>
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Security & Compliance</h3>
              <p>
                Built-in security practices and compliance frameworks to protect your digital 
                assets and maintain regulatory standards.
              </p>
            </div>
            <div className="value-card animate-on-scroll-scale">
              <div className="value-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Continuous Improvement</h3>
              <p>
                Ongoing optimization and enhancement of your digital solutions to adapt to 
                changing market conditions and business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="about-approach animate-on-scroll">
        <div className="container">
          <div className="approach-content">
            <div className="approach-text animate-on-scroll">
              <h2 className="section-title">Our Approach</h2>
              <p className="approach-description">
                We bring a unique blend of technology expertise and agile mindset, ensuring that 
                your digital transformation journey is both innovative and sustainable.
              </p>
            </div>
            <div className="approach-steps">
              <div className="step-item animate-on-scroll-scale">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Assess & Strategy</h3>
                  <p>Understanding your current state and defining the digital transformation roadmap</p>
                </div>
              </div>
              <div className="step-item animate-on-scroll-scale">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Design & Build</h3>
                  <p>Creating scalable digital solutions tailored to your specific business needs</p>
                </div>
              </div>
              <div className="step-item animate-on-scroll-scale">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Deploy & Scale</h3>
                  <p>Implementing solutions with comprehensive testing and seamless integration</p>
                </div>
              </div>
              <div className="step-item animate-on-scroll-scale">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Support & Evolve</h3>
                  <p>Ensuring your teams can maintain and enhance the solutions over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta animate-on-scroll">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's co-create a digital and agile solution tailored to your unique needs and challenges.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">Start Your Journey</a>
              <a href="/services" className="cta-btn secondary">Explore Our Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
