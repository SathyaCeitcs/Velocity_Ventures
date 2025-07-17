import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const location = useLocation();

  const services = [
    {
      id: 0,
      title: "Digital Solutions Design & Development",
      description: "We build and implement scalable digital products, platforms, and systems tailored to your business goals.",
      features: [
        "Custom Software Development",
        "Platform Architecture & Design",
        "API Development & Integration",
        "Database Design & Optimization",
        "Mobile & Web Applications",
        "E-commerce Solutions"
      ],
      icon: "fas fa-code",
      color: "#005F7B"
    },
    {
      id: 1,
      title: "Agile Coaching & Transformation",
      description: "We embed agility into your teams, processes, and leadership, ensuring your digital initiatives are sustainable and adaptable.",
      features: [
        "Agile Team Coaching",
        "Process Optimization",
        "Leadership Training",
        "Cultural Transformation",
        "Scrum & Kanban Implementation",
        "Continuous Improvement"
      ],
      icon: "fas fa-users",
      color: "#08314A"
    },
    {
      id: 2,
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and DevOps practices that accelerate your digital transformation journey.",
      features: [
        "Cloud Migration Strategy",
        "AWS/Azure/GCP Implementation",
        "DevOps Pipeline Setup",
        "Container Orchestration",
        "Monitoring & Analytics",
        "Security & Compliance"
      ],
      icon: "fas fa-cloud",
      color: "#00A0A9"
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that automate processes, enhance decision-making, and create competitive advantages.",
      features: [
        "AI Strategy & Roadmap",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Integration"
      ],
      icon: "fas fa-brain",
      color: "#7C3AED"
    },
    {
      id: 4,
      title: "End-to-End Delivery",
      description: "We don't just hand over a product—we ensure your teams are equipped to support, enhance, and evolve with it.",
      features: [
        "Project Management",
        "Quality Assurance",
        "Team Training",
        "Documentation",
        "Support & Maintenance",
        "Continuous Enhancement"
      ],
      icon: "fas fa-rocket",
      color: "#DC2626"
    }
  ];

  useEffect(() => {
    // Check for service parameter in URL
    const urlParams = new URLSearchParams(location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam !== null) {
      const serviceIndex = parseInt(serviceParam);
      if (serviceIndex >= 0 && serviceIndex < services.length) {
        setActiveService(serviceIndex);
        
        // Scroll to the services section after a short delay
        setTimeout(() => {
          const servicesSection = document.querySelector('.services-offer');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location.search]);

  useEffect(() => {
    // Scroll Animation Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add delay based on element index for staggered animations
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 100);
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
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
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
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-subtitle">
              Comprehensive digital solutions and agile transformation services 
              designed to propel your business into the future
            </p>
            <div className="services-hero-stats">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="services-offer animate-on-scroll">
        <div className="container">
          <h2 className="section-title animate-on-scroll">What We Offer</h2>
          <p className="section-subtitle animate-on-scroll">
            Our comprehensive suite of services covers every aspect of your digital transformation journey
          </p>
          
          <div className="services-interactive animate-on-scroll-scale">
            <div className="services-tabs">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`service-tab ${activeService === index ? 'active' : ''} animate-on-scroll-left`}
                  onClick={() => setActiveService(index)}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <i className={service.icon}></i>
                  <span>{service.title}</span>
                </button>
              ))}
            </div>
            
            <div className="services-content animate-on-scroll-right">
              <div className="service-detail">
                <div className="service-detail-header">
                  <div className="service-icon" style={{ backgroundColor: services[activeService].color }}>
                    <i className={services[activeService].icon}></i>
                  </div>
                  <div className="service-header-text">
                    <h3>{services[activeService].title}</h3>
                    <p>{services[activeService].description}</p>
                  </div>
                </div>
                
                <div className="service-features">
                  <h4>Key Features & Capabilities:</h4>
                  <div className="features-grid">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack animate-on-scroll">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Our Technology Stack</h2>
          <p className="section-subtitle animate-on-scroll">
            We leverage cutting-edge technologies to deliver robust and scalable solutions
          </p>
          
          <div className="tech-categories">
            <div className="tech-category animate-on-scroll-left">
              <div className="tech-category-header">
                <i className="fas fa-laptop-code"></i>
                <h3>Frontend Technologies</h3>
              </div>
              <div className="tech-items">
                <div className="tech-item">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-vuejs"></i>
                  <span>Vue.js</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-angular"></i>
                  <span>Angular</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-js"></i>
                  <span>TypeScript</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-html5"></i>
                  <span>HTML5</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-css3"></i>
                  <span>CSS3</span>
                </div>
              </div>
            </div>
            
            <div className="tech-category animate-on-scroll-right">
              <div className="tech-category-header">
                <i className="fas fa-server"></i>
                <h3>Backend Technologies</h3>
              </div>
              <div className="tech-items">
                <div className="tech-item">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-java"></i>
                  <span>Java</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-microsoft"></i>
                  <span>.NET</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-database"></i>
                  <span>MongoDB</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-database"></i>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            
            <div className="tech-category animate-on-scroll-left">
              <div className="tech-category-header">
                <i className="fas fa-cloud"></i>
                <h3>Cloud & DevOps</h3>
              </div>
              <div className="tech-items">
                <div className="tech-item">
                  <i className="fab fa-aws"></i>
                  <span>AWS</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-microsoft"></i>
                  <span>Azure</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-google"></i>
                  <span>Google Cloud</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-docker"></i>
                  <span>Docker</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-dharmachakra"></i>
                  <span>Kubernetes</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-jenkins"></i>
                  <span>Jenkins</span>
                </div>
              </div>
            </div>
            
            <div className="tech-category animate-on-scroll-right">
              <div className="tech-category-header">
                <i className="fas fa-robot"></i>
                <h3>AI & Data Analytics</h3>
              </div>
              <div className="tech-items">
                <div className="tech-item">
                  <i className="fas fa-brain"></i>
                  <span>TensorFlow</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-fire"></i>
                  <span>PyTorch</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-microchip"></i>
                  <span>OpenAI</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Apache Spark</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-chart-bar"></i>
                  <span>Power BI</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-table"></i>
                  <span>Tableau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process animate-on-scroll">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Our Process</h2>
          <p className="section-subtitle animate-on-scroll">
            A proven methodology that ensures successful project delivery and lasting results
          </p>
          
          <div className="process-timeline">
            <div className="process-step animate-on-scroll-left">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>Discovery & Analysis</h3>
                <p>We begin by understanding your business goals, challenges, and existing infrastructure to create a comprehensive strategy.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll-right">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>Design & Planning</h3>
                <p>Our experts design scalable solutions and create detailed project roadmaps with clear milestones and deliverables.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll-left">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Development & Implementation</h3>
                <p>Using agile methodologies, we build and implement your solution with regular feedback loops and quality assurance.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll-right">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3>Testing & Deployment</h3>
                <p>Rigorous testing ensures your solution meets all requirements before seamless deployment to production environments.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll-left">
              <div className="process-number">5</div>
              <div className="process-content">
                <h3>Support & Evolution</h3>
                <p>We provide ongoing support and help your teams adapt and enhance the solution as your business grows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta animate-on-scroll">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title animate-on-scroll">Ready to Build the Future of Your Business?</h2>
            <p className="cta-description animate-on-scroll">
              Let's co-create a digital and agile solution tailored to your unique needs and challenges. 
              Our expert team is ready to transform your vision into reality.
            </p>
            <div className="cta-buttons animate-on-scroll-scale">
              <a href="/contact" className="cta-btn primary">Start Your Project</a>
              <a href="/about" className="cta-btn secondary">Learn More About Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
