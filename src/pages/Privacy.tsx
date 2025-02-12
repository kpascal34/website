import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="service-page">
      <div className="service-content">
        <section className="privacy-policy">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: 12-02-25</p>

          <section>
            <h2>Introduction</h2>
            <p>Fortis Security ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our security services, visit our website, or interact with our business in any way.</p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name, address, and contact details</li>
              <li>Employment information and professional credentials</li>
              <li>Payment and billing information</li>
              <li>Emergency contact information</li>
              <li>Identification documents</li>
              <li>Security clearance information where applicable</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP addresses and device information</li>
              <li>Browser type and settings</li>
              <li>Website usage data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3>Security Footage and Access Logs</h3>
            <p>In providing our security services, we may collect:</p>
            <ul>
              <li>CCTV footage from client premises</li>
              <li>Access control logs</li>
              <li>Incident reports</li>
              <li>Security check records</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <h3>Service Delivery</h3>
            <ul>
              <li>Providing and managing security services</li>
              <li>Processing and fulfilling service requests</li>
              <li>Maintaining client and visitor logs</li>
              <li>Managing emergency responses</li>
              <li>Conducting security assessments</li>
            </ul>

            <h3>Business Operations</h3>
            <ul>
              <li>Processing payments and managing accounts</li>
              <li>Communicating about services and updates</li>
              <li>Improving our services</li>
              <li>Training and quality assurance</li>
              <li>Compliance with legal obligations</li>
            </ul>

            <h3>Security and Safety</h3>
            <ul>
              <li>Protecting client premises and assets</li>
              <li>Preventing and investigating security incidents</li>
              <li>Maintaining safety and security records</li>
              <li>Emergency response coordination</li>
            </ul>
          </section>

          <section>
            <h2>Information Sharing and Disclosure</h2>
            <h3>Service Providers</h3>
            <p>We may share information with trusted third-party service providers who assist us in operating our business, conducting our services, or servicing you.</p>

            <h3>Legal Requirements</h3>
            <p>We may disclose information:</p>
            <ul>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights or property</li>
              <li>To prevent or investigate possible wrongdoing</li>
              <li>To protect personal safety or public safety</li>
            </ul>

            <h3>Business Transfers</h3>
            <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>We implement appropriate technical and organisational measures to maintain the security of your information, including:</p>
            <ul>
              <li>Physical security controls</li>
              <li>Encryption of digital data</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          <section>
            <h2>Your Rights and Choices</h2>
            <p>You have certain rights regarding your personal information:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information (where applicable)</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
          </section>

          <section>
            <h2>Cookie Policy</h2>
            <p>Our website uses cookies and similar tracking technologies to improve user experience and analyse website traffic. You can control cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2>International Data Transfers</h2>
            <p>We may transfer your information to countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.</p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last Updated" date.</p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>If you have questions or concerns about this Privacy Policy or our privacy practices, please get in touch with us at:</p>
            <p>Fortis Security<br />
            Email: privacy@fortissecurity.com<br />
            Phone: 07762853255</p>
          </section>

          <section>
            <h2>Regulatory Compliance</h2>
            <p>This Privacy Policy is designed to comply with applicable data protection laws and regulations, including:</p>
            <ul>
              <li>General Data Protection Regulation (GDPR)</li>
              <li>Data Protection Act 2018</li>
              <li>Privacy and Electronic Communications Regulations (PECR)</li>
            </ul>
          </section>

          <section>
            <h2>Additional Information</h2>
            <h3>Retention Periods</h3>
            <p>We retain personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy unless a more extended retention period is required by law.</p>

            <h3>Security Incident Response</h3>
            <p>If a security incident affects your personal information, we will notify you and the relevant authorities as required by applicable law.</p>

            <h3>Complaints</h3>
            <p>If you believe we have not handled your personal information according to applicable law, you can complain to a supervisory authority.</p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 