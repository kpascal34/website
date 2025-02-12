import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mannedGuardingImage from '../assets/manned-guarding.jpg';

const MannedSecurity: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="service-page">
      <div className="service-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(42, 53, 70, 0.8), rgba(42, 53, 70, 0.7)), url(${mannedGuardingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h1>Manned and Static Guarding Services</h1>
        <p>Setting high standards in professional security solutions</p>
      </div>
      
      <div className="service-content">
        <section className="service-overview">
          <h2>Overview</h2>
          <p>At Fortis Security, we set a high standard for manned and static guarding services. We focus on professionalism, training, and reliability to provide excellent security solutions.</p>
        </section>

        <section className="service-features">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Comprehensive Coverage</h3>
              <p>Our static guards stay alert by working from strategically positioned posts and performing regular patrols. We use advanced monitoring systems and keep detailed logs of all activities and incidents to ensure no security breach goes unnoticed.</p>
            </div>
            <div className="feature-card">
              <h3>Professional Personnel</h3>
              <p>All security officers go through thorough vetting and receive extensive training that exceeds industry standards. Our guards wear professional uniforms and maintain high presentation standards, reflecting the quality of our service.</p>
            </div>
            <div className="feature-card">
              <h3>Flexible Deployment</h3>
              <p>We provide security solutions that can adjust to your needs, whether you need 24/7 coverage or security for specific hours. Our team can work with your existing security setup or create new protocols.</p>
            </div>
            <div className="feature-card">
              <h3>Advanced Communication Systems</h3>
              <p>Our guards use modern communication devices to respond quickly to any security situation. Regular check-ins and real-time reports keep everyone informed about the security status and any incidents.</p>
            </div>
            <div className="feature-card">
              <h3>Custom Security Protocols</h3>
              <p>After careful site assessments, we create security procedures that fit your specific needs. These include managing access control, screening visitors, responding to emergencies, and conducting regular security audits.</p>
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Enhanced Security Presence</li>
            <li>Risk Mitigation</li>
            <li>Operational Support</li>
            <li>Cost Effectiveness</li>
            <li>Customised Reporting</li>
            <li>Peace of Mind</li>
          </ul>
        </section>

        <section className="service-cta">
          <h2>Ready to Enhance Your Security?</h2>
          <p>Contact us to discuss your manned guarding requirements.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </section>
      </div>
    </div>
  );
};

export default MannedSecurity;