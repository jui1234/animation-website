import SEO from '../components/SEO';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "React SEO Website",
    "url": "https://yourwebsite.com",
    "logo": "https://yourwebsite.com/logo.png",
    "description": "We specialize in creating modern React applications with advanced SEO optimization",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about our company and our expertise in React development and SEO optimization. We're passionate about creating modern web solutions."
        keywords="about us, react developers, seo experts, web development, company"
        url="/about"
        structuredData={structuredData}
      />
      
      <div className="container" style={{ padding: '3rem 0' }}>
        <h1>About Our Company</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
          We are a team of passionate developers and SEO experts dedicated to creating modern, 
          fast, and search-engine-optimized React applications.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h2>Our Mission</h2>
            <p>
              To deliver exceptional React applications that not only look great and perform well, 
              but also rank highly in search engines through proper SEO implementation.
            </p>
          </div>
          
          <div>
            <h2>Our Expertise</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>React Development</li>
              <li>SEO Optimization</li>
              <li>Performance Tuning</li>
              <li>Mobile Responsiveness</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <h2>Why We're Different</h2>
          <p>
            Unlike traditional web development agencies, we focus specifically on React applications 
            with built-in SEO optimization. Every component we build is designed with both user experience 
            and search engine visibility in mind.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
