import SEO from '../components/SEO';

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "React SEO Development Services",
    "description": "Professional React development with SEO optimization services",
    "provider": {
      "@type": "Organization",
      "name": "React SEO Website"
    },
    "serviceType": "Web Development",
    "areaServed": "Worldwide",
    "offers": [
      {
        "@type": "Offer",
        "name": "React Development",
        "description": "Custom React application development"
      },
      {
        "@type": "Offer", 
        "name": "SEO Optimization",
        "description": "Search engine optimization for React apps"
      },
      {
        "@type": "Offer",
        "name": "Performance Optimization", 
        "description": "Speed and performance optimization"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Our Services"
        description="Discover our comprehensive React development and SEO optimization services. From custom React apps to performance tuning and search engine optimization."
        keywords="react development services, seo services, web development, performance optimization, custom react apps"
        url="/services"
        structuredData={structuredData}
      />
      
      <div className="container" style={{ padding: '3rem 0' }}>
        <h1>Our Services</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#666' }}>
          We offer comprehensive React development and SEO optimization services to help your business succeed online.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>React Development</h2>
            <p>Custom React applications built with modern best practices and optimized for performance.</p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Single Page Applications (SPA)</li>
              <li>Component-based Architecture</li>
              <li>State Management</li>
              <li>API Integration</li>
            </ul>
          </div>
          
          <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>SEO Optimization</h2>
            <p>Comprehensive SEO strategies to improve your website's search engine rankings.</p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Meta Tags Optimization</li>
              <li>Structured Data Implementation</li>
              <li>Site Speed Optimization</li>
              <li>Mobile-First Design</li>
            </ul>
          </div>
          
          <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>Performance Tuning</h2>
            <p>Optimize your React application for maximum speed and user experience.</p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Code Splitting</li>
              <li>Lazy Loading</li>
              <li>Bundle Optimization</li>
              <li>Caching Strategies</li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>Ready to Get Started?</h2>
          <p style={{ marginBottom: '2rem' }}>
            Contact us today to discuss your React development and SEO needs.
          </p>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Services;
