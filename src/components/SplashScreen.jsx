import { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('in'); // 'in' | 'stay' | 'out'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('stay'), 400);
    const t2 = setTimeout(() => setPhase('out'), 2800);
    const t3 = setTimeout(() => onComplete(), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className={`splash-screen phase-${phase}`}>
      {/* Floating petals */}
      <div className="petal petal-1">🌸</div>
      <div className="petal petal-2">✨</div>
      <div className="petal petal-3">💄</div>
      <div className="petal petal-4">🌹</div>
      <div className="petal petal-5">✦</div>
      <div className="petal petal-6">💫</div>

      {/* Center content */}
      <div className="splash-content">
        <div className="splash-icon-ring">
          <div className="splash-icon-inner">M</div>
        </div>
        <div className="splash-brand">
          <span className="splash-brand-name">MAGNET</span>
          <span className="splash-brand-sub">COSMETICS · NELLORE</span>
        </div>
        <div className="splash-tagline">
          <span className="splash-line">Where Beauty</span>
          <span className="splash-line italic">Meets Elegance</span>
        </div>
        <div className="splash-dots">
          <span></span><span></span><span></span>
        </div>
      </div>

      {/* Bottom shimmer bar */}
      <div className="splash-shimmer-bar"></div>
    </div>
  );
};

export default SplashScreen;
