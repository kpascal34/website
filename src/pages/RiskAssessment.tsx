import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import riskAssessmentImage from '../assets/risk-assessment.jpg';

const RiskAssessment: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="service-page">
      <div className="service-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(42, 53, 70, 0.8), rgba(42, 53, 70, 0.7)), url(${riskAssessmentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h1>Risk Assessment</h1>
        <p>Comprehensive security assessments and customised protection strategies</p>
      </div>

      <div className="service-content">
        <section className="service-overview">
          <h2>Overview</h2>
          <p>At Fortis Security, our Risk Assessment service offers comprehensive evaluations to identify vulnerabilities and develop strong protection strategies. We analyse your security needs from all angles to create practical solutions safeguarding your assets, personnel, and operations.</p>
        </section>

        <section className="service-features">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Advanced Threat Analysis</h3>
              <p>Our security professionals conduct in-depth assessments of potential threats and vulnerabilities to your business or property. We consider physical and operational security, provide a comprehensive view of your situation, and use advanced methodologies to identify key security challenges.</p>
            </div>
            <div className="feature-card">
              <h3>Comprehensive Security Audit</h3>
              <p>We thoroughly review your security measures, assessing physical security, technology, procedures, and personnel practices. This assessment identifies areas for improvement and opportunities to enhance security.</p>
            </div>
            <div className="feature-card">
              <h3>Customised Security Solutions</h3>
              <p>We create customised security strategies based on our assessment findings, tailored to your specific needs, operational requirements, budget, and risk tolerance. Each solution ensures maximum security effectiveness while maintaining operational efficiency.</p>
            </div>
            <div className="feature-card">
              <h3>Strategic Implementation Planning</h3>
              <p>We provide step-by-step guidance for implementing security improvements, including timelines, resource needs, and milestones. This structured approach ensures smooth integration with minimal disruption to your operations.</p>
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Proactive Risk Management</li>
            <li>Cost-Effective Security Investment</li>
            <li>Enhanced Protection Framework</li>
            <li>Regulatory Compliance Assurance</li>
            <li>Stakeholder Confidence</li>
            <li>Expert Security Consultation</li>
          </ul>
        </section>

        <section className="service-process">
          <h2>Our Assessment Process</h2>
          <p>Our structured approach to risk assessment ensures thorough coverage and practical outcomes:</p>
          <ol>
            <li>Initial Consultation and Scope Definition</li>
            <li>Comprehensive Site Analysis and Documentation</li>
            <li>Threat and Vulnerability Assessment</li>
            <li>Security Control Evaluation</li>
            <li>Risk Analysis and Prioritisation</li>
            <li>Solution Development and Recommendations</li>
            <li>Implementation Planning and Support</li>
            <li>Follow-up Review and Adjustments</li>
          </ol>
        </section>

        <section className="service-cta">
          <h2>Ready for a Comprehensive Security Assessment?</h2>
          <p>Contact us to schedule your risk assessment consultation.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </section>
      </div>
    </div>
  );
};

export default RiskAssessment; 