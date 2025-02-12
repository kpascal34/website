import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import eventSecurityImage from '../assets/event-security.jpg';

const EventSecurity: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="service-page">
      <div className="service-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(42, 53, 70, 0.8), rgba(42, 53, 70, 0.7)), url(${eventSecurityImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h1>Event Security Services</h1>
        <p>Professional security solutions for events of all sizes</p>
      </div>
      
      <div className="service-content">
        <section className="service-overview">
          <h2>Overview</h2>
          <p>At Fortis Security, we prioritise the safety and well-being of attendees, staff, and assets at events. Our tailored event security services ensure smooth operations and peace of mind, positioning us as industry leaders.</p>
        </section>

        <section className="service-features">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Event Planning and Risk Assessment</h3>
              <p>We begin security planning early by conducting venue assessments and creating tailored strategies that comply with regulations. Our planning includes coordinating with local authorities, assessing risks, and implementing preventive measures for potential security challenges.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Crowd Control</h3>
              <p>We specialise in managing crowd flow and density at events. Using advanced monitoring techniques and strategic control measures, we prevent overcrowding, ensure optimal attendee distribution, and enhance safety throughout the event.</p>
            </div>
            <div className="feature-card">
              <h3>VIP Protection Services</h3>
              <p>Our specialised VIP security teams offer discreet yet effective protection for high-profile guests. We provide close protection officers, secure transportation arrangements, and dedicated security protocols tailored to each VIP's specific needs. We prioritise ensuring your VIP guests receive professional protection while maintaining their privacy and comfort.</p>
            </div>
            <div className="feature-card">
              <h3>Emergency Management and Response</h3>
              <p>We have established emergency response protocols with local authorities. Our trained teams handle evacuation, medical emergencies, and crisis communication, enabling us to respond quickly and ensure the safety of all attendees.</p>
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Seamless Event Operations</li>
            <li>Enhanced Attendee Experience</li>
            <li>Comprehensive Risk Management</li>
            <li>Professional Incident Response</li>
            <li>Cost-Effective Security Solutions</li>
            <li>Future Event Optimisation</li>
          </ul>
        </section>

        <section className="service-cta">
          <h2>Planning an Event?</h2>
          <p>Contact us to discuss your event security requirements.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </section>
      </div>
    </div>
  );
};

export default EventSecurity; 