import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mannedGuardingImage from '../assets/optimized/manned-guarding.jpg';
import { Helmet } from 'react-helmet';

const MannedSecurity: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Manned Security Services | Professional Static Guarding | Fortis Secured</title>
        <meta name="description" content="Professional manned and static guarding services in Yorkshire and Greater Manchester. SIA-licensed security personnel providing 24/7 protection for your premises. Comprehensive security solutions." />
        <meta name="keywords" content="manned security, static guarding, security officers, premises security, Yorkshire security, Manchester security, SIA licensed, 24/7 security, professional security" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Manned Security Services | Fortis Secured" />
        <meta property="og:description" content="Professional manned and static guarding services in Yorkshire and Greater Manchester. SIA-licensed security personnel providing 24/7 protection." />
        <meta property="og:image" content={mannedGuardingImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manned Security Services | Fortis Secured" />
        <meta name="twitter:description" content="Professional manned and static guarding services in Yorkshire and Greater Manchester. SIA-licensed security personnel." />
        <meta name="twitter:image" content={mannedGuardingImage} />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Manned Security Services",
              "provider": {
                "@type": "SecurityService",
                "name": "Fortis Secured",
                "description": "Professional security services provider in Yorkshire and Greater Manchester",
                "areaServed": ["Yorkshire", "Greater Manchester"],
                "hasCredential": "SIA Licensed",
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "serviceType": "Emergency Service",
                  "availabilityStarts": "00:00",
                  "availabilityEnds": "23:59",
                  "serviceUrl": "https://fortissecured.co.uk"
                }
              },
              "description": "Professional manned and static guarding services with trained security personnel for 24/7 premises protection",
              "areaServed": ["Yorkshire", "Greater Manchester"],
              "serviceType": "Manned Security",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "areaServed": ["Yorkshire", "Greater Manchester"]
              }
            }
          `}
        </script>
      </Helmet>
      
      <main className="service-page" role="main" aria-labelledby="page-title">
        <div 
          className="service-hero" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(42, 53, 70, 0.8), rgba(42, 53, 70, 0.7)), url(${mannedGuardingImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          role="banner"
          aria-label="Manned Security Services Banner"
        >
          <h1 id="page-title">Manned and Static Guarding Services</h1>
          <p>Setting high standards in professional security solutions</p>
        </div>
        
        <div className="service-content">
          <section className="service-overview" aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            <p>At Fortis Security, we set a high standard for manned and static guarding services. We focus on professionalism, training, and reliability to provide excellent security solutions.</p>
          </section>

          <section className="service-features" aria-labelledby="features-title">
            <h2 id="features-title">Key Features</h2>
            <div className="features-grid" role="list" aria-label="Service features">
              <article className="feature-card" role="listitem">
                <h3>Comprehensive Coverage</h3>
                <p>Our static guards stay alert by working from strategically positioned posts and performing regular patrols. We use advanced monitoring systems and keep detailed logs of all activities and incidents to ensure no security breach goes unnoticed.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Professional Personnel</h3>
                <p>All security officers go through thorough vetting and receive extensive training that exceeds industry standards. Our guards wear professional uniforms and maintain high presentation standards, reflecting the quality of our service.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Flexible Deployment</h3>
                <p>We provide security solutions that can adjust to your needs, whether you need 24/7 coverage or security for specific hours. Our team can work with your existing security setup or create new protocols.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Advanced Communication Systems</h3>
                <p>Our guards use modern communication devices to respond quickly to any security situation. Regular check-ins and real-time reports keep everyone informed about the security status and any incidents.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Custom Security Protocols</h3>
                <p>After careful site assessments, we create security procedures that fit your specific needs. These include managing access control, screening visitors, responding to emergencies, and conducting regular security audits.</p>
              </article>
            </div>
          </section>

          <section className="service-benefits" aria-labelledby="benefits-title">
            <h2 id="benefits-title">Benefits</h2>
            <ul role="list" aria-label="Service benefits">
              <li role="listitem">Enhanced Security Presence</li>
              <li role="listitem">Risk Mitigation</li>
              <li role="listitem">Operational Support</li>
              <li role="listitem">Cost Effectiveness</li>
              <li role="listitem">Customised Reporting</li>
              <li role="listitem">Peace of Mind</li>
            </ul>
          </section>

          <section className="service-cta" aria-labelledby="cta-title">
            <h2 id="cta-title">Ready to Enhance Your Security?</h2>
            <p>Contact us to discuss your manned guarding requirements.</p>
            <Link 
              to="/#contact" 
              className="cta-button"
              role="button"
              aria-label="Contact us about manned security services"
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
          <h1>Manned Security Services - Fortis Secured</h1>
          <p>We provide professional manned and static guarding services in Yorkshire and Greater Manchester. Our SIA-licensed security personnel are available 24/7 to protect your premises.</p>
          <p>To learn more about our services or to request a quote, please contact us:</p>
          <ul>
            <li>Phone: [Your Phone Number]</li>
            <li>Email: info@fortissecured.co.uk</li>
          </ul>
        </div>
      </noscript>
    </>
  );
};

export default MannedSecurity;