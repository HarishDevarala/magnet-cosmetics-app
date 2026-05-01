import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="section-padding">
      <div className="container grid-2">
        <div>
          <div className="section-title text-left">
            <h2 style={{ textAlign: 'left' }}>Get in <span>Touch</span></h2>
            <p style={{ margin: '0' }}>Have a question about our products or need beauty advice? We're here to help.</p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <Phone style={{ color: 'var(--rose-gold)' }} />
              <div>
                <h4 style={{ marginBottom: '4px' }}>Phone</h4>
                <p style={{ color: 'var(--text-muted)' }}>+91 70096 97009</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <Mail style={{ color: 'var(--rose-gold)' }} />
              <div>
                <h4 style={{ marginBottom: '4px' }}>Email</h4>
                <p style={{ color: 'var(--text-muted)' }}>hello@magnetcosmetics.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <MapPin style={{ color: 'var(--rose-gold)' }} />
              <div>
                <h4 style={{ marginBottom: '4px' }}>Store Address</h4>
                <p style={{ color: 'var(--text-muted)' }}>Klassic Heights, Magunta Layout, Nellore</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '40px' }}>
          <h3 style={{ marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>Send a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', width: '100%' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', width: '100%' }} />
            <textarea placeholder="Your Message" rows="5" style={{ padding: '14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', width: '100%', resize: 'vertical' }}></textarea>
            <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
