const OffersPage = () => {
  return (
    <div className="section-padding">
      <div className="container text-center">
        <div className="section-title">
          <h2>Special <span>Offers</span></h2>
          <p>Exclusive deals for our Nellore customers.</p>
        </div>
        <div className="grid-2">
          <div className="glass-card" style={{ padding: '40px', background: 'linear-gradient(135deg, var(--rose-gold), var(--gold))', color: 'white' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Buy 2 Get 1 Free</h3>
            <p style={{ marginBottom: '24px' }}>On all Mamaearth and Sugar Cosmetics products.</p>
            <button className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Shop Now</button>
          </div>
          <div className="glass-card" style={{ padding: '40px', background: 'linear-gradient(135deg, #111, #333)', color: 'var(--gold)' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Bridal Combo 20% OFF</h3>
            <p style={{ marginBottom: '24px', color: 'white' }}>Book your bridal makeup kit consultation today.</p>
            <button className="btn-primary">View Combo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
