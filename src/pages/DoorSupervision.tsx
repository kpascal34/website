import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import doorSupervisionImage from '../assets/optimized/door-supervision.jpg';

const DoorSupervision: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <div className="service-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(42, 53, 70, 0.8), rgba(42, 53, 70, 0.7)), url(${doorSupervisionImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h1>Door Supervisors</h1>
        <p>Professional security personnel trained in access control and crowd management</p>
      </div>
      
      <div className="service-content">
        <section className="service-overview">
          <h2>Overview</h2>
          <p>At Fortis Security, we take pride in providing exceptional door supervision services. We distinguish ourselves through our commitment to excellence, reliability, and ongoing improvement.</p>
        </section>

        <section className="service-features">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Customised Security Planning</h3>
              <p>We develop tailored security strategies for each client, considering venue requirements, peak times, and potential risks. This customised approach ensures adequate security while maintaining a welcoming atmosphere.</p>
            </div>
            <div className="feature-card">
              <h3>Venue Integration</h3>
              <p>Our door supervisors work seamlessly with your staff and systems, enhancing operations while maintaining professional boundaries and clear communication.</p>
            </div>
            <div className="feature-card">
              <h3>Professional Image</h3>
              <p>All our door supervisors are professionally uniform and maintain a neat appearance, enhancing your establishment's image while providing authoritative security.</p>
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Enhanced Patron Safety and Confidence</li>
            <li>Enhanced Security</li>
            <li>Improved Professional Reputation</li>
            <li>Cost-Effective Risk Management</li>
            <li>Increased Operational Efficiency</li>
            <li>Greater Peace of Mind</li>
            <li>Compliance with Licensing Requirements</li>
            <li>Professional and Courteous Customer Service</li>
          </ul>
        </section>

        <section className="service-cta">
          <h2>Ready to Enhance Your Venue Security?</h2>
          <p>Contact us today to discuss your door supervision requirements.</p>
          <Link to="/#contact" className="cta-button">Contact Us</Link>
        </section>
      </div>
    </div>
  );
};

export default DoorSupervision; 