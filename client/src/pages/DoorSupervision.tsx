import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import doorSupervisionImage from '../assets/optimized/door-supervision.jpg';
import { Helmet } from 'react-helmet';

const DoorSupervision: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Door Supervision Services | Professional Security Personnel | Fortis Secured</title>
        <meta name="description" content="Expert SIA-licensed door supervisors in Yorkshire & Greater Manchester. Professional venue security, crowd management, and access control. 24/7 availability, competitive rates. Trusted by leading venues for over 5 years." />
        <meta name="keywords" content="door supervision, door security, venue security, crowd management, Yorkshire security, Manchester security, SIA licensed, access control, professional security, nightclub security, pub security, bar security" />
        <link rel="canonical" href="https://www.fortissecured.co.uk/services/door-supervision" />
        
        {/* Mobile-specific meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#1a1a1a" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Door Supervision Services | Professional Security Personnel" />
        <meta property="og:description" content="Expert SIA-licensed door supervisors in Yorkshire & Greater Manchester. Professional venue security and crowd management available 24/7." />
        <meta property="og:image" content={doorSupervisionImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fortissecured.co.uk/services/door-supervision" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Door Supervision Services | Fortis Secured" />
        <meta name="twitter:description" content="Expert SIA-licensed door supervisors in Yorkshire & Greater Manchester. Professional venue security and crowd management." />
        <meta name="twitter:image" content={doorSupervisionImage} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SecurityService",
              "name": "Fortis Secured Door Supervision",
              "image": "${doorSupervisionImage}",
              "description": "Professional door supervision services with trained security personnel for access control and crowd management",
              "@id": "https://www.fortissecured.co.uk/services/door-supervision",
              "url": "https://www.fortissecured.co.uk/services/door-supervision",
              "telephone": "07762853255",
              "priceRange": "££",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Leeds",
                  "containedIn": "Yorkshire"
                },
                {
                  "@type": "City",
                  "name": "Manchester",
                  "containedIn": "Greater Manchester"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Leeds",
                "addressRegion": "Yorkshire",
                "postalCode": "Your Postal Code",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "53.7947",
                "longitude": "-1.5462"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/Fortissecured",
                "https://www.linkedin.com/company/fortis-security-group",
                "https://www.instagram.com/fortis_security_/"
              ]
            }
          `}
        </script>
        
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.fortissecured.co.uk"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.fortissecured.co.uk/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Door Supervision",
                  "item": "https://www.fortissecured.co.uk/services/door-supervision"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <main className="service-page" role="main" aria-labelledby="page-title">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li aria-current="page">Door Supervision</li>
          </ol>
        </nav>
        <div 
          className="service-hero" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(42, 53, 70, 0.8), rgba(42, 53, 70, 0.7)), url(${doorSupervisionImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          role="banner"
          aria-label="Door Supervision Services Banner"
        >
          <h1 id="page-title">Door Supervisors</h1>
          <p>Professional security personnel trained in access control and crowd management</p>
        </div>
        
        <div className="service-content">
          <section className="service-overview" aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            <p>At Fortis Security, we take pride in providing exceptional door supervision services. We distinguish ourselves through our commitment to excellence, reliability, and ongoing improvement.</p>
          </section>

          <section className="service-features" aria-labelledby="features-title">
            <h2 id="features-title">Key Features</h2>
            <div className="features-grid" role="list" aria-label="Service features">
              <article className="feature-card" role="listitem">
                <h3>Customised Security Planning</h3>
                <p>We develop tailored security strategies for each client, considering venue requirements, peak times, and potential risks. This customised approach ensures adequate security while maintaining a welcoming atmosphere.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Venue Integration</h3>
                <p>Our door supervisors work seamlessly with your staff and systems, enhancing operations while maintaining professional boundaries and clear communication.</p>
              </article>
              <article className="feature-card" role="listitem">
                <h3>Professional Image</h3>
                <p>All our door supervisors are professionally uniform and maintain a neat appearance, enhancing your establishment's image while providing authoritative security.</p>
              </article>
            </div>
          </section>

          <section className="service-benefits" aria-labelledby="benefits-title">
            <h2 id="benefits-title">Benefits</h2>
            <ul role="list" aria-label="Service benefits">
              <li role="listitem">Enhanced Patron Safety and Confidence</li>
              <li role="listitem">Enhanced Security</li>
              <li role="listitem">Improved Professional Reputation</li>
              <li role="listitem">Cost-Effective Risk Management</li>
              <li role="listitem">Increased Operational Efficiency</li>
              <li role="listitem">Greater Peace of Mind</li>
              <li role="listitem">Compliance with Licensing Requirements</li>
              <li role="listitem">Professional and Courteous Customer Service</li>
            </ul>
          </section>

          <section className="service-faq" aria-labelledby="faq-title">
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <article className="faq-item">
                <h3>What qualifications do your door supervisors have?</h3>
                <p>All our door supervisors are SIA licensed and undergo regular training in conflict management, first aid, and customer service. They also receive specific venue training to ensure they meet both legal requirements and our high standards.</p>
              </article>
              <article className="faq-item">
                <h3>Do you provide door supervision for all types of venues?</h3>
                <p>Yes, we provide door supervision services for various venues including nightclubs, bars, pubs, restaurants, hotels, and special events. Each service is tailored to the specific needs and requirements of your venue.</p>
              </article>
              <article className="faq-item">
                <h3>What areas do you cover?</h3>
                <p>We provide door supervision services throughout Yorkshire and Greater Manchester, with dedicated teams available 24/7 in both regions.</p>
              </article>
              <article className="faq-item">
                <h3>How quickly can you start providing door supervision services?</h3>
                <p>We can typically begin service within 24-48 hours of contract agreement for emergency situations. For standard contracts, we recommend a lead time of 1-2 weeks to ensure optimal service setup and staff familiarization with your venue.</p>
              </article>
            </div>
          </section>

          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "What qualifications do your door supervisors have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All our door supervisors are SIA licensed and undergo regular training in conflict management, first aid, and customer service. They also receive specific venue training to ensure they meet both legal requirements and our high standards."
                  }
                }, {
                  "@type": "Question",
                  "name": "Do you provide door supervision for all types of venues?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide door supervision services for various venues including nightclubs, bars, pubs, restaurants, hotels, and special events. Each service is tailored to the specific needs and requirements of your venue."
                  }
                }, {
                  "@type": "Question",
                  "name": "What areas do you cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide door supervision services throughout Yorkshire and Greater Manchester, with dedicated teams available 24/7 in both regions."
                  }
                }, {
                  "@type": "Question",
                  "name": "How quickly can you start providing door supervision services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We can typically begin service within 24-48 hours of contract agreement for emergency situations. For standard contracts, we recommend a lead time of 1-2 weeks to ensure optimal service setup and staff familiarization with your venue."
                  }
                }]
              }
            `}
          </script>

          <section className="service-cta" aria-labelledby="cta-title">
            <h2 id="cta-title">Ready to Enhance Your Venue Security?</h2>
            <p>Contact us today to discuss your door supervision requirements.</p>
            <Link 
              to="/#contact" 
              className="cta-button"
              role="button"
              aria-label="Contact us about door supervision services"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>

      {/* No-JavaScript Fallback Content */}
      <noscript>
        <div className="noscript-content">
          <h1>Door Supervision Services - Fortis Secured</h1>
          <p>We provide professional door supervision services in Yorkshire and Greater Manchester. Our SIA-licensed security personnel are trained in access control and crowd management.</p>
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

export default DoorSupervision; 