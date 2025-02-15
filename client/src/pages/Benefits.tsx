import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Benefits.css';

const Benefits: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const benefits = [
    {
      id: 'safety',
      title: 'Enhanced Safety & Peace of Mind',
      description: 'Experience complete security confidence with our comprehensive protection services.',
      points: [
        'Round-the-clock surveillance and monitoring',
        'Rapid response to security incidents',
        'Professionally trained and SIA licensed security personnel',
        'Regular security audits and risk assessments',
        'Proactive threat prevention and management'
      ]
    },
    {
      id: 'roi',
      title: 'Cost Efficiency & ROI',
      description: 'Optimize your security investment with our cost-effective outsourcing solutions.',
      points: [
        'Reduced internal security management costs',
        'Flexible staffing based on your needs',
        'Elimination of training and equipment expenses',
        'Lower insurance premiums through enhanced security',
        'Prevention of costly security incidents'
      ]
    },
    {
      id: 'customization',
      title: 'Customized Security Solutions',
      description: 'Tailored security services designed to meet your specific requirements.',
      points: [
        'Comprehensive site-specific security assessments',
        'Customized security protocols and procedures',
        'Scalable services for events and peak periods',
        'Integration with existing security measures',
        'Regular review and optimization of security plans'
      ]
    },
    {
      id: 'response',
      title: 'Rapid Incident Response',
      description: 'Swift and professional handling of security situations to minimize risk.',
      points: [
        'Immediate response to security breaches',
        'Coordinated emergency response protocols',
        'Direct communication with emergency services',
        'Detailed incident reporting and analysis',
        'Post-incident review and security enhancement'
      ]
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance',
      description: 'Stay compliant with all relevant security regulations and standards.',
      points: [
        'Full compliance with SIA regulations',
        'Regular updates on security legislation',
        'Adherence to health and safety standards',
        'Comprehensive documentation and reporting',
        'Regular compliance audits and updates'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Benefits of Choosing Fortis Secured | Professional Security Services</title>
        <meta name="description" content="Discover the advantages of partnering with Fortis Secured for your security needs. Enhanced safety, cost efficiency, customized solutions, rapid response, and full compliance." />
        <meta name="keywords" content="security benefits, cost effective security, customized security, rapid response, security compliance, Yorkshire security, Manchester security" />
      </Helmet>

      <main className="benefits-page">
        <section className="benefits-hero">
          <div className="benefits-hero-content">
            <h1>Why Choose Fortis Secured</h1>
            <p>Discover the advantages of partnering with Yorkshire and Greater Manchester's premier security services provider</p>
          </div>
        </section>

        <section className="benefits-overview">
          <div className="benefits-container">
            {benefits.map((benefit) => (
              <article key={benefit.id} className="benefit-card" id={benefit.id}>
                <h2>{benefit.title}</h2>
                <p className="benefit-description">{benefit.description}</p>
                <ul className="benefit-points">
                  {benefit.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-cta">
          <div className="cta-content">
            <h2>Ready to Experience These Benefits?</h2>
            <p>Contact us today for a free consultation and discover how Fortis Secured can enhance your security infrastructure.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get Free Consultation</Link>
              <Link to="/services" className="cta-button secondary">Explore Our Services</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Benefits; 