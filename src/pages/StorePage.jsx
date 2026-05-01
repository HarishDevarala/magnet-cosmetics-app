const StorePage = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Visit Our <span>Store</span></h2>
          <p>Experience the best of beauty in Magunta Layout, Nellore.</p>
        </div>
        <div className="grid-2">
          <div>
            <div style={{ background: '#f5f5f5', height: '400px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--text-muted)' }}>[Google Maps Embed]</p>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '28px', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Store Details</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
              Ground Floor, Klassic Heights,<br />
              Opp. Prakriti Restaurant, Srihari Nagar,<br />
              Magunta Layout, Nellore - 524003
            </p>
            
            <h4 style={{ marginBottom: '12px' }}>Opening Hours</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', lineHeight: '2' }}>
              <li>Monday - Sunday: 10:00 AM - 10:00 PM</li>
            </ul>

            <div style={{ marginTop: '40px' }}>
              <button className="btn-primary" style={{ marginRight: '16px' }}>Get Directions</button>
              <button className="btn-secondary">Call Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
