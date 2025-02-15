import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import eventSecurityImage from '../assets/optimized/event-security.jpg';
import { Helmet } from 'react-helmet';

const EventSecurity: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Event Security Services | Professional Event Protection | Fortis Secured</title>
        <meta name="description" content="Expert event security services in Yorkshire and Greater Manchester. SIA-licensed security personnel providing comprehensive protection for events of all sizes. Professional crowd management and VIP security." />
        <meta name="keywords" content="event security, crowd management, VIP protection, event safety, Yorkshire security, Manchester security, SIA licensed, crowd control, event protection" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Event Security Services | Fortis Secured" />
        <meta property="og:description" content="Expert event security services in Yorkshire and Greater Manchester. SIA-licensed security personnel providing comprehensive protection for events of all sizes." />
        <meta property="og:image" content={eventSecurityImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Event Security Services | Fortis Secured" />
        <meta name="twitter:description" content="Expert event security services in Yorkshire and Greater Manchester. Professional event protection and crowd management." />
        <meta name="twitter:image" content={eventSecurityImage} />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Event Security Services",
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
              "description": "Professional event security services with trained personnel for comprehensive event protection and crowd management",
              "areaServed": ["Yorkshire", "Greater Manchester"],
              "serviceType": "Event Security",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "areaServed": ["Yorkshire", "Greater Manchester"]
              },
              "additionalType": "SecurityService",
              "serviceOutput": {
                "@type": "Thing",
                "name": "Event Protection Services",
                "description": "Comprehensive security coverage for events including crowd management, access control, and VIP protection"
              }
            }
          `}
        </script>
      </Helmet>
      
      <main className="service-page" role="main" aria-labelledby="page-title">
        <div 
          className="service-hero" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(42, 53, 70, 0.8), rgba(42, 53, 70, 0.7)), url(${eventSecurityImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          role="banner"
          aria-label="Event Security Services Banner"
        >
          <h1 id="page-title">Event Security Services</h1>
          <p>Professional security solutions for events of all sizes</p>
        </div>
        
        <div className="service-content">
          <section className="service-overview" aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            <p>At Fortis Security, we prioritise the safety and well-being of attendees, staff, and assets at events. Our tailored event security services ensure smooth operations and peace of mind, positioning us as industry leaders.</p>
          </section>

          <section className="service-features" aria-labelledby="features-title">
            <h2 id="features-title">Key Features</h2>
            <div className="features-grid" role="list" aria-label="Service features">
              <article className="feature-card" role="listitem">
                <h3>Event Planning and Risk Assessment</h3>
                <p>We begin security planning early by conducting venue assessments and creating tailored strategies that comply with regulations. Our planning includes coordinating with local authorities, assessing risks, and implementing preventive measures for potential security challenges.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Expert Crowd Control</h3>
                <p>We specialise in managing crowd flow and density at events. Using advanced monitoring techniques and strategic control measures, we prevent overcrowding, ensure optimal attendee distribution, and enhance safety throughout the event.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>VIP Protection Services</h3>
                <p>Our specialised VIP security teams offer discreet yet effective protection for high-profile guests. We provide close protection officers, secure transportation arrangements, and dedicated security protocols tailored to each VIP's specific needs. We prioritise ensuring your VIP guests receive professional protection while maintaining their privacy and comfort.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Emergency Management and Response</h3>
                <p>We have established emergency response protocols with local authorities. Our trained teams handle evacuation, medical emergencies, and crisis communication, enabling us to respond quickly and ensure the safety of all attendees.</p>
              </article>
            </div>
          </section>

          <section className="service-benefits" aria-labelledby="benefits-title">
            <h2 id="benefits-title">Benefits</h2>
            <ul role="list" aria-label="Service benefits">
              <li role="listitem">Seamless Event Operations</li>
              <li role="listitem">Enhanced Attendee Experience</li>
              <li role="listitem">Comprehensive Risk Management</li>
              <li role="listitem">Professional Incident Response</li>
              <li role="listitem">Cost-Effective Security Solutions</li>
              <li role="listitem">Future Event Optimisation</li>
            </ul>
          </section>

          <section className="service-cta" aria-labelledby="cta-title">
            <h2 id="cta-title">Planning an Event?</h2>
            <p>Contact us to discuss your event security requirements.</p>
            <Link 
              to="/#contact" 
              className="cta-button"
              role="button"
              aria-label="Contact us about event security services"
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
          <h1>Event Security Services - Fortis Secured</h1>
          <p>We provide professional event security services in Yorkshire and Greater Manchester. Our SIA-licensed security personnel specialize in crowd management, VIP protection, and comprehensive event security.</p>
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

export default EventSecurity; 