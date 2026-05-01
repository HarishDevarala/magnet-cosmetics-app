const AboutPage = () => {
  return (
    <div className="section-padding">
      <div className="container grid-2 align-center">
        <div>
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Magnet Cosmetics Story" style={{ borderRadius: 'var(--radius-md)', width: '100%', boxShadow: 'var(--shadow-md)' }} />
        </div>
        <div>
          <h2 style={{ fontSize: '42px', fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>Our Story</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.8' }}>
            Founded with a vision to bring premium beauty products to Nellore, Magnet Cosmetics is your one-stop destination for genuine, high-quality cosmetics, skincare, and fragrances.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.8' }}>
            We believe that beauty should be accessible, which is why we curate products from the world's leading brands and offer expert advice to help you find exactly what you need.
          </p>
          <ul style={{ listStyle: 'none', lineHeight: '2.5', fontWeight: '500' }}>
            <li>✓ 100% Genuine Products</li>
            <li>✓ Expert Beauty Consultants</li>
            <li>✓ Trusted by 2300+ Customers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
