import SEO from '../components/SEO';

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Get in touch with our React development and SEO experts",
    "mainEntity": {
      "@type": "Organization",
      "name": "React SEO Website",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "contact@yourwebsite.com",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "City",
        "addressRegion": "State", 
        "postalCode": "12345",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with our React development and SEO experts. We're here to help you build amazing web applications with proper SEO optimization."
        keywords="contact us, react developers, seo experts, web development consultation, get quote"
        url="/contact"
        structuredData={structuredData}
      />
      
      <div className="container" style={{ padding: '3rem 0' }}>
        <h1>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#666' }}>
          Ready to start your React project with SEO optimization? Get in touch with our experts today.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h2>Get In Touch</h2>
            <div style={{ marginBottom: '2rem' }}>
              <h3>Email</h3>
              <p>contact@yourwebsite.com</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3>Address</h3>
              <p>
                123 Main Street<br />
                City, State 12345<br />
                United States
              </p>
            </div>
          </div>
          
          <div>
            <h2>Send Us a Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Name *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }} 
                />
              </div>
              
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Email *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }} 
                />
              </div>
              
              <div>
                <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }} 
                />
              </div>
              
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              
              <button type="submit" className="btn" style={{ alignSelf: 'flex-start' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
