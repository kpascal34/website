import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import riskAssessmentImage from '../assets/optimized/risk-assessment.jpg';
import { Helmet } from 'react-helmet';

const RiskAssessment: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Security Risk Assessment Services | Professional Security Audit | Fortis Secured</title>
        <meta name="description" content="Expert security risk assessment services in Yorkshire and Greater Manchester. Comprehensive security audits, threat analysis, and customised protection strategies for businesses. Professional vulnerability assessments." />
        <meta name="keywords" content="risk assessment, security audit, threat analysis, vulnerability assessment, Yorkshire security, Manchester security, security consulting, protection strategy, security planning" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Security Risk Assessment Services | Fortis Secured" />
        <meta property="og:description" content="Expert security risk assessment services in Yorkshire and Greater Manchester. Comprehensive security audits and customised protection strategies." />
        <meta property="og:image" content={riskAssessmentImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Security Risk Assessment Services | Fortis Secured" />
        <meta name="twitter:description" content="Expert security risk assessment and audit services in Yorkshire and Greater Manchester." />
        <meta name="twitter:image" content={riskAssessmentImage} />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Security Risk Assessment Services",
              "provider": {
                "@type": "SecurityService",
                "name": "Fortis Secured",
                "description": "Professional security services provider in Yorkshire and Greater Manchester",
                "areaServed": ["Yorkshire", "Greater Manchester"],
                "hasCredential": "SIA Licensed",
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "serviceType": "ConsultingService",
                  "availabilityStarts": "00:00",
                  "availabilityEnds": "23:59",
                  "serviceUrl": "https://fortissecured.co.uk"
                }
              },
              "description": "Professional security risk assessment services including threat analysis, vulnerability assessment, and customised protection strategies",
              "areaServed": ["Yorkshire", "Greater Manchester"],
              "serviceType": "Security Consulting",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "areaServed": ["Yorkshire", "Greater Manchester"]
              },
              "additionalType": "ConsultingService",
              "serviceOutput": {
                "@type": "Thing",
                "name": "Security Assessment Report",
                "description": "Comprehensive security analysis including threat assessment, vulnerability identification, and recommended protection measures"
              }
            }
          `}
        </script>
      </Helmet>
      
      <main className="service-page" role="main" aria-labelledby="page-title">
        <div 
          className="service-hero" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(42, 53, 70, 0.8), rgba(42, 53, 70, 0.7)), url(${riskAssessmentImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          role="banner"
          aria-label="Risk Assessment Services Banner"
        >
          <h1 id="page-title">Risk Assessment</h1>
          <p>Comprehensive security assessments and customised protection strategies</p>
        </div>

        <div className="service-content">
          <section className="service-overview" aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            <p>At Fortis Security, our Risk Assessment service offers comprehensive evaluations to identify vulnerabilities and develop strong protection strategies. We analyse your security needs from all angles to create practical solutions safeguarding your assets, personnel, and operations.</p>
          </section>

          <section className="service-features" aria-labelledby="features-title">
            <h2 id="features-title">Key Features</h2>
            <div className="features-grid" role="list" aria-label="Service features">
              <article className="feature-card" role="listitem">
                <h3>Advanced Threat Analysis</h3>
                <p>Our security professionals conduct in-depth assessments of potential threats and vulnerabilities to your business or property. We consider physical and operational security, provide a comprehensive view of your situation, and use advanced methodologies to identify key security challenges.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Comprehensive Security Audit</h3>
                <p>We thoroughly review your security measures, assessing physical security, technology, procedures, and personnel practices. This assessment identifies areas for improvement and opportunities to enhance security.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Customised Security Solutions</h3>
                <p>We create customised security strategies based on our assessment findings, tailored to your specific needs, operational requirements, budget, and risk tolerance. Each solution ensures maximum security effectiveness while maintaining operational efficiency.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Strategic Implementation Planning</h3>
                <p>We provide step-by-step guidance for implementing security improvements, including timelines, resource needs, and milestones. This structured approach ensures smooth integration with minimal disruption to your operations.</p>
              </article>
            </div>
          </section>

          <section className="service-benefits" aria-labelledby="benefits-title">
            <h2 id="benefits-title">Benefits</h2>
            <ul role="list" aria-label="Service benefits">
              <li role="listitem">Proactive Risk Management</li>
              <li role="listitem">Cost-Effective Security Investment</li>
              <li role="listitem">Enhanced Protection Framework</li>
              <li role="listitem">Regulatory Compliance Assurance</li>
              <li role="listitem">Stakeholder Confidence</li>
              <li role="listitem">Expert Security Consultation</li>
            </ul>
          </section>

          <section className="service-process" aria-labelledby="process-title">
            <h2 id="process-title">Our Assessment Process</h2>
            <p>Our structured approach to risk assessment ensures thorough coverage and practical outcomes:</p>
            <ol role="list" aria-label="Assessment process steps">
              <li role="listitem">Initial Consultation and Scope Definition</li>
              <li role="listitem">Comprehensive Site Analysis and Documentation</li>
              <li role="listitem">Threat and Vulnerability Assessment</li>
              <li role="listitem">Security Control Evaluation</li>
              <li role="listitem">Risk Analysis and Prioritisation</li>
              <li role="listitem">Solution Development and Recommendations</li>
              <li role="listitem">Implementation Planning and Support</li>
              <li role="listitem">Follow-up Review and Adjustments</li>
            </ol>
          </section>

          <section className="service-cta" aria-labelledby="cta-title">
            <h2 id="cta-title">Ready for a Comprehensive Security Assessment?</h2>
            <p>Contact us to schedule your risk assessment consultation.</p>
            <Link 
              to="/#contact" 
              className="cta-button"
              role="button"
              aria-label="Contact us about risk assessment services"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </main>

      {/* No-JavaScript Fallback Content */}
      <noscript>
        <div className="noscript-content">
          <h1>Risk Assessment Services - Fortis Secured</h1>
          <p>We provide professional security risk assessment services in Yorkshire and Greater Manchester. Our expert team conducts comprehensive security audits and develops customised protection strategies.</p>
          <p>To learn more about our services or to schedule a consultation, please contact us:</p>
          <ul>
            <li>Phone: [Your Phone Number]</li>
            <li>Email: info@fortissecured.co.uk</li>
          </ul>
        </div>
      </noscript>
    </>
  );
};

export default RiskAssessment; 