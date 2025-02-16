 // ... existing imports ...

const ServicesPage = () => {
    return (
      <div className="services-page">
        {/* ... service cards ... */}
        
        <section className="cta-section">
          <div className="cta-content-wrapper">
            <h2>Secure Your Operations</h2>
            <div className="cta-button-container">
              <Link to="/contact" className="cta-button">
                Start Security Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  };